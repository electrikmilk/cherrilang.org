---
title: Install
layout: default
parent: Documentation
has_children: false
nav_order: 0
---

# Install

{: .warning }
The official releases are only compiled for the arm64 (Apple Silicon) and x86_64 (Intel) macOS platforms. [Why?](https://cherrilang.org/faq#why-macos-only)

## Windows, Linux, etc.

Due to the limitations of signing Shortcuts, you must either run the compiler locally on a Mac or use the online web editor.

[Use the Cherri Playground](https://playground.cherrilang.org/){: .btn .btn-red }

## macOS

The easiest way to use Cherri on your Mac is to download the latest release from GitHub.

{: .note }
The latest release may not include everything in the newest documentation, and you may run into actions or language features of a future release. To use the latest features (which are subject to change or may not work properly) build from source.

[Download the latest release](https://github.com/electrikmilk/cherri/releases){: .btn .btn-red }

After downloading and extracting, move the binary to `/usr/local/bin` or execute it in the directory you extracted it from.

You will likely need to allow the binary to run with Gatekeeper. If it gives you too much trouble, build from the source using the instructions below.

## Build from Source

### 1. Install Go

Install the Go programming language via the official Go website: [https://go.dev/doc/install](https://go.dev/doc/install)


### 2. Download the source

Clone the source tree from GitHub: 

```
$ git clone https://github.com/electrikmilk/cherri.git
```

### 3. Build Cherri

Enter the directory of the source you downloaded and built.

```bash
# Enter directory
$ cd /path/to/cherri

# Build
$ go build

# Run
$ ./cherri
```

To run Cherri from anywhere, you could optionally move it to your user binaries

```bash
$ sudo mv cherri /usr/local/bin
```
