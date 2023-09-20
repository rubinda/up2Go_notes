---
sidebar_position: 5
sidebar_label: WebStorm
description: Steps to make it Salesforce ready
---

# WebStorm setup

:::tip
Install WebStorm via [Jetbrains Toolbox App](https://www.jetbrains.com/toolbox-app/) - makes updates easier, especially on Linux.
:::
You should get a license to use it from someone.

:::caution
In the past, I've had some issues after immediately updating WebStorm which _broke_ some Illuminated Cloud functionality. It was resolved by the IC2 team, but it took some time. Update with care.
:::

### Illuminated Cloud 2

A plugin that enables Salesforce platform development with a selection of IntelliJ products. Install it via WebStorm Preferences > Plugins > search for Illuminated Cloud 2:

<img
  src={require('./img/ic2-install.png').default}
  alt="Illuminated Cloud install"
  width="600px"
/>

Enter a license key (ask to be provided with one) under Tools > Illuminated Cloud > Configure Application:

<img
  src={require('./img/ic2-license.png').default}
  alt="Illuminated Cloud license"
  width="600px"
/>

Under the Salesforce DX tab, provide a path to your `sf` executable (in terminal run `which sf`). You can also choose to push on save, which will automatically push changes to the Project connection on file save (check that "Deploy on save" is also enabled in "Validation and Deployment" tab):

<img
  src={require('./img/ic2-sfdx.png').default}
  alt="Illuminated Cloud Salesforce DX"
  width="600px"
/>

You can add Illuminated Cloud to your toolbar (View > Appearance > Toolbar) for easy access:

<img
  src={require('./img/ic2-toolbar_view.png').default}
  alt="Illuminated Cloud on Toolbar"
  width="600px"
/>

I did it under Preferences > Appearance & Behavior > Menus and Toolbars > Add Illuminated Cloud under "Main Toolbar" with the plus icon:
<img
  src={require('./img/ic2-toolbar_add.png').default}
  alt="Illuminated Cloud adding to Toolbar"
  width="600px"
/>

### Github

:::tip
If you clone the repositories via the command line, WebStorm will still have the full git functionality available for that repository.
:::

If you want to clone a repository via the Git menu in WebStorm (Get from VCS _or_ Git > Clone...), just paste the appropriate link.

<img 
  src={require('./img/webstorm_welcome.png').default}
  alt="Webstorm welcome screen"
  width="600px"
/>

for ssh:
```
git@github.com:Up2Go/<Repository>.git
```

You can also add your account under Preferences > Version Control > Github. If you do this, you should be able to browse the repositories in a dropdown list and clone them with clicks.


# New UI

WebStorm has a new UI mode. _"Clean and modern-looking, the new UI helps focus on the work by minimizing on-screen clutter."_. You can turn it on under Settings > Appearance & Behaviour > New UI > Enable New UI (requires restart). In the picture below I am also using the One Dark theme and Fira Code font with ligatures enabled.

<img 
  src={require('./img/webstorm_newUI.png').default}
  alt="Webstorm new UI"
  width="600px"
/>