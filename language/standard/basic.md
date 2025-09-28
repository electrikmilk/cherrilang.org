---
title: Basic
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 3
---

# Basic Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Actions in this category are automatically included.

# Basic Actions

Actions in this category are automatically included.

### Comment

Add an explicit comment.

```
comment(rawtext text)
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

count(variable input, countType ?type = "Items"): number
```

---

### Get Object of Class

Get the object of `class` from a variable.

```
getObjectOfClass(text class, variable from)
```

---

### Get Type

Get the type of input.

```
typeOf(variable input): text
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
number(variable number): number
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
wait(number seconds)
```

---

### Wait to Return

Wait for the user to return to Shortcuts.

```
waitToReturn()
```

## Notifications

### Alert

Shows an alert with text and optional title and an OK button to proceed.

```
alert(text alert, text ?title)
```

---

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

prompt(text prompt, inputType ?inputType = "Text", text ?defaultValue, text ?multiline = true)
```

---

### Confirm

Shows an alert with text and optional title. It displays an OK button to proceed, and a cancel button that stops the Shortcut.

```
confirm(text alert, text ?title)
```

---

### Show Notification

Shows a custom notification message.

```
showNotification(text body, text ?title, bool ?playSound = true, variable ?attachment)
```

## Output

### Content Graph

Display input as a content graph.

```
contentGraph(variable input)
```

---

### Must Output

Stop and output `output`. Respond with response if there is nowhere to output.

```
mustOutput(text output, text response)
```

---

### Output or Copy to Clipboard

Stop and output `output`. Copy to the clipboard if there is nowhere to output.

```
outputOrClipboard(text output)
```

---

### Quick Look

Preview `input` in Quick Look.

```
quicklook(variable input)
```

---

### Show Result

Show `input`.

```
show(text input)
```

---

### Stop and Output

Stop and output `output`. Do nothing if there is nowhere to output.

```
output(text output)
```

## Search

### Search/Spotlight

Get results from search on iOS or iPadOS, and Spotlight on macOS.

```
search(text query, number ?limit = 5, array ?resultType = [Calendar Events Contacts Mail Messages Notes Photos Reminders Voice Recordings Bookmarks]): array
```
