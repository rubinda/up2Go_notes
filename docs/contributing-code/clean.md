---
sidebar_label: Clean repository
sidebay_position: 3
description: Contributing to the submodule
---

# Clean repository

It contains custom implementations that are meant to be used in other repositories. Hence it is present as a git submodule. 

## How we update it

Create a new branch in the project subdirectory for the clean repository. Implement changes and commit them from the clean subdirectory - this way you are commiting to the branch on clean. In VS Code you can see these changes in the Git panel, the red ones represent the parent repository,
the orange ones will be made to the clean repository. 

<img
src={require('./img/vscode_on_clean.png').default}
alt="VS Code working with clean"
width="600px"
/>

:::caution
If you are using a single project for all your work, you have just changed your local up2go-clean version for all parent branches! Beware when switching parent branches!
:::

For the PR on the parent repository, commit the hash of your branch of the PR version of clean. Once the clean PR is completed, merge to main and update the parent clean reference again to the newest up2go-clean main.