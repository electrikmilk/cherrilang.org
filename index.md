---
title: Welcome
layout: home
nav_order: 1
---

# Welcome!

**Cherri** (pronounced cherry) is a [Siri Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) programming language, that compiles directly to a valid runnable Shortcut.

Scale your Shortcut projects and maintain them long-term.

<div class="code-example" markdown="1">
  
```ruby
/* Hello, Cherri! */

#define glyph smiley
#define color yellow

@message = "Hello!"
alert("Message: {message}", "Alert")
```
[Try it out!](https://playground.cherrilang.org){: .btn }

</div>

### What's a Shortcut?

A Shortcut is a custom automation created by users on Apple platforms (Mac, iPhone, etc.). It is composed of metadata, and "actions" which each perform a task on the device based on the configuration similar to a programming language with functions and control flow. In this way, it becomes a way to program custom software for Apple devices without needing to write an app in Swift and wait for approval from the Apple App Store.

### What makes Cherri different from previous Shortcuts programming languages?

Its primary platform is macOS. The restriction where Shortcuts must be signed, which unfortunately discontinued many iOS app-based Shortcut languages, has shown that a Shortcuts language will likely be more sustainable (fewer restrictions placed on macOS, macOS can sign Shortcuts) and give a better developer experience (no tiny tapping!).
