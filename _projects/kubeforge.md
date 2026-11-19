---
title: KubeForge
description: >-
  A web platform that creates temporary, isolated Kubernetes practice labs
  for CKA exam preparation, with student and admin dashboards.
status: active
repo: https://github.com/BxtGeek/KubeForge
featured: true
tags:
  - kubernetes
  - cka
  - fastapi
  - react
  - vibe-coded
---

Students sign up, spin up a private CKA practice lab on a K3s cluster, download a
kubeconfig and practice with `kubectl`. Labs expire automatically and can be reset.

- Student side: register and log in, create labs, download the kubeconfig, reset a lab and see the time left
- Admin side: manage users, add K3s clusters and test their health, extend, reset or delete labs, and view audit logs
- Safe by design: restricted ServiceAccounts (never cluster-admin), one namespace per lab with
  ResourceQuotas, LimitRanges and NetworkPolicies
- Cluster credentials are encrypted at rest (AES-256-GCM), passwords are hashed with bcrypt
- React, TypeScript and Vite on the front end, FastAPI and PostgreSQL on the back end,
  with Docker Compose for local runs and Kubernetes manifests for deployment

*Vibe coded: built mostly with AI assistance.*
