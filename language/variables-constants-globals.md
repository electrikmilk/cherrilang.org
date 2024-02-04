---
title: Variables, Constants & Globals
layout: default
parent: Documentation
nav_order: 2
---

# Variables, Constants & Globals
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

Insert variables into a text value:

```ruby
@text = "value"
@inserted = "Value: {text}"
```

Get as...

```ruby
@deviceOS = "OS: {Device[OS]}"
```

Type coercion...

```ruby
@text = "five 5"
@number = "Number: {text.number}"
```

### Variable as a value

```ruby
@variable = nil
@ref = variable
```

Get as...

```ruby
@variable = nil
@getAs = variable[Name]
```

Type coercion...

```ruby
@variable: text
@type = variable.number
```

To learn more about variable value types, check the [value types](types#value-types) reference.

## Constants

```javascript
const immutable = 5
```

Constants are the implementation of Magic Variables as they cannot be modified. When referenced, the output of the action assigned to the constant is used (magic variable), instead of inserting a reference to a variable that the action output has been saved to.

```ruby
const immutable = 5
alert("{immutable}")

@mutable = 5
alert("{mutable}")
```

Constants can be used just like variables except that they cannot be redefined or appended to or the compiler will throw an error.

Array constants are not allowed as creating an array value involves adding to a variable, action outputs cannot be added to. Variable reference constants are also not allowed as the value of a variable can change.

**It is recommended to use constants when applicable as it will produce a smaller Shortcut.**

## Globals

All globals are implemented. Globals are case-sensitive.

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

The `Ask` global may be used for an action argument, but may not be used as an inline variable in text.

## Empty variables

You can declare a variable without a value:

```ruby
@emptyVar
@nilVar = nil
```

## Add to variables

Add to a variable using the standard `+=` syntax:

### Numbers

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

### Text

Append text to the end of an existing text variable using the following syntax:

```ruby
@text = "Existing text"
@text += "Additional text"
```

### Arrays

Declare an array and use the following syntax to add values to it:

```ruby
@var = [5, 6]
@var += "test"
@var += 5
@var += {"test": 5}
/* etc... */
```
