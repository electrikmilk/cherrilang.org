---
title: Import Actions
layout: default
parent: Documentation
nav_order: 11
---

# Import Actions from your Device

{: .warning }
This only applies to macOS.

Shortcuts has a local database consisting of the actions installed on the device, including any actions from 3rd-party apps.

To use the actions for an app, use the following syntax of either the base bundle identifier (e.g., `com.apple.shortcuts`) or name in `/Applications/`.

```
#import 'com.sindresorhus.Color-Picker'
// or...
#import 'Color Picker'
```
