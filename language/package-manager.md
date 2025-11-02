---
title: Packages
layout: default
parent: Documentation
nav_order: 13
---

# Packages
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

Future release
{: .label .label-purple }

Cherri includes a built-in GitHub-based package manager that allows you to easily share and reuse code across projects.

## Overview

The package manager:
- Downloads packages from GitHub repositories
- Manages dependencies automatically (including nested dependencies)
- Provides a trust system for security
- Generates deterministic builds
- Stores packages in user-scoped directories to prevent naming conflicts

## Package Structure

Every Cherri package must follow this structure:

```
cherri-{package_name}/
├── main.cherri         # Entry point (required)
├── info.plist          # Package metadata (required)
└── ... other files
```

### Required Files

**`main.cherri`**: The main entry point for your package. This file will be automatically included when your package is installed.

**`info.plist`**: A property list file containing package metadata in this format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Name</key>
    <string>package_name</string>
    <key>User</key>
    <string>github_username</string>
    <key>Packages</key>
    <array>
        <!-- Dependencies go here -->
    </array>
</dict>
</plist>
```

## Package Naming

Packages follow the format `@{github_username}/{package_name}` where:
- **Username**: Your GitHub username (alphanumeric, underscores, hyphens, and dots allowed)
- **Package name**: The repository name without the `cherri-` prefix (same character restrictions)

### GitHub Repository Structure

Your repository must be named: `cherri-{package_name}`

Example:
- Package signature: `@electrikmilk/example`
- GitHub repository: `https://github.com/electrikmilk/cherri-example.git`

## Commands

### Initialize a Package

Create a new package in the current directory:

```bash
cherri --init=@{github_username}/{package_name}
```

This creates an `info.plist` file with the provided details. You can initialize a package for your project without publishing it to GitHub—the username/package format is only required if you plan to share it.

### Install a Package

Install a package and its dependencies:

```bash
cherri --install=@{github_username}/{package_name}
```

**What happens:**
1. If this is the first time installing this package on your system, you'll be prompted to trust it
2. The package is cloned from GitHub to `./packages/@{github_username}/{package_name}/`
3. Any dependencies listed in the package's `info.plist` are automatically installed
4. The package's `main.cherri` is automatically included at compile time

### List Package Information

View the current package and its direct dependencies:

```bash
cherri --package
```

List all installed packages:

```bash
cherri --packages
```

### Remove a Package

Uninstall a package:

```bash
cherri --remove=@{github_username}/{package_name}
```

This removes the package directory and updates your `info.plist`.

### Tidy Packages

Reinstall all packages (useful for cleaning up or updating):

```bash
cherri --tidy
```

This command:
1. Removes all package directories
2. Reinstalls all packages listed in your `info.plist`
3. Reinstalls their dependencies

## Security: Trusted Packages

The first time you install a package on your system, you'll see a trust prompt:

```
Do you trust this package?

This will download this GitHub repository and automatically include it in this project:
https://github.com/{github_username}/cherri-{package_name}.git
```

If you answer yes, the package signature is saved to `~/.cherri/trusted.plist`. Future installations of that package won't prompt you again.

**Important**: Review packages before trusting them. Once trusted, packages can execute code in your projects.

## Dependencies

### Nested Dependencies

Packages can depend on other packages. When you install a package, all of its dependencies are automatically installed recursively.

Example dependency chain:
1. You install `@user1/app`
2. `@user1/app` depends on `@user2/utils`
3. `@user2/utils` depends on `@user3/helpers`
4. All three packages are installed automatically

### Dependency Storage

Packages are stored in user-scoped directories:

```
./packages/
├── @user1/
│   └── app/
│       ├── main.cherri
│       └── info.plist
├── @user2/
│   └── utils/
│       ├── main.cherri
│       └── info.plist
└── @user3/
    └── helpers/
        ├── main.cherri
        └── info.plist
```

This structure prevents naming conflicts—multiple users can have packages with the same name.

## Build Behavior

### Automatic Includes

When you compile a project with an `info.plist`, Cherri automatically:
1. Installs any missing packages (lazy installation)
2. Generates `#include` statements for all packages in your manifest
3. Sorts includes deterministically (by user, then by package name)

This ensures builds are reproducible across different systems.

### Include Order

Packages are included in lexicographic order:
1. First by username (e.g., `@alice` before `@bob`)
2. Then by package name (e.g., `helpers` before `utils`)

This deterministic ordering ensures consistent builds.

## Best Practices

### For Package Authors

1. **Keep packages focused**: Each package should do one thing well
2. **Document dependencies**: List all required packages in your `info.plist`
3. **Minimize dependencies**: Only depend on what you actually need
4. **Use relative includes**: Inside your package, use relative paths for internal files
5. **Test in isolation**: Verify your package works when installed, not just in development
6. **Avoid name collisions**: Choose descriptive, unique package names

### For Package Users

1. **Review before trusting**: Check the GitHub repository before trusting a package
2. **Keep packages updated**: Run `cherri --tidy` periodically to refresh packages
3. **Pin critical projects**: For production code, consider forking dependencies
4. **Document dependencies**: Comment why you need each package

## Troubleshooting

### "Package already installed"

The package directory already exists. Options:
- Remove it first: `cherri --remove=@user/package`
- Reinstall everything: `cherri --tidy`

### "unable to install: stat .../main.cherri: no such file or directory"

The package repository is missing the required `main.cherri` file. Contact the package author.

### "unable to install: stat .../info.plist: no such file or directory"

The package repository is missing the required `info.plist` file. The package may not be properly formatted.

### Clone Failures

If installation fails with Git errors:
- Verify the repository exists and is public
- Check your internet connection
- Ensure the repository name follows the `cherri-{package_name}` format

### "Package must follow pattern"

Your package name doesn't match `@{username}/{package_name}`. Ensure:
- It starts with `@`
- Username and package name contain only letters, numbers, underscores, hyphens, or dots
- There's exactly one `/` separating username and package name

## Examples

### Creating and Publishing a Package

1. Create a GitHub repository: `cherri-math-helpers`
2. Add `main.cherri` and `info.plist`
3. Users install it with: `cherri --install=@yourusername/math-helpers`

### Using Packages in Your Project

```bash
# Initialize your project
cherri --init=@myusername/myapp

# Install dependencies
cherri --install=@electrikmilk/stdlib
cherri --install=@someuser/utilities

# Your main.cherri automatically includes installed packages
# Build as normal
cherri main.cherri -o myapp.shortcut
```

### Package with Dependencies

In your `info.plist`, list dependencies:

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
