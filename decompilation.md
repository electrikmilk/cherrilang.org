---
title: Import Shortcut
layout: default
nav_order: 3
---

# Convert Shortcut to Cherri

Beta
{: .label .label-yellow }

Import and decompile a Shortcut from a file or iCloud link into Cherri code.

Use the `--import=` argument with an iCloud link or local, unsigned Shortcut file path.

```console
cherri --import={URL or PATH}
```

<a 
    href="https://playground.cherrilang.org"
    target="_blank"
    class="btn btn-red">
    Try it now in the playground!
</a>

## Output File

A file will then be saved with the Shortcut name in the iCloud API or the file name.

To change this, the `--output=` argument doubles as a way to set the output file for decompilation.

```console
cherri --import={URL or PATH} --output=path/to/output.cherri
```

## Current Status

This feature is currently in **Beta** and is not ready for production use, but most Shortcuts should be able to be converted into Cherri code.

The import feature works best with an iCloud link, as decompiling signed Shortcut files is not supported for the time being.

Keep in mind this is mainly meant to be a starting point and you may in some cases need to do some modification to get it working.

### Caveats

These two features are currently not supported in Cherri and so cannot be decompiled:

- If a value relies on the output of a Get Variable action, you may need to fix it to reference the variable instead, but in most cases, this may not be an issue.
- Some required includes for standard actions may not be automatically added.

The Shortcut will still decompile, but you may see comments in the code or warnings about these caveats.
