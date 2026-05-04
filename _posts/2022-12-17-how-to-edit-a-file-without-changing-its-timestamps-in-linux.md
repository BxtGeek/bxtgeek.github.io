---
title: "How To Edit A File Without Changing Its Timestamps In Linux"
date: 2022-12-17 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "change-file-timestamp"
  - "edit-file-without-changing-modified-date"
  - "how-to-get-timestamp-of-a-file-in-linux"
  - "linux-change-timestamp-of-all-files-in-directory"
  - "linux-modify-change-time"
  - "linux-timestamp-example"
  - "modify-file-without-changing-timestamp-windows"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1-1.png
---

Editing a file without changing its timestamps can be useful in a variety of situations, such as when you want to maintain the integrity of your file system or track changes to a file over time. In Linux, this can be easily accomplished using the `touch` command.

The `touch` a command is a simple tool that is used to update the timestamps of a file. By default, `touch` will update the last access and last modification timestamps of a file to the current time. However, it also provides several options that allow you to control which timestamps are updated and which are preserved.

One of the most useful options for editing a file without changing its timestamps is the `-a` and `-m` options. These options allow you to specify which timestamps you want to update and which you want to preserve. For example, to edit a file called `myfile.txt` without changing its last access and last modification timestamps, you can use the following command:

```bashtouch -a -m myfile.txt
```

This will update the last access and last modification timestamps of `myfile.txt` to the current time, without changing the actual content of the file. You can then use your favorite text editor to edit the file, and the timestamps will remain unchanged.

Alternatively, you can use the `-d` option with `touch` to explicitly specify the timestamps that you want to use. For example, to set the last access and last modification timestamps of `myfile.txt` to the current time, you can use the following command:

```bashtouch -a -m -d "now" myfile.txt
```

In this case, `now` is a special keyword that tells `touch` to use the current time as the timestamp. You can also specify a specific date and time using the format `YYYY-MM-DD HH:MM:SS`, like this:

```bashtouch -a -m -d "2022-12-12 12:00:00" myfile.txt
```

In summary, the `touch` a command is a useful tool for editing files without changing their timestamps in Linux. You can use the `-a`, `-m`, and `-d` options to specify which timestamps you want to update and which you want to preserve. This can be useful for maintaining the integrity of your file system, or for tracking changes to files over time.

![](/assets/img/posts/Touch-1024x462.png)
