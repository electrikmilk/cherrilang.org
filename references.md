---
title: Content References
layout: default
nav_order: 5
---

# Content References
{: .no_toc }

Future release
{: .label .label-purple }

Embed device-specific file and media references from a Shortcut so they can be declared and used in Cherri code.

Some Shortcut actions accept files or media items that are bound to a specific device — for example, a specific file in iCloud Drive or a song in your Music library. These values cannot be written by hand; they must be captured from a Shortcut that already has them configured.

The `--refs=` argument extracts these values and outputs `#ref` declarations you can copy directly into your Cherri source file.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Step 1: Set up the Shortcut in the Shortcuts app

Open the Shortcuts app on your Apple device and add the file or media argument to the relevant action in your Shortcut. This is required because only the Shortcuts app can resolve and embed the device-specific identifiers for these values.

Export or save the Shortcut so it is accessible as an iCloud link or a local unsigned `.shortcut` file.

---

## Step 2: Extract references

Run the `--refs=` argument with the iCloud link or path to the unsigned Shortcut file:

```console
cherri --refs={URL or PATH}
```

Copy the `#ref` lines from the output and paste them at the top of your `.cherri` file or pipe them to a Cherri file:

```
#ref GoLogo_Bluesvg eyJmaWxlbmFtZSI6IkdvLUxvZ29fQmx1ZS5...

#ref AMGoldSeriesReissue eyJwZXJzaXN0ZW50SWRlbnRpZmllcii...
```

Each identifier is derived from the file's display name or the media item's name.

{: .note }
`--refs=` accepts the same input as `--import=`: an iCloud Shortcut link or a local, unsigned `.shortcut` file.

---

## Using references in actions

Pass the reference identifier as an argument to any action that accepts it:

```ruby
#ref GoLogo_Bluesvg eyJmaWxlbmFtZSI6IkdvLUxvZ29fQmx1ZS5zdmciLCJka...

getFileFromFolder(GoLogo_Bluesvg)
```

The compiler decodes the hash and injects the original device-specific value into the compiled Shortcut at that parameter position.

{: .important }
Reference identifiers must be unique within a file. Declaring the same identifier twice is a compile error.

---

## Reference syntax

```
#ref identifier hash
```

| Part | Description                                                                                                                                                                      |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `identifier` | Name used to refer to this value in action arguments. Derived from the file or media item name when extracted. Feel free to change it, just be sure to also rename usages of it. |
| `hash` | Base64-encoded value produced by `--refs=`. Do not modify it.                                                                                                                    |

---

## Supported reference types

| Type | Source |
|------|--------|
| File | A file in iCloud Drive or another Files provider |
| Media | A song, album, or other item from your Music library |
