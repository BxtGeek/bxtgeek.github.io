---
title: "Why sudo-rs Exists: Rewriting sudo in Rust"
date: 2026-05-10 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/why-sudo-rs-exists-rewriting-sudo-in-rust.webp
---
# Why sudo-rs Exists: Rewriting sudo in Rust

*A beginner-friendly guide to one of the most important security tools on your Linux system — and why it's getting a Rust makeover.*

## First Things First: What Even Is `sudo`?
If you've ever used Linux or macOS, you've probably typed something like:

```
sudo apt install something
```
That little word — `sudo` — stands for **"superuser do"**. It lets a regular user run a single command with administrator (root) privileges, without handing over the keys to the entire system.

Think of it like this: you're a hotel guest, and `sudo` is the front desk. Instead of giving you a master key to every room, it checks your ID and lets you into *just* the room you need, *just* for a moment.

`sudo` has been around since **1980**. It's on virtually every Linux server, cloud instance, and developer machine on the planet. Billions of commands are run through it every day.

Which makes one fact a little unsettling: **it's written in C.**

## What's Wrong With C?
Nothing — and everything, depending on who you ask.

C is a fast, powerful, low-level language. It's also famously unforgiving. In C, the programmer is responsible for managing memory manually. Forget to free some memory? **Memory leak.** Access memory you shouldn't? **Buffer overflow.** Mix up a pointer? **Undefined behavior** that can crash your program — or worse, let an attacker run their own code.

These aren't hypothetical problems. Over the years, `sudo` has had several real security vulnerabilities:

- **CVE-2021-3156 (Baron Samedit)** — A heap buffer overflow in `sudo` that had been hiding in the code for *10 years*. It allowed any local user to gain full root access on most Linux systems. Yikes.
- **CVE-2019-18634** — A stack buffer overflow triggered by a specific configuration option.
- **CVE-2023-22809** — An editing bypass in `sudoedit` that allowed privilege escalation.

These bugs are hard to find and even harder to prevent in C, because the language gives you almost no safety guardrails. A single off-by-one error in memory access can become a full system compromise.

## Enter Rust 🦀
Rust is a modern systems programming language that aims to be just as fast as C — but with **memory safety built into the language itself**.

In Rust, a whole class of bugs simply cannot compile. The compiler catches them before your code ever runs:

- No null pointer dereferences
- No buffer overflows
- No use-after-free errors
- No data races in concurrent code

Rust achieves this through a concept called the **ownership system** — a set of rules the compiler enforces at compile time, with zero runtime cost. You get C-level performance with safety guarantees that C can never provide.

Microsoft, Google, and the Linux kernel team have all started adopting Rust for exactly this reason. The NSA has even publicly recommended moving away from C/C++ toward memory-safe languages like Rust.

## So, What Is `sudo-rs`?
`sudo-rs` is a **complete rewrite of `sudo` in Rust**, developed by the security company **Ferrous Systems** in collaboration with the **Internet Security Research Group (ISRG)** — the same folks behind Let's Encrypt.

The project started in 2022 and is funded in part through ISRG's **Prossimo** initiative, which focuses on making critical internet infrastructure memory-safe.

The goal is simple but ambitious: **replace one of Linux's most trusted — and most attacked — tools with a safer, modern implementation.**

## What Does `sudo-rs` Actually Do Differently?
### 1. Memory Safety by Default
The most important change is under the hood. By being written in Rust, `sudo-rs` eliminates entire categories of vulnerabilities at the language level. A Baron Samedit-style heap overflow simply *cannot happen* in safe Rust code — the compiler won't allow it.

### 2. Drop-in Compatibility
`sudo-rs` is designed to be a **drop-in replacement**. If you use common `sudo` features — running commands as root, using `/etc/sudoers`, `sudo -u username`, `sudoedit` — it should just work. You don't need to relearn anything.

```
# This works the same in sudo-rs
sudo systemctl restart nginx
```

### 3. A Smaller, Auditable Codebase
The original `sudo` has accumulated decades of features, workarounds, and platform-specific code. It's a large, complex codebase. `sudo-rs` starts fresh, focusing on the core features most people actually use, making it:

- Easier to audit for security
- Easier to maintain over time
- Easier to understand for contributors

### 4. PAM and sudoers Support
`sudo-rs` supports PAM (Pluggable Authentication Modules) — the standard Linux authentication framework — as well as the familiar `sudoers` configuration file syntax. So your existing configs work.

## Where Can You Use It Today?
As of 2024–2025, `sudo-rs` is production-ready and ships as the **default `sudo`** on:

- **Ubuntu 24.04 LTS** — a huge milestone, given Ubuntu's massive install base
- Various other Linux distributions are evaluating or adopting it

You can also install it manually on most Linux systems. The project is open source and available on GitHub at [github.com/trifectatechfoundation/sudo-rs](https://github.com/trifectatechfoundation/sudo-rs).

## What `sudo-rs` Doesn't Do (Yet)
Honesty matters. `sudo-rs` doesn't support every feature of the original `sudo`. Some of the more obscure or legacy options aren't implemented. If you rely on:

- Complex `sudoers` features like `NOEXEC` or certain per-command environment tweaks
- Some platform-specific options

...you may hit edge cases. The team is actively working on coverage, and the project publishes a clear compatibility matrix in its docs.

## Should You Care About This?
If you're a developer, sysadmin, or just someone who uses Linux — yes, quietly, you should.

You probably never think about `sudo`. It just works. And that's exactly why memory safety matters here: the tools we trust most are the ones attackers target hardest. A vulnerability in `sudo` isn't a vulnerability in one app — it's a vulnerability in *every Linux machine that runs it.*

Rewriting it in Rust doesn't just fix today's bugs. It makes an entire category of future bugs structurally impossible.

## The Bigger Picture
`sudo-rs` is part of a broader movement to harden the foundations of the internet. Projects like:
- **rustls** — a TLS library replacing OpenSSL in some contexts
- **Rust in the Linux kernel** — official support added in Linux 6.1
- **memory-safe curl** — experimenting with Rust backends
...are all tackling the same root problem: critical software written in unsafe languages is a ticking clock.

The Rust rewrite of `sudo` is one of the most practical, highest-impact examples of this shift. It's not theoretical safety — it's replacing a tool that runs as root on your machine, right now, with something the compiler has already stress-tested for a class of bugs humans consistently miss.

| Feature | `sudo` (original) | `sudo-rs` |
|---|---|---|
| Language | C | Rust |
| Memory safety | Manual (error-prone) | Enforced by compiler |
| Age | ~44 years | ~2022 |
| Drop-in replacement | — | Yes |
| Default on Ubuntu 24.04 | No | Yes |
| Historical CVEs | Several | None so far |

## Further Reading
- [sudo-rs on GitHub](https://github.com/trifectatechfoundation/sudo-rs)
- [ISRG Prossimo project](https://www.memorysafety.org/initiative/sudo-su/)
- [The Rust Programming Language Book](https://doc.rust-lang.org/book/) — free, online
- [CVE-2021-3156 writeup (Baron Samedit)](https://blog.qualys.com/vulnerabilities-threat-research/2021/01/26/cve-2021-3156-heap-based-buffer-overflow-in-sudo-baron-samedit)

*If this post made you appreciate that little four-letter word at the start of your terminal commands a bit more — mission accomplished. The unglamorous plumbing of the internet is getting safer, one rewrite at a time.* 🦀

# Watch the Full Video
You can watch the full video here:
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/6cGV9YwaODo"
    style="position: absolute; top:0; left:0; width:100%; height:100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
