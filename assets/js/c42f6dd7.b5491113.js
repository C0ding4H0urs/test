(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6743],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(t),h=s,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return t?o.createElement(g,a(a({ref:n},d),{},{components:t})):o.createElement(g,a({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var m=2;m<r;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7378:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var o=t(2122),s=t(9756),r=(t(7294),t(3905)),a=["components"],i={sidebar_position:3,title:"Emote Filter"},l=void 0,m={unversionedId:"moderation/emote-filter",id:"moderation/emote-filter",isDocsHomePage:!1,title:"Emote Filter",description:'This was created for an incredibly specific use in a server I staff - to catch emote-only message chains. The CC will allow a set number of emote-only messages to go through before deleting subsequent messages and tracking them in a log channel. This is a rolling time frame, every time the filter catches an emote-only message it will refresh the automod length. The regex trigger will capture any number of emotes in a row and with up to (2) characters on each side to prevent automod bypass (such as an emote followed by a single period) but has enough wiggle room to allow a message such as "LOL". You have the option to enable an automatic emote ban function based on assigning a role to the user, this will delete all emote-only messages for the duration of their ban rather than counting towards the filter. I recommend disabling the "Use External Emoji" permission (must be done in channel permissions, not role permissions) as an added incentive for nitro users to not get themselves emote banned. Make sure the role is above all other standard user roles in the role hierarchy. Emote bans/logging DO NOT need to be used in conjunction to function.',source:"@site/docs/moderation/emote-filter.md",sourceDirName:"moderation",slug:"/moderation/emote-filter",permalink:"/moderation/emote-filter",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/emote-filter.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Emote Filter"},sidebar:"tutorialSidebar",previous:{title:"Reaction Handler",permalink:"/moderation/report-system/reaction-handler"},next:{title:"Nickname Moderation",permalink:"/moderation/nickname-moderation"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This was created for an incredibly specific use in a server I staff - to catch emote-only message chains. The CC will allow a set number of emote-only messages to go through before deleting subsequent messages and tracking them in a log channel. This is a rolling time frame, every time the filter catches an emote-only message it will refresh the automod length. The regex trigger will capture any number of emotes in a row and with up to (2) characters on each side to prevent automod bypass (such as an emote followed by a single period) but has enough wiggle room to allow a message such as "LOL :kek:". You have the option to enable an automatic emote ban function based on assigning a role to the user, this will delete all emote-only messages for the duration of their ban rather than counting towards the filter. I recommend disabling the "Use External Emoji" permission (must be done in channel permissions, not role permissions) as an added incentive for nitro users to not get themselves emote banned. Make sure the role is above all other standard user roles in the role hierarchy. Emote bans/logging DO NOT need to be used in conjunction to function.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"^.{0,2}(((<a?:[\\w~]{2,32}:\\d{17,19}>)|[\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3}).{0,2}|\\s+)+$")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    Trigger Type: Regex\n    Trigger `^.{0,2}(((<a?:[\\w~]{2,32}:\\d{17,19}>)|[\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3}).{0,2}|\\s+)+$`\n\n    About: This was created for an incredibly specific use in a server I staff - to catch emote-only message chains. The CC will allow a set number of\n    emote-only messages to go through before deleting subsequent messages and tracking them in a log channel. This is a rolling time frame, every time\n    the filter catches an emote-only message it will refresh the automod length. The regex trigger will capture any number of emotes in a row and with\n    up to (2) characters on each side to prevent automod bypass (such as an emote followed by a single period) but has enough wiggle room to allow a\n    message such as "LOL :kek:". You have the option to enable an automatic emote ban function based on assigning a role to the user, this will delete\n    all emote-only messages for the duration of their ban rather than counting towards the filter. I recommend disabling the "Use External Emoji"\n    permission (must be done in channel permissions, not role permissions) as an added incentive for nitro users to not get themselves emote banned.\n    Make sure the role is above all other standard user roles in the role hierarchy. Emote bans/logging DO NOT need to be used in conjunction to function.\n\n    Known Issues: no known issues. YAG cannot detect message edits therefore users are able to send messages and then edit them to single emotes without\n    triggering the filter, there is nothing that can be done to prevent this so it is not an issue with the command.\n\n    Created by: DV0RAK - https://github.com/dvoraknt/\n    Last Update: 5/3/2021\n\n*/}}\n\n{{/* START CONFIGURABLE VARIABLES */}}\n{{$length := 120}}{{/*duration of auto delete in seconds*/}}\n{{$emoteDelete := 3}}{{/*number of emotes allowed before deleting*/}}\n\n{{$logEnable := true}}{{/*true to enable logging, false to disable*/}}\n{{$logChannel := 503913846684123166}}{{/*automod/mod log channel ID*/}}\n\n{{$banEnable := true}}{{/*true to enable emote bans, false to disable*/}}\n{{$banRole := 539502463649185794}}{{/*role ID of emote ban role*/}}\n{{$banTime := 3600}}{{/*emote ban length in seconds. default 3600 - one hour*/}}\n{{$banNum := 5}}{{/*number of emotes from single user before emote ban*/}}\n{{$banWarn := 3}}{{/*number of emotes from single user before sending DM warning. must be higher than one, zero to disable*/}}\n{{$banMsg := true}}{{/*true if you have "Use External Emoji" permission disabled in channels, false if you have not disabled it. Only affects the DM sent to users.*/}}\n{{/* END CONFIGURABLE VARIABLES */}}\n\n{{/* ===============================DO NOT TOUCH=============================== */}}\n{{$x := ""}}\n{{$spammers := ""}}\n{{$spammerList := ""}}\n{{$spammersdict := ""}}\n\n{{if hasRoleID $banRole}}\n    {{deleteTrigger 0}}\n{{end}}\n\n{{if and (dbGet .Channel.ID "cooldown") (not (hasRoleID $banRole))}}\n    {{if eq (dbIncr .Channel.ID "emoteCount" 1|toInt) $emoteDelete}}\n        {{dbSetExpire .Channel.ID "cooldown" "cooldown" $length}}\n        {{if $logEnable}}{{$x = sendMessageRetID $logChannel (print "Emote filter triggered in <#" .Channel.ID ">")}}{{end}}\n        {{dbSetExpire .Channel.ID "messageID" ($x|toString) $length}}\n\n        {{$spammersdict := sdict (dbGet .Channel.ID "spammers").Value}}\n        {{if $count := $spammersdict.Get (str .User.ID)}}\n            {{$count = add $count 1}}\n            {{$spammersdict.Set (str .User.ID) $count}}\n            {{if and $banEnable (eq $count $banWarn)}}{{sendDM "You have sent (" $banWarn ") emote only messages in a short time period, if you continue sending these messages you will have your permissions revoked. To keep channels conversation focused please limit single emote uses to reactions or incorporated into other messages."}}{{end}}\n            {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n        {{else}}\n            {{$spammersdict.Set (str .User.ID) 1}}\n            {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n        {{end}}\n\n    {{range $k, $v := $spammersdict}}\n        {{- $spammerList = joinStr "\\n" $spammerList (printf "<@%s> - %s" $k (str $v)) -}}\n    {{end}}\n\n    {{if $logEnable}}{{editMessage $logChannel $x (cembed "title" "Emotes Filtered" "description" $spammerList)}}{{end}}\n    {{dbSetExpire .Channel.ID "messageID" ($x|toString) $length}}\n\n    {{else if lt (dbIncr .Channel.ID "emoteCount" 1|toInt) $emoteDelete}}\n        {{dbSetExpire .Channel.ID "cooldown" "cooldown" $length}}\n        {{$spammersdict := sdict (dbGet .Channel.ID "spammers").Value}}\n            {{if $count := $spammersdict.Get (str .User.ID)}}\n                {{$count = add $count 1}}\n                {{$spammersdict.Set (str .User.ID) $count}}\n                {{if and $banEnable (eq $count $banWarn)}}{{sendDM "You have sent (" $banWarn ") emote only messages in a short time period, if you continue sending these messages you will have your permissions revoked. To keep channels conversation focused please limit single emote uses to reactions or incorporated into other messages."}}{{end}}\n                {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n            {{else}}\n                {{$spammersdict.Set (str .User.ID) 1}}\n                {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n            {{end}}\n\n    {{else if gt (dbIncr .Channel.ID "emoteCount" 1|toInt) $emoteDelete}}\n        {{deleteTrigger 0}}{{dbSetExpire .Channel.ID "cooldown" "cooldown" $length}}\n        {{$x = (dbGet .Channel.ID "messageID").Value|toString}}\n\n        {{$spammersdict := sdict (dbGet .Channel.ID "spammers").Value}}\n        {{if $count := $spammersdict.Get (str .User.ID)}}\n            {{$count = add $count 1}}\n            {{$spammersdict.Set (str .User.ID) $count}}\n            {{if and $banEnable (eq $count $banWarn)}}{{sendDM "You have sent (" $banWarn ") emote only messages in a short time period, if you continue sending these messages you will have your permissions revoked. To keep channels conversation focused please limit single emote uses to reactions or incorporated into other messages."}}{{end}}\n            {{if and (ge $count $banNum) ($banEnable)}}\n                {{addRoleID $banRole}}\n                {{removeRoleID $banRole $banTime}}\n                {{$spammersdict.Set (str .User.ID) (print $banNum " - User has been emote banned.")}}\n                {{$banMin := div $banTime 60}}\n                {{if $banMsg}}\n                    {{sendDM "You have been emote banned for " $banMin " minutes. You will not be able to use external emotes (if you are a nitro user) and will not be able to send emote-only messages during this time."}}\n                {{else}}\n                    {{sendDM "You have been emote banned for " $banMin " minutes. You will not be able to send emote-only messages during this time."}}\n                {{end}}\n            {{end}}\n        {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n    {{else}}\n        {{$spammersdict.Set (str .User.ID) 1}}\n        {{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n    {{end}}\n\n\n    {{range $k, $v := $spammersdict}}\n        {{- $spammerList = joinStr "\\n" $spammerList (printf "<@%s> - %s" $k (str $v)) -}}\n    {{end}}\n\n    {{if $logEnable}}{{editMessage $logChannel $x (cembed "title" "Emotes Filtered" "description" $spammerList)}}{{end}}\n    {{dbSetExpire .Channel.ID "messageID" ($x|toString) $length}}\n    {{end}}\n{{else if not (hasRoleID $banRole)}}\n\n{{dbSetExpire .Channel.ID "cooldown" "cooldown" $length}}\n{{dbDel .Channel.ID "emoteCount"}}\n\n{{$spammersdict = sdict (str .User.ID) 1}}\n{{dbSetExpire .Channel.ID "spammers" $spammersdict $length}}\n\n\n{{end}}\n')))}u.isMDXComponent=!0}}]);