"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9062],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return $}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=d(t),$=i,m=g["".concat(c,".").concat($)]||g[$]||u[$]||r;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function $(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5374:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var a=t(3117),i=(t(7294),t(3905));const r={title:"Main CC"},o=void 0,s={unversionedId:"giveaway/basic/main-cc",id:"giveaway/basic/main-cc",title:"Main CC",description:"This command allows administrators to manage giveaways. Supports invocation via execCC as well.",source:"@site/docs/giveaway/basic/main-cc.md",sourceDirName:"giveaway/basic",slug:"/giveaway/basic/main-cc",permalink:"/giveaway/basic/main-cc",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/giveaway/basic/main-cc.md",tags:[],version:"current",frontMatter:{title:"Main CC"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/giveaway/basic/overview"},next:{title:"Reaction Handler",permalink:"/giveaway/basic/reaction-handler"}},c={},d=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],l={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command allows administrators to manage giveaways. Supports invocation via ",(0,i.kt)("inlineCode",{parentName:"p"},"execCC")," as well."),(0,i.kt)("p",null,"For more information about this particular version of the giveaway package, see ",(0,i.kt)("a",{parentName:"p",href:"overview"},"this")," page."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Command"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"giveaway")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unless you would like everyone to be able to manage giveaways, we advise that you restrict this command to a staff role in the role restrictions.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"overview/#usage"},"giveaway package overview")," for more information about how to use this command."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Again, see the ",(0,i.kt)("a",{parentName:"p",href:"overview/#configuration"},"giveaway package overview")," for more information about how to configure this command."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/giveaway/basic/giveaway.go.tmpl",file:"../../../../src/giveaway/basic/giveaway.go.tmpl"},'{{/*\n    Main giveaway command, supports invocation via execCC.\n    See <https://yagpdb-cc.github.io/giveaway/basic/main-cc> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{/* Configurable values */}}\n{{$giveawayEmoji := `\ud83c\udf89`}}\n{{/* End of configurable values */}}\n\n{{/*Actual Code , do not touch unless you know what youre doing*/}}\n\n{{/*Declaring global variables*/}}\n{{$CCID := .CCID}}{{$syntaxError := 0}}{{$CmdArgs := ""}}{{$StrippedMsg := ""}}{{$Cmd := ""}}{{$ExecData := 0}}\n{{/* if direct invoke just copy data to relevant variables */}}\n{{if not .ExecData}}{{$CmdArgs = .CmdArgs}}{{$StrippedMsg = reReplace `\\A\\s+|(\\s+\\z)` .StrippedMsg ""}}{{$Cmd = .Cmd}}\n{{/* if indirect invoke, check datatype of .ExecData to determine self invoke or not */}}\n{{else if toInt .ExecData}}{{$ExecData = toString .ExecData}}\n{{/* if external cc invoke, check if correct datatype passed and then generate $CmdArgs , $StrippedMsg etc*/}}\n{{else if eq (printf "%T" .ExecData) "string"}}\n{{$args := split .ExecData " "}}\n{{if gt (len $args) 1}}\n{{$StrippedMsg = reReplace `(\\A\\s+)|(\\s+\\z)` (joinStr " " (slice (split .ExecData " ") 1)) ""}}\n{{$Cmd = index $args 0}}{{$CmdArgs = split (reReplace `\\s{2,}` $StrippedMsg " ") " "}}\n{{end}}\n{{end}}\n\n{{/*checking if or not invoked by itself for Giveaway Ending handling*/}}\n{{if  not $ExecData }}\n{{if gt ( len $CmdArgs ) 0 }}\n{{if or (gt (len $CmdArgs) 1) (eq (lower (index $CmdArgs 0) ) "list")}}\n\n{{/*Command - Start*/}}\n{{if eq (lower (index $CmdArgs 0) ) "start"}}\n\n{{/*Variable declarations & assignments*/}}\n{{$CmdArgs := joinStr " " (slice (split $StrippedMsg " ") 1 )}}\n{{$CmdArgs = reReplace `\\A\\s+` $CmdArgs ""}}\n{{$maxP := -1}}{{$maxW := 1}}{{$chan:= .Channel.ID}}{{$ID:= ""}}{{$dbData := sdict}}\n{{$uniqueID := toInt (currentTime.Sub (newDate 2019 10 10 0 0 0)).Seconds}}\n\n\n{{/*Handling flags, parsing data from input*/}}\n     {{with reFindAllSubmatches `(?i)((-w) (\\d+)(?:\\s|$))` $CmdArgs}}\n     {{$CmdArgs = reReplace `(?i)(-w \\d+\\s+)|(-w \\d+$)` $CmdArgs ""}}\n          {{$maxW = toInt (index (index . 0) 3)}}\n     {{end}}\n\n     {{with reFindAllSubmatches `(?i)((-p) (\\d+)(?:\\s|$))` $CmdArgs}}\n     {{$CmdArgs = reReplace `(?i)(-p \\d+(\\s+))|(-p \\d+$)` $CmdArgs ""}}\n          {{$maxP = toInt (index (index . 0) 3)}}\n     {{end}}\n\n     {{with reFindAllSubmatches `(?i)(-c (?:<#)?(\\d+)(?:>?)(?:\\s|$))` $CmdArgs}}\n     {{$CmdArgs = reReplace `(?i)(-c ((<#)?\\d+(>?))\\s+)|(-c ((<#)?\\d+(>?))$)` $CmdArgs ""}}\n          {{$chan = index (index . 0) 2}}\n     {{end}}\n\n{{$temp := split $CmdArgs  " "}}\n{{$dur:= lower (index  $temp 0)}}\n{{$prize := ""}}\n{{if gt (len $temp) 1}}{{$prize = joinStr " " (slice $temp 1)}}{{end}}\n{{$prize = reReplace `\\A\\s+` $prize ""}}\n\n{{/* String to Duration */}} \n{{$duration := toDuration $dur}}\n\n{{/* if valid duration & prize */}}\n{{if and ($duration)  ($prize)}} \n\n{{/*if max Participants > max Winners*/}}\n{{if or (ge $maxP $maxW) (eq $maxP -1)}}\n\n{{/*Giveaway Announcement*/}}\n{{with sendMessageNoEscapeRetID $chan (cembed "title" "loading...")}}\n\n{{/*Make giveaway sdict data Structure */}}\n{{$ID = (joinStr "" $chan .) }}\n{{$giveawaySdict := sdict "chan" $chan "count" 0 "listID" "" "maxWinners"  $maxW "maxParticipants" $maxP "expiresAt" (currentTime.Add $duration) "prize" $prize "uID" $uniqueID}} \n\n{{/*Send Actual Announcement Message*/}}\n{{addMessageReactions $chan . $giveawayEmoji}}\n{{$desc := (joinStr ``  `>>> **Prize : **` $prize "\\n\\n") }}\n{{if gt $maxW 0}}{{$desc = joinStr "" $desc "**Max Winners :** " $maxW }}{{end}}\n{{if gt $maxP 0}}{{$desc = joinStr "" $desc "\u2800\u2800\u2800\u2800\u2800**Max Participants :** " $maxP}}{{end}}\n{{$desc = joinStr "" $desc "\\n\\n**React with " $giveawayEmoji " to enter GiveAway **"}}\n{{editMessageNoEscape $chan . (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Started !!**\ud83c\udf1f\ud83c\udf1f" "description"  $desc "color" 16763170 "footer" (sdict "text" (joinStr "" "ID: " $uniqueID " | GiveAway Ends " )) "timestamp" $giveawaySdict.expiresAt) }}\n\n{{/*Update database values ; schedule giveaway end*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}{{$dbData = sdict .}}{{end}}\n{{$dbData.Set $ID $giveawaySdict}}{{dbSet 7777 "giveaway_active" $dbData}}\n{{$dbData =sdict}}{{with (dbGet 7777 "giveaway_active_IDs").Value}}{{$dbData =sdict .}}{{end}}\n{{$dbData.Set (toString $uniqueID) $ID}}{{dbSet 7777 "giveaway_active_IDs" $dbData}}\n{{scheduleUniqueCC (toInt $CCID) $chan $duration.Seconds $uniqueID  $ID}}\n\n{{else}}\n**Invalid Channel !!**\n{{end}}\n\n{{else}}\n**Error:** Max Winners cannot be more than Max Participants!!\n{{end}}\n\n{{else}}\n**Error:** Invalid Duration or Prize !!\n{{end}}\n\n{{/*Command-End*/}}\n{{else if eq (lower (index $CmdArgs 0) ) "end"}}\n{{$uID := index $CmdArgs 1}}\n{{/*if  giveaways active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{/*if uID is valid*/}}\n{{$ID := index (dbGet 7777 "giveaway_active_IDs").Value $uID}}\n{{with (index . (toString $ID))}}\n{{/*reschedue giveaway to end instantly*/}}\n{{scheduleUniqueCC (toInt $CCID) .chan 1  .uID $ID}}\n\n{{else}}\n**Error:** Invalid ID ``{{$uID}}``\n{{end}}\n\n{{else}}\n**Error:** No Active Giveaways.\n{{end}}\n\n{{/* Command Cancel */}}\n{{else if eq (lower (index $CmdArgs 0) ) "cancel"}}\n{{$uID := index $CmdArgs 1}}{{$ID := 0}}\n\n{{/* checking if any giveaways are active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{$dbID := (dbGet 7777 "giveaway_active_IDs").Value}} {{$ID = index $dbID  $uID}}\n\n{{/*if ID is valid*/}}\n{{with (index . (toString $ID))}}\n{{/* cancelling giveaway end scheduled cc , updating giveaway announcement message */}}\n{{$chan := .chan}}{{$prize := .prize}}\n{{cancelScheduledUniqueCC (toInt $CCID) .uID}}\n{{$msg := index ( split $ID (toString $chan)) 1}}\n{{with (getMessage $chan $msg )}}{{editMessageNoEscape $chan $msg (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Cancelled !!**\ud83c\udf1f\ud83c\udf1f" "description" (joinStr "" ">>> **Prize:** "  $prize) "footer" (sdict "text" "Giveaway Cancelled") "color" 12257822 )}}{{end}}Done!\n\n{{else}}\n**Error:** Invalid ID ``{{$uID}}``\n{{end}}\n\n{{/* if found , updating giveaway database */}}\n{{if $ID}}\n{{$newdbData := sdict .}}{{$newdbData.Del $ID}}\n{{dbSet 7777 "giveaway_active" $newdbData}}\n{{$newdbData = sdict $dbID}}{{$newdbData.Del $uID}}\n{{dbSet 7777 "giveaway_active_IDs" $newdbData}}\n{{end}}\n\n{{else}}\n**Error:** No Active Giveaways.\n{{end}}\n\n{{/* Command List */}}\n{{else if eq (lower (index $CmdArgs 0) ) "list"}}\n\n{{/* checking if giveaways active*/}}\n{{with (dbGet 7777 "giveaway_active").Value}}\n{{$count := 0}}\n\n{{/* Listing all active giveaway data fields*/}}\n{{range $k , $v := .}}{{$count = add $count 1}} \n{{$count}}) **ID:** ``{{$v.uID}}``  **Prize:** ``{{$v.prize}}``\n**Ends AT:** ``{{formatTime $v.expiresAt}}``\n{{end}}\n\n{{else}}\nNo Active Giveaways.\n{{end}}\n\n{{else}}\n{{$syntaxError = 1}} {{/*update global variable for incorrect syntax*/}}\n{{end}}\n{{else}}\n{{$syntaxError = 1}} {{/*update global variable for incorrect syntax*/}}\n{{end}}\n{{else}}\n{{$syntaxError = 1}} {{/*update global variable for incorrect syntax*/}}\n{{end}}\n{{else}}\n\n{{/* Giveaway Ending handling */}}\n{{/* Setting Variables */}}\n{{$ID := $ExecData}}{{$chan := .Channel.ID}} \n{{$dbData := (dbGet 7777 "giveaway_active" ).Value}}\n\n{{/* Proceed only if invoked with valid  ID or active giveaways exist*/}}\n{{if $dbData}}\n{{with (index $dbData $ID)}}\n{{$countWinners := toInt .maxWinners}} {{$count := toInt .count}}\n\n{{/* if reaction count < max winners ; update no of winners to find */}}\n{{if lt $count $countWinners}}{{$countWinners = $count}}{{end}}\n{{$msg := index ( split $ID (toString $chan)) 1}}\n{{$listID :=  .listID}}\n\n{{/* Consider the reactions/user IDs upto max allowed number if count > maxParticipants*/}}\n{{if and (gt $count .maxParticipants) (gt .maxParticipants 0)}}{{$count = .maxParticipants}}{{$listID = joinStr "," (slice (split $listID ",") 0 $count) ""}}{{end}}\n\n{{/* computing list of winner mentions */}}\n{{$winnerList := ""}}\n{{range seq 0 $countWinners}}\n{{$winner := index (split $listID ",") (randInt 0 $count )}}\n{{$listID = reReplace (joinStr "" $winner ",") $listID ""}}{{$count = add $count -1}}\n{{$winnerList = (joinStr "" $winnerList "<@" $winner "> ")}}\n{{end}}\n\n{{/* Update existing giveaway announce message*/}}\n{{$desc := joinStr "" ">>> **Prize:** " .prize "\\n\\n**Winners:** " }}\n{{if  $countWinners }}{{$desc = joinStr "" $desc $winnerList}}{{else}}{{$desc = joinStr "" $desc "No Participants :( "}}{{end}}\n{{with (getMessage $chan $msg )}}{{editMessageNoEscape $chan $msg (cembed "title" "\ud83c\udf1f\ud83c\udf1f**GiveAway Ended !!**\ud83c\udf1f\ud83c\udf1f" "description" $desc "footer" (sdict "text" "Giveaway Ended at ") "timestamp" currentTime "color" 12257822 )}}{{end}}\n\n{{/* Announce winners */}}\n{{if $countWinners}}\n{{sendMessage nil (joinStr "" "**Prize:** " .prize "\\n**Winner(s) :** " $winnerList)}}\n{{else}}\n**Giveaway Ended, No participants :( !!**\n**Prize : {{.prize}}**\n{{end}}\n\n{{/* update giveaway database */}}\n{{$newdbData := sdict $dbData}}{{$newdbData.Del $ID}}\n{{dbSet 7777 "giveaway_active" $newdbData}}\n{{$newdbData = sdict (dbGet 7777 "giveaway_active_IDs").Value}}{{$newdbData.Del (toString .uID)}}\n{{dbSet 7777 "giveaway_active_IDs" $newdbData}}\n\n{{else}}`Warning:` Invoked CC : {{$CCID}} using ExecCC with invalid Giveaway ID.\n{{end}}\n{{else}}`Warning:` Invoked CC : {{$CCID}} using ExecCC with no active Giveaways.\n{{end}}\n\n{{end}}\n\n{{/*print error message & syntax details */}}\n{{if $syntaxError}}\n{{sendMessage nil (joinStr "" "__**Incorrect Syntax** __ \\n**Commands are :** \\n```elm\\n" ($Cmd) " start <Time> [Prize] \\n\\noptional_flags \\n-p (max participants : Number) \\n-w (max winners : Number)\\n-c (channel : Mention/ID)\\n```\\n```elm\\n" ($Cmd) " end <ID>```\\n```elm\\n" ($Cmd) " cancel <ID>```\\n```elm\\n" ($Cmd) " list ``` ")}}\n{{end}}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}u.isMDXComponent=!0}}]);