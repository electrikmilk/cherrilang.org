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

Get a detail about the current device.

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
