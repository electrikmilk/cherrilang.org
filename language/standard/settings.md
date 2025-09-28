---
title: Settings
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 18
---

# Settings Actions
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
> #include 'actions/settings'
> ```

### Set Stage Manager

```
setStageManager(bool status, bool ?showDock = true, bool ?showRecentApps = true)
```

---

### Toggle Stage Manager

```
toggleStageManager(bool ?showDock = true, bool ?showRecentApps = true)
```

## Appearance

### Set Appearance to Dark

```
darkMode()
```

---

### Set Appearance to Light

```
lightMode()
```

---

### Toggle Appearance

```
toggleAppearance()
```

## Device

### Set Brightness

```
setBrightness(float brightness)
```

---

### Set Volume

```
setVolume(float volume)
```

## Display

### Set Night Shift

```
setNightShift(bool status)
```

---

### Set True Tone

```
setTrueTone(bool status)
```

---

### Toggle Night Shift

```
toggleNightShift()
```

---

### Toggle True Tone

```
toggleTrueTone()
```

## Notifications

### Get Focus Mode

Get the current Focus Mode.

```
getFocusMode()
```

---

### Set Focus Mode

Set a default focus mode on or off. If setting to on, optionally set until with optional arguments for time or event.

```
enum focusModes {
    'Do Not Disturb',
    'Personal',
    'Work',
    'Sleep',
    'Driving',
}

enum focusUntil {
    'Turned Off',
    'Time',
    'I Leave',
    'Event Ends',
}

setFocusMode(focusModes ?focusMode = "Do Not Disturb", focusUntil ?until = "Turned Off", text ?time, variable ?event)
```

---

### Toggle Do Not Disturb

```
toggleDND()
```

---

### Toggle Focus Mode

Toggle a focus mode.

```
enum focusModes {
    'Do Not Disturb',
    'Personal',
    'Work',
    'Sleep',
    'Driving',
}

toggleFocusMode(focusModes ?focusMode = "Do Not Disturb")
```

---

### Turn Off Do Not Disturb

```
DNDOff()
```

---

### Turn On Do Not Disturb

```
DNDOn()
```

## Wallpaper

### Get Wallpaper

Get current device wallpaper.

```
getWallpaper()
```

---

### Get Wallpapers

Get device wallpapers.

```
getAllWallpapers(): array
```

---

### Set Wallpaper

Sets the device wallpaper to `input`.

```
setWallpaper(variable input)
```

## Wireless

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
