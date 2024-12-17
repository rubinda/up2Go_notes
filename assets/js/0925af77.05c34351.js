"use strict";(self.webpackChunkup2go_notes=self.webpackChunkup2go_notes||[]).push([[174],{6972:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=o(4848),s=o(8453);const r={sidebar_label:"User stories",sidebar_position:2,description:"How to complete a user story"},i="Github Projects",a={id:"contributing-code/user-stories",title:"Github Projects",description:"How to complete a user story",source:"@site/docs/contributing-code/user-stories.md",sourceDirName:"contributing-code",slug:"/contributing-code/user-stories",permalink:"/up2Go_notes/contributing-code/user-stories",draft:!1,unlisted:!1,editUrl:"https://github.com/rubinda/up2Go_notes/blob/main/docs/contributing-code/user-stories.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"User stories",sidebar_position:2,description:"How to complete a user story"},sidebar:"tutorialSidebar",previous:{title:"Common",permalink:"/up2Go_notes/contributing-code/common"},next:{title:"Clean repository",permalink:"/up2Go_notes/contributing-code/clean"}},c={},h=[{value:"Quick overview",id:"quick-overview",level:2},{value:"Implementing changes",id:"implementing-changes",level:2},{value:"Opening a pull request",id:"opening-a-pull-request",level:2},{value:"Pull request review done",id:"pull-request-review-done",level:2},{value:"Legacy",id:"legacy",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Finalize the pull request",id:"finalize-the-pull-request",level:3},{value:"Working on clean",id:"working-on-clean",level:3},{value:"Working on defects",id:"working-on-defects",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"github-projects",children:"Github Projects"}),"\n",(0,t.jsx)(n.p,{children:"We use the issue board of Github to track progress and delegate work among the team. Previously we had a custom built sprint board in our org, but we are not using that anymore."}),"\n",(0,t.jsx)("img",{src:o(5851).A,alt:"Example view of the Core project",width:"600px"}),"\n",(0,t.jsx)(n.h2,{id:"quick-overview",children:"Quick overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can choose to work on ",(0,t.jsx)(n.strong,{children:"any issue"})," that is listed under the ",(0,t.jsx)(n.em,{children:"Pickable"})," column. You can freely choose any pickable issue, but normally the ones on top are deemed more important."]}),"\n",(0,t.jsxs)(n.li,{children:["When you pick an issue, add yourself as an asignee and move it to the ",(0,t.jsx)(n.em,{children:"In progress"})," column."]}),"\n",(0,t.jsxs)(n.li,{children:["Implement changes and ",(0,t.jsx)(n.a,{href:"/contributing-code/user-stories#opening-a-pull-request",children:"open a pull request"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Move your issue to the ",(0,t.jsx)(n.em,{children:"In Review"})," column and assign your colleagues as a reviewer."]}),"\n",(0,t.jsxs)(n.li,{children:["Wait for the review, implement changes and then you can proceed with ",(0,t.jsx)(n.a,{href:"/contributing-code/user-stories#pull-request-review-done",children:"finalizing the pull request"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementing-changes",children:"Implementing changes"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You should always create a new branch, publish your changes there and create a pull request."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["By now you should have ",(0,t.jsx)(n.a,{href:"/contributing-code/common#clone-and-prepare-a-repository",children:"cloned the right project"})," and ",(0,t.jsx)(n.a,{href:"/contributing-code/common#creating-a-scratch-org",children:"created a new scratch org"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["You can name your branches however you wish, but you are responsible for their lifecycle (in other words deleting them after they are no longer needed). I name them ",(0,t.jsx)(n.code,{children:"<username>/<issueNum>-<issue-name>"})," so that I easily spot my branches:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git switch -c <branchName>\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also create a new branch from WebStorm if you prefer an UI. Under Git > New Branch or in the bottom right branches menu:"}),"\n",(0,t.jsx)("img",{src:o(6401).A,alt:"Webstorm Git branches menu",width:"600px"}),"\n",(0,t.jsx)(n.p,{children:"You should commit any changes to your new branch and push it to the repository when you feel ready for a code review."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git push -u origin <branchName>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same can be found in a menu in WebStorm or in the builtin Git in VS Code."}),"\n",(0,t.jsx)(n.h2,{id:"opening-a-pull-request",children:"Opening a pull request"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've pushed your branch to the repository and think you've implemented everything from the user story (while honoring ",(0,t.jsx)(n.a,{href:"https://sites.google.com/up2go.com/up2go-devson-boarding/software-engineering-practices/clean-code-guidelines",children:"clean code guidelines"}),") you can open a PR."]}),"\n",(0,t.jsx)(n.p,{children:'The name of the pull request should be the name of the github issue you are working on. E.g.: "Owner Change from inactive R on work package throws error". In the description I normally provide explanations to how I came up with the solution, or steps to reproduce - given that neither is already present in the issue description.'}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You need to link the pull request to the issue you are working on. The easiest way to do so is to include a ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword",children:"keyword in the PR description"}),"."]}),(0,t.jsx)("img",{src:o(5097).A,alt:"Linking an Issue in a Pull request",width:"600px"})]}),"\n",(0,t.jsxs)(n.p,{children:["Assign a colleague (or more) as a reviewer and don't forget to move your issue to the ",(0,t.jsx)(n.em,{children:"In Review"})," column (i.e. status on the project)."]}),"\n",(0,t.jsx)(n.p,{children:"CI Apex tests are started once you open a new PR (cprm takes ~1h, 2Team ~2h45m - they are slow I know). If they fail because of your changes, you should investigate why and commit the fix."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["There are occasional test failures that have nothing to do with your code.\nE.g. ",(0,t.jsx)(n.code,{children:"DUPLICATE_COMM_NICKNAME"})," or ",(0,t.jsx)(n.code,{children:"Apex CPU time limit exceeded"})," in some cases. Consult before you try fixing files you didn't work on."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can run all tests on your scratch org (faster) beforehand to check if everything is OK. However, this can cause unwanted behaviour with certain tests that have ",(0,t.jsx)(n.code,{children:"@SeeAllData"}),". The result of ci-apex-tests is the safer bet."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sf apex run test -o <target_org>\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"pull-request-review-done",children:"Pull request review done"}),"\n",(0,t.jsx)(n.p,{children:"Congratulations \ud83c\udf89 You now have to (potentially) update references and merge to main (master) branches."}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["For a cleaner main branch, ",(0,t.jsx)(n.strong,{children:"always merge main into your own branch first"})," on any repository you've worked on:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout main && git pull\ngit checkout <myBranch> && git merge main\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"legacy",children:"Legacy"}),"\n",(0,t.jsxs)(n.p,{children:["The section onward from here is considered to be used with 2Team or CPRM. The newer ",(0,t.jsx)(n.a,{href:"https://github.com/Up2Go/shaRe-SF",children:"share repository"})," has it's own workflow."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"You should always deploy before merging to main"}),". The strategies slightly differ with user story types (defects, working on clean, new features) and some require clicking around in a salesforce patch org and we never automated it completely."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"If you created a new resource"})," (e.g. new class, new test class, new custom object / metadata ...) you should check they are ",(0,t.jsx)(n.a,{href:"/contributing-code/common#new-components-for-the-package",children:"included in the package"})," after deploying."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Read through this whole section first and then check out ",(0,t.jsx)(n.a,{href:"/contributing-code/common#deploying-to-an-org",children:"how to deploy"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"finalize-the-pull-request",children:"Finalize the pull request"}),"\n",(0,t.jsxs)(n.p,{children:["It is preferred that you merge changes from ",(0,t.jsx)(n.code,{children:"main"})," into your branch so there are no merge commits in main."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Always Squash and Merge"}),' the pull request. And click on "Squash and Merge", not "Close pull request".']}),(0,t.jsx)("img",{src:o(5755).A,alt:"Squash and Merge option",width:"600px"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you had linked an issue earlier, the issue should have been closed automatically with the PR being merged. If not, move it to the ",(0,t.jsx)(n.em,{children:"Completed"})," column. After that you are expected to delete your branch."]}),"\n",(0,t.jsx)(n.h3,{id:"working-on-clean",children:"Working on clean"}),"\n",(0,t.jsxs)(n.p,{children:["If you did some changes to ",(0,t.jsx)(n.code,{children:"up2go-clean"}),", you need to update the submodule references in the 2Team and CPRM repositories after you've merged the PR on clean. Start by running ",(0,t.jsx)(n.code,{children:"git fetch"})," from the command line or the Git menu in one of the projects (2Team or CPRM). Then update the reference of your local main branch. Make sure you select ",(0,t.jsx)(n.strong,{children:"the remote branch"}),"."]}),"\n",(0,t.jsx)("img",{src:o(5971).A,alt:"Webstorm Git submodule update menu",width:"600px"}),"\n",(0,t.jsxs)(n.p,{children:['After this, a change should appear under the "Commit" panel for ',(0,t.jsx)(n.code,{children:"up2go-clean"})," updating it from the old commit hash to your new one. Double check, the updated commit hash corresponds to your merge on the clean repository. Commit it (with the same name as the PR), push to the repository and deploy. Repeat for the other repository (CPRM or 2Team)."]}),"\n",(0,t.jsx)(n.h3,{id:"working-on-defects",children:"Working on defects"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["When patching a package, you can't create new components (not even for testing). ",(0,t.jsx)(n.strong,{children:"Publish only changes to already existing components"}),". It's not supported by salesforce and the error returned is vague so it causes a lot of headaches. Consult if you're unsure what to do."]})}),"\n",(0,t.jsxs)(n.p,{children:["If your is is a defect (visible by having the ",(0,t.jsx)(n.code,{children:"bug X.X.x"})," label) you need to include it in the patch as well (along with the current package if it hasn't been resolved yet). From the labels you can see which patch branches you need to merge it too."]}),"\n",(0,t.jsx)("img",{src:o(1319).A,alt:"Issue with patch labels",width:"300px"}),"\n",(0,t.jsx)(n.p,{children:"For example, the issue above needs to be also fixed (and deployed) in the branch 13.9.x and 14.1.x"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If your changes rely on functions or classes which are not present in the previous package version, you should create a new scratch org and test it. ",(0,t.jsx)(n.strong,{children:"Potentially even create a new PR for the patch branch."})]})}),"\n",(0,t.jsx)(n.p,{children:"If the code base is the same (meaning your code changes are valid for older package versions) you just cherry pick the commit from master and commit it to the relevant patch branch. You can't cherry pick if your changes reference classes which do not exist in older versions, or if the class you worked one previously had a different name."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git cherry-pick commitSha\n"})}),"\n",(0,t.jsx)(n.p,{children:"... or if you prefer an UI:"}),"\n",(0,t.jsx)("img",{src:o(1467).A,alt:"Cherry Pick from WebStorm Git panel",width:"600px"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Always ",(0,t.jsx)(n.code,{children:"git pull"})," before you try to push commits."]})}),"\n",(0,t.jsx)(n.p,{children:"We also update the description of the PR to include the commit for each patch. There is no official template, you can style it how you want:"}),"\n",(0,t.jsx)("img",{src:o(1677).A,alt:"PR with patch commit in description",width:"600px"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5755:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/github-squashMerge-4f0198fda0f2bd1d5152df9bee769b81.png"},1319:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/issue_with_patches-4fff6352eaf923bfd210ae4e4d728bff.png"},5097:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/pr_example-849577786131a52f5045fa09f52364e0.png"},1677:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/pr_patch_commit-2bcb170a7229b3078ef46374ac830bfe.png"},5851:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/projects_board-85be9e857ae94f0d40b27af2aae41f57.png"},6401:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webstorm-git_shortcut-231079c737302da5c4010794501a76ce.png"},1467:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webstorm_git-cherrypick-8e6392c1436639038bb3822b1e32f713.png"},5971:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webstorm_git-update_submodule-3f687f0d0466d042866079c6e3ce53a3.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);