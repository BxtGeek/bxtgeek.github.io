---
title: "Kubernetes Taints and Tolerations Explained"
date: 2025-11-14 00:00:00 +0530
categories: 
  - "devops"
  - "kubernetes"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-2.png
---

Kubernetes taints and tolerations help control where pods run in your cluster. Because scheduling is important, you need clear rules. In this guide, you’ll learn how they work, why they matter, and how to use them.

## What Kubernetes Taints and Tolerations Mean

[Taints and tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) work together. They let you keep some pods away from certain nodes. They also let pods “opt in” to special nodes.

A **taint** is added to a node. It tells the scheduler, “Don’t place pods here unless they can tolerate this rule.”

A **toleration** is added to a pod. It tells Kubernetes, “This pod can run on a node with this taint.”

Because of this, you can guide your workloads with simple rules instead of complex logic.

## How Taints Work in Kubernetes

A taint has three parts: a key, a value, and an effect.

**Taint Format**

```
key=value:Effect
```

**Effects You Can Use**

- **NoSchedule** — stops new pods unless they tolerate the taint.

- **PreferNoSchedule** — tries to avoid scheduling here but not guaranteed.

- **NoExecute** — evicts pods that don’t tolerate the taint and blocks new pods.

These effects give you control. For example, [NoSchedule](https://www.corpit.org/explained-kubernetes-architecture/) acts as a firm rule, while PreferNoSchedule acts like a soft suggestion.

## How Tolerations Work in Kubernetes (Includes Keyphrase)

To work with **Kubernetes taints and tolerations**, you add tolerations to your pod specs. A toleration matches a taint so the pod can run on that node.

**Example Toleration Block**

```
tolerations:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"
```

**Matching Rules**

- **Equal operator**: key and value must match.

- **Exists operator**: only the key (and effect) must match.

- If the key is empty and the operator is Exists, it matches all taints with the same effect.

Because of this flexibility, you can design simple or very specific placement rules.

## How To Add or Remove a Taint (Commands)

**Add a Taint**

```bashkubectl taint nodes node1 key1=value1:NoSchedule
```

This means node1 now has a taint. Pods without a matching toleration cannot run here.

**Remove a Taint**

```bashkubectl taint nodes node1 key1=value1:NoSchedule-
```

The dash at the end removes the taint.

## Example Pod With Toleration

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx
  tolerations:
    - key: "key1"
      operator: "Exists"
      effect: "NoSchedule"
```

This pod can run on any node that contains the key1 taint, as long as the effect is NoSchedule.

## Example: Toleration Seconds With NoExecute

```
tolerations:
  - key: "node.kubernetes.io/unreachable"
    operator: "Exists"
    effect: "NoExecute"
    tolerationSeconds: 6000
```

This rule lets the pod stay on an unreachable node for 6000 seconds before eviction.

## Common Real-World Uses for Kubernetes Taints and Tolerations

#### Dedicated Nodes

You may want some nodes for only one team or one application. You taint those nodes with something like:

```
dedicated=teamA:NoSchedule
```

Pods for teamA can run there, and other pods cannot.

#### Special Hardware Nodes

Nodes with GPUs often need protection. Tainting them keeps regular pods away, and only GPU workloads run there.

#### Node Health and Evictions

When nodes face issues like memory pressure or disk pressure, Kubernetes adds taints automatically. Pods without tolerations may be moved to safer nodes.

## How Kubernetes Handles Scheduling and Eviction

- During scheduling, the scheduler checks the node’s taints.

- If a pod tolerates all taints, it can run there.

- If even one NoSchedule taint is not tolerated, the pod is kept away.

- For NoExecute, the pod may even get evicted.

- For PreferNoSchedule, Kubernetes tries to avoid the node but may still use it.

Because of this behavior, you gain predictable and stable scheduling across your cluster.

## FAQ Section for Kubernetes taints and tolerations

**What are Kubernetes taints used for?**

They help control pod placement by keeping unwanted pods off certain nodes.

**Do tolerations force a pod onto a node?**

No. They only allow placement, not enforce it.

**What happens if a pod does not tolerate a NoSchedule taint?**

Kubernetes will not schedule it on that node.

**What does NoExecute mean?**

It blocks new pods and evicts existing pods without matching tolerations.

**Can I taint master nodes?**

Yes. In fact, Kubernetes usually taints them by default.

**Do taints replace node selectors?**

No. They work together but solve different problems.

## Conclusion

_Kubernetes taints and tolerations_ give you simple, powerful control over pod placement. They help you protect nodes, direct workloads, and keep your system stable. When you understand how taints and tolerations work together, you can design clean and reliable scheduling rules for any cluster.
