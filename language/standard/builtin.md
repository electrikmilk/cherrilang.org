---
title: Built-in
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 9
---

# Built-in Actions

Built-ins in Cherri are actions in the compiler that use standard actions but implement them in a way that makes it easier to use a specific Shortcuts feature.

For example, the [makeVCard()](/language/vcards) action is in actuality just a text action. Still, the compiler uses it to  insert the vCard format into a text action based on your input.

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Contains Text

Checks if `text` occurs in `subject`.

```
containsText(text subject, text text, bool ?caseSensitive = true)
```

This uses a [Match Text](/language/standard/documents#match-text) action to check if `text` is within `subject`.

---

### Encode File

```
base64File(text filePath)
```

This built-in action will load the file at `filePath` and encode it to base 64 at compile time. This will result in a **Text** action containing the base 64 encoded contents of the file which Shortcuts can decode for showing an image, playing audio, etc.

For example, you could enter a file path for an audio file and use **Play Audio** to play the audio when the Shortcut runs.

Keep in mind you will likely need to decode the contents to use them.

```
const audioFile = base64File("music/playme.mp3")
@audio = base64Decode(audioFile)
playSound(audio)
```

---

### Open SpringBoard

Go to the home screen.

```
springBoard()
```

This uses the [Open App](/language/standard/scripting#open-app) action to open the SpringBoard or Homescreen.

---

### [Make vCard](/language/vcards)

Create vCards without having to remember the format. Embed local images as an image for a menu item.

---

### [Raw Action](/language/raw-actions)

Create actions by inputting full identifiers and parameters to use actions not supported by Cherri.
