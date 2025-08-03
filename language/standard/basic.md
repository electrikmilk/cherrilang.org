---
title: Basic
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 2
---

# Basic Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Comment

Add an explicit comment.

```
comment(rawtext text: 'WFCommentActionText')
```

---

### Count

Returns a count of `type` of items in `input`.

```
enum countType {
    'Items',
    'Characters',
    'Words',
    'Sentences',
    'Lines',
}

count(variable input: 'Input', countType ?type: 'WFCountType' = "Items"): number
```

---

### Get Object of Class

Get the object of `class` from a variable.

```
getObjectOfClass(text class: 'Class', variable from: 'Input')
```

---

### Get Type

Get the type of input.

```
typeOf(variable input: 'WFInput'): text
```

---

### Nothing

Clear the current output.

```
nothing()
```

---

### Number

Create a number value.

```
number(number number: 'WFNumberActionNumber'): number
```

---

### Stop Shortcut

Stops the shortcut.

```
stop()
```

## Control Flow

### Wait

Wait a specified number of seconds.

```
wait(number seconds: 'WFDelayTime')
```

---

### Wait to Return

Wait for the user to return to Shortcuts.

```
waitToReturn()
```

## Notification

### Ask for Input

Ask for input with prompt, with optional inputType and defaultValue.

```
enum inputType {
    'Text',
    'Number',
    'URL',
    'Date',
    'Time',
    'Date and Time',
}

prompt(text prompt: 'WFAskActionPrompt', inputType ?inputType: 'WFInputType' = "Text", text ?defaultValue, text ?multiline: 'WFAllowsMultilineText' = true)
```

## Notifications

### Alert

Shows an alert with text and optional title and an OK button to proceed.

```
alert(text alert: 'WFAlertActionMessage', text ?title: 'WFAlertActionTitle')
```

---

### Confirm

Shows an alert with text and optional title. It displays an OK button to proceed, and a cancel button that stops the Shortcut.

```
confirm(text alert: 'WFAlertActionMessage', text ?title: 'WFAlertActionTitle')
```

---

### Show Notification

Shows a custom notification message.

```
showNotification(text body: 'WFNotificationActionBody', text ?title: 'WFNotificationActionTitle', bool ?playSound: 'WFNotificationActionSound' = true, variable ?attachment: 'WFInput')
```

## Output

### Content Graph

Display input as a content graph.

```
contentGraph(variable input: 'WFInput')
```

---

### Must Output

Stop and output `output`. Respond with response if there is nowhere to output.

```
mustOutput(text output: 'WFOutput', text response: 'WFResponse')
```

---

### Output or Copy to Clipboard

Stop and output `output`. Copy to the clipboard if there is nowhere to output.

```
outputOrClipboard(text output: 'WFOutput')
```

---

### Quick Look

Preview `input` in Quick Look.

```
quicklook(variable input: 'WFInput')
```

---

### Show Result

Show `input`.

```
show(text input: 'Text')
```

---

### Stop and Output

Stop and output `output`. Do nothing if there is nowhere to output.

```
output(text output: 'WFOutput')
```
