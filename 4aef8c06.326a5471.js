(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),b=(a(0),a(164)),i={id:"cli",title:"@build-tracker/cli",sidebar_label:"@build-tracker/cli"},c={id:"packages/cli",title:"@build-tracker/cli",description:"Adding the `@build-tracker/cli` package includes a command-line utility, `bt-cli` for interacting with the Build Tracker API. It can be run with `yarn bt-cli` or `npx bt-cli`",source:"@site/docs/packages/cli.md",permalink:"/docs/packages/cli",editUrl:"https://github.com/paularmstrong/build-tracker/edit/master/docs/docs/packages/cli.md",sidebar_label:"@build-tracker/cli",sidebar:"docs",previous:{title:"@build-tracker/build",permalink:"/docs/packages/build"},next:{title:"@build-tracker/comparator",permalink:"/docs/packages/comparator"}},l=[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"CLI",id:"cli",children:[{value:"<code>upload-build</code>",id:"upload-build",children:[]},{value:"<code>create-build</code>",id:"create-build",children:[]},{value:"<code>stat-artifacts</code>",id:"stat-artifacts",children:[]},{value:"<code>version</code>",id:"version",children:[]}]}],o={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Adding the ",Object(b.b)("inlineCode",{parentName:"p"},"@build-tracker/cli")," package includes a command-line utility, ",Object(b.b)("inlineCode",{parentName:"p"},"bt-cli")," for interacting with the Build Tracker API. It can be run with ",Object(b.b)("inlineCode",{parentName:"p"},"yarn bt-cli")," or ",Object(b.b)("inlineCode",{parentName:"p"},"npx bt-cli")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Important note:")," Set up the Build Tracker CLI close to your application's code (in the same repository and workspace). Remember that the configuration for the CLI is ",Object(b.b)("strong",{parentName:"p"},"not")," the same as the configuration for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/packages/server"}),"server"),".")),Object(b.b)("h2",{id:"install"},"Install"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @build-tracker/cli@latest\n# or\nnpm install --save @build-tracker/cli@latest\n")),Object(b.b)("p",null,"To list all commands and help, run ",Object(b.b)("inlineCode",{parentName:"p"},"yarn bt-cli --help")),Object(b.b)("h2",{id:"configuration"},"Configuration"),Object(b.b)("p",null,"The Build Tracker CLI uses the same configuration as the ",Object(b.b)("inlineCode",{parentName:"p"},"@build-tracker/api-client"),". For more information, see ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"api-client#configuration"}),"api-client configuration"),"."),Object(b.b)("h2",{id:"cli"},"CLI"),Object(b.b)("h3",{id:"upload-build"},Object(b.b)("inlineCode",{parentName:"h3"},"upload-build")),Object(b.b)("p",null,"This command will read your configuration file, and upload the current build meta and artifact stats to your server. In most scenarios, this should be all you need."),Object(b.b)("p",null,"Beside the arguments below, if you're running your server with a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"server#securing-your-api"}),Object(b.b)("inlineCode",{parentName:"a"},"BT_API_AUTH_TOKEN")," environment variable"),", ensure you run this command with that variable available as well."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"BT_API_AUTH_TOKEN=my-secret-token bt-cli upload-build\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--branch"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the branch name and do not attempt to read from git"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current git working branch")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-c")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON-encoded extra meta information to attach to the build"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--parent-revision")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually set the parent revision for the comparison."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determined via git-merge-base")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--skip-dirty-check")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip the git work tree state check"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"create-build"},Object(b.b)("inlineCode",{parentName:"h3"},"create-build")),Object(b.b)("p",null,"This command will create a Build object for the current available build. If run independently, it will only output information, but not upload it anywhere. For that, you only need to run ",Object(b.b)("inlineCode",{parentName:"p"},"yarn bt-cli upload-build"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--branch"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set the branch name and do not attempt to read from git"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current git working branch")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-c")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--meta")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON-encoded extra meta information to attach to the build"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--out"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-o")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write the build to stdout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--parent-revision")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually set the parent revision for the comparison."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determined via git-merge-base")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--skip-dirty-check")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip the git work tree state check"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"stat-artifacts"},Object(b.b)("inlineCode",{parentName:"h3"},"stat-artifacts")),Object(b.b)("p",null,"Lower-level than ",Object(b.b)("inlineCode",{parentName:"p"},"create-build"),", this command will get artifact stats for the current build files and output a JSON representation of them."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option, alias"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--config"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-c")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set path to the build-tracker API config file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"api-client#configuration"}),"Found via cosmiconfig"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"--out"),", ",Object(b.b)("inlineCode",{parentName:"td"},"-o")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write the stats to stdout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true"))))),Object(b.b)("h3",{id:"version"},Object(b.b)("inlineCode",{parentName:"h3"},"version")),Object(b.b)("p",null,"Output the version number of the ",Object(b.b)("inlineCode",{parentName:"p"},"bt-cli"),"."))}d.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(i,".").concat(O)]||p[O]||u[O]||b;return a?r.a.createElement(j,c({ref:t},o,{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);