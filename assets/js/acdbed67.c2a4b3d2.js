"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3346],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={title:"Binary Search"},o=void 0,s={unversionedId:"code-snippets/binary-search",id:"code-snippets/binary-search",title:"Binary Search",description:"This code snippet searches for a value in a sorted slice/array in O(log n) using the binary search algorithm.",source:"@site/docs/code-snippets/binary-search.md",sourceDirName:"code-snippets",slug:"/code-snippets/binary-search",permalink:"/code-snippets/binary-search",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/code-snippets/binary-search.md",tags:[],version:"current",frontMatter:{title:"Binary Search"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/code-snippets/overview"},next:{title:"Get Username Color",permalink:"/code-snippets/get-username-color"}},c={},l=[{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:2},{value:"Author",id:"author",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This code snippet searches for a value in a sorted slice/array in ",(0,a.kt)("em",{parentName:"p"},"O(log n)")," using the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binary_search_algorithm"},"binary search")," algorithm."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/code_snippets/binary_search.go.tmpl",file:"../../../src/code_snippets/binary_search.go.tmpl"},'{{/*\n    Searches a sorted slice/array in O(log n) time using binary search.\n    See <https://yagpdb-cc.github.io/code-snippets/binary-search> for more information.\n\n    Author: Alikuxac <https://github.com/alikuxac>\n*/}}\n\n{{define "binary_search"}}\n    {{- $list := .List}}\n    {{- $left := or .Left 0}}\n    {{- $right := or .Right (sub (len $list) 1)}}\n    {{- $value := .Value}}\n    {{- if .Found}}\n        {{- if ge $right 1}}\n            {{- $mid := (div (add $left $right) 2) | toInt}}\n            {{- if eq (index $list $mid) $value}}\n                {{- .Set "Result" $mid}}\n                {{- .Set "Found" false}}\n            {{- end}}\n            {{- if gt (index $list $mid) $value}}\n                {{- .Set "Right" (sub $mid 1)}}\n                {{- template "binary_search" .}}\n            {{- else}}\n                {{- .Set "Left" (add $mid 1)}}\n                {{- template "binary_search" .}}\n            {{- end}}\n        {{- else}}\n            {{- .Set "Result" -1}}\n            {{- .Set "Found" false}}\n        {{- end}}\n    {{- end -}}\n{{end}}\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First, copy the above snippet to the top of your code.",(0,a.kt)("br",null),"\nTo use it, you will need to construct a map holding your input slice/array in addition to the value you wish to search for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl"},'{{/* code snippet here */}}\n{{$query := sdict "List" (cslice 1 2 3 5 7 8) "Value" 2 "Found" true}}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},'"Found" true')," tells the template to begin searching in the slice/array, so make sure to set it!")),(0,a.kt)("p",null,"Then, we can run the template, passing the query as data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{3}","{3}":!0},'{{/* code snippet here */}}\n{{$query := sdict "List" (cslice 1 2 3 5 7 8) "Value" 2 "Found" true}}\n{{template "binary_search" $query}}\n')),(0,a.kt)("p",null,"Running the template will add a new value to your map, ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),", which is the index where the element was found, or ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," if it wasn't found. We can access it using dot notation or ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),", like such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{4}","{4}":!0},'{{/* code snippet here */}}\n{{$query := sdict "List" (cslice 1 2 3 5 7 8) "Value" 2 "Found" true}}\n{{template "binary_search" $query}}\nIndex: {{$query.Result}}\n')),(0,a.kt)("h2",{id:"author"},"Author"),(0,a.kt)("p",null,"This code snippet was written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alikuxac"},"@alikuxac"),"."))}u.isMDXComponent=!0}}]);