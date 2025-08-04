---
title: Network
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 14
---

# Network Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note-title }
> Required Include
> 
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/network'
> ```

## IP Address

### Get External IP

Get the users external IP address.

```
enum IPTypes {
    'IPv4',
    'IPv6',
}

getExternalIP(IPTypes ?type = "IPv4"): text
```

---

### Get Local IP

Get the users local IP address.

```
enum IPTypes {
    'IPv4',
    'IPv6',
}

getLocalIP(IPTypes ?type = "IPv4"): text
```

---

### Is Online

Determine if the user is online. Alias for get Get External IP.

```
isOnline()
```

## Server

### Connect to Server

Connect to file server at `url`.

```
connectToServer(text url)
```

---

### Run SSH Script

Run an SSH script using connection details.

```
enum SSHScriptAuthType {
    'Password',
    'SSH Key',
}

runSSHScript(text script, variable input, text host, text port, text user, SSHScriptAuthType authType, text password)
```

## Wireless

### Get Cellular Detail

Get a detail of the current Cellular network.

```
enum cellularDetail {
    'Carrier Name',
    'Radio Technology',
    'Country Code',
    'Is Roaming Abroad',
    'Number of Signal Bars',
}

getCellularDetail(cellularDetail detail)
```

---

### Get WiFi Detail

Get a detail of the current WiFi network.

```
enum wifiDetail {
    'Network Name',
    'BSSID',
    'Wi-Fi Standard',
    'RX Rate',
    'TX Rate',
    'RSSI',
    'Noise',
    'Channel Number',
    'Hardware MAC Address',
}

getWifiDetail(wifiDetail detail)
```
