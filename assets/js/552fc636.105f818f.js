"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9962],{3905:function(e,a,c){c.d(a,{Zo:function(){return l},kt:function(){return p}});var n=c(7294);function d(e,a,c){return a in e?Object.defineProperty(e,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[a]=c,e}function f(e,a){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),c.push.apply(c,n)}return c}function t(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{};a%2?f(Object(c),!0).forEach((function(a){d(e,a,c[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(c,a))}))}return e}function b(e,a){if(null==e)return{};var c,n,d=function(e,a){if(null==e)return{};var c,n,d={},f=Object.keys(e);for(n=0;n<f.length;n++)c=f[n],a.indexOf(c)>=0||(d[c]=e[c]);return d}(e,a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(n=0;n<f.length;n++)c=f[n],a.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(d[c]=e[c])}return d}var r=n.createContext({}),i=function(e){var a=n.useContext(r),c=a;return e&&(c="function"==typeof e?e(a):t(t({},a),e)),c},l=function(e){var a=i(e.components);return n.createElement(r.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var c=e.components,d=e.mdxType,f=e.originalType,r=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=i(c),p=d,m=s["".concat(r,".").concat(p)]||s[p]||o[p]||f;return c?n.createElement(m,t(t({ref:a},l),{},{components:c})):n.createElement(m,t({ref:a},l))}));function p(e,a){var c=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var f=c.length,t=new Array(f);t[0]=s;var b={};for(var r in a)hasOwnProperty.call(a,r)&&(b[r]=a[r]);b.originalType=e,b.mdxType="string"==typeof e?e:d,t[1]=b;for(var i=2;i<f;i++)t[i]=c[i];return n.createElement.apply(null,t)}return n.createElement.apply(null,c)}s.displayName="MDXCreateElement"},4535:function(e,a,c){c.r(a),c.d(a,{assets:function(){return r},contentTitle:function(){return t},default:function(){return o},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return i}});var n=c(3117),d=(c(7294),c(3905));const f={title:"Animal Image Generator"},t=void 0,b={unversionedId:"fun/animal",id:"fun/animal",title:"Animal Image Generator",description:"This command generates random images of different animals.",source:"@site/docs/fun/animal.md",sourceDirName:"fun",slug:"/fun/animal",permalink:"/fun/animal",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/animal.md",tags:[],version:"current",frontMatter:{title:"Animal Image Generator"},sidebar:"sidebar",previous:{title:"Reaction Handler",permalink:"/fun/starboard/reaction-handler"},next:{title:"Choose Item",permalink:"/fun/choose"}},r={},i=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],l={toc:i};function o(e){let{components:a,...c}=e;return(0,d.kt)("wrapper",(0,n.Z)({},l,c,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"This command generates random images of different animals."),(0,d.kt)("h2",{id:"trigger"},"Trigger"),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"Type:")," ",(0,d.kt)("inlineCode",{parentName:"p"},"Command"),(0,d.kt)("br",null),"\n",(0,d.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,d.kt)("inlineCode",{parentName:"p"},"animal")),(0,d.kt)("h2",{id:"usage"},"Usage"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"-animal <type>")," - Generates an image of the animal given. ",(0,d.kt)("inlineCode",{parentName:"li"},"type")," should be one of ",(0,d.kt)("inlineCode",{parentName:"li"},"duck"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"fox"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"cat"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"goat"),", ",(0,d.kt)("inlineCode",{parentName:"li"},"shiba"),", and ",(0,d.kt)("inlineCode",{parentName:"li"},"httpcat"),"."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"-animal httpcat <code>")," - Special case for httpcat images. Provide a HTTP status code as the second parameter to generate a httpcat image for that status code.")),(0,d.kt)("h2",{id:"code"},"Code"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/animal.go.tmpl",file:"../../../src/fun/animal.go.tmpl"},'{{/*\n    Generates random images of different animals.\n    See <https://yagpdb-cc.github.io/fun/animal> for more information.\n\n    Author: GenryMg <https://github.com/hng12>\n*/}}\n\n{{ $args := parseArgs 1 "Usage: `-animal <animal type>`. Usage `-animal help` to see the animal types avaliable." \n    (carg "string" "animal")\n    (carg "string" "optional-httpcat")\n}}\n{{ $animal := $args.Get 0 | lower }}\n{{ $link := "" }}\n{{ $send := true }}\n{{ if eq $animal "fox" }} {{ $link = printf "https://randomfox.ca/images/%d.jpg" (randInt 1 123) }}\n{{ else if eq $animal "duck" }}\n    {{ $base := "https://random-d.uk/api/" }}\n    {{ if lt (randInt 10) 7 }} {{ $link = printf "%s%d.jpg" $base (randInt 1 130) }}\n    {{ else }} {{ $link = printf "%s%d.gif" $base (randInt 1 29) }} {{ end }}\n{{ else if eq $animal "goat" }} {{ $link = "https://placegoat.com/600/600" }}\n{{ else if eq $animal "httpcat" }}\n    {{ $base := "https://http.cat" }}\n    {{ $cats := ((cslice 100 101 200 201 202 204 206 207 300 301 302 303 304 305 307 431 444 450 451 499 500 501 502 503 504 506 507 508 509 510 511 599).AppendSlice (seq 400 419)).AppendSlice (seq 420 430) }}\n    {{ if $args.IsSet 1 }}\n        {{ $link = joinStr "/" $base ($args.Get 1) }}\n    {{ else }}\n        {{ $link = joinStr "/" $base (index $cats (randInt (len $cats))) }}\n    {{ end }}\n{{ else if eq $animal "cat" }} {{ $link = joinStr "" "https://cataas.com/cat?filter=" (urlescape adjective) }}\n{{ else if eq $animal "shiba" }}\n     {{ $links := cslice "41611a872c0f3f6b2d3b52cd70b3f33c564c7c58" "7c11d12d675fa5f0c353b86a9b10683e5e58ce97" "181b48fd65b2a2d73a900bcc8bc6bc2e49f8c4e6" "4f5b968ea7d7a818b8c1188298da2d9110b5d559" "66d7834359acc2696cd15b78bb727d51b206498c" "0b9b0510484189f715e094678956f2bed7aeda03" "af1fe5bc9a63d1bf5417316175b6c2f7d4fc29d4" "d536e09e98a5e24d38c59e0f40fcb27a81fd394a" "ed8eeedf779cf7eaf9c3622879544efddad7c4ad" "77dd22aab97a9819c539d22859d60db8aa300950" "cc9c9f3e42dc53123eefce8a8e389da197995186" "e47355f9bd58cfb650c6d153c6d52803474867c6" "883fcfe3b74fa4e6cec5a202101c3d4254bfa8a3" "f9d98fb406a915f6aed3ad3aa0b480054caabceb" "0b2d099ff3e8a4b32c36a193c93947c9a89f5b3c" "473f4fdc8f9991b2927d29cec24e532678e3c7dd" "e3a249b7e940eaedf961d8e83c492936a16d21a6" "1f4cfee10e75536b1aca4c2a9d5d3880c9efb80c" "e08c18c3fc935e35323bca4e75635ebf544f03df" "80f4b04fb89b9e716d56949382ed516f74f95ec4" "5137bd6b95f91727aedefde3d934198c15fac459" "a4d87c66af14f9dfb7b6f1aafe9aea6185550970" "233ded0058f3b747cfd45dade6ebf3a1622fb5c8" "ce446f8984415a95f6cde8b2cb829c7faa7ac510" "be75152298da2dc6f350864ba219acf8d533d4ba" "bc6768062296682473c49c6927ec58b78fd8e300" "97f947f28ec4e2d19660f9140294b649ef7213f9" "9d2636427692de5d10b79b477ac3d045127762ee" "1d8e4002893117f3281e448bb083e480eaa77238" "70f04f08f552ebb4740b4ca2512a8d2df6a7fce0" "c00ecd35ea72da2f706edbbd1f4b88477bbdfd18" "799bfac2c74117083bd34db224a06a804ecf0e73" "9124f6316c25d906faf3d55d48bfe79671f389d6" "10ba2f330e18325e8d42be204f7cb21b73733e06" "a22f082e9febc743b4518b6db16927987f79077e" "cce8bd0e935d44f565f4406c24cee4f5908ed9e6" "c11e40cc06fd6433d0c84f6502005efe0697b637" "15d72d45f905ecaec372f992bb54d1933b7bcc70" "ef5777e5a216f1a55de23712ed31b95d682c9239" "d30f017353b29ed8bc8ef49345cc6406bc477888" "48d604ebf85792db7e6fd000a90b50bc34dc71dc" "ae4ae82008fa68b0bf9d807ef63e00e749d0bac4" "bd062161da3e01a507c2da7f8d132ae4d9660469" "0f174aefde912f1c7f1ad24add2978e070c77963" "4e0c2a2223d0334b92b37061f0472386ec89f73b" "3f6356fbfa7338a63f5dbfe24794fef6e700f723" "07e7edfec8b33ebf6b12b87b5dd5e017b4a499c3" "df35d083089bc3cdd2a6cdf17e28a2ae558294f4" "a19b62a34fdc1b9f23f8aa4c5af2558f64018103" "fd7a7410c26fc9443a807da7ed88aae0dc14a7ca" "10e9896b6f4d2a2ef23285c5bdb279aa209954a9" "55c5a9e828461f9aa9f30120c1ec935f94cfa408" "b9f933ed44562323e3ce1d295287e7a90c0c0ba6" "ec74bb11c622c8bcfc421b4ecf6dad9882ea30de" "da34a966d61d3bd72fa558b383543c3160d476e7" "978b46e52f1211e0ed2a48cf9b435f0cc39a88f7" "c88230ee859bf5bbc546ba1b6bfdeee993398ec7" "5bda9a93c5ed5d853f1790fb8e8fb1ff1942e7ed" "8e586ddb53426c68a322ec78271850c4fbe7548c" "fdcde2811ddc0e5d3daa5b8ccc7c3d72ec14d2ff" "e3afe3193cca532fa0c62d180078819a7bfd4597" "ddad5ee6cc7da649f86cd0272e0541a9751176a7" "d4d21f8ff0f7fd403b838cf8f70982e88ecc2cbd" "3f8e6501626a074e17edb0c7db26942765374cd1" "b4c1031dd8a7949c25ab91cb2c1a85c89e350754" "d4bbc1190ea6e62eee94f0e23eb1523293705caf" "26a83eb15e1bce0d1a12fbe36112f3165d91890d" "e47b478e2db6688013876dfd38d0c3eed1c09332" "3535f004cbc6ab13ab9eb78e367a61c3f818eeab" "a22f94ea7fa02ebf1a1a797c7780c7bc274988f6" "44c436eea29c91d19d25d1d00a9bf2f2e1446dd8" "87d0df4c8405d77850b588b257362889a87e981b" "73b2dc6499a632d7b24193f54dc0fe6c80dc3190" "066e9615f203f08856c8e905a6abcb3e39df9e5d" "cf6a9d8f631100b1b1e02e6d5530320b07d45d0d" "be6e6561a4be5ea85ad69889d7c8880c8f5705f5" "bf9bb0d576645828f220f012beb23bc12356b824" "cc657b92da83bb70355c35f815bb5b36169f8084" "56cf5a774f081c7e8f7c340c42c297278a99371c" "22518064b787175f2a81188aeebcaa69a4c75938" "ff4160bc545671e13075c14bcbb14fdd0bcc2b87" "f164c214b2592a3cacd3551c47dadec5bcff7e82" "3c47a7d42c17589bd65df586515efedd18bc6af1" "df6116278df5de4e714bab8fe7173e3a7017f5b8" "70f04f08f552ebb4740b4ca2512a8d2df6a7fce0" "1dc7b520e8c08cfaf7efaeb7cc3b79ea8c6dc520" "3c2ce582117afea3680ed279943b4b7081bcbdef" "91d21aaa33a55f414c2a3488b7c0c155dc045b1f" "a870fc6e9e51b92cefb3f7f945190bc0b29060b3" "d5950fd9ab48f73e5693b055146f77bc5d2f648b" "eb2bbc42d836ad1b6589a4e407452415400f6222" "2e2a074e2f1756decf9e84da095d60e19cb1d982" "80048945e625d11210044e516c4a0e74b2b361da" "9794958daf9c3f8a6997ece8ca3434d0c07f3e7b" "be2cb2c635ddf024497f5e7a8c73398974782f0c" "5fcdfb9dae06fff466a45005523a46f6ad022b4e" "076bc996fec3ddc0d7aee52d2150ad8749a95b31" "b1f4767ccbe873a357ab9179a44d6e1ae11c1b6f" "9eab8417d39237e7c6d726aba9d8f688ed55e307" "45861677217a38e7495dd8a8a3f97b76860171b3" }}\n     {{ $link = printf "https://cdn.shibe.online/shibes/%s.jpg" (index $links (randInt (len $links))) }}\n{{ else if eq $animal "help" }}\n    {{ sendMessage nil (cembed "title" "List of avaliable animals" "color" 0x0070BB "description" "1. Duck\\n2.Fox\\n3. Cat\\n4. Goat\\n5. Shiba\\n6. Httpcat") }}\n    {{ $send = false }}\n{{ else }}\n    Usage: `-animal <animal type>`. Usage `-animal help` to see the animal types avaliable.\n    {{ $send = false }}\n{{ end }}\n{{ if $send }}\n    {{ sendMessage nil (cembed\n        "title" (joinStr " " "Have a" $animal)\n        "color" (randInt 0 16777217)\n        "image" (sdict "url" $link)\n    ) }}\n{{ end }}\n')),(0,d.kt)("h2",{id:"author"},"Author"),(0,d.kt)("p",null,"This custom command was written by ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/hng12"},"@GenryMg"),"."))}o.isMDXComponent=!0}}]);