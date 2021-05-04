(self.webpackChunkbirt_dev=self.webpackChunkbirt_dev||[]).push([[236],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},196:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"t_data-properties",title:"Data Properties",sidebar_label:"Data Properties"},s={unversionedId:"t_data-properties",id:"t_data-properties",isDocsHomePage:!1,title:"Data Properties",description:"In addition to the visual properties we just saw, BIRT provides a set of data-related properties for each report item. We'll use these to control the sort order of the customers within our report.",source:"@site/docs/t_data-properties.md",sourceDirName:".",slug:"/t_data-properties",permalink:"/birt-website/docs/t_data-properties",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_data-properties.md",version:"current",sidebar_label:"Data Properties",frontMatter:{id:"t_data-properties",title:"Data Properties",sidebar_label:"Data Properties"},sidebar:"someSidebar",previous:{title:"Data Sets",permalink:"/birt-website/docs/t_data-sets"},next:{title:"Cascading Styles",permalink:"/birt-website/docs/t_cascading-styles"}},p=[{value:"Data properties include:",id:"data-properties-include",children:[]},{value:"Setting the Detail Sort",id:"setting-the-detail-sort",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the visual properties we just saw, BIRT provides a set of data-related properties for each report item. We'll use these to control the sort order of the customers within our report."),(0,o.kt)("p",null,"Data sets in BIRT are reusable: you can use the same data set multiple times. For example, suppose you want to show year-to-date (YTD) sales three ways: by month, by sales rep, and as a chart. With BIRT, you define the data set once, but present it three times. Each use of the data set can provide data properties that customize the data set to that particular use."),(0,o.kt)("h2",{id:"data-properties-include"},"Data properties include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data set binding: lets you specify the data set to use with any given report item.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Parameter binding: you can pass data into the data set. For example, you can create a "master/detail" subreport by using data set parameters to pass data from the current row in the master report to the detail for the subreport. Or as another example, you can obtain a list of customers from one database, then have the subreport display orders from a different database.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Filters: provide filter conditions unique to a given presentation. For example, a list of transactions might list all transactions, but then use filters to display sales in one chart, returns in another.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Groups: provide ability to create subtotals as we have already seen.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sorting: controls the order of the detail rows within a table. This is the property we'll use."))),(0,o.kt)("h2",{id:"setting-the-detail-sort"},"Setting the Detail Sort"),(0,o.kt)("p",null,"We're ready to specify the sort order for customers within our report."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the table. (by clicking on the table tab in the Layout Editor.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose the Sorting tab within the Property Editor. (Note: Sorting is a tab on the top of the Property Editor and not a page on the left as we've used thus far.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the Add button to add a new sort condition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Use the pull-down under Sort Key to choose "CUSTOMERNAME".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Leave the Sort Direction at Ascending."))))}u.isMDXComponent=!0}}]);