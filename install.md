---
title: Install
layout: default
has_children: false
nav_order: 2
---

# Install

## macOS & Linux

You can install Cherri by downloading the latest release or via the Homebrew package manager:

{: .note }
The latest release may not include everything in the newest documentation, and you may run into actions or language features of a future release (other than actions, these should be marked). To use the latest features (which are subject to change or may not work properly) [build from source](#build-from-source).

### Homebrew

**Add Tap:**

```console
brew tap electrikmilk/cherri
```

**Install:**

```console
brew install electrikmilk/cherri/cherri
```

### Binaries

<a href="https://github.com/electrikmilk/cherri/releases" class="btn btn-red" target="_blank">Download the Latest Release</a>

After downloading and extracting, move the binary to `/usr/local/bin` or execute it in the directory you extracted it from.

On macOS, you will likely need to allow the binary to run with Gatekeeper. If it gives you too much trouble, [build from source](#build-from-source).

## Windows, *nix, etc.

Native AEA signing only exists on macOS other than 3rd party implementations, otherwise a signing service is used.

The compiler should work on most Linux or Unix-like OSs that Go runs on, and is built and tested on Ubuntu Linux for commit checks in addition to macOS. However, you can only sign Shortcuts using the HubSign service. 

I haven't tried to run Cherri on other systems like NetBSD or something, and so I do not want to guarantee the binary will work. I have tried to test Windows, but this fails and needs work. Feel free to reach out if Cherri works on your non-macOS, non-Linux system, and I will add it to the list of binaries for release.

However, you can also simply use the Cherri Playground site, which allows using the compiler from any platform with a web broser and signs Shortcuts when they are shared.

<a href="https://playground.cherrilang.org/" class="btn btn-red" target="_blank">Use the Cherri Playground</a>

You can also build from source using the instructions below and use the `--hubsign` option to sign the compiled Shortcut using RoutineHub's HubSign service.

## Build from Source

{: .warning }
Building from source may be unstable, and some features may change unexpectedly.

### 1. Install Go

<a href="https://go.dev/doc/install" target="_blank">Install the Go programming language</a>

### 2. Download the source

Clone the source tree from GitHub: 

```console
git clone https://github.com/electrikmilk/cherri.git
```

### 3. Build Cherri

Enter the directory of the source you downloaded.

```bash
cd /path/to/cherri
```

Compile the Cherri binary.

```console
go build
```

Run the Cherri binary to confirm it works.

```console
./cherri
```

To run this binary from anywhere, you could optionally move it to your user binaries.

```console
sudo mv cherri /usr/local/bin
```
