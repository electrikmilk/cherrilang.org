---
title: Scripting
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 17
---

# Scripting Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .warning }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/scripting'
> ```

## Apps

### App ID Shorthands

Shorthands are built into any of the following actions accepting App IDs. However, if you use these values they must be available at compile time.

- `appstore`
- `files`
- `shortcuts`
- `safari`
- `facetime`
- `notes`
- `phone`
- `reminders`
- `mail`
- `music`
- `calendar`
- `maps`
- `contacts`
- `health`
- `photos`

---

### Hide App

Hide an app.

```
hideApp(text appID)
```

---

### Hide Apps

Hide multiple apps. Allows exception.

```
hideAllApps(text ...?except)
```

---

### Kill All Apps

{: .warning }
This will quit all the apps running on the device without asking to save changes!

Kills all apps. Allows exceptions.

```
killAllApps(text ...?except)
```

---

### Kill App

{: .warning }
This will not ask to save changes!

Kill an app.

```
killApp(text appID)
```

---

### Open App

Open an app.

```
openApp(text appID)
```

_Contributed by [JosephShenton](https://github.com/JosephShenton)_.

---

### Quit All Apps

Quits all apps. Allows exceptions.

```
quitAllApps(text ...?except)
```

---

### Qut App

Quit an app.

```
quitApp(text appID)
```

---

### Split Apps

Split apps across the screen.

```
enum appSplitRatio {
    'half',
    'thirdByTwo',
}

splitApps(text firstAppID, text secondAppID, appSplitRatio ?ratio = "half")
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
getValue(dictionary dictionary, text key)
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
setValue(variable dictionary, text key, text value)
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
getFirstItem(variable list)
```

---

### Get Last Item

Get the last item in a list.

```
getLastItem(variable list)
```

---

### Get List Item

Get item from `list` at `index`. Keep in mind Shortcuts starts counting indexes at 1.

```
getListItem(variable list, number index)
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
getRandomItem(variable list)
```

---

### List

Create a list.

```
list(text ...listItem)
```

## Measurement

### Convert Measurement

```
enum measurementUnitType {
    'Acceleration',
    'Angle',
    'Area',
    'Concentration Mass',
    'Dispersion',
    'Duration',
    'Electric Charge',
    'Electric Current',
    'Electric Potential Difference',
    'V Electric Resistance',
    'Energy',
    'Frequency',
    'Fuel Efficiency',
    'Illuminance',
    'Information Storage',
    'Length',
    'Mass',
    'Power',
    'Pressure',
    'Speed',
    'Temperature',
    'Volume',
}

convertMeasurement(variable measurement, measurementUnitType unitType, text unit)
```

---

### Create Measurement

```
enum measurementUnitType {
    'Acceleration',
    'Angle',
    'Area',
    'Concentration Mass',
    'Dispersion',
    'Duration',
    'Electric Charge',
    'Electric Current',
    'Electric Potential Difference',
    'V Electric Resistance',
    'Energy',
    'Frequency',
    'Fuel Efficiency',
    'Illuminance',
    'Information Storage',
    'Length',
    'Mass',
    'Power',
    'Pressure',
    'Speed',
    'Temperature',
    'Volume',
}

measurement(text magnitude, measurementUnitType unitType, text unit)
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

### Random Number

Returns a random number between `min` and `max`.

```
randomNumber(number min, number max): number
```

## Passwords

### Search Passwords

Searches passwords in the Passwords app.

```
searchPasswords(text query)
```

## System

### Dismiss Siri

Dismisses Siri.

```
dismissSiri()
```
