---
title: Dropbox
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 8
---

# Dropbox Actions
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
> #include 'actions/dropbox'
> ```

### Append to Dropbox File

Future release
{: .label .label-purple }

Append text to a Dropbox text file at `filePath`. Requires user to setup Dropbox account in Shortcuts app.

```
appendDropboxFile(text filePath, text input, bool ?onNewLine = false)
```

---

### Get Dropbox File

Future release
{: .label .label-purple }

Get the file at `path` in Dropbox. Requires user to setup Dropbox account in Shortcuts app.

```
getDropboxFile(text path, bool ?errorIfNotFound = true)
```

---

### Prepend to Dropbox File

Future release
{: .label .label-purple }

Prepend text to a Dropbox text file at `filePath`. Requires user to setup Dropbox account in Shortcuts app.

```
prependDropboxFile(text filePath, text input, bool ?onNewLine = false)
```

---

### Save File to Dropbox

Save a file to Dropbox. Requires user to setup Dropbox account in Shortcuts app.

```
saveToDropbox(variable file, text path, bool ?overwrite = false)
```

---

### Save File to Dropbox Prompt

Prompt to save a file to Dropbox. Requires user to setup Dropbox account in Shortcuts app.

```
saveToDropboxPrompt(variable file, bool ?overwrite = false)
```

---

### Select Dropbox File

Future release
{: .label .label-purple }

Prompt the user to select one or optionally multiple files from Dropbox, starting at `initialPath`. Requires user to setup Dropbox account in Shortcuts app.

```
selectDropboxFile(text ?initialPath, bool ?selectMultiple = false)
```
