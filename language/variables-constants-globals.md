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
@inserted = "Value: {text(type)}"
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

Constants are the implementation of Magic Variables as they cannot be modified. When referenced, the output of the action is used (magic variable), instead of inserting a reference to a variable that the action output has been saved to.

Array constants are not allowed as creating and appending to an array variable involves adding to a variable, action outputs cannot be added to.

Otherwise, constants can be used just like variables except that they cannot be redefined or appended to. An error will be thrown if you try to redefine or append to a constant.

It is recommended to use constants when applicable as it will produce a smaller Shortcut.

```javascript
const immutable = 5
```

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

## Types

### Text

```ruby
@text = "text"
@multi = "multi
line
text"
```

### Numbers

```ruby
@number = 42
@expression = 54 * {number} + (6 * 7)
```

### Action Variables

```ruby
@urls = url("https://apple.com","https://google.com")
@list = list("Item 1","Item 2","Item 3")
@email = emailAddress("test@test.org")
@phone = phoneNumber("(555) 555-5555")
@date = date("October 5, 2022")
@location = getCurrentLocation()
```

### Dictionaries

You can declare a dictionary using a valid JSON object.

```ruby
@dictionary = {
    "key1": "value",
    "key2": 5,
    "key3": true,
    "key4": [
        "item1",
        "item 2",
        "item3"
    ]
}
```

### Booleans

Booleans translate to a number value of 1 for true, and 0 for false.

```ruby
@boolVarTrue = true
@boolVarFalse = false
```

Boolean variables can be used in conditionals.

```ruby
if boolVarTrue == true {
    /* ... */
}
```

## Misc

You can declare a variable without a value:

```ruby
@emptyVar
```

Add to a variable using the standard `+=` syntax:

```ruby
@stringVar += "test"
```
