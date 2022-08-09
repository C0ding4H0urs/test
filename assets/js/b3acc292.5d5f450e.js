"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(t),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4323:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(3117),o=(t(7294),t(3905));const i={title:"Fun Info"},a=void 0,u={unversionedId:"fun/funinfo",id:"fun/funinfo",title:"Fun Info",description:"This command shows statistics connected to a user for the counting, qotd and x-word-story systems.",source:"@site/docs/fun/funinfo.md",sourceDirName:"fun",slug:"/fun/funinfo",permalink:"/fun/funinfo",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/funinfo.md",tags:[],version:"current",frontMatter:{title:"Fun Info"},sidebar:"sidebar",previous:{title:"Duck Image Generator",permalink:"/fun/duck"},next:{title:"Guess the Number",permalink:"/fun/guess-the-number"}},s={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command shows statistics connected to a user for the ",(0,o.kt)("a",{parentName:"p",href:"counting"},"counting"),", ",(0,o.kt)("a",{parentName:"p",href:"qotd"},"qotd")," and ",(0,o.kt)("a",{parentName:"p",href:"x-word-story"},"x-word-story")," systems."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Command"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"funinfo")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-funinfo")," - Shows statistics for the triggering user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-funinfo <user>")," - Shows statistics for the user provided.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$cooldown"),(0,o.kt)("br",null),"\nCommand cooldown in seconds. Set to 0 to disable cooldown.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"$colour"),(0,o.kt)("br",null),"\nColour of the embed, as a decimal."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To use hex for the colour, simply append a ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," in front, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0xFF0FF"),".")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/funinfo.go.tmpl",file:"../../../src/fun/funinfo.go.tmpl"},'{{/*\n    Shows statistics connected to a user for the counting, qotd and x-word-story systems.\n    See <https://yagpdb-cc.github.io/fun/funinfo> for more information.\n    \n    Author: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* Configurable values */}}\n{{ $cooldown := 20 }}\n{{ $colour := 16734296 }}\n{{/* End of configurable values */}}\n\n{{/* CODE - Don\'t edit this part */}}\n{{ if dbGet .User.ID "funinfo" }}\n    {{ addReactions "\u23f3" }}\n{{ else }}\n    {{ $e := sdict "color" $colour }}\n    {{ $u := str .User.ID }}\n    {{ if eq (len .Args) 2 }}\n        {{ $u = index .Args 1 }}\n        {{ if .Message.Mentions }}{{ $u = str (index .Message.Mentions 0).ID }}{{ end }}\n    {{ end }}\n\n    {{ $c := sdict }}{{ with (dbGet 20 "counting").Value }}{{ $c = sdict . }}{{ end }}\n    {{ if $c }}\n        {{ $v := 0 }}{{ with ($c.Get $u) }}{{ $v = . }}{{ end }}\n        {{ $e.Set "description" (printf "\ud83d\udd22 Counts: `%d`" $v) }}\n    {{ end }}\n\n    {{ $q := sdict }}{{ with (dbGet 20 "qotd").Value }}{{ $q = sdict . }}{{ end }}\n    {{ if $q }}\n        {{ $v := 0 }}{{ with ($q.Get $u) }}{{ $v = .n }}{{ end }}\n        {{ $e.Set "description" (printf "%s\\n\u2753 QOTD answers: `%d`" $e.description $v) }}\n    {{ end }}\n\n    {{ $s := sdict }}{{ with (dbGet 20 "story-channel").Value }}{{ $s = sdict . }}{{ end }}\n    {{ if $s }}\n        {{ $v := 0 }}{{ with ($s.Get $u) }}{{ $v = . }}{{ end }}\n        {{ $e.Set "description" (printf "%s\\n\ud83d\udcd6 Story lines: `%d`" $e.description $v) }}\n    {{ end }}\n\n    {{ if not (or $c $q $s) }}\n        {{ $e.Set "title" "\u274c No data found!"}}\n    {{ else if $n := getMember (toInt $u) }}\n        {{ $e.Set "title" (printf "\ud83d\udc8e Funinfo for: *%s*" $n.User.String) }}\n        {{ $e.Set "color" 15344584 }}\n    {{ else }}\n        {{ $e.Set "title" "\u274c Member not found!" }}\n        {{ $e.Del "description" }}\n    {{ end }}\n\n    {{ sendMessage nil (cembed $e) }}\n\n    {{ if $cooldown }}{{ dbSetExpire .User.ID "funinfo" 1 $cooldown }}{{ end }}\n{{ end }}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SpecialEliteSNP"},"@SpecialEliteSNP"),"."))}d.isMDXComponent=!0}}]);