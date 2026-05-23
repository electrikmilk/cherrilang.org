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
## Dictionaries

### Get Dictionary

Get the dictionary from `input`.

```
getDictionary(variable input): dictionary
```

---

### Get Keys from Dictionary

Get only the keys from the `dictionary`.

```
getKeys(dictionary dictionary): array
```

---

### Get Value from Dictionary

For constants only, otherwise `dictionary['key']` syntax should be used.

```
getValue(dictionary dictionary, text key): variable
```

---

### Get Values from Dictionary

Get only the values from the `dictionary`.

```
getValues(dictionary dictionary): array
```

---

### Set Value in Dictionary

Set the value of `key` to `value` in `dictionary`.

```
setValue(variable dictionary, text key, text value): dictionary
```

## Items

### Get Name

Get the name of an item.

```
getName(variable item)
```

---

### Set Name

Set the name of an item.

```
setName(variable item, text name, bool ?includeFileExtension = false)
```

## Lists

### Choose from List

Prompts the user to choose from a list.

```
chooseFromList(variable list, text ?prompt, bool ?selectMultiple = false, bool ?selectAll = false)
```

---

### Get First Item

Get first item in a list.

```
getFirstItem(variable list): variable
```

---

### Get Last Item

Get the last item in a list.

```
getLastItem(variable list): variable
```

---

### Get List Item

Get item from `list` at `index`. Keep in mind Shortcuts starts counting indexes at 1.

```
getListItem(variable list, number index): variable
```

---

### Get List Items

Get items from a `list` between two indexes. Keep in mind Shortcuts starts counting indexes at 1.

```
getListItems(variable list, number start, number end): array
```

---

### Get Random Item

Get random item from list.

```
getRandomItem(variable list): variable
```

---

### List

Create an immutable array of text.

```
list(text ...listItem)
```

## Numbers

### Format Number

Format number based on decimal place.

```
formatNumber(number number, number ?decimalPlaces = 2): number
```

---

### Get Numbers

Get numbers from input.

```
getNumbers(variable input): number
```

---

### Number

Create a number value.

```
number(variable number): number
```

---

### Random Number

Returns a random number between `min` and `max`.

```
randomNumber(number min, number max): number
```

