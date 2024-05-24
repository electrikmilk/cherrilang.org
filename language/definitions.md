---
title: Definitions
layout: default
parent: Documentation
nav_order: 8
---

# Definitions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

Define aspects of your Shortcut, such as the color and glyph of the icon, how it responds
to no input, what it accepts as input, etc.

## Icon

Define the look of your Shortcut using one of the supported colors or glyphs.

```
#define color red
#define glyph apple
```

Most glyphs are supported, but not all the newest are yet. [Click here for the full list of supported glyphs](/language/glyphs.html)
.

### Color

- <span class="color" style="background-color: #ef6065"></span> `red`
- <span class="color" style="background-color: #fd7f60"></span> `darkorange`
- <span class="color" style="background-color: #f39e44"></span> `orange`
- <span class="color" style="background-color: #e7c21c"></span> `yellow`
- <span class="color" style="background-color: #3ac054"></span> `green`
- <span class="color" style="background-color: #00C8A8"></span> `teal`
- <span class="color" style="background-color: #00c2d6"></span> `lightblue`
- <span class="color" style="background-color: #00abef"></span> `blue`
- <span class="color" style="background-color: #3e5db8"></span> `darkblue`
- <span class="color" style="background-color: #7f51b5"></span> `violet`
- <span class="color" style="background-color: #ac6bd7"></span> `purple`
- <span class="color" style="background-color: #e978c6"></span> `pink`
- <span class="color" style="background-color: #B4B2A9"></span> `taupe`
- <span class="color" style="background-color: #808a95"></span> `gray`
- <span class="color" style="background-color: #555555"></span> `darkgray`

## Inputs & Outputs

Inputs and outputs accept [content item type](/language/types.html#content-item-types).

Inputs will default to all types. Outputs will default to no types. This is done to be consistent with the Shortcuts
file format.

```
#define inputs image, text
#define outputs app, file
```

These values must be separated by commas.

## NoInput

Define how your shortcut responds to no input.

Stop and give a specific response:

```
#define noinput stopwith "Response"
```

Get the contents of the clipboard:

```
#define noinput getclipboard
```

Ask for a [content item type](/language/types.html#content-item-types):

```
#define noinput askfor text
```

## From (Workflows)

This defines where your Shortcut shows up, `quickactions`, `sleepmode`, etc.

```
#define from menubar, sleepmode, onscreen
```

These values must be separated by commas.

### Workflows

- `menubar` - Menubar
- `quickactions` - Quick Actions
- `sharesheet` - Share Sheet
- `notifications` - Notifications Center Widget
- `sleepmode` - Sleep Mode
- `watch` - Show on Apple Watch
- `onscreen` - Receive On-Screen Content

## Name

This will be used as the name of the resulting Shortcut file. 

```
#define name My Shortcut
```

Cherri will ignore the name of the file and use the definition instead to create `My Shortcut.shortcut`.

## Version

Defines the minimum version of iOS your Shortcut supports. Warnings will be printed if you use actions that are not supported in the targeted version.

```
#define version 16.2
```
