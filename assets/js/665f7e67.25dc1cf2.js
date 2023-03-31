"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5684],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,f=l["".concat(p,".").concat(d)]||l[d]||g[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7062:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const a={title:"List Groups"},i=void 0,u={unversionedId:"fun/cah-groups/listgroups",id:"fun/cah-groups/listgroups",title:"List Groups",description:"This command lists all currently configured CAH card pack groups.",source:"@site/docs/fun/cah-groups/listgroups.md",sourceDirName:"fun/cah-groups",slug:"/fun/cah-groups/listgroups",permalink:"/fun/cah-groups/listgroups",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/cah-groups/listgroups.md",tags:[],version:"current",frontMatter:{title:"List Groups"},sidebar:"sidebar",previous:{title:"End Game",permalink:"/fun/cah-groups/endgame"},next:{title:"Start New Game",permalink:"/fun/cah-groups/newgame"}},p={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:s},l="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command lists all currently configured CAH card pack groups."),(0,o.kt)("p",null,"For more information about the CAH card pack system, see ",(0,o.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Command"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"listgroups")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-listgroups")," - Lists all currently configured CAH card pack groups.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/fun/cah_groups/listgroups.go.tmpl",file:"../../../../src/fun/cah_groups/listgroups.go.tmpl"},'{{/*\n    Lists all currently configured CAH card pack groups.\n    See <https://yagpdb-cc.github.io/fun/cah-groups/listgroups> for more information.\n\n    Author: LRitzdorf <https://github.com/LRitzdorf>\n*/}}\n\n{{ $pattern := "" }}\n{{ if ne (len .CmdArgs) 0 }}\n    Filtering groups by `{{index .CmdArgs 0}}` and ignoring other arguments.\n    {{- $pattern = joinStr "" "group %" (index .CmdArgs 0) "%" }}\n{{- else }}\n    {{- $pattern = "group %" }}\n{{- end }}\n{{- $groups := dbGetPattern 0 $pattern 100 0 }}\n`Group name` - pack-1 pack-2 ...\n{{ range $groups }}\n    {{- $strippedKey := slice .Key 6 (len .Key) }}\n`{{$strippedKey}}` - {{.Value}}\n{{- else }}\n    No pack groups defined. Use `-setgroup "group name" "pack-1 pack-2 ..."` to set some up!\n{{ end }}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LRitzdorf"},"@LRitzdorf"),"."))}g.isMDXComponent=!0}}]);