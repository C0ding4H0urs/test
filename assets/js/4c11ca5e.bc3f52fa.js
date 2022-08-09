"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9227],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=t(3117),i=(t(7294),t(3905));const o={title:"Counting System"},a=void 0,l={unversionedId:"fun/counting",id:"fun/counting",title:"Counting System",description:"This command runs the counting game.",source:"@site/docs/fun/counting.md",sourceDirName:"fun",slug:"/fun/counting",permalink:"/fun/counting",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/counting.md",tags:[],version:"current",frontMatter:{title:"Counting System"},sidebar:"sidebar",previous:{title:"Coin Flip",permalink:"/fun/coinflip"},next:{title:"Deathmatch Game",permalink:"/fun/deathmatch"}},c={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command runs the counting game."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A")),(0,i.kt)("admonition",{title:"Restrictions",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Set this command to ",(0,i.kt)("em",{parentName:"p"},"only run")," in your counting channel in the channel restrictions.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type a number in the counting chat to begin the game!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can't count twice in a row."))),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"resetcount")," to reset the count (staff only).")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$emoji"),(0,i.kt)("br",null),"\nEmoji to be added to the latest correct count.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$wrong"),(0,i.kt)("br",null),"\nResponse when users get the count wrong.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$twice"),(0,i.kt)("br",null),"\nResponse when users attempt to count twice in a row.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$1000_ntf"),(0,i.kt)("br",null),"\nMilestone notification for every 1000 numbers counted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$100_ntf"),(0,i.kt)("br",null),"\nMilestone notification for every 100 numbers counted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$change_msg"),(0,i.kt)("br",null),"\nInformational message to be sent when the latest correct count was changed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$warn_on_del"),(0,i.kt)("br",null),"\nWhether to warn when a member deletes their latest correct count.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"$warn_msg"),(0,i.kt)("br",null),"\nWarning message for the above option.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$staff_roles"),(0,i.kt)("br",null),"\nList of role IDs to ignore when trying to warn members. Also, only users with one of these roles can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"resetcount")," command."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/counting.go.tmpl",file:"../../../src/fun/counting.go.tmpl"},'{{/*\n    A counting game.\n    See <https://yagpdb-cc.github.io/fun/counting> for more information.\n\n    Author: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* Configurable values */}}\n{{ $emoji := "\u2611" }}\n\n{{ $wrong := "not the right number bud \ud83d\ude05" }}\n{{ $twice := "we do counting together \ud83d\ude20" }}\n{{ $1000_ntf := "Holy moly, have we really reached" }}\n{{ $100_ntf := "We have reached" }}\n\n{{ $change_msg := "we\'re currently at:" }}\n{{ $warn_on_del := true }}\n{{ $warn_msg := "Don\'t change your latest correct count!" }}\n{{ $staff_roles := cslice 763447831829938176 764103587223044116 778952687986802698 764054381535821825 775003755842109440 }}\n{{/* End of configurable values */}}\n\n{{/* CODE - Don\'t edit this part */}}\n{{ $c := sdict }}{{ with (dbGet 20 "counting").Value }}{{ $c = sdict . }}{{ end }}\n{{ $r := 0 }}{{ with (dbGet .User.ID "resetcount").Value }}{{ $r = . }}{{ end }}\n{{ $s := false }}{{ range .Member.Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n{{ if not $c }}\n    {{ addReactions "\u2611" }}\n    {{ dbSet 20 "counting" (sdict "l" (sdict "c" 1 "m" 0 "u" 0 "w" 0)) }}\n    {{ print .User.Mention ", <#" .Channel.ID "> is all set up as your counting channel!" }}\n{{ else if and $s (eq (print .ServerPrefix "resetcount") .Message.Content) }}\n    {{ deleteTrigger 1 }}\n    {{ if $s }}\n        {{ if not $r }}\n            {{ $m := sendMessageRetID nil (cembed\n                "color" 16734296\n                "description" (print "\u203c " .User.Mention ", are you sure you want to reset the count to **1**?\\n\\nIf you\'re sure, type `-resetcount` again.")\n                "footer" (sdict "text" "This message will self destruct in 30 seconds")) }}\n            {{ deleteMessage nil $m 30 }}\n            {{ dbSetExpire .User.ID "resetcount" (sdict "s" 1 "m" $m) 30 }}\n        {{ else }}\n            {{ deleteMessage nil $r.m 0 }}\n            {{ dbDel .User.ID "resetcount" }}\n            {{ range $k, $v := $c }}\n                {{ if eq $k "l" }}{{ $c.Set $k (sdict "c" 1 "m" 0 "u" 0 "w" 0) }}{{ end }}\n            {{ end }}\n            {{ dbSet 20 "counting" $c }}\n            {{ print .User.Mention ", reset the count in <#" .Channel.ID ">!" }}\n            {{ deleteResponse 10 }}\n        {{ end }}\n    {{ else }}\n        {{ print .User.Mention ", you don\'t have the permissions to reset the count!" }}\n        {{ deleteResponse 5 }}\n    {{ end }}\n{{ else if eq .User.ID $c.l.u }}\n    {{ deleteTrigger 1 }}\n    {{ print .User.Mention ", " $twice }}\n    {{ deleteResponse 5 }}\n{{ else if or (not (reFind `\\A\\d+\\z` .Message.Content)) (ne $c.l.c (toInt .Message.Content)) }}\n    {{ deleteTrigger 1 }}\n    {{ $m := getMessage nil $c.l.m }}\n    {{ if eq $c.l.m 0 }}\n        {{ print .User.Mention ", the count starts at 1 \ud83d\ude09" }}\n    {{ else if not $m }}\n        {{ print .User.Mention ", " $change_msg " `" $c.l.c "`" }}\n        {{ $s := false }}{{ range (getMember $c.l.u).Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n        {{ if and $warn_on_del (not $c.l.w) (not $s) }}{{ $h := execAdmin "warn" $c.l.u $warn_msg }}{{ $c.Set "l" (sdict "c" $c.l.c "m" $c.l.m "u" $c.l.u "w" 1) }}{{ dbSet 20 "counting" $c}}{{ end }}\n    {{ else if ne (sub $c.l.c 1) (toInt $m.Content) }}\n        {{ print .User.Mention ", " $change_msg " `" $c.l.c "`" }}\n        {{ $s := false }}{{ range (getMember $c.l.u).Roles }}{{ if in $staff_roles . }}{{ $s = true }}{{ end }}{{ end }}\n        {{ if and $warn_on_del (not $c.l.w) (not $s) }}{{ $h := execAdmin "warn" $c.l.u $warn_msg }}{{ $c.Set "l" (sdict "c" $c.l.c "m" $c.l.m "u" $c.l.u "w" 1) }}{{ dbSet 20 "counting" $c}}{{ end }}\n    {{ else }}\n        {{ print .User.Mention ", " $wrong }}\n    {{ end }}\n    {{ deleteResponse 10 }}\n{{ else }}\n    {{ if eq (index .Message.Content 0) 48 }}\n        {{ deleteTrigger 1 }}\n        {{ print .User.Mention ", leading zeros are not allowed!"}}\n        {{ deleteResponse 10 }}\n    {{ else }}\n        {{ deleteAllMessageReactions nil $c.l.m }}\n        {{ addReactions $emoji }}\n        {{ $c.Set (str .User.ID) (add ($c.Get (str .User.ID)) 1) }}\n        {{ $c.Set "l" (sdict "c" (add $c.l.c 1) "m" .Message.ID "u" .User.ID "w" 0) }}\n        {{ dbSet 20 "counting" $c }}\n        {{ if eq (toInt (mod $c.l.c 1000)) 0 }}\n            {{ print $1000_ntf " " $c.l.c "?! \ud83d\ude32" }}\n        {{ else if eq (toInt (mod $c.l.c 100)) 0 }}\n            {{ print $100_ntf " " $c.l.c "! \ud83c\udf89" }}\n        {{ end }}\n    {{ end }}\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpecialEliteSNP"},"@SpecialEliteSNP"),"."))}p.isMDXComponent=!0}}]);