---
title: Signing
layout: default
parent: Contributing
nav_order: 6
---

# Signing Shortcuts

Apple has an internal algorithm to "sign" Shortcuts since iOS 15 and macOS 12 that are required in order to share/import them into the app and run them on iOS, iPadOS or macOS.

The Cherri compiler uses the macOS binary `shortcuts`, specifically its `sign` subcommand.

