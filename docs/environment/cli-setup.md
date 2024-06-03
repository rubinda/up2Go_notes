---
sidebar_position: 2
sidebar_label: CLI
description: How to setup the command line
---

# CLI Setup

## macOS

Follow these steps if you do not wish to use devcontainers with VS Code.

### Prerequisites

I highly recommed installing [Homebrew](https://brew.sh/) first, since it makes life easier with fewer clicks:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

... installing requirements now becomes as simple as:
```shell
brew update && brew install git node@20 openjdk@17 jq
```

:::note
Make sure to follow any additional steps that are required when installing these packages (e.g. manually adding them to your PATH) or you might get a "command not found" error. If you read the output of `brew install` it should inform you if any additional actions are required.
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

## sf plugins

Once you have sf installed you can run: 
```shell
sf plugins install @salesforce/sfdx-scanner sfdx-browserforce-plugin
```