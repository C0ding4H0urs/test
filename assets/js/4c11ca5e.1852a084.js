(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9227],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2385:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:5,title:"Counting System"},s=void 0,l={unversionedId:"fun/counting",id:"fun/counting",isDocsHomePage:!1,title:"Counting System",description:"Setup:",source:"@site/docs/fun/counting.md",sourceDirName:"fun",slug:"/fun/counting",permalink:"/fun/counting",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/counting.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Counting System"},sidebar:"tutorialSidebar",previous:{title:"Reaction Handler",permalink:"/fun/connect-four/reaction-handler"},next:{title:"Deathmatch Game",permalink:"/fun/deathmatch"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setup:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the cc restrictions to only run in your counting channel")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Just type the right number and count together :)"),(0,i.kt)("li",{parentName:"ul"},"You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"-resetcount")," to reset the count. There's a warning, you have to send it twice within 30 seconds to actually reset the count.",(0,i.kt)("br",{parentName:"li"}),"Only members with a role in ",(0,i.kt)("inlineCode",{parentName:"li"},"$staff_roles")," can use the command.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can add a command override for the counting channel in the YAGPDB control panel. That way you can make sure that no commands can be used here.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    SETUP:\n    - Set the cc restrictions to only run in your counting channel\n    - Set the trigger type to Regex and the trigger to: `\\A`\n\n    USAGE:\n    - Just type the right number and count together :)\n    - You can use -resetcount to reset the count. There\'s a warning, you have to send it twice within 30 seconds to actually reset the count.\n      Only members with a role in $staff_roles can use the command.\n\n    OPTIONAL:\n    - You can add a command override for the counting channel in the YAGPDB control panel. That way you can make sure that no commands can be used here.\n\n    CREDITS: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* VARIABLES - You can edit these values */}}\n  {{/* Emoji to be added to the latest correct count */}}\n    {{ $emoji := "\u2611" }}\n\n  {{/* Responses: */}}\n    {{/* Message when they get the count wrong */}}\n      {{ $wrong := "not the right number bud \ud83d\ude05" }}\n    {{/* Message when they try to count twice in a row */}}\n      {{ $twice := "we do counting together \ud83d\ude20" }}\n    {{/* Milestone notification for every 1000 */}}\n      {{ $1000_ntf := "Holy moly, have we really reached" }}\n    {{/* Milestone notification for every 100 */}}\n      {{ $100_ntf := "We have reached" }}\n\n  {{/* Warnings */}}\n    {{/* Info message when the latest correct count was changed (edited or deleted) */}}\n      {{ $change_msg := "we\'re currently at:" }}\n    {{/* Warn when a member deletes their latest correct count */}}\n      {{ $warn_on_del := true }}\n    {{/* Warning message */}}\n      {{ $warn_msg := "Don\'t change your latest correct count!" }}\n    {{/* Role to ignore when trying to warn. This should be the roles above the bot since it can\'t warn members with a role higher than itself. */}}\n      {{ $staff_roles := cslice 763447831829938176 764103587223044116 778952687986802698 764054381535821825 775003755842109440 }}\n\n\n{{/* CODE - Don\'t edit this part */}}\n{{ $c := sdict }}{{ with (dbGet 20 "counting").Value }}{{ $c = sdict . }}{{ end }}\n{{ $e := execAdmin "prefix" }}{{ $p := reReplace `[*\\\\_\\~]` (slice $e (add 15 (len (str .Guild.ID))) (sub (len $e) 1)) `\\$0` }}\n{{ $r := 0 }}{{ with (dbGet .User.ID "resetcount").Value }}{{ $r = . }}{{ end }}\n{{ $s := false }}{{ range .Member.Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n{{ if not $c }}\n  {{ addReactions "\u2611" }}\n  {{ dbSet 20 "counting" (sdict "l" (sdict "c" 1 "m" 0 "u" 0 "w" 0)) }}\n  {{ print .User.Mention ", <#" .Channel.ID "> is all set up as your counting channel!" }}\n{{ else if and $s (eq (print $p "resetcount") .Message.Content) }}\n  {{ deleteTrigger 1 }}\n  {{ if $s }}\n    {{ if not $r }}\n      {{ $m := sendMessageRetID nil (cembed\n        "color" 16734296\n        "description" (print "\u203c " .User.Mention ", are you sure you want to reset the count to **1**?\\n\\nIf you\'re sure, type `-resetcount` again.")\n        "footer" (sdict "text" "This message will self destruct in 30 seconds")) }}\n      {{ deleteMessage nil $m 30 }}\n      {{ dbSetExpire .User.ID "resetcount" (sdict "s" 1 "m" $m) 30 }}\n    {{ else }}\n      {{ deleteMessage nil $r.m 0 }}\n      {{ dbDel .User.ID "resetcount" }}\n      {{ range $k, $v := $c }}\n        {{ if eq $k "l" }}{{ $c.Set $k (sdict "c" 1 "m" 0 "u" 0 "w" 0) }}{{ end }}\n      {{ end }}\n      {{ dbSet 20 "counting" $c }}\n      {{ print .User.Mention ", reset the count in <#" .Channel.ID ">!" }}\n      {{ deleteResponse 10 }}\n    {{ end }}\n  {{ else }}\n    {{ print .User.Mention ", you don\'t have the permissions to reset the count!" }}\n    {{ deleteResponse 5 }}\n  {{ end }}\n{{ else if eq .User.ID $c.l.u }}\n  {{ deleteTrigger 1 }}\n  {{ print .User.Mention ", " $twice }}\n  {{ deleteResponse 5 }}\n{{ else if or (not (reFind `\\A\\d+\\z` .Message.Content)) (ne $c.l.c (toInt .Message.Content)) }}\n  {{ deleteTrigger 1 }}\n  {{ $m := getMessage nil $c.l.m }}\n  {{ if eq $c.l.m 0 }}\n    {{ print .User.Mention ", the count starts at 1 \ud83d\ude09" }}\n  {{ else if not $m }}\n    {{ print .User.Mention ", " $change_msg " `" $c.l.c "`" }}\n    {{ $s := false }}{{ range (getMember $c.l.u).Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n    {{ if and $warn_on_del (not $c.l.w) (not $s) }}{{ $h := execAdmin "warn" $c.l.u $warn_msg }}{{ $c.Set "l" (sdict "c" $c.l.c "m" $c.l.m "u" $c.l.u "w" 1) }}{{ dbSet 20 "counting" $c}}{{ end }}\n  {{ else if ne (sub $c.l.c 1) (toInt $m.Content) }}\n    {{ print .User.Mention ", " $change_msg " `" $c.l.c "`" }}\n    {{ $s := false }}{{ range (getMember $c.l.u).Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n    {{ if and $warn_on_del (not $c.l.w) (not $s) }}{{ $h := execAdmin "warn" $c.l.u $warn_msg }}{{ $c.Set "l" (sdict "c" $c.l.c "m" $c.l.m "u" $c.l.u "w" 1) }}{{ dbSet 20 "counting" $c}}{{ end }}\n  {{ else }}\n    {{ print .User.Mention ", " $wrong }}\n  {{ end }}\n  {{ deleteResponse 10 }}\n{{ else }}\n  {{ if eq (index .Message.Content 0) 48 }}\n    {{ deleteTrigger 1 }}\n    {{ print .User.Mention ", leading zeros are not allowed!"}}\n    {{ deleteResponse 10 }}\n  {{ else }}\n    {{ deleteAllMessageReactions nil $c.l.m }}\n    {{ addReactions $emoji }}\n    {{ $c.Set (str .User.ID) (add ($c.Get (str .User.ID)) 1) }}\n    {{ $c.Set "l" (sdict "c" (add $c.l.c 1) "m" .Message.ID "u" .User.ID "w" 0) }}\n    {{ dbSet 20 "counting" $c }}\n    {{ if eq (toInt (mod $c.l.c 1000)) 0 }}\n      {{ print $1000_ntf " " $c.l.c "?! \ud83d\ude32" }}\n    {{ else if eq (toInt (mod $c.l.c 100)) 0 }}\n      {{ print $100_ntf " " $c.l.c "! \ud83c\udf89" }}\n    {{ end }}\n  {{ end }}\n{{ end }}\n')))}p.isMDXComponent=!0}}]);