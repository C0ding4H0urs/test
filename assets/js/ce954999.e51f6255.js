(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3334],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4359:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,title:"Overview"},s=void 0,u={unversionedId:"fun/cah-groups/overview",id:"fun/cah-groups/overview",isDocsHomePage:!1,title:"Overview",description:"Make groups of card packs for YAGPDB Cards Against Humanity games!",source:"@site/docs/fun/cah-groups/overview.md",sourceDirName:"fun/cah-groups",slug:"/fun/cah-groups/overview",permalink:"/fun/cah-groups/overview",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/cah-groups/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Animal Image Generator",permalink:"/fun/animal"},next:{title:"Delete Group",permalink:"/fun/cah-groups/delgroup"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Make groups of card packs for YAGPDB Cards Against Humanity games!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"This folder contains a set of custom commands for use with YAGPD."),(0,i.kt)("p",null,"Each command has a corresponding text file. To set up the command system, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the Custom Commands section of the YAGPDB Control Panel (under ",(0,i.kt)("inlineCode",{parentName:"li"},"Core > Custom Commands")," in the left sidebar)."),(0,i.kt)("li",{parentName:"ul"},"(Optional but recommended) Create a new custom command group (by clicking the plus icon next to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ungrouped")," tab). Set the desired permissions for this group of commands."),(0,i.kt)("li",{parentName:"ul"},"Hit ",(0,i.kt)("inlineCode",{parentName:"li"},"Save group settings"),"."),(0,i.kt)("li",{parentName:"ul"},"To add a new command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hit ",(0,i.kt)("inlineCode",{parentName:"li"},"Create a new Custom Command")," (the other big green button at the bottom of the page)."),(0,i.kt)("li",{parentName:"ul"},"Pick a file from this repository to start with."),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Command (mention/cmd prefix)")," as the ",(0,i.kt)("inlineCode",{parentName:"li"},"Trigger type"),"."),(0,i.kt)("li",{parentName:"ul"},"Set the command's trigger to the name of the command you just chose."),(0,i.kt)("li",{parentName:"ul"},"Paste the contents of the file into the command's ",(0,i.kt)("inlineCode",{parentName:"li"},"Response")," box."),(0,i.kt)("li",{parentName:"ul"},"Some commands have configuration variables that you'll need to change. These will be near the top of the command, right after the description block."))),(0,i.kt)("li",{parentName:"ul"},"Repeat the above step for all other files in this repo (except this one, of course)."),(0,i.kt)("li",{parentName:"ul"},"Test it out! Some of the commands will provide usage tips if you do something wrong.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,'Since this is premade code, it should "just work." However, if things go wrong or don\'t work at all, try rechecking the permissions (for the group as well as the individual command), or re-paste the code into the ',(0,i.kt)("inlineCode",{parentName:"p"},"Response")," box. If all else fails, contact us in the YAGPDB ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/4udtcA5"},"support server"),"!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This custom command was authored by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LRitzdorf"},"@LRitzdorf"),"."))}m.isMDXComponent=!0}}]);