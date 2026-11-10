---
title: Action Definitions
layout: default
parent: Documentation
nav_order: 13
---

# Action Definitions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Definition

To define a Shortcut action raw, in the same reusable way as the [standard Shortcut actions](/language/actions) in the compiler, use the following syntax:

```
action 'com.example.app.action' myCustomAction()

myCustomAction()
```

A raw text `WFWorkflowActionIdentifier` is required between `action` and the identifier of the action.

The only exception to this is for Shortcuts actions that start with `is.workflow.actions`. If the identifier namespaces are less than 4, we assume it is a classic Shortcuts action for the convenience of defining them.

You may see `#builtin` for an action definition printed by the compiler. These actions are internally defined in the compiler and require compile-time processing that either cannot practically be abstracted to Cherri or hasn't yet been implemented.

## Parsing Shortcut Data

To find the identifier and parameters for an action from a Shortcut not implemented in Cherri, see [parsing out action data from a raw Shortcut](/faq#how-do-i-use-non-standard-actions).

## Attributes

Attributes may be added in the following order after `action`:

- `default` - For decompilation, if multiple action definitions use the same identifier, use this action by default if no other actions match better.
- `mac`: - macOS-only action _OR_ `!mac`: non macOS action, iOS/iPadOS only.
- `v{version}` - Max 2: Specify an iOS version number restriction. Optionally append `>` for minimum and `<` for maximum, defaults to minimum if no suffix is added.

## App intents

Future release
{: .label .label-purple }

Some actions are App Intents, which Shortcuts stores with an `AppIntentDescriptor` parameter. To define one, declare the app and its intents with `app`, then reference an intent with `#App.Intent` after the attributes and before the optional quoted identifier.

```
app Fantastical 'com.flexibits.fantastical2.iphone' {
    'CreateEventIntent',
    'OpenCalendarIntent'
}

action #Fantastical.CreateEventIntent createEvent(text title: 'title')

createEvent("Lunch")
```

An app declaration is the app name, the bundle identifier, then the intent identifiers as raw strings between `{` and `}`, one on each line and separated by commas.

If an action definition has no quoted identifier, the action identifier is the bundle identifier followed by the intent identifier. In the example above, that is `com.flexibits.fantastical2.iphone.CreateEventIntent`. If the action identifier is something else, keep it after the intent:

```
action #Notes.OpenNoteLinkAction 'shownote' openNote(variable note: 'WFInput')
```

### Display name

The app name in the descriptor is the declared name. If it needs spaces, add the display name after the declared name with a `:`:

```
app ImagePlayground:'Image Playground' 'com.apple.GenerativePlaygroundApp' {
    'GenerateImageIntent'
}
```

### Declaring more intents

The same app can list more intents in another declaration, as long as it has the same bundle identifier and display name. Declaring the same intent twice is an error.

### Errors

Referencing an app that was not declared, or an intent that is not in that app's own list, is an error that lists what is available.

## Arguments

The syntax for the action arguments is the same as [functions](/language/functions#defining-arguments), and you can also set an [output type](/language/custom-actions#output-type).

One exception is that it requires the key for the parameter that the argument will be used to create. Add a `:` after the argument name, then a raw string with the parameter key:

```
action 'com.example.app.action' myCustomAction(variable file: 'WFInput'): bool

@file = selectFile()
myCustomAction(@file)
```

## Add Parameters

To add extra parameters in the same way as a [raw action](/language/raw-actions), add a dictionary after the definition and an optional output type.

```
action 'com.example.app.action' myCustomAction(variable file: 'WFInput'): bool {
    "WFActionParameterName": true
}
```

## Example

Below is an example using the **Show Alert** action.

```ruby
action 'alert' showAlert(
    text message: 'WFAlertActionMessage',
    text ?title: 'WFAlertActionTitle',
    bool ?cancelButton: 'WFAlertActionCancelButtonShown' = true
)

showAlert("Hello, Cherri!")
showAlert("Hello, Cherri!", "Alert")
showAlert("Hello, Cherri!", "Alert", false)
```
