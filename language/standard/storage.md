---
title: Storage
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 20
---

# Storage Actions
{: .no_toc }

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

### Store Content

Store content by a key, optionally globally or specific to the Shortcut.

```
storeValue(text key, text value, bool ?global = false)
```

---

### Get Stored Content

Get previously stored content, optionally globally or specific to the Shortcut.

```
getStoredValue(text key, bool ?global = false)
```

---

### Delete Stored Content

Delete previously stored content, optionally globally or specific to the Shortcut.

```
deleteStoredValue(text key, bool ?global = false)
```
