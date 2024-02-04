---
title: Welcome
layout: home
nav_order: 1
---

# Welcome!

**Cherri** (pronounced cherry) is a [Siri Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) programming language, that compiles directly to a valid runnable Shortcut.

Scale your Shortcut projects and maintain them long term.

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

What makes Cherri different from previous Shortcuts programming languages is that its primary platform is macOS. Not only due to restrictions placed on iOS, which unfortunately discontinued many iOS app-based Shortcut languages but for better sustainability (fewer restrictions placed on macOS) and developer experience (no tiny tapping!).

A Shortcut is a custom automation created by users on Apple platforms (Mac, iPhone, etc.). It is composed of metadata, and "actions" which each perform a task on the device based on the configuration similar to a programming language with functions and control flow. In this way, it becomes a way to program custom software for Apple devices without needing to write an app for approval on the Apple App Store.

Typically, it can be cumbersome for a Shortcut developer to go past the scale of a couple of hundred actions. Cherri makes it possible for a Shortcut project to scale. The language features things typical software developers would expect (e.g. `#includes`, macros) to make a Shortcut project take less time and effort and ultimately much more maintainable in the long term.
