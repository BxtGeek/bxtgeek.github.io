---
title: "\"Internal error occurs during execution of upgrade process\" error while upgrading vCenter"
date: 2023-03-21 00:00:00 +0530
categories: 
  - "vcenter"
tags: 
  - "internal-error-occurs-during-execution-of-upgrade-process"
  - "upgraderunner"
  - "vcenter"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

Sometimes while upgrading the vCenter we encountered the error "Internal error occurs during execution of upgrade process" and that error will look something like the below:

![](/assets/img/posts/screely-1675215305145.png)

In order to follow this article first verify similar things. take the vCenter logs and check the below file:

```
/var/log/vmware/upgrade/requirements-upgrade-runner.log
```

In the file look for the below error, if you founding those then only proceed with this article.

```
2020-07-20T11:05:45.786Z INFO deployer.migration_env_deployer Updating extension -- com.vmware.migrate-connector.127.0.0.1
2020-07-20T11:05:45.837Z ERROR UpgradeRunner Upgrade Runner has encountered an exception
Traceback (most recent call last):
  File "/tmp/vmware-upgrade-temp-dir59Ig5fFWHm/tmp7d8uBv3e9X/UpgradeRunner.py", line 1889, in main
    envDeployer.setup(srcTargets, destTargets, isRegVcExt)
  File "/tmp/vmware-upgrade-temp-dir59Ig5fFWHm/tmp7d8uBv3e9X/py/deployer/migration_env_deployer.py", line 563, in setup
    self._setupTargets(srcTargetsToSetup, False, isRegVcExt)
```

From the above instances, we found that there is an error occurring with the upgrade runner. If we check the logs further we understand that this is due to "**com.vmware.migrate-connector.127.0.0.1**" this extension. So we need to remove that.

Now let's discuss the case of the issue. The extension "com.vmware.migrate-connector.127.0.0.1" is automatically added to the appliance during a migration/upgrade process and is supposed to disappear when the process is finished. However, it appears that it was not removed in a previous migration/upgrade, which could lead to problems during future upgrade pre-checks.

You can follow the below VMware article in order to remove that extension. If you facing any issues while performing the upgrade feel free to comment. Will be more than happy to assist you.

[https://kb.vmware.com/s/article/1025360](https://kb.vmware.com/s/article/1025360)
