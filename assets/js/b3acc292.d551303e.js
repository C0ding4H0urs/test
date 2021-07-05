(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=a(t),p=o,m=l["".concat(c,".").concat(p)]||l[p]||f[p]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=l;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var a=2;a<i;a++)s[a]=t[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},591:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return d},default:function(){return l}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),s=["components"],u={sidebar_position:8,title:"Fun Info"},c=void 0,a={unversionedId:"fun/funinfo",id:"fun/funinfo",isDocsHomePage:!1,title:"Fun Info",description:"A command to see user's info about counting, qotd and x-word-story",source:"@site/docs/fun/funinfo.md",sourceDirName:"fun",slug:"/fun/funinfo",permalink:"/fun/funinfo",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/funinfo.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Fun Info"},sidebar:"tutorialSidebar",previous:{title:"Duck Image Generator",permalink:"/fun/duck"},next:{title:"Guess the Number",permalink:"/fun/guess-the-number"}},d=[],f={toc:d};function l(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A command to see user's info about counting, qotd and x-word-story"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Regex")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\\A-funinfo(?:\\s+(?:\\d{17,19}|<@!?\\d{17,19}>))?\\z")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage:"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-funinfo <User: ID/Mention>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    SETUP:\n    - Set the trigger type to Regex and the trigger to: `\\A-funinfo(?:\\s+(?:\\d{17,19}|<@!?\\d{17,19}>))?\\z`\n      If your own prefix is not "-" then change it up here ^ to your correct prefix.\n\n    USAGE:\n    - Type -funinfo <User: ID/Mention> to see info about counting, qotd and x-word-story.\n      The bot will respond with a nice embed showing the user\'s count, answers and story lines.\n\n    CREDITS: SpecialEliteSNP <https://github.com/SpecialEliteSNP>\n*/}}\n\n{{/* VARIABLES - You can edit these values */}}\n  {{/* The command cooldown in seconds. Set it to 0 to disable the cooldown. */}}\n    {{ $cooldown := 20 }}\n\n  {{/* The colour of the embed (use hex: 0xFF00FF or decimal: 0-16777216) */}}\n    {{ $colour := 16734296 }}\n\n\n{{/* CODE - Don\'t edit this part */}}\n{{ if dbGet .User.ID "funinfo" }}\n  {{ addReactions "\u23f3" }}\n{{ else }}\n  {{ $e := sdict "color" $colour }}\n  {{ $u := str .User.ID }}\n  {{ if eq (len .Args) 2 }}\n    {{ $u = index .Args 1 }}\n    {{ if .Message.Mentions }}{{ $u = str (index .Message.Mentions 0).ID }}{{ end }}\n  {{ end }}\n\n  {{ $c := sdict }}{{ with (dbGet 20 "counting").Value }}{{ $c = sdict . }}{{ end }}\n  {{ if $c }}\n    {{ $v := 0 }}{{ with ($c.Get $u) }}{{ $v = . }}{{ end }}\n    {{ $e.Set "description" (printf "\ud83d\udd22 Counts: `%d`" $v) }}\n  {{ end }}\n\n  {{ $q := sdict }}{{ with (dbGet 20 "qotd").Value }}{{ $q = sdict . }}{{ end }}\n  {{ if $q }}\n    {{ $v := 0 }}{{ with ($q.Get $u) }}{{ $v = .n }}{{ end }}\n    {{ $e.Set "description" (printf "%s\\n\u2753 QOTD answers: `%d`" $e.description $v) }}\n  {{ end }}\n\n  {{ $s := sdict }}{{ with (dbGet 20 "story-channel").Value }}{{ $s = sdict . }}{{ end }}\n  {{ if $s }}\n    {{ $v := 0 }}{{ with ($s.Get $u) }}{{ $v = . }}{{ end }}\n    {{ $e.Set "description" (printf "%s\\n\ud83d\udcd6 Story lines: `%d`" $e.description $v) }}\n  {{ end }}\n\n  {{ if not (or $c $q $s) }}\n    {{ $e.Set "title" "\u274c No data found!"}}\n  {{ else if $n := getMember (toInt $u) }}\n    {{ $e.Set "title" (printf "\ud83d\udc8e Funinfo for: *%s*" $n.User.String) }}\n    {{ $e.Set "color" 15344584 }}\n  {{ else }}\n    {{ $e.Set "title" "\u274c Member not found!" }}\n    {{ $e.Del "description" }}\n  {{ end }}\n\n  {{ sendMessage nil (cembed $e) }}\n\n  {{ if $cooldown }}{{ dbSetExpire .User.ID "funinfo" 1 $cooldown }}{{ end }}\n{{ end }}\n')))}l.isMDXComponent=!0}}]);