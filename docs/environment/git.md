---
sidebar_position: 3
sidebar_label: Github
description: How to connect your environment with Github
---

# Github setup

Remember to ask someone that they give your Github user access to the organization.

### [SSH](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#ssh)

:::danger
The custom deployment script needed for (almost) any bit of code you write expects SSH to be setup. So you need to follow these steps
:::

_... You can work with all repositories on GitHub over SSH, although firewalls and proxies might refuse to allow SSH connections._

:::tip
You can leave the ssh key passphrase empty. Keeping your private key file stored securely is good enough.
:::

tldr; [Generate a SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) > [Add the Key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### [HTTPS](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#https) (not recommended)

Requires you to remember a PAT (you can only see it once on creation - you have to keep it safe just like a password). It also provides more fine-tuned access control. **Should you choose this path, you will have to study, modify and maintain your own deployment script version**.

tldr; [Create a PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) > on login prompt enter PAT instead of password.
