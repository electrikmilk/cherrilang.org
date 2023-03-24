---
title: Standard Library
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 9
---

# Standard Library of Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

The Cherri standard library is a file statically linked with the compiler that contains custom actions for common action patterns in Shortcuts.

To use this library, use the following syntax:

```
#include "stdlib"
```

## VCards

### Show VCard

Create a variable to add VCards to, then pass it with a prompt to this standard library action. This action will convert it into a contact which it will then provide to chooseFromList() and returns the output.

```
@items
@items += makeVCard("Title","Subtitle")

@choosenItem = showVCard(items, "Prompt")

show("{choosenItem}")
```

#### Source

```
// showVCard sets up a VCard menu using items and prompt
action showVCard(items, prompt) {
    @menuItems = "{items}"
    @vcf = setName(menuItems,"menu.vcf")
    @contact = vcf.contact
    return chooseFromList(contact,prompt)
}
```
