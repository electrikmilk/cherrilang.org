---
title: macOS Only
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 10
---

# macOS Only Actions
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
> #include 'actions/mac'
> ```

### Get Apps

Get list of applications.

```
getApps(): array
```

**Only supported on macOS.**

---

### Make Disk Image

Create a new disk image.

```
makeDiskImage(text name, variable contents, bool ?encrypt = false)
```

**Only supported on macOS.**

---

### Make Sized Disk Image

Create a new disk image of a specific size.

```
enum storageUnit {
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'Y',
}

makeSizedDiskImage(text name, variable contents, #storageUnit (qty)?diskSize = qty(1, "GB"), bool ?encrypt = false)
```

**Only supported on macOS.**

---

### Take Interactive Screenshot

```
enum screenshotSelection {
    'Window',
    'Custom',
}

takeInteractiveScreenshot(screenshotSelection ?selection = "Window")
```

**Only supported on macOS.**

## Device

### Display Sleep

Only puts the Mac display to sleep, device remains awake.

```
displaySleep()
```

**Only supported on macOS.**

---

### Sleep

Puts the Mac to sleep.

```
sleep()
```

**Only supported on macOS.**

---

### Start Screensaver

```
startScreensaver()
```

**Only supported on macOS.**

## Scripts

### Run Apple Script

```
runAppleScript(rawtext script, variable input)
```

**Only supported on macOS.**

---

### Run JavaScript for Automation

```
runJSAutomation(variable input, text script)
```

**Only supported on macOS.**

---

### Run Shell Script

```
runShellScript(text script, variable input, text ?shell = "/bin/zsh", text ?inputMode = "to stdin")
```

**Only supported on macOS.**

## Windows

### Get Windows

```
enum windowSorting {
    'Title',
    'App Name',
    'Width',
    'Height',
    'X Position',
    'Y Position',
    'Window Index',
    'Name',
    'Random',
}

enum sortOrder {
    'asc',
    'desc',
}

getWindows(windowSorting ?sortBy, sortOrder ?orderBy, number ?limit)
```

**Only supported on macOS.**

---

### Move Window

Move a window to a defined position.

```
enum windowPosition {
    'Top Left',
    'Top Center',
    'Top Right',
    'Middle Left',
    'Center',
    'Middle Right',
    'Bottom Left',
    'Bottom Center',
    'Bottom Right',
    'Coordinates',
}

moveWindow(variable window, windowPosition position, bool ?bringToFront = true)
```

**Only supported on macOS.**

---

### Resize Window

Resize a window to defined size.

```
enum windowSize {
    'Fit Screen',
    'Top Half',
    'Bottom Half',
    'Left Half',
    'Right Half',
    'Top Left Quarter',
    'Top Right Quarter',
    'Bottom Left Quarter',
    'Bottom Right Quarter',
    'Dimensions',
}

resizeWindow(variable window, windowSize configuration)
```

**Only supported on macOS.**
