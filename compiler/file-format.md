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

A property list is a data format file, similar to something like JSON with keys and values. macOS and iOS use it heavily as it comes from nextSTEP, their predecessor.

Each value in the body of the property list under the first `<dict>` tag dictates how the Shortcut will look, and behave, what it will do, and where it will appear.

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
      <string>empty</string>
    </dict>
  </dict>
</array>
```

Each action has only one identifier which tells Shortcuts which app it belongs to. For example, the prefix `is.workflow.actions`, denotes that the action belongs to Shortcuts. The full identifier `is.workflow.actions.setvariable` references an internal data structure in the app it references that define, in this case, the **Set Variable** action and how it should behave.

In this definition, there are set parameters, each more or less a key-value pair. Each of these values may be literal values like `</string>`, `</integer>`, etc., or a dictionary value that contains more key-value pairs creating a data structure to reference another action's output or insert a reference to a variable inside of a string value. More on this later.

Actions are linked together through UUIDs. Whether that be a grouping identifier in the case of **If/Otherwise**, **Menu**, **Repeat**, etc., or a way to later reference a value that another action will output.

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.number</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>CustomOutputName</key>
    <string>numberAction</string>
    <key>UUID</key>
    <string>14E12A1F-BECC-454C-9C2B-78688E451D1C</string>
    <key>WFNumberActionNumber</key>
    <string>5</string>
  </dict>
</dict>
```

For example, the beginning of an **If/Otherwise** action data structure is a `GroupingIdentifier`. When all used together, this denotes that the **If**, **Otherwise**, and **Else If**, are all related, and the actions between them trigger based on their particular logic.

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.conditional</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>GroupingIdentifier</key>
    <string>7609D94B-39AD-469D-9B27-ABF682C73B62</string>
  // ...
</dict>
```

## `WFWorkflowTypes`

This data is an array of strings that define which Workflows this shortcut should show up in

This can be found in the UI in the details tab.

![Pin in Menu Bar
Show in Share Sheet
Receive What's On Screen
Use as Quick Action
Finder
Services Menu
Provide Output](/assets/workflows.png)

### `MenuBar`

The Shortcut will appear in the Shortcuts menubar menu.

![Menubar Example](/assets/workflows_menubar.png)

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

### String

This is the basic data structure for a text action.

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.gettext</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>CustomOutputName</key>
    <string>stringValue</string>
    <key>UUID</key>
    <string>40DAFB58-1D78-44F6-AE6D-106548319286</string>
    <key>WFTextActionText</key>
    <string>Text</string>
  </dict>
</dict>
```

### Integer

This is the basic data structure for a number action.

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.number</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>CustomOutputName</key>
    <string>integerValue</string>
    <key>UUID</key>
    <string>C7B16B9D-0470-4EF3-9969-B09169B82BFF</string>
    <key>WFNumberActionNumber</key>
    <string>42</string>
  </dict>
</dict>
```

### Dictionary

Dictionary values have a bit of a complicated data structure. Dictionary values have numbers attributed to data types as you'll see for the value of `WFItemType` for each value item's dictionary data structure.

#### Dictionary data types
- `0`: Text
- `1`: Dictionary
- `2`: Array
- `3`: Number
- `4`: Boolean

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.dictionary</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>CustomOutputName</key>
    <string>dictionaryValue</string>
    <key>UUID</key>
    <string>2E708BC2-4D9A-41C1-A857-6F3D535AAAD9</string>
    <key>WFItems</key>
    <dict>
      <key>Value</key>
      <dict>
        <key>WFDictionaryFieldValueItems</key>
        <array>
          <dict>
            <key>WFItemType</key>
            <integer>0</integer>
            <key>WFValue</key>
            <dict>
              <key>Value</key>
              <dict>
                <key>string</key>
                <string>value</string>
              </dict>
              <key>WFSerializationType</key>
              <string>WFTextTokenString</string>
            </dict>
            <key>WFKey</key>
            <dict>
              <key>Value</key>
              <dict>
                <key>string</key>
                <string>key1</string>
              </dict>
              <key>WFSerializationType</key>
              <string>WFTextTokenString</string>
            </dict>
          </dict>
          <dict>
            <key>WFItemType</key>
            <integer>3</integer>
            <key>WFValue</key>
            <dict>
              <key>Value</key>
              <dict>
                <key>string</key>
                <string>5</string>
              </dict>
              <key>WFSerializationType</key>
              <string>WFTextTokenString</string>
            </dict>
            <key>WFKey</key>
            <dict>
              <key>Value</key>
              <dict>
                <key>string</key>
                <string>key2</string>
              </dict>
              <key>WFSerializationType</key>
              <string>WFTextTokenString</string>
            </dict>
          </dict>
          <dict>
            <key>WFItemType</key>
            <integer>4</integer>
            <key>WFValue</key>
            <dict>
              <key>Value</key>
              <true/>
              <key>WFSerializationType</key>
              <string>WFNumberSubstitutableState</string>
            </dict>
            <key>WFKey</key>
            <dict>
              <key>Value</key>
              <dict>
                <key>string</key>
                <string>key3</string>
              </dict>
              <key>WFSerializationType</key>
              <string>WFTextTokenString</string>
            </dict>
          </dict>
        </array>
      </dict>
      <key>WFSerializationType</key>
      <string>WFDictionaryFieldValue</string>
    </dict>
  </dict>
</dict>
```

### Variable references

**Action output**

The output of the action in the first data structure can be referenced with the second data structure which calls out its UUID.

```xml
<dict>
  <key>WFWorkflowActionIdentifier</key>
  <string>is.workflow.actions.number</string>
  <key>WFWorkflowActionParameters</key>
  <dict>
    <key>CustomOutputName</key>
    <string>intVar</string>
    <key>UUID</key>
    <string>021536F9-29D3-4E98-A19F-5E5DAAB5BD94</string>
    <key>WFNumberActionNumber</key>
    <string>42</string>
  </dict>
</dict>

// ...

<key>WFInput</key>
<dict>
  <key>Value</key>
  <dict>
    <key>OutputName</key>
    <string>intVar</string>
    <key>OutputUUID</key>
    <string>021536F9-29D3-4E98-A19F-5E5DAAB5BD94</string>
    <key>Type</key>
    <string>ActionOutput</string>
  </dict>
  <key>WFSerializationType</key>
  <string>WFTextTokenAttachment</string>
</dict>
```

**String interpolation**

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

Each of the dictionaries under `attachmentsByRange` contains a key with the position the variable should be inserted, and as its value, a reference to a variable, magic variable, or global (e.g. ShortcutInput).

Then, there is a string value, with "text ￼ ￼". There is some space where a variable should be, but these are not spaces. The characters where variables should be inserted are a special type of character called an [Object Replacement Character](https://www.compart.com/en/unicode/U+FFFC). Shortcuts will replace this character with the reference.
