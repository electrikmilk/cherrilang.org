---
title: Shortcut File Format
layout: default
parent: Contributing
nav_order: 5
---

# Shortcut File Format

{: .warning }
This document is a work in progress.

A Shortcut is a single file with a `.shortcut` file extension. However, this file is basically a [property list](https://en.wikipedia.org/wiki/Property_list) file.

**TL;DR**

A property list is a data format file, similar to something like JSON with keys and values. macOS and iOS use it heavily as it comes from nextSTEP, their predecessor.

Each value in the body of the plist under the first `<dict>` tag dictates how the Shortcut will look, behave, do, and where it appears.

## `WFWorkflowActions`

This is where Shortcuts' actions and their configuration are stored.

Each action has an identifier and parameters.

```xml
<key>WFWorkflowActions</key>
<array>
  <dict>
    <key>WFWorkflowActionIdentifier</key>
    <string>is.workflow.actions.setvariable</string>
    <key>WFWorkflowActionParameters</key>
    <dict>
      <key>WFVariableName</key>
      <string>emptyVar</string>
    </dict>
  </dict>
</array>
```

Each action only has one identifier which tells Shortcuts which app it belongs to. For example, the prefix `is.workflow.actions`, denotes that the action belongs to Shortcuts.

Each action has set parameters, each a key and value, but the value may contain many more keys and values if they are an array or dictionary value.

## `WFWorkflowTypes`

This data is an array of strings that define which Workflows this shortcut should show up in

This can be found in the UI in the details tab.

![Screenshot 2023-11-05 at 11 35 07](https://github.com/electrikmilk/cherrilang.org/assets/4368524/95ceaed1-f49f-497f-9cf4-0e4c8ba546ff)

### `MenuBar`

The Shortcut will appear in the Shortcuts menubar menu.

![Screenshot 2023-11-05 at 11 41 34](https://github.com/electrikmilk/cherrilang.org/assets/4368524/0c4a0eb6-77e2-4668-8c29-7f7be57a5084)

### `QuickActions`

The Shortcut will appear in Finder on macOS or the Files app on iOS and iPadOS as a "quick action" you could take on a file.

### `ActionExtension`

The Shortcut will appear as an action in the Share Sheet.

### `NCWidget`

This will show in a notification center widget.

### `Sleep`

Show as an option in "Sleep Mode" on iOS and iPadOS.

### `Watch`

Show on Apple Watch.

### `WFWorkflowName`

This is something from a previous version of shortcuts.

## Values

### String interpolation

Shortcuts support inline variables in string values. Below is the data structure for a string value that contains inline variables.

```xml
<dict>
  <key>Value</key>
  <dict>
    <key>attachmentsByRange</key>
    <dict>
      <key>{5, 1}</key>
      <dict>
        <key>VariableName</key>
        <string>variable1</string>
        <key>Type</key>
        <string>Variable</string>
      </dict>
      <key>{7, 1}</key>
      <dict>
        <key>VariableName</key>
        <string>variable2</string>
        <key>Type</key>
        <string>Variable</string>
      </dict>
    </dict>
    <key>string</key>
    <string>text ￼ ￼</string>
  </dict>
  <key>WFSerializationType</key>
  <string>WFTextTokenString</string>
</dict>
```

The `WFSerializationType` is set, denoting a `WFTextTokenString`. Each of the dictionaries under `attachmentsByRange` contains a key with the position the variable should be inserted, and as its value, a reference to a variable, magic variable, or global (e.g. ShortcutInput).

Then, there is a string value, with "text ￼ ￼". There is some space where a variable should be, but these are not spaces. The characters where variables should be inserted are a special type of character called an [Object Replacement Character](https://www.compart.com/en/unicode/U+FFFC). Shortcuts replace this character with the reference.
