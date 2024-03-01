---
sidebar_label: User stories
sidebar_position: 2
description: How to complete a user story
---

# Github Projects

We use the issue board of Github to track progress and delegate work among the team. Previously we had a custom sprint board in our org, but we are phasing it out.

<img
src={require('./img/projects_board.png').default}
alt="Example view of the Core project"
width="600px"
/>

## Quick overview

- You can choose to work on **any issue** that is listed under the _Pickable_ column. You can freely choose any pickable issue, but normally the ones on top are deemed more important.
- When you pick an issue, add yourself as an asignee and move it to the _In progress_ column.
- Implement changes and [open a pull request](/contributing-code/user-stories#opening-a-pull-request).
- Move your issue to the _In Review_ column and assign _Team Graz_ as a reviewer.
- Wait for the review, implement changes and then you can proceed with [finalizing the pull request](/contributing-code/user-stories#pull-request-review-done)


## Implementing changes

:::caution
You should always create a new branch, publish your changes there and create a pull request.
:::

:::note
By now you should have [cloned the right project](/contributing-code/common#clone-and-prepare-a-repository) and [created a new scratch org](/contributing-code/common#creating-a-scratch-org).
:::

You can name your branches however you wish, but you are responsible for their lifecycle (in other words deleting them after they are no longer needed). I name them `<username>/<issue>` so that I easily spot my branches:

```shell
git checkout -b <branchName>
```

... or using the newer command:

```shell
git switch -c <branchName>
```

You can also create a new branch from WebStorm if you prefer an UI. Under Git \> New Branch or in the bottom right branches menu:

<img
src={require('./img/webstorm-git_shortcut.png').default}
alt="Webstorm Git branches menu"
width="600px"
/>

You should commit any changes to your new branch and push it to the repository when you feel ready for a code review.
```shell
git push -u origin <branchName>
```
The same can probably be found in a menu in WebStorm our in the builtin Git in VS Code.


## Opening a pull request

Once you've pushed your branch to the repository and think you've implemented everything from the user story (while honoring [clean code guidelines](https://sites.google.com/up2go.com/up2go-devson-boarding/software-engineering-practices/clean-code-guidelines)) you can open a PR.

The name of the pull request should be the name of the github issue you are working on. E.g.: "Owner Change from inactive R on work package throws error". In the description I normally provide and explanations to how I came up with the solution, or steps to reproduce - given that neither is already present in the issue description.
:::tip
You need to link the pull request to the issue you are working on. The easiest way to do so is to include a [keyword in the PR description](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

<img
src={require('./img/pr_example.png').default}
alt="Linking an Issue in a Pull request"
width="600px"
/>

:::

On github assign _Team Graz_  as a reviewer and don't forget to move your issue to the _In Review_ column (i.e. status).


CI Apex tests are started once you open a new PR (it can take 2h to complete, so be patient). If they fail because of your changes, you should investigate why and commit the fix.

:::note
There are occasional test failures that have nothing to do with your code.
E.g. `DUPLICATE_COMM_NICKNAME` or `Apex CPU time limit exceeded` in some cases. Consult before you try fixing files you didn't work on.
:::

:::tip
You can run all tests on your scratch org (usually faster) beforehand to check if everything is OK. However, this can cause unwanted behaviour with certain tests that have `@SeeAllData`. Having a completely new scratch org is the safest option.

```bash
sf apex run test -o <target_org>
```

:::

## Pull request review done

Congratulations 🎉 You now have to deploy it to the appropriate orgs, (potentially) update references, merge to main / patch branches.

:::caution
For a cleaner main branch, **always merge main into your own branch first** on any repository you've worked on:

```bash
git checkout main && git pull
git checkout <myBranch> && git merge main
```
:::

### Deploy

**You should always deploy before merging to main**. The strategies slightly differ with user story types (defects, working on clean, normal user stories) hence it isn't automatic.

**If you created a new resource** (e.g. new class, new test class, new custom object / metadata ...) you should check they are [included in the package](/contributing-code/common#new-components-for-the-package) after deploying.

:::info
Read through this whole section first and then check out [how to deploy](/contributing-code/common#deploying-to-an-org).
:::

### Finalize the pull request

It is preferred that you merge changes from `main` into your branch so there are no merge commits in main.

:::caution
**Always Squash and Merge** the pull request. And click on "Squash and Merge", not "Close pull request" like I do sometimes 🙈.

<img
src={require('./img/github-squashMerge.png').default}
alt="Squash and Merge option"
width="600px"
/>
:::

If you had linked an issue earlier, the issue should have been closed automatically with the PR being merged. If not, move it to the _Completed_ column. After that you are expected to delete your branch.

### Working on clean

If you did some changes to `up2go-clean`, you need to update the submodule references in the 2Team and CPRM repositories after you've merged the PR on clean. Start by running `git fetch` from the command line or the Git menu in one of the projects (2Team or CPRM). Then update the reference of your local main branch. Make sure you select **the remote branch**.

<img
src={require('./img/webstorm_git-update_submodule.png').default}
alt="Webstorm Git submodule update menu"
width="600px"
/>

After this, a change should appear under the "Commit" panel for `up2go-clean` updating it from the old commit hash to your new one. Double check, the updated commit hash corresponds to your merge on the clean repository. Commit it (with the same name as the PR), push to the repository and deploy. Repeat for the other repository (CPRM or 2Team).


### Working on defects

:::danger
When patching a package, you can't create new components (not even for testing). **Publish only changes to already existing components**. It's not supported by salesforce and the error returned is vague so it causes a lot of headaches. Consult if you're unsure what to do.
:::

If your is is a defect (visible by having the `bug X.X.x` label) you need to include it in the patch as well (along with the current package if it hasn't been resolved yet). From the labels you can see which patch branches you need to merge it too.

<img
src={require('./img/issue_with_patches.png').default}
alt="Issue with patch labels"
width="300px"
/>

For example, the issue above needs to be also fixed (and deployed) in the branch 13.9.x and 14.1.x

:::caution
If your changes rely on functions which are not present in the previous package version, you need to create a new scratch org and test it. **Potentially even create a new PR for the patch branch.**
:::

If the code base is the same (meaning your code changes are valid for older package versions) you just cherry pick the commit from master and commit it to the relevant patch branch

```bash
git cherry-pick commitSha
```

... or you prefer an UI:
<img
src={require('./img/webstorm_git-cherrypick.png').default}
alt="Cherry Pick from WebStorm Git panel"
width="600px"
/>

:::caution
Always `git pull` before you try to push commits. 
:::

We also update the description of the PR to include the commit for each patch:
<img
src={require('./img/pr_patch_commit.png').default}
alt="PR with patch commit in description"
width="600px"
/>
