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

{: .note-title }
> Required Include
> 
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

---

### Make Disk Image

Create a new disk image.

```
makeDiskImage(text name, variable contents, bool ?encrypt = false)
```

---

### Make Size Disk Image

Make a sized disk image.

```
makeSizedDiskImage(text name, variable contents, text ?size = "1 GB", bool ?encrypt = false)
```

---

### Take Interactive Screenshot

```
enum screenshotSelection {
    'Window',
    'Custom',
}

takeInteractiveScreenshot(screenshotSelection ?selection = "Window")
```

## Device

### Display Sleep

Only puts the Mac display to sleep, device remains awake.

```
displaySleep()
```

---

### Sleep

Puts the Mac to sleep.

```
sleep()
```

---

### Start Screensaver

```
startScreensaver()
```

## Scripts

### Run Apple Script

```
runAppleScript(variable input, text script)
```

---

### Run JavaScript for Automation

```
runJSAutomation(variable input, text script)
```

---

### Run Shell Script

```
runShellScript(text script, variable input, text ?shell = "/bin/zsh", text ?inputMode = "to stdin")
```

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
