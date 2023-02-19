---
title: VCard Menus
layout: default
parent: Documentation
nav_order: 4
---

# VCard Menus

You can easily create a VCard menu using the built-in action `makeVCard()`.

```ruby
@vcard = makeVCard("Title","Subtitle","path/to/image.jpg")
```

This generates a VCard using your parameters at compile time, inserting the title as the name, the subtitle as the org/company, and base 64 encodes the image at the path you specified and inserts it as the photo. The only limitation being that the image path must be available at compile time, no variables unless they evaluate to a string literal.

The example below uses this built-in action to make a VCard menu:

```ruby
@items
repeat 3 {
    @items += makeVCard("{menuPrefix} Title {RepeatIndex}","{menuPrefix} Subtitle","assets/cherri_icon.png")
}
@menuItems = "{items}"
@vcf = setName(menuItems,"menu.vcf",false)

// Coerce type to contact
@contact = vcf.contact

// Use chooseFromList to prompt the user with our menu
@chosenItem = chooseFromList(contact,"Prompt")

// chosenItem contains the title of the chosen item
alert(chosenItem,"You chose:",false)
```
