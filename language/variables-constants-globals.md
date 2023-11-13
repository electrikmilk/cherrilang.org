---
title: Variables, Constants & Globals
layout: default
parent: Documentation
nav_order: 2
---

# Variables, Constants & Globals

Variables are initialized using the following syntax:

```ruby
@text = "value"
```

Insert variables into a string value:

```ruby
@inserted = "Value: {text}"
```

Get as...

```ruby
@inserted = "Value: {text[Get]}"
```

Type coercion...

```ruby
@inserted = "Value: {text.type}"
```

## Variable as a value

```ruby
@inserted = variable
```

Get as...

```ruby
@inserted = variable[Get]
```

Type coercion...

```ruby
@inserted = variable.type
```

## Constants

```javascript
const immutable = 5
```

Constants are the implementation of Magic Variables as they cannot be modified. When referenced, the output of the action assigned to the constant is used (magic variable), instead of inserting a reference to a variable that the action output has been saved to.

<div class="shortcut-result-image">
  <img src="https://github.com/electrikmilk/cherrilang.org/assets/4368524/a519b540-fba0-497f-b07e-4e2927110682" alt="Output"/>
</div>

Constants can be used just like variables except that they cannot be redefined or appended to or the compiler will throw an error.

Array or variable constants are not allowed as creating an array value involves adding to a variable, action outputs cannot be added to.

**It is recommended to use constants when applicable as it will produce a smaller Shortcut.**

## Globals

All globals are implemented. Globals are case-sensitive.

```ruby
@input = ShortcutInput
@date = CurrentDate
@clipboard = Clipboard
@device = Device
```

But you can also just inline a global in a string like other variables.

```ruby
@shortcutInput = "{ShortcutInput}"
```

The `Ask` global may be used for an action argument, but not as an inline string variable.

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
@string = "Existing text"
@string += "Additional text"
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
