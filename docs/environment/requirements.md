---
sidebar_label: Requirements
sidebar_position: 0
description: List of applications, tools, extensions, plugins.
---

# Requirements

### Applications
- [WebStorm](https://www.jetbrains.com/webstorm/) _(recommended) for writing code_
- [VS Code](https://code.visualstudio.com) _(optional) FOSS, but more for a power user that doesn't like clicking buttons_
- Salesforce inspector plugin for [Chromium](https://chrome.google.com/webstore/detail/salesforce-inspector/aodjmnfhjibkcdimpodiifdjnnncaafh?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/salesforce-inspector/) - _makes life easier to inspect or modify data on an org_

### Command line tools
- [git](https://git-scm.com/) - _to manage collaborative coding_
- [NodeJS](https://nodejs.org/en/) - _sfdx requirement_
- [Java](https://www.oracle.com/java/technologies/downloads/) - _requirement for `sfdx-scanner` plugin. You need the runtime only_
- [jq](https://stedolan.github.io/jq/) - _internal scripts maybe? (no idea atm)_
- [sfdx](https://developer.salesforce.com/tools/sfdxcli) - _official Salesforce CLI tool_
- [sfdx-browserforce-plugin](https://github.com/amtrack/sfdx-browserforce-plugin) - _used in internal scripts for configuring scratch orgs_
- [sfdx-scanner](https://forcedotcom.github.io/sfdx-scanner/) -  _lints Apex code in a husky pre-commit hook_

### Nice to haves (optional)
- [iTerm](https://iterm2.com/) - (macOS) _the tmux and tab support should be reason enough to use it_
- [Homebrew](https://brew.sh/) - (macOS) _the missing package manager for macOS_
- [oh my zsh](https://ohmyz.sh/) - _because it makes the command line much more pleasant_
