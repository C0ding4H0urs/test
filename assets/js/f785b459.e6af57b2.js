"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5159],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),i=(n(7294),n(3905));const o={title:"Reaction Logs"},a=void 0,l={unversionedId:"utilities/reaction-logs",id:"utilities/reaction-logs",title:"Reaction Logs",description:"This command logs reactions.",source:"@site/docs/utilities/reaction-logs.md",sourceDirName:"utilities",slug:"/utilities/reaction-logs",permalink:"/utilities/reaction-logs",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/reaction-logs.md",tags:[],version:"current",frontMatter:{title:"Reaction Logs"},sidebar:"sidebar",previous:{title:"Random Color",permalink:"/utilities/random-color"},next:{title:"Reaction Bookmark",permalink:"/utilities/reactionbookmark"}},c={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command logs reactions."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Added + removed reactions")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"li"},"$logging_channel_id"),(0,i.kt)("br",null),"\nID of the channel to log reactions to.")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/reaction_logs.go.tmpl",file:"../../../src/utilities/reaction_logs.go.tmpl"},'{{/*\n    Logs reactions in a channel.\n    See <https://yagpdb-cc.github.io/utilities/reaction-logs> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n\n{{/* Configurable values */}}\n{{$logging_channel_id := .Channel.ID}}\n{{/* End of configurable values */}}\n\n{{/* Actual CODE */}}\n{{$reaction_url := ""}}\n\n{{with .Reaction.Emoji.ID}}\n    {{$ext := ".png"}}{{if $.Reaction.Emoji.Animated}}{{$ext = ".gif"}}{{end}}\n    {{$reaction_url = printf "https://cdn.discordapp.com/emojis/%d%s" . $ext}}\n{{else}}\n    {{$emoji_U := ""}}\n    {{- range toRune .Reaction.Emoji.Name }}\n        {{- $emoji_U = joinStr "-" $emoji_U (printf "%04x" .) }}\n    {{- end -}}\n    {{ $reaction_url = print "https://raw.githubusercontent.com/iamcal/emoji-data/master/img-google-136/" $emoji_U ".png" }}\n{{end}}\n{{$addrem := "`Removed`"}}{{if .ReactionAdded}}{{$addrem = "`Added`"}}{{end}}\n\n{{sendMessage $logging_channel_id (cembed "description" (print "**Reaction:** "  $addrem "\\n**By:**[ " .User "](https://discord.com/users/" .User.ID ")") "color" 0xFF0000  \n"fields" (cslice (sdict "name" "Message location: " "value" (joinStr "" "[#" .Channel.Name "](https://discordapp.com/channels/" .Guild.ID "/" .Channel.ID "/" .ReactionMessage.ID ")") "inline" false))\n"thumbnail" (sdict "url" $reaction_url)\n)}}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}p.isMDXComponent=!0}}]);