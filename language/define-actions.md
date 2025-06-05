---
title: Define Actions
layout: default
parent: Documentation
nav_order: 13
---

# Action Definitions

Future Release
{: .label .label-purple }

## Definition

To define a Shortcut action raw, in the same reusable way as the [standard Shortcut actions](/language/actions) in the compiler, use the following syntax similar to a [definition](/language/definitions):

```
#define action 'com.example.app.action' myCustomAction()

myCustomAction()
```

A raw string `WFWorkflowActionIdentifier` is required between `#define action` and the identifier of the action.

The only exception to this is for Shortcuts actions that start with `is.workflow.actions`. If the identifier namespaces are less than 4, we assume it is a classic Shortcuts action for the convenience of defining them.

You may see `#builtin` instead of `#define` for an action definition printed by the compiler. These actions are internally defined in the compiler and require compile-time processing that either cannot practically be abstracted to Cherri or hasn't yet been implemented.

## Attributes

Attribute keywords and syntax are available:

- `default` - For decompilation, if multiple action definitions use the same identifier, use this action by default if no other actions match better.
- `mac` - macOS-only action.
- `!mac` - non macOS action, iOS/iPadOS only.
- `v{version}` - Max 2: Specify an iOS version number restriction. Optional, append `>` for minimum and `<` for maximum, defaults to minimum.

## Arguments

The syntax for the action arguments is the same as [custom actions](/language/custom-actions#defining-arguments), and you can also set an [output type](/language/custom-actions#output-type).

One exception is that it requires the key for the parameter that the argument will be used to create. Add a `:` after the argument name, then a raw string with the parameter key:

```
#define action 'com.example.app.action' myCustomAction(variable file: 'WFInput'): bool

@file = selectFile()
myCustomAction(file)
```

## Add Parameters

To add extra parameters in the same way as a [raw action](/language/raw-actions), add a dictionary after the definition and an optional output type.

```
#define action 'dropbox.savefile' saveToDropbox(
    variable file: 'WFInput',
    text path: 'WFFileDestinationPath',
    bool ?overwrite: 'WFSaveFileOverwrite' = false
) {
    "WFAskWhereToSave": false
}
```
