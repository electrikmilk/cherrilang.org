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

```ruby
getClipboard()
```

---

### Copy to Clipboard

Copy `input` to the clipboard. `local` is a boolean. `expire` is a date as a string (e.g. Today at 3pm).

```ruby
copyToClipboard(input,local,expire)
```

---

## System

### Airdrop

Prompt to AirDrop `input`.

```ruby
airdrop(input)
```

---

### Share

Share `input` via the Share Sheet.

```ruby
share(input)
```
