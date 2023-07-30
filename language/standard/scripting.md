---
title: Scripting
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 6
---

# Scripting Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Apps

### App ID Shorthands

Shorthands are built into any of the following actions accepting App IDs.

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

Hide app with `appId`.

```
hideApp(string appId)
```

---

### Hide All Apps

Hide all open apps.

```
hideAllApps(string ...?except)
```

---

### Open App

Open app with `appId`.

```
openApp(string appId)
```

_Contributed by [JosephShenton](https://github.com/JosephShenton)_.

---

### Quit App

Quit app with `appId`.

```
quitApp(string appId)
```

---

### Quit All Apps

Quit all open apps, asking to save changes.

```
quitAllApps(string ...?except)
```

---

### Kill App

Quit an app with `appId` without asking to save changes.

```
killApp(string appId)
```

---

### Kill All Apps

{: .warning }
This will quit all of the apps on the device without asking to save changes!

Quit all open apps, **without** asking to save changes.

```
killAllApps(string ...?except)
```

---

### Split Screen Apps

Split two apps on the device screen.

```
splitApps(string firstAppID, string secondAppID, enum ?ratio = "half")
```

#### Ratios

- `half`
- `thirdByTwo`

## Content

### Get On-Screen Content

Get content on the device screen.

```
getOnScreenContent()
```

## Control Flow

{: .note }
These control flow actions have been abstracted into statements: [Choose From Menu](../menus#choose-from-menu), [If](../statements#ifelse), [Repeat](../statements#repeat) and [Repeat With Each](../statements#repeat-with-each).

---

### Output

Stop and output `output`. Do nothing if there is nowhere to output.

```
output(string output)
```

---

### Must Output

Stop and output `output`. Respond with `response` if there is nowhere to output.

```
mustOutput(string output, string response)
```

---

### Output or Clipboard

Stop and output `output`. Copy to the clipboard if there is nowhere to output.

```
outputOrClipboard(variable output)
```

---

### Wait

Wait a number of seconds then proceed.

```
wait(integer seconds)
```

---

### Wait to Return

Wait for the user to return to the Shortcut. This usually proceeds an action that directs the user out of the Shortcuts app.

```
waitToReturn()
```

## Device

### Get Battery Level

Get the current battery level of the device.

```
getBatteryLevel()
```

---

### Battery Is Charging

Returns a boolean based on if the device is charging.

```
isCharging()
```

*iOS 16.2+ only*

---

### Connected to Charger

Returns a boolean based on if the device is connected to a charger.

```
connectedToCharger()
```

*iOS 16.2+ only*

---

### Turn On Do Not Disturb

Turn on the Do Not Disturb focus mode on the device.

```
DNDOn()
```

---

### Turn Off Do Not Disturb

Turn off the Do Not Disturb focus mode on the device.

```
DNDOff()
```

---

### Get Device Detail

Get `detail` of the device.

```
getDeviceDetail(enum detail)
```

#### Device Details

- Device Name
- Device Hostname
- Device Model
- Device Is Watch
- System Version
- Screen Width
- Screen Height
- Current Volume
- Current Brightness
- Current Appearance

---

### Toggle Appearance

Toggles system appearance from light to dark, or dark to light.

```
toggleAppearance()
```

---

### Light Appearance

Change system appearance to light.

```
lightMode()
```

---

### Dark Appearance

Change system appearance to dark.

```
darkMode()
```

---

### Toggle Bluetooth

Toggle device Bluetooth.

```
toggleBluetooth()
```

---

### Set Bluetooth

Set the device Bluetooth on or off.

```
setBluetooth(boolean status)
```

---

### Set Brightness

Set display brightness (0-100).

```
setBrightness(integer brightness)
```

---

### Set Volume

Set device volume (0-100).

```
setVolume(integer volume)
```

--- 

### Start Screensaver

Start screen saver on Mac.

```
startScreensaver()
```

*macOS only*

## Dictionaries

{: .note }
The dictionary action is abstracted into a variable value, see [Dictionary](../variables-globals.html#dictionaries).

---

### Get Dictionary

Get the dictionary from `input`.

```
getDictionary(variable input)
```

---

### Get Values from Dictionary

Get only the values from the `dictionary`.

```
getValues(dictionary dictionary)
```

---

### Get Keys from Dictionary

Get only the keys from the `dictionary`.

```
getKeys(dictionary dictionary)
```

---

### Get Value from Dictionary

Get the value of `key` in `dictionary`.

```
getValue(dictionary dictionary, string key)
```

---

### Set Value in Dictionary

Set the value of `key` to `value` in `dictionary`.

```
setValue(variable dictionary, string key, string value)
```

## Files

### Base 64 Encode

Base 64 encodes `input`.

```
base64Encode(variable encodeInput)
```

---

### Base 64 Decode

Base 64 decodes `input`.

```
base64Decode(variable input)
```

---

### Hash

Generate a hash of `type` using `input`.

```
hash(variable input, enum ?type = "MD5")
```

#### Hash Types

- MD5
- SHA1
- SHA256
- SHA512

## Items

### Count Items

Returns the number of items in `input`.

```
count(variable input)
```

---

### Count Characters

Returns the number of characters in `input`.

```
countChars(variable input)
```

---

### Count Words

Returns the number of words in `input`.

```
countWords(variable input)
```

---

### Count Sentences

Returns the number of sentences in `input`.

```
countSentences(variable input)
```

---

### Count Lines

Returns the number of lines in `input`.

```
countLines(variable input)
```

---

### Get Name

Get the name of `input`.

```
getName(variable item)
```

---

### Get Type

Get the type of `input`.

```
typeOf(variable input)
```

---

### Set Name

Set the name of `item`.

```
setName(variable item, string name, boolean ?includeFileExtension = false)
```

---

### Content Graph

Show `input` as a graph.

```
contentGraph(variable input)
```

## Lists

### Choose from List

Prompt the user to choose an item from `list`, optionally with `prompt` . Returns the item(s) chosen.

```
chooseFromList(variable list, string ?prompt, boolean ?selectMultiple = false)
```

---

### Get First Item

Get the first item from `the list`.

```
firstListItem(variable list)
```

---

### Get Last Item

Get the last item from `the list`.

```
lastListItem(variable list)
```

---

### Get Random Item

Get a random item from `the list`.

```
randomListItem(variable list)
```

---

### Get Item at Index

Get the item at `index` from `list`. Counting in Shortcuts starts at `1`.

```
getListItem(variable list, integer index)
```

---

### Get List Items in Range

Get items in the list within the range of `start` to `end`.

```
getListItems(variable list, integer start, integer end)
```

---

### List

Create a list of items. The `listItem` argument has no limit.

```
list(string ...listItem)
```

## Math

### Calculate

Perform a complex calculation.

```
calculate(enum operation, integer operandOne, integer ?operandTwo)
```

The `operandTwo` is optional as not all of the operations require a second operand.

#### Calculation Operations

- x^2
- х^3
- x^у
- e^x
- 10^x
- In(x)
- log(x)
- √x
- ∛x
- x!
- sin(x)
- cos(X)
- tan(x)
- abs(x)

---

### Calculate Expression

To do this, create a variable and set a basic mathematical expression (+,-,*,/,%) as the value.

```
@expression = 25 * 6 + (5 / 6) % 2
```

---

### Calculate Statistics

Calculate statistic of `operation` on `input`.

```
statistic(enum operation, variable input)
```

#### Statistics Operations

- Average
- Minimum
- Maximum
- Sum
- Median
- Mode
- Range
- Standard Deviation

---

### Rounding

Round `number` to `roundTo`.

Normal

```
round(integer number, string roundTo)
```

Always Round Up

```
ceil(integer number, string roundTo)
```

Always Round Down

```
floor(integer number, string roundTo)
```

#### Shorthands for `roundTo`:

- `1` - Ones Place
- `10` - Tens Place
- `100` - Hundreds Place
- `1000` - Thousands
- `10000` - Ten Thousands
- `100000` - Hundred Thousands
- `1000000` - Millions

## Measurements

### Measurement

Create a measurement.

```
measurement(string magnitude, enum unitType, string unit)
```

Example:

```
measurement("2000","Information Storage","MB")
```

#### Measurement Types & Units

 - Acceleration
    - m/s²
    - g-force
 - Angle
   - degrees
   - arcminutes
   - arcseconds
   - radians
   - grad
   - revolutions
 - Area
   - Mm²
   - square kilometers
   - square meters
   - square centimeters
   - mm²
   - um²
   - nm²
   - square inches
   - square feet
   - square yards
   - square miles
   - acres
   - a
   - hectares
 - Concentration Mass
   - g/L
   - mg/dL
   - µg/m³
 - Dispersion
   - ppm
 - Duration
   - milliseconds
   - microseconds
   - nanoseconds
   - ps
   - seconds
   - minutes
   - hours
 - Electric Charge
   - C
   - MAh
   - kAh
   - Ah
   - mAh
   - µAh
 - Electric Current
   - MA
   - kA
   - amp
   - mA
   - µA
 - Electric Potential Difference
   - MV
   - kV
   - volt
   - mV
   - µV
 - Electric Resistance
   - MΩ
   - kΩ
   - ohm
   - mΩ
   - µΩ
 - Energy
   - kJ
   - joule
   - kcal
   - cal
   - kWh
 - Frequency
   - tHz
   - GHz
   - MHz
   - kHz
   - Hz
   - mHz
   - µHz
   - nHz
   - fps
 - Fuel Efficiency
   - L/100km
   - mpg
 - Illuminance
   - lux
 - Information Storage
   - B
   - KB
   - MB
   - GB
   - TB
   - PB
   - EB
   - ZB
   - YB
 - Length
   - Mm
   - km
   - hm
   - dam
   - meter
   - dm
   - cm
   - mm
   - µm
   - nm
   - pm
   - in
   - ft
   - yd
   - mi
   - smi
   - ly
   - nmi
   - fathom
   - furlong
   - au
   - parsec
 - Mass
   - kg
   - gram
   - dg
   - cg
   - mg
   - µg
   - ng
   - pg
   - oz
   - lb
   - stone
   - t
   - ton
   - carat
   - oz t
   - slug
 - Power
   - TW
   - GW
   - MW
   - kW
   - watt
   - mW
   - µW
   - nW
   - pW
   - fW
   - hp
 - Pressure
   - N/m²
   - GPa
   - MPa
   - kPa
   - hPa
   - " Hg
   - bar
   - mbar
   - mm Hg
   - psi
 - Speed
   - m/s
   - km/hr
   - mi/hr
   - kn
 - Temperature
   - K
   - ºC
   - ºF
 - Volume
   - ML
   - kL
   - liter
   - dL
   - cL
   - mL
   - km³
   - m³
   - dm³
   - cm³
   - mm³
   - in³
   - ft³
   - yd³
   - mi³
   - acre ft
   - bushel
   - tsp
   - tbsp
   - fl oz
   - pt
   - qt
   - Imp gal
   - mcup

---

### Convert Measurement

Convert `measurement` to `unitType` in `unit`.

```ruby
convertMeasurement(variable measurement, enum unitType, string unit)
```

## Network

### Is Online

Returns a boolean based on if the user has a working internet connection. This is an alias of the default **Get IP Address** action.

```
isOnline()
```

### Get Local IP

Get the local IP of the user.

```
getLocalIP(enum ?type = "IPv4")
```

#### IP Types

- IPv4
- IPv6

---

### Get External IP

Get the external IP of the user.

```
getExternalIP(enum ?type = "IPv4")
```

---

### Set Cellular Data

Turn cellular data on or off.

```
setCellularData(boolean status)
```

---

### Set Cellular Voice

Turn cellular voice and data on or off.

```
setCellularVoice(boolean status)
```

---

### Set WiFi

Turn WiFi on or off.

```
setWifi(boolean status)
```

## No-ops (noonce)

### Comments

{: .note }
Comment actions have been abstracted into programming language style comments: [Comments](../comments)

---

### Nothing

Do nothing and/or output nothing.

```
nothing()
```

## Notification

### Ask for Input

Ask for input with `prompt`, with optional `inputType` and `defaultValue`.

```
prompt(string prompt, enum ?inputType = "Text", string ?defaultValue)
```

#### Input Types

- Text
- Number
- URL
- Date
- Time
- Date and Time

---

### Play Sound

Play sound `input`.

```
playSound(variable input)
```

---

### Alert

Show an alert with `title` as the title and `alert` as the body.

```
alert(string alert, string ?title)
```

---

### Confirm

Show a confirmation alert with `title` as the title and `alert` as the body. If the user presses cancel, the Shortcut will stop.

```
confirm(string alert, string ?title)
```

---

### Show Notification

Trigger a custom notification.

```
notification(string body, string ?title, boolean ?playSound = true)
```

## Numbers

### Format File Size

Format the size of the `file` to `format`.

```
fileSize(variable file, enum format)
```

#### File Size Format Units

- Closest Unit
- Bytes
- Kilobytes
- Megabytes
- Gigabytes
- Terabytes
- Petabytes
- Exabytes
- Zettabytes
- Yottabytes

---

### Format Number

Format `number` with `decimalPlaces` number of decimal places.

```
formatNumber(integer number, integer ?decimalPlaces = 2)
```

---

### Get Numbers

Get numbers from `input`.

```
getNumbers(variable input)
```

---

### Random Number

Generate a random number with `min` as the minimum value and `max` as the maximum value.

```
randomNumber(integer min, integer max)
```

## Shell

### Run Shell Script

Run `script` with `input` as `inputMode` in `shell`.

```
runShellScript(string script, variable input, string ?shell = "/bin/zsh", string ?inputMode = "to stdin")
```

#### Input Modes

- to stdin
- as arguments

## Script Editor

### Run AppleScript

Run Apple Script `script` on `input`.

```
runAppleScript(variable input, string script)
```

*macOS only*

---

### Run JavaScript for Mac Automation

Run JavaScript `script` on `input`.

```
runJSAutomation(variable input, string script)
```

## Shortcuts

### Get Shortcuts

Get all the user's shortcuts.

```
getShortcuts()
```

---

### Create Shortcut

Create a new Shortcut.

```
makeShortcut(string name, boolean ?open = true)
```

*iOS 16.4+ only*

---

### Search Shortcuts

Search Shortcuts.

```
searchShortcuts(string query)
```

*iOS 16.4+ only*

---

### Get Shortcut Detail

Get a detail of a Shortcut.

```
shortcutDetail(string detail, variable shortcut)
```

#### Details

- Folder
- Icon
- Action Count
- File Size
- File Extension
- Creation Date
- File Path
- Last Modified Date
- Name

---

### Open Shortcut

Open Shortcut with name `name`.

```
open(variable name)
```

---

### Run Shortcut

Run Shortcut with name `shortcutName`, providing it with `output`.

```
run(string shortcutName, variable output)
```

---

### Run Self

Run the current Shortcut providing it with `output`.

```
runSelf(variable output)
```

---

### Stop Shortcut

Stop the Shortcut. Equivalent to `exit` or `die` in other languages.

```
stop()
```

## System

### Dismiss Siri

Dismiss Siri and continue.

```
dismissSiri()
```

---

### Set Wallpaper

Set device wallpaper to `image`.

```
setWallpaper(variable image)
```

---


### Get Wallpaper

Get device wallpaper.

```
getWallpaper()
```

*iOS 16.2+ only*

## Variables

{: .note }
Variables are abstracted into variable statements, see [Variables, Constants & Globals](/language/variables-constants-globals.html).

## Windows

### Find Windows

All arguments are optional.

Get all windows and sort by `sortBy`, order by `orderBy`, and limit by `limit`.

```
getWindows(enum ?sortBy, enum ?orderBy, integer ?limit)
```

### Sort By

- Title
- App Name
- Width
- Height
- X Position
- V Y Position
- Window Index
- Name
- Random

#### Order By

- asc
- desc

### Move Windows

Move `window` to `position`.

```
moveWindow(variable window, enum position, boolean ?bringToFront = true)
```

#### Window Positions

- Top Left
- Top Center
- Top Right
- Middle Left
- Center
- Middle Right
- Bottom Left
- Bottom Center
- Bottom Right
- Coordinates

### Resize Windows

Resize `window` to `configuration`.

```
resizeWindow(variable window, enum configuration)
```

#### Window Configurations

- Fit Screen
- Top Half
- Bottom Half
- Left Half
- Right Half
- Top Left Quarter
- Top Right Quarter
- Bottom Left Quarter
- Bottom Right Quarter
- Dimensions

---

## X-Callback

### Open X-Callback URL

Open X-Callback URL `url`.

```
openXCallbackURL(string url)
```

---

### Open Custom X-Callback URL

Open X-Callback URL `url`, with success key `successKey`, cancel key `cancelKey`, and error key `errorKey`, and custom
X-Success URL `successURL`.

```
openCustomXCallbackURL(string url, string ?successKey, string ?cancelKey, string ?errorKey, string ?successURL)
```
