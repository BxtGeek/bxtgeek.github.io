---
title: "Beginner Guide: How to Troubleshoot a network issue"
date: 2022-03-28 00:00:00 +0530
categories: 
  - "network-concept"
tags: 
  - "firewall"
  - "networking"
  - "ping"
  - "traceroute"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

So there are lots of ways to address a networking issue and there are lots of reasons for the occurrence of that. This article will see how we can address a network issue at a beginner level. To perform this we need to have a basic understanding of networking.

First, let's consider some situations, there is one server that we are unable to connect to that server. So you get a request to troubleshoot the issue. So the first thing that you need to do is to gather proper and relevant information. Like:

- From when you are facing issues?
- Is there onsite activity happening?
- Are there any changes in the network?
- How many users are impacted (This is just to understand the intensity of the impact)?

Once you have all the above details you can troubleshoot the issue and will list down the few commands using which you can start troubleshooting the issue.

## Ping

![](/assets/img/posts/screely-1648440117608-1024x637.png)

Ping command will help you order to understand whether the host or server is reachable or not. you need to run the below command to test that.

```
ping <HostName>
```

In the window the default count is 4 but in linux, there is no default count and it will run till the time you forcefully stopped that. Sometime there is some issue in the DNS part for that you can run the command ping <Hostname> and after that you can run the command <Ping Host IP>. Using this you can understand is there any issue with the DNS or not and accordingly you can troubleshoot.

## Nslookup

![](/assets/img/posts/image-1024x578.png)

Sometimes you are not aware of the underlying IP of a domain at that time you can use the command nslookup. This command will help you for querying the Domain Name System (DNS) to obtain the mapping between a domain name and IP address or other DNS records. You can run this command using below:

```
nslookup <Hostname>
```

There are lots of other option in the nslookup that you can use in order to know much more about the hostname.

## Traceroute

![](/assets/img/posts/image-1-1024x580.png)

This is one of the important command in the networking. People use this command in order to understand the how packet is traveling from host to the target. with this command you can easily understand weather you packet is reaching to the destination or not. If you packet is unable to reach to the destination than there is some issue with the switch and that you can easily understand with this command. You can run the below command in order to use this.

```
traceroute <Hostname>
```

In window you can run the below command in order to know the name output:

```
tracert <Hostname>
```

Using this command you can also identify the slowness of the network and you can also address the network performance issue in network.

## Firewall

![](/assets/img/posts/image-2-1024x583.png)

There are lots of time happen due to the firewall rule you are unable to connect so you need to make sure you firewall rules are set properly. In order to check the firewall rule in the linux you can run the below command:

```
iptables -L -n -v
```

For window you can check the below detailed article by the microsoft in order to check and learn about it:

> https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule

## Conclusion

After Reading this article, I hope you understand how to troubleshoot a network issue in environment. Checkout our other **[article](https://corpit.org/)** for more such information.
