---
title: Customized
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 9
---

# Customized Standard Actions
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

### Encode Files

```
base64File(text filePath)
```

This built-in action will load the file at `filePath` and encode it to base 64 at compile time. This will result in a **Text** action containing the base 64 encoded contents of the file which Shortcuts can decode for showing an image, playing audio , etc.

For example, you could enter a file path for an audio file and use **Play Audio** to play the audio when the Shortcut runs.

```
@audio = base64File("music/playme.mp3")
playSound(audio)
```
