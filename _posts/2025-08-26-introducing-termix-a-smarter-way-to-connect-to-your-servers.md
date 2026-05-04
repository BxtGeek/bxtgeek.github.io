---
title: "Introducing Termix: A Smarter Way to Connect to Your Servers"
date: 2025-08-26 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/Introducing-Termix-A-Smarter-Way-to-Connect-to-Your-Servers.png
---

# What is Termix?

Termix is a simple Bash/Zsh function that:

- Displays a clean ASCII banner every time you launch it.

- Reads all your servers from `~/.ssh/config`.

- Lets you interactively search and select a server using [fzf](https://github.com/junegunn/fzf).

- Instantly connects you to the chosen server over SSH.

Think of it as a **fuzzy server launcher** right inside your terminal.

## Installation

Just drop the following function into your `~/.bashrc` or `~/.zshrc`:

```bash# --- Aliases ---
alias ll='ls -la'
unalias termix 2>/dev/null
termix() {
  clear
  echo -e "\e[1;32m
████████╗███████╗██████╗ ███╗   ███╗██╗██╗  ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║╚██╗██╔╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║ ╚███╔╝
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║ ██╔██╗
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██╔╝ ██╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝
\e[0m"
  local server
  server=$(awk "/^Host / {print \$2}" ~/.ssh/config | \
           fzf --prompt="📡 Select a server: " \
               --height=20% \
               --border \
               --preview="echo Connecting to {}")
  [[ -n "$server" ]] && ssh -t "$server"
}
```

Then, reload your shell:

```bashsource ~/.bashrc   # or source ~/.zshrc
```

## How It Works

1. Run `termix` in your terminal.

3. You’ll see the green ASCII banner.

5. A fuzzy-searchable list of your servers (from `~/.ssh/config`) appears.

7. Start typing the server name to filter results.

9. Hit `Enter` — and boom, you’re connected.

## \[Video\] What is Termix?

https://www.youtube.com/watch?v=OJvGF5YQ0U8

## Why Use Termix?

- **Speed:** No more copy-pasting hostnames.

- **Convenience:** Everything is fuzzy-searchable.

- **Productivity:** Quickly switch between servers.

- **Aesthetics:** That ASCII banner adds flair every time you connect.

Termix is not a big, heavy tool — it’s just a tiny shell function. But sometimes, the **smallest scripts make the biggest difference**.

Next time you need to SSH into a server, let Termix do the hard work for you.
