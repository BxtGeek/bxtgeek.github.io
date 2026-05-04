---
title: "How to Download Google Takeout with aria2"
date: 2025-11-16 00:00:00 +0530
categories: 
  - "homelab"
image:
  path: /assets/img/posts/How-to-Download-Google-Takeout-with-aria2.png
---

Downloading large Google Takeout files can be slow and frustrating. Because of this, many users choose to **download Google Takeout with aria2** to get faster and more stable results. This guide shows simple steps that anyone can follow, even with basic terminal skills.

## Why Use aria2 for Large Google Takeout Downloads

Aria2 is a lightweight download tool. It works well for big files. It also works through the terminal, which makes it great for servers.

**Benefits of aria2:**

- Fast downloads

- Easy resume support

- Low resource usage

- Reliable for large ZIP files

However, Google Takeout blocks multi-stream downloads. Because of this, we must configure aria2 the right way.

## Install aria2 on Your System

You can install aria2 on Linux or macOS. The commands below work on common systems.

##### **Linux (Ubuntu/Debian)**

```bashsudo apt update
sudo apt install aria2 -y
```

##### **Linux (CentOS/RHEL)**

```bashsudo dnf install aria2 -y
```

##### **macOS**

```bashbrew install aria2
```

These commands install aria2 quickly and safely.

## Export Your Browser Cookies Before Downloading

Google Takeout download links need login cookies. Without cookies, aria2 will download an HTML login page instead of your ZIP file. This issue is common, but the fix is simple.

### Steps to export cookies:

- Install the [**Get cookies.txt**](https://addons.mozilla.org/en-CA/firefox/addon/get-cookies-txt-locally/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) browser extension.

- Visit **[https://takeout.google.com](https://takeout.google.com)**

- Export your cookies.

- Save the file as:

```
~/cookies.txt
```

Your download will fail without this file. So make sure you do not skip this step.

## Get a Fresh Google Takeout Download Link

You must copy the download link the correct way. For example, links from email often expire. Because of this, you should copy it from your browser's download page.

### How to copy a valid link:

- Start the download in your browser.

- Open **chrome://downloads**.

- Right-click the Takeout file.

- Select **Copy download link**.

This link includes your login token. So aria2 can use it safely.

## How to Download Google Takeout with aria2 (Correct Command)

Now we can run aria2. Google only allows single-stream downloads. Because of this, we must set `-x 1` and `-s 1`.

```
aria2c -x 1 -s 1 -c --load-cookies=cookies.txt --file-allocation=none "PASTE_TAKEOUT_LINK_HERE"
```

### Command Breakdown

| Flag | Meaning |
| --- | --- |
| `-x 1` | Use 1 connection only |
| `-s 1` | No file splitting |
| `-c` | Resume downloads |
| `--load-cookies` | Load Google cookies |
| `--file-allocation=none` | Avoid slow pre-allocation |

This command works for all large Google Takeout files.

## Resume Downloads Anytime with aria2

If your internet drops, you can resume the download.

```
aria2c --load-cookies=cookies.txt -c "URL"
```

Because aria2 supports resuming, you will not lose progress.

## How to Verify Your Google Takeout Download

Google includes checksum files. These files help confirm your ZIP file is not corrupted.

```
md5sum takeout-001.zip
sha1sum takeout-001.zip
```

Then compare the numbers with the checksum files in your Takeout folder.

## FAQ

**How do I fix expired Google Takeout links?**

Copy the link again from **chrome://downloads**. \[if you are using chrome\]

**Why does aria2 download an HTML page instead of a ZIP?**

Your cookies file is missing or outdated.

**Can I use aria2 on Windows?**

Yes, but you need the Windows version of aria2.

**Why must I use only one connection?**

Google blocks multi-stream downloads.

**Can I download multiple Takeout files at once?**

Yes, but each must use `-x 1 -s 1`

## \[Video\] How to Download Google Takeout with aria2

https://youtu.be/eS4Ukifq640

## Conclusion

When you want fast and stable downloads, the best method is to **download Google Takeout with aria2**. It works well, it resumes downloads, and it avoids browser problems. With cookies, a fresh link, and the right command, you can download any size Takeout file smoothly.
