---
title: "Switching from Brave to Orion Browser: My Experience as a System Reliability Engineer"
date: 2025-03-19 00:00:00 +0530
categories: 
  - "comparisons"
tags: 
  - "bitwarden"
  - "brave-browser"
  - "browser-comparison"
  - "browser-experience"
  - "kagi"
  - "ms-teams-issues"
  - "orion-browser"
  - "password-manager"
  - "productivity-tools"
  - "system-reliability-engineer"
  - "tech-review"
  - "web-browser-limitations"
  - "webkit-vs-chromium"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

I’ve been a loyal Brave browser user since late 2019, and I genuinely love it. Over the years, I’ve occasionally tried switching to other browsers, but I always end up returning to Brave. Being Chromium-based, it feels familiar and comfortable — no need to relearn anything. Recently, I heard about the **[Orion Browser by Kagi](https://kagi.com/orion/)** and it piqued my interest. It sounded like something worth exploring, so I thought, why not give it a try and see how it compares?

Since I use Brave both on my **personal laptop** and my **work laptop**, I decided to install Orion on both to keep things consistent. The first major difference I noticed was that Orion is **WebKit-based** instead of Chromium. This instantly made it feel like I was reinventing the wheel, and the transition wasn't as seamless as I had hoped.

### The First Hurdle: Password Autofill

I rely heavily on **Bitwarden** as my password manager, which makes life a lot easier. However, I ran into a strange issue with Orion. While password autofill worked fine on my work laptop, it refused to function on my personal one. I meticulously went through all the settings, but nothing seemed to fix it. This was a frustrating experience and marked the first obstacle in my attempt to switch to Orion.

### The Drag-and-Drop Dilemma

The next issue wasn’t as trivial for me. As a **System Reliability Engineer**, I often need to **reproduce customer issues** in a lab environment. Part of this process involves booking lab clusters through an internal system that uses a **drag-and-drop** interface. Unfortunately, Orion’s **WebKit** engine doesn’t support certain drag-and-drop elements. After consulting a colleague, I confirmed this limitation. For someone like me, who regularly books labs several times a week, this quickly became a dealbreaker.

### Zoom Control Limitations

Another minor inconvenience I faced was with **zoom control**. On Brave, I usually set my browser zoom to **80%** and adjust it further when needed. Orion, however, offers **fixed zoom options** with no fine-grained control. While this may not bother the average user, I like having flexibility in my viewing experience, and this lack of customization was disappointing.

### The Audio Issue with MS Teams

Perhaps the most frustrating problem was with **audio connectivity** during **MS Teams** calls. While my organization primarily uses Zoom for meetings, some clients require Teams, and for security reasons, they don’t allow the zoom app. This means I have to join through the browser. On Orion, every time I attempted to connect, the **audio failed**. After three to four retries, it would sometimes work, but even then, the experience was unreliable. For someone who needs to troubleshoot real-time issues with customers, this was unacceptable.

### Final Thoughts

While I appreciate the fresh perspective Orion brings, its current limitations make it hard for me to commit to it as my primary browser. Brave continues to serve my needs with its reliability and familiar Chromium base. That said, I’ll keep an eye on Orion’s updates — it has potential, and I’d be happy to revisit it if these issues are addressed in the future. For now, Brave remains my browser of choice.
