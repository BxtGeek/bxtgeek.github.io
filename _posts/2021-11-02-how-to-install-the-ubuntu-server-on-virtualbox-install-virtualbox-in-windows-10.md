---
title: "How to install the ubuntu server on VirtualBox | Install VirtualBox in windows 10"
date: 2021-11-02 00:00:00 +0530
categories: 
  - "linux"
tags: 
  - "install-the-ubuntu-server"
  - "install-the-ubuntu-server-on-virtualbox"
  - "install-virtualbox-in-windows-10"
  - "ubuntu-server"
  - "ubuntu-server-on-virtualbox"
  - "ubuntu-server-windows-10"
  - "virtualbox"
  - "virtualbox-in-windows-10"
image:
  path: /assets/img/posts/What-is-NAS-and-SAN-4.png
---

This is a very simple article where we see how we can install the ubuntu server in the virtual box. so in order to proceed we need to download the two files from the below links:

**Ubuntu server** - [https://ubuntu.com/download/server](https://ubuntu.com/download/server)

**Virtualbox** - [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

- Once we the both files download we install the **Virtualbox**  in our windows machine. Once it download it will looks something like this, but in left hand side conner it will blank for you as there is no machine is add in your virtualbox.

![](/assets/img/posts/screely-1635137038213.png)

- Now you need to click on new and it will open a dialog box like below and then you need to enter the details of your machine like below

![](/assets/img/posts/screely-1635137147756.png)

- once you enter the above details you need to click next and there it will ask you to choose the ram for your machine. if you have  8gb of ram then you can allocate the 2 gb ram to ubuntu server

![](/assets/img/posts/screely-1635137265109.png)

- Now its time to select the hard drive and will go for the default option that is "create a virtual hard disk now"

![](/assets/img/posts/screely-1635137341340.png)

- Now it is asking for select the type of the drive that you want to create will go for the default option. But in virtual box we have 3 types of drives types and that are as follow VDI (Virtual box disk image), VHD(Virtual hard disk) and VMDK (Virtual machine disk).

![](/assets/img/posts/screely-1635137521085.png)

- Now it will ask how that drive will grow. Like there are two option dynamic allocated and fixed size. In dynamic allocated it will show the 20 Gb and if that system need 10 GB then only that much space will use but if you select the Fixed size then it will fixed that space and you wont use that space. This is same as storage provisioning that we use in the enterprise storage and here will go with the default option.

![](/assets/img/posts/screely-1635137837244.png)

- Once you select the drive type you will get an option for the drive size. Like what is the space that you want to allocate to the ubuntu server and  here will select the 20 GB and that is enough for our ubuntu server.

![](/assets/img/posts/screely-1635137954639.png)

- Now your machine is created now you need to install the ubuntu server in that machine, now let see how we can install that and now the machine will look like below

![](/assets/img/posts/screely-1635138056363.png)

- Now we click on start and below window will come and from there we need to select the image file that we previously installed and you need to click on select file in order to select the image file.

![](/assets/img/posts/screely-1635138247057.png)

- Now click on the add file and select the image file and it will start the installation of ubuntu server in the virtual box.

![](/assets/img/posts/screely-1635138293625.png)

 

- Now it will ask for the language and select the language for your choice

![](/assets/img/posts/screely-1635138481482.png)

- After that it will ask for the keyboard layout select the one that is suitable for you

![](/assets/img/posts/screely-1635138514309.png)

- Now it ask you select the connection that you want to connect for internet it will take a DHCP ip

![](/assets/img/posts/screely-1635138556620.png)

- Now it will ask for the proxy level it blank
- Now it will ask for archive for mirror select for the default it will be the best as per your location
- Now it will ask for the hard drive that your previously created don't select for the LVM group

![](/assets/img/posts/screely-1635138722114.png)

- Now it will show your storage configuration select done and continue.

![](/assets/img/posts/screely-1635138788125.png)

- Now you need to select name of the machine user name and the password.

![](/assets/img/posts/screely-1635138852348.png)

- It will ask to install the ssh in your machine in that time if you need one then you can install it just need to select. using the ssh you can access your machine using cmd.

![](/assets/img/posts/screely-1635138971111.png)

- Now it will ask for the software if you want to install any just skip for now.

![](/assets/img/posts/screely-1635139019823.png)

- Now the installation will start

![](/assets/img/posts/screely-1635139058741.png)

- once done it will reboot and the below console will open and you need to enter the details that you entered prior while installing.

![](/assets/img/posts/screely-1635139315995.png)

and that's how you can install the ubuntu server in the virtual box. if you have some doubt and getting any error please let me know in the comment section will help you on that.
