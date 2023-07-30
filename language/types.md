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
@var = "{"json":"string"}"
@textVar = getDictionary(var)
```
