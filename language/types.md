---
title: Types
layout: default
parent: Documentation
nav_order: 10
---

# Types

## Content Item Types

There is a concept of data types in Shortcuts known as a "content item".

These are defined in Shortcuts for example as `WFAppStoreAppContentItem`.

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
@add = 2 + 2
@expression = 54 * number + (6 * 7)
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

### Empty

You can declare a variable with no value

```ruby
@empty
```

Or more explicitly, set the value as `nil`

```ruby
@empty = nil
```

You can use nil anywhere you need to cancel out a value for whatever reason. However, if the value has a default, it will be set to its default, not empty.

```ruby
getFile(nil)

if var == nil {

}

repeat nil {

}

for nil {

}
```

`nil` can be used to skip an argument that is optional to set an argument after it.

```
setMetadata(media, nil, "Title")
```

## Type Casting

You can currently do the following typecasting.

### Text

```ruby
@var = 5
@textVar = var.text
```

```ruby
@var = 5
@textVar = getText(var)
```

```ruby
@var = 5
@textVar = "{var}"
```

### Number

```ruby
@var = "5"
@textVar = var.number
```

```ruby
@var = "5"
@textVar = getNumbers(var)
```

```ruby
@var = "5"
@textVar = number(var)
```

### Dictionary

```ruby
@var = "{\"json\":\"string\"}"
@textVar = getDictionary(var)
```
