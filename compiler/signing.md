---
title: Signing
layout: default
parent: Contributing
nav_order: 6
---

# Signing Shortcuts

Apple has an internal algorithm to "sign" Shortcuts since iOS 15 and macOS 12 that are required in order to share/import them into the app and run them on Apple platforms.

The Cherri compiler internally runs the macOS binary `shortcuts`, specifically it's `sign` subcommand if we are on Darwin (macOS kernel).

![shortcuts sign](https://github.com/electrikmilk/cherrilang.org/assets/4368524/7403e7d6-309b-499d-a1a0-a5f3468a333a)

We pass it the input path (`-i`) of the unsigned Shortcut which is determined by where the input file is located. It is kept there if it is rejected by the binary which refuses to sign it for whatever reason, usually a formatting error.

We also pass it the output path (`-o`) for the Shortcut which is defaulted to the current directory or can be set by the user using the `-o=` or `--output=` argument.

And finally, we pass it the signing mode (`-m`) which is set to `contacts` by default but can be set to `anyone` by the user using the `-s=` or `--share=` argument.
