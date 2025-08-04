---
title: Settings
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 17
---

# Settings Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

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
