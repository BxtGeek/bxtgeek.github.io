---
layout: page
title: About
permalink: /about/
---

## Hello readers 👋

We're a group of IT professionals from different parts of India, from diverse
educational and career backgrounds. What unites us is a commitment to delivering
high-quality tutorials and insights for our readers.

Our content focuses on:

- Storage
- Virtualization
- DevOps
- Cloud
- Core IT concepts

The goal is simple: help learners and professionals deepen their technical
knowledge with practical, real-world insights.

---

## 👨‍💻 The authors

{% for pair in site.data.authors %}
{% assign slug = pair[0] %}
{% assign author = pair[1] %}
- **[{{ author.name }}]({{ slug | prepend: '/about/author/' | append: '/' | relative_url }})** — {{ author.role }}. {{ author.bio | strip_newlines | truncate: 160 }}
{% endfor %}

---

## What you'll find here

- Hands-on labs
- Real-world troubleshooting
- Concept breakdowns
- Step-by-step guides

---

## Get in touch

Questions, suggestions, or a collaboration idea? Reach out via the social links
in the footer, or drop an email — we read every message.

_© CorpIT — learning never stops._
