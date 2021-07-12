(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2981],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,g=c["".concat(p,".").concat(m)]||c[m]||l[m]||i;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2356:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={title:"Custom Report"},p=void 0,u={unversionedId:"moderation/report-system/custom-report",id:"moderation/report-system/custom-report",isDocsHomePage:!1,title:"Custom Report",description:"This command is basically equivalent to the built-in report command, but has some back-end changes in order for the rest of the custom report system to work.",source:"@site/docs/moderation/report-system/custom-report.md",sourceDirName:"moderation/report-system",slug:"/moderation/report-system/custom-report",permalink:"/moderation/report-system/custom-report",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/report-system/custom-report.md",version:"current",frontMatter:{title:"Custom Report"},sidebar:"sidebar",previous:{title:"Cancel Report",permalink:"/moderation/report-system/cancel-report"},next:{title:"Reaction Handler",permalink:"/moderation/report-system/reaction-handler"}},d=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],l={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command is basically equivalent to the built-in report command, but has some back-end changes in order for the rest of the custom report system to work."),(0,i.kt)("p",null,"For more information about the custom report system, see ",(0,i.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A-r(eport)?(?:u(ser)?)?(\\s+|\\z)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-ru <user> <reason>")," - Reports the user provided using the reason given.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aliases")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"ru"),", you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"reportuser"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reportu"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ruser"),"."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$REPORT_LOG"),(0,i.kt)("br",null),"\nThe channel where reports are sent to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.kt)("inlineCode",{parentName:"p"},"$REPORT_DISCUSSION"),(0,i.kt)("br",null),"\nThe channel where users are notified of updates regarding their report."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"file=../../../../src/moderation/report_system/custom_report.go.tmpl",file:"../../../../src/moderation/report_system/custom_report.go.tmpl"},'{{/*\n    Replacement for the built-in report command that integrates with the custom report system.\n    See <https://yagpdb-cc.github.io/moderation/report-system/custom-report> for more information.\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n*/}}\n\n{{/* Configurable values */}}\n{{$REPORT_LOG := 123}}\n{{$REPORT_DISCUSSION := 234}}\n{{/* End of configurable values */}}\n\n{{/* ACTUAL CODE */}}\n{{$p := index (reFindAllSubmatches `.*?: \\x60(.*)\\x60\\z` (execAdmin "prefix")) 0 1}}\n{{$Escaped_Prefix := reReplace `[\\.\\[\\]\\-\\?\\!\\\\\\*\\{\\}\\(\\)\\|\\+]` $p `\\${0}`}}\n{{if not (reFind (print `\\A` $Escaped_Prefix `|<@!?204255221017214977>`) .Message.Content)}}\nDid not set regex to match Server Prefix!{{deleteTrigger}}\n{{else}}\n{{if and .CmdArgs (lt (len .CmdArgs) 2)}}\n    {{if eq (index .CmdArgs 0) "dbSetup"}}\n        {{if (in (split (index (split (exec "viewperms") "\\n") 2) ", ") "ManageServer")}}\n            {{dbSet .Guild.ID "reportSettings" (sdict "reportLog" $REPORT_LOG "reportDiscussion" $REPORT_DISCUSSION)}}\n            {{dbSet .Guild.ID "ReportNo" 0}}\n**Database primed, report count reset, system is ready to use!**\n        {{else}}\nYou do not have permission to use this command!\n        {{end}}\n    {{else}}\n    {{sendMessage nil (printf "```%s <User:Mention/ID> <Reason:Text>``` \\n Not enough arguments passed." .Cmd)}}\n    {{end}}\n{{else if not .CmdArgs}}\n    {{sendMessage nil (printf "```%s <User:Mention/ID> <Reason:Text>``` \\n Not enough arguments passed." .Cmd)}}\n{{else}}\n    {{$user := userArg (index .CmdArgs 0)}}\n    {{if eq $user.ID .User.ID}}\nYou can\'t report yourself, silly.{{deleteTrigger}}\n    {{else}}\n        {{$secret := adjective}}\n        {{$logs250 := execAdmin "log 250"}}\n        {{$reason := joinStr " " (slice .CmdArgs 1)}}\n        {{$history := ""}}\n        {{if (dbGet $user.ID "rhistory")}}\n            {{range (dbGetPattern $user.ID "rhistory%" 7 0)}}\n                {{$history = .Value}}\n            {{end}}\n            {{dbSet $user.ID "rhistory" (print (dbGet $user.ID "rhistory").Value "\\n" (currentTime.Format "02-01-2006-15:04:05") ": " $reason)}}\n        {{else}}\n            {{dbSet $user.ID "rhistory" (print (currentTime.Format "02-01-2006-15:04:05") ": " $reason)}}\n        {{end}}\n        {{$reportNo := dbIncr 2000 "ReportNo" 1}}\n        {{$reportEmbed := cembed "title" (print "Report No. " $reportNo)\n            "author" (sdict "name" (printf "%s (ID %d)" .User.String .User.ID) "icon_url" (.User.AvatarURL "256"))\n            "thumbnail" (sdict "url" ($user.AvatarURL "512"))\n            "description" (printf "<@%d> reported <@%d> in <#%d>." .User.ID $user.ID .Channel.ID)\n            "fields" (cslice\n                (sdict "name" "Current State" "value" "__Not reviewed yet.__")\n                (sdict "name" "Reason for Report" "value" $reason)\n                (sdict "name" "Reported user" "value" (printf "<@%d> (ID %d)" $user.ID $user.ID))\n                (sdict "name" "Message Logs" "value" (printf "[last 250 messages](%s) \\nTime - `%s`" $logs250 (currentTime.Format "Mon 02 Jan 15:04:05")))\n                (sdict "name" "History" "value" (print "```\\n" (or $history "None recorded") "\\n```"))\n                (sdict "name" "Reaction Menu Options" "value" (printf "\\nDismiss report with \u274c, start investigation with \ud83d\udee1\ufe0f, or ask for more background information with \u26a0\ufe0f."))\n            )\n            "footer" (sdict "text" "No moderator yet \u2022 Claim by reacting with \ud83d\udd10")\n        }}\n        {{$x := sendMessageRetID $REPORT_LOG $reportEmbed}}\n        {{addMessageReactions $REPORT_LOG $x "\ud83d\udd10"}}\nUser reported to the proper authorites!\n        {{dbSet .User.ID "key" $secret}}\n        {{if not .Message.Mentions}}\n        {{deleteTrigger}}\n        {{end}}\n        {{sendDM (printf "User reported to the proper authorities! If you wish to cancel your report, simply type \\n```-cancelr %d %s``` in any channel.\\n **A reason is required.**" $x $secret)}}\n{{end}}{{end}}{{end}}\n{{deleteResponse}}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/l-zeuch"},"@l-zeuch"),"."))}c.isMDXComponent=!0}}]);