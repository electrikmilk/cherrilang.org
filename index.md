---
title: Scale Your Siri Shortcut Projects
nav_exclude: true
layout: home
nav_order: 1
---

<div class="hero">
    <img src="/assets/hero.png" width="500" alt="Cherri Hero Image"/>
    <h1>Scale your Shortcut projects and maintain them long-term.</h1>
    <p style="color: #959396">**Cherri** (pronounced cherry) is a <a href="https://apps.apple.com/us/app/shortcuts/id1462947752" ref="noreferrer noopener" target="_blank">Siri Shortcuts</a> programming language that compiles directly to a signed Shortcut you can then run on your Apple devices.</p>
    <span class="fs-6">
    <a href="https://playground.cherrilang.org" target="_blank" class="btn btn-red btn-outline hero-button">Try Cherri</a>
    </span>
</div>

<br/>

<div class="code-example" markdown="1">
```ruby
/* Hello, Cherri! */

#define glyph smileyFace
#define color yellow

@message = "Hello!"
alert("Message: {message}", "Alert")
```
<span class="fs-5">
<a href="https://playground.cherrilang.org" target="_blank" class="btn btn-red">Try Me!</a>
</span>
</div>

---

## VS Code Extension
Provides syntax highlighting and file icon.

<br/>

<a href="https://marketplace.visualstudio.com/items?itemName=electrikmilk.cherri-vscode-extension" target="_blank" class="btn btn-red">Install VS Code Extension</a>

---

## macOS App

You can build and run the Xcode project locally.

<br/>

<a href="https://github.com/electrikmilk/cherri-macos-app" target="_blank" class="btn btn-red">View Source on GitHub</a>

---

## Language Features

- 🎓 Easy to learn and syntax similar to other languages
- 🐞 1-1 translation to Shortcut actions as much as possible to make debugging easier
- 🪄 No magic variables syntax, they're constants instead
- 🪶 Optimized to create as small as possible Shortcuts and reduces memory usage at runtime
- #️⃣ Include files within others for large Shortcut projects
- 🔧 Define custom actions
- 📋 Copy-paste actions automatically
- 🥩 Enter actions raw with custom identifier and parameters
- ❓ Define import questions
- 📇 Generate VCards for menus
- 📄 Embed files in base64
- 🔢 Type system and type inference
