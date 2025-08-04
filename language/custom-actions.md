---
title: Custom Actions
layout: default
parent: Documentation
nav_order: 12
---

# Custom Actions
{: .no_toc }

Custom actions are an abstraction on top of Shortcuts that allows you to run Cherri code separately from your main code, even multiple times, recurse within it, and maybe output a value.

You can define custom actions that can be called later in a Shortcut, in the same way as standard actions.

This allows you to not have to repeat yourself and cut down on the total actions in your Shortcut if you have actions doing the same thing in multiple places.

This uses an abstraction that is injected at the top of your Shortcut, [but don't worry, the first comment is preserved](#prioritization-of-instructional-or-contact-comments).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Definition

### Defining a custom action

Define your action, then reference the action to run the contents of the custom action, isolated from the rest of your Shortcut:

```
action add(number op1, number op2) {
  const result = op1 + op2
  output("{result}")
}

add(2,2)
```

Keep in mind, if a custom action is used, the compiler will inject some actions at the top of your Shortcut to support this feature.

### Defining arguments

You can define arguments for your custom action that you provide later when referencing it.

```
action myAction(text message) {
    // ...
}
```

Read the [types](types) reference for all types you can use for arguments.

When calling your custom action, keep in mind that the arguments you use will be type-checked against your type definitions for each of your arguments.

### Optional

Add a `?` before the argument name to mark it as optional, meaning it is not required to be filled in. Otherwise, the compiler will complain if the argument is not filled in when the custom action is called.

```
action myAction(text ?message) {
    // ...
}
```

### Literal

Add a `!` after the type of the argument name to mark it as requiring a literal value, for parameters that do not accept a variable value.

```
action myAction(text! message) {
    // ...
}
```

### Default Value

You can optionally use an assignment operator to set a default value for the argument. The compiler will warn against using the default value for this argument, as that will make for a smaller shortcut.

```
action myAction(text message = "Hello, World!") {
    // ...
}
```

## Action Behavior

### Returning a Value

This is not required, but if you would like to return a value from your custom action to a call of your custom action, assign the reference to your custom action to a variable just like you would a standard action.

Then, inside the body of your custom action, use the `output()` action to return a result.

```
action myCustomAction() {
  output("Hello!")
}

@result = myCustomAction()
```

### Output Type

You can define an output type for your custom action so that an error can be thrown if the output is used where that type is not expected.

```
action sum(number op1, number op2): number {
    // ...
}
```

### Output Type Coersion

Type coercion is be done at the action call level, where the output of the action will be put in a type casting action, such as a text or number action, and then assigned to the variable for the return variable, but only if there is one.

### Recursion

It is possible to call other custom actions within the body of a custom action. You can then use this for recursion, running the same custom action with an eventual breakpoint.

{: .warning }
Misuse of recursion can cause a Shortcut to infinitely loop.

```ruby
action fibonacci(number n): number {
    if n <= 1 {
        output("{n}")
    } else {
        const minusOne = n - 1
        const minusTwo = n - 2
        const fib1 = fibonacci(minusOne)
        const fib2 = fibonacci(minusTwo)
        const added = fib1 + fib2
        output("{added}")
    }
}

const output = fibonacci(7)
show("{output}") // 13
```

## Prioritization of Instructional or Contact Comments

Note that when the compiler reaches your first explicit comment action, if you are using a custom action, it will push that action to the top of the Shortcut instead of adding it after the injected custom actions abstraction has been added at the top.

This is primarily to still be able to add an instructional or contact comment at the top of a Shortcut while also using the custom actions abstraction.

```ruby
#include 'stdlib'

comment('Contact me: brandon@cherrilang.org')

runJS("console.log('Hello, World!')")
```

## How do they work?

The contents of these actions run separately from your main code inside your Shortcut by using the **Run Shortcut** action and passing a **Dictionary** action containing data that will be detected by the injected Cherri code that contains each of the defined actions that are used in the Cherri code below it.

This is a part of the language that does not translate 1-1, but for the functionality it provides, it can be a powerful tool.

### Action Definition

The semantics of this may change over time, but it roughly translates to this in Cherri:

```ruby
if ShortcutInput {
    const inputType = typeOf(ShortcutInput)
    if inputType == "Dictionary" {
        const input = getDictionary(ShortcutInput)
        const identifier = getValue(input, "cherri_functions")
        const valid = number(identifier)
        if valid == true {
            const function_name = getValue(input, "function")
            const function = "{function_name}"
            const args = getValue(input, "arguments")
            if function == "add" {
                const arg1 = getListItem(args, 0)
                const arg2 = getListItem(args, 1)
                const op1 = number(arg1)
                const op2 = number(arg2)
                const result = op1 + op2
                output("{result}")
            }
            output(nil)
        }
    }
}
```

The compiler will generate this syntax and inject it into the top of the resulting Shortcut.

It validates that the input we're receiving is a Cherri function call, then filters it down to which action is being called, then we have actions based on the action's definition that coerce the provided argument values from the input into their defined value types, then the injected custom action body is run.

At the end, just in case no output was defined in the custom action body that was called, we output nothing at the end of the action call list.

### Action Calls

Then, when you reference the action described `add(number, number)`

```ruby
action add(number op1, number op2) {
  const result = op1 + op2
  output("{result}")
}

add(2,2)
```

It will create tokens in the compiler for a **Dictionary** and a **Run Shortcut** action equivalent to this:

```ruby
const addCherriCall = {
    "cherri_functions": 1,
    "function": "add",
    "arguments": [2, 2]
}

runSelf(addCherriCall)
```
