"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8020],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={title:"Overview"},i=void 0,l={unversionedId:"afk/overview",id:"afk/overview",title:"Overview",description:"Features",source:"@site/docs/afk/overview.md",sourceDirName:"afk",slug:"/afk/overview",permalink:"/afk/overview",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/afk/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"sidebar",previous:{title:"Adding Custom Commands",permalink:"/adding-ccs"},next:{title:"Leave Feed",permalink:"/afk/leave-feed"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Main Command",id:"main-command",level:3},{value:"Disable removeAfkOnMessage",id:"disable-removeafkonmessage",level:4},{value:"Leave Feed",id:"leave-feed",level:3},{value:"Author",id:"author",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set AFK status with optional duration"),(0,r.kt)("li",{parentName:"ul"},"Notification in chat when an AFK member was mentioned",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Estimated time of arrival, when set")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"As usual, there are instructions describing where to put the script and which trigger to use on the pages corresponding to the individual commands. Additionally, we've documented how and where to add these scripts down below."),(0,r.kt)("h3",{id:"main-command"},"Main Command"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("a",{parentName:"p",href:"main-cc"},"main command")," as a new custom command. The trigger is a RegEx trigger type with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".*"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're short on CC space, you can append the code to your already existing ",(0,r.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".*")," trigger. Please do so only once, though.")),(0,r.kt)("p",null,"Now take your time to read through the leading comment and decide if you want to remove the AFK status of users, once they send a message. If so, leave it as is, otherwise set the config variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", as follows:"),(0,r.kt)("h4",{id:"disable-removeafkonmessage"},"Disable removeAfkOnMessage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{2}","{2}":!0},"{{/* Configuration values */}}\n{{ $removeAfkOnMessage := false}}\n{{/* End of configuration values */}}\n")),(0,r.kt)("h3",{id:"leave-feed"},"Leave Feed"),(0,r.kt)("p",null,"This is entirely optional, however generally encouraged to keep your custom command database clean. Add the code ",(0,r.kt)("a",{parentName:"p",href:"leave-feed"},"here")," to your leave message, which you can find like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to your control panel"),(0,r.kt)("li",{parentName:"ul"},"Open up the Feeds & Notifications tab"),(0,r.kt)("li",{parentName:"ul"},"Click on General"),(0,r.kt)("li",{parentName:"ul"},"Locate the leave message")),(0,r.kt)("p",null,"Once you've found it, just append the code at the end - don't forget to save!"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The AFK system is now set up and ready to use!")),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"This custom command system was written by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DaviiD1337"},"@DaviiD1337"),"."))}d.isMDXComponent=!0}}]);