---
title: Migration Guide
layout: default
nav_order: 4
---

# Migrating Existing Shortcuts to Cherri
{: .no_toc }

This guide will help you convert your existing Shortcuts into Cherri code, making them easier to maintain, version control, and scale.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why Migrate?

Converting your existing Shortcuts to Cherri offers several benefits:

- 📝 **Version Control** - Track changes with Git, collaborate with others
- 🔍 **Code Review** - Review changes in pull requests before deploying
- 🧩 **Modularity** - Split large Shortcuts into multiple files with `#include`
- 🔄 **Reusability** - Create functions to eliminate duplicate actions
- 🐛 **Easier Debugging** - Read and understand code faster than visual blocks
- 📏 **Code Style** - Enforce consistent formatting and patterns
- 🤝 **Team Collaboration** - Multiple people can work on the same Shortcut

---

## Migration Process Overview

The migration process consists of four main steps:

1. **Decompile** - Convert your `.shortcut` file to Cherri code
2. **Review** - Understand the generated code and identify improvement areas
3. **Refactor** - Apply Cherri best practices and idioms
4. **Test** - Compile and verify the migrated Shortcut works correctly

---

## Step 1: Decompile Your Shortcut

Cherri can automatically convert existing Shortcuts into Cherri code using the `--import` flag.

### Get the Shortcut URL

First, you need an iCloud link to your shortcut:

1. Open the **Shortcuts** app on your device
2. Find the shortcut you want to migrate
3. Tap the **info icon (ⓘ)** on the shortcut
4. Tap **Share**
5. Choose **Copy iCloud Link**

The link will look like: `https://www.icloud.com/shortcuts/abc123def456`

### Decompile with Cherri

Use the `--import` flag with the iCloud URL:

```bash
cherri --import="https://www.icloud.com/shortcuts/abc123def456"
```

This will:
- Download the shortcut from iCloud
- Parse the `.plist` format
- Generate Cherri code
- Save it as a `.cherri` file

If the decompilation is successful, you'll see no output (following Unix conventions). The decompiled `.cherri` file will be created in your current directory.

### Review the Generated Code

Open the generated `.cherri` file in your editor:

```bash
code "My Shortcut_decompiled.cherri"  # VS Code
# or
open "My Shortcut_decompiled.cherri"  # Default editor
```

The decompiled code will contain:
- Metadata (`#define` statements for name, color, glyph)
- All actions from your shortcut
- Raw actions for any actions not in Cherri's standard library
- Comments indicating action names

---

## Step 2: Understanding Decompiled Code

Decompiled code is functional but not idiomatic. Let's look at what you might see.

### Example: Simple Shortcut

**Original Shortcut:**
- Show alert "Hello, World!"

**Decompiled Code:**

```ruby
#define name My Shortcut
#define color yellow
#define glyph smileyFace

alert("Hello, World!")
```

### What to Notice

1. **Standard Actions Matched** - Most standard actions are automatically matched to their Cherri equivalents
2. **Third-Party Actions** - Only 3rd party actions not defined in Cherri will appear as `rawAction(...)` 
3. **Missing Includes** - Action includes may not be automatically added (this is a known issue), so you may need to add them manually
4. **No Variables** - Magic variables may appear as raw variable references
5. **No Functions** - Duplicate action sequences aren't consolidated
6. **Verbose** - The code may be longer than necessary

The decompiler generates functional code that matches most standard actions correctly, but it's your job to make it idiomatic Cherri by adding includes, using better variable patterns, and consolidating duplicate code.

---

## Refactoring to Idiomatic Cherri

Now let's transform the decompiled code into clean, maintainable Cherri.

### 3.1 Add Missing Action Includes

Standard actions are usually decompiled correctly, but the action includes may not be automatically added. Add the necessary includes at the top of your file:

**Before:**

```ruby
#define name My Shortcut
#define color blue
#define glyph hand

getCurrentLocation()
getCurrentWeather(location)
```

**After:**

```ruby
#include 'actions/location'

#define name My Shortcut
#define color blue
#define glyph hand

getCurrentLocation()
getCurrentWeather(location)
```

Check the [Standard Library documentation](/language/standard/stdlib) to find which include file contains each action.

{: .note }
If you encounter `rawAction(...)` for a standard Shortcuts action, it may be missing from Cherri's standard library. Consider defining it as a custom action or reporting it as an issue.

### 3.2 Use Constants for Immutable Values

**Before:**

```ruby
@number = 42
show("{number}")
```

**After:**

```ruby
const number = 42
show("{number}")
```

**Why?** If a value never changes, use `const` instead of `@variable` for smaller shortcuts and better performance.

### 3.3 Extract Repeated Values to Constants

**Before:**

```ruby
text("My message")
alert()

text("My message")
show()
```

**After:**

```ruby
const message = "My message"
alert("{message}")
show("{message}")
```

**Why?** Extract repeated values to named constants to eliminate duplication and make updates easier.

### 3.4 Consolidate Duplicate Code into Functions

**Before:**

```ruby
// Calculate total for item 1
@price1 = 10
@tax1 = price1 * 0.08
@total1 = price1 + tax1

// Calculate total for item 2
@price2 = 20
@tax2 = price2 * 0.08
@total2 = price2 + tax2
```

**After:**

```ruby
#include 'actions/scripting'

function calculateTotal(number price): number {
    const tax = price * 0.08
    const total = price + tax
    output("{total}")
}

const total1 = calculateTotal(10)
const total2 = calculateTotal(20)
```

### 3.5 Use Control Flow Output

**Before:**

```ruby
@result
if condition {
    @result = "Yes"
} else {
    @result = "No"
}
show("{result}")
```

**After:**

```ruby
const result = if condition {
    text("Yes")
} else {
    text("No")
}
show("{result}")
```

### 3.6 Split Large Shortcuts with Includes

If your shortcut has distinct sections, split them into separate files:

**main.cherri:**

```ruby
#include 'config.cherri'
#include 'helpers.cherri'
#include 'actions/network'

// Main logic here
```

**config.cherri:**

```ruby
#define name My Shortcut
#define color yellow
#define glyph smileyFace

// Configuration constants
const API_URL = "https://api.example.com"
const TIMEOUT = 30
```

**helpers.cherri:**

```ruby
#include 'actions/scripting'

function formatDate(date input): text {
    // Date formatting logic
    output("{formattedDate}")
}

function validateInput(text input): boolean {
    // Validation logic
    output("{isValid}")
}
```

---

## Testing Your Migrated Shortcut

After refactoring, it's crucial to test that your shortcut still works correctly.

### Step 1: Compile

```bash
cherri my-shortcut.cherri
```

Fix any compilation errors.

### Step 2: Compare Actions

If you want to compare the actions:

**Before:** Note the actions in your original Shortcut

**After:** Compile with debug mode to output a plist file for comparison with the original plist file.

```bash
cherri my-shortcut.cherri --debug
```

### Step 3: Test on Device

Transfer the compiled Shortcut to your device and test all functionality:

- ✅ Test with valid inputs
- ✅ Test with edge cases (empty values, large numbers, etc.)
- ✅ Test all conditional branches
- ✅ Test all menu options
- ✅ Compare output with original Shortcut

### Step 4: Debug Issues

If something doesn't work:

1. **Compare outputs:** Run both Shortcuts with the same input and compare results
2. **Add debug statements:** Insert `show("{variable}")` to inspect values
3. **Check the .plist:** Compile with `--debug` or `-d` and inspect the generated `.plist`
4. **Review raw actions:** Ensure raw action parameters match the original

---

## Advanced Migration Techniques

### Handling Third-Party Actions

If your shortcut uses third-party app actions not in Cherri's standard library, you have two options:

#### Option 1: Keep as Raw Action

```ruby
// Third-party action for "Bear" app
rawAction("net.shinyfrog.bear.create-note", {
    "title": "My Note",
    "text": "{content}"
})
```

#### Option 2: Define Custom Action

```ruby
// Define once, reuse many times
action 'net.shinyfrog.bear.create-note' createBearNote(
    text title: 'title',
    text content: 'text'
)

// Use it
createBearNote("My Note", "{content}")
```

See [Action Definitions](/language/action-definitions) for more details.

### Optimizing Memory Usage

During migration, you can optimize for runtime memory:

**Before:**

```ruby
@temp1 = heavyAction()
@temp2 = anotherAction()
// temp1 is never used again but stays in memory
```

**After:**

```ruby
const temp1 = heavyAction()
nothing()  // Clear output
@temp2 = anotherAction()
```

Or better yet, only make variables you actually need:

```ruby
const result = heavyAction()
// Use result where needed
```

or add nothing() after to make sure output is not loaded into memory if never used.

```ruby
heavyAction()
// Output is never used so we clear it.
nothing()
```

## Troubleshooting Migration Issues

### Issue: Raw Actions for Standard Actions

**Problem:** After decompiling, a standard Shortcuts action appears as `rawAction(...)` instead of its Cherri equivalent.

**Solution:** This is rare but can happen if the action is missing from Cherri's standard library. You can either define it as a custom action using [action definitions](/language/action-definitions) or keep it as a raw action. Consider reporting it as an issue on GitHub.

### Issue: Variables Not Working

**Problem:** Variables from the original Shortcut don't work in Cherri code.

**Solution:** Ensure you're using `@variable` for mutable variables and `const` for constants. Check variable names for typos.

### Issue: Control Flow Broken

**Problem:** If/else or loops don't work as expected.

**Solution:** Review the control flow structure. Cherri's syntax differs slightly from Shortcuts' visual representation. See [Control Flow documentation](/language/control-flow).

### Issue: Type Errors

**Problem:** Compilation fails with type mismatch errors.

**Solution:** Add explicit type annotations or check that action inputs match expected types:

```ruby
@myVar: text  // Explicitly declare type
```

### Issue: Shortcut Won't Import on Device

**Problem:** The compiled Shortcut won't import into the Shortcuts app.

**Solution:** Ensure it's signed. On non-macOS platforms, use `--hubsign`:

```bash
cherri my-shortcut.cherri --hubsign
```

---

## Migration Best Practices

1. **Start with Simple Shortcuts** - Migrate simple Shortcuts first to learn the patterns
2. **Keep the Original** - Don't delete your original Shortcut until you've fully tested the migrated version
3. **Migrate Incrementally** - For large Shortcuts, migrate section by section
4. **Document Changes** - Add comments explaining non-obvious refactorings
5. **Use Version Control** - Commit after each refactoring step so you can revert if needed
6. **Test Thoroughly** - Test all code paths and edge cases
7. **Refactor Gradually** - First make it work (decompiled code), then make it better (refactored)
8. **Learn the Standard Library** - Familiarize yourself with available actions to avoid raw actions

---

## When NOT to Decompile

Consider simply rewriting your Shortcuts in Cherri instead if:

- The shortcut is very simple (less than 30 actions)
- It uses third-party actions not in Cherri that will need to be replaced in a decompilation.

---

## Resources

- **[Decompilation Documentation](/decompilation)** - Technical details on the decompilation process
- **[Standard Library Reference](/language/standard/stdlib)** - All available actions
- **[Action Definitions](/language/action-definitions)** - Define your own actions
- **[Best Practices](/language/best-practices)** - Writing efficient Cherri code

**Ready to migrate?** Start with a simple Shortcut, follow the refactoring checklist, and gradually work your way up to more complex migrations.

If you need help, check the [FAQ](/faq) or [open an issue on GitHub](https://github.com/electrikmilk/cherri/issues). Happy migrating! 🍒