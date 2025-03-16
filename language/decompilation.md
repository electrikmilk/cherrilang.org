---
title: Import Shortcuts
layout: default
parent: Documentation
nav_order: 20
---

# Import Shortcuts

In a future release, the Cherri compiler as well as in future updates to the playground and macOS app, will allow for the importing and decompilation of Shortcuts from a file or iCloud link into Cherri code.

To use this feature [build from source](/install#build-from-source).

Before building, switch to the `decomp` branch:

```console
git checkout decomp
```

Then, use the `--import=` argument with an iCloud link or local unsigned Shortcut file path.

```console
cherri --import={URL or PATH}
```

## Current Status

This is still a work in progress and may not work for every Shortcut.

To keep up with the status of this feature, [check this issue on GitHub](https://github.com/electrikmilk/cherri/issues/47).
