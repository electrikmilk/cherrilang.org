---
title: VCard Menus
layout: default
parent: Documentation
nav_order: 4
---

# VCard Menus

You can easily create a VCard menu using the built-in action `makeVCard()`.

```
makeVCard(string title, string subtitle, string ?imagePath)
```

This generates a VCard using your parameters at compile time, inserting the title as the name, the subtitle as the org/company, and base 64 encodes at compile time the image at the path specified as the photo.

Since this happens at compile time, the image path must be available at compile time. No variables are allowed unless they evaluate to a string literal. The image argument is optional.

The example below uses this built-in action to make a VCard menu:

```ruby
/* Generate items */
@items = []
repeat i for 3 {
    @items += makeVCard("Title {i}", "Subtitle {i}")
}

/* Flatten to one string */
@menuItems = "{items}"

/* Create contact card file */
@vcf = setName(menuItems, "menu.vcf")

/* Coerce type to contact */
@contact = vcf.contact

/* Use chooseFromList to prompt the user with our menu */
@chosenItem = chooseFromList(contact, "Prompt")

/* chosenItem contains the title of the chosen item */
alert(chosenItem, "You chose:")
```
