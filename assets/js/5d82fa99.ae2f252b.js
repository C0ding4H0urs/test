"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8128],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(a),p=r,v=g["".concat(s,".").concat(p)]||g[p]||d[p]||i;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},635:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=a(3117),r=(a(7294),a(3905));const i={title:"Reaction Handler"},o=void 0,c={unversionedId:"giveaway/basic/reaction-handler",id:"giveaway/basic/reaction-handler",title:"Reaction Handler",description:"This command handles reactions for the basic giveaway package.",source:"@site/docs/giveaway/basic/reaction-handler.md",sourceDirName:"giveaway/basic",slug:"/giveaway/basic/reaction-handler",permalink:"/giveaway/basic/reaction-handler",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/giveaway/basic/reaction-handler.md",tags:[],version:"current",frontMatter:{title:"Reaction Handler"},sidebar:"sidebar",previous:{title:"Main CC",permalink:"/giveaway/basic/main-cc"},next:{title:"Overview",permalink:"/giveaway/basic-v2/overview"}},s={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command handles reactions for the basic giveaway package."),(0,r.kt)("p",null,"For more information about this particular version of the giveaway package, see ",(0,r.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,r.kt)("h2",{id:"trigger"},"Trigger"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Reaction"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Added + Removed Reactions")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"overview/#configuration"},"giveaway package overview")," for more information about how to configure this command."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/giveaway/basic/reaction_handler.go.tmpl",file:"../../../../src/giveaway/basic/reaction_handler.go.tmpl"},'{{/* \n    Handles reactions for the giveaway system.\n    See <https://yagpdb-cc.github.io/giveaway/basic/reaction-handler> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{/* Configurable values */}}\n{{ $giveawayEmoji := `\ud83c\udf89` }}\n{{/* End of configurable values */}}\n\n{{ $data := sdict }}\n\n{{/* if reaction emoji matches giveaway emoji and user reacting is not a bot , proceed */}}\n{{ if and (eq .Reaction.Emoji.Name $giveawayEmoji) (not .User.Bot ) }}\n    {{/* fetching active giveaways data */}}\n    {{ with (dbGet 7777 "giveaway_active").Value }}{{ $data = sdict . }}{{ end }}\n    {{$giveawayData := $data.Get (joinStr "" .Reaction.ChannelID .Reaction.MessageID)}}\n\n    {{/* if current message is an active giveaway announcement message */}}\n    {{ if $giveawayData }}\n        {{ $giveawayData = sdict $giveawayData }}\n        {{/* Regex for the User ID */}}\n        {{$IDregex:=print .User.ID ","}}\n        \n        {{if .ReactionAdded}}\n            {{$amount := 1}}\n            {{/* If user is somwhow already present in list, dont increase count but update position in list */}}\n            {{if reFind $IDregex $giveawayData.listID}}\n                {{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}\n                {{$amount = 0}}\n            {{end}}\n            {{$giveawayData.Set "listID" (print $giveawayData.listID  $IDregex)}}\n            {{$giveawayData.Set "count" (add $giveawayData.count $amount)}}\n        {{else}}\n            {{/* if reaction was removed reduce count by 1 and remove user ID from ID list if user ID is present in list. Else do nothing. */}}\n            {{if reFind $IDregex $giveawayData.listID}}\n                {{$giveawayData.Set "listID" (reReplace $IDregex $giveawayData.listID "")}}\n                {{$giveawayData.Set "count" (add $giveawayData.count -1)}}    \n            {{end}}\n        {{end}}\n                    \n        {{/* update active giveaway database entry */}}\n        {{ $data.Set (joinStr ""  .Reaction.ChannelID .Reaction.MessageID) $giveawayData }}\n        {{ dbSet 7777 "giveaway_active" $data }}\n    {{ end }}\n{{ end }}\n')),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"This custom command was written by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}d.isMDXComponent=!0}}]);