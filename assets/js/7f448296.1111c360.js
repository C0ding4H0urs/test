"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6834],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,c=p["".concat(d,".").concat(f)]||p[f]||m[f]||r;return n?o.createElement(c,i(i({ref:t},s),{},{components:n})):o.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return l}});var o=n(3117),a=(n(7294),n(3905));const r={title:"Staff On Duty"},i=void 0,u={unversionedId:"moderation/staff-on-duty",id:"moderation/staff-on-duty",title:"Staff On Duty",description:'On-duty staffing system. You will need to set up an "on duty" role pingable by members.',source:"@site/docs/moderation/staff-on-duty.md",sourceDirName:"moderation",slug:"/moderation/staff-on-duty",permalink:"/moderation/staff-on-duty",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/staff-on-duty.md",tags:[],version:"current",frontMatter:{title:"Staff On Duty"},sidebar:"sidebar",previous:{title:"Slowmode",permalink:"/moderation/slowmode"},next:{title:"Overview",permalink:"/suggestion/overview"}},d={},l=[{value:"Features",id:"features",level:2},{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'On-duty staffing system. You will need to set up an "on duty" role pingable by members.'),(0,a.kt)("p",null,"The idea behind this CC is to have an easy way for server members to ping only the staff who have self designated themselves as available to moderate. In most servers pinging staff is discouraged to the point that people won't do it even when swift moderation is necessary. By providing an encouraged method of reaching only the active staff members, it should provide faster response time to issues without members needing to ping a specific person who may or may not be available."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Adds/removes an "on duty" role of your choice',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Automatically adds back "only duty" role to staff who\'ve manually removed the role but are designated as on duty.'))),(0,a.kt)("li",{parentName:"ul"},"Updates channel topic in a given channel to provide a visible on duty staff list",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Respects Discord ratelimits for channel updates"),(0,a.kt)("li",{parentName:"ul"},"Keeps user defined channel topic intact"))),(0,a.kt)("li",{parentName:"ul"},"Automatically removes staff from the list after a time"),(0,a.kt)("li",{parentName:"ul"},"List on-duty staff using ",(0,a.kt)("inlineCode",{parentName:"li"},"-onduty list")),(0,a.kt)("li",{parentName:"ul"},"Manually remove staff from the list using ",(0,a.kt)("inlineCode",{parentName:"li"},"-offduty <user>")),(0,a.kt)("li",{parentName:"ul"},"Force update the channel topic using ",(0,a.kt)("inlineCode",{parentName:"li"},"-onduty update"))),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(o(n|ff)duty)(\\s+|\\z)")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Unless you would like everyone to be able to use these commands, we advise that you limit it to a staff role in the role restrictions.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-onduty")," - Mark yourself as on duty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-onduty list")," - Display a list of staff members designated as on duty and reassign on duty role if needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-onduty update")," - Force an update of the channel topic. Will update five minutes after the command is ran."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-offduty")," - Mark yourself as off duty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-offduty <user>")," - Manually mark the specified user as off duty.")),(0,a.kt)("admonition",{title:"Limitations",type:"caution"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On non-premium servers, the ",(0,a.kt)("inlineCode",{parentName:"p"},"onduty")," command will occasionally require an additional command to be run.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This command was built around channel topic editing. You can use it without editing the topic but certain actions will be unnecessary or delayed.")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,a.kt)("inlineCode",{parentName:"p"},"$dutyRole"),(0,a.kt)("br",null),'\nID of your "on duty" role.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$autoOff"),(0,a.kt)("br",null),"\nNumber of hours before on duty role is automatically removed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,a.kt)("inlineCode",{parentName:"p"},"$dutyChannel"),(0,a.kt)("br",null),"\nID of the channel where the topic should be updated periodically.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$chanEdit"),(0,a.kt)("br",null),"\nWhether or not channel topic editing is enabled."))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/moderation/staff_on_duty.go.tmpl",file:"../../../src/moderation/staff_on_duty.go.tmpl"},'{{/*\n    On-duty staff system that allows staff members to designate themselves as "on-duty".\n    See <https://yagpdb-cc.github.io/moderation/staff-on-duty> for more information.\n\n    Author: dvoraknt <https://github.com/dvoraknt>\n*/}}\n\n{{/* Configurable values */}}\n{{$dutyRole := 539502575758737408}}\n{{$autoOff := 10}}\n\n{{$dutyChannel := 503913846684123166}}\n{{$chanEdit := true}}\n{{/* End of configurable values */}}\n\n{{if not (dbGet 0 "modOnDuty")}}{{dbSet 0 "modOnDuty" ""}}{{end}}{{/*creates initial database slot. you can delete this after first run if you know what you are doing*/}}\n\n{{$onDuty := ""}}\n{{if .ExecData}}\n    {{if eq (str .ExecData) "update"}}\n        {{$current := 0}}{{$name := ""}}{{$member := ""}}{{$dutyList := ""}}\n        {{$onDuty = (dbGet 0 "modOnDuty").Value}}\n        {{$dutySplit := split $onDuty ";"}}\n        {{if eq (len $dutySplit) 1}}{{$dutyList = "None"}}{{else}}\n        {{range $dutySplit}}\n            {{- $current = (toInt . ) -}}\n            {{if $current}}\n                {{$member = getMember $current}}\n                {{$name = or $member.Nick $member.User.Username}}\n                {{- $dutyList = joinStr ", " $dutyList $name -}}\n                {{if not (targetHasRoleID $current $dutyRole)}}{{giveRoleID $current $dutyRole}}{{end}}\n            {{end}}{{end}}\n        {{end}}\n        {{if $chanEdit}}\n            {{$curTopic := index (reSplit `(-\\s)?Staff on duty:` (.Guild.GetChannel $dutyChannel).Topic) 0}}\n            {{if $curTopic}}\n                {{$curTopic = print $curTopic " - Staff on duty: " $dutyList}}\n            {{else}}\n                {{$curTopic = print "Staff on duty: " $dutyList}}\n            {{end}}\n            {{if gt (len $curTopic) 1024}}\n                {{sendDM (print "**On duty CC report:** your channel topic could not be changed - topic exceeded 1024 characters. Please shorten your user defined topic text or contact the person in charge of your servers YAGPDB custom commands to disable the staff list.")}}\n            {{else}}\n                {{editChannelTopic $dutyChannel (print $curTopic)}}\n            {{end}}\n        {{end}}\n\n    {{else}}\n        {{takeRoleID .ExecData $dutyRole 0}}\n        {{sendDM (print "You have been automatically removed from duty after (" $autoOff ") hour(s), if this is a mistake go back on duty.")}}\n        {{$onDuty = (dbGet 0 "modOnDuty").Value}}\n        {{$onDuty = reReplace (print .ExecData ";") $onDuty ""}}\n        {{dbSet 0 "modOnDuty" $onDuty}}\n        {{if not (dbGet 0 "onDutyCD")}}\n            {{execCC .CCID nil 305 "update"}}\n            {{dbSetExpire 0 "onDutyCD" "on CD" 306}}\n        {{end}}\n    {{end}}\n\n{{else}}\n{{/*==================*/}}\n\n{{if and .CmdArgs (eq .Cmd "-offduty")}}\n    {{if $idiotStaff := reFind `(\\d{17,20})` (index .CmdArgs 0)}}\n        {{takeRoleID $idiotStaff $dutyRole 0}}\n        {{sendMessage  nil (print (getMember $idiotStaff).User.String " is no longer on duty.")}}\n        {{$onDuty = (dbGet 0 "modOnDuty").Value}}\n        {{$onDuty = reReplace (print $idiotStaff ";") $onDuty ""}}\n        {{dbSet 0 "modOnDuty" $onDuty}}\n        {{if not (dbGet 0 "onDutyCD")}}\n            {{execCC .CCID nil 305 "update"}}\n            {{dbSetExpire 0 "onDutyCD" "on CD" 306}}\n        {{end}}\n    {{else}}\n        {{sendMessage nil (print "No valid mention or user ID found.")}}\n    {{end}}\n{{else if and .CmdArgs (eq .Cmd "-onduty")}}\n    {{$subCmd := index .CmdArgs 0}}\n    {{if eq $subCmd "list"}}\n    {{$current := 0}}{{$name := ""}}{{$member := ""}}{{$dutyList := ""}}\n        {{$onDuty = (dbGet 0 "modOnDuty").Value}}\n        {{$dutySplit := split $onDuty ";"}}\n        {{if eq (len $dutySplit) 1}}{{$dutyList = "None"}}{{else}}\n        {{range $dutySplit}}\n            {{- $current = (toInt . ) -}}\n            {{if $current}}\n                {{$member = getMember $current}}\n                {{$name = or $member.Nick $member.User.Username}}\n                {{- $dutyList = joinStr ", " $dutyList $name -}}\n                {{if not (targetHasRoleID $current $dutyRole)}}{{giveRoleID $current $dutyRole}}{{end}}\n            {{end}}{{end}}\n        {{end}}\n        {{sendMessage nil (print "Staff on duty: " $dutyList)}}\n    {{else if eq $subCmd "update"}}\n        {{if and $chanEdit (not (dbGet 0 "onDutyCD"))}}\n            {{execCC .CCID nil 305 "update"}}\n            {{dbSetExpire 0 "onDutyCD" "on CD" 306}}\n            {{sendMessage nil (print "Thanks! I\'ll update the channel topic in five minutes.")}}\n        {{else if $chanEdit}}\n            {{sendMessage nil (print "Looks like I don\'t need that right now.")}}\n        {{else}}\n            {{sendMessage nil (print "Your server has topic edits disabled so this command is pretty much useless. If you want me to double check that all on duty staff members still have the role you can send `-onduty list`")}}\n        {{end}}\n\n    {{else}}\n        {{sendMessage nil (print "You can\'t force other people on duty!")}}\n    {{end}}\n\n{{else}}\n{{/*==================*/}}\n\n{{if and (hasRoleID $dutyRole) (eq .Cmd "-onduty")}}\n    {{sendMessage nil (print "You\'re already on duty! Send `-offduty` to take a break.")}}\n\n{{else if and (not (hasRoleID $dutyRole)) (eq .Cmd "-offduty")}}\n    {{sendMessage nil (print "You\'re already off duty! Send `-onduty` to go on patrol.")}}\n\n{{else if and (hasRoleID $dutyRole) (eq .Cmd "-offduty")}}\n    {{removeRoleID $dutyRole 0}}\n    {{sendMessage  nil (print "You are now off duty.")}}\n    {{$onDuty = (dbGet 0 "modOnDuty").Value}}\n    {{$onDuty = reReplace (print .User.ID ";") $onDuty ""}}\n    {{dbSet 0 "modOnDuty" $onDuty}}\n    {{cancelScheduledUniqueCC .CCID (print "onduty-" .User.ID)}}\n    {{if not (dbGet 0 "onDutyCD")}}\n        {{execCC .CCID nil 305 "update"}}\n        {{dbSetExpire 0 "onDutyCD" "on CD" 306}}\n    {{end}}\n\n{{else if and (not (hasRoleID $dutyRole)) (eq .Cmd "-onduty")}}\n    {{addRoleID $dutyRole}}\n    {{sendMessage nil (print "You are now on duty.")}}\n    {{$onDuty = print (or (dbGet 0 "modOnDuty").Value) .User.ID ";"}}\n    {{dbSet 0 "modOnDuty" $onDuty}}\n    {{scheduleUniqueCC .CCID nil (mult 3600 $autoOff) (print "onduty-" .User.ID) .User.ID}}\n    {{if and $chanEdit (not (dbGet 0 "onDutyCD")) (not .IsPremium)}}\n        {{sendMessage nil (print .User.Mention " Woah there, unfortunately since this server doesn\'t have YAGPDB premium you\'re going to have to send `-onduty update` to initiate the channel topic update. Sorry for the extra work but I could only make this work for standard servers using this method. You\'ll only have to do this step under certain conditions so hopefully not too often.")}}\n    {{else if and $chanEdit (not (dbGet 0 "onDutyCD"))}}\n        {{execCC .CCID nil 305 "update"}}\n        {{dbSetExpire 0 "onDutyCD" "on CD" 306}}\n    {{end}}\n{{end}}\n{{end}}\n{{end}}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dvoraknt"},"@dvoraknt"),"."))}m.isMDXComponent=!0}}]);