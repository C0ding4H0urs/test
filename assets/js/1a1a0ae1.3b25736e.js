"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5911],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Bookmark Message"},l=void 0,c={unversionedId:"utilities/bookmark",id:"utilities/bookmark",isDocsHomePage:!1,title:"Bookmark Message",description:"This command functions similar to the reminder command, but sends a DM instantly.",source:"@site/docs/utilities/bookmark.md",sourceDirName:"utilities",slug:"/utilities/bookmark",permalink:"/utilities/bookmark",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/bookmark.md",tags:[],version:"current",frontMatter:{title:"Bookmark Message"},sidebar:"sidebar",previous:{title:"Big Emoji v2",permalink:"/utilities/big-emoji-v2"},next:{title:"Custom Command to File",permalink:"/utilities/cc2file"}},u=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command functions similar to the reminder command, but sends a DM instantly.\nAlternatively, one could see it as a private pin command."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A(?:-\\s?|<@!?204255221017214977>\\s*)b(?:ook)?m(?:ark)?(?:\\s+|\\z)"),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-bookmark <message>")," - Sends a nicely formatted note with the message provided in DM.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Aliases")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"bookmark"),", you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"bm"),"."))),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/bookmark.go.tmpl",file:"../../../src/utilities/bookmark.go.tmpl"},'{{/*\n    Allows you to bookmark messages.\n    See <https://yagpdb-cc.github.io/utilities/bookmark> for more information.\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n*/}}\n\n{{/* Actual Code - Only change this when you know what you are doing */}}\n{{$args := parseArgs 1 "```Bookmark <Message:Text>```\\nNot enough arguments passed." (carg "string" "Message")}}\n{{$note := $args.Get 0}}\n{{$link := (printf "https://discord.com/channels/%d/%d/%d" .Guild.ID .Channel.ID .Message.ID)}}\n{{$embed := (cembed\n    "title" "Bookmark"\n    "description" "You asked me to bookmark this for you:"\n    "fields" (cslice\n        (sdict "name" "Note" "value" (print $note) "inline" true)\n        (sdict "name" "Info" "value" (printf "Channel: <#%d>\\nSource: [Jump!](%s)"  .Channel.ID $link) "inline" true)\n    )\n)}}\n{{sendDM $embed}}\n{{addReactions "\ud83d\udceb"}}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/l-zeuch"},"@l-zeuch"),"."))}p.isMDXComponent=!0}}]);