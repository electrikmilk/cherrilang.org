---
title: Migration Guide
layout: default
nav_order: 4
---

# Migrating Existing Shortcuts to Cherri
{: .no_toc }

Convert your existing Shortcuts into Cherri code for version control, modularity, and easier maintenance.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Decompile Your Shortcut

### Get the Shortcut URL

1. Open the **Shortcuts** app on your device
2. Tap the **info icon (ⓘ)** on the shortcut you want to migrate
3. Tap **Share → Copy iCloud Link**

The link will look like: `https://www.icloud.com/shortcuts/abc123def456`

### Decompile with Cherri

Beta
{: .label .label-yellow }

Use `--import` with the iCloud URL or a local unsigned `.shortcut` file path:

```console
cherri --import=https://www.icloud.com/shortcuts/abc123def456
```

No output means success. The decompiled `.cherri` file will be created in your current directory.

### What to Expect

The generated code will be functional but not yet idiomatic:

- Standard actions are matched to their Cherri equivalents
- Third-party actions not in Cherri's standard library appear as `rawAction(...)`
- Action includes may not be added automatically — you may need to add them manually
- Magic variables appear as raw references; duplicate action sequences aren't consolidated into functions

---

## Refactoring to Idiomatic Cherri

### Add Missing Action Includes

**Before (fails):**

```ruby
// #define name My Shortcut
#define color blue
#define glyph hand

const location = getCurrentLocation()
const weather = getCurrentWeather(location)
```

**After (succeeds):**

```ruby
#include 'actions/location'

// #define name My Shortcut
#define color blue
#define glyph hand

const location = getCurrentLocation()
const weather = getCurrentWeather(location)
```

Check the [Standard Library documentation](/language/standard/stdlib) to find which include file contains each action.

{: .note }
If you encounter `rawAction(...)` for a standard Shortcuts action, it may be missing from Cherri's standard library. Consider defining it as a custom action or reporting it as an issue.

### Use Constants for Immutable Values

**Before:**

```ruby
@number = 42
show("{@number}")
```

**After:**

```ruby
const number = 42
show("{number}")
```

If a value never changes, `const` produces a smaller Shortcut with better performance than `@variable`.

### Consolidate Duplicate Code into Functions

**Before:**

```ruby
@price1 = 10
@tax1 = @price1 * 0.08
@total1 = @price1 + @tax1

@price2 = 20
@tax2 = @price2 * 0.08
@total2 = @price2 + @tax2
```

**After:**

```ruby
#include 'actions/scripting'

function calculateTotal(number price): number {
    const tax = @price * 0.08
    const total = @price + tax
    output("{total}")
}

const total1 = calculateTotal(10)
const total2 = calculateTotal(20)
```

### Use Control Flow Output

**Before:**

```ruby
const condition = true
@result
if condition {
    @result = "Yes"
} else {
    @result = "No"
}
show("{@result}")
```

**After:**

```ruby
const condition = true
const result = if condition {
    text("Yes")
} else {
    text("No")
}
show("{result}")
```

### Split Large Shortcuts with Includes

If your shortcut has distinct sections, split them into separate files:

**main.cherri:**

```
#include 'config.cherri'
#include 'helpers.cherri'
#include 'actions/network'

// Main logic here
```

**config.cherri:**

```
#define name My Shortcut
#define color yellow
#define glyph smileyFace

const API_URL = "https://api.example.com"
const TIMEOUT = 30
```

**helpers.cherri:**

```
#include 'actions/scripting'

function formatDate(date input): text {
    output("{formattedDate}")
}

function validateInput(text input): bool {
    output("{isValid}")
}
```

### Handle Third-Party Actions

If your shortcut uses app actions not in Cherri's standard library, keep them as raw actions or define them for reuse:

**Raw action:**

```ruby
rawAction("net.shinyfrog.bear.create-note", {
    "title": "My Note",
    "text": "{content}"
})
```

**Custom action definition:**

```ruby
action 'net.shinyfrog.bear.create-note' createBearNote(
    text title: 'title',
    text content: 'text'
)

createBearNote("My Note", "{content}")
```

See [Action Definitions](/language/action-definitions) for more details.

### Clear Unused Output

If an action produces output that no subsequent action consumes, add `nothing()` to prevent Shortcuts from implicitly passing it forward as input:

```ruby
heavyAction()
nothing()
```

---

## Testing

### Compile

```console
cherri my-shortcut.cherri
```

Fix any compilation errors before testing on device.

### Compare Against Original

Compile with `--debug` to generate a `.plist` file you can diff against the original:

```console
cherri my-shortcut.cherri --debug
```

### Test on Device

Transfer the compiled Shortcut to your device and verify:

- Test with valid inputs and edge cases
- Test all conditional branches and menu options
- Compare output with the original Shortcut

---

## Troubleshooting

### Raw actions for standard Shortcuts actions

The action may be missing from Cherri's standard library. Define it as a custom action using [action definitions](/language/action-definitions) or keep it as a raw action and report the issue on GitHub.

### Missing action includes

Add the appropriate `#include` at the top of the file. Check the [Standard Library documentation](/language/standard/stdlib) for which file each action belongs to.

### Type errors

Add explicit type annotations:

```
@myVar: text
```

### Shortcut won't import on device

Ensure the Shortcut is signed. On non-macOS platforms, add `--hubsign`:

```console
cherri my-shortcut.cherri --hubsign
```

---

## Resources

- [Import Shortcut documentation](/decompilation)
- [Standard Actions Reference](/language/actions)
- [Action Definitions](/language/action-definitions)
- [Best Practices](/language/best-practices)