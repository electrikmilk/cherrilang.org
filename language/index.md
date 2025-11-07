---
title: Documentation
layout: default
nav_order: 3
has_children: true
---

# Documentation

Welcome to the Cherri programming language documentation!

Thanks for taking an interest in the Cherri programming language. Cherri is designed to be easy to learn and use, and it's likely very similar to a programming language you may already be familiar with.

Contributing to this open-source documentation is more than welcome!

## Offline

You can access the documentation for actions (even ones defined in your project) completely offline from the CLI.

```bash
cherri --action=action_name
```

This will find the action or give suggestions if there is no exact match.

Search actions defined in a project:

```bash
cherri main.cherri --action=action_name
```

### All actions

Providing nothing will show all standard actions documentation.

### By category

Prints all definitons for actions in the provided category and optionally a subcategory.

```bash
cherri --docs=category --subcat=optional
```

Subcategories are listed on each category page.

All parent categories are listed in the help message using `--help`.