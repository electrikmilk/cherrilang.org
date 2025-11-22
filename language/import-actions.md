---
title: Import Actions
layout: default
parent: Documentation
nav_order: 11
---

# Import Actions from your Device

{: .warning }
This only applies to macOS.

Shortcuts has a local database that consists of the actions installed on the device, including any actions from third-party apps.

## Importing Actions

To use the actions for an app, use the following syntax of either the base bundle identifier (e.g., `com.apple.shortcuts`) or an application name in Shortcuts.

```
#import 'com.sindresorhus.Color-Picker'
// or...
#import 'Color Picker'
```

For instance, to import the standard Shortcuts actions, use:

```
#import 'is.workflow.actions'
```

## Searching Actions

Actions and their types should now be defined. To use them, look for them using the `--action=` argument.

```bash
# File with imports
cherri file.cherri --action=appname
```

This should show the actions defined for the app. Search them individually to see their enumeration types.

Use `--toolkit-locale=` to set the language.
