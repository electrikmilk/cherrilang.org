---
title: Getting Started
layout: default
nav_order: 3
---

# Getting Started with Cherri
{: .no_toc }

This guide will walk you through installing Cherri, writing your first Shortcut, and running it on your Apple device.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Prerequisites

Before you begin, make sure you have:

- A Mac, Linux, or Windows computer for development
- An Apple device (iPhone, iPad, or Mac) to run the compiled Shortcut
- Basic familiarity with programming concepts (variables, functions, control flow)

{: .note }
While you can compile Shortcuts on any platform, **macOS is recommended** for the best experience, as it can sign Shortcuts natively without requiring external services.

---

## Installation

### Install on your machine (Recommended)

Install the [Cherri](https://cherrilang.org/install) binary on your machine to run from a Terminal or IDE.

### Alternative: Try the Web Playground

If you want to try Cherri without installing anything, visit [playground.cherrilang.org](https://playground.cherrilang.org) to write, compile, and export Shortcuts directly from your browser!

---

## Editor Setup

### VS Code

Install the [Cherri VSCode Extension](https://marketplace.visualstudio.com/items?itemName=electrikmilk.cherri-vscode-extension) for syntax highlighting, file icons, and snippets. Search "Cherri" in the Extensions panel (Cmd+Shift+X / Ctrl+Shift+X).

### macOS App

Build the [Cherri macOS app](https://github.com/electrikmilk/cherri-macos-app) for a native GUI with a built-in editor, one-click compilation, and project management.

---

## Your First Shortcut

### Step 1: Create a Cherri File

Create a new file called `hello.cherri`:

```ruby
/* Hello, World! Shortcut */

#define glyph smileyFace
#define color yellow

// Display a greeting
const message = "Hello, Cherri!"
alert("{message}", "My First Shortcut")
```

- **Comments:** `/* ... */` and `//` let you document your code
- **Metadata:** `#define glyph` and `#define color` set the Shortcut's icon
- **Constant:** `const message = ...` creates an immutable value (magic variable in Shortcuts)
- **Action:** `alert(...)` shows an alert

{: .note }
Mutable variables use `@variable` syntax, which creates a Set Variable action in Shortcuts. See [Variables, Constants & Globals](/language/variables-constants-globals) for details.

### Step 2: Compile

```console
cherri hello.cherri
```

No output means success (Unix convention). The compiled `hello.shortcut` file is ready to transfer.

{: .note }
On macOS, Shortcuts are signed automatically. On Linux or Windows, add `--hubsign` to sign via RoutineHub's service, or `--signing-server=URL` for a custom server.

### Step 3: Transfer to Your Device

**macOS:** Run with `--open` to import directly into Shortcuts, or double-click `hello.shortcut` in Finder.

**Any platform:** Upload to iCloud Drive, then open the Files app on your device, navigate to iCloud Drive, and tap `hello.shortcut` to import.

---

## Adding Variables and Logic

```ruby
#define glyph personSpeech
#define color purple

// Ask for the user's name
@name = prompt("What's your name?")

// Create a personalized greeting
if @name {
    @greeting = "Hello, {@name}! Welcome to Cherri."
} else {
    @greeting = "Hello there! Welcome to Cherri."
}

show("{@greeting}")
```

Compile and transfer to your device — it will ask for your name and greet you personally.

---

## Using Standard Library Actions

```ruby
#include 'actions/device'

#define glyph phone
#define color lightblue

const deviceName = getDeviceDetail("Device Name")
const model = getDeviceDetail("Device Model")
const osVersion = getDeviceDetail("System Version")
const battery = getBatteryLevel()

show("Device: {deviceName}\nModel: {model}\nOS: {osVersion}\nBattery: {battery}%")
```

See the [Standard Library documentation](/language/standard/stdlib) for all available actions.

---

## Working with Functions

```ruby
#include 'actions/scripting'

#define glyph calculator
#define color green

function add(number a, number b): number {
    const s = @a + @b
    output("{s}")
}

function multiply(number a, number b): number {
    const p = @a * @b
    output("{p}")
}

const sum = add(5, 3)
const product = multiply(4, 7)

show("5 + 3 = {sum}\n4 × 7 = {product}")
```

Functions run in an isolated Shortcut instance via `runSelf()` — see [Isolated Scope](/language/functions#isolated-scope) for what this means for variable access.

---

## Debugging Tips

### Use Debug Mode

```console
cherri hello.cherri --debug
```

Prints stack traces, verbose compilation info, and outputs a `.plist` file for inspection.

### Add Show Actions

```ruby
@number = 42
show("Debug: number = {@number}")
```

### Check Variable Types

```ruby
@myVar: text
@myVar += "test"
```

### Use Nothing Actions

If an action produces output that nothing else consumes, add `nothing()` to prevent Shortcuts from implicitly passing the result forward as input:

```ruby
someAction()
nothing()  // discard unused output
```

---

## Common First-Time Issues

### "Command not found: cherri"

The `cherri` binary is not in your PATH. Make sure you've followed the installation steps correctly, or use the full path to the binary.

### "Shortcut won't import on my device"

The Shortcut may not be signed. On non-macOS platforms, add `--hubsign` when compiling.

### "Undefined action error"

Add the appropriate `#include` at the top of your file:

```
#include 'actions/network'  // For web requests
```

### "Type mismatch error"

Declare types explicitly:

```
@myNumber: number
@myText: text
```

---

## Next Steps

- [Variables, Constants & Globals](/language/variables-constants-globals)
- [Control Flow](/language/control-flow)
- [Functions](/language/functions)
- [Types](/language/types)
- [Standard Library](/language/standard/stdlib)
- [Action Definitions](/language/action-definitions)
- [Best Practices](/language/best-practices)
- [Migration Guide](/migration) — convert existing Shortcuts to Cherri
- [FAQ](/faq) · [GitHub Issues](https://github.com/electrikmilk/cherri/issues) · [Playground](https://playground.cherrilang.org)