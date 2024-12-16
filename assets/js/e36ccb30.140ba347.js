"use strict";(self.webpackChunkup2go_notes=self.webpackChunkup2go_notes||[]).push([[792],{1382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(4848),i=t(8453);const r={sidebar_label:"Clean repository",sidebay_position:3,description:"Contributing to the submodule"},a="Clean repository",s={id:"contributing-code/clean",title:"Clean repository",description:"Contributing to the submodule",source:"@site/docs/contributing-code/clean.md",sourceDirName:"contributing-code",slug:"/contributing-code/clean",permalink:"/up2Go_notes/contributing-code/clean",draft:!1,unlisted:!1,editUrl:"https://github.com/rubinda/up2Go_notes/blob/main/docs/contributing-code/clean.md",tags:[],version:"current",frontMatter:{sidebar_label:"Clean repository",sidebay_position:3,description:"Contributing to the submodule"},sidebar:"tutorialSidebar",previous:{title:"User stories",permalink:"/up2Go_notes/contributing-code/user-stories"},next:{title:"Release Management",permalink:"/up2Go_notes/category/release-management"}},c={},l=[{value:"How we update it",id:"how-we-update-it",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"clean-repository",children:"Clean repository"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'"Clean" is only being used in 2Team and CPRM.'})}),"\n",(0,o.jsx)(n.p,{children:"It contains custom implementations that are meant to be used in other repositories. Hence it is present as a git submodule."}),"\n",(0,o.jsx)(n.h2,{id:"how-we-update-it",children:"How we update it"}),"\n",(0,o.jsx)(n.p,{children:"Create a new branch in the project subdirectory for the clean repository. Implement changes and commit them from the clean subdirectory - this way you are commiting to the branch on clean. In VS Code you can see these changes in the Git panel, the red ones represent the parent repository,\nthe orange ones will be made to the clean repository."}),"\n",(0,o.jsx)("img",{src:t(2410).A,alt:"VS Code working with clean",width:"600px"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"If you are using a single project for all your work, you have just changed your local up2go-clean version for all parent branches! Beware when switching parent branches!"})}),"\n",(0,o.jsx)(n.p,{children:"For the PR on the parent repository, commit the hash of your branch of the PR version of clean. Once the clean PR is completed, merge to main and update the parent clean reference again to the newest up2go-clean main."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2410:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/vscode_on_clean-a788fda57a4f1e61706d435f764b804b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);