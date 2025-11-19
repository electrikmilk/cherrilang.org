---
title: Signing
layout: default
parent: Contributing
nav_order: 6
---

# Signing Shortcuts

Apple has used an internal algorithm to "sign" Shortcuts since iOS 15 and macOS 12. It is required to sign a Shortcut to share/import them into the Shortcuts app and run them on Apple platforms.

This is built into the Shortcuts app, but must be implemented manually outside of it. The compiler runs the `shortcuts` binary, specifically with its `sign` subcommand.

We pass it the input path (`-i`) of the unsigned Shortcut, which is determined by where the input file is located. It is kept there if it is rejected by the binary which refuses to sign it for whatever reason, usually a formatting error.

We also pass it the output path (`-o`) for the Shortcut, which is defaulted to where the input file is located or can be set by the user using the `-o=` or `--output=` argument.

And finally, we pass it the signing mode (`-m`,) which is set to `contacts` by default (`people-who-know-me`) but can be set to `anyone` by the user using the `-s=` or `--share=` argument.

If we are not running on Darwin (macOS kernel), then the signing step is skipped and the user is left with the unsigned version of the Shortcut.

However, we will try to use the HubSign signing service that uses the [Shortcut signing server](https://github.com/scaxyz/shortcut-signing-server). The `--signing-server=` argument can be provided a URL to any signing server, even a local one in theory (not tested).