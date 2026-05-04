---
title: "Powerful Mac Editors to Replace Notepad++"
date: 2024-08-31 00:00:00 +0530
categories: 
  - "mac-apps"
tags: 
  - "advanced-textedit-features"
  - "mac-development-tools"
  - "mac-notepad-replacement"
  - "mac-os-text-editors"
  - "mac-productivity-tools"
  - "mac-software"
  - "mac-text-editors"
  - "multi-editing-on-mac"
  - "notepad-alternatives"
  - "notepad-for-mac"
  - "notepad-vs-textedit"
  - "text-editing-on-mac"
  - "text-editor-apps-for-mac"
  - "text-editor-comparison"
  - "textedit-tips"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-5.png
---

After switching from Windows to Mac, one application that I miss the most is [Notepad++](https://notepad-plus-plus.org/). Over time, I tried multiple apps on the Mac to replace Notepad++, but none brought the same feel and ease. Eventually, I started using TextEdit and discovered it's more than just a basic text editor. There are many features in TextEdit that most people are unaware of. In this article, we'll explore the top Notepad++ features you can use in TextEdit and how to achieve similar functionality.

<figure>

![](/assets/img/posts/CorpIT-Article-Thumbnails-6.png)

<figcaption>

TextEdit

</figcaption>

</figure>

Instead of covering the basic features that most people already know, we'll focus on some advanced features that are often overlooked.

#### AutoSave in TextEdit

TextEdit supports AutoSave, a lifesaver for those moments when you accidentally close the app or experience a crash. Unlike Notepad++, which requires plugins for similar functionality, TextEdit’s AutoSave is built-in. To ensure AutoSave is enabled, go to System Settings > Desktop & Dock > Windows & Apps > Ask to keep changes when closing documents and disable it.

#### Tab Feature in TextEdit

If you’re used to opening multiple files in tabs with Notepad++, you’ll be pleased to know that TextEdit also supports tabs. To open a new tab, simply go to **File** > **New Tab** or press **Command + T**. This feature allows you to keep multiple documents open in a single window, making it easier to switch between them.

#### Auto-Completion

Notepad++ has a useful auto-completion feature that speeds up coding and writing by suggesting words and phrases as you type. TextEdit doesn’t have this feature built-in, but there’s a workaround: you can enable **Spelling and Grammar** check under **Edit** > **Spelling and Grammar** > **Check Spelling While Typing**. While this doesn’t provide the same level of auto-completion as Notepad++, it can help reduce typos and offer basic word suggestions.

#### Search and Replace

TextEdit also supports powerful search and replace functionalities, similar to Notepad++. To use it, press **Command + F** to open the search bar. You can click the **magnifying glass** icon to expand to a more advanced search and replace mode, where you can search for specific text and replace it with something else across the entire document.

#### Start TextEdit with a New Document Right Away

If you prefer to have TextEdit open with a new document instead of showing the open file dialog every time you launch the app, you can easily change this setting. Open Terminal and type the following command:

```
defaults write com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile -bool false
```

This command sets TextEdit to start with a new blank document by default, similar to how Notepad++ behaves.

### Bash Script to make all changes

```bash#!/bin/bash

echo "Configuring TextEdit to behave more like Notepad++..."

# Function to conditionally set a default if it doesn't match the desired value
set_default_if_needed() {
  domain=$1
  key=$2
  type=$3
  desired_value=$4

  current_value=$(defaults read "$domain" "$key" 2>/dev/null)

  if [ "$current_value" != "$desired_value" ]; then
    echo "Updating '$key' to '$desired_value' (current: '$current_value')"
    defaults write "$domain" "$key" "-$type" "$desired_value"
  else
    echo "'$key' is already set to '$desired_value'"
  fi
}

# 1. Disable prompt to save changes on close (AutoSave behavior)
set_default_if_needed -g NSCloseAlwaysConfirmsChanges bool false

# 2. Enable tabbed windows by default
set_default_if_needed -g AppleWindowTabbingMode string "always"

# 3. Configure spell check and automatic substitution behavior
set_default_if_needed -g NSAutomaticSpellingCorrectionEnabled bool true
set_default_if_needed -g NSAutomaticQuoteSubstitutionEnabled bool false
set_default_if_needed -g NSAutomaticDashSubstitutionEnabled bool false

# 4. Set TextEdit to start with a new blank document
set_default_if_needed com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile bool false

# 5. Set TextEdit to use plain text mode by default
set_default_if_needed com.apple.TextEdit RichText bool false

# Restart TextEdit to apply changes
echo "Restarting TextEdit to apply changes..."
killall TextEdit 2>/dev/null

echo "Configuration completed successfully."
```

#### Conclusion

While TextEdit might not be a one-to-one replacement for Notepad++, it offers several features that can help fill the gap. Additionally, the Mac ecosystem has several powerful text editors like **Sublime Text**, **Visual Studio Code**, and **Atom** that provide even more features and customization options. With a bit of tweaking and exploration, you can find a text editor on Mac that suits your needs just as well, if not better, than Notepad++.
