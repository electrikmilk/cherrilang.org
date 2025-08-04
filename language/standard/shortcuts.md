---
title: Shortcuts
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 19
---

# Shortcuts Actions
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
> #include 'actions/shortcuts'
> ```

### Create Shortcut Link

```
createShortcutLink(variable shortcut)
```

---

### Get Shortcut Detail

Get a detail about a Shortcut.

```
enum shortcutDetail {
    'Folder',
    'Icon',
    'Action Count',
    'File Size',
    'File Extension Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
}

getShortcutDetail(variable shortcut, shortcutDetail detail)
```

---

### Get Shortcuts

Get all of the Shortcuts on the device.

```
getShortcuts(): array
```

---

### Make Shortcut

Create a shortcut.

```
makeShortcut(text name, bool ?open = true)
```

---

### Open Shortcut

Open a shortcut in the Shortcuts app.

```
openShortcut(text shortcutName)
```

---

### Run Self

Run the current Shortcut with optional output.

```
runSelf(variable output)
```

---

### Run Shortcut

Run Shortcut with name `shortcutName`, providing it with `input`.

```
run(text shortcutName, variable input)
```

---

### Search Shortcuts

Search the users Shortcuts.

```
searchShortcuts(text query)
```
