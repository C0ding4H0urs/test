"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1242],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,u=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5171:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Overview"},s=void 0,d={unversionedId:"giveaway/basic/overview",id:"giveaway/basic/overview",isDocsHomePage:!1,title:"Overview",description:"If you're adding the giveaway system for the first time, we recommend that you look at version two of the giveaway package rather than this one; it has all the features of version one and more.",source:"@site/docs/giveaway/basic/overview.md",sourceDirName:"giveaway/basic",slug:"/giveaway/basic/overview",permalink:"/giveaway/basic/overview",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/giveaway/basic/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"sidebar",previous:{title:"Reaction Handler",permalink:"/giveaway/basic-v2/reaction-handler"},next:{title:"Main CC",permalink:"/giveaway/basic/main-cc"}},m=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[{value:"Main Command",id:"main-command",children:[]},{value:"Reaction Handler",id:"reaction-handler",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[{value:"<code>giveaway start &lt;time&gt; [prize]</code>",id:"giveaway-start-time-prize",children:[]},{value:"<code>giveaway end &lt;id&gt;</code>",id:"giveaway-end-id",children:[]},{value:"<code>giveaway cancel &lt;id&gt;</code>",id:"giveaway-cancel-id",children:[]},{value:"<code>giveaway list</code>",id:"giveaway-list",children:[]}]},{value:"execCC support",id:"execcc-support",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Author",id:"author",children:[]}],p={toc:m};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're adding the giveaway system for the first time, we recommend that you look at ",(0,r.kt)("a",{parentName:"p",href:"../basic-v2/overview"},"version two")," of the giveaway package rather than this one; it has all the features of version one and more."))),(0,r.kt)("p",null,"This is the original version of the giveaway package."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start giveaways with duration, optional prize, number of participants, number of winners, and giveaway channel."),(0,r.kt)("li",{parentName:"ul"},"End giveaways and announce winners instantly."),(0,r.kt)("li",{parentName:"ul"},"Cancel giveaways without announcing winners."),(0,r.kt)("li",{parentName:"ul"},"List all active giveaways."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execCC")," support for automating giveaway creation/cancellation/etc. from custom commands.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"This package contains two custom commands: the ",(0,r.kt)("a",{parentName:"p",href:"main-cc"},"main command"),", and a ",(0,r.kt)("a",{parentName:"p",href:"reaction-handler"},"reaction handler"),"."),(0,r.kt)("p",null,"Both must be added for the system to work as expected. As usual, there are instructions describing where to put the script and which trigger to use on the pages corresponding to the individual commands. Additionally, we've documented how and where to add these scripts down below."),(0,r.kt)("h3",{id:"main-command"},"Main Command"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("a",{parentName:"p",href:"main-cc"},"main command")," as a new custom command.\nThe trigger is a command trigger type with value ",(0,r.kt)("inlineCode",{parentName:"p"},"giveaway"),", but it will also work with a ",(0,r.kt)("inlineCode",{parentName:"p"},"StartsWith")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex")," trigger if set up properly."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unless you would like everyone to be able to manage giveaways, we advise that you restrict this command to a staff role in the role restrictions."))),(0,r.kt)("p",null,"Save for now, we'll come back to it later."),(0,r.kt)("h3",{id:"reaction-handler"},"Reaction Handler"),(0,r.kt)("p",null,"Next, add the ",(0,r.kt)("a",{parentName:"p",href:"reaction-handler"},"reaction handler")," as a new custom command. The trigger is a reaction type with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Added + Removed Reactions")," option enabled."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At this point, your giveaway system should be usable! If you would like to customize the giveaway emoji, see ",(0,r.kt)("a",{parentName:"p",href:"overview/#configuration"},"here"),".\nFor how to use it, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview/#usage"},"usage")," section."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"There is one configurable value in this package, ",(0,r.kt)("inlineCode",{parentName:"p"},"$giveawayEmoji"),", which corresponds to the giveaway emoji that should be used."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you change the giveaway emoji to something different from the default, you need to change it in both the ",(0,r.kt)("a",{parentName:"p",href:"main-cc"},"main command")," and the ",(0,r.kt)("a",{parentName:"p",href:"reaction-handler"},"reaction handler"),".\nOtherwise, unexpected behavior may occur."))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The giveaway command has an inbuilt help message similar to the following which you can pull up by running ",(0,r.kt)("inlineCode",{parentName:"p"},"-giveaway")," with no arguments."))),(0,r.kt)("h3",{id:"giveaway-start-time-prize"},(0,r.kt)("inlineCode",{parentName:"h3"},"giveaway start <time> [prize]")),(0,r.kt)("p",null,"Starts a new giveaway."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<time>")," - Specifies the amount of time after which the giveaway winners will be announced/how long the giveaway will be active. Format is ",(0,r.kt)("inlineCode",{parentName:"p"},"(num)y(num)mo(num)w(num)d(num)h(num)m(num)s"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"1y7mo2w1d3h4m15s = 1 year 7 months 2 weeks 1 day 3 hours 4 minutes and 15 seconds"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Must not contain spaces in between. Stick to the format above only, i.e. use ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"days")," for specifying days and so on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[prize]")," - The prize of the giveaway, can be multiple words."))),(0,r.kt)("h4",{id:"optional-flags"},"Optional Flags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"specifies the max number of participants (default is unlimited).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-w"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"specifies the number of winners (default is 1).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel (ID/Mention)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"specifies the channel for giveaway to take place (default is current channel).")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-giveaway start 1d12h Ps4 Pro -p 50 -w 2 -c #giveaways\n")),(0,r.kt)("p",null,"Starts a giveaway in ",(0,r.kt)("inlineCode",{parentName:"p"},"#giveaways")," which will remain active for 1 day 12 hours with the maximum participants set to 50 and number of winners set to 2."),(0,r.kt)("h3",{id:"giveaway-end-id"},(0,r.kt)("inlineCode",{parentName:"h3"},"giveaway end <id>")),(0,r.kt)("p",null,"Ends the giveaway with the ID provided and announces the winners instantly. Updates the giveaway announcement message."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ID is the long number which can be obtained using the ",(0,r.kt)("inlineCode",{parentName:"p"},"giveaway list")," command. It is also mentioned in the giveaway announcement embed."))),(0,r.kt)("h3",{id:"giveaway-cancel-id"},(0,r.kt)("inlineCode",{parentName:"h3"},"giveaway cancel <id>")),(0,r.kt)("p",null,"Cancels the giveaway with the ID provided without announcing the winners. Updates the giveaway announcement message."),(0,r.kt)("h3",{id:"giveaway-list"},(0,r.kt)("inlineCode",{parentName:"h3"},"giveaway list")),(0,r.kt)("p",null,"Lists all active giveaways with their IDs, prize, and ending time."),(0,r.kt)("h2",{id:"execcc-support"},"execCC support"),(0,r.kt)("p",null,"This command package has intuitive support for ",(0,r.kt)("inlineCode",{parentName:"p"},"execCC"),". Simply call the command with data set to a string structured like follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"giveaway <subcommand> <arg0> <arg1> ...\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{{execCC $CCID_for_giveaway_cc nil 0 "-giveaway start 1d Coins -w 2"}}')," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"-giveaway start 1d Coins"),"\nStarts a giveaway in the same channel in which ",(0,r.kt)("inlineCode",{parentName:"p"},"execCC")," is invoked with a duration of 1 day with max winners set to 2 and prize set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Coins"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{{execCC $CCID_for_giveaway_cc nil 0 "-givewaway end 11106339"}}')," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"-giveaway end 11106339"),"\nEnds the giveaway with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"11106339")," immediately and announces the winners."))),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,"This custom command package was written by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}c.isMDXComponent=!0}}]);