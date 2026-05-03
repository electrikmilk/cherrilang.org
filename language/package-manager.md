---
title: Packages
layout: default
parent: Documentation
nav_order: 13
---

# Packages
{: .no_toc }

Cherri includes a built-in package manager for sharing and reusing code across projects via remote Git repositories.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Package Structure

Every Cherri package must follow this structure:

```
cherri-{package_name}/
├── main.cherri         # Entry point (required)
├── info.plist          # Package metadata (required)
└── ... other files
```

[Example GitHub repo](https://github.com/electrikmilk/cherri-package-example){: .btn }

**`main.cherri`** is the entry point for your package and is automatically included when the package is installed.

**`info.plist`** contains package metadata:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Name</key>
    <string>package_name</string>
    <key>User</key>
    <string>package_author</string>
    <key>Packages</key>
    <array>
        <!-- Dependencies go here -->
    </array>
</dict>
</plist>
```

## Package Naming

Packages follow the format `@{package_author}/{package_name}`. Your repository must be named `cherri-{package_name}`.

Example:
- Package: `@electrikmilk/example`
- Repository: `https://{host}/electrikmilk/cherri-example.git`

GitHub is assumed as the host if the package is not initialized with one. To add a host to an existing package use `--add-uri=` (e.g. `--add-uri=codeberg.org`).

## Commands

### Initialize a Package

```console
cherri --init=@{package_author}/{package_name}
```

Creates an `info.plist` in the current directory. You can initialize without publishing — the `@author/name` format only needs to correspond to a real repo if you plan to share it.

### Install a Package

```console
cherri --install=@{package_author}/{package_name}
```

The first time you install a package you'll be prompted to trust it. Once trusted, the package and all its dependencies are cloned to `./packages/@{package_author}/{package_name}/`.

### List Packages

```console
cherri --package    # current package and its direct dependencies
cherri --packages   # all installed packages
```

### Remove a Package

```console
cherri --remove=@{package_author}/{package_name}
```

Removes the package directory and updates `info.plist`.

### Tidy Packages

```console
cherri --tidy
```

Removes all package directories and reinstalls everything in `info.plist`, including dependencies.

## Security: Trusted Packages

The first time you install a package you'll see a trust prompt:

```
Do you trust this package?

This will download this remote Git repository and automatically include it in this project:
https://{uri}/{package_author}/cherri-{package_name}.git
```

If you answer yes, the package signature is saved to `~/.cherri/trusted.plist` and future installs of that package won't prompt again.

{: .warning }
Review packages before trusting them. Once trusted, a package can add actions to your Shortcut.

## Dependencies

Packages can depend on other packages. When you install a package, all of its dependencies are installed recursively and automatically.

Packages are stored in user-scoped directories to prevent naming conflicts:

```
./packages/
├── @user1/
│   └── app/
├── @user2/
│   └── utils/
└── @user3/
    └── helpers/
```

## Build Behavior

When you compile a project with an `info.plist`, Cherri automatically installs any missing packages and generates `#include` statements for all packages in your manifest. Includes are sorted lexicographically — first by username, then by package name — ensuring reproducible builds across systems.

## Troubleshooting

### "Package already installed"

The package directory already exists. Remove it first (`cherri --remove=@user/package`) or reinstall everything with `cherri --tidy`.

### "unable to install: stat .../main.cherri: no such file or directory"

The package repository is missing `main.cherri`. Contact the package author.

### "unable to install: stat .../info.plist: no such file or directory"

The package repository is missing `info.plist`. The package may not be properly formatted.

### Clone failures

Verify the repository exists and is public, check your internet connection, and confirm the repository name follows the `cherri-{package_name}` format.

### "Package must follow pattern"

Your package name doesn't match `@{username}/{package_name}`. It must start with `@`, use only letters, numbers, underscores, hyphens, or dots in each segment, and have exactly one `/`.

## Declaring Dependencies

To declare a dependency in your package's `info.plist`:

```xml
<key>Packages</key>
<array>
    <dict>
        <key>Name</key>
        <string>helpers</string>
        <key>User</key>
        <string>otheruser</string>
    </dict>
</array>
```

When someone installs your package, `@otheruser/helpers` is installed automatically.