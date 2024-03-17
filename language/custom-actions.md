---
title: Custom Actions
layout: default
parent: Documentation
nav_order: 12
---

# Custom Actions

You can define custom actions that can then be used later in a Shortcut the same way you would a standard action. This of course allows you to not have to repeat yourself and cut down on the total actions in your Shortcut.

These can contain variables, calls to other actions, etc. that you can then reference anywhere.

Custom actions have scope in a sense, as they are run inside your Shortcut using generated injected code at the top of the resulting Shortcut.

To define your action, use the following syntax:

```
action myCustomAction() {
  // do stuff...
}
```

Then reference the action to run the contents of the custom action.

```
myCustomAction()
```

## Defining arguments

You can define arguments for your custom action that you provide later when referencing it.

```
action add(number op1, number op2) {
  const result = op1 + op2
  output("{result}")
}

add(2,2)
```

Check the [types](types) reference for all of the types you can use for arguments.

When calling your custom action, keep in mind the arguments you use will be type-checked against your type definitions for each of your arguments.

## Returning a value

This is not required, but if you would like to return a value from your custom action to a call of your custom action, assign the reference to your custom action to a variable just like you would a standard action.

```
@result = myCustomAction()
```

Then inside the body of your custom action, use the `output()` action to return a result.

```
action myCustomAction() {
  output("Hello!")
}
```

## How do they work?

The contents of these actions run separately from your main code inside your Shortcut by using the **Run Shortcut** action and passing a **Dictionary** action containing data that will be detected by injected Cherri code that contains each of the defined actions that are used in the Cherri code below it.

This is a part of the language that does not translate 1-1, but for the functionality it provides it can be a powerful tool.

So this:

```
action add(number op1, number op2) {
  const result = op1 + op2
  output("{result}")
}
```

Roughly translates to this:

```
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
        }
    }
}
```

This is what the compiler will generate and inject into the top of the resulting Shortcut.

Then later, when you reference the action described `add(number, number)`

```
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
