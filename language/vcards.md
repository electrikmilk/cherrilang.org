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

This generates a VCard using your parameters at compile time, inserting the title as the name, the subtitle as the org/company, and base 64 encodes the image at the path you specified and inserts it as the photo.

The only limitation is that the image path must be available at compile time. No variables are allowed unless they evaluate a string literal. The image argument is optional.

The example below uses this built-in action to make a VCard menu:

```ruby
@items
repeat i for 3 {
    const vcard = makeVCard("Title {i}", "Subtitle {i}")
    @items += vcard
}
@menuItems = "{items}"
@vcf = setName(menuItems, "menu.vcf")

/* Coerce type to contact */
@contact = vcf.contact

/* Use chooseFromList to prompt the user with our menu */
@chosenItem = chooseFromList(contact, "Prompt")

/* chosenItem contains the title of the chosen item */
alert(chosenItem, "You chose:")
```
