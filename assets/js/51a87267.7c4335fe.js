"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6384],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1004:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var n=r(3117),i=(r(7294),r(3905));const o={title:"Preview Color"},l=void 0,a={unversionedId:"utilities/color-preview",id:"utilities/color-preview",title:"Preview Color",description:"This command allows you to preview how colours look. Also includes some information about the colour, such as its hexadecimal/decimal equivalent.",source:"@site/docs/utilities/color-preview.md",sourceDirName:"utilities",slug:"/utilities/color-preview",permalink:"/utilities/color-preview",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/color-preview.md",tags:[],version:"current",frontMatter:{title:"Preview Color"},sidebar:"sidebar",previous:{title:"Custom Command to File",permalink:"/utilities/cc2file"},next:{title:"Display Struct",permalink:"/utilities/display-struct"}},c={},p=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command allows you to preview how colours look. Also includes some information about the colour, such as its hexadecimal/decimal equivalent."),(0,i.kt)("h2",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(preview|color)(\\s+|\\z)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-preview <hex>")," - Previews the color with the hex provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-preview <dec> -dec")," - Previews the color with the decimal value provided.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The reason we have ",(0,i.kt)("inlineCode",{parentName:"p"},"-dec")," is to distinguish hex from decimal in ambiguous cases. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"111111")," is both a valid hex and decimal color.")),(0,i.kt)("admonition",{title:"Aliases",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),", you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),".")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/preview.go.tmpl",file:"../../../src/utilities/preview.go.tmpl"},'{{/*\n    Allows you to preview how colors look. Converts hex to dec and vice versa as well.\n    See <https://yagpdb-cc.github.io/utilities/color-preview> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $multipliers := cslice 1048576 65536 4096 256 16 1 }}\n{{ $hex2dec := sdict "A" 10 "B" 11 "C" 12 "D" 13 "E" 14 "F" 15 }}\n{{ $stripped := .StrippedMsg }}\n{{ $force := or (reFind `-(d|dec)` $stripped) "" }}\n{{ $regex := `(?:#?([a-fA-F\\d]{1,6}))` }}\n{{ if $force }}\n    {{ $regex = `(\\d+)` }}\n{{ end }}\n{{ with reFindAllSubmatches $regex $stripped }}\n    {{ $hex := (printf "%06s" (index . 0 1)) | upper }}\n    {{ $dec := 0 }}\n    {{ with and $force (toInt (index . 0 1)) }}\n        {{ $hex = (printf "%06x" .) | upper }}\n        {{ $dec = . }}\n    {{ end }}\n    {{ if not $dec }}\n        {{ range $k, $v := split $hex "" }}\n            {{- $multiplier := index $multipliers $k }}\n            {{- $num := or ($hex2dec.Get $v) $v}}\n            {{- $dec = add $dec (mult $num $multiplier) -}}\n        {{ end }}\n    {{ end }}\n    {{ sendMessage nil (cembed\n        "title" "\u276f Color Preview"\n        "color" $dec\n        "description" (printf "\u276f **Decimal:** %d\\n\u276f **Hex:** #%s" $dec $hex)\n        "thumbnail" (sdict "url" (printf "https://dummyimage.com/400x400/%s/%s" $hex $hex))\n    ) }}\n{{ else }}\n    Correct usage is `-preview <hex>`.\n{{ end }}\n')),(0,i.kt)("h2",{id:"author"},"Author"),(0,i.kt)("p",null,"This custom command was written by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}d.isMDXComponent=!0}}]);