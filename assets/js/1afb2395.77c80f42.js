(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8645],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2570:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:10,title:"Maze Generator"},c=void 0,u={unversionedId:"fun/maze",id:"fun/maze",isDocsHomePage:!1,title:"Maze Generator",description:"This command sends a maze with an optional amount crossings/bridges. It also includes a link to a downloadable solution and intuitive execCC support.",source:"@site/docs/fun/maze.md",sourceDirName:"fun",slug:"/fun/maze",permalink:"/fun/maze",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/maze.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Maze Generator"},sidebar:"tutorialSidebar",previous:{title:"Guess the Number",permalink:"/fun/guess-the-number"},next:{title:"Meme Generator",permalink:"/fun/meme"}},l=[],m={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command sends a maze with an optional amount crossings/bridges. It also includes a link to a downloadable solution and intuitive ",(0,a.kt)("inlineCode",{parentName:"p"},"execCC")," support."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"maze")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-maze <cross amount>")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"<cross amount>")," is an optional argument on how many bridges/crossings you want"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n     Made by Crenshaw#7860\n        This command sends a maze with an optional amount crossings/bridges. It also includes a link to a downloadable solution and .ExecData support.\n     Usage: `-maze <cross amount>` <cross amount> is an optional argument on how many bridges/crossings you want\n\n      Recommended Trigger: Command trigger with trigger `maze`\n*/}}\n\n{{/* No touchy touchy */}}\n{{ $seed := randInt 100000000 999999999 }}\n{{ $embed := sdict "thumbnail" (sdict "url" (.User.AvatarURL "128")) "title" (title "maze") "description" (joinStr "" "Requested by " .User.String " -") "image" (sdict "url" nil) "color" 123 }}\n{{ $crossings := 0 }}\n{{ if .CmdArgs }}\n    {{ $crossings = (index .CmdArgs 0) }}\n{{ else if .ExecData }}\n    {{$crossings = .ExecData }}\n{{ end }}\n{{ $maze := joinStr "" "http://maze5.de/cgi-bin/maze?sample=1&type=4&rows=12&columns=12&crossings=" $crossings "&seed=" $seed "&algorithm=backtracker&algorithm=0.5&foreground=%23ffffff&background=%2336393f&bordersize=16&cellsize=32&linewidth=2.5&format=png" }}\n{{ $embed.image.Set "url" $maze }}\n{{ $maze:= (joinStr "" $maze "&solution=true") }}\n{{ $embed.Set "description" (print $embed.description " [Solution](" $maze ")") }}\n{{ sendMessage nil (cembed $embed) }}\n')))}p.isMDXComponent=!0}}]);