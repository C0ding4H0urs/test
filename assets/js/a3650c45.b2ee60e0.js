"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3717],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Configure Role Rewards"},s=void 0,d={unversionedId:"leveling/configure-role-rewards",id:"leveling/configure-role-rewards",isDocsHomePage:!1,title:"Configure Role Rewards",description:"This command allows administrators to manage role rewards.",source:"@site/docs/leveling/configure-role-rewards.md",sourceDirName:"leveling",slug:"/leveling/configure-role-rewards",permalink:"/leveling/configure-role-rewards",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/leveling/configure-role-rewards.md",tags:[],version:"current",frontMatter:{title:"Configure Role Rewards"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/leveling/overview"},next:{title:"Configure Settings",permalink:"/leveling/configure-settings"}},c=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This command allows administrators to manage role rewards."),(0,l.kt)("h2",{id:"trigger"},"Trigger"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(role-?rewards|rr)(\\s+|\\z)")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Unless you would like everyone to be able to configure role rewards, we advise that you restrict this command to a staff role in the role restrictions."))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can view a similar help message to the following in Discord by running ",(0,l.kt)("inlineCode",{parentName:"p"},"-rr")," with no arguments."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-rr add <level> <role_name>")," - Adds a role reward to ",(0,l.kt)("inlineCode",{parentName:"li"},"level"),". ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," must be between 1 and 100, and there can be at max 1 role reward per level."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-rr remove <level>")," - Removes the role reward for the level provided, if it exists."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-rr set-type <'stack'|'highest'>")," - Sets the mode in which role rewards are given to users.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stack")," means that role rewards will ",(0,l.kt)("em",{parentName:"li"},"stack"),", hence the name: users will keep all the role rewards that they are eligible for."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"highest")," means that the user will only keep the role reward for the highest level they have attained so far."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-rr reset")," - Resets the role reward settings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-rr view")," - Views the current role reward setup.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Aliases")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"rr"),", you can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"rolerewards")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"role-rewards"),"."))),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/leveling/role_rewards.go.tmpl",file:"../../../src/leveling/role_rewards.go.tmpl"},'{{/*\n    Manages the role rewards of the server.\n    See <https://yagpdb-cc.github.io/leveling/configure-role-rewards> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{/* Help message */}}\n{{ $helpMsg := cembed\n    "title" "\ud83c\udfc6 Role Rewards"\n    "description" (joinStr "\\n\\n"\n        "`rolerewards add <level> <role>`: Adds a role reward at the given level"\n        "`rolerewards remove <level>`: Removes the role reward from the given level"\n        "`rolerewards set-type <highest|stack>`: Sets the role reward type. Highest means only the highest role reward less than or equal to the current level, stack is all role rewards up to that level."\n        "`rolerewards reset`: Resets role reward settings."\n        "`rolerewards view`: Views current settings for role rewards."\n    )\n    "color" 14232643\n}}\n{{ if .CmdArgs }}\n    {{ $roleRewards := sdict "type" "stack" }} {{/* The default setup */}}\n    {{ with (dbGet 0 "roleRewards") }}\n        {{ $roleRewards = sdict .Value }} {{/* Update with DB entry if present */}}\n    {{ end }}\n    {{ $cmd := index .CmdArgs 0 }} {{/* The subcommand used for convenience */}}\n\n    {{ if and (eq $cmd "add") (ge (len .CmdArgs) 3) }}\n        {{ $level := index .CmdArgs 1 | toInt }} {{/* The level for this role reward */}}\n        {{ $input := slice .CmdArgs 2 | joinStr " " | lower }} {{/* The role name in lowercase */}}\n\n        {{/* Exact match (irregardless of case) */}}\n        {{ $exactRole := 0 }}\n        {{/* Match from inFold */}}\n        {{ $maybeRole := 0 }}\n        \n        {{ with reFindAllSubmatches `^<@&(\\d{17,19})>|(\\d{17,19})$` $input }}\n            {{ $id := toInt (or (index . 0 1) (index . 0 2)) }}\n            {{ range $.Guild.Roles }}\n                {{- if eq .ID $id }} {{ $exactRole = . }} {{ end -}}\n            {{ end }}\n        {{ else }}\n            {{ range .Guild.Roles }}\n                {{- if eq (lower .Name) (lower $input) }} {{ $exactRole = . }}\n                {{- else if inFold (lower .Name) (lower $input) }} {{ $maybeRole = . }}\n                {{- end -}}\n            {{ end }}\n        {{ end }}\n\n        {{ $role := or $exactRole $maybeRole }}\n        {{/* If there is both level and role */}}\n        {{ if and $level $role }}\n            {{ if and (ge $level 1) (le $level 200) }} {{/* If level is in correct range */}}\n                {{ $roleRewards.Set (str $level) $role.ID }}\n                {{ $s := dbSet 0 "roleRewards" $roleRewards }} {{/* Save settings */}}\n                Successfully set the role `{{ $role.Name }}` to be given at the level `{{ $level }}`.\n            {{ else }}\n                Sorry, the level provided was not in the range 1-200.\n            {{ end }}\n        {{ else }}\n            Sorry, I was unable to find the role you provided / the level provided was invalid.\n        {{ end }}\n\n    {{ else if and (eq $cmd "set-type") (ge (len .CmdArgs) 2) }}\n        {{ $type := index .CmdArgs 1 }}\n        {{ if not (in (cslice "stack" "highest") $type) }} {{/* Check whether type is valid */}}\n            Sorry, that was not a valid type. The type must be either "stack" or "highest".\n        {{ else }}\n            {{ $roleRewards.Set "type" $type }}\n            {{ $s := dbSet 0 "roleRewards" $roleRewards }} {{/* Save settings */}}\n            Successfully set the role-giving type of this server to `{{ $type }}`.\n        {{ end }}\n\n    {{ else if eq $cmd "reset" }}\n        {{ $s := dbSet 0 "roleRewards" (sdict "type" "stack") }} {{/* We set the settings to default */}}\n        Alright, I cleared the role rewards for this server!\n\n    {{ else if and (eq $cmd "remove") (ge (len .CmdArgs) 2) }}\n        {{ with (reFind `\\d+` (index .CmdArgs 1)) }} {{/* Find level to remove */}}\n            {{ if $roleRewards.Get . }}\n                {{ $roleRewards.Del . }}\n                {{ $s := dbSet 0 "roleRewards" $roleRewards }}\n                Successfully removed the role reward from the level `{{ . }}`.\n            {{ else }}\n                Sorry, there is not a role reward set for that level!\n            {{ end }}\n        {{ else }}\n            Please provide a valid level to remove the role reward from.\n        {{ end }}\n\n    {{ else if eq $cmd "view" }}\n        {{ if eq (len $roleRewards) 1 }} {{/* If it is still the default settings */}}\n            {{ sendMessage nil (cembed "title" "Role Rewards" "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png") "description" (joinStr "" "**\u276f Role Rewards:** n/a\\n**\u276f Type:** " $roleRewards.type)) }}\n        {{ else }}\n            {{ $out := "" }} {{/* The embed description */}}\n            {{ range $level := seq 1 201 }} {{- /* We can do this as we know level roles are in range 1-100 */}}\n                {{- with ($roleRewards.Get (str $level)) }}\n                    {{- $out = printf "%s\\n\u276f **Level %d:** <@&%d>" $out $level . }}\n                {{- end -}}\n            {{ end }}\n            {{/* Format and send embed */}}\n            {{ sendMessage nil (cembed "title" "Role Rewards" "thumbnail" (sdict "url" "https://i.imgur.com/mJ7zu6k.png") "description" (joinStr "" $out "\\n\\n" "**\u276f Type:** " $roleRewards.type)) }}\n        {{ end }}\n\n    {{ else }}\n        {{ sendMessage nil $helpMsg }}\n    {{ end }}\n{{ else }}\n    {{ sendMessage nil $helpMsg }}\n{{ end }}\n')),(0,l.kt)("h2",{id:"author"},"Author"),(0,l.kt)("p",null,"This custom command was written by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}p.isMDXComponent=!0}}]);