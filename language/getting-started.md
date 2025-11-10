---
title: Getting Started
layout: default
parent: Documentation
nav_order: 1
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

### macOS (Recommended)

The easiest way to install Cherri on macOS is using [Homebrew](https://brew.sh):

**1. Add the Cherri tap:**

```bash
brew tap electrikmilk/cherri
```

**2. Install Cherri:**

```bash
brew install electrikmilk/cherri/cherri
```

**3. Verify installation:**

```bash
cherri --version
```

### Linux / Windows

**1. Download the latest release:**

Visit the [GitHub Releases page](https://github.com/electrikmilk/cherri/releases) and download the appropriate binary for your platform.

**2. Make it executable (Linux only):**

```bash
chmod +x cherri
```

**3. Move to your PATH:**

```bash
# Linux
sudo mv cherri /usr/local/bin/

# Windows: Move cherri.exe to a directory in your PATH
```

**4. Verify installation:**

```bash
cherri --version
```

{: .warning }
On non-macOS platforms, Shortcuts will be compiled but not signed. You'll need to use `--hubsign` or `--signing-server=` to sign them. See [Signing Options](#signing-options) below.

### Alternative: Try the Web Playground

If you want to try Cherri without installing anything, visit [playground.cherrilang.org](https://playground.cherrilang.org) to write, compile, and export Shortcuts directly from your browser!

---

## Editor Setup

### VS Code

Install the [Cherri VSCode Extension](https://marketplace.visualstudio.com/items?itemName=electrikmilk.cherri-vscode-extension) for:

- Syntax highlighting
- File icons
- Code snippets (coming soon)

**Install from VS Code:**

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Cherri"
4. Click Install

### macOS App

Build the [Cherri macOS app](https://github.com/electrikmilk/cherri-macos-app) for a native GUI experience with:

- Built-in editor
- One-click compilation
- File type integration
- Project management

---

## Your First Shortcut

Let's create a simple "Hello, World!" Shortcut that displays a greeting.

### Step 1: Create a Cherri File

Create a new file called `hello.cherri`:

```ruby
/* Hello, World! Shortcut
   My first Cherri shortcut
*/

#define glyph smileyFace
#define color yellow

// Display a greeting
const message = "Hello, Cherri!"
alert("{message}", "My First Shortcut")
```

Let's break down what this does:

- **Comments:** `/* ... */` and `//` let you document your code
- **Metadata:** `#define glyph` and `#define color` set the Shortcut's icon and color
- **Constant:** `const message = ...` creates a constant (magic variable in Shortcuts terminology)
- **Action:** `alert(...)` shows an alert with your message

{: .note }
**Terminology:** In Shortcuts, immutable values are called "magic variables." Cherri uses `const` for these. Mutable variables use `@variable` syntax, which creates a "Set Variable" action in Shortcuts. See [Variables, Constants & Globals](/language/variables-constants-globals) for details.

### Step 2: Compile the Shortcut

Open your terminal and navigate to the directory containing `hello.cherri`, then run:

```bash
cherri hello.cherri
```

If the compilation is successful, you'll see no output (following Unix conventions). The compiled `hello.shortcut` file is now ready to transfer to your device!

{: .note }
If there are any errors during compilation or signing, they will be displayed. On macOS, the Shortcut is automatically signed. On other platforms, use `cherri hello.cherri --hubsign` to sign it using the HubSign service.

### Step 3: Transfer to Your Device

There are several ways to transfer the compiled Shortcut to your Apple device:

#### Option A: AirDrop (macOS only)

1. Right-click `hello.shortcut` in Finder
2. Select **Share → AirDrop**
3. Choose your iPhone or iPad
4. On your device, tap the notification to open in Shortcuts

#### Option B: iCloud Drive

1. Upload `hello.shortcut` to iCloud Drive from your computer
2. On your device, open the **Files** app
3. Navigate to **iCloud Drive**
4. Tap `hello.shortcut` to import it into Shortcuts

#### Option C: Email / Messages

1. Attach `hello.shortcut` to an email or message
2. Send it to yourself
3. On your device, open the email/message and tap the attachment

### Step 4: Run Your Shortcut

1. Open the **Shortcuts** app on your device
2. Find "hello" in your Shortcuts library
3. Tap it to run
4. You should see an alert saying "Hello, Cherri!"

🎉 **Congratulations!** You've just created and run your first Cherri Shortcut!

---

## Adding Variables and Logic

Let's make our Shortcut more interactive by asking for the user's name.

Create a new file called `greeting.cherri`:

```ruby
#define glyph personSpeech
#define color purple

// Ask for the user's name
@name = prompt("What's your name?")

// Create a personalized greeting
if name {
    @greeting = "Hello, {name}! Welcome to Cherri."
} else {
    @greeting = "Hello there! Welcome to Cherri."
}

// Show the greeting
show("{greeting}")
```

**New concepts:**

- **Variables:** `@name` creates a variable (set variable action in Shortcuts)
- **Prompt action:** `prompt(...)` prompts the user for input
- **If/else:** Conditional logic to check if the user entered a name
- **String interpolation:** `{name}` inserts the variable's value into text
- **Show action:** `show(...)` displays the result as a notification or dialog

Compile and run:

```bash
cherri greeting.cherri
```

Transfer it to your device and run it. This time, it will ask for your name and greet you personally!

---

## Using Standard Library Actions

Cherri includes a comprehensive standard library of actions. Let's create a Shortcut that gets device information.

Create `device-info.cherri`:

```ruby
#include 'actions/device'

#define glyph phone
#define color lightBlue

// Get device details
const deviceName = getDeviceDetail("Device Name")
const model = getDeviceDetail("Device Model")
const osVersion = getDeviceDetail("System Version")
const battery = getBatteryLevel()

// Format the information
@info = "📱 Device: {deviceName}
Model: {model}
OS: {osVersion}
Battery: {battery}%"

// Display it
show("{info}")
```

**New concepts:**

- **Includes:** `#include 'actions/device'` imports action definitions
- **Multiple actions:** Using several standard library actions
- **Multiline text:** Text can span multiple lines

See the [Standard Library documentation](/language/standard/stdlib) for all available actions.

---

## Working with Functions

Functions let you reuse code and organize complex Shortcuts.

Create `calculator.cherri`:

```ruby
#include 'actions/scripting'

#define glyph calculator
#define color green

// Define a function to add two numbers
function add(number a, number b): number {
    const s = a + b
    output("{s}")
}

// Define a function to multiply
function multiply(number a, number b): number {
    const p = a * b
    output("{p}")
}

// Use the functions
const sum = add(5, 3)
const product = multiply(4, 7)

show("5 + 3 = {sum}\n4 × 7 = {product}")
```

**New concepts:**

- **Function definition:** `function name(type param): returnType { ... }`
- **Output:** `output(...)` returns a value from a function
- **Type annotations:** Ensures type safety

Functions are actions run within a Run Shortcut action by injecting code at the top of your Shortcut during a pre-processing step.

---

## Debugging Tips

When your Shortcut doesn't work as expected, try these debugging techniques:

### Use Debug Mode

Compile with the `--debug` or `-d` flag to see detailed information:

```bash
cherri hello.cherri --debug
```

This will:
- Print stack traces for errors
- Show verbose compilation information
- Output a `.plist` file you can inspect

### Add Show Actions

Insert `show(...)` actions to display variable values:

```ruby
@number = 42
show("Debug: number = {number}")  // Check the value
```

### Check Variable Types

If you get type errors, declare variable types explicitly:

```ruby
@myVar: text  // Declare as text type

// Now adding to the variable will append text
@myVar += "test"
```

### Use Nothing Actions

If you're experiencing memory issues, add `nothing()` after actions that produce unused output:

```
someAction()
nothing()  // Clears the output
```

### Read Compiler Errors Carefully

Cherri provides helpful error messages. For example:

```
Undefined reference 'name'

----- hello.cherri:5:3
```

This tells you exactly where the problem is.

---

## Signing Options

### macOS (Automatic)

On macOS, Shortcuts are signed automatically using the system's signing capabilities. No additional configuration needed!

### Non-macOS Platforms

On Linux or Windows, you have two options:

#### Option 1: HubSign (Recommended)

Use the free HubSign service provided by [RoutineHub](https://routinehub.co):

```bash
cherri hello.cherri --hubsign
```

#### Option 2: Custom Signing Server

Run your own signing server using [shortcut-signing-server](https://github.com/scaxyz/shortcut-signing-server), then use:

```bash
cherri hello.cherri --signing-server=http://your-server:port
```

---

## Next Steps

Now that you've created your first Shortcuts, here's what to explore next:

### Learn More Language Features

- **[Variables, Constants & Globals](/language/variables-constants-globals)** - Master variable management
- **[Control Flow](/language/control-flow)** - If statements, loops, and menus
- **[Functions](/language/functions)** - Organize code into reusable functions
- **[Types](/language/types)** - Understanding Cherri's type system
- **[Includes](/language/includes)** - Organize large projects across multiple files

### Explore Standard Actions

- **[Standard Library Overview](/language/standard/stdlib)** - All available action categories
- **[Basic Actions](/language/standard/basic)** - Core actions like alerts, menus, text
- **[Network Actions](/language/standard/network)** - HTTP requests, downloads, APIs
- **[Scripting Actions](/language/standard/scripting)** - Advanced control flow and logic

### Advanced Topics

- **[Action Definitions](/language/action-definitions)** - Define your own actions
- **[Copy-Paste Macros](/language/copy-paste)** - Automate repetitive code
- **[Raw Actions](/language/raw-actions)** - Use any Shortcuts action directly
- **[Best Practices](/language/best-practices)** - Write efficient, maintainable Shortcuts

### Migrate Existing Shortcuts

If you have existing Shortcuts you want to convert to Cherri, check out the **[Migration Guide](/language/migration)**.

### Get Help

- **[FAQ](/faq)** - Common questions answered
- **[GitHub Issues](https://github.com/electrikmilk/cherri/issues)** - Report bugs or request features
- **[Playground](https://playground.cherrilang.org)** - Experiment with code online

---

## Common First-Time Issues

### "Command not found: cherri"

The `cherri` binary is not in your PATH. Make sure you've followed the installation steps correctly, or use the full path to the binary.

### "Shortcut won't import on my device"

The Shortcut may not be signed. On non-macOS platforms, use `--hubsign` when compiling.

### "Undefined action error"

You may have forgotten to include the necessary action definitions. Add the appropriate `#include` at the top of your file. For example:

```
#include 'actions/network'  // For web requests
```

### "Type mismatch error"

Check that your variable types match what the action expects. You can explicitly declare types:

```
@myNumber: number
@myText: text
```

---

## Tips for Success

1. **Start small** - Begin with simple Shortcuts and gradually add complexity
2. **Use constants** - Prefer `const` over `@variable` when values don't change (smaller Shortcuts, better performance)
3. **Check the docs** - The standard library has actions for most common tasks
4. **Experiment in the playground** - Try ideas quickly without installing anything
5. **Read error messages** - They usually tell you exactly what's wrong
6. **Use debug mode** - When stuck, compile with `--debug` to see what's happening

---

**Happy coding!** 🍒

If you run into issues or have questions, don't hesitate to [open an issue on GitHub](https://github.com/electrikmilk/cherri/issues) or check the [FAQ](/faq).
