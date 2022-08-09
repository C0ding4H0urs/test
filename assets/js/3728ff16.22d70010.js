"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const i={title:"Random Color"},a=void 0,l={unversionedId:"utilities/random-color",id:"utilities/random-color",title:"Random Color",description:"This command generates and displays information about a random color.",source:"@site/docs/utilities/random-color.md",sourceDirName:"utilities",slug:"/utilities/random-color",permalink:"/utilities/random-color",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/random-color.md",tags:[],version:"current",frontMatter:{title:"Random Color"},sidebar:"sidebar",previous:{title:"JSON Converter",permalink:"/utilities/json-converter"},next:{title:"Reaction Logs",permalink:"/utilities/reaction-logs"}},c={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command generates and displays information about a random color."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(rand(om)?-?color)(\\s+|\\z)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-randcolor")," - Generates a random color.")),(0,o.kt)("admonition",{title:"Aliases",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"randcolor"),", you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"randomcolor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"random-color"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"rand-color"),".")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/random_color.go.tmpl",file:"../../../src/utilities/random_color.go.tmpl"},'{{/*\n    Displays a random color.\n    See <https://yagpdb-cc.github.io/utilities/random-color> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $dec := randInt 0 16777216 }}\n{{ $hex := printf "%06x" $dec }}\n{{ sendMessage nil (cembed\n    "title" "\u276f Random Color"\n    "color" $dec\n    "description" (printf "\u276f **Decimal:** %d\\n\u276f **Hex:** #%s" $dec $hex)\n    "thumbnail" (sdict "url" (printf "https://dummyimage.com/400x400/%s/%s" $hex $hex))\n) }}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}p.isMDXComponent=!0}}]);