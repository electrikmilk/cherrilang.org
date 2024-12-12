---
title: Standard Library
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 10
---

# Standard Library of Custom Actions

You can use the Cherri Standard Library of [custom actions](/language/custom-actions) using the following syntax:

```
#include 'stdlib'
```

This will give you access to the following actions. Note that custom actions are only included with your Shortcut if you use them.

## Scripting

### Choose from vCard

Prompt the user to choose from an array of [vCards](/language/vcards) with a prompt. Returns the chosen vCard item.

```
chooseFromVCard(array items, text prompt)
```

**Example Usage**
```
#include 'stdlib'

@items = []
repeat i for 6 {
  @items += makeVCard("Title", "Subtitle")
}

chooseFromVCard(items, "Choose From Items")
```

---

### Run JavaScript

Runs the JavaScript code in `script` and returns the output.

```
runJS(text script)
```
