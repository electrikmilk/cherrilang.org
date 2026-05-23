---
title: Device
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 6
---

# Device Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/device'
> ```

### Get Device Detail

Get a detail about current device.

```
enum deviceDetail {
    'Device Name',
    'Device Hostname',
    'Device Model',
    'Device Is Watch',
    'System Version',
    'Screen Width',
    'Screen Height',
    'Current Volume',
    'Current Brightness',
    'Current Appearance',
}

getDeviceDetail(deviceDetail detail)
```

---

### Get On-Screen Content

Get the content currently on-screen.

```
getOnScreenContent()
```

---

### Get Orientation

Get the current orientation of the device.

```
getOrientation(): text
```

---

### Lock Screen

Lock the device screen.

```
lockScreen()
```

---

### Reboot

Power off the device, then power it on again.

```
reboot()
```

---

### Set Airplane Mode

```
setAirplaneMode(bool status)
```

---

### Shut Down

Power off the device.

```
shutdown()
```

---

### Toggle Airplane Mode

```
toggleAirplaneMode()
```

---

### Vibrate Device

Vibrate the device. Only applies to Apple devices with the haptic engine.

```
vibrate()
```

**Only supported on iOS/iPadOS.**

### Show Control Center

Open the control center on the device.

```
showControlCenter()
```

---

## Battery

### Connected to Charger

Determines if the device is currently connected to a charger.

```
connectedToCharger(): bool
```

---

### Get Battery Level

Get the current level of charge of the device battery.

```
getBatteryLevel()
```

---

### Is Charging

Determines if the device is currently charging.

```
isCharging(): bool
```

---

### Charge Limit

Returns the current charge limit of the device battery.

```
getChargeLimit(): number
```

---

### Set Low Power Mode

```
setLowPowerMode(bool status)
```

**Only supported on iOS/iPadOS.**

---

### Toggle Low Power Mode

```
toggleLowPowerMode()
```

**Only supported on iOS/iPadOS.**

## Screen Time

### Get Website & App Activity

```
enum deviceUsageType {
    'all',
    'app',
    'website',
}

enum usageDuration {
    'today',
    'yesterday',
    'lastWeek',
    'thisWeek',
    'thisMonth',
    'thisYear',
    'specifiedDay',
    'inBetween',
}

getDeviceUsage(deviceUsageType ?usageType = "all", variable ?device, usageDuration ?during = "today", text ?startTime, text ?startTime)
```
## Apps

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

---

### Quit All Apps

Quits all apps. Allows exceptions.

```
quitAllApps(text ...?except)
```

---

### Quit App

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

## Connectivity

### Set Airplane Mode

```
setAirplaneMode(bool status)
```

---

### Set Bluetooth

```
setBluetooth(bool status)
```

---

### Set Cellular Data

```
setCellularData(bool status)
```

---

### Set Wifi

```
setWifi(bool status)
```

---

### Toggle Airplane Mode

```
toggleAirplaneMode()
```

---

### Toggle Bluetooth

```
toggleBluetooth()
```

---

### Toggle Cellular Data

```
toggleCellularData()
```

---

### Toggle Wifi

```
toggleWifi()
```

## Display

### Get Orientation

Get the current orientation of the device.

```
getOrientation(): text
```

---

### Set Brightness

```
setBrightness(float brightness)
```

---

### Set Orientation Lock

```
setOrientationLock(bool status)
```

**Only supported on iOS/iPadOS.**

---

### Toggle Orientation Lock

```
toggleOrientationLock()
```

**Only supported on iOS/iPadOS.**

## Passwords

### Search Passwords

Searches passwords in the Passwords app.

```
searchPasswords(text query)
```

## Personal Hotspot

### Set Personal Hotspot

```
setHotspot(bool status)
```

**Only supported on iOS/iPadOS.**

---

### Toggle Personal Hotspot

```
toggleHotspot()
```

**Only supported on iOS/iPadOS.**

## System

### Dismiss Siri

Dismisses Siri.

```
dismissSiri()
```

---

### Return to Home Screen

Returns to the device home screen.

```
returnToHomescreen()
```

**Only supported on iOS/iPadOS.**
