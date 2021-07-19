(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6749],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8694:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Snowflake to Time"},c=void 0,l={unversionedId:"code-snippets/snowflake2time",id:"code-snippets/snowflake2time",isDocsHomePage:!1,title:"Snowflake to Time",description:"This code snippet extracts the underlying time of snowflakes (Discord IDs).",source:"@site/docs/code-snippets/snowflake2time.md",sourceDirName:"code-snippets",slug:"/code-snippets/snowflake2time",permalink:"/code-snippets/snowflake2time",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/code-snippets/snowflake2time.md",version:"current",frontMatter:{title:"Snowflake to Time"},sidebar:"sidebar",previous:{title:"Selection Sort",permalink:"/code-snippets/selection-sort"},next:{title:"String to Time",permalink:"/code-snippets/string2time"}},p=[{value:"Code",id:"code",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Author",id:"author",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This code snippet extracts the underlying time of snowflakes (Discord IDs)."),(0,a.kt)("p",null,"Sometimes, you want to get the time that, say, a user created their account / a channel was created. If you look in the documentation, that's not something that is accessible in templates. However, most Discord structures have an ID. Those IDs all have one thing in common - they use the ",(0,a.kt)("em",{parentName:"p"},"snowflake")," format. This format contains a timestamp, which you can extract to get the time when it was created."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/reference#snowflakes"},"this section")," on the Discord developer documentation."))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/code_snippets/snowflake2time.go.tmpl",file:"../../../src/code_snippets/snowflake2time.go.tmpl"},"{{/*\n    Extracts the time that a given Discord snowflake was created.\n    See <https://yagpdb-cc.github.io/code-snippets/snowflake2time> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{/* Let $snowflake be the ID. */}}\n{{ $snowflake := .User.ID }}\n\n{{/* snowflake >> 22 can be evaluated as snowflake / 2 ^ 22. 2 ^ 22 is 4194304. */}}\n{{ $time := div $snowflake 4194304 }}\n\n{{/* Multiply by 10^6 to convert milliseconds to nanoseconds */}}\n{{ $time = mult $time 1000000 }}\n\n{{/* Convert to duration so we can pass it as an argument to time.Add, which expects a duration and returns a time */}}\n{{ $time = toDuration $time }}\n\n{{ $time := .DiscordEpoch.Add $time }}\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First, add the code snippet above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl"},"{{/* code snippet goes here */}}\n")),(0,a.kt)("p",null,"Next, change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"$snowflake")," to your input value. Say we wanted to use ",(0,a.kt)("inlineCode",{parentName:"p"},".Guild.ID")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},".User.ID"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{3}","{3}":!0},"{{/* Let $snowflake be the ID. }}\n- {{ $snowflake := .User.ID }}\n+ {{ $snowflake := .Guild.ID }}\n{{/* rest of code snippet goes here */}}\n")),(0,a.kt)("p",null,"You can now access the time when ",(0,a.kt)("inlineCode",{parentName:"p"},"$snowflake")," was created using ",(0,a.kt)("inlineCode",{parentName:"p"},"$time"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{2}","{2}":!0},"{{/* code snippet goes here */}}\nTime `$snowflake` was created: {{$time}}\n")),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This code snippet was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}d.isMDXComponent=!0}}]);