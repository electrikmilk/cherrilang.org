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
https://github.com/{github_user}/cherri-{package_name}.git
```
2. Initialize your package in your project folder:
```bash
cherri --init=@{github_user}/{package_name}
```

This creates an `info.plist` file in the current directory with the provided details.

Note that you can create a package for your project in the current directory and not have the username or package name correspond to an assumed GitHub repository. This is only required for packages that need to be downloaded from GitHub.

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
cherri --install=@{github_user}/{package_name}
```

This installs the package in a `/packages/` directory.

## Uninstall Package

```bash
cherri --remove=@{github_user}/{package_name}
```

## Tidy

Force re-install all packages (removes any package directories if they exist):

```bash
cherri --tidy
```

## Trusted Packages

When you add a package for the first time on a system, you will be prompted to check if you trust the repository for the package. If you say yes, a file is stored at `~/.cherri/trusted.plist`, containing the signatures (e.g., `@{gihub_username}/{package_name}`) of the trusted packages.
