---
title: Import
layout: default
parent: Documentation
nav_order: 1
---

# Convert Shortcut to Cherri

Import and decompile a Shortcut from a file or iCloud link into Cherri code.

Use the `--import=` argument with an iCloud link or local unsigned Shortcut file path.

```console
cherri --import={URL or PATH}
```

Try it now in the [playground](https://playground.cherrilang.org)!

## Output File

A file will then be saved with the Shortcut name in the iCloud API or the file name.

To change this, the `--output=` argument doubles as a way to set the output file for decompilation.

```console
cherri --import={URL or PATH} --output=path/to/output.cherri
```

## Current Status

This feature is currently in **Beta** and is not ready for production use, but most Shortcuts should be able to be converted into Cherri code.

The import feature works best with an iCloud link, as for the time being decompiling local signed Shortcut files is not supported.

Keep in mind this is mainly meant to be a starting point and you may in some cases need to do some modification to get it working.

### Caveats

These two features are currently not supported in Cherri and so cannot be decompiled:

- Uses the output of a control flow action: Set a variable inside the control flow action instead.
- Relies on the output of a Get Variable action: Reference the variable instead, in most cases this may not be an issue.
