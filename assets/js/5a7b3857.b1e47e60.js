"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2640],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},188:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Get Username Color"},l=void 0,s={unversionedId:"code-snippets/get-username-color",id:"code-snippets/get-username-color",isDocsHomePage:!1,title:"Get Username Color",description:"This code snippet gets the display colour of a member.",source:"@site/docs/code-snippets/get-username-color.md",sourceDirName:"code-snippets",slug:"/code-snippets/get-username-color",permalink:"/code-snippets/get-username-color",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/code-snippets/get-username-color.md",tags:[],version:"current",frontMatter:{title:"Get Username Color"},sidebar:"sidebar",previous:{title:"Binary Search",permalink:"/code-snippets/binary-search"},next:{title:"Ordinal",permalink:"/code-snippets/ordinal"}},p=[{value:"Code",id:"code",children:[]},{value:"Usage",id:"usage",children:[{value:"Getting the color for a member other than the context member",id:"getting-the-color-for-a-member-other-than-the-context-member",children:[]}]},{value:"Author",id:"author",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This code snippet gets the display colour of a member."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/code_snippets/get_username_color.go.tmpl",file:"../../../src/code_snippets/get_username_color.go.tmpl"},"{{/*\n    Gets the display colour for the current member.\n    See <https://yagpdb-cc.github.io/code-snippets/get-username-color> for more information.\n\n    Author: buthed010203 <https://github.com/buthed010203>\n*/}}\n\n{{$col := 16777215}}\n{{$p := 0}}\n{{$r := .Member.Roles}}\n{{range .Guild.Roles}}\n    {{- if and (in $r .ID) (.Color) (lt $p .Position)}}\n        {{- $p = .Position}}\n        {{- $col = .Color}}\n    {{- end -}}\n{{end}}\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First, copy the above snippet just above where you want to get the username color. Then, you can simply reference ",(0,a.kt)("inlineCode",{parentName:"p"},"$col"),", which will be the decimal display color of the member."),(0,a.kt)("p",null,"For example, the following code uses it for an embed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{4}","{4}":!0},'{{/* code snippet here */}}\n{{sendMessage nil (cembed\n    "title" (print "Hello " .User.Username "!")\n    "color" $col\n)}}\n')),(0,a.kt)("h3",{id:"getting-the-color-for-a-member-other-than-the-context-member"},"Getting the color for a member other than the context member"),(0,a.kt)("p",null,"Let's say you want to get the color of a member that isn't the member that triggered the command. All you would have to change is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{4}","{4}":!0},"{{/* rest of code snippet */}}\n{{$p := 0}}\n- {{$r := .Member.Roles}}\n+ {{$r := $member.Roles}}\n{{range .Guild.Roles}}\n{{/* rest of code snippet */}}\n")),(0,a.kt)("p",null,"This would get the display color of ",(0,a.kt)("inlineCode",{parentName:"p"},"$member"),", rather than the triggering member."),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This code snippet was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buthed010203"},"@buthed010203"),"."))}m.isMDXComponent=!0}}]);