---
title: "Debloating Brave Browser on macOS and Linux Using Policies"
date: 2026-03-26 00:00:00 +0530
categories: 
  - "mac-apps"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

Brave Browser is widely known for its privacy-focused features. However, it still includes components such as Rewards, Wallet, AI chat, VPN, and other services that may not be necessary for all users.

If your goal is to create a minimal, distraction-free browsing experience, you can disable these features using enterprise policies on macOS.

This guide explains how to configure Brave into a lean, privacy-oriented browser.

## Why Debloat Brave

Even though Brave emphasizes privacy, there are valid reasons to reduce its feature set:

- Lower background resource usage
- Improve startup performance
- Reduce interface clutter
- Minimize telemetry
- Achieve a minimal Chromium-like experience

## Using macOS Policy Configuration

Brave supports managed policies on macOS through a configuration file.

**Policy File Location**

```bash
/Library/Managed Preferences/com.brave.Browser.plist
```

**Step 1: Create the Policy File**

Run the following command:

```bash
sudo nano /Library/Managed\ Preferences/com.brave.Browser.plist
```

**Step 2: Add Debloat Configuration**

Below is the equivalent macOS plist configuration based on your JSON:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
"http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>

    <key>BraveAIChatEnabled</key>
    <false/>
    <key>BraveRewardsDisabled</key>
    <true/>
    <key>BraveWalletDisabled</key>
    <true/>
    <key>BraveVPNDisabled</key>
    <true/>
    <key>TorDisabled</key>
    <true/>
    <key>BraveP3AEnabled</key>
    <false/>
    <key>BraveStatsPingEnabled</key>
    <false/>
    <key>BraveWebDiscoveryEnabled</key>
    <false/>
    <key>BraveNewsDisabled</key>
    <true/>
    <key>BraveTalkDisabled</key>
    <true/>
    <key>BraveSpeedreaderEnabled</key>
    <false/>
    <key>BraveWaybackMachineEnabled</key>
    <false/>
    <key>BravePlaylistEnabled</key>
    <false/>

    <key>SyncDisabled</key>
    <false/>
    <key>PasswordManagerEnabled</key>
    <false/>
    <key>AutofillAddressEnabled</key>
    <false/>
    <key>AutofillCreditCardEnabled</key>
    <false/>
    <key>TranslateEnabled</key>
    <false/>

    <key>DnsOverHttpsMode</key>
    <string>secure</string>
    <key>DnsOverHttpsTemplates</key>
    <string>https://dns.adguard-dns.com/dns-query</string>

</dict>
</plist>
```

**Step 3: Apply Changes**

Restart Brave completely:

```bash
killall "Brave Browser"
open -a "Brave Browser"
```

**Step 4: Verify Policies**

Open the following URL in Brave:

```
brave://policy
```

You should see all configured policies listed and active.

## Using Linux Policy Configuration

### Policy File Location

```bash
/etc/brave/policies/managed/
```

Create it if needed:

```bash
sudo mkdir -p /etc/brave/policies/managed
```

### Step 1: Create Policy File

```bash
sudo nano /etc/brave/policies/managed/policies.json
```

### Step 2: Add Debloat Configuration (JSON)

```json
{
  "BraveAIChatEnabled": false,
  "BraveRewardsDisabled": true,
  "BraveWalletDisabled": true,
  "BraveVPNDisabled": true,
  "TorDisabled": true,
  "BraveP3AEnabled": false,
  "BraveStatsPingEnabled": false,
  "BraveWebDiscoveryEnabled": false,
  "BraveNewsDisabled": true,
  "BraveTalkDisabled": true,
  "BraveSpeedreaderEnabled": false,
  "BraveWaybackMachineEnabled": false,
  "BravePlaylistEnabled": false,
  "PasswordManagerEnabled": false,
  "AutofillAddressEnabled": false,
  "AutofillCreditCardEnabled": false,
  "TranslateEnabled": false,
  "HardwareAccelerationModeEnabled": true,
  "BrowserSignin": 0,
  "BackgroundModeEnabled": false,
  "SafeBrowsingExtendedReportingEnabled": false,
  "HttpsOnlyMode": "force_enabled",
  "MetricsReportingEnabled": false,
  "DnsOverHttpsMode": "secure",
  "DnsOverHttpsTemplates": "https://dns.adguard-dns.com/dns-query"
}
```

### Step 3: Apply Changes

```bash
pkill brave-browser
```

### Verify Policies (Both Platforms)

Open in Brave:

```
brave://policy
```

You should see all configured policies listed and active.

## What Each Setting Does

- Rewards, Wallet, VPN, and Tor are disabled to remove additional services not required for standard browsing
- Telemetry features such as P3A and StatsPing are disabled to reduce data collection
- AI chat is disabled to remove built-in assistant functionality
- News, Talk, and Playlist features are disabled to reduce interface clutter
- Autofill and password manager are disabled for users relying on external tools
- DNS over HTTPS is enabled using AdGuard to improve privacy and block trackers at the network level

## Things to Keep in Mind

- Some interface elements may still be visible but non-functional
- Policies persist across browser updates
- Managed policies override user-configured settings

## Optional Enhancements

You can further optimize your setup with:

Disable background mode:

```bash
defaults write com.brave.Browser BackgroundModeEnabled -bool false
```

Additional options include using a hosts file for blocking or installing a content blocker extension if needed.

## Final Thoughts

With this configuration, Brave Browser becomes a lightweight, privacy-focused browser with minimal distractions.

It offers a streamlined experience similar to a hardened Chromium setup while retaining ease of use and maintainability.