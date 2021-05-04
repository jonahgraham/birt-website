(self.webpackChunkbirt_dev=self.webpackChunkbirt_dev||[]).push([[8775],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7725:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"my-first-report",title:"My first Report",sidebar_label:"My first Report"},l={unversionedId:"my-first-report",id:"my-first-report",isDocsHomePage:!1,title:"My first Report",description:"Introduction",source:"@site/docs/my-first-report.md",sourceDirName:".",slug:"/my-first-report",permalink:"/birt-website/docs/my-first-report",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/my-first-report.md",version:"current",sidebar_label:"My first Report",frontMatter:{id:"my-first-report",title:"My first Report",sidebar_label:"My first Report"},sidebar:"someSidebar",previous:{title:"Create a Report",permalink:"/birt-website/docs/create-a-report"},next:{title:"Community",permalink:"/birt-website/docs/community"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Tutorial",id:"tutorial",children:[]},{value:"Templates and Examples",id:"templates-and-examples",children:[]},{value:"Documentation",id:"documentation",children:[]}],s={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The following introduction walks you through building a simple report with BIRT. It introduces the major UI features, and many of the BIRT reporting elements. At the completion of this tutorial, you should be able to start building your own reports using your own database."),(0,i.kt)("p",null,"We'll create a simple customer listing report, with the customers grouped by state and city. For each customer, we'll display a name and phone number."),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"The following two video tutorial walks you through building a simple report with BIRT. It introduces the major UI features, and many of the BIRT reporting elements. At the completion of this tutorial, you should be able to start building your own reports using your own database."),(0,i.kt)("p",null,"In these tutorials, you'll create a simple customer listing report, with the customers grouped by state and city. For each customer, you'll display a name and phone number.## Basic Overview"),(0,i.kt)("p",null,"The following videos walks you though the steps to build a basic listing report and introduces the basic BIRT concepts. This is right the place to start. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"//www.youtube.com/watch?v=6TRndgUMUmU"},"tutorial 1")),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"//www.youtube.com/watch?v=Kdr_LeHjIH8"},"tutorial 2"))),(0,i.kt)("h2",{id:"templates-and-examples"},"Templates and Examples"),(0,i.kt)("p",null,"Now that you've learned the basics of creating a BIRT design, check out some templates and use them as examples of what you can do with BIRT."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/birt-website/docs/template-introduction"},"Templates and examples"))),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Now that you know enough about BIRT, you'll probably want to see some documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/birt-website/docs/t_brief-editor-tour"},"Documentation"))))}c.isMDXComponent=!0}}]);