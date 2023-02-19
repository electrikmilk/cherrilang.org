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

### Hide App

Hide app with `appId`. For example `com.apple.AppStore`.

```
hideApp(appId)
```

#### App ID Shorthands

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

### Hide All Apps

Hide all open apps. `except` is an enumerable of `appId`s, for example `com.apple.DocumentsApp`.

```
hideAllApps(...except)
```

---

### Open App

Open app with `appId`. For example `com.apple.AppStore`.

```
openApp(appId)
```

_Contributed by [JosephShenton](https://github.com/JosephShenton)_.

---

### Quit App

Quit app with `appId`. For example `com.apple.DocumentsApp`.

```
quitApp(appId)
```

---

### Quit All Apps

Quit all open apps, asking to save changes. `except` is an enumerable of `appId`s, for example `com.apple.DocumentsApp`.

```
quitAllApps(...except)
```

---

### Kill App

Quit app with `appId` without asking to save changes. For example `com.apple.facetime`.

```
killApp(appId)
```

---

### Kill All Apps

{: .warning }
This will quit all of the apps on the device without asking to save changes!

Quit all open apps, **without** asking to save changes. `except` is an enumerable of `appId`s, for example `com.apple.DocumentsApp`.

```
killAllApps(...except)
```

---

### Split Screen Apps

Split two apps on the device screen.

```
splitApps(firstAppId,secondAppId,ratio)
```

`ratio` is an optional enumerable that takes the string value "half" or "thirdByTwo". The default value is "half".

## Content

### Get On-Screen Content

Get content on device screen.

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
output(output)
```

---

### Must Output

Stop and output `output`. Respond with `response` if there is nowhere to output.

```
mustOutput(output,response)
```

---

### Output or Clipboard

Stop and output `output`. Copy to the clipboard if there is nowhere to output.

```
outputOrClipboard(output)
```

---

### Stop Shortcut

Stop the Shortcut. Equivalent to `exit` or `die` in other languages.

```
stop()
```

---

### Wait

Wait `n` number of seconds then proceed.

```
wait(n)
```

---

### Wait to Return

Wait for the user to return to the Shortcut. This usually proceeds an action that directs the user out of the Shortcuts app.

```
waitToReturn()
```

## Device

### Get Battery Level

Get the current battery level of device.

```
getBatteryLevel()
```

---

### Battery Is Charging

Returns boolean based on if the device is charging.

```
isCharging()
```

_**Minimum iOS version:** 16.2_

---

### Connected to Charger

Returns boolean based on if device is connected to a charger.

```
connectedToCharger()
```

_**Minimum iOS version:** 16.2_

---

### Get Device Detail

Get `detail` of device.

```
getDeviceDetail(detail)
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
toggleApperance()
```

---

### Light Apperance

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

Toggle device bluetooth.

```
toggleBluetooth()
```

---

### Set Bluetooth

Set device bluetooth on or off.

```
setBluetooth(status)
```

---

### Set Brightness

Set display brightness to `level`.

```
setBrightness(level)
```

---

### Set Volume

Set device volume to `level`.

```
setVolume(level)
```

--- 

### Start Screensaver

Start screen saver on Mac.

```
startScreensaver()
```

_**Note:** Mac-only action_

## Dictionaries

{: .note }
The dictionary action is abtracted into a variable value, see [Dictionary](../variables-globals.html#dictionaries).

---

### Get Dictionary

Get dictionary from `input`.

```
getDictionary(input)
```

---

### Get Values from Dictionary

Get only the values from `dictionary`.

```
getValues(dictionary)
```

---

### Get Keys from Dictionary

Get only the keys from `dictionary`.

```
getKeys(dictionary)
```

---

### Get Value from Dictionary

Get the value of `key` in `dictionary`.

```
getValue(dictionary,key)
```

---

### Set Value in Dictionary

Set the value of `key` to `value` in `dictionary`.

```
setValue(key,value,dictionary)
```

## Files

### Base 64 Encode

Base 64 encode `input`.

```
base64Encode(input)
```

---

### Base 64 Decode

Base 64 decode `input`.

```
base64Decode(input)
```

---

### Hash

Generate a hash of `type` using `input`.

```
hash(input,type)
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
countItems(input)
```

---

### Count Characters

Returns the number of characters in `input`.

```
countChars(input)
```

---

### Count Words

Returns the number of words in `input`.

```
countWords(input)
```

---

### Count Sentences

Returns the number of sentences in `input`.

```
countSentences(input)
```

---

### Count Lines

Returns the number of lines in `input`.

```
countLines(input)
```

---

### Get Name

Get the name of `input`.

```
getName(input)
```

---

### Get Type

Get the type of `input`.

```
typeOf(input)
```

---

### Set Name

Set the name of `input`. `includeFileExtension` is a boolean.

```
setName(input,name,includeFileExtension)
```

### Content Graph

Show `input` as graph.

```
contentGraph(input)
```

## Lists

### Choose from List

Prompt the user with `prompt` to choose an item from `list`. Returns the item chosen. `selectMultiple` is an optional boolean, the default value is `false`.

```
chooseFromList(list,prompt,selectMultiple)
```

---

### Get First Item

Get the first item from `list`.

```
firstListItem(list)
```

---

### Get Last Item

Get the last item from `list`.

```
lastListItem(list)
```

---

### Get Random Item

Get a random item from `list`.

```
randomListItem(list)
```

---

### Get Item at Index

Get item at `index` from `list`. Counting in Shortcuts starts at `1`.

```
getListItem(list,index)
```

---

### Get List Items in Range

Get items in range of `start` to `end`.

```
getListItems(list,start,end)
```

---

### List

Store a list of `item` in a variable. No limit on `item` arguments.

```
@myList = list(...item)
```

## Math

### Calculate

Complex calculation using `input`.

```
calculate(operation,operandOne,operandTwo)
```

The `operandTwo` is optional, as not all of the operations require a second operand.

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

### Calculate Expression

To do this, create a variable and set an expression as the value:

```
@expression = 25 * 6 + (5 / 6) % 2
```

---

### Calculate Statistics

Calculate statistic of `operation` on `input`.

```
statistic(operation,input)
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

- `round(number,roundTo)` - Normal
- `roundUp(number,roundTo)` - Always Round Up
- `roundDown(number,roundTo)` - Always Round Down

Round `number` to `roundTo`.

Shorthands for `roundTo` value:

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

```ruby
measurement(magnitude,unitType,unit)
```

Example:

```ruby
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

### Convert Measurement

Convert `measurement` to `unitType` in `unit`.

```ruby
convertMeasurement(measurement,unitType,unit)
```

## Network

### Is Online

Returns a boolean based on if the user has a working internet connection. This is an alias of the default **Get IP Address** action.

```
isOnline()
```

### Get Local IP

Get the local IP of the user of `type`. `type` is optional, default is "IPv4".

```
getLocalIP(type)
```

#### IP Types

- IPv4
- IPv6

---

### Get External IP

Get the external IP of the user of `type`. `type` is optional, default is "IPv4".

```
getExternalIP(type)
```

---

### Set Cellular Data

Turn cellular data on or off.

```
setCellularData(bool)
```

---

### Set Cellular Voice

Turn cellular voice and data on or off.

```
setCellularVoice(bool)
```

---

### Set WiFi

Turn WiFi on or off.

```
setWifi(bool)
```

## No-ops (noonce)

### Comments

#### Single line comment

```js
// This is a single-line comment.
```

#### Multiline comment

```js
/*
This is
a multi-line
comment.
*/
```

Either type of comment results in a comment action.

---

### Nothing

Do nothing and/or output nothing.

```
nothing()
```

## Notification

### Ask for Input

Ask for input of `type` with `prompt`, with `default` as the default input. `default` is optional.

```
askForInput(type,prompt,default)
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
playSound(input)
```

---

### Show Alert

Show an alert with `title` as the title and `alert` as the body. `cancelButton` is an optional boolean, default is `true`.

```
alert(alert,title,cancelButton)
```

---

### Show Notification

Trigger a custom notification. `playSound` is an optional boolean, default is `true`.

```
notification(body,title,playSound)
```

## Numbers

### Format File Size

Format the size of `file` to `format`.

```
fileSize(file,format)
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
formatNumber(number,decimalPlaces)
```

---

### Get Numbers

Get numbers from `input`.

```
getNumber(input)
```

---

### Random Number

Generate a random number with `min` as the minimum value and `max` as the maximum value.

```
randomNumber(min,max)
```

## Shell

### Run Shell Script

Run `script` with `input` as `inputMode` in `shell`. `shell` and `inputMode` are optional. Default shell is `/bin/zsh` and input mode is `to stdin`.

```
runShellScript(script,input,shell,inputMode)
```

#### Input Modes

- to stdin
- as arguments

## Script Editor

### Run AppleScript

Run Apple Script `script` on `input`.

```
runAppleScript(input,script)
```

---

### Run JavaScript for Mac Automation

Run JavaScript `script` on `input`.

```
runJSAutomation(input,script)
```

## Shortcuts

### Get Shortcuts

Get all the users shortcuts.

```
getShortcuts()
```

---

### Open Shortcut

Open Shortcut with name `name`.

```
open(name)
```

---

### Run Shortcut

Run Shortcut with name `name`, providing it with `input`. `isSelf` is an optional boolean, default is `false`.

```
run(name,input,isSelf)
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
setWallpaper(image)
```

---


### Get Wallpaper

Get device wallpaper.

```
getWallpaper()
```

_**Minimum iOS version:** 16.2_

## Variables

{: .note }
Variables are abstracted into variable statements, see [Variables & Globals](/language/variables-globals.html).

## Windows

### Find Windows

All arguments are optional.

Get all windows and sort by `sortBy`, order by `orderBy` and limit by `limit`.

```
getWindows(sortBy,orderBy,limit)
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

Move `window` to `position`. `bringToFront` is a boolean, the default value is `true`.

```
moveWindow(window,position,bringToFront)
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
resizeWindow(window,configuration)
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
openXCallbackURL(url)
```

---

### Open Custom X-Callback URL

Open X-Callback URL `url`, with Success Key `successKey`, Cancel Key `cancelKey`, and Error Key `errorKey`, and custom
X-Success URL `successURL`.

```
openXCustomCallbackURL(url,successKey,cancelKey,errorKey,successURL)
```
