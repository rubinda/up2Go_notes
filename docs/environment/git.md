---
sidebar_position: 3
sidebar_label: Github
description: How to connect your environment with Github
---

# Github setup

Remember to ask someone that they give your Github user access to the organization. You can choose two strategies to connect your command line to Github:

### [SSH](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#ssh) (recommended)

:::tip
You can leave the ssh key passphrase empty. Keeping your private key file stored securely is good enough.
:::

_... You can work with all repositories on GitHub over SSH, although firewalls and proxies might refuse to allow SSH connections._

tldr; [Generate a SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) > [Add the Key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### [HTTPS](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#https)

Requires you to remember a PAT (you can only see it once on creation - you have to keep it safe just like a password). It also provides more fine-tuned access control.

tldr; [Create a PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) > on login prompt enter PAT instead of password.