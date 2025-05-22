---
title: Variables, Constants & Globals
layout: default
parent: Documentation
nav_order: 4
---

# Variables, Constants, & Globals
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Variables

Initialize a variable using the syntax below. Variables work just like they do in Shortcuts. This creates a **Set Variable** action and assigns the value to a **Text** action containing "value".

```ruby
@identifier = "value"
```

Variables are not required to be assigned a value:

```
@identifier
```

### Inline Variables

```ruby
@text = "value"
@inserted = "Value: {text}"
```

### Get As

```ruby
@deviceOS = "OS: {Device['OS']}"

@variable = {"Name":"test"}
@getAs = variable['Name']
```

### Type Coersion

```ruby
@text = "five 5"
@number = "Number: {text.number}"
```

### Variable as a Value

```ruby
@variable = 5
@ref = variable
```

Check the [value types](types#value-types) reference to learn more about variable value types.

## Add to Variables

Add to a variable using the standard `+=` syntax:

### Number Value Modifiers

Increment, decrement, multiply, or divide an existing number variable using the following syntax:

```ruby
@i = 0

/* Add */
@i += 1

/* Subtract */
@i -= 1

/* Multiply */
@i *= 1

/* Divide */
@i /= 1
```

### Append Text

Append text to the end of an existing text variable using the following syntax:

```ruby
@text = "Existing text"
@text += "Additional text"
```

### Add to Array

Declare an array and use the following syntax to add values to it:

```ruby
@var = [5, 6]
@var += "test"
@var += 5
@var += {"test": 5}
/* etc... */
```

## Constants

```ruby
const immutable = 5
```

Constants are the implementation of Magic Variables, as they cannot be modified. When referenced, the output of the action assigned to the constant is used (magic variable) instead of inserting a reference to a variable to which the action output has been saved.

```ruby
const immutable = 5
alert("{immutable}")

@mutable = 5
alert("{mutable}")
```

Constants can be used just like variables, except that they cannot be redefined or appended to, or the compiler will throw an error.

Array constants are not allowed, as creating an array value involves adding to a variable, and action outputs cannot be added to. Variable reference constants are also not allowed, as the value of a variable can change.

**It is recommended to use constants when applicable, as it will produce a smaller Shortcut.**

## Globals

Globals are case-sensitive.

```ruby
@input = ShortcutInput
@date = CurrentDate
@clipboard = Clipboard
@device = Device
```

But you can also just inline a global in text like other variables.

```ruby
@shortcutInput = "{ShortcutInput}"
```

### Ask Each Time

The `Ask` global may be used for an action argument to prompt the user for input, but cannot be used as a variable value, as there is no criteria for a variable value in Shortcuts; it must be an action argument.

```ruby
wait(Ask)
```

## Empty Variables

You can declare a variable without a value:

```ruby
@emptyVar
@nilVar = nil
```
