"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9830],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=s(t),p=l,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2561:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return s}});var o=t(3117),l=(t(7294),t(3905));const r={title:"Lockdown"},i=void 0,a={unversionedId:"moderation/lockdown",id:"moderation/lockdown",title:"Lockdown",description:"Simulates a lockdown command.",source:"@site/docs/moderation/lockdown.md",sourceDirName:"moderation",slug:"/moderation/lockdown",permalink:"/moderation/lockdown",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/lockdown.md",tags:[],version:"current",frontMatter:{title:"Lockdown"},sidebar:"sidebar",previous:{title:"Emote Filter",permalink:"/moderation/emote-filter"},next:{title:"Nickname Moderation",permalink:"/moderation/nickname-moderation"}},c={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Simulates a lockdown command."),(0,l.kt)("p",null,"It accomplishes this by deleting every message sent if the channel is locked; it does not actually change any role permissions."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The reason this command locks down channels in such a roundabout way is because modifying channel permissions directly is not supported in YAGPDB template scripting.\nThis may change in the future, but for now, this command is the closest you can get to a lockdown command.")),(0,l.kt)("h2",{id:"trigger"},"Trigger"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\\A")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".*")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-lock <channel|'nil'> <amount>")," - Locks down the channel provided (",(0,l.kt)("inlineCode",{parentName:"li"},"nil")," denotes the current channel) and deletes the ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," most recent messages. To delete no messages, use ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," for amount. Messages from moderators will not be deleted."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-unlock <channel>")," - Unlocks a channel previously locked using this command.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-lock nil 5\n")),(0,l.kt)("p",null,"Would lock the current channel and delete the 5 most recent messages, excluding those of moderators."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,l.kt)("inlineCode",{parentName:"li"},"$ModsRoles"),(0,l.kt)("br",null),"\nList of role IDs. A member with any one of these roles will be considered a moderator and will be exempt from lockdown.")),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/moderation/lockdown.go.tmpl",file:"../../../src/moderation/lockdown.go.tmpl"},'{{/*\n    "Locks down" channels by deleting all messages sent. Does not actually change permissions.\n    See <https://yagpdb-cc.github.io/moderation/lockdown> for more information.\n\n    Author: Pedro Pessoa <https://github.com/Pedro-Pessoa>\n*/}}\n\n{{/* Configurable values */}}\n{{$ModsRoles := cslice 674429313097007106 673258482211749917}}\n{{/* End of configurable values */}}\n\n{{/* ACTUAL CODE DONT TOUCH */}}\n{{$isMod := false}} {{range .Member.Roles}} {{if in $ModsRoles .}} {{$isMod = true}} {{end}} {{end}}\n{{$isCmd := false}} {{if (and (reFind `\\A-(un)?lock` (lower .Cmd)) ($isMod))}} {{$isCmd = true}} {{end}}\n{{if and (dbGet .Channel.ID "is_blocked") (not $isMod)}} {{deleteTrigger 1}}\n{{else}}\n    {{if not $isMod}}\n        {{with (dbGet .Channel.ID "msg_tracker").Value}}\n            {{$slice := cslice.AppendSlice .}}\n            {{if lt (len $slice) 50}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{else}}\n                {{$slice = slice $slice 1}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{end}}\n        {{else}}\n            {{$firstID := cslice .Message.ID}}\n            {{dbSet .Channel.ID "msg_tracker" $firstID}}\n        {{end}}\n    {{end}}\n{{end}}\n{{if $isCmd}}\n    {{$split := split .Cmd " "}}\n    {{if ge (len $split) 2}}\n        {{$channel := reReplace `<|>|#` (index $split 1) ""}}\n        {{if eq (lower $channel) "nil"}} {{$channel = .Channel.ID}}\n        {{else if reFind `\\d{17,19}` $channel}} {{$channel = toInt $channel}}\n        {{end}}\n        {{if getChannelOrThread $channel}}\n            {{if not (reFind `^-un` (lower .Cmd))}}\n                {{if eq (len $split) 3}}\n                    {{$amount := (toInt (index $split 2))}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is already blocked.\n                    {{else}}\n                        {{dbSet $channel "is_blocked" true}}\n                        {{with (dbGet $channel "msg_tracker").Value}}\n                            {{$slice := cslice.AppendSlice .}}\n                            {{if gt $amount (len $slice)}} {{$amount = sub (len $slice) 1}} {{end}}\n                            {{if gt $amount 0}}\n                                {{$counter := 1}}\n                                {{range seq 0 $amount}}\n                                    {{- with (getMessage $channel (index $slice (sub (len $slice) $counter))) -}}\n                                        {{- if not .Pinned -}}\n                                            {{- deleteMessage $channel .ID 1 -}}\n                                        {{- end -}}\n                                    {{- end -}}\n                                    {{- $counter = add $counter 1 -}}\n                {{end}}\n                                {{$slice = slice $slice 0 (sub (len $slice) $amount)}}\n                                {{dbSet $channel "msg_tracker" $slice}}\n                            {{end}}\n                        {{end}}\n                        The channel <#{{$channel}}> is now blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -lock <channelID> <amount of msgs to del>\\n``ChannelID`` can be nil and ``amount of msgs`` can be 0."}}\n                {{end}}\n            {{else}}\n                {{if eq (len $split) 2}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is no longer blocked.\n                        {{dbDel $channel "is_blocked"}}\n                    {{else}}\n                        The channel <#{{$channel}}> is not blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -unlock <channelID>\\n``ChannelID`` can be nil"}}\n                {{end}}\n            {{end}}\n        {{else}}\n            Thats not a valid channel.\n        {{end}}\n    {{else}}\n        {{print "**Correct usage is:**\\n`-unlock <channelID>`\\n`-lock <channelID> <amount of msgs to del>`"}}\n    {{end}}\n{{end}}\n')),(0,l.kt)("h2",{id:"author"},"Author"),(0,l.kt)("p",null,"This custom command was written by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Pedro-Pessoa"},"@Pedro-Pessoa"),"."))}u.isMDXComponent=!0}}]);