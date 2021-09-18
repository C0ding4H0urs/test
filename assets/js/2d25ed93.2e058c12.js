"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5447],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1864:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Cancel Report"},c=void 0,p={unversionedId:"moderation/report-system/cancel-report",id:"moderation/report-system/cancel-report",isDocsHomePage:!1,title:"Cancel Report",description:"This command handles report cancellation requests for the custom report system.",source:"@site/docs/moderation/report-system/cancel-report.md",sourceDirName:"moderation/report-system",slug:"/moderation/report-system/cancel-report",permalink:"/moderation/report-system/cancel-report",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/report-system/cancel-report.md",tags:[],version:"current",frontMatter:{title:"Cancel Report"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/moderation/report-system/overview"},next:{title:"Custom Report",permalink:"/moderation/report-system/custom-report"}},l=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command handles report cancellation requests for the custom report system."),(0,a.kt)("p",null,"For more information about the custom report system, see ",(0,a.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\\A-c(ancel)?r(eport)?(\\s+|\\z)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-cr <id> <key> <reason>")," - Cancels the report with the ID provided using the user's secret key and the reason given.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The values for the ID and key parameters are sent to users in DM when they run the report command."))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aliases")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"cr"),", you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelreport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelr"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"creport"),"."))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/moderation/report_system/cancel_report.go.tmpl",file:"../../../../src/moderation/report_system/cancel_report.go.tmpl"},'{{/*\n    Manages and takes care of the cancellation requests for the report system.\n    See <https://yagpdb-cc.github.io/moderation/report-system/cancel-report> for more information.\n\n    Author: Luca Z. <https://github.com/l-zeuch>\n*/}}\n\n{{/*ACTUAL CODE*/}}\n{{$p := index (reFindAllSubmatches `.*?: \\x60(.*)\\x60\\z` (execAdmin "prefix")) 0 1}}\n{{$Escaped_Prefix := reReplace `[\\.\\[\\]\\-\\?\\!\\\\\\*\\{\\}\\(\\)\\|\\+]` $p `\\${0}`}}\n{{if not (reFind (print `\\A` $Escaped_Prefix `|<@!?204255221017214977>`) .Message.Content)}}\nDid not set regex to match Server Prefix! {{deleteTrigger}}\n{{else}}\n{{if lt (len .CmdArgs) 3}}\n```{{.Cmd}} <Message:ID> <Key:Text> <Reason:Text>```\nNot enough arguments passed.\n{{else}}\n    {{$s := sdict (dbGet .Guild.ID "reportSettings").Value}}\n    {{$reportLog := (toInt $s.reportLog)}}\n    {{$reportID := ((index .CmdArgs 0)|toInt)}}\n    {{$report := index (getMessage $reportLog $reportID).Embeds 0|structToSdict}}\n    {{range $k, $v := $report}}\n        {{if eq (kindOf $v true) "struct"}}\n            {{$report.Set $k (structToSdict $v)}}\n        {{end}}\n    {{end}}\n    {{$user := index (reFindAllSubmatches `\\A<@!?(\\d{17,19})>` $report.Description) 0 1|toInt|userArg}}\n    {{$userKey := (dbGet .User.ID "key").Value|str}}\n    {{if eq $user.ID .User.ID}}\n            {{if eq "used" $userKey}}\nYour latest report was already cancelled!\n            {{else}}\n            {{if eq (index .CmdArgs 1) $userKey}}\n                {{if ge (len .CmdArgs) 3}}\n                    {{$reason := joinStr " " (slice .CmdArgs 2)}}\n                    {{with $report}}\n                        {{.Set "Author" (sdict "name" (printf "%s (ID %d)" $user $user.ID) "icon_url" ($user.AvatarURL "256"))}}\n                        {{.Footer.Set "Icon_URL" .Footer.IconURL}}\n                        {{.Set "description" (print .Description (printf "\\nCancellation of this report was requested. \\n Reason: `%s`" $reason))}}\n                        {{.Set "color" 16711935}}\n                        {{.Set "Fields" ((cslice).AppendSlice .Fields)}}{{.Fields.Set 5 (sdict "name" "Reaction Menu Options" "value" (printf "Deny request with \u274c, accept with \ud83d\udc4c, or ask for more information with \u26a0\ufe0f."))}}\n                    {{end}}\n                    {{editMessage $reportLog $reportID (complexMessageEdit "embed" $report)}}\n                    Cancellation requested, have a nice day!\n                    {{dbSet .User.ID "key" "used"}}\n                {{end}}\n            {{else}}\nInvalid key provided!\n            {{end}}\n        {{end}}\n        {{else}}\nYou are not the author of this report!\n    {{end}}{{end}}{{end}}{{deleteResponse}}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/l-zeuch"},"@l-zeuch"),"."))}m.isMDXComponent=!0}}]);