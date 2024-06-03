---
title: vCards
layout: default
parent: Documentation
nav_order: 9
---

# vCards

You can easily create a vCard using the built-in action `makeVCard()`.

```
makeVCard(text title, text subtitle, text ?imagePath)
```

This generates a vCard using your parameters at compile time, inserting the title as the name, and the subtitle as the org/company.

It will also optionally base 64 encode when compiling the image at the path specified as the photo.

Since this happens at compile time, the image path must be available at compile time. No variables are allowed unless they evaluate to a text literal.

{: .note }
In a future release, entering a variable into the `imagePath` argument will insert that variable for `PHOTO:` instead of trying to load a file. It will only load a file if you enter a string literal for the `imagePath` argument.

The example below uses this built-in action to make a vCard menu:

```ruby
/* Generate items */
@items = []
repeat i for 3 {
    @items += makeVCard("Title {i}", "Subtitle {i}")
}

/* Flatten items to text */
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
