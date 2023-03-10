---
title: Documentation
layout: default
nav_order: 2
has_children: true
---

# Getting Started

Welcome to the Cherri programming language documentation!

Thanks for taking an interest in the Cherri programming language. Don't worry! Cherri is designed to be easy to learn and use, it's likely very similar to a programming language you are already familiar with.

Contributing to this open-source documentation is recommended as this language is in the early stages and while most
things work, bugs or inaccurate documentation are very likely.

{: .warning }
The latest release may not include everything in the latest documentation, and you may run into actions or language features of a future release. To use the latest features (which are subject to change or may not work properly) build from source.

## Download & Install

The easiest way to start using Cherri is to install it using Go:

```console
go install github.com/electrikmilk/cherri@latest
```

Alternatively, you can download the latest release from Github:

[Download the latest release](https://github.com/electrikmilk/cherri/releases){: .btn .btn-red }

Then move the binary to `/usr/local/bin` or execute it from the extracted directory.

{: .warning }
**The official releases are compiled for the arm64 and x86_64 macOS platform only.** [Why?](https://github.com/electrikmilk/cherri/wiki/Why-macOS-only%3F)

## Build from Source

### 1. Download the source

Download the source tree from Github: [https://github.com/electrikmilk/cherri](https://github.com/electrikmilk/cherri)

### 2. Install Go

Install Go via the official Go website: [https://go.dev/doc/install](https://go.dev/doc/install)

### 3. Build

Enter the directory of the source you downloaded and build.

```bash
# Enter directory
cd /path/to/cherri

# Build
go build

# Run
./cherri
```
