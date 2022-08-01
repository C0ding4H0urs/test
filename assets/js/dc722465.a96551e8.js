"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1056],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(t),p=r,g=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return t?o.createElement(g,s(s({ref:n},d),{},{components:t})):o.createElement(g,s({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},591:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(7294),r=["Administrator","ManageServer","ReadMessages","SendMessages","SendTTSMessages","ManageMessages","EmbedLinks","AttachFiles","ReadMessageHistory","MentionEveryone","VoiceConnect","VoiceSpeak","VoiceMuteMembers","VoiceDeafenMembers","VoiceMoveMembers","VoiceUseVAD","ManageNicknames","ManageRoles","ManageWebhooks","ManageEmojis","CreateInstantInvite","KickMembers","BanMembers","ManageChannels","AddReactions","ViewAuditLogs"],a=function(){return o.createElement("details",null,o.createElement("summary",null,o.createElement("strong",null,"Available permissions:")),o.createElement("ul",null,r.map((function(e){return o.createElement("li",null,o.createElement("code",null,e))}))))}},4915:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=t(591),i=["components"],l={title:"Slowmode"},m=void 0,d={unversionedId:"moderation/slowmode",id:"moderation/slowmode",isDocsHomePage:!1,title:"Slowmode",description:"Custom slowmode system that deletes messages that violate the slowmode time configured. Allows configuring permissions that bypass slowmode.",source:"@site/docs/moderation/slowmode.mdx",sourceDirName:"moderation",slug:"/moderation/slowmode",permalink:"/moderation/slowmode",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/slowmode.mdx",tags:[],version:"current",frontMatter:{title:"Slowmode"},sidebar:"sidebar",previous:{title:"Notes",permalink:"/moderation/notes"},next:{title:"Staff On Duty",permalink:"/moderation/staff-on-duty"}},c=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Custom slowmode system that deletes messages that violate the slowmode time configured. Allows configuring permissions that bypass slowmode."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"As stated above, this system does not actually prevent the user from sending messages: it simply deletes messages that violate the slowmode constraints."))),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".*"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Additional options:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Errors as custom command output")," disabled"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-slowmode on <time>")," - Turns on the slowmode, using ",(0,a.kt)("inlineCode",{parentName:"li"},"time")," in seconds as the slowmode time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-slowmode off")," - Disables slowmode.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$bypassperms"),(0,a.kt)("br",null),"\nPermissions required to bypass slowmode."),(0,a.kt)(s.Z,{mdxType:"AvailablePermissionsDisplay"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$usageperms"),(0,a.kt)("br",null),"\nPermissions required to run slowmode commands."),(0,a.kt)(s.Z,{mdxType:"AvailablePermissionsDisplay"}))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/moderation/slowmode.go.tmpl",file:"../../../src/moderation/slowmode.go.tmpl"},'{{/*\n    Custom slowmode system that deletes messages that violate the slowmode time configured. Allows configuring permissions that bypass slowmode.\n    See <https://yagpdb-cc.github.io/moderation/slowmode> for more information.\n \n    Author: sponge <https://github.com/Spongerooski>\n*/}}\n \n{{/* Configurable values */}}\n{{ $bypassperms := .Permissions.ManageMessages }}\n{{ $usageperms := .Permissions.ManageMessages }}\n{{/* End of configurable values */}}\n \n{{/* ACTUAL CODE */}}\n{{ if hasPermissions $usageperms }}\n{{ if $matches := reFindAllSubmatches `\\A-slowmode on (\\d+)` .Message.Content }}\n{{ $slowmodeduration := (index $matches 0 1) }}\n{{ with (dbGet 660 "channels").Value }}\n{{ $value := sdict . }}\n{{ $value.Set (str $.Channel.ID) (str $slowmodeduration) }}\n{{ dbSet 660 "channels" $value }}\n{{ else }}\n{{ dbSet 660 "channels" (sdict (str $.Channel.ID) (str $slowmodeduration)) }}\n{{ end }}\ndone! slowmode has been set to `{{ $slowmodeduration }}s`\n{{ else if reFind `\\A-slowmode off` .Message.Content }}\n{{ if $db := (dbGet 660 "channels").Value }}\n{{ $value := sdict $db }}\n{{ $value.Del (str $.Channel.ID) }}\n{{ dbSet 660 "channels" $value }}\n{{ end }}\nthe slowmode has been removed from this channel\n{{ end }}\n{{ end }}\n{{ if not hasPermissions $bypassperms }}\n{{ if $db := (dbGet 660 "channels").Value }}\n{{ $value := sdict $db }}\n{{ $get := $value.Get (str .Channel.ID) }}\n{{ if $get }}\n{{ if $slowmode := dbGet .User.ID (str .Channel.ID) }}\n{{ deleteTrigger 0 }}\n{{ else }}\n{{ dbSetExpire .User.ID (str .Channel.ID) "epic" (toInt $get) }}\n{{ end }}\n{{ end }}\n{{ end }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Spongerooski"},"@Spongerooski"),"."))}p.isMDXComponent=!0}}]);