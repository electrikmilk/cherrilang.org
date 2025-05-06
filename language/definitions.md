---
title: Definitions
layout: default
parent: Documentation
nav_order: 2
---

# Definitions

Define aspects of your Shortcut, such as the color and glyph of the icon, and how it responds
to no input, what types it accepts as input and outputs, etc.

{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Icon

Define the look of your Shortcut using one of the supported colors and glyphs.

### Color

```javascript
#define color red
```

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
- <span class="color" style="background-color: #9b8e89"></span> `taupe`
- <span class="color" style="background-color: #929e93"></span> `gray`
- <span class="color" style="background-color: #85909a"></span> `darkgray`

### Glyph

```javascript
#define glyph apple
```

You can find all of the identifiers for each Shortcut glyph at [glyphs.cherrilang.org](https://glyphs.cherrilang.org/).

## Accepted Input & Output Types

Inputs and outputs accept [content item type](/language/types.html#content-item-types).

Inputs will default to all types. Outputs will default to no types. This is done to be consistent with the Shortcuts
file format.

```ruby
#define inputs image, text
#define outputs app, file

alert(ShortcutInput)
```

Commas must separate these values.

## No Input

This defines how your Shortcut responds to no input.

### Stop and Respond

```ruby
#define noinput stopwith "Response"

alert(ShortcutInput)
```

### Get Clipboard Contents

```ruby
#define noinput getclipboard

alert(ShortcutInput)
```

### Ask for a [content item type](/language/types.html#content-item-types)

```ruby
#define noinput askfor text

alert(ShortcutInput)
```

## From (Workflows)

This defines where your Shortcut appears.

```ruby
#define from menubar, sleepmode, onscreen

alert(ShortcutInput)
```

Commas must separate these values.

### Workflows

- `menubar` - Menubar
- `quickactions` - Quick Actions
- `sharesheet` - Share Sheet
- `notifications` - Notifications Center Widget
- `sleepmode` - Sleep Mode
- `watch` - Show on Apple Watch
- `onscreen` - Receive On-Screen Content

## Quick Action Types

Future Release
{: .label .label-purple }

To define quick action types, first add `quickactions` to a [`from`](#from-workflows) definition (See above).

Then this defines which quick actions your Shortcut should be available in. Click on the info circle to view the result.

```
#define quickactions finder, services
```

Commas must separate these values.

### Quick Actions

- `finder` - Defines it as a Quick Action in Finder.
- `services` - Defines it as an item in the Services menu.

## macOS only or non-macOS

Define the `mac` definition with a value of `true` if your Shortcut is mainly meant to be a Mac shortcut, or false if it's primarily meant to be used on iOS.

This will make it so an error is thrown if you use an action that is not supported on macOS or vice versa for non-macOS platforms.

```
#define mac true
```

## Name

This will be used as the name of the resulting Shortcut file. 

```
#define name My Shortcut
```

Cherri will ignore the file's name and use the definition instead to create `My Shortcut.` shortcut.

## Version

Defines the minimum version of iOS your Shortcut supports. Warnings will be printed if you use actions that are not supported in the targeted version.

```
#define version 18.4
```
