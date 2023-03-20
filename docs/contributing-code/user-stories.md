---
sidebar_label: User stories
sidebar_position: 2
description: How to complete a user story
---

# Completing a User story

Look for any "Accepted" tasks in the [custom sprint board](https://up2go.lightning.force.com/lightning/n/SprintBoard). You can choose them to be assigned to you (Pick Assignment). Once you start working on them, move them to status "Execute". 

:::note
By now you should have [cloned the right project](/contributing-code/common#clone-and-prepare-a-repository) and [created a new scratch org](/contributing-code/common#creating-a-scratch-org).
:::


## Implementing changes

:::caution
You should always create a new branch, publish your changes there and create a pull request.
:::
You can name your branches however you wish, but you are responsible for their lifecycle (in other words deleting them after they are no longer needed). I name them `<username>/<feature>` so that I easily spot my branches:
```bash
git checkout -b <branchName>
```
You can also create a new branch from WebStorm if you prefer an UI. Under Git > New Branch or in the bottom right branches menu:

<img
  src={require('./img/webstorm-git_shortcut.png').default}
  alt="Webstorm Git branches menu"
  width="600px"
/>

Your first commit should contain the assignment name of the story + AssignmentId e.g. 
"Access Graph has issues with CPRM Apex Sharing Reason (a2R1T000003PXr4UAG)"

:::tip
While not required, I suggest using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for your inbetween commits. 
:::


## Opening a pull request

Once you've pushed your branch to the repository and think you've implemented everything from the user story (while honoring [clean code guidelines](https://sites.google.com/up2go.com/up2go-devson-boarding/software-engineering-practices/clean-code-guidelines)) you can open a PR. 

The name of the pull request should be the name of your user story + assignment id. E.g.: "Decision & Approval History Component filtering out all "Access Only"s (a2R1T000003QhZHUA0)". Fill out the PR description and provide steps to reproduce. 
:::tip
I like to include a link (markdown format) to the story in the org so that it's one click away for the reviewer, e.g.: 
```
Based on [this story](https://up2go.lightning.force.com/a2R1T000003QhZHUA0) ...
```
:::

On github add "Team Graz" / "CPRM" / "2Team" as a reviewer and on the org "Share an update..." on chatter by tagging the "@I need a code review" group. On the assignment also update the "VCS Revision" field by adding the link to the pull request.

<img 
  src={require('./img/salesforce_chatter-review_me.png').default}
  alt="Ask for code review in Salesforce"
  width="600px"
/>

:::info
If you can't tag the "I need a code review" group in chatter, open the [group details](https://up2go.lightning.force.com/0F9500000004ZtcCAE) and click on "Ask to join" on the upper right.
:::

CI Apex tests are started once you open a new PR (it takes at least 2h to complete, so be patient). If they fail, you should investigate why and commit the fix.
:::tip
You can run all tests on your scratch org (usually faster) beforehand to check if everything is OK
```bash
sfdx apex run test -o <target_org>
```
:::

## Pull request review done

Congratulations! You now have to deploy it to the appropriate orgs, update references, merge the branch and document it in Salesforce.

:::caution
For a cleaner master (main) branch, **always merge master into your own branch first** on any repository you've worked on:
```bash
git checkout master && git pull
git checkout <myBranch> && git merge master
```
:::

### Deploy

**You should always deploy before merging to master**. The strategies slightly differ with user story types (defects, working on clean, normal user stories) hence it isn't automatic. 

:::info
Read through this whole section first and then check out [how to deploy](/contributing-code/common#deploying-to-an-org). 
:::

### Finalize the pull request

It is preferred that you merge changes from `master` into your branch so there are no merge commits in the master. 

:::caution
**Always Squash and Merge** the pull request. And click on "Squash and Merge", not "Close pull request" like I do sometimes 🙈.

<img 
  src={require('./img/github-squashMerge.png').default}
  alt="Squash and Merge option"
  width="600px"
/>
:::
After that you are expected to delete your branch.

### Working on clean

If you did some changes to `up2go-clean`, you need to update the submodule references in the 2Team and CPRM repositories after you've merged the PR on clean. Start by running `git fetch` from the command line or the Git menu in one of the projects (2Team or CPRM). Then update the reference of your local main (master) branch. Make sure you select **the remote branch**.

<img 
  src={require('./img/webstorm_git-update_submodule.png').default}
  alt="Webstorm Git submodule update menu"
  width="600px"
/>

After this, a change should appear under the "Commit" panel for `up2go-clean` updating it from the old commit hash to your new one. Double check, the updated commit hash corresponds to your merge on the clean repository. Commit it (with the assignment title + id as the message), push to the repository and deploy. Repeat for the other repository (CPRM or 2Team). 

Don't forget to update the Salesforce assignment VSC Revision field by including your commit links to 2Team and CPRM (you can separate them with spaces or commas).
<img 
  src={require('./img/clean-vcs_revision.png').default}
  alt="Clean VCS Revision"
  width="600px"
/>


### Working on defects

:::danger
When patching a package, you can't create new components (not even for testing). **Publish only changes to already existing components**. It's not supported by salesforce and the error returned is vague so it causes a lot of headaches. Consult if you're unsure what to do.
:::

If your user story is a defect you need to include it in the patch as well (along with the current package if it hasn't been resolved yet). In the sprint board find out which Patch you should include this in (usually in the Related > Patches section). To avoid confusion, it is best to just create a separate WebStorm project for each patch (I name them `repositoryX.Y`, so just append the patch number).

:::caution
If your changes provide some new functionality, you should create a scratch org from the patch branch and test it.
:::
If the code base is the same you just need to select the branch in Git panel, search for your commit, right click on the commit and Cherry-Pick your changes. 
```bash
git cherry-pick commitSha
```
... or you prefer an UI:
<img 
  src={require('./img/webstorm_git-cherrypick.png').default}
  alt="Cherry Pick from WebStorm Git panel"
  width="600px"
/> 

Check if you need to update the patch branch first (other remote commits). And if you cherry picked the commit you just need to push the changes and deploy to the patch org. In the assignment details also add the commit URL to the VCS Revision to the patches on Related tab.

<img 
  src={require('./img/defect-vcs_revision.png').default}
  alt="VCS Revision field on Patches"
  width="600px"
/>


