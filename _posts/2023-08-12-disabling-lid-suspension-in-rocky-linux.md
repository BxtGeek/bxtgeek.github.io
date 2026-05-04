---
title: "Disabling Lid Suspension in Rocky Linux"
date: 2023-08-12 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "disabling"
  - "lid-suspension"
  - "linux-tips"
  - "power-management"
  - "rocky-linux"
  - "system-administration"
image:
  path: /assets/img/posts/Disabling-Lid-Suspension-in-Rocky-Linux.png
---

Rocky Linux, a popular Linux distribution, offers a robust and secure operating system for various use cases. However, some users may encounter inconvenience when their system suspends or goes to sleep upon closing the laptop lid. This behavior can be disruptive, especially for those who need continuous access to their systems. Fortunately, this issue can be easily addressed by disabling lid suspension through a few simple steps.

In this article, we will guide you through the process of disabling lid suspension in Rocky Linux, allowing you to keep your system awake and accessible even when the laptop lid is closed.

## Step 1: Access the logind.conf file

To begin, we need to edit the systemd-logind configuration file, which governs various power management settings, including lid behavior. The "logind.conf" file is located in the "/etc/systemd/" directory. We will use the "nano" text editor to make the necessary changes.

Open a terminal and execute the following command:

```bashsudo nano /etc/systemd/logind.conf
```

This command will open the "logind.conf" file in the nano text editor, enabling you to make modifications.

## Step 2: Disabling Lid Suspension

Within the "logind.conf" file, you'll find various configuration options related to power management. Look for the line that controls lid behavior, which should resemble the following:

```
#HandleLidSwitch=suspend
```

The line is likely to have a "#" at the beginning, indicating that it is currently commented out. The default behavior is set to "suspend," which means the system will suspend when the laptop lid is closed.

To disable lid suspension, remove the "#" at the beginning of the line and change the value from "suspend" to "ignore." The modified line should look like this:

```
HandleLidSwitch=ignore
```

## Step 3: Save and Exit

After making the necessary changes, save the file by pressing "Ctrl + O" (the letter 'O'), and then press "Enter" to confirm the filename. To exit the nano text editor, press "Ctrl + X."

## Step 4: Restart systemd-logind service

To apply the changes and make them effective, we need to restart the systemd-logind service. This will reload the updated configuration from the "logind.conf" file.

Execute the following command in the terminal:

```bashsudo systemctl restart systemd-logind
```

## Conclusion

Disabling lid suspension in Rocky Linux is a straightforward process that involves modifying the "logind.conf" file. By changing the "HandleLidSwitch" value to "ignore," you can prevent your system from suspending when you close the laptop lid. This adjustment ensures continuous access to your applications and data, providing a more convenient and uninterrupted user experience.

If you encounter any issues or need further assistance with the steps described in this article, feel free to reach out to me on Twitter [@BxtGeek](https://twitter.com/bxtgeek). I'd be happy to help you with any queries you may have.

Additionally, I recommend checking out the AI tool by [Corpit VMassist](https://corpit.org/vmassist/), a powerful virtual assistant designed to streamline various tasks and enhance productivity. Happy computing!
