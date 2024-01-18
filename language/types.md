---
title: Types
layout: default
parent: Documentation
nav_order: 10
---

# Types
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Content Item Types

There is a concept of data types in Shortcuts known as a "content item".

These are defined in Shortcuts for example `WFAppStoreAppContentItem`.

In Cherri, they are shortened into singular names.

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

## Data Types

### Text

```ruby
@string = "text {variable} \n"
```

Text literals support interpolation of variables and escape characters.

**Standard escaped characters interpolated:**

- `\"` double quote
- `\n` new line
- `\t` tab
- `\r` carriage return
- `\\` backslash

For example:

```ruby
@multi = "multi\nline\ntext"
```

Multiline line text is also supported however:

```ruby
@multi = "multi
line
text"
```

### Raw Text

```ruby
@raw = 'i\'m text'
```

Raw text cancels out interpolation other than escaped single quotes. As a result they compile much faster than standard text literals.

One caveat to raw text is that it is not allowed in Dictionaries or Arrays. This is due to the fact that a dictionary or array must be valid JSON objects.

### Number

```ruby
@number = 42
```

### Expression

```ruby
@expression = 54 + (6 * 7)
```

You can use a variable reference in an expression:

```ruby
@expression = 54 * number + (6 * 7)
```

### Boolean

Booleans translate to a number value of `1` for `true`, and `0` for `false`.

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

You can declare a dictionary using a valid JSON string.

```ruby
/* Empty dictionaries */
@x: dictionary
@y = {}

@string = "text"
@dictionary = {
    "key1": "value {string}",
    "key2": 5,
    "key3": true,
    "key4": [
        "item1",
        "item 2",
        "item3"
    ]
}
```

### Array

An array is a variable that has been or will be added to in order to create a variable with multiple iterable values.

The contents of an array value, must be a valid JSON string.

```ruby
/* Empty arrays */
@x: array
@y = []

@int = 42
@array = [5, "test", {"test":5}, "{int}"]

/* Add a value to the array variable */
@array += "another test"
```

You can use the [`for`](statements#repeat-with-each) statement to iterate over the values contained in the array variable.

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

So `x` now contains 1 item with an number value of `5`.

### Action Result

```ruby
@urls = url("https://apple.com","https://google.com")
@list = list("Item 1","Item 2","Item 3")
@email = emailAddress("test@test.org")
@phone = phoneNumber("(555) 555-5555")
@date = date("October 5, 2022")
@location = getCurrentLocation()
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

You can use `nil` just about anywhere you need to cancel out an optional value.

However, if due to the value being optional it has a default, it will be set to its default, not empty.

```ruby
@var = getFile(nil)

if var == nil {

}

repeat i for nil {

}

for item in nil {

}
```

`nil` can be used to skip an argument that is optional to set an argument after it.

```
@media = nil
setMetadata(media, nil, "Title")
```

`nil` is also faster to compile than an empty string `""`, array, etc.

## Type Declaration

You can declare a variable with a type but no initial value.

This is particularly useful for creating a variable and then appending to it, then using it with an action that expects that type of value.

Setting a variable's value type explicitly also compiles faster than having to infer the type and read the empty value such as `""`, `[]`, or `{}`. The last two in particular have a JSON parser read their empty values.

```ruby
@string: text
@integer: number
@list: array
@dict: dictionary
@boolean: bool
@reference: var

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
- `array`
- `var` (variable reference)

## Type Coercion

You can currently do the following type coercions.

### Text

```ruby
@var = 5
@textVar = var.text
```

There exists no `text()` action, as string literals create a text action. To coerce another value to a string, simply reference it as an inline variable just as you would in Shortcuts.

```ruby
@var = 5
@textVar = "{var.text}"
```

If for some reason that doesn't work, use the `getText()` action.

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
@numVar = getNumbers(var)
```

The `number()` action should only be used to coerce another value to a number, as an integer literal produces the same output.

```ruby
@textVar = "5"
@numVar = number(textVar)
```

### Dictionary

```ruby
@var
@textVar = getDictionary(var)
```
