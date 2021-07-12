(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8645:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],s={title:"Fun Info"},c=void 0,u={unversionedId:"fun/funinfo",id:"fun/funinfo",isDocsHomePage:!1,title:"Fun Info",description:"This command shows statistics connected to a user for the counting, qotd and x-word-story systems.",source:"@site/docs/fun/funinfo.md",sourceDirName:"fun",slug:"/fun/funinfo",permalink:"/fun/funinfo",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/funinfo.md",version:"current",frontMatter:{title:"Fun Info"},sidebar:"sidebar",previous:{title:"Duck Image Generator",permalink:"/fun/duck"},next:{title:"Guess the Number",permalink:"/fun/guess-the-number"}},l=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],d={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command shows statistics connected to a user for the ",(0,i.kt)("a",{parentName:"p",href:"counting"},"counting"),", ",(0,i.kt)("a",{parentName:"p",href:"qotd"},"qotd")," and ",(0,i.kt)("a",{parentName:"p",href:"x-word-story"},"x-word-story")," systems."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"funinfo")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-funinfo")," - Shows statistics for the triggering user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-funinfo <user>")," - Shows statistics for the user provided.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$cooldown"),(0,i.kt)("br",null),"\nCommand cooldown in seconds. Set to 0 to disable cooldown.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$colour"),(0,i.kt)("br",null),"\nColour of the embed, as a decimal."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To use hex for the colour, simply append a ",(0,i.kt)("inlineCode",{parentName:"p"},"0x")," in front, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"0xFF0FF"),"."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../src/fun/funinfo.go.tmpl",file:"../../../src/fun/funinfo.go.tmpl"},'{{/*\n    Shows statistics connected to a user for the counting, qotd and x-word-story systems.\n    See <https://yagpdb-cc.github.io/fun/funinfo> for more information.\n    \n    Author: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* Configurable values */}}\n{{ $cooldown := 20 }}\n{{ $colour := 16734296 }}\n{{/* End of configurable values */}}\n\n{{/* CODE - Don\'t edit this part */}}\n{{ if dbGet .User.ID "funinfo" }}\n  {{ addReactions "\u23f3" }}\n{{ else }}\n  {{ $e := sdict "color" $colour }}\n  {{ $u := str .User.ID }}\n  {{ if eq (len .Args) 2 }}\n    {{ $u = index .Args 1 }}\n    {{ if .Message.Mentions }}{{ $u = str (index .Message.Mentions 0).ID }}{{ end }}\n  {{ end }}\n\n  {{ $c := sdict }}{{ with (dbGet 20 "counting").Value }}{{ $c = sdict . }}{{ end }}\n  {{ if $c }}\n    {{ $v := 0 }}{{ with ($c.Get $u) }}{{ $v = . }}{{ end }}\n    {{ $e.Set "description" (printf "\ud83d\udd22 Counts: `%d`" $v) }}\n  {{ end }}\n\n  {{ $q := sdict }}{{ with (dbGet 20 "qotd").Value }}{{ $q = sdict . }}{{ end }}\n  {{ if $q }}\n    {{ $v := 0 }}{{ with ($q.Get $u) }}{{ $v = .n }}{{ end }}\n    {{ $e.Set "description" (printf "%s\\n\u2753 QOTD answers: `%d`" $e.description $v) }}\n  {{ end }}\n\n  {{ $s := sdict }}{{ with (dbGet 20 "story-channel").Value }}{{ $s = sdict . }}{{ end }}\n  {{ if $s }}\n    {{ $v := 0 }}{{ with ($s.Get $u) }}{{ $v = . }}{{ end }}\n    {{ $e.Set "description" (printf "%s\\n\ud83d\udcd6 Story lines: `%d`" $e.description $v) }}\n  {{ end }}\n\n  {{ if not (or $c $q $s) }}\n    {{ $e.Set "title" "\u274c No data found!"}}\n  {{ else if $n := getMember (toInt $u) }}\n    {{ $e.Set "title" (printf "\ud83d\udc8e Funinfo for: *%s*" $n.User.String) }}\n    {{ $e.Set "color" 15344584 }}\n  {{ else }}\n    {{ $e.Set "title" "\u274c Member not found!" }}\n    {{ $e.Del "description" }}\n  {{ end }}\n\n  {{ sendMessage nil (cembed $e) }}\n\n  {{ if $cooldown }}{{ dbSetExpire .User.ID "funinfo" 1 $cooldown }}{{ end }}\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpecialEliteSNP"},"@SpecialEliteSNP"),"."))}p.isMDXComponent=!0}}]);