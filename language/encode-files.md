---
title: Encode files
layout: default
parent: Documentation
nav_order: 14
---

# Encode Files

```
base64File(text filePath)
```

This action will at compile time load the file at `filePath` and encode it to base64. This will result in a **Text** action containing the base64 encoded contents of the file.

For example, you could enter a file path for an audio file and use Play Audio to play the audio when the Shortcut runs.

```
@audio = base64File("music/playme.mp3")
playSound(audio)
```
