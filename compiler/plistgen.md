---
title: Property List Generation
layout: default
parent: Contributing
nav_order: 4
---

# Property List (.plist) Generation

Property list generation is done using the [howett.net/plist](https://github.com/DHowett/go-plist) Go package.

The file [`shortcutgen.go`](https://github.com/electrikmilk/cherri/blob/main/shortcutgen.go) generates the data,
while [`shortcut.go`](https://github.com/electrikmilk/cherri/blob/main/shortcut.go) contains definitions of the data types and
helper functions used in generating the data.

At the end of the day, these files generate data for the package to build a string that is saved as a `.shortcut` file.

To save the output as a separate plist file from the resulting signed Shortcut, use the `--debug` (or `-d`) option when
running the compiler.
