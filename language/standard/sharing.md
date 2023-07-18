---
title: Sharing
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 7
---

# Sharing Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Clipboard

### Get Clipboard

Get the current contents of the clipboard.

```
getClipboard()
```

---

### Copy to Clipboard

Copy `input` to the clipboard. `local` is a boolean that is `false` by default. `expire` is when the information should leave the clipboard if it hasn't already and is a date as a string (e.g. Today at 3pm).

```
copyToClipboard(input,local=false,expire="")
```

---

## System

### Airdrop

Prompt to AirDrop `input`.

```
airdrop(input)
```

---

### Share

Share `input` via the Share Sheet.

```
share(input)
```
