---
sidebar_position: 4
sidebar_label: SF
description: How to setup the Salesforce DX tool
---

# Salesforce DX

:::caution
Salesforce constantly updates the tool and might deprecate some commands used in our internal scripts. Updating could cause you unexpected issues. 
:::

Currently I'm running `@salesforce/cli/2.24.4 darwin-x64 node-v20.11.0`.

### Authorizing an ORG

You could use passwords and security tokens and let WebStorm handle connections. But using `sf` is simpler. To add a connection to an org use:
```bash
sf org login web -a <alias> 
```
... which will open a browser window and you can login using the appropriate username / password. WebStorm will synchronize connections with the `sf` tool.
:::tip
`sf` supports the `--help` flag. Append it to any command to learn what it does.
:::

### Adding default Dev Hub

Each developer works on his own [scratch orgs](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm). If you're unfamiliar with them, visit [trailhead](https://trailhead.salesforce.com/content/learn/modules/sfdx_app_dev/sfdx_app_dev_setup_dx).

Run the web login flow (**use the exact same alias because internal scripts depend on it**):
```bash
sf org login web --set-default-dev-hub --alias UP2GO-PRODUCTION
```
... and login with your _@up2go.com_ account. You should be able to see the connection in the terminal:
```
$ sf org list
Non-scratch orgs
=====================================================================================================
|     ALIAS                        USERNAME                       ORG ID             CONNECTED STATUS
| ─── ──────────────────────────── ────────────────────────────── ────────────────── ────────────────
| (D) UP2GO-PRODUCTION             <username>@up2go.com           00D50000000XXXXXXX Connected
```

:::note
If you forgot the `-d` or `--set-default-dev-hub` option and now the (D) is missing, run:
```bash
sf config set --global target-dev-hub=<username>@up2go.com
```
:::

You should be now ready to run the internal script that lets you create scratch orgs.

:::tip
If you're using a shell environment, you can create a shortcut to our org:
```bash
alias up2go="sf org open -o <username>@up2go.com"
```
This adds a command called `up2go` that opens our org. To have it persisted, add it to you `~/.bashrc` or `~/.zshrc` file.
:::