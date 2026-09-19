---
title: Storage
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 20
---

# Storage Actions
{: .no_toc }

Future release
{: .label .label-purple }

{: .warning }
These actions are only available on Apple platforms (iOS, macOS, etc.) version 27 or greater.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/storage'
> ```

{: .important }
There is currently no method of adding preset storage values as you can in the Shortcuts app; you must set initial values at the top of your Shortcut using `storeValue()` below.

### Store Content

Store content by a key, optionally globally or specific to the Shortcut.

```
storeValue(text key, text value, bool ?global = false)
```

**Requires version 27 or later.**

---

### Get Stored Content

Get previously stored content, optionally globally or specific to the Shortcut.

```
getStoredValue(text key, bool ?global = false)
```

**Requires version 27 or later.**

---

### Delete Stored Content

Delete previously stored content, optionally globally or specific to the Shortcut.

```
deleteStoredValue(text key, bool ?global = false)
```

**Requires version 27 or later.**
