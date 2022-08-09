"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4639],{3905:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return m}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},l=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},$={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(o,".").concat(m)]||u[m]||$[m]||r;return a?t.createElement(g,s(s({ref:n},l),{},{components:a})):t.createElement(g,s({ref:n},l))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,s[1]=d;for(var c=2;c<r;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6796:function(e,n,a){a.r(n),a.d(n,{assets:function(){return o},contentTitle:function(){return s},default:function(){return $},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var t=a(3117),i=(a(7294),a(3905));const r={title:"Main CC"},s=void 0,d={unversionedId:"giveaway/basic-v2/main-cc",id:"giveaway/basic-v2/main-cc",title:"Main CC",description:"This command allows administrators to manage giveaways. Supports invocation via execCC as well.",source:"@site/docs/giveaway/basic-v2/main-cc.md",sourceDirName:"giveaway/basic-v2",slug:"/giveaway/basic-v2/main-cc",permalink:"/giveaway/basic-v2/main-cc",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/giveaway/basic-v2/main-cc.md",tags:[],version:"current",frontMatter:{title:"Main CC"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/giveaway/basic-v2/overview"},next:{title:"Reaction Handler",permalink:"/giveaway/basic-v2/reaction-handler"}},o={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],l={toc:c};function $(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command allows administrators to manage giveaways. Supports invocation via ",(0,i.kt)("inlineCode",{parentName:"p"},"execCC")," as well."),(0,i.kt)("p",null,"For more information about this particular version of the giveaway package, see ",(0,i.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"giveaway")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unless you would like everyone to be able to manage giveaways, we advise that you restrict this command to a staff role in the role restrictions.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"overview/#usage"},"giveaway package overview")," for more information about how to use this command."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Again, see the ",(0,i.kt)("a",{parentName:"p",href:"overview/#configuration"},"giveaway package overview")," for more information about how to configure this command."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/giveaway/basic_v2/giveaway.go.tmpl",file:"../../../../src/giveaway/basic_v2/giveaway.go.tmpl"},'{{/*\n    Main giveaway command, supports invocation via execCC.\n    See <https://yagpdb-cc.github.io/giveaway/basic-v2/main-cc> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{/* Configurable values */}}\n{{$giveawayEmoji:=`\ud83c\udf89`}}\n{{/* End of configurable values */}}\n\n{{/*Actual Code*/}}\n\n{{/*Global variables*/}}\n{{$syntaxError:=0}}{{$CmdArgs:=""}}{{$StrippedMsg:=""}}{{$Cmd:=""}}{{$ExecData:=0}}\n{{/*Set data according to Direct Invoke, Invole via ExecCC or giveaway End handling*/}}\n{{if not .ExecData}}{{$CmdArgs =.CmdArgs}}{{$StrippedMsg =reReplace `\\A\\s+|\\s+\\z` .StrippedMsg ""}}{{$Cmd =.Cmd}}\n{{else if toInt .ExecData}}{{$ExecData =str .ExecData}}\n{{else if eq (printf "%T" .ExecData) "string"}}\n{{$args:=split .ExecData " "}}\n{{if gt (len $args) 1}}\n{{$StrippedMsg =reReplace `(\\A\\s+)|(\\s+\\z)` (joinStr " " (slice $args 1)) ""}}\n{{$Cmd =index $args 0}}{{$CmdArgs =split (reReplace `\\s{2,}` $StrippedMsg " ") " "}}\n{{end}}\n{{end}}\n\n{{/*Is Giveaway Ending Handling?*/}}\n{{if  not $ExecData }}\n{{if gt (len $CmdArgs) 0 }}\n{{$subCmd:=lower (index $CmdArgs 0)}}\n{{if or (gt (len $CmdArgs) 1) (eq $subCmd "list") (eq $subCmd "reroll")}}\n\n{{/*Command-Start*/}}\n{{if eq $subCmd "start"}}\n\n{{/*Variable Declarations*/}}\n{{$CmdArgs:=reReplace (print `(?i)\\A` $subCmd `\\s*`) $StrippedMsg ""}}\n{{$maxP:=-1}}{{$maxW:=1}}{{$chan:=.Channel.ID}}{{$ID:=""}}\n{{$uID:=toInt (currentTime.Sub (newDate 2019 10 10 0 0 0)).Seconds}}\n\n\n{{/*Handling flags, parsing data from input*/}}\n{{with reFindAllSubmatches `(?i)-w (\\d+)(?:\\s+|\\z)` $CmdArgs}}\n        {{$CmdArgs =reReplace (index . 0 0) $CmdArgs ""}}\n        {{$maxW =toInt (index . 0 1)}}\n{{end}}\n\n{{with reFindAllSubmatches `(?i)-p (\\d+)(?:\\s+|\\z)` $CmdArgs}}\n        {{$CmdArgs =reReplace (index . 0 0) $CmdArgs ""}}\n        {{$maxP = toInt (index . 0 1)}}\n{{end}}\n\n{{with reFindAllSubmatches `(?i)(-c (?:<#)?(\\d+)>?(?:\\s+|$))` $CmdArgs}}\n        {{$CmdArgs =reReplace (index . 0 0) $CmdArgs ""}}\n        {{$chan =index . 0 2}}\n{{end}}\n\n{{$temp:=split $CmdArgs  " "}}\n\n{{/*To Duration*/}} \n{{$duration:=toDuration (index $temp 0)}}\n{{$prize := ""}}\n{{if gt (len $temp) 1}}{{$prize =joinStr " " (slice $temp 1)}}{{end}}\n{{$prize =reReplace `\\A\\s+` $prize ""}}\n\n{{/*if valid duration & prize*/}}\n{{if and ($duration)  ($prize)}} \n\n{{/*if max Participants > max Winners*/}}\n{{if or (ge $maxP $maxW) (eq $maxP -1)}}\n\n{{/*Giveaway Announcement*/}}\n{{with sendMessageNoEscapeRetID $chan (cembed "title" "loading...")}}\n\n{{/*Make giveaway sdict data Structure*/}}\n{{$ID =joinStr "" $chan .}}\n{{$giveawaySdict := sdict "chan" $chan "count" 0 "ID" $ID "listID" "" "maxWinners"  $maxW "maxParticipants" $maxP "expiresAt" (currentTime.Add $duration) "prize" $prize "uID" $uID "host" $.User.Mention}} \n\n{{/*Send Actual Announcement Message*/}}\n{{addMessageReactions $chan . $giveawayEmoji}}\n{{$desc:=print  `>>> **Prize : **` $prize "\\n\\n"}}\n{{if gt $maxW 0}}{{$desc =print $desc "**Max Winners :** " $maxW }}{{end}}\n{{if gt $maxP 0}}{{$desc =print $desc "\u2800\u2800\u2800\u2800\u2800**Max Participants :** " $maxP}}{{end}}\n{{$desc =print $desc "\\n\\n**Hosted By :** " $.User.Mention "\\n\\n**React with " $giveawayEmoji " to enter GiveAway **"}}\n{{editMessageNoEscape $chan . (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Started !!**\ud83c\udf1f\ud83c\udf1f" "description"  $desc "color" 16763170 "footer" (sdict "text" (print "ID: " $uID " | GiveAway Ends " )) "timestamp" $giveawaySdict.expiresAt) }}\n\n{{/*Update database values; schedule giveaway end*/}}\n{{$dbData:=sdict (or (dbGet 7777 "giveaway_active").Value sdict)}}\n{{$dbData.Set $ID $giveawaySdict}}{{dbSet 7777 "giveaway_active" $dbData}}\n{{$dbData =sdict (or (dbGet 7777 "giveaway_active_IDs").Value sdict)}}\n{{$dbData.Set (str $uID) $ID}}{{dbSet 7777 "giveaway_active_IDs" $dbData}}\n{{scheduleUniqueCC $.CCID $chan $duration.Seconds $uID  $ID}}\n\n{{else}}\n**Invalid Channel !!**\n{{end}}\n\n{{else}}\n**Error:** Max Winners cannot be more than Max Participants!!\n{{end}}\n\n{{else}}\n**Error:** Invalid Duration or Prize !!\n{{end}}\n\n{{/*Command-End*/}}\n{{else if eq $subCmd "end"}}\n{{$uID:=index $CmdArgs 1}}\n{{/*if giveaways active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{/*if uID is valid*/}}\n{{$ID:=index (dbGet 7777 "giveaway_active_IDs").Value $uID}}\n{{with (index . (str $ID))}}\n{{/*reschedule giveaway to end instantly*/}}\n{{cancelScheduledUniqueCC $.CCID .uID}}{{$s := sendTemplate .chan "g_end" "ID" (str $ID)}}\n\n{{else}}\n**Error:** Invalid ID ``{{$uID}}``\n{{end}}\n\n{{else}}\n**Error:** No Active Giveaways.\n{{end}}\n\n{{/*Command Cancel*/}}\n{{else if eq $subCmd "cancel"}}\n{{$uID := index $CmdArgs 1}}{{$ID:=0}}\n\n{{/*Checking if any giveaways are active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{$dbID:=(dbGet 7777 "giveaway_active_IDs").Value}}{{$ID =index $dbID $uID}}\n\n{{/*if ID is valid*/}}\n{{with (index . (str $ID))}}\n{{/*cancelling giveaway end scheduled cc, updating giveaway announcement msg*/}}\n{{$chan:=.chan}}{{$prize:=.prize}}{{$host:=.host}}\n{{cancelScheduledUniqueCC $.CCID .uID}}\n{{$msg:=index ( split $ID (str $chan)) 1}}\n{{with (getMessage $chan $msg )}}{{editMessage $chan $msg (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Cancelled !!**\ud83c\udf1f\ud83c\udf1f" "description" (print ">>> **Prize :** "  $prize "\\n\\n**Hosted By : **" $host) "footer" (sdict "text" "Giveaway Cancelled") "color" 12257822 )}}{{end}}Done!\n\n{{else}}\n**Error:** Invalid ID ``{{$uID}}``\n{{end}}\n\n{{/*if found, update giveaway database*/}}\n{{if $ID}}\n{{$newdbData:=sdict .}}{{$newdbData.Del $ID}}\n{{dbSet 7777 "giveaway_active" $newdbData}}\n{{$newdbData =sdict $dbID}}{{$newdbData.Del $uID}}\n{{dbSet 7777 "giveaway_active_IDs" $newdbData}}\n{{end}}\n\n{{else}}\n**Error:** No Active Giveaways.\n{{end}}\n\n{{/*Command-Reroll*/}}\n{{else if eq $subCmd "reroll"}}\n{{$ID:=1}}\n{{if gt (len $CmdArgs) 1}}{{$ID =toInt (index $CmdArgs 1)}}{{end}}\n{{$found:=false}}\n\n{{/*Search for giveaway*/}}\n{{if ($e:=(dbGet 7777 "giveaway_old").Value)}}\n{{range $i,$v:=$e}}\n{{if or (eq (sub (len $e) $i) $ID) (eq (toInt $v.uID) $ID)}}\n{{$found =true}}{{$s:= sendTemplate $v.chan "g_end" "ID" (str $v.ID) "Data" $v}}\n{{end}}\n{{end}}\n{{/*Display Error if no match*/}}\n{{if not $found}}**Error** - Invalid Argument `{{index $CmdArgs 1}}`. Old Giveaway with corresponding ID or Position(1-10) not found!{{end}}\n{{else}}\n**Error:** No Old Giveaways.\n{{end}}\n\n{{/*Command List*/}}\n{{else if eq $subCmd "list"}}\n\n{{/*check if giveaways active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{$count := 0}}\n\n{{/*List all active giveaway data fields*/}}\n{{range $k , $v:=.}}{{$count =add $count 1}} \n{{$count}}) **ID:** ``{{$v.uID}}``  **Prize:** ``{{$v.prize}}``\n**Ends AT:** ``{{formatTime $v.expiresAt}}``\n{{end}}\n\n{{else}}\nNo Active Giveaways.\n{{end}}\n\n{{/*update global flag for incorrect syntax*/}}\n{{else}}\n{{$syntaxError =1}}\n{{end}}\n{{else}}\n{{$syntaxError =1}}\n{{end}}\n{{else}}\n{{$syntaxError =1}}\n{{end}}\n\n{{else}}\n{{/*Giveaway Ending handling*/}}\n{{$s := sendTemplate nil "g_end" "ID" $ExecData}}\n{{end}}\n\n{{define "g_end"}}\n{{/*Set Variables*/}}\n{{$ID:=.TemplateArgs.ID}}{{$chan:=.Channel.ID}}\n{{$dbData:=(dbGet 7777 "giveaway_active").Value}}{{with .TemplateArgs.Data}}{{$dbData =sdict (str $ID) .}}{{end}}\n\n\n{{/*Proceed only if invoked with valid ID or active giveaways exist*/}}\n{{if $dbData}}\n{{with (index $dbData $ID)}}\n{{$countWinners:=toInt .maxWinners}} {{$count:=toInt .count}}\n\n{{/*if reaction count < max winners; update no of winners to find*/}}\n{{if lt $count $countWinners}}{{$countWinners = $count}}{{end}}\n{{$msg:=index ( split $ID (str $chan)) 1}}\n{{$listID:=.listID}}\n\n{{/*Consider reactions/user IDs upto max allowed number if count > maxParticipants*/}}\n{{if and (gt $count .maxParticipants) (gt .maxParticipants 0)}}{{$count =.maxParticipants}}{{$listID =joinStr "," (slice (split $listID ",") 0 $count) ""}}{{end}}\n\n{{/*Computing list of winner mentions*/}}\n{{$winnerList:=""}}\n{{range seq 0 $countWinners}}\n{{$winner:=index (split $listID ",") (randInt 0 $count )}}\n{{$listID =reReplace (print $winner ",") $listID ""}}{{$count = add $count -1}}\n{{$winnerList =(print $winnerList "<@" $winner "> ")}}\n{{end}}\n\n{{/*Update existing giveaway announce message*/}}\n{{$desc:=print ">>> **Prize :** " .prize "\\n\\n**Winners :** " }}\n{{if  $countWinners }}{{$desc =print $desc $winnerList}}{{else}}{{$desc =print $desc "No Participants :( "}}{{end}}\n{{$desc:=print $desc "\\n\\n**Hosted By :** " .host}}\n{{with (getMessage $chan $msg )}}{{editMessage $chan $msg (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Ended !!**\ud83c\udf1f\ud83c\udf1f" "description" $desc "footer" (sdict "text" "Giveaway Ended at ") "timestamp" currentTime "color" 12257822 )}}{{end}}\n\n{{/*Announce winners*/}}\n{{if $countWinners}}\n{{sendMessage nil (print "**Prize :** " .prize "\\n**Winner(s) :** " $winnerList)}}\n{{else}}\n**Giveaway Ended, No participants :( !!**\n**Prize : {{.prize}}**\n{{end}}\n\n{{/*Update giveaway databases*/}}\n{{if not $.TemplateArgs.Data}}\n{{$newdbData:=sdict $dbData}}{{$newdbData.Del $ID}}\n{{dbSet 7777 "giveaway_active" $newdbData}}\n{{$newdbData =sdict (dbGet 7777 "giveaway_active_IDs").Value}}{{$newdbData.Del (str .uID)}}\n{{dbSet 7777 "giveaway_active_IDs" $newdbData}}\n{{$old:= cslice.AppendSlice (or (dbGet 7777 "giveaway_old").Value cslice)}}{{if gt (len $old) 9}}{{$old =slice $old 1}}{{end}}\n{{dbSet 7777 "giveaway_old" ($old.Append .)}}\n{{end}}\n\n{{else}}`Warning:` Invoked CC : {{$.CCID}} using ExecCC with invalid Giveaway ID.\n{{end}}\n{{else}}`Warning:` Invoked CC : {{$.CCID}} using ExecCC with no active Giveaways.\n{{end}}\n\n{{end}}\n\n{{/*print error message & syntax details*/}}\n{{if $syntaxError}}\n{{sendMessage nil (print "__**Incorrect Syntax** __ \\n**Commands are :** \\n```elm\\n" ($Cmd) " start <time : Duration> <prize : String> \\n\\noptional_flags \\n-p (max participants : Number) \\n-w (max winners : Number)\\n-c (channel : Mention/ID)\\n```\\n```elm\\n" ($Cmd) " end <id : Number>```\\n```elm\\n" ($Cmd) " cancel <id : Number>```\\n```elm\\n" ($Cmd) " reroll [id or n giveaways old : Number]```\\n```elm\\n"  ($Cmd) " list ``` ")}}\n{{end}}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}$.isMDXComponent=!0}}]);