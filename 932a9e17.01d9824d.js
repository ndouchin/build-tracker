(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(164)),s={id:"withMysql",title:"MySQL"},i={id:"plugins/withMysql",title:"MySQL",description:"Connecting your Build Tracker application to a MySQL database is easy with the help of `@build-tracker/plugin-with-mysql`",source:"@site/docs/plugins/with-mysql.md",permalink:"/docs/plugins/withMysql",editUrl:"https://github.com/paularmstrong/build-tracker/edit/master/docs/docs/plugins/with-mysql.md",sidebar:"docs",previous:{title:"MariaDB",permalink:"/docs/plugins/withMariadb"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"<code>host: string = process.env.MYSQLHOST</code>",id:"host-string--processenvmysqlhost",children:[]},{value:"<code>database: string = process.env.MYSQLPASSWORD</code>",id:"database-string--processenvmysqlpassword",children:[]},{value:"<code>user: string = process.env.MYSQLUSER</code>",id:"user-string--processenvmysqluser",children:[]},{value:"<code>password: string = process.env.MYSQLDATABASE</code>",id:"password-string--processenvmysqldatabase",children:[]},{value:"<code>port: number = process.env.MYSQLPORT = 3306</code>",id:"port-number--processenvmysqlport--3306",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Connecting your Build Tracker application to a MySQL database is easy with the help of ",Object(o.b)("inlineCode",{parentName:"p"},"@build-tracker/plugin-with-mysql")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @build-tracker/plugin-with-mysql@latest\n# or\nnpm install --save @build-tracker/plugin-with-mysql@latest\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Edit your ",Object(o.b)("inlineCode",{parentName:"p"},"build-tracker.config.js")," file and compose your output configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const withMysql = require('@build-tracker/plugin-with-mysql');\n\nmodule.exports = withMysql({\n  mysql: {\n    user: '', // default: process.env.MYSQLUSER\n    host: '', // default: process.env.MYSQLHOST\n    database: '', // default: process.env.MYSQLDATABASE\n    password: '', // default: process.env.MYSQLPASSWORD\n    port: 3306 // default: process.env.MYSQLPORT\n  }\n});\n")),Object(o.b)("p",null,"All configuration options that are able to fall back on ",Object(o.b)("inlineCode",{parentName:"p"},"process.env")," environment variables can be written to your systems ",Object(o.b)("inlineCode",{parentName:"p"},"ENV")," or to a local ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file via ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/motdotla/dotenv#readme"}),"dotenv"),"."),Object(o.b)("h3",{id:"host-string--processenvmysqlhost"},Object(o.b)("inlineCode",{parentName:"h3"},"host: string = process.env.MYSQLHOST")),Object(o.b)("p",null,"Database host."),Object(o.b)("h3",{id:"database-string--processenvmysqlpassword"},Object(o.b)("inlineCode",{parentName:"h3"},"database: string = process.env.MYSQLPASSWORD")),Object(o.b)("p",null,"Database name."),Object(o.b)("h3",{id:"user-string--processenvmysqluser"},Object(o.b)("inlineCode",{parentName:"h3"},"user: string = process.env.MYSQLUSER")),Object(o.b)("p",null,"Database username with read access."),Object(o.b)("h3",{id:"password-string--processenvmysqldatabase"},Object(o.b)("inlineCode",{parentName:"h3"},"password: string = process.env.MYSQLDATABASE")),Object(o.b)("p",null,"Password for the given database username."),Object(o.b)("h3",{id:"port-number--processenvmysqlport--3306"},Object(o.b)("inlineCode",{parentName:"h3"},"port: number = process.env.MYSQLPORT = 3306")),Object(o.b)("p",null,"Database host port."))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);