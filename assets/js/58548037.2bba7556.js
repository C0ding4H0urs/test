"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7038],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,c=u["".concat(d,".").concat(f)]||u[f]||p[f]||l;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"Send Message"},d=void 0,s={unversionedId:"utilities/send-message",id:"utilities/send-message",isDocsHomePage:!1,title:"Send Message",description:"This command is a tool for sending messages through YAGPDB, with embed support.",source:"@site/docs/utilities/send-message.md",sourceDirName:"utilities",slug:"/utilities/send-message",permalink:"/utilities/send-message",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/send-message.md",tags:[],version:"current",frontMatter:{title:"Send Message"},sidebar:"sidebar",previous:{title:"Reaction Bookmark",permalink:"/utilities/reactionbookmark"},next:{title:"Snipe Message",permalink:"/utilities/snipe-message"}},m=[{value:"Trigger",id:"trigger",children:[]},{value:"Usage",id:"usage",children:[{value:"Available Flags",id:"available-flags",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Code",id:"code",children:[]},{value:"Author",id:"author",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This command is a tool for sending messages through YAGPDB, with embed support."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Differences between this and ",(0,l.kt)("inlineCode",{parentName:"h5"},"simpleembed"))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This command is very similar to the built-in ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleembed")," command, but differs in that it allows you to add fields to the embed.\nSee ",(0,l.kt)("a",{parentName:"p",href:"#specifying-fields"},"this section")," for more information."))),(0,l.kt)("h2",{id:"trigger"},"Trigger"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Command"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"embed")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-embed <flags...>")," - Sends a message using the flags provided."),(0,l.kt)("p",null,"The usage of this command is very similar to that of the ",(0,l.kt)("inlineCode",{parentName:"p"},"SimpleEmbed")," built-in command; you specify certain flags to change parts of the message."),(0,l.kt)("h3",{id:"available-flags"},"Available Flags"),(0,l.kt)("h4",{id:"flags-to-modify-message"},"Flags to modify message"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The flags used to create fields are documented separately, in ",(0,l.kt)("a",{parentName:"p",href:"#specifying-fields"},"this section"),"."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-channel <channel>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the channel where the message should be sent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-channel #my-channel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-color <decimal>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the color of the embed; only supports decimal color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-color 111111"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-description <desc>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the description of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-description hello world"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-title <title>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the title of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-title very cool"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-image <url>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the image URL of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-image https://i.imgur.com/vfbFEif.jpeg"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-thumb <url>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the thumbnail URL of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-thumb https://i.imgur.com/vfbFEif.jpeg"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-author <name>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the author name of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-author foo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-footer <text>")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the footer text of the embed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-footer bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the timestamp of the embed to the current time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-timestamp"))))),(0,l.kt)("h4",{id:"specifying-fields"},"Specifying fields"),(0,l.kt)("p",null,"At any point in the command, you can enter ",(0,l.kt)("em",{parentName:"p"},"field mode")," by using ",(0,l.kt)("inlineCode",{parentName:"p"},"-fields"),".\nAfter that, you use a combination of the following flags to specify the current field:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/name <name>")," - Sets the name of the field.\n",(0,l.kt)("strong",{parentName:"p"},"Example:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/name foo bar"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/value <value>")," - Sets the value of the field.\n",(0,l.kt)("strong",{parentName:"p"},"Example:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/value baz buz"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/inline <bool>")," - Specifies whether the field should be inline.\n",(0,l.kt)("strong",{parentName:"p"},"Example:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/inline true")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"create-simple-embed"},"Create simple embed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-embed -channel #channel -color 111 -title hello world -footer foo bar -description bar buz\n")),(0,l.kt)("p",null,"Creates a new embed in channel ",(0,l.kt)("inlineCode",{parentName:"p"},"#channel")," with the color ",(0,l.kt)("inlineCode",{parentName:"p"},"111"),", title ",(0,l.kt)("inlineCode",{parentName:"p"},"hello world"),", footer text ",(0,l.kt)("inlineCode",{parentName:"p"},"foo bar"),", and description ",(0,l.kt)("inlineCode",{parentName:"p"},"bar buz"),"."),(0,l.kt)("h4",{id:"create-embed-with-fields"},"Create embed with fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-embed -color 111 -title hello world -fields /name field name 0 /value field value 0 /inline true -fields /name field name 1 /value field value 1 /inline false\n")),(0,l.kt)("p",null,"Creates a new embed in the current channel with the color ",(0,l.kt)("inlineCode",{parentName:"p"},"111"),", title ",(0,l.kt)("inlineCode",{parentName:"p"},"hello world"),", and two fields.\nThe first is inline and has the name ",(0,l.kt)("inlineCode",{parentName:"p"},"field name 0")," and the value ",(0,l.kt)("inlineCode",{parentName:"p"},"field value 0"),".\nThe second is not inline and has the name ",(0,l.kt)("inlineCode",{parentName:"p"},"field name 1")," and the value ",(0,l.kt)("inlineCode",{parentName:"p"},"field value 1"),"."),(0,l.kt)("h2",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/send.go.tmpl",file:"../../../src/utilities/send.go.tmpl"},'{{/*\n    Alternative to the simpleembed command that supports adding fields.\n    See <https://yagpdb-cc.github.io/utilities/send-message> for more information.\n\n    Author: Pedro Pessoa <https://github.com/Pedro-Pessoa>\n*/}}\n\n{{/* ACTUAL CODE DONT TOUCH */}}\n{{$capture := false}} {{$field := sdict}} {{$name := false}} {{$value := false}} {{$boolean := false}} {{$hasField := false}} {{$nameV := ""}} {{$valueV := ""}} {{$booleanV := false}} {{$color := false}} {{$colorV := 123456}} {{$fields := cslice}} {{$isEmbed := false}} {{$description := false}} {{$descriptionV := ""}} {{$channel := false}} {{$channelV := .Channel.ID}} {{$title := false}} {{$titleV := ""}} {{$image := false}} {{$imageV := sdict}} {{$thumbnail := false}} {{$thumbnailV := sdict}} {{$author := false}} {{$authorV := sdict}} {{$authorName := false}} {{$authorNameV := ""}} {{$authorIcon := false}} {{$footer := false}} {{$footerV := sdict}} {{$footerText := false}} {{$footerIcon := false}} {{$footerTextV := ""}} {{$timeStamp := false}} {{$embed := sdict}}\n{{$flags := cslice "-channel" "-fields" "-color" "-description" "-title" "-image" "-thumb" "-author" "-footer" "-timestamp"}}\n{{- range $k, $v := .CmdArgs -}}\n    {{- if eq . "-fields"}} {{$capture = true}} {{else if in $flags .}} {{$capture = false}} {{end -}}\n    {{- if $capture -}}\n        {{- $hasField = true -}}\n        {{- if eq . "/name"}} {{$name = true}} {{$value = false}} {{$boolean = false -}}\n        {{- else if eq . "/value"}} {{$name = false}} {{$value = true}} {{$boolean = false -}}\n        {{- else if eq . "/inline"}} {{$name = false}} {{$value = false}} {{$boolean = true -}}\n        {{- end -}}\n        {{- if and ($name) (not (eq . "/name"))}} {{$nameV = joinStr " " $nameV .}} {{$field.Set "name" $nameV -}}\n        {{- else if and ($value) (not (eq . "/value")) }} {{$valueV = joinStr " " $valueV .}} {{$field.Set "value" $valueV -}}\n        {{- else if $boolean}} {{if eq . "true"}} {{$booleanV = true}} {{end}} {{$field.Set "inline" $booleanV -}}\n        {{- else}} {{$field.Set "inline" $booleanV -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if and (ne $valueV "") (or (and ($hasField) (not $capture)) (and ($hasField) (eq $k (sub (len $.CmdArgs) 1))) (and (eq . "-fields") ($field.Get "name")))}} {{$hasField = false}} {{$isEmbed = true}} {{$fields = $fields.Append $field}} {{$field = sdict}} {{$nameV = ""}} {{$valueV = ""}} {{$booleanV = false}} {{end -}}\n    {{- if eq . "-color"}} {{$color = true}} {{else if in $flags .}} {{$color = false}} {{end -}}\n    {{- if and ($color) (not (eq . "-color"))}} {{with toInt .}} {{$isEmbed = true}} {{$colorV = .}} {{end}} {{end -}}\n    {{- if eq . "-description"}} {{$description = true}} {{else if in $flags .}} {{$description = false}} {{end -}}\n    {{- if and ($description) (not (eq . "-description"))}} {{$isEmbed = true}} {{$descriptionV = joinStr " " $descriptionV .}} {{end -}}\n    {{- if eq . "-channel"}} {{$channel = true}} {{else if in $flags .}} {{$channel = false}} {{end -}}\n    {{- if and ($channel) (not (eq . "-channel"))}} {{$checkChannel := reReplace `<|>|#` . ""}} {{with getChannelOrThread $checkChannel}} {{$channelV = .ID}} {{end}} {{end -}}\n    {{- if eq . "-title"}} {{$title = true}} {{else if in $flags .}} {{$title = false}} {{end -}}\n    {{- if and ($title) (not (eq . "-title"))}} {{$isEmbed = true}} {{$titleV = joinStr " " $titleV .}} {{end -}}\n    {{- if eq . "-image"}} {{$image = true}} {{else if in $flags .}} {{$image = false}} {{end -}}\n    {{- if and ($image) (not (eq . "-image"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$imageV.Set "url" .}} {{end}} {{end -}}\n    {{- if eq . "-thumb"}} {{$thumbnail = true}} {{else if in $flags .}} {{$thumbnail = false}} {{end -}}\n    {{- if and ($thumbnail) (not (eq . "-thumb"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$thumbnailV.Set "url" .}} {{end}} {{end -}}\n    {{- if eq . "-author"}} {{$author = true}} {{else if in $flags .}} {{$author = false}} {{end -}}\n    {{- if $author}}\n        {{- if eq . "/name"}} {{$authorName = true}} {{$authorIcon = false -}}\n        {{- else if eq . "/icon"}} {{$authorName = false}} {{$authorIcon = true -}}\n        {{- end -}}\n        {{- if and ($authorName) (not (eq . "/name"))}} {{$authorNameV = joinStr " " $authorNameV .}} {{$isEmbed = true}} {{$authorV.Set "name" $authorNameV -}}\n        {{- else if and ($authorIcon) (not (eq . "/icon"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$authorV.Set "icon_url" .}} {{end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if eq . "-footer"}} {{$footer = true}} {{else if in $flags .}} {{$footer = false}} {{end -}}\n    {{- if $footer}}\n        {{- if eq . "/text"}} {{$footerText = true}} {{$footerIcon = false -}}\n        {{- else if eq . "/icon"}} {{$footerText = false}} {{$footerIcon = true -}}\n        {{- end -}}\n        {{- if and ($footerText) (not (eq . "/text"))}} {{$footerTextV = joinStr " " $footerTextV .}} {{$isEmbed = true}} {{$footerV.Set "text" $footerTextV -}}\n        {{- else if and ($footerIcon) (not (eq . "/icon"))}} {{if reFind `https?:\\/\\/\\w+` .}} {{$isEmbed = true}} {{$footerV.Set "icon_url" .}} {{end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if eq . "-timestamp"}} {{$timeStamp = currentTime}} {{$isEmbed = true}} {{end -}}\n{{- end -}}\n\n{{if $isEmbed}}\n{{$embed.Set "fields" $fields}} {{$embed.Set "color" $colorV}} {{$embed.Set "description" $descriptionV}} {{$embed.Set "title" $titleV}} {{$embed.Set "image" $imageV}} {{$embed.Set "thumbnail" $thumbnailV}} {{$embed.Set "author" $authorV}} {{$embed.Set "footer" $footerV}} {{with $timeStamp}} {{$embed.Set "timestamp" .}} {{end}}\n{{sendMessage $channelV (cembed $embed)}}\n{{end}}\n')),(0,l.kt)("h2",{id:"author"},"Author"),(0,l.kt)("p",null,"This custom command was written by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Pedro-Pessoa"},"@Pedro-Pessoa"),"."))}u.isMDXComponent=!0}}]);