---
title: "How to Fix the SSH \"Permission Denied\" Error"
date: 2022-11-12 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "how-to-ssh-into-a-server-using-terminal"
  - "ssh-connection-refused"
  - "ssh-connection-refused-port-22-windows"
  - "ssh-connection-refused-ubuntu"
  - "ssh-connection-timed-out"
  - "ssh-connect-to-host-port-22-connection-refused"
  - "ssh-connect-to-host-port-22-connection-refused-linux"
  - "ssh-connect-to-host-port-22-connection-refused-windows-10"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

SSH is one of the most common methods of connecting to the host. The default root user is usually used to log on to the server when we deploy it. When we tried that we encountered the message that you don't have permission. We will see in this article how to fix this error quickly.

<figure>

![](/assets/img/posts/screenshot-1-1024x328.png)

<figcaption>

SSH Error

</figcaption>

</figure>

## Why have we encountered this error?

SSH access for the root user is disabled by default.d. To enable that you need to change the [SSH\_config](https://en.wikipedia.org/wiki/Secure_Shell) file. Why is this option disabled? This option is disabled by default. So that any intruder doesn't get root access to the server.

## Prerequisite to fix the SSH "Permission Denied" Error

- The physical connection to the server.

- Bit experience in the [Linux](https://corpit.org/category/linux/) terminal

- Notepad of your choice, Here will use the nano. You can also go with the Vi editor.

- And most of all patience

## How to Fix the SSH "Permission Denied" Error

- Login to the machine physically.

- Use the below command to edit the SSH config file.

```bashsudo nano  /etc/ssh/sshd_config
```

- Open that file and locate the line "PermitRootLogin" by default this line is commented and access status is prohibited.

<figure>

![](/assets/img/posts/screenshot-2.png)

<figcaption>

PermitRootLogin Status

</figcaption>

</figure>

- Remove the # symbol and change the status to yes and save the file.

<figure>

![](/assets/img/posts/screenshot-3.png)

<figcaption>

PermitRootLogin status after change

</figcaption>

</figure>

- Restart the ssh service using the below command and check the service status using the below command.

```bashsystemctl restart ssh
systemctl Status ssh
```

- After that workaround, Try to login into the server using [SSH](https://en.wikipedia.org/wiki/Secure_Shell) and Voilla as you have access.

<figure>

![](/assets/img/posts/screenshot-4.png)

<figcaption>

Host login status

</figcaption>

</figure>

## Conclusion

You can follow the article for the error. If you encounter any error please let us know in the command will be more than happy to assist you with that.
