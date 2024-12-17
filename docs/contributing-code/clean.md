---
sidebar_label: Clean repository
sidebay_position: 3
description: Contributing to the submodule
---

# Clean repository


:::note
"Clean" is only being used in 2Team and CPRM.
:::

It contains custom implementations of generic functions that are meant to be used in other repositories. I do not like it and I try to avoid working on it, but it is already heavily used as a submodule.

## How we update it

I prefer working on it as described in the next paragraph, but you can also clone the project in it's separate directory and update the submodule in 2Team or CPRM to your branch as needed for testing.

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