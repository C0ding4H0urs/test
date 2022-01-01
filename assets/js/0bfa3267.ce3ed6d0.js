"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[341],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Mock Text"},l=void 0,u={unversionedId:"fun/mock",id:"fun/mock",isDocsHomePage:!1,title:"Mock Text",description:"This command mocks text which is given (capitalizes every second letter, small-cases all other letters).",source:"@site/docs/fun/mock.md",sourceDirName:"fun",slug:"/fun/mock",permalink:"/fun/mock",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/mock.md",tags:[],version:"current",frontMatter:{title:"Mock Text"},sidebar:"sidebar",previous:{title:"Meme Generator",permalink:"/fun/meme"},next:{title:"Question of the Day",permalink:"/fun/qotd"}},p=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[{value:"Example",id:"example",children:[]}]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command mocks text which is given (capitalizes every second letter, small-cases all other letters)."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-mock <text>")," - Mocks the text given.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-mock hello world\n")),(0,i.kt)("p",null,"Results in ",(0,i.kt)("inlineCode",{parentName:"p"},"hElLo WoRlD"),"."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/mock.go.tmpl",file:"../../../src/fun/mock.go.tmpl"},'{{/*\n    Mocks text (capitalizes every second letter, lowercases all other letters).\n    See <https://yagpdb-cc.github.io/fun/mock> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ with .StrippedMsg }}\n    {{ $out := "" }}\n    {{ range $k, $v := split (lower .) "" }}\n        {{- if mod $k 2 }} {{- $out = joinStr "" $out (upper $v) }}\n        {{- else }} {{- $out = joinStr "" $out $v }} {{- end -}}\n    {{ end }}\n    {{ sendMessage nil (cembed\n        "description" $out\n        "thumbnail" (sdict "url" "https://cdn.discordapp.com/emojis/316315555453730817.png?v=1")\n        "color" 16776960\n    ) }}\n{{ else }}\n    Please provide some text for me to mock.\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}m.isMDXComponent=!0}}]);