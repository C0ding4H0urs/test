"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2268],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=s(n),c=r,y=l["".concat(d,".").concat(c)]||l[c]||u[c]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[l]="string"==typeof e?e:r,o[1]=m;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return s}});var i=n(3117),r=(n(7294),n(3905));const a={title:"String to Time"},o=void 0,m={unversionedId:"code-snippets/string2time",id:"code-snippets/string2time",title:"String to Time",description:"Code snippet to parse strings to a time struct, in a human friendly way.",source:"@site/docs/code-snippets/string2time.md",sourceDirName:"code-snippets",slug:"/code-snippets/string2time",permalink:"/code-snippets/string2time",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/code-snippets/string2time.md",tags:[],version:"current",frontMatter:{title:"String to Time"},sidebar:"sidebar",previous:{title:"Snowflake to Time",permalink:"/code-snippets/snowflake2time"},next:{title:"Overview",permalink:"/fun/overview"}},d={},s=[{value:"Accepted Formats",id:"accepted-formats",level:3},{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:2},{value:"Author",id:"author",level:2}],p={toc:s},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Code snippet to parse strings to a time struct, in a human friendly way."),(0,r.kt)("p",null,"Say you have a command that creates events (much like the ",(0,r.kt)("inlineCode",{parentName:"p"},"-event create")," built-in command). You would like to accept a time when the event will begin. You ",(0,r.kt)("em",{parentName:"p"},"could")," be very strict in your parsing and make the user input their time in a very specific format, but why not allow a variety of human-friendly input like ",(0,r.kt)("inlineCode",{parentName:"p"},"tomorrow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tomorrow at 8:30pm"),", and so on? That's what this code snippet does."),(0,r.kt)("h3",{id:"accepted-formats"},"Accepted Formats"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Date:"),(0,r.kt)("br",null)),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dd/mm/yyyy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dd.mm.yyyy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dd-mm-yyyy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dd,mm,yyyy")),(0,r.kt)("li",{parentName:"ol"},"String format with year mentioned with 4 digits and both short and long month names supported. Date components (i.e day , month , year) need not be present together. eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"12 Feb 11:50 am"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2020")," are supported."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"today")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tomorrow")," is supported.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TimeZone:"),(0,r.kt)("br",null),"\nBy default timezone is UTC. If user has timezone set using ",(0,r.kt)("inlineCode",{parentName:"p"},"setz")," command, timezone adjustment is also possible. UTC time is parsed if explicitly specified UTC in this case."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time:"),(0,r.kt)("br",null),"\nTime is mentioned as ",(0,r.kt)("inlineCode",{parentName:"p"},"hh:mm:ss")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"hh:mm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"hh"),". May or may not be followed by AM or PM."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/code_snippets/string_to_time.go.tmpl",file:"../../../src/code_snippets/string_to_time.go.tmpl"},'{{/*\n  Parses a string to a time struct, in a human-friendly way.\n  See <https://yagpdb-cc.github.io/code-snippets/string2time> for more information.\n\n  Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{/* Let $timeString be the input string to be parsed. */}}\n{{ $timeString := .StrippedMsg }}\n\n{{/* Variable Declarations */}}\n{{ $dTime := sdict "Day" currentTime.Day "Month" (toInt (printf "%d" currentTime.Month)) "Year" currentTime.Year  "Hour" currentTime.Hour "Min" currentTime.Minute "Sec" currentTime.Second }}\n{{ $time := sdict "Day" $dTime.Day "Month" $dTime.Month "Year" $dTime.Year "Hour" 0 "Min" 0 "Sec" 0  }}\n{{ $dateSet := false }} {{ $timeSet := false }}\n{{ $timeConverted := 0 }}\n{{ $months := sdict \n    "jan" 1\n    "feb" 2\n    "mar" 3\n    "apr" 4\n    "may" 5\n    "jun" 6\n    "jul" 7\n    "aug" 8\n    "sep" 9\n    "oct" 10\n    "nov" 11\n    "dec" 12\n }}\n\n{{/* Actual Code */}}\n{{ $timeString = lower $timeString }}\n{{/* Fetching Dates */}}\n{{/* Fetching dates written in format dd.mm.yyyy or dd/mm/yyyy or dd-mm-yyyy or dd,mm,yyyy */}} \n{{ with reFindAllSubmatches `((\\s|^)((\\d{1,2})(\\-|\\.|\\/|\\,)(\\d{1,2})(\\-|\\.|\\/|\\,)(\\d{1,4}))(\\s|$))` $timeString }}\n    {{ $time.Set "Day" (toInt (index . 0 4)) }}\n    {{ $time.Set "Month" (toInt (index . 0 6)) }}\n    {{ $time.Set "Year" (toInt (index . 0 8)) }}\n    {{ $dateSet = true }}\n{{ else }}\n\n{{/* Fetching dates written as a string with both long or short month names supported. Date , Month and Year need not be present together but year must be written in full form(with 4 digits) eg: 20 sept 1am ,2019 is supported */}}\n    {{ with (reFindAllSubmatches `(?:[^a-z]|^)(jan((uary)?)|feb((ruary)?)|mar((ch)?)|apr((il)?)|may|jun(e?)|jul(y?)|aug((ust)?)|sep((t(ember)?)?)|oct((ober)?)|nov((ember)?)|dec((ember)?))(?:[^a-z]|$)` $timeString) }}\n    {{ $time.Set "Month" ($months.Get (slice (index . 0 1) 0 3)) }}\n    {{ $temp:= reReplace `(([^:]|^)((\\d+)((:(\\d+)){1,2}))((\\s?(am|pm))?))|(((\\d+))(\\s?(am|pm)))` $timeString "" }}\n    {{ with (reFindAllSubmatches `(?:\\D|^)(\\d{1,2})(?:\\D|$)` $temp) }}\n        {{ $time.Set "Day" (toInt (index . 0 1)) }}\n    {{ end }}\n    {{ with (reFindAllSubmatches `(?:\\D|^)(\\d{4})(?:\\D|$)` $temp) }}\n        {{ $time.Set "Year" (toInt (index . 0 1)) }}\n    {{ end }}\n    {{ $dateSet = true }}\n    {{ end }}\n{{ end }}\n\n{{/* Fetching dates specified as today or tomorrow and assigning default values to invalid dates */}}\n{{ if $dateSet }}\n{{ if not $time.Day }}{{ $time.Set "Day" $dTime.Day }}{{ end }}\n{{ if not $time.Month }}{{ $time.Set "Month" $dTime.Month }}{{ end }}\n{{ if not $time.Year }}{{ $time.Set "Year" $dTime.Year }}{{ end }}\n{{ else }}\n    {{ with reFind `(today)|(tomorrow)` $timeString }}\n        {{ if eq . "tomorrow" }}\n            {{ $time.Set "Day" (add $dTime.Day 1) }}\n        {{ end }}\n    {{ end }}\n{{ end }}\n\n{{/* Fetching time specified as hh:mm or hh:mm:ss or hh. Can be followed by am/pm as well. */}}\n{{ with reFind `(([^:]|^)((\\d+)((:(\\d+)){1,2}))((\\s?(am|pm))?))|(((\\d+))(\\s?(am|pm)))` $timeString }}\n    {{ with reFindAllSubmatches `(\\d+)` . }}\n        {{ $time.Set "Hour" (toInt (index . 0 0)) }}\n        {{ if (gt (len .) 1) }}\n            {{ $time.Set "Min" (toInt (index . 1 0) ) }}\n        {{ end }}\n        {{ if (gt (len .) 2) }}\n            {{ $time.Set "Sec" (toInt (index . 2 0)) }}\n        {{ end }}\n    {{ end }}\n    {{ with reFind `(am|pm)` . }}\n        {{ if and (eq $time.Hour 12) (eq . "am") }}\n            {{ $time.Set "Hour" 0 }}\n        {{ else if and (eq . "pm" ) (lt $time.Hour 12) }}\n            {{ $time.Set "Hour" (add $time.Hour 12) }}\n        {{ end }}\n    {{ end }}\n    {{ $timeSet = true }}\n{{ end }}\n\n{{/* Setting time to current time when both explicit date and time setting was not done */}}\n{{ if and (not $timeSet) (not $dateSet) }}\n    {{ $time.Set "Hour" $dTime.Hour }}\n    {{ $time.Set "Min" $dTime.Min }}\n    {{ $time.Set "Sec" $dTime.Sec }}\n{{ end }}\n\n{{/* Conversion to time.Time datatype */}}\n{{ $timeConverted = (newDate $time.Year $time.Month $time.Day $time.Hour $time.Min $time.Sec) }}\n\n{{/*timezone adjustment - Remove if you only want UTC times*/}}\n{{ if and (or $timeSet $dateSet) (not (reFind `([^a-z]|^)utc([^a-z]|$)` $timeString )) }}\n    {{ $TimeHour := .TimeHour }}\n    {{ with (reFind `(\\-)?\\d+(:\\d+)?` (exec "setz -u") ) }}\n        {{ $timeConverted = $timeConverted.Add (toDuration (mult -1.0 (toFloat (reReplace ":" . ".")) $TimeHour)) }}\n    {{ end }}\n{{ end }}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"First, add the code snippet above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl"},"{{/* code snippet goes here */}}\n")),(0,r.kt)("p",null,"Next, change the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeString")," to the value you want to parse. Say we wanted to use ",(0,r.kt)("inlineCode",{parentName:"p"},".Message.Content")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},".StrippedMsg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{3}","{3}":!0},"{{/* Let $timeString be the input string to be parsed. */}}\n- {{ $timeString := .StrippedMsg }}\n+ {{ $timeString := .Message.Content }}\n{{/* rest of code snippet goes here */}}\n")),(0,r.kt)("p",null,"You can now reference the parsed time using ",(0,r.kt)("inlineCode",{parentName:"p"},"$timeConverted"),", which will be a ",(0,r.kt)("em",{parentName:"p"},"time.Time"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{2}","{2}":!0},"{{/* code snippet goes here */}}\nResulting time: {{$timeConverted}}\n")),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"This code snippet was written by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}u.isMDXComponent=!0}}]);