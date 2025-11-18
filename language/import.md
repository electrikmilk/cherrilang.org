---
title: Import Actions
layout: default
parent: Documentation
nav_order: 11
---

# Import Actions from your Device

Future release
{: .label .label-purple }

{: .warning }
This only applies to macOS.

Shortcuts has a local database consisting of the actions installed on the device, including any actions from 3rd-party apps.

## Importing Actions

To use the actions for an app, use the following syntax of either the base bundle identifier (e.g., `com.apple.shortcuts`) or name in `/Applications/`.

```
#import 'com.sindresorhus.Color-Picker'
// or...
#import 'Color Picker'
```

For instance, to import the standard Shortcuts actions, use:

```
#import 'is.workflow.actions'
```

Keep in mind, there is not currently a way to tell if a parameter is required, so you must specify a value for each parameter. To give an empty value, use `nil`.

## Searching Actions

Actions and their types should now be defined. To use them, look for them using the `--action=` argument.

```bash
# File with imports
cherri file.cherri --action=appname
```

This should show the actions defined for the app. Search them individually to see their enumeration types.
