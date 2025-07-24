---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write a raw definition of an action not defined inside Cherri, in Cherri.

## Defining an action

Provide a string of the action `WFWorkflowActionIdentifier`. Then, optionally provide a dictionary for the `WFWorkflowActionParameters`.

```ruby
rawAction("is.workflow.actions.alert", {
     "WFAlertActionMessage": "Hello, world!",
     "WFAlertActionCancelButtonShown": false
})
```

This defines an alert action with the message `Hello World!`. This action is already defined in Cherri using the `alert()` action. Still, this example demonstrates a simple way actions not implemented in Cherri can be used.

However, there is an alternative called [action definitions](/language/define-actions) in a future release, which creates reusable action definitions.

## Parsing Shortcut Data

To download property list (.plist) versions of Shortcuts, [here is a helpful Shortcut](https://routinehub.co/shortcut/13252/) written in Cherri that shows how to do so with an iCloud Link to the Shortcut.

Shortcut files are generally in a binary (encoded), encrypted (signed) format; they cannot be read without being converted to text and decrypted. Property lists are a key-value-based data format and are relatively easy to parse through if you are familiar with XML data formats, JSON, or at least HTML.

However, you will likely be better off using a plist reader if you plan to do this often, as it allows you to easily view the data in a GUI where you expand the data selectively, allowing for much easier parsing and copy-pasting.

Look for a node with the key `WFWorkflowActions`. In text, this will be an `<array>` with a `<key>` above it containing `WFWorkflowActions`. Each `<dict>` is an action. Within the dictionary, there are two 

```
<key>WFWorkflowActions</key>
<array>
    <!-- Action -->
    <dict>
        <key>WFWorkflowActionIdentifier</key>
        <string>is.workflow.actions.setvariable</string>
        <key>WFWorkflowActionParameters</key>
        <dict>
            <key>WFVariableName</key>
            <string>x</string>
        </dict>
    </dict>
    <!-- More actions... -->
</array>
```

Below is this action in Cherri using a raw action. We use the `WFWorkflowActionParameters` key from above to make a dictionary value containing the same keys and values.

```
rawAction("is.workflow.actions.setvariable", {
     "WFVariableName": "x"
})
```

## Variable Values

Future Release
{: .label .label-purple }

To use a variable value for a parameter that only accepts a variable value, prepend an inline variable reference's brackets in a string value with the character `$`.

```
action saveFile(variable file) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFInput": "${file}"
     })
}
```

Again, just like with the `alert()` action, there is already a `saveFile()` action; this is only an example.

Only a single variable is allowed; if this is not detected, the compiler treats the value as a string with inline variable references.
