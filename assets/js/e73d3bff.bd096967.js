"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1053],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||l;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4737:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=t(3117),o=(t(7294),t(3905));const l={title:"Message Handler"},a=void 0,i={unversionedId:"leveling/message-handler",id:"leveling/message-handler",title:"Message Handler",description:"This command handles messages for the leveling system.",source:"@site/docs/leveling/message-handler.md",sourceDirName:"leveling",slug:"/leveling/message-handler",permalink:"/leveling/message-handler",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/leveling/message-handler.md",tags:[],version:"current",frontMatter:{title:"Message Handler"},sidebar:"sidebar",previous:{title:"Configure Settings",permalink:"/leveling/configure-settings"},next:{title:"Reaction Handler",permalink:"/leveling/reaction-handler"}},s={},d=[{value:"Trigger",id:"trigger",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command handles messages for the leveling system."),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".*")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/leveling/message_handler.go.tmpl",file:"../../../src/leveling/message_handler.go.tmpl"},'{{/*\n    Handles messages for the leveling system.\n    See <https://yagpdb-cc.github.io/leveling/message-handler> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $settings := 0 }} {{/* Instantiate settings at nil value */}}\n{{ $roleRewards := sdict "type" "stack" }} {{/* Default role reward settings */}}\n{{ with (dbGet 0 "xpSettings") }} {{ $settings = sdict .Value }} {{ end }} {{/* If in db, then we update value */}}\n{{ with (dbGet 0 "roleRewards") }} {{ $roleRewards = sdict .Value }} {{ end }} {{/* See above */}}\n\n{{ $cooldown := false }} {{/* We presume that user is not on cooldown */}}\n{{ if (dbGet .User.ID "xpCooldown") }} {{ $cooldown = true }} {{ end }} {{/* Make user on cooldown if there is cooldown DB entry */}}\n\n{{ if and (not $cooldown) $settings }} {{/* Make sure that both the user is not on cooldown and settings exist */}}\n    {{ $amtToGive := randInt $settings.min $settings.max }} {{/* Amount of XP to give */}}\n    {{ $currentXp := 0 }} {{/* User current XP */}}\n    {{ with (dbGet .User.ID "xp") }}\n        {{ $currentXp = .Value }}\n    {{ end }} {{/* Update XP amount if present */}}\n\n    {{ $currentLvl := roundFloor (mult 0.1 (sqrt $currentXp)) }} {{/* Calculate level */}}\n    {{ $newXp := dbIncr .User.ID "xp" $amtToGive }} {{/* Increment the xp */}}\n    {{ $newLvl := roundFloor (mult 0.1 (sqrt $newXp)) }} {{/* Calculate new level */}}\n    {{ $channel := or $settings.channel .Channel.ID }}\n    {{ if not (.Guild.GetChannel $channel) }} {{ $channel = .Channel.ID }} {{ end }}\n\n    {{ if ne $newLvl $currentLvl }} {{/* If the level changed / user ranked up */}}\n        {{ $type := $roleRewards.type }} {{/* Type of role giving (highest / stack) */}}\n        {{ $toAdd := or ($roleRewards.Get (json $newLvl)) 0 }} {{/* Try to get the role reward for this level */}}\n        {{ range $level, $reward := $roleRewards }} {{/* Loop over role rewards */}}\n            {{- if and (ge (toInt $newLvl) (toInt $level)) (not (hasRoleID $reward)) (eq $type "stack") (ne $level "type") }} {{- addRoleID $reward }}\n            {{- else if and (hasRoleID $reward) (eq $type "highest") $toAdd }} {{- removeRoleID $reward }} {{- end -}}\n        {{ end }}\n        {{ if $toAdd }} {{ addRoleID $toAdd }} {{ end }}\n        {{ $embed := cembed \n            "title" "\u276f Level up!"\n            "thumbnail" (sdict "url" "https://webstockreview.net/images/emoji-clipart-celebration-4.png")\n            "description" (printf "Congratulations **%s**! You\'ve leveled up to level %d - keep it up!" .User.String (toInt $newLvl))\n            "color" 14232643\n        }}\n            {{ if $settings.announcements }}\n            {{ sendMessage $channel (complexMessage "content" .User.Mention "embed" $embed) }} {{/* Send levelup notification */}}\n            {{ end }}\n    {{ end }}\n\n    {{ $cooldownSeconds := div $settings.cooldown 1000000000 }} {{/* Convert cooldown to seconds */}}\n    {{ dbSetExpire .User.ID "xpCooldown" true $cooldownSeconds }} {{/* Set cooldown entry */}}\n{{ end }}\n')),(0,o.kt)("h2",{id:"author"},"Author"),(0,o.kt)("p",null,"This custom command was written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}u.isMDXComponent=!0}}]);