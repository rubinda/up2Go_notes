---
sidebar_label: Requirements
sidebar_position: 0
description: List of applications, tools, extensions, plugins.
---

# Requirements

The goto toolset for 2Team and CPRM development is Webstorm (licensed) + IC2 (licensed). For developing the newer share package we use a devcontainer with VS Code.

### Applications
- [WebStorm](https://www.jetbrains.com/webstorm/) _the enterprise solution (in combination with a paid plugin) for writing Salesforce code_
- [VS Code](https://code.visualstudio.com) _(alternative, needed for decvcontainers) a more lightweight editor_
- [Salesforce inspector reloaded](https://github.com/tprouvot/Salesforce-Inspector-reloaded) plugin for [Chromium](https://chromewebstore.google.com/detail/salesforce-inspector-relo/hpijlohoihegkfehhibggnkbjhoemldh?pli=1) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/salesforce-inspector-reloaded/) - _makes life easier to inspect or modify data on an org_

### Command line tools
- [git](https://git-scm.com/) - _to manage collaborative coding_
- [NodeJS](https://nodejs.org/en/) - _sf requirement_
- [Java](https://www.oracle.com/java/technologies/downloads/) - _requirement for `sfdx-scanner` plugin. You need the runtime only_
- [jq](https://stedolan.github.io/jq/) - _internal scripts use it for parsing command output_
- [sf](https://developer.salesforce.com/tools/sfdxcli) - _official Salesforce CLI tool_
- [sfdx-browserforce-plugin](https://github.com/amtrack/sfdx-browserforce-plugin) - _used in internal scripts for configuring scratch orgs_
- [sfdx-scanner](https://forcedotcom.github.io/sfdx-scanner/) -  _lints Apex code in a husky pre-commit hook_

### Nice to haves (optional)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - in case you wish to use devcontainer + VSCode
- [iTerm](https://iterm2.com/) - (macOS) _the tmux and tab support should be reason enough to use it_
- [Homebrew](https://brew.sh/) - (macOS) _the missing package manager for macOS_
- [oh my zsh](https://ohmyz.sh/) - _because it makes the command line much more pleasant_
