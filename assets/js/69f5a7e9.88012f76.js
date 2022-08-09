"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9187],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2046:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var t=r(3117),a=(r(7294),r(3905));const l={title:"View Rank"},o=void 0,i={unversionedId:"leveling/view-rank",id:"leveling/view-rank",title:"View Rank",description:"This command displays the rank of a member, defaulting to the triggering member.",source:"@site/docs/leveling/view-rank.md",sourceDirName:"leveling",slug:"/leveling/view-rank",permalink:"/leveling/view-rank",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/leveling/view-rank.md",tags:[],version:"current",frontMatter:{title:"View Rank"},sidebar:"sidebar",previous:{title:"View Leaderboard",permalink:"/leveling/view-leaderboard"},next:{title:"Overview",permalink:"/moderation/overview"}},u={},d=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:d};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command displays the rank of a member, defaulting to the triggering member.\nThere are also overloads to set your rank card background (if enabled) and rank embed colour."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(rank|lvl|xp)(\\s+|\\z)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank")," - Views your own rank."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank <user>")," - Views the rank of the user provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank set-color <hex>")," - Sets your rank embed colour to the hex provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank set-color default")," - Sets your rank embed colour to the default value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank set-background <link>")," - Sets your rank card background."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-rank set-background del")," - Deletes your rank card background.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$rankcard"),(0,a.kt)("br",null),"\nWhether or not a rank card should be displayed instead of an embed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$background"),(0,a.kt)("br",null),"\nThe default rank card background. Only applies if ",(0,a.kt)("inlineCode",{parentName:"p"},"$rankcard")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/leveling/rank.go.tmpl",file:"../../../src/leveling/rank.go.tmpl"},'{{/*\n    Views the rank of a given member, or the triggering user.\n    See <https://yagpdb-cc.github.io/leveling/view-rank> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{/* Configurable values */}}\n{{ $rankcard := false }}\n{{ $background := "https://xbox-store-checker.com/assets/upload/game/2020/06/optimize/9n5qmw0x81jm-background.jpg" }}\n{{/* End of configurable values */}}\n\n{{/* Instantiate constants */}}\n{{ $barEmpty := "\u25a1" }}\n{{ $barFull := "\u25a0" }}\n{{ $xp := 0 }} {{/* Xp of user */}}\n{{ $color := 14232643 }} {{/* Embed color */}} \n{{ $user := .User }} {{/* Target user */}}\n{{ $colorSet := false }}\n\n{{ with .CmdArgs }}\n    {{ $temp := userArg (index . 0) }}\n    {{ if $temp }}\n        {{ $user = $temp }}\n        {{ with dbGet $user.ID "xpColor" }} {{ $color = .Value }} {{ end }}\n    {{ else if and (eq (index . 0) "set-color") (ge (len .) 2) }}\n        {{ $colorSet = true }}\n        {{ $multipliers := cslice 1048576 65536 4096 256 16 1 }}\n        {{ $hex2dec := sdict "A" 10 "B" 11 "C" 12 "D" 13 "E" 14 "F" 15 }}\n        {{ with reFindAllSubmatches `\\A(?:#?default|([a-fA-F\\d]{1,6}))\\z` (joinStr " " (slice . 1)) }}\n            {{ $hex := "D92C43" }}\n            {{ with index . 0 1 }}\n                {{ $hex = (printf "%06s" .) | upper }}\n            {{ end }}\n            {{ $dec := 0 }}\n            {{ range $k, $v := split $hex "" -}}\n                {{- $multiplier := index $multipliers $k }}\n                {{- $num := or ($hex2dec.Get $v) $v}}\n                {{- $dec = add $dec (mult $num $multiplier) -}}\n            {{ end }}\n            {{ dbSet $user.ID "xpColor" $dec }}\n            {{ dbSet $user.ID "hex" $hex }}\n            {{ $user.Mention }}, I set your rank card color to `#{{ $hex }}`.\n        {{ else }}\n            Please provide a valid hex to set your rank card color to.\n        {{ end }}\n    {{ end }}\n{{ end }}\n{{ if not $colorSet }}\n    {{/* Get the color for this user */}}\n    {{ with dbGet $user.ID "xpColor" }} {{ $color = .Value }} {{ end }}\n    {{ with dbGet $user.ID "xp" }}\n        {{ $xp = .Value }}\n    {{ end }} {{/* If XP is there, use that */}}\n\n    {{ $level := roundFloor (mult 0.1 (sqrt $xp)) }} {{/* Calculate level */}}\n    {{ $current := sub $xp (mult 100 $level $level) }} {{/* current XP for this level */}}\n    {{ if lt (toInt $xp) 100 }}\n        {{ $current = $xp }}\n    {{ end }} {{/* If this level < level 1, use total XP as current */}}\n\n    {{ $nextLvl := add $level 1 }} {{/* Next level */}}\n    {{ $total := sub (mult 100 $nextLvl $nextLvl) (mult 100 $level $level) }} {{/* The total until next level */}}\n    {{ $percentage := (mult (fdiv $current $total) 100) | roundFloor }} {{/* Start with percentage calculations */}}\n    {{ $percentage = div $percentage 10 | toInt }} {{/* Percentage out of 10 */}}\n\n    {{ $bar := "" }} {{/* The progress bar */}}\n    {{ range seq 1 11 }}\n        {{- if ge $percentage . }} {{- $bar = joinStr "" $bar $barFull }} {{/* We join with full bar unicode if percentage > current iteration */}}\n        {{- else }} {{- $bar = joinStr "" $bar $barEmpty }} {{- end -}} {{/* Otherwise, join with empty bar */}}\n    {{ end }}\n\n    {{ $embed := sdict \n        "title" (printf "\u276f %s\'s Rank" $user.String)\n        "color" $color\n        "description" (printf \n            "\u276f **%d / %d** XP\\n\u276f **Total:** %d\\n\u276f **Level:** %d\\n\u276f **Progress bar:**\\n[**%s**](https://yagpdb.xyz)"\n            (toInt $current) (toInt $total) (toInt $xp) (toInt $level) $bar)\n    }} {{/* Format embed */}}\n\n    {{ $rank := 0 }} {{/* Current rank of user */}}\n    {{ range $index, $entry := dbTopEntries "xp" 100 0 }} {{- /* Loop over top 100 entries - see if user is in top 100 */}}\n        {{- if eq .UserID $user.ID }} {{- $rank = add $index 1 }} {{- end -}}\n    {{ end }}\n\n    {{ if $rank }}\n        {{ $embed.Set "description" (printf \n            "\ud83c\udfc6 *Member of Top 100*\\n\\n\u276f **Rank:** %d\\n%s"\n            $rank\n            $embed.description\n        ) }} {{/* If user in top 100, update the description */}}\n    {{ end }}\n{{ $bg := true }}\n{{ with .CmdArgs }}\n{{ $bg = false }}\n{{ if and (eq (index . 0) "set-background") (ge (len .) 2) }}\n              {{ if eq (index . 1) "del" }} {{ dbDel $.User.ID "background" }} deleted\n            {{ else if (reFindAllSubmatches `https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,63}\\b(?:(?:(?:,?[-a-zA-Z0-9@:%_\\+.~#?!&/=*]*)|(?:,?\\([-a-zA-Z0-9@:%_\\+.~#?!&/=*]*\\))*|\\[\\])*)` (index . 1)) }} \n            {{ dbSet $.User.ID "background" (index . 1) }} doneso \n    {{ else }} thats not a valid link!\n{{ end }}\n{{ end }}\n{{ end }}\n{{ if ($rankcard) }}\n{{ $rank = or $rank "100" }}\n{{ $username := urlescape ($user.Username) }}\n{{ with dbGet $user.ID "background" }}\n{{ $background = .Value }} {{end}}\n{{$pfp := "https://discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png"}}\n{{if $user.Avatar}} {{$pfp = ($user.AvatarURL "256")}} {{end}}\n\n{{ sendMessage nil (cembed "color" 4645612 "image" (sdict "url" (print "https://vacefron.nl/api/rankcard?username=" $username "&avatar=" $pfp "&level=" $level "&rank=" $rank "&currentxp=" $current "&nextlevelxp=" $total "&previouslevelxp=0&custombg=" $background "&xpcolor=" ((dbGet $user.ID "hex").Value)))) }} \n     {{ else }}\n    {{ sendMessage nil (cembed $embed) }}\n{{ end }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}c.isMDXComponent=!0}}]);