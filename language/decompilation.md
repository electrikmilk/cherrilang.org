---
title: Import
layout: default
parent: Documentation
nav_order: 1
---

# Convert Shortcut to Cherri

In a future release, the Cherri compiler as well as in future updates to the playground and macOS app, will allow for the importing and decompilation of Shortcuts from a file or iCloud link into Cherri code.

To use this feature [build from source](/install#build-from-source).

Then, use the `--import=` argument with an iCloud link or local unsigned Shortcut file path.

```console
cherri --import={URL or PATH}
```

## Output File

A file will then be saved with the Shortcut name in the iCloud API or the file name.

To change this, the `--output=` argument doubles as a way to set the output file for decompilation.

```console
cherri --import={URL or PATH} --output=path/to/output.cherri
```

## Current Status

This feature is currently in **Beta** and is not ready for production use, but most Shortcuts should be able to be converted into Cherri code.

Keep in mind this is mainly meant to be a starting point and you may in some cases need to do some modification to get it working.

- Uses the output of a control flow action.
- Relies on the output of a Get Variable action.

To keep up with the status of this feature, [check this issue on GitHub](https://github.com/electrikmilk/cherri/issues/47).
