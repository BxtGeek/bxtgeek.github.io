---
title: "First Project - How To Host A Website On AWS"
date: 2022-06-30 00:00:00 +0530
categories: 
  - "aws"
tags: 
  - "aws-lightsail"
  - "aws-web-hosting-pricing"
  - "aws-website-builder"
  - "how-much-does-it-cost-to-host-a-dynamic-website-on-aws"
  - "how-to-host-a-dynamic-website-on-aws"
  - "how-to-host-a-website-on-aws-ec2-windows"
  - "how-to-host-a-website-on-aws-for-free"
  - "web-hosting"
image:
  path: /assets/img/posts/How-to-Launch-an-Instance-and-Host-a-Website-With-AWS-EC2.png
---

So in today's article will see how we can host a website in AWS. AWS is one of the giants in the cloud market. will also discuss AWS and some important components of hosting a website on the AWS.

## Prerequisite

So here I am installing a static website. You can create one from the scratch or you can also download one from the **[tooplate](https://www.tooplate.com/free-templates)**. It is a library of free HTML websites that you can use in your project.

## What is AWS?

The full form of AWS is [**Amazon Web Services**](http://console.aws.amazon.com). It is a platform that offers flexible, reliable, scalable, easy-to-use, and, cost-effective cloud computing solutions.

AWS is a comprehensive, easy-to-use computing platform offered by Amazon. The platform is developed with a combination of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings.

<figure>

![](/assets/img/posts/screely-1656615328777-1024x584.png)

<figcaption>

What is AWS?

</figcaption>

</figure>

## What is EC2?

An Amazon EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) for running applications on the Amazon Web Services (AWS) infrastructure

<figure>

![](/assets/img/posts/screely-1656615478145-1024x554.png)

<figcaption>

What is EC2?

</figcaption>

</figure>

## Requirement gathering for Project?

For every project, Requirement gathering is one of the important parts of the project. If we know the details of the project so based on the requirement we can purchase or provision the component. For information gathering, you can capture the below details. But it also varies depending upon the situation. But it will give you a baseline for the information gathering.

- **Operating System**\- OS refer to operating system that we use in our machine-like window, Linux or mac
- **CPU and RAM** \- We also need the performance so we also need to define the ram and CPU size
- **Storage** \- We need to store the process data and for that, we need some storage
- **Project Summary** \- We also need a glance at the project so we can explain in the description and also helpful in tagging
- **Login Type** \- We also need to define the logs like whether it is a dev login or a production login

Now we have all the information about the project. Now let's see how we can crate your EC2 instances.

## Steps to lunch a EC2 instances

Now we need to launch our EC2 instances. Now see what we need to do.

### Create the keypair

Amazon AWS uses keys to encrypt and decrypt login information. At the basic level, a sender uses a public key to encrypt data, which its receiver then decrypts using another private key. These two keys, public and private, are known as a key pair. You need a key pair to be able to connect to your instances.

Now let see how you can create one.

- Login to your AWS dashboard.
- Search for the key pair and click on create key pair.
- Give the Name of the Key and Select the type and format. Here I am using the .pem format.
- I am ignoring the tag here but if you want to give the one you can add one here.
- After that click on create. It will create the keypair and one ppk file download in your system. Later on this article will see how you can use that.

<figure>

![](/assets/img/posts/screely-1656616995461-1024x610.png)

<figcaption>

Key Pair

</figcaption>

</figure>

### Create the Security Group to access the instances

An AWS security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. Both inbound and outbound rules control the flow of traffic to and traffic from your instance, respectively.

Now see how we can create one.

- From the resources, section selects the Security Groups and select create a security group.
- Give the name of the Security Groups and give some description.
- Now here you will find the two rules Inbound rules and Outbound rules. As of now will not touch the Outbound rules. Will set the Inbound rules.
- Now let's build the Inbound rules will create the two rules
    - First to access the EC2 using ssh
    - Second to access the apache port 80 from the browser

<figure>

![](/assets/img/posts/screely-1656617460875-1024x304.png)

<figcaption>

Security Group Inbound Rule

</figcaption>

</figure>

- If you want to add some tags you can add them here.
- Now click on create a security group

<figure>

![](/assets/img/posts/screely-1656617504976-1024x610.png)

<figcaption>

Security Group

</figcaption>

</figure>

### Build the EC2 instances

Now we have our keypair and Security Group ready. Now let's see how we can create one EC2 instance.

- From the resources, section selects the EC2 and select Launch Instances.
- Give a name to a instances
- Select the OS, In amazon, it is also known as Amazon Machine Image. For this example, I am selecting ubuntu.
- Now select the instances type. Here I select the t2.micro as it is a free one.
- Now select the keypair that you previously created
- Now in Network settings, Click on edit. in Firewall select the existing security group.
- Choose the one you created before.
- Set the Storage as default.
- Nothing needs to select in advance.
- Now Click on launch instance.

<figure>

![](/assets/img/posts/screely-1656617941926-1024x610.png)

<figcaption>

EC2 Instances

</figcaption>

</figure>

## How to access the EC2 instance

Now we have your machine ready now we need to connect to the machine via SSH. To connect to the machine via ssh follow the below steps.

- Open the instances page.
- Select the Instance ID and click.
- And select connect.
- Now you have the option to connect to the machine using a different method. But will connect using the SSH.

<figure>

![](/assets/img/posts/screely-1656618372482-1024x610.png)

<figcaption>

EC2 Instances Connect

</figcaption>

</figure>

- Now open the file explorer and search the folder where your keypair file is downloaded.
- Once your find the folder open the CMD there.
- And Follow the below command.

```
SSH -i "filename.pem" Username@ip_address
```

You will also find this command on the page. Now you can access the EC2 instances from our machine using the SSH.

<figure>

![](/assets/img/posts/screely-1656619037677-1024x610.png)

<figcaption>

EC2 Instances SSH

</figcaption>

</figure>

## How to install a Setup a website in EC2 instance

Now your machine is ready. Now it set up the static website in this instance.

- Login to machine using the SSH.
- And run the below commands.

```bashsudo apt update
sudo apt install apache2 wget unzip -y
wget https://www.tooplate.com/zip-templates/2016_service_box.zip
unzip 2016_service_box.zip
sudo cp -r 2016_service_box/* /var/www/html/
sudo systemctl restart apache2
```

Once you run all the above commands. It downloaded a static site from the **[tooplate](https://www.tooplate.com/view/2016-service-box)** and host in our EC2 instances. Now let's see how this website is looking in browser.

You will find the IP of the instances in the Instance summary. Just access the open that Ip from your browser and you are good to access your website.

<figure>

![](/assets/img/posts/screely-1656619862962-1024x610.png)

<figcaption>

EC2 instances website

</figcaption>

</figure>

## Conclusion

So from this article, you get a small glance at AWS. Also, you got to know how you access AWS. We also discuss some services. The upcoming lecture will discuss more about AWS. As of now you can checkout the [website](https://corpit.org/) for the more amazing content.
