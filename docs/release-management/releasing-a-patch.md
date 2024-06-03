---
sidebar_label: Releasing a patch
sidebar_position: 0
description: Need to fix a bug in a released verson?
---

# Releasing a patch

:::note
The following has been written for the patch creation process for 2Team and / or CPRM which uses 1GP. If you are not working on either of these two repositories, you can ignore this section.
:::

### Prerequisites

In order to release a patch you need to have access to our appropriate patch org (w/ admin access). You can also consult the official documentation and read about the general patch upload process: [Create and Upload Patches in First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/patches_creating.htm#patches_creating).

:::tip
If you deployed stories to the patch org, you should have it available in your sf cli and you can access it via the terminal. Run `sf org list` and you should see patch orgs listed.

For example, opening the 2Team 14.2 patch org:
```bash
sf org open -o UP2GO_2T-14.2-PACKAGE
```
... or the CPRM 14.1:
```bash
sf org open -o UP2GO_CPRM_BM-14.1-PACKAGE
```

You can also use the WebStorm IC2 connections menu (check out [the IC2 section](/environment/webstorm#illuminated-cloud-2) if you don't see the toolbar):
<img
src={require('./img/release_patch-ws_connection_menu.png').default}
alt="WebStorm IC2 connections"
width="600px"
/>
:::

### Compare git and the patch org

In git we use separate branches to version patch org changes. You should ensure that everything in those branches is also deployed to the patch org. Check out [how to deploy](/contributing-code/common#deploying-to-an-org) if you find changes in git that are not in the org.

:::caution
**Never deploy any new components (i.e. new files) to the patch org.** The upload will fail due to salesforce restrictions. Consult the official documentation linked above on what is allowed.
:::

### Upload a Patch

Unless instructed otherwise, set the following fields:
```
 Version Name: {Verison Number} ({CPRM|2Team})
               // e.g. "14.1.5 (CPRM)"
 Release Type: Managed - Released
     Password: <censored, see below>
```
Look for the password in our [Release process document](https://docs.google.com/document/d/1MFuYL1Yb6tdlKve-IgCPyDWNwZK9_yV9aS-kEP-R-Vc/edit?usp=sharing).

After that click on "Upload". You get a warning from Salesforce asking you if you are sure about the "Managed" release type, which is normal. We are confident in our fixes and we (usually) don't test them with beta patch releases. You can proceed with the upload.

<img
src={require('./img/release_patch-upload.png').default}
alt="Upload attributes"
width="600px"
/>

CPRM usually uploads faster than 2Team but in both cases it takes some time. You can, but you don't need to have the upload tab open, salesforce sends you an email when the upload is done.

### Upload done

If the upload is successful, you can move on to the next section.
<img
src={require('./img/release_patch-upload_success.png').default}
alt="Upload success email"
width="600px"
/>

If the upload failed, you need to investigate the test failures, (potentially) commit a fix to the patch branch, deploy and repeat the upload. It has happened in the past that test cases failed because of Salesforce being capricious, so it might suffice to simply upload again. 
<img
src={require('./img/release_patch-upload_fail.png').default}
alt="Upload fail email"
width="600px"
/>

### Deprecate the previous patch

In the packaging org under Setup \> Package Manager \> (2Team | CPRM) \> Versions you should click on "Deprecate" for the previously released patch version.

### Github release

On the github repository (2Team or CPRM) create a new release from the patch branch (_2Team or cprm_ \> Releases \> Draft a new release). You should set the following details:

```
        Tag: v.{Major.Minor.Patch}
     Target: patch.{Major.Minor}.x
      Title: {Major.Minor.Patch}
 Descripton:
             // List of issues fixed in this release. We have no standard format, 
             // you can use the image below for an example or invent your own.

Set as the latest release: [x]
             // Only when it is the actual latest release
```

<img
src={require('./img/release_patch-github_release.png').default}
alt="Github release details"
width="600px"
/>

Also ensure that once the github issue has all the releases needed (for every bug label) you set a checkmark on the github project. You can set in in the github project view "Defects" or on the issue itself (only visible via the project board popup view).

<img
src={require('./img/release_patch-issue_checkmark.png').default}
alt="Github patch checkmark on issues (project view only)"
width="600px"
/>

### Up2Go org release

In our org we also keep a list of releases. For example, Fiber uses these releases to get the latest 2Team package ID, so updating it is necessary. 

:::info
If you can't edit the records described in this section, make sure you have been added to the technology plan in our org.
:::

Open [All package versions](https://up2go.lightning.force.com/lightning/o/sfLma__Package_Version__c/list?filterName=00B50000006inDxEAI) in our org. You could save it under your favourites on the upper right corner for quick access in the future. If the upload was successful, an new entry should have been created automatically for the release version you specified during upload. You can find it by "Package Version Name" or it's usually the only one that has no "Last Modified By".


<img
src={require('./img/release_patch-all_package_versions.png').default}
alt="Up2Go org All package versions"
width="600px"
/>

Open the Package Version details and add the product release. It differs based on the Major.Minor version, consult the previous package version to figure out which release it belongs to if you are unsure. E.g. for finding the product release for _13.9.14 (CPRM)_ open _13.9.13 (CPRM)_. You should also populate the "GIT" link to the appropriate Github release.

<img
src={require('./img/release_patch-package_version.png').default}
alt="Up2Go org Package version details"
width="600px"
/>


### Inform the right people

If you have successfully completed all of the above steps, a new version of 2Team or CPRM is now ready to be installed in customer orgs. Usually is it sufficient to inform Georg that you have finished with the patch release and he will inform you if any additional steps are needed.

Congratulations 🎉 You have now successfully implemented bug fixes for customers. 