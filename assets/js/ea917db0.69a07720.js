(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1230],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5095:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:3,title:"Join Trigger"},c=void 0,s={unversionedId:"moderation/raid-guard/join-trigger",id:"moderation/raid-guard/join-trigger",isDocsHomePage:!1,title:"Join Trigger",description:"This part of the code will track all incomming new members to a server. If their account is younger than 1 day then they will get added to the raid list. This list will expire every 10 minutes to account for any members not part of a RAID.",source:"@site/docs/moderation/raid-guard/join-trigger.md",sourceDirName:"moderation/raid-guard",slug:"/moderation/raid-guard/join-trigger",permalink:"/moderation/raid-guard/join-trigger",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/raid-guard/join-trigger.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Join Trigger"},sidebar:"tutorialSidebar",previous:{title:"Configure System",permalink:"/moderation/raid-guard/configure-system"},next:{title:"Overview",permalink:"/moderation/report-system/overview"}},d=[],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This part of the code will track all incomming new members to a server. If their account is younger than 1 day then they will get added to the raid list. This list will expire every 10 minutes to account for any members not part of a RAID."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Member join"),(0,o.kt)("br",{parentName:"p"}),"\n","This code is to be placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Join Message")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Trigger: member join\n    This code is to be placed in the "Join Message" section.\n\n    About: This part of the code will track all incomming new members to a server.\n    If their account is younger than 1 day then they will get added to the raid list.\n    This list will expire every 10 minutes to account for any members not part of a RAID.\n\n    Created by: ENGINEER15 - https://github.com/engineer152/\n    Last Update: 4/13/2021\n*/}}\n\n{{/* CONFIGURATION START */}}\n{{$age := 1440}} {{/*New account age in minutes 1440 = one day*/}}\n{{$len := 25}}{{/*Number of new members in a RAID to be notified by*/}}\n{{$rolemention := cslice ROLE_ID_HERE }} {{/*This will be the role that gets pinged. MAKE SURE YOU CHANGE ROLE_ID_HERE WITH YOUR ROLE ID!*/}}\n{{$channel := MODLOG_CHANNEL_ID_HERE }} {{/*Channel ID for modlog*/}}\n\n{{/* ACTUAL CODE - DO NOT TOUCH */}}\n{{$newmem := .User }}\n{{$l:=cslice}}\n\n{{with (dbGet 0 "raidlist").Value}}\n    {{$l = $l.AppendSlice . }}{{end}}\n\n{{ if not (dbGet 0 "raidlistcool")}}\n    {{dbDel 0 "raidlist"}}{{end}}\n\n{{$embed := cembed\n    "title" " \u26a0 RAID ALERT!"\n    "description" "I have determined that there are more than:\\n**25 BRAND NEW ACCOUNTS**\\nthat just joined the server!\\n\\n__Options:__\\n1. `-raid kick` - Kicks all raid members.\\n2. `-raid ban` - Bans all raid members.\\n3. `-raid clear` - Clear Raid List"\n    "color" (randInt 16777217)\n    "thumbnail" (sdict "url" "https://cdn.discordapp.com/emojis/565142262401728512.png" )}}\n\n{{if lt (currentUserAgeMinutes) $age}}\n    {{if not (dbGet $newmem "raidcooldown") }}\n        {{$l = $l.Append $newmem}}\n        {{dbSet 0 "raidlist" $l}}\n        {{if eq (len $l) $len}}\n            {{sendMessageNoEscape $channel (complexMessage "content" (mentionRoleID $rolemention) "embed" $embed) }}\n        {{end}}\n        {{dbSetExpire $newmem "raidcooldown" true 3600}}\n        {{dbSetExpire 0 "raidlistcool" true 1200 }}\n    {{end}}\n{{end}}\n')))}u.isMDXComponent=!0}}]);