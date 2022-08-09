"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2720],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3379:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const i={title:"View Channel Info"},o=void 0,l={unversionedId:"info/channel",id:"info/channel",title:"View Channel Info",description:"This command views information about channels, defaulting to the current channel.",source:"@site/docs/info/channel.md",sourceDirName:"info",slug:"/info/channel",permalink:"/info/channel",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/info/channel.md",tags:[],version:"current",frontMatter:{title:"View Channel Info"},sidebar:"sidebar",previous:{title:"View Avatar",permalink:"/info/avatar"},next:{title:"View Server Info",permalink:"/info/server"}},c={},u=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command views information about channels, defaulting to the current channel."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(channel)(-?info)?(\\s+|\\z)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-channel")," - Views information about the current channel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-channel <channel>")," - Views information about the channel provided.")),(0,a.kt)("admonition",{title:"Aliases",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"channel"),", you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"channelinfo"),".")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/info/channel.go.tmpl",file:"../../../src/info/channel.go.tmpl"},'{{/*\n    Views information about a given channel / the current channel.\n    See <https://yagpdb-cc.github.io/info/channel> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $channel := .Channel }}\n{{ $args := parseArgs 0 "**Syntax:** -channel [channel]" (carg "channel" "channel") }}\n{{ if $args.IsSet 0 }}\n    {{ $channel = $args.Get 0 }}\n{{ end }}\n\n{{ $types := cslice "Text" "DM" "Voice" "Group DM" "Category" "News" "Store" }}\n{{ $nsfw := "No" }}\n{{ $parent := "*None set*" }}\n{{ if $channel.NSFW }} {{ $nsfw = "Yes" }} {{ end }}\n{{ with $channel.ParentID }} {{ $parent = printf "<#%d>" . }} {{ end }}\n{{ $createdAt := div $channel.ID 4194304 | add 1420070400000 | mult 1000000 | toDuration | (newDate 1970 1 1 0 0 0).Add }}\n{{ sendMessage nil (cembed\n    "title" (printf "\u276f Info for #%s" $channel.Name)\n    "fields" (cslice\n        (sdict "name" "\u276f ID" "value" (str $channel.ID) "inline" true)\n        (sdict "name" "\u276f Topic" "value" (or $channel.Topic "*None set*") "inline" true)\n        (sdict "name" "\u276f Parent Channel" "value" $parent "inline" true)\n        (sdict "name" "\u276f NSFW" "value" $nsfw "inline" true)\n        (sdict "name" "\u276f Position" "value" (str (add $channel.Position 1)) "inline" true)\n        (sdict "name" "\u276f Type" "value" (index $types $channel.Type) "inline" true)\n    )\n    "color" 14232643\n    "footer" (sdict "text" "Created at")\n    "timestamp" $createdAt\n) }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}p.isMDXComponent=!0}}]);