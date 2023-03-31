"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8645],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={title:"Maze Generator"},i=void 0,s={unversionedId:"fun/maze",id:"fun/maze",title:"Maze Generator",description:"This command generates a maze image with an optional number of crossings/bridges. It also includes a link to a downloadable solution and execCC support.",source:"@site/docs/fun/maze.md",sourceDirName:"fun",slug:"/fun/maze",permalink:"/fun/maze",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/maze.md",tags:[],version:"current",frontMatter:{title:"Maze Generator"},sidebar:"sidebar",previous:{title:"Guess the Number",permalink:"/fun/guess-the-number"},next:{title:"Meme Generator",permalink:"/fun/meme"}},l={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command generates a maze image with an optional number of crossings/bridges. It also includes a link to a downloadable solution and ",(0,a.kt)("inlineCode",{parentName:"p"},"execCC")," support."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Command"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"maze")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-maze")," - Generates a maze with 0 crossings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-maze <crossings>")," - Generates a maze with the given number of crossings.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"execCC")," usage"),(0,a.kt)("p",{parentName:"admonition"},"To trigger the command via execCC, just call the CC with data set to the number of crossings.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/maze.go.tmpl",file:"../../../src/fun/maze.go.tmpl"},'{{/*\n    Sends a maze with an optional amount crossings/bridges.\n    See <https://yagpdb-cc.github.io/fun/maze> for more information.\n\n    Author: Crenshaw <https://github.com/Crenshaw1312>\n*/}}\n\n{{/* No touchy touchy */}}\n{{ $seed := randInt 100000000 999999999 }}\n{{ $embed := sdict "thumbnail" (sdict "url" (.User.AvatarURL "128")) "title" (title "maze") "description" (joinStr "" "Requested by " .User.String " -") "image" (sdict "url" nil) "color" 123 }}\n{{ $crossings := 0 }}\n{{ if .CmdArgs }}\n    {{ $crossings = (index .CmdArgs 0) }}\n{{ else if .ExecData }}\n    {{$crossings = .ExecData }}\n{{ end }}\n{{ $maze := joinStr "" "http://maze5.de/cgi-bin/maze?sample=1&type=4&rows=12&columns=12&crossings=" $crossings "&seed=" $seed "&algorithm=backtracker&algorithm=0.5&foreground=%23ffffff&background=%2336393f&bordersize=16&cellsize=32&linewidth=2.5&format=png" }}\n{{ $embed.image.Set "url" $maze }}\n{{ $maze:= (joinStr "" $maze "&solution=true") }}\n{{ $embed.Set "description" (print $embed.description " [Solution](" $maze ")") }}\n{{ sendMessage nil (cembed $embed) }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Crenshaw1312"},"@Crenshaw1312"),"."))}p.isMDXComponent=!0}}]);