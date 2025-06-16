---
title: Types
layout: default
parent: Documentation
nav_order: 5
---

# Types
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Value Types

### Text

```ruby
@variable = "text"
@text = "text {variable} \n"
```

Text literals support the interpolation of variables and escape characters.

**Standard escaped characters interpolated:**

- `\"` double quote
- `\n` new line
- `\t` tab
- `\\` backslash

For example:

```ruby
@multi = "multi\nline\ntext"
```

Multiline text is also supported, however:

```ruby
@multi = "multi
line
text"
```

### Raw Text

```ruby
@raw = 'i\'m text'
```

Raw text cancels out interpolation other than escaped single quotes. As a result, they compile much faster than standard text literals.

One caveat to raw text is that it is not allowed in Dictionaries or Arrays. This is because a dictionary or array must be a valid JSON object.

### Number

```ruby
@number = 42
```

### Float

```ruby
@float = 0.5
```

### Expression

Expressions are numeric values or variable references that are separated by any of the following operators:

- `+` Add
- `-` Subtract
- `*` Multiply
- `/` Divide

```ruby
@expression = 54 + (6 * 7)
@number = 42
@number = 54 * number + (6 * 7)
@expression = number + number
```

Only two operands will compile to a **Math** action:

```ruby
@expression = 54 + 6
```

### Boolean

Booleans translate to a number value of `1` for `true` and `0` for `false`.

```ruby
@boolVarTrue = true
@boolVarFalse = false
```

Boolean variables can be used in conditionals.

```ruby
@boolVarTrue = true
if boolVarTrue == true {
    /* ... */
}
```

### Dictionary

You can declare a dictionary using valid JSON syntax.

```ruby
/* Empty dictionaries */
@x: dictionary
@y = {}

@text = "text"
@dictionary = {
    "key1": "value {text}",
    "key2": 5,
    "key3": true,
    "key4": [
        "item1",
        "item 2",
        "item3"
    ]
}
```

You can access a dictionary value by key:

```ruby
@dictionary = {}

// allows for variable references
getValue(dictionary, "key")

// must be a raw string, so no variable references are allowed.
@value = dictionary['key']
```

### Array

An array is a variable, that has been or will be added to, to create a variable with multiple iterable values.

The contents of an array value must be valid JSON syntax.

```ruby
/* Empty arrays */
@x: array
@y = []

@int = 42
@array = [5, "test", {"test":5}, "{int}"]

/* Add a value to the array variable */
@array += "another test"
```

You can use the [`for`](control-flow#repeat-with-each) statement to iterate over the values contained in the array variable.

```ruby
@items = ["Item 1","Item 2"]
for item in items {
    /* ... */
}
```

You can easily append to an array using the `+=` syntax.

```ruby
@x: array
@x += 5
```

This adds the output of the **Number** action with a value of 5 to the array variable `x`.

So `x` now contains 1 item with a number value of `5`.

### Action Result

Actions have output types. View the [actions](/language/actions) documentation to check the output type of an action, or use the `--action=` argument in the CLI.

```ruby
@urls = url("https://apple.com","https://google.com")
@list = list("Item 1","Item 2","Item 3")
@email = emailAddress("test@test.org")
@phone = phoneNumber("(555) 555-5555")
@date = date("October 5, 2022")
@location = getCurrentLocation()
```

### Enumerations

Some actions have arguments with the type `enum`, accompanied by a set of allowed values. This type only accepts specific string values.

Future release
{: .label .label-purple }

To define enumerations for use as a type for [custom actions](/language/custom-actions) and [action definitions](/language/define-actions), use the following syntax:

```
enum Color {
    'Red',
    'Green',
    'Blue'
}

#define action 'com.example.app.action' myCustomAction(Color color)

myCustomAction("Purple") // throws an error
```

It accepts raw string comma-separated values.

Various formats are accepted:

```
enum Colors
{
    'Red',
    'Green',
    'Blue'
}

enum Colors {
    'Red', 'Green', 'Blue'
}

enum Colors {'Red','Green','Blue'}
```

### Empty

You can declare a variable with no value

```ruby
@empty
```

Or more explicitly, set the value as `nil`

```ruby
@empty = nil
```

You can use `nil` just about anywhere to cancel out an optional value.

However, if, due to the value being optional, it has a default, it will be set to its default, not empty.

```ruby
@var = getFile(nil)

if var == nil {

}

repeat i for nil {

}

for item in nil {

}
```

`nil` can skip an argument that is optional to set an argument after it.

```
@media = nil
setMetadata(media, nil, "Title")
```

`nil` is also faster to compile than empty text `""`, array, etc.

## Type Declaration

You can declare a variable with a type but no initial value.

This is particularly useful for creating a variable and then appending to it, then using it with an action that expects that type of value.

Setting a variable's value type explicitly also compiles faster than having to infer the types from empty values like `""`, `[]`, or `{}`.

```ruby
@t: text
@num: number
@list: array
@obj: dictionary
@boolean: bool
@reference: var
@real: float

@builder: text
for item in list {
    @builder += "{item}"
}

/* This would have thrown an error if `@builder` was not of type text. */
show(builder)
```

The following types may be used:

- `text` (default: `""`)
- `number` (default: `0`)
- `bool` (default: `false`)
- `dictionary` (default: `{}`)
- `array` (default: `[]`)
- `var` (variable reference)
- `float` (future release)

## Type Coercion

You can do the following type coercions. See [value types](types#value-types) and [content item types](#content-item-types) for available value types you can coerce to.

### Text

```ruby
@var = 5
@textVar = var.text
```

To coerce another value to text, simply reference it as an inline variable just as you would in Shortcuts.

```ruby
@var = 5
@textVar = "{var}"
```

Or you can use...

```ruby
@var = 5
@textVar = getText(var)
```

### Number

```ruby
@var = "5"
@textVar = var.number
@inlineVar = "{var.number}"
```

```ruby
@textVar = "5"
@numVar = getNumbers(textVar)
```

The `number()` action should only coerce another value to a number, as an integer produces the same output.

```ruby
@textVar = "5"
@numVar = number(textVar)
```

### Dictionary

```ruby
@var
@textVar = getDictionary(var)
```

## Content Item Types

There is a concept of data types in Shortcuts known as a "content item".

These are defined in Shortcuts, for example `WFAppStoreAppContentItem`.

In Cherri, they are shortened into singular names.

These types can be used for coercion, input, and output types.

| Type 	| Content Item Type 	|
|:-------------|:------------------|
| app 	| WFAppStoreAppContentItem 	|
| article 	| WFArticleContentItem 	|
| contact 	| WFContactContentItem 	|
| date 	| WFDateContentItem 	|
| email 	| WFEmailAddressContentItem 	|
| folder 	| WFFolderContentItem 	|
| file 	| WFGenericFileContentItem 	|
| image 	| WFImageContentItem 	|
| itunes 	| WFiTunesProductContentItem 	|
| location 	| WFLocationContentItem 	|
| maplink 	| WFDCMapsLinkContentItem 	|
| media 	| WFAVAssetContentItem 	|
| pdf 	| WFPDFContentItem 	|
| phonenumber 	| WFPhoneNumberContentItem 	|
| richtext 	| WFRichTextContentItem 	|
| webpage 	| WFSafariWebPageContentItem 	|
| text 	| WFStringContentItem 	|
