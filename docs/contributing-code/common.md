---
sidebar_position: 1
sidebar_label: Common
description: The basics
---

# The Basics

:::tip
The official onboarding documentation provides [Software engineering practices](https://sites.google.com/up2go.com/up2go-devson-boarding/software-engineering-practices)
:::

You should have access to the [Up2Go organization](https://github.com/Up2Go) Github profile. If not, ask to be added to the team. The team uses [Trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) with SCRUM.

## The Sprint board

We are using github projects to manage and distribute work. You can read more about it in the [user stories section](/contributing-code/user-stories).

<img
src={require('./img/projects_board.png').default}
alt="Example view of the Core project"
width="600px"
/>


## Clone and prepare a repository

You should figure out where you need to implement the changes (e.g. _2Team_, _cprm_ or _clean_). Clone that repository (**with submodules**) using:

```bash
git clone --recurse-submodules https://github.com/Up2Go/<repository>.git
```

:::tip
If you forgot to include the `--recurse-submodules` flag, you can initialize them with

```bash
git submodule update --init
```

:::

You can also clone it from [Webstorm](/environment/webstorm#github) if you prefer an UI.

## Legacy workflow

The following applies whenever you are working with 2Team or CPRM. The newer repositories use 2GP, so the workflow is a little different.

### Creating a Scratch Org 

:::note
You should have the default dev hub configured. If not, see [Adding default Dev Hub](/environment/sf#adding-default-dev-hub)
:::

Run the internal script from the project root to create a scratch org. You will develop and test your changes on it:

```bash
zsh dev-tools/rebuild-scratch-org.sh <customName>
```

:::info
If you encounter an error like _The specified org X is not a Dev Hub_ it most likely means you don't have the (S) Up2Go Special Developer Permissions in our org.
:::

You can choose any name for the scratch org. If it's already in use the existing scratch org be deleted and replaced. Once the script finishes, you should have a new scratch org ready

```bash
sf org list
```

<img
src={require('./img/sf-org_list.png').default}
alt="List of sf connections"
width="600px"
/>

#### Telling WebStorm about it

After you've opened WebStorm on a project for the first time, Illuminated Cloud will inform you with something like _Your project configuration is invalid_. Click on resolve and choose the newly generated scratch org connection (select your _customName_ you provided to the script).

<img
src={require('./img/ic2-connection_resolve.png').default}
alt="Illuminated Cloud resolve invalid connection"
width="600px"
/>

An offline symbol table will be generated, the project gets indexed and finally you should reload the project when prompted. If you enabled [Deploy on save](http://localhost:3000/environment/webstorm#illuminatedcloud) you could now change files and they _should_ reflect in your scratch org.

:::tip
You can change the active connection through Illuminated Cloud > Configure Project, also accessible from the toolbar. You should do this everytime you want to work on a new scratch org.
<img
src={require('./img/webstorm_ic2-configure_project.png').default}
alt="Illuminated Cloud Configure Project"
width="600px"
/>
:::

### Deploying to an Org

:::danger
If you're deploying a patch, [read this](/contributing-code/user-stories#working-on-defects) first.
:::

Before you can use the deploy script, you have to make sure you have the connections to the appropriate orgs (ask someone to be added) and the **correct aliases** to them. E.g. if you worked on a defect that needs to be present in Patch 13.9, you need an alias `UP2GO_2T-13.9-PACKAGE`. This is expected from the internal scripts. The same goes for regular user stories.

:::tip
If you don't have a connection yet, check out [How to authorize an Org](/environment/sf#authorizing-an-org).
:::

You can use the provided script to deploy to the org:

```bash
zsh dev-tools/deploy-mdapi-source.sh
```

:::tip
If you are unsure what exactly the alias needs to be, run the deploy script (on the right branch) and look for the packaging org line
<img
src={require('./img/devtools-deploy.png').default}
alt="Dev tools deploy example"
width="600px"
/>

This is defined in `dev-tools/lib/local-config.sh`
:::

### New components for the package

:::tip
If you referenced this new component in a previously existing class file, the new resource should be added automatically on deploy by salesforce.
:::

Whenever you deploy a new component (class or test class, custom object, custom metadata ...) you also need to add it to the package. After the deploy, open up the trunk org (the packaging org alias during deploy) and head to Setup \> Package Manager and click on "2Team"

<img
src={require('./img/package-setup.png').default}
alt="Package Manager view in setup"
width="600px"
/>

After this click on "Add" in the package view

<img
src={require('./img/package-view.png').default}
alt="Package Manager add components"
width="600px"
/>

Browse through components and include your newly created ones. In my case I added a new custom object.

<img
src={require('./img/package-add.png').default}
alt="Package Manager add component"
width="600px"
/>

:::caution
There are some components which we never wish to deploy, don't blindly add everything you see.
:::

In the previous view, search all the components (you can use the search page in your browser) to check they are preset in the list. I made sure all of my custom object's custom fields, record type name and page layout are included.
