---
title: Install
layout: default
has_children: false
nav_order: 1
---

# Install

{: .warning }
The official releases are only compiled for the arm64 (Apple Silicon) and x86_64 (Intel) macOS platforms. [Why?](https://cherrilang.org/faq#why-macos-only)

## macOS

The easiest way to use Cherri on a Mac is to download the latest binary release from GitHub.

{: .note }
The latest release may not include everything in the newest documentation, and you may run into actions or language features of a future release (other than actions, these should be marked). To use the latest features (which are subject to change or may not work properly) [build from source](#build-from-source).

<a href="https://github.com/electrikmilk/cherri/releases" class="btn btn-red" target="_blank">Download the Latest Release</a>

After downloading and extracting, move the binary to `/usr/local/bin` or execute it in the directory you extracted it from.

You will likely need to allow the binary to run with Gatekeeper. If it gives you too much trouble, [build from source](#build-from-source).

## Windows, Linux, etc.

Due to the limitations of signing Shortcuts, you must either run the compiler locally on a Mac or use the online web editor.

<a href="[https://github.com/electrikmilk/cherri/releases](https://playground.cherrilang.org/)" class="btn btn-red" target="_blank">Use the Cherri Playground</a>

## Build from Source

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
