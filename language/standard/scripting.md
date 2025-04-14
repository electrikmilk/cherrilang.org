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

Hide app with `appId`.

```
hideApp(text appId)
```

---

### Hide All Apps

Hide all open apps.

```
hideAllApps(text ...?except)
```

---

### Open App

Open app with `appId`.

```
openApp(text appId)
```

_Contributed by [JosephShenton](https://github.com/JosephShenton)_.

---

### Quit App

Quit app with `appId`.

```
quitApp(text appId)
```

---

### Quit All Apps

Quit all open apps, asking to save changes.

```
quitAllApps(text ...?except)
```

---

### Kill App

Quit an app with `appId` without asking to save changes.

```
killApp(text appId)
```

---

### Kill All Apps

{: .warning }
This will quit all the apps running on the device without asking to save changes!

Quit all open apps, **without** asking to save changes.

```
killAllApps(text ...?except)
```

---

### Split Screen Apps

Split two apps on the device screen.

```
splitApps(text firstAppID, text secondAppID, enum ?ratio = "half")
```

#### Ratios

- `half`
- `thirdByTwo`

---

### Get Apps

Gets all of the apps on the device.

```
getApps()
```

_**Note:** iOS 18+, macOS only_

## Content

### Get On-Screen Content

Get content on the device screen.

```
getOnScreenContent()
```

## Control Flow

These control flow actions have been abstracted into statements:
- [If/Otherwise](../control-flow#ifotherwise)
- [Repeat](../control-flow#repeat)
- [Repeat With Each](../control-flow#repeat-with-each)
- [Choose From Menu](../menus#choose-from-menu)

---

### Output

Stop and output `output`. Do nothing if there is nowhere to output.

```
output(text output)
```

---

### Must Output

Stop and output `output`. Respond with `response` if there is nowhere to output.

```
mustOutput(text output, text response)
```

---

### Output or Clipboard

Stop and output `output`. Copy to the clipboard if there is nowhere to output.

```
outputOrClipboard(variable output)
```

---

### Wait

Wait for `seconds`, then proceed.

```
wait(integer seconds)
```

---

### Wait to Return

Suspend the Shortcut until the user returns to the Shortcuts app.

```
waitToReturn()
```

## Device

### Get Battery Level

Get the device's current battery level.

```
getBatteryLevel()
```

---

### Battery Is Charging

Returns a boolean based on whether the device is charging.

```
isCharging()
```

*iOS 16.2+ only*

---

### Connected to Charger

Returns a boolean based on whether the device is connected to a charger.

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

### Get Wi-Fi Network Detail

```
getWifiDetail(enum detail)
```

#### Wi-Fi Network Details

- Network Name
- BSSID
- Wi-Fi Standard
- RX Rate
- TX Rate
- RSSI
- Noise
- Channel Number
- Hardware MAC Address

_**Note:** Enum values are case-sensitive._

---

### Get Cellular Network Detail

```
getCellularDetail(enum detail)
```

#### Cellular Network Details

- Carrier Name
- Radio Technology
- Country Code
- Is Roaming Abroad
- Number of Signal Bars

_**Note:** Enum values are case-sensitive._

---

### Lock Screen

Lock the device's screen.

```
lockScreen()
```

---

### Log Out User

Logout the current user.

```
logout()
```

*macOS only*

---

### Put Display to Sleep

Put the display to sleep.

```
displaySleep()
```

*macOS only*

---

### Toggle Appearance

Toggles system appearance from light to dark or dark to light.

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

Set display brightness (`0.0` - `1.0`).

```
setBrightness(float brightness)
```

---

### Set Night Shift

Set status of Night Shift.

```
setNightShift(bool status)
```

---

### Toggle Night Shift

Toggle Night Shift.

```
toggleNightShift()
```

---

### Set True Tone

Set the status of True Tone.

```
setTrueTone(bool status)
```

---

### Toggle True Tone

Toggle True Tone.

```
toggleTrueTone()
```

---

### Set Volume

Set device volume (`0.0` - `1.0`).

```
setVolume(float volume)
```

---

### Shut Down

Shut down the device.

```
shutdown()
```

---

### Restart

Restart the device.

```
reboot()
```

---

### Sleep

Set the device to enter sleep mode.

```
sleep()
```

*macOS only*

---

### Start Screensaver

Start screen saver on Mac.

```
startScreensaver()
```

*macOS only*

## Dictionaries

{: .note }
The dictionary action is abstracted into a variable value, see [Dictionary](../types.html#dictionary).

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
getValue(dictionary dictionary, text key)

// or raw string get as... but no variable references are allowed.
dictionary['key']
```

---

### Set Value in Dictionary

Set the value of `key` to `value` in `dictionary`.

```
setValue(variable dictionary, text key, variable value)
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

### URL Encode

URL encodes `input`.

```
urlEncode(text input)
```

---

### URL Decode

URL decodes `input`.

```
urlDecode(text input)
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
setName(variable item, text name, boolean ?includeFileExtension = false)
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
chooseFromList(variable list, text ?prompt, bool ?selectMultiple = false, bool ?selectAll = false)
```

---

### Get First Item

Get the first item from `the list`.

```
getFirstItem(variable list)
```

---

### Get Last Item

Get the last item from `the list`.

```
getLastItem(variable list)
```

---

### Get Random Item

Get a random item from `the list`.

```
getRandomItem(variable list)
```

---

### Get Item at Index

Get the item at `index` from `list`. Counting in Shortcuts starts at `1`.

```
getListItem(variable list, integer index)
```

{: .warning }
Shortcuts start counting indexes at 1.

---

### Get List Items in Range

Get items in the list within the range of `start` to `end`.

```
getListItems(variable list, integer start, integer end)
```

{: .warning }
Shortcuts start counting indexes at 1.

---

### List

Create a list of items. The `listItem` argument has no limit.

```
list(text ...listItem)
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

Calculate the statistic of `operation` on `input`.

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
round(integer number, text roundTo)
```

Always Round Up

```
ceil(integer number, text roundTo)
```

Always Round Down

```
floor(integer number, text roundTo)
```

#### Roundings for `roundTo`:

- Ones Place
- Tens Place
- Hundreds Place
- Thousands
- Ten Thousands
- Hundred Thousands
- Millions

## Measurements

### Measurement

Create a measurement.

```
measurement(text magnitude, enum unitType, text unit)
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
   - m
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

```
convertMeasurement(variable measurement, enum unitType, text unit)
```

## Network

### Is Online

Returns a boolean based on whether the user has a working internet connection. This is an alias of the default **Get IP Address** action.

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
prompt(text prompt, enum ?inputType = "Text", text ?defaultValue)
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
alert(text alert, text ?title)
```

---

### Confirm

Show a confirmation alert with `title` as the title and `alert` as the body. If the user presses cancel, the Shortcut will stop.

```
confirm(text alert, text ?title)
```

---

### Show Notification

Trigger a custom notification.

```
notification(text body, text ?title, boolean ?playSound = true)
```

## Numbers

### Number

Create a number value.

```
number(number number)
```

Keep in mind the following statements have the exact same output. A Number action is created automatically for an integer literal, just as a Text action is created for a text literal.

```ruby
@int = 5
@int = number(5)
```

The `number()` action should only be used to coerce text to a number.

```ruby
@five = "5"
@fiveNum = number(five) /* 5 */
```

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
runShellScript(text script, variable input, text ?shell = "/bin/zsh", text ?inputMode = "to stdin")
```

#### Input Modes

- to stdin
- as arguments

## Script Editor

### Run AppleScript

Run Apple Script `script` on `input`.

```
runAppleScript(variable input, text script)
```

*macOS only*

---

### Run JavaScript for Mac Automation

Run JavaScript `script` on `input`.

```
runJSAutomation(variable input, text script)
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
makeShortcut(text name, boolean ?open = true)
```

*iOS 16.4+ only*

---

### Search Shortcuts

Search Shortcuts.

```
searchShortcuts(text query)
```

*iOS 16.4+ only*

---

### Get Shortcut Detail

Get a detail of a Shortcut.

```
shortcutDetail(text detail, variable shortcut)
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
run(text shortcutName, variable output)
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
openXCallbackURL(text url)
```

---

### Open Custom X-Callback URL

Open X-Callback URL `url`, with success key `successKey`, cancel key `cancelKey`, and error key `errorKey`, and custom
X-Success URL `successURL`.

```
openCustomXCallbackURL(text url, text ?successKey, text ?cancelKey, text ?errorKey, text ?successURL)
```
