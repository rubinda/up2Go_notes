---
sidebar_position: 2
sidebar_label: CLI
description: How to setup the command line
---

# CLI Setup

## macOS

### Prerequisites

I highly recommed installing [Homebrew](https://brew.sh/) first, since it makes life easier with fewer clicks:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

... installing requirements now becomes as simple as:
```shell
brew update && brew install git node openjdk@17 jq
```

:::note
If you use ZSH like me, you might have to manually update your `~/.zshrc` to include:
```shell
...
export PATH="/usr/local/opt/openjdk@17/bin:$PATH"
```
:::

### sf (previously sfdx)

Salesforce constantly updates sfdx (including major release versions - see [moving from sfdx v7 to sf v2](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)). I'd recommend [installing sf using npm](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_npm) since you can easily switch versions if you need to.

```shell
npm install @salesforce/cli --global
```

... you can verify if the install was successful with:
```shell
sf --version
```
In my case it returns `@salesforce/cli/2.8.11 darwin-x64 node-v18.14.2`

## sfdx plugins

Once you have sfdx installed you can run: 
```shell
sf plugins install @salesforce/sfdx-scanner sfdx-browserforce-plugin
```