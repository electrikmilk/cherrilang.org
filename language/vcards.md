---
title: vCard Menus
layout: default
parent: Documentation
nav_order: 9
---

# vCard Menus

You can easily create a vCard Text action using the built-in action `makeVCard()`.

```
makeVCard(text title, text subtitle, text ?imagePath)
```

It uses the arguments at compile time using `title` as the name, the `subtitle` as the `ORG`, and `imagePath` as the `PHOTO`.
z
## Example

The example below uses this built-in action to make a vCard menu.

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

## Photo

This accepts any base64 encoded data.

To use a local image file, use the output of the built-in [base64Encode()](/language/standard/builtin#base64-encode-file) action to encode that file then use it in a VCard using a variable reference.

```ruby
/* (Declared for the demo) */
@batteryIcon

/*
#include 'icons.cherri' */
* Include icons.cherri contents:
* @batteryIcon = base64Encode("path/to/battery.png")
*/

const batteryLevel = getBatteryLevel()

@items: array
@items += makeVCard("Battery Status", "Level: {batteryLevel}", batteryIcon)
```

## Standard Library Action

You can also use the standard library action [`chooseFromVCard()`](/language/standard/stdlib#choose-from-vcard).

You can use this action in the same way you'd use the `chooseFromList()` action. You just provide it an array of VCards and a prompt.
