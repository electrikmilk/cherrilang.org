---
title: Functions
layout: default
parent: Documentation
nav_order: 12
---

# Functions
{: .no_toc }

Functions are an abstraction on top of your Shortcut that allows you to run actions separately from your main actions, multiple times, and optionally recurse and/or output a value.

This allows you to reduce duplicate action code and overall cut down on the total actions in your Shortcut if you have actions doing the same thing in multiple places.

This abstraction is injected at the top of your Shortcut. [The first comment is preserved](#prioritization-of-instructional-or-contact-comments).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Definition

### Defining a Function

Define your action, then reference the action to run the contents of the function, isolated from the rest of your Shortcut:

```ruby
#include 'actions/scripting'

function add(number op1, number op2) {
  const result = op1 + op2
  output("{result}")
}

add(2,2)
```

Keep in mind, if a function is used, the compiler will inject some actions at the top of your Shortcut to support this feature.

### Defining Arguments

You can define arguments for your function that you provide later when referencing it.

```ruby
function myAction(text message) {
    // ...
}
```

Read the [types](types) reference for all types you can use for arguments.

When calling your function, keep in mind that the arguments you use will be type-checked against your type definitions for each of your arguments.

### Optional

Add a `?` before the argument name to mark it as optional, meaning it is not required to be filled in. Otherwise, the compiler will complain if the argument is not filled in when the function is called.

```ruby
function myAction(text ?message) {
    // ...
}
```

### Literal

Add a `!` after the type of the argument name to mark it as requiring a literal value, for parameters that do not accept a variable value.

```ruby
function myAction(text! message) {
    // ...
}
```

### Default Value

You can optionally use an assignment operator to set a default value for the argument. The compiler will warn against using the default value for this argument, as that will make for a smaller shortcut.

```ruby
function myAction(text message = "Hello, World!") {
    // ...
}
```

## Function Behavior

### Returning a Value

This is not required, but if you would like to return a value from your function to a call and assign the reference to a variable, just like you would with a standard action.

Then, inside the body of your function, use the `output()` action to return a result.

```
function myFunc() {
  output("Hello!")
}

@result = myFunc()
```

### Output Type

You can define an output type for your function so that an error can be thrown if the output is used where that type is not expected.

```
function sum(number op1, number op2): number {
    // ...
}
```

### Output Type Coersion

Type coercion is be done at the action call level, where the output of the action will be put in a type casting action, such as a text or number action, and then assigned to the variable for the return variable, but only if there is one.

### Recursion

It is possible to call other functions within the body of a function. You can then use this for recursion, running the same function with an eventual breakpoint.

{: .warning }
Misuse of recursion can cause a Shortcut to infinitely loop.

```ruby
#include 'actions/scripting'

function fibonacci(number n): number {
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

Note that when the compiler reaches your first explicit comment action, if you are using a function, it will push that action to the top of the Shortcut instead of adding it after the injected functions abstraction has been added at the top.

This is primarily to still be able to add an instructional or contact comment at the top of a Shortcut while also using the functions abstraction.

```ruby
#include 'stdlib'

#include 'actions/scripting'
#include 'actions/text'
#include 'actions/web'

comment('Contact me: brandon@cherrilang.org')

runJS("console.log('Hello, World!')")
```

## How Do They Work?

The contents of functions run separately from your main code inside your Shortcut by using the **Run Shortcut** action and passing a **Dictionary** action containing data that will be detected by the injected Cherri code that contains each of the defined actions that are used in the Cherri code below it.

This is a part of the language that does not translate 1-1, but for the functionality it provides, it can be a powerful tool.

### Action Definition

The semantics of this may change over time, but it roughly translates to this in Cherri:

```ruby
#include 'actions/scripting'

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

It validates that the input we're receiving is a Cherri function call, then filters it down to which action is being called, then we have actions based on the action's definition that coerce the provided argument values from the input into their defined value types, then the injected function body is run.

At the end, just in case no output was defined in the function body that was called, we output nothing at the end of the action call list.

### Function Calls

Then, when you reference the function described `add(number, number)`

```ruby
#include 'actions/scripting'

function add(number op1, number op2) {
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
