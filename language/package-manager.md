---
title: Packages
layout: default
parent: Documentation
nav_order: 13
---

# Packages

Future release
{: .label .label-purple }


In a future release of Cherri, a GitHub repo-based package manager will be built-in to the CLI.

## Create Package

1. Create a GitHub repository following this structure:

```
https://github.com/{GITHUB_USER}/cherri-{PACKAGE_NAME}.git
```

2. Initialize your package in your project folder:

```bash
cherri --init=@{GITHUB_USER}/{PACKAGE_NAME}
```

This creates an `info.plist` file in the current directory with the provided details.

## List Package Info

List the package in the current directory and its immediate dependent packages.

```bash
cherri --package
```

List dependent packages:

```bash
cherri --packages
```

## Install Package

To install a package, use the GitHub username and repository name, but with the `cherri-` prefix taken out of the repository name.

```bash
cherri --install=@electrikmilk/package-example
```

This installs the package in a `/packages/` directory.

## Uninstall Package

```bash
cherri --remove=@electrikmilk/package-example
```

## Tidy

Force re-install all packages (remove any package directories if they exist):

```bash
cherri --tidy
```
