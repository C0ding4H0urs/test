"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1005],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,g=c["".concat(d,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Edit Message"},l=void 0,o={unversionedId:"utilities/edit",id:"utilities/edit",title:"Edit Message",description:"This command is a tool for editing messages sent by YAGPDB, with embed support.",source:"@site/docs/utilities/edit.md",sourceDirName:"utilities",slug:"/utilities/edit",permalink:"/utilities/edit",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/edit.md",tags:[],version:"current",frontMatter:{title:"Edit Message"},sidebar:"sidebar",previous:{title:"Display Struct",permalink:"/utilities/display-struct"},next:{title:"Flag Message",permalink:"/utilities/flag-message"}},d={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Available Flags",id:"available-flags",level:3},{value:"Flags to edit message",id:"flags-to-edit-message",level:4},{value:"Flags to modify edit behaviour",id:"flags-to-modify-edit-behaviour",level:4},{value:"Examples",id:"examples",level:3},{value:"To edit embed",id:"to-edit-embed",level:4},{value:"To completely overwrite",id:"to-completely-overwrite",level:4},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command is a tool for editing messages sent by YAGPDB, with embed support."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Command"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-edit [channel] <msg> <flags...>")," - Edits the message provided."),(0,a.kt)("p",null,"The usage of this command is very similar to that of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleEmbed")," built-in command. You specify a channel (defaulting to the current channel), a message, and some flags to specify which fields to edit."),(0,a.kt)("h3",{id:"available-flags"},"Available Flags"),(0,a.kt)("h4",{id:"flags-to-edit-message"},"Flags to edit message"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flag"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-content <content>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the content of the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-content hello world"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-title <title>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the title of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-title new title"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-desc <desc>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the description of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-desc my desc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-image <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the image URL of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-image https://i.imgur.com/vfbFEif.jpeg"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-thumbnail <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the thumbnail URL of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-thumbnail https://i.imgur.com/vfbFEif.jpeg"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-url <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the URL of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-url https://www.youtube.com/watch?v=oHg5SJYRHA0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-author <name>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the author name of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-author foo"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-authoricon <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the author icon of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-authoricon https://i.imgur.com/vfbFEif.jpeg"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-footer <text>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the footer text of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-footer bar baz"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-footericon <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the footer icon URL of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-footericon https://i.imgur.com/vfbFEif.jpeg"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-color <hex>")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the color of the embed in the message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-color FF0000"))))),(0,a.kt)("h4",{id:"flags-to-modify-edit-behaviour"},"Flags to modify edit behaviour"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-force")," - Completely overwrites the existing message. By default, the changes are merged into the existing message - for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"-edit 123 -color FF0000")," would just edit the color and keep the embed. However, by supplying the ",(0,a.kt)("inlineCode",{parentName:"p"},"-force")," flag, ",(0,a.kt)("inlineCode",{parentName:"p"},"-edit 123 -color FF0000 -force")," would remove any other parts of the embed, keeping only the new color.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-clrembed")," - Removes the embed from a message previously containing an embed, such that it only contains the content."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"to-edit-embed"},"To edit embed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-edit #channel 123 -title My new title -url https://www.youtube.com/watch?v=oHg5SJYRHA0\n")),(0,a.kt)("p",null,"Would edit the message with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," in channel ",(0,a.kt)("inlineCode",{parentName:"p"},"#channel")," to have embed title ",(0,a.kt)("inlineCode",{parentName:"p"},"My new title")," and set the embed URL to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/watch?v=oHg5SJYRHA0"),"."),(0,a.kt)("h4",{id:"to-completely-overwrite"},"To completely overwrite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-edit 123 -title foo -desc bar -force\n")),(0,a.kt)("p",null,"Would edit the message with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," in current channel to have embed title ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and description ",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),", removing any other parts of the embed or message content."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/edit.go.tmpl",file:"../../../src/utilities/edit.go.tmpl"},'{{/*\n    Edits messages sent by YAGPDB. Supports embeds.\n    See <https://yagpdb-cc.github.io/utilities/edit> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{$helpMsg := sdict\n    "title" "`-edit [channel] <msg> <new-content>`"\n    "color" 14232643\n    "description" "Please provide a valid message (which was sent by YAGPDB).\\n\\nIf the message is an embed, you can use the syntax from the `-se` command to edit it: `-edit [channel] <msg> -title \\"Hello world\\" -desc \\"Foobar\\"`."\n}}\n{{$error := ""}}\n\n{{$flags := sdict "-title" "Title" "-desc" "Description" "-url" "URL" "-image" "Image" "-thumbnail" "Thumbnail" "-author" "Author" "-authoricon" "Author" "-authorurl" "Author" "-footer" "Footer" "-footericon" "Footer" "-color" "Color" "-content" "Content" "-force" "Force" "-clrembed"  "Clear"}}\n{{$subField := sdict "-image" "URL" "-thumbnail" "URL" "-author" "Name" "-authoricon" "IconURL" "-authorurl" "URL" "-footer" "Text" "-footericon" "IconURL"}}\n{{$channel := .Channel}}\n{{$multipliers := cslice 1048576 65536 4096 256 16 1}}\n{{$hex2dec := sdict "A" 10 "B" 11 "C" 12 "D" 13 "E" 14 "F" 15}}\n{{$args := cslice}}\n{{$id := ""}}\n\n{{if .CmdArgs}}\n    {{$channelID := ""}}\n    {{with reFindAllSubmatches `<#(\\d+)>` (index .CmdArgs 0)}}{{$channelID = index . 0 1}}{{end}}\n    {{$temp := getChannelOrThread (or $channelID (index .CmdArgs 0))}}\n    {{if $temp}}\n        {{if lt (len .CmdArgs) 3}}\n            {{$error = "Insufficient number of Args"}}\n        {{else}}\n            {{$channel = $temp}}\n            {{$id = toInt64  (index .CmdArgs 1)}}\n            {{$args = slice .CmdArgs 2}}\n        {{end}}\n    {{else if (ge (len .CmdArgs) 2)}}\n        {{$id = toInt64 (index .CmdArgs 0)}}\n        {{$args = slice .CmdArgs 1}}\n    {{else}}\n        {{$error = "Insufficient number of Args"}}\n    {{end}}\n{{end}}\n\n{{$content := ""}}{{$embed := sdict}}{{$Oembed := sdict}}{{$embedPresent := false}}{{$clear := false}}\n{{if not $error}}\n    {{ $msg := getMessage $channel.ID $id}}\n    {{with $msg}}\n        {{if eq .Author.ID 204255221017214977}}\n            {{$content = .Content}}\n            {{if .Embeds}}{{$embed = structToSdict (index .Embeds 0)}}\n                {{range $k, $v := $embed}}{{if eq (kindOf $v true) "struct"}}{{$embed.Set $k (structToSdict $v)}}{{end}}{{end}}{{$embedPresent = true}}\n            {{end}}\n        {{else}}\n            {{$error = "<@204255221017214977> is not Author"}}\n        {{end}}\n    {{else}}\n        {{$error = "Unknown Message"}}\n    {{end}}\n{{end}}\n\n{{if not $error}}\n    {{$parseFlag := 2}}{{$currentFlag := ""}}{{$currentField := ""}}{{$skip := 0}}\n    {{range $args}}\n        {{- if and (not $error) (gt $parseFlag 1)}}\n            {{- if ($f := $flags.Get (lower .))}}\n                {{- if eq $f "Force"}}\n                    {{- $embed = sdict}}{{range $k,$v :=$Oembed}}{{$embed.Set $k $v}}{{end}}{{$Oembed = sdict}}{{$parseFlag = 1}}{{$currentFlag = ""}}{{$skip = 1}}\n                {{- else if eq $f "Clear"}}\n                    {{- $embed = $.nil}}{{$parseFlag = 1}}{{$clear = true}}{{$currentFlag = ""}}{{$skip = 1}}\n                {{- else if and $clear (ne $f "Content")}}\n                    {{- $error = print "Parsing Error: Invalid flag: " . ". Attempting to Both Clear and Edit Embed"}}\n                {{- else}}\n                    {{- $currentFlag = $f}}{{$parseFlag = 0}}{{$currentField = $subField.Get (lower .)}}\n                {{- end}}\n            {{- end}}\n        {{- end}}\n\n        {{- if and (not $error) $parseFlag (not $skip)}}\n            {{- if $currentFlag}}\n                {{- if in (cslice "Description" "Title" "URL") $currentFlag}}\n                    {{- if eq $parseFlag 1}}{{$embed.Set $currentFlag ""}}{{$Oembed.Set $currentFlag ""}}{{end}}\n                    {{- $embed.Set $currentFlag (joinStr " " ($embed.Get $currentFlag) .)}}{{$Oembed.Set $currentFlag (joinStr " " ($Oembed.Get $currentFlag) .)}}{{$embedPresent = true}}\n                {{- else if eq $currentFlag "Color"}}\n                    {{- if eq $parseFlag 1}}\n                        {{- $regex := `\\A(?:#?([a-fA-F\\d]{1,6}))\\z`}}\n                        {{- with reFindAllSubmatches $regex .}}\n                            {{- $hex := printf "%06s" (index . 0 1) | upper}}\n                            {{- $dec := 0}}\n                            {{- range $k, $v := split $hex ""}}\n                                {{- $multiplier := index $multipliers $k}}\n                                {{- $num := or ($hex2dec.Get $v) $v }}\n                                {{- $dec = add $dec (mult $num $multiplier)}}\n                            {{- end}}\n                            {{- $embed.Set $currentFlag $dec}}{{$Oembed.Set $currentFlag $dec}}\n                        {{- else}}\n                            {{- $error = "Parsing Error: color was not in correct format (use hex)" }}\n                        {{- end}}\n                    {{- else}}\n                        {{- $error = "Parse Error: too many arguments to Color"}}\n                    {{- end}}\n                    {{- $embedPresent = true}}\n                {{- else if eq $currentFlag "Content"}}{{if eq $parseFlag 1}}{{$content = ""}}{{end}}{{$content = joinStr " " $content .}}\n                {{- else}}\n                    {{- if eq $parseFlag 1}}\n                        {{- $tmp :=or ($embed.Get $currentFlag) sdict}}{{$tmpO :=or ($Oembed.Get $currentFlag) sdict}}\n                        {{- $tmp.Set $currentField ""}}{{$tmpO.Set $currentField ""}}\n                        {{- $embed.Set $currentFlag $tmp}}{{$Oembed.Set $currentFlag $tmpO}}{{$embedPresent = true}}\n                    {{- end}}\n                    {{- $cFlag := $embed.Get $currentFlag}}{{$cFlagO := $Oembed.Get $currentFlag}}\n                    {{- $cFlag.Set $currentField (joinStr " " ($cFlag.Get $currentField) .)}}{{$cFlagO.Set $currentField (joinStr " " ($cFlagO.Get $currentField) .)}}\n                {{- end}}\n            {{- else}}\n                {{- $error = (print "Parsing Error:  Invalid flag: " . )}}\n            {{- end}}\n        {{- end}}\n        {{- $parseFlag = add $parseFlag 1}}{{$skip = 0}}\n    {{- end}}\n\n    {{if $embed}}\n        {{if $embed.Author}}{{$embed.Author.Set "Icon_URL" $embed.Author.IconURL}}{{end}}\n        {{if $embed.Footer}}{{$embed.Footer.Set "Icon_URL" $embed.Footer.IconURL}}{{end}}\n    {{end}}\n    {{if (not $embedPresent)}}{{$embed = $.nil}}{{end}}\n\n    {{if not $error}}\n        {{if or $content (ne (print $embed) "<nil>")}}\n            {{editMessage $channel.ID $id (complexMessageEdit "content" $content "embed" $embed)}}\n            Done :+1:\n        {{else}}\n            {{$error = "Content and embed cannot be null at the same time."}}\n        {{end}}\n    {{end}}\n{{end}}\n\n{{if $error}}\n    {{$helpMsg.Set "description" (print "**Error** - `" $error  "`\\n" ($helpMsg.Get "description"))}}\n    {{sendMessage nil (cembed $helpMsg)}}\n{{end}}\n{{deleteResponse 5}}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This custom command was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}p.isMDXComponent=!0}}]);