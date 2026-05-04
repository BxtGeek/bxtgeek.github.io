---
title: "How to Redesign and Customize Your Mac Terminal"
date: 2024-09-18 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/4.png
---

We often find ourselves using the default Mac terminal, but instead of switching to alternatives like [iTerm2](https://iterm2.com/) or [Oh My Zsh](https://ohmyz.sh/) to make it look cooler, you can actually do a lot with the built-in Mac terminal itself. Here’s what your terminal can look like after some customizations.

![](/assets/img/posts/5.png)

Since the terminal uses the Zsh shell, the first step is to edit your `.zshrc` file. Below is an example of how it might look, along with some changes you can make and an explanation of each.

```bash# Useful Aliases
alias ipaddr="ifconfig en0 | grep -w inet | cut -d' ' -f2"
alias speed="speedtest-cli --simple"
alias wtr="curl wttr.in"

# Initialize Atuin for shell history
eval "$(atuin init zsh)"

# Display system information on startup
neofetch

# Customize prompt
PS1='[%*]-[%j]-[%m] %~ '

# Function for cheat sheets
cheatsh() {
    curl "cheat.sh/$1"
}
```

This setup includes commands for checking your IP address, running a speed test, checking the weather, and more. It also enhances your prompt and includes [Atuin](https://corpit.org/best-mac-terminal-app/) for enhanced shell history management.

To enhance the appearance of your Mac terminal, you can also apply a popular color scheme like the **[One Dark Terminal](https://github.com/nathanbuchar/atom-one-dark-terminal)** theme. Here's how you can add it to your Mac terminal:

### Adding the One Dark Terminal Theme

1. **Download the One Dark Theme**:
    - You can download the One Dark theme for terminal [here](https://github.com/nathanbuchar/atom-one-dark-terminal).
    
    - Look for the `.terminal` file (usually `One Dark.terminal`) and download it.

3. **Install the Theme**:
    - Once downloaded, double-click the `One Dark.terminal` file. This will automatically open the Mac terminal with the One Dark theme applied temporarily.
    
    - To make it permanent, go to **Terminal Preferences** (`⌘ + ,`).
    
    - In the **Profiles** tab, find **One Dark** in the list, select it, and click the **Default** button to make it your default profile.

5. **Further Customization**:
    - After applying the theme, you can continue to customize other aspects of your terminal as described earlier, like modifying the `.zshrc` file or adjusting font and window transparency.

By adding the **One Dark Terminal** theme, you’ll give your terminal a sleek, modern look, while still keeping the functionality of the default Mac terminal.

The ouput will looks something like this.

<figure>

![](/assets/img/posts/Screenshot-2024-09-14-at-3.28.32 PM.jpg)

<figcaption>

Redesign Mac Terminal

</figcaption>

</figure>
