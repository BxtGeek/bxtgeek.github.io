---
title: "10 Linux Commands I Can’t Live Without"
date: 2026-05-15 00:00:00 +0530
categories: 
  - "linux"
image:
  path: /assets/img/posts/linux-commands-i-cant-live-without.webp
---
Linux provides hundreds of powerful commands, but there are a handful that become part of your daily workflow once you start working seriously with servers, scripting, troubleshooting, or automation.

This article covers 10 commands that are incredibly useful for beginners while still being powerful enough for intermediate Linux users. These are commands I personally find difficult to work without because they save time, improve visibility, and make troubleshooting easier.

## Watch the Full Video
You can watch the full video here:
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/0-Qj7UvSYkE"
    style="position: absolute; top:0; left:0; width:100%; height:100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

# 1. `grep` — Search Like a Pro

The `grep` command is used to search for text patterns inside files or command outputs.

## Why It’s Useful

Whether you are checking logs, finding configuration values, or filtering output, `grep` becomes an essential tool very quickly.

## Basic Syntax

```
grep "keyword" filename
```

## Examples

Search for the word `error` inside a log file:

```
grep "error" /var/log/syslog
```

Case-insensitive search:

```
grep -i "failed" auth.log
```

Show line numbers:

```
grep -n "PermitRootLogin" /etc/ssh/sshd_config
```

Recursive search inside directories:

```
grep -r "Listen 80" /etc/apache2/
```

Match Multiple Words
```
grep -E "error|failed" app.log
```

## Helpful Options

| Option | Description       |
| - | -- |
| `-i`   | Ignore case       |
| `-n`   | Show line numbers |
| `-r`   | Recursive search  |
| `-v`   | Invert match      |
| `-c`   | Count matches     |



# 2. `fastfetch` — System Information Made Beautiful

`fastfetch` displays detailed system information in a clean and visually appealing format.

## Why It’s Useful

It provides quick visibility into:

* OS details
* Kernel version
* CPU and memory usage
* Desktop environment
* Disk usage
* GPU information

## Install

Ubuntu/Debian:

```
sudo apt install fastfetch
```

## Usage

```
fastfetch
```

## Example Output

```
OS: Ubuntu 24.04
Kernel: 6.x.x
CPU: Intel i7
Memory: 6.2GiB / 16GiB
Shell: zsh
```

This command is especially useful when documenting systems or validating lab environments.



# 3. `htop` — Interactive Process Monitoring

`htop` is an improved and interactive version of the classic `top` command.

## Why It’s Useful

It allows you to:

* Monitor CPU and memory usage
* Identify resource-heavy processes
* Kill processes interactively
* View processes in real time

## Install

```
sudo apt install htop
```

## Usage

```
htop
```

## Useful Keys Inside `htop`

| Key  | Function       |
| - | -- |
| `F3` | Search process |
| `F5` | Tree view      |
| `F6` | Sort by column |
| `F9` | Kill process   |



# 4. `awk` — Text Processing Powerhouse

`awk` is one of the most powerful text-processing tools in Linux.

## Why It’s Useful

It can:

* Extract columns
* Process structured data
* Generate reports
* Perform calculations

## Basic Example

Print the first column:

```
awk '{print $1}' file.txt
```

Print usernames from `/etc/passwd`:

```
awk -F: '{print $1}' /etc/passwd
```

Show disk usage percentage:

```
df -h | awk '{print $5}'
```

## Common Concepts

| Symbol | Meaning         |
| - | -- |
| `$1`   | First column    |
| `$2`   | Second column   |
| `-F`   | Field separator |



# 5. `for` Loop — Automation Starts Here

The `for` loop is fundamental for shell scripting and automation.

## Why It’s Useful

It helps automate repetitive tasks such as:

* Managing multiple files
* Running commands in bulk
* Performing repetitive administration

## Basic Syntax

```
for item in list
do
    command
done
```

## Examples

Loop through numbers:

```
for i in 1 2 3 4 5
do
    echo $i
done
```

Loop through files:

```
for file in *.log
do
    echo $file
done
```

Create multiple directories:

```
for dir in dev test prod
do
    mkdir $dir
done
```



# 6. `less` — Read Large Files Efficiently

The `less` command allows you to read files page by page.

## Why It’s Useful

Unlike `cat`, it does not dump the entire file to the screen. This is extremely useful for:

* Large logs
* Configuration files
* Troubleshooting output

## Usage

```
less /var/log/syslog
```

## Navigation Shortcuts

| Key         | Action             |
| - | -- |
| `/text`     | Search text        |
| `n`         | Next search result |
| `Shift + G` | Go to end          |
| `g`         | Go to beginning    |
| `q`         | Quit               |



# 7. `yes` — Simple but Surprisingly Useful

I accidentally discovered this command while working on an automation task.

I had created a script that needed to remove more than 500 tasks. The problem was that the script prompted for confirmation every single time, requiring the user to type yes repeatedly to continue. Manually confirming 500+ times was obviously not practical.

That’s when I came across the yes command, and it made the entire process much easier.

The yes command continuously outputs a string repeatedly until the process is stopped.

## Why It’s Useful

It can automate confirmation prompts or generate test data.

## Usage

Automatically answer “yes” to prompts:

```
yes | apt upgrade
```

Custom text:

```
yes "Linux"
```

## Warning

`yes` can consume CPU quickly because it continuously prints output. Use it carefully.



# 8. `head` and `tail` — Quickly Inspect Files

These commands display the beginning or end of files.

## Why They’re Useful

They are perfect for:

* Checking logs
* Viewing recent entries
* Inspecting large files



## `head`

Show first 10 lines:

```
head file.txt
```

Show first 20 lines:

```
head -20 file.txt
```



## `tail`

Show last 10 lines:

```
tail file.txt
```

Live monitoring logs:

```
tail -f /var/log/syslog
```

This is one of the most commonly used commands for troubleshooting services.



# 9. `find` — Locate Files Instantly

The `find` command searches for files and directories.

## Why It’s Useful

It helps locate:

* Configuration files
* Logs
* Old files
* Large files

## Examples

Find a file:

```
find /etc -name sshd_config
```

Find `.log` files:

```
find /var/log -name "*.log"
```

Find files larger than 100 MB:

```
find / -size +100M
```

Find and delete files older than 7 days:

```
find /tmp -mtime +7 -delete
```



# 10. `xargs` — Build Powerful Command Pipelines

`xargs` converts input into command arguments.

## Why It’s Useful

It works extremely well with:

* `find`
* `grep`
* Pipelines
* Bulk operations

## Examples

Delete `.tmp` files:

```
find . -name "*.tmp" | xargs rm
```

Search inside multiple files:

```
find . -name "*.log" | xargs grep "ERROR"
```

Count lines from multiple files:

```
find . -name "*.txt" | xargs wc -l
```



# Bonus Mentions

A few additional commands worth learning:

| Command | Purpose                      |
| - | - |
| `sed`   | Stream editing               |
| `cut`   | Extract fields               |
| `sort`  | Sort data                    |
| `uniq`  | Remove duplicates            |
| `watch` | Re-run commands periodically |
| `tmux`  | Terminal multiplexing        |



# Final Thoughts

Linux becomes significantly more powerful once you get comfortable with command-line tools. The commands covered here are not just useful shortcuts — they form the foundation for:

* System administration
* Troubleshooting
* Automation
* Shell scripting
* DevOps workflows

For beginners, the best way to learn these commands is by using them daily in real scenarios. Over time, they become second nature and dramatically improve productivity.

If you are starting your Linux journey, mastering these commands is one of the best investments you can make.
