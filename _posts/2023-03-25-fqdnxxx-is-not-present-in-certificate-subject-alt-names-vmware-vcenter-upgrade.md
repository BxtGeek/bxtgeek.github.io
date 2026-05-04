---
title: "\"FQDN:xxx is not present in certificate subject alt names\" vmware vcenter upgrade"
date: 2023-03-25 00:00:00 +0530
categories: 
  - "vcenter"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

You will encounter this issue while upgrading your vCenter at stage 2. This error will look similar to the below:

<figure>

![](/assets/img/posts/screely-1675303000813.png)

<figcaption>

FQDN:xxx is not present in certificate subject alt names

</figcaption>

</figure>

This can be due to the following reasons:

- The Common Name (CN) is equivalent to the Personal Name Identifier (PNID).

- Certificates can have multiple Domain Name System (DNS) entries in the Subject Alternative Name (SAN).

- The workflow checks for a match with the PNID against the CN first. If it fails, it checks against the DNS entries.

## Workaround#1

Follow the below command and reset all the certificates:

```
/usr/lib/vmware-vmca/bin/certificate-manager
```

This will clear the certificate and you will able to proceed with the upgrade.

## Workaround#2

But sometime the above method will not work. Then you need to run the ls doctor script. You can download the script from the below link:

[https://kb.vmware.com/s/article/80469](https://kb.vmware.com/s/article/80469)

Once ls doctor is downloaded. Move the zip to the vCenter using WinSCP into temp dir. Log in to vCenter using SSH and enter the below commands

```bashcd /tmp
unzip lsdoctor.zip
cd lsdoctor-master
python lsdoctor.py -l
python lsdoctor.py -t
service-control --stop --all
service-control --start --all
```

The above command will perform the following actions:

- Navigate to the tmp directory.

- Unzip the lsdoctor zip file.

- Go to the lsdoctor-master directory with the "cd lsdoctor-master" command.

- Use the "-l" option to list potential issues.

- Run the "-s" and "-t" options one after another for stalefix and trustfix.

- Restart the vCenter service using the provided commands.

- Attempt to upgrade vCenter.

If you need any assistance, please don't hesitate to ask in the comments section. We will be happy to help you further.
