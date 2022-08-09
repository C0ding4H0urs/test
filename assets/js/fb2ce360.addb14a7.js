"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1143],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={title:"Leave Feed"},i=void 0,l={unversionedId:"afk/leave-feed",id:"afk/leave-feed",title:"Leave Feed",description:"This code is optional - if you don't want AFK messages to be removed when users leave, just don't add it.",source:"@site/docs/afk/leave-feed.md",sourceDirName:"afk",slug:"/afk/leave-feed",permalink:"/afk/leave-feed",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/afk/leave-feed.md",tags:[],version:"current",frontMatter:{title:"Leave Feed"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/afk/overview"},next:{title:"Main CC",permalink:"/afk/main-cc"}},s={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This code is optional - if you don't want AFK messages to be removed when users leave, just don't add it.\nThe other components of the AFK system will work fine without it.")),(0,o.kt)("p",null,"This code removes the AFK messages of users who have left the server, to keep your database usage low."),(0,o.kt)("p",null,"For more information about the AFK system, please see ",(0,o.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,"This is ",(0,o.kt)("em",{parentName:"p"},"not")," a custom command! Rather, it's meant to be added to your ",(0,o.kt)("strong",{parentName:"p"},"Leave Feed"),"."),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/afk/leave_feed.go.tmpl",file:"../../../src/afk/leave_feed.go.tmpl"},'{{/*\n    Clears the AFK status for users who leave the server.\n    See <https://yagpdb-cc.github.io/afk/leave-feed> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ dbDel .User.ID "afk" }}\n{{/* If you already have a leave message, you can put it here. */}}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This code was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}p.isMDXComponent=!0}}]);