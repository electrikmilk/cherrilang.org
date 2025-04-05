---
title: vCards
layout: default
parent: Documentation
nav_order: 9
---

# vCard Menus

You can easily create a vCard using the built-in action `makeVCard()`.

```
makeVCard(text title, text subtitle, text ?imagePath)
```

This generates a vCard using your parameters at compile time, inserting the title as the name and the subtitle as the org/company.

## Photo

It will also optionally base 64 encode the image file at the path and set that as the `PHOTO` property in the VCard.

Since this happens at compile time, the image path must be available at compile time. Variables are not allowed unless they evaluate to a text literal.

For instance, you may want to put it in a text constant at the top of your Shortcut so you can easily change the icon later or to have an icons file of icon paths you include inside another file.

Entering a variable into the `imagePath` argument will insert that variable for `PHOTO:` instead of trying to load a file. It will only load a file if you enter a string literal for the `imagePath` argument.

## Example

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

## Standard Library Action

You can also use the standard library action [`chooseFromVCard()`](/language/standard/stdlib#choose-from-vcard).

You can use this action in the same way you'd use the `chooseFromList()` action. You just provide it an array of VCards and a prompt.
