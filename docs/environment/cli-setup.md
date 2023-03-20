---
sidebar_position: 2
sidebar_label: CLI
description: How to setup the command line
---

# CLI Setup

## macOS

### Using Homebrew
I highly recommed installing [Homebrew](https://brew.sh/) first, since it makes life easier with fewer clicks:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

... installing requirements now becomes as simple as:
```shell
brew update && brew install git node openjdk@17 jq && brew install --cask sfdx
```

:::note
If you use ZSH like me, you might have to manually update your `~/.zshrc` to include:
```shell
...
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
```
:::

## sfdx plugins

Once you have sfdx installed you can run: 
```shell
sfdx plugins install @salesforce/sfdx-scanner sfdx-browserforce-plugin
```