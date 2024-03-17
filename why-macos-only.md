# Why macOS Only?

Since iOS 15 and macOS 12 Monterey, Shortcuts must be signed to be shared with and run on other Apple devices.

As far as I am aware, you can only sign Shortcuts using the `shortcuts` binary on macOS.

A benefit is that Mac Shortcuts are synced to iCloud and therefore synced to all of your other devices, so just compile your Shortcut and import it into the Shortcuts app on
macOS. It will then be synced to your other Apple devices.

However, I have made a [Cherri Playground](https://playground.cherrilang.org/) that lets you play with the Cherri compiler on any platform. It has a signing server and will turn out valid Shortcuts on any platform with a web browser, primarily for those looking to write and compile Shortcuts on their iPhone or iPad.

### Why not other \*nix systems or WSL?

You can only run the `shortcuts` binary on macOS, and as it relies on private macOS frameworks, not even macOS emulation will work. It also relies on being signed into iCloud, so it needs to be an actual Mac due to the valid serial number requirement.

### Is it possible to build and run on other platforms?

Of course, you can still build and run the compiler on any platform the Go programming language will compile on. Cherri will skip signing the compiled Shortcut but it will still compile. I don't make builds for those platforms so that no one is confused and thinks that Shortcuts compiled using Cherri on other platforms will be able to be imported and run on any of their Apple devices.

Also, the compiler is currently developed and tested on macOS only, so it will otherwise work best on a Unix-like system that can compile Go code, like Linux or BSD.
