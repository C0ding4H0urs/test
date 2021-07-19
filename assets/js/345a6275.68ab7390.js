(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5991],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3283:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],p={title:"Start New Game"},s=void 0,l={unversionedId:"fun/cah-groups/newgame",id:"fun/cah-groups/newgame",isDocsHomePage:!1,title:"Start New Game",description:"This command starts a new CAH game using the specified packs and pack groups.",source:"@site/docs/fun/cah-groups/newgame.md",sourceDirName:"fun/cah-groups",slug:"/fun/cah-groups/newgame",permalink:"/fun/cah-groups/newgame",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/cah-groups/newgame.md",version:"current",frontMatter:{title:"Start New Game"},sidebar:"sidebar",previous:{title:"List Groups",permalink:"/fun/cah-groups/listgroups"},next:{title:"Set Group",permalink:"/fun/cah-groups/setgroup"}},c=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[{value:"Example",id:"example",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command starts a new CAH game using the specified packs and pack groups.\nIt first checks whether each argument is a valid pack group and, if so, expands it into its component packs. If not, that argment is assumed to be an individual pack and is skipped. After expanding all applicable pack groups, the resulting list of packs is used to start a new game, and all members with the CAH role are pinged."),(0,i.kt)("p",null,"For more information about the CAH card pack system, see ",(0,i.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"newgame")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-newgame <packOrPackGroups...>")," - Starts a new CAH game using the specified packs and pack groups."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-newgame")," - Starts a new CAH game using the default list of packs.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-newgame 40-blanks family-friendly packGroup1 "pack group 2"\n')),(0,i.kt)("p",null,"Starts a new CAH game using the built-in packs ",(0,i.kt)("inlineCode",{parentName:"p"},"40-blanks")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"family-friendly")," in addition to the CAH pack groups ",(0,i.kt)("inlineCode",{parentName:"p"},"packGroup1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pack group 2"),", assumed to have been configured beforehand using ",(0,i.kt)("inlineCode",{parentName:"p"},"-setgroup"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There's no specific order that you have to put the pack/pack groups in: the above example would have worked with ",(0,i.kt)("inlineCode",{parentName:"p"},'-newgame family-friendly packGroup1 40-blanks "pack group 2"')," as well."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$packs"),(0,i.kt)("br",null),"\nDefault list of packs to use if no arguments were provided. For example, setting this value to ",(0,i.kt)("inlineCode",{parentName:"p"},'"40-blanks family-friendly"')," would use the packs ",(0,i.kt)("inlineCode",{parentName:"p"},"40-blanks")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"family-friendly")," by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$CAHrole"),(0,i.kt)("br",null),"\nThe ID of the CAH role, which will be pinged when a new game is started."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/fun/cah_groups/newgame.go.tmpl",file:"../../../../src/fun/cah_groups/newgame.go.tmpl"},'{{/*\n    Starts a new CAH game using the specified packs and pack groups.\n    See <https://yagpdb-cc.github.io/fun/cah-groups/newgame> for more information.\n\n    Author: LRitzdorf <https://github.com/LRitzdorf>\n*/}}\n\n{{/* Configurable values */}}\n{{ $packs := "*" }}\n{{ $CAHrole := 123456789 }}\n{{/* End of configurable values */}}\n\n{{ if gt (len .CmdArgs) 0 }}\n    {{ $star := false }}\n    {{ $reqst := cslice }}\n    {{ range .CmdArgs }}\n        {{- $dbResult := dbGet 0 (joinStr "" "group " .) }}\n        {{- if $dbResult }}\n            {{- $reqst = $reqst.Append $dbResult.Value }}\n        {{- else }}\n            {{- $reqst = $reqst.Append . }}\n        {{- end }}\n    {{- end }}\n    {{ $packs = "" }}\n    {{ range $reqst }}\n        {{- if (eq . "*") }}\n            {{- $star = true }}\n        {{- else }}\n            {{- if eq (len (reFindAll (joinStr "" "(" . ")") $packs)) 0 }}\n                {{- $packs = joinStr " " $packs . }}\n           {{- end }}\n        {{- end }}\n    {{- end }}\n    {{ if $star }}\n        {{ $packs = "*" }}\n    {{ end }}\n{{ end }}\n \n{{ $resp := exec "cah create" $packs }}\n{{ if eq (len (reFind "Unknown pack" $resp)) 0 }}\n    {{.User.Mention}} has summoned all the{{mentionRoleID $CAHrole}}s to a new game!\nWe\'ll be using the following pack(s): `{{$packs}}`.\n{{ end }}\n{{ $resp }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LRitzdorf"},"@LRitzdorf"),"."))}d.isMDXComponent=!0}}]);