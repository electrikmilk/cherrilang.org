---
title: FAQ
layout: default
nav_order: 11
---

# FAQ
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## What's a Shortcut?

A Shortcut is a custom automation created by users on Apple platforms (Mac, iPhone, etc.). It is composed of metadata and "actions," each performs a task on the device based on the configuration, similar to a programming language with functions and control flow. In this way, it becomes a way to program custom software for Apple devices without needing to write an app in Swift and wait for approval from the Apple App Store.

## What makes Cherri different from other Shortcuts programming languages?

Its primary platform is macOS. The restriction that Shortcuts must be signed, which unfortunately discontinued many iOS app-based Shortcut languages, has shown that a Shortcuts language will likely be more sustainable with fewer restrictions placed on macOS (and only macOS can sign Shortcuts). This also creates a better developer experience (no tiny tapping!).

### Signing Shortcuts on non-macOS Platforms

You can use the optional `--hubsign` argument on Unix-like systems to specify to use the remote service HubSign provided by [RoutineHub](https://routinehub.co) to sign the compiled Shortcut so you can then move it onto an Apple device through the iCloud web app or a file server. By default, on non-macOS platforms, this service is used.

You can use an alternative or local server running (shortcut-signing-server)[https://github.com/scaxyz/shortcut-signing-server] using the `--signing-server=` argument.

This may work on Windows but has not been tested, so you may experience issues.

### Can I Build & Run On...?

Of course, you can still build and run the compiler on any platform that the Go programming language will compile on. Cherri will skip signing the compiled Shortcut, but it will still compile. I don't make builds for those platforms, so that no one is confused and thinks that Shortcuts compiled using Cherri on other platforms will be able to be imported and run on any of their Apple devices.

Also, the compiler is currently developed and tested on macOS only, so it will otherwise work best on a Unix-like system that can compile Go code, like Linux or BSD.

## Why No iOS App?

- Compiling on a remote machine via the app would be slow if iOS doesn't want to bundle the compiler.
- I cannot at present justify the cost of the developer program to publish a possible iOS app.

Cherri’s primary platform is also macOS, and this is on purpose. The intent is to give developers the freedom to develop Shortcuts easily on the desktop with desktop-class tools they already enjoy.

However, [playground.cherrilang.org](https://playground.cherrilang.org) solves this problem. You can use it on any platform you prefer that has a web browser and load Shortcuts onto any Apple platform device.

## How Do I Use Non-Standard Actions?

To get the parameters for an action in a Shortcut that you want to use, you first need to decode and decrypt it to the property list format.

Property lists are a key-value-based data format and are relatively easy to parse through if you are familiar with XML data formats, JSON, or at least HTML. If you are unfamiliar, a plist reader is recommended to view these files or to make parsing through them easier.

This is the data format Shortcuts uses to represent the state of the actions used and their parameters in a Shortcut file. However, Shortcut files are generally in a binary (encoded), encrypted (signed) format; they cannot be read without being converted to text and decrypted.

### Decompilation

If the action is not already implemented in Cherri, you can decompile a Shortcut containing the action into a [raw action](/language/raw-actions) using decompilation.

<a 
    href="/decompilation"
    target="_blank"
    class="btn btn-red">
    Decompilation Documentation
</a>

### Download Property List from iCloud

1. Share the Shortcut and copy the iCloud Link to use the iCloud API to download the property list version.
2. [Here is a Shortcut](https://routinehub.co/shortcut/13252/) written in Cherri that shows how to download the property list using an iCloud Link to the Shortcut.

Look for a node with the key `WFWorkflowActions`. In text, this will be an `<array>` with a `<key>` above it containing `WFWorkflowActions`. Each `<dict>` is an action. Within the dictionary, there are two 

```xml
<key>WFWorkflowActions</key>
<array>
    <!-- Action -->
    <dict>
        <key>WFWorkflowActionIdentifier</key>
        <string>is.workflow.actions.alert</string>
        <key>WFWorkflowActionParameters</key>
        <dict>
            <key>WFAlertActionMessage</key>
            <string>Hello!</string>
        </dict>
    </dict>
    <!-- More actions... -->
</array>
```

### Using the Action Data

While an alert action exists, for demonstration purposes and to keep things simple, here is how you would use the **Alert** action data:

Below is this action in Cherri using a [raw action](/language/raw-actions). We use the `WFWorkflowActionParameters` key from above to make a dictionary value containing the same keys and values.

```ruby
rawAction("is.workflow.actions.alert", {
     "WFAlertActionMessage": "Hello!"
})
```

Or, you could define a reusable action using [action definitions](/language/action-definitions):

```
#define action 'is.workflow.actions.setvariable' setVariable(text name: 'WFVariableName', variable input: 'WFInput')
```

### Types Legend

| Property List | Cherri |
:--------| --------- |
| string  | text |
| integer  | number |
| real  | float |
| dictionary  | dictionary |
| array  | array |


## Project Roadmap

Here is an _idealistic_ roadmap for the project. Everything after task 5 is more of a "would be nice".

 - [x] ~~Be able to compile a working shortcut~~
 - [x] ~~Implement most paradigms (if/else, vars, globals, etc.)~~
 - [x] ~~Web editor/playground~~ [playground.cherrilang.org](https://playground.cherrilang.org)
 - [x] ~~Add a dedicated Mac web server to sign the Shortcuts made using~~ [playground.cherrilang.org](https://playground.cherrilang.org). ~~This way, anyone could use Cherri on any platform, making it accessible most notably to iOS users~~
 - [x] ~~9/10 "It just works" and compiles valid and runnable Shortcuts~~
 - [x] Decompilation - Convert Shortcut file to as functional as possible Cherri code.
 - [x] Implement **standard** actions included by default in Shortcuts.
 - [ ] Publish the [macOS app](https://github.com/electrikmilk/cherri-macos-app) on the Mac App Store
