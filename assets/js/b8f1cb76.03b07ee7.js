(self.webpackChunkbirt_dev=self.webpackChunkbirt_dev||[]).push([[1530],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8364:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o={id:"overview-customization",title:"Customization",sidebar_label:"Customization"},s={unversionedId:"overview-customization",id:"overview-customization",isDocsHomePage:!1,title:"Customization",description:"Data Customization",source:"@site/docs/overview-customization.md",sourceDirName:".",slug:"/overview-customization",permalink:"/birt-website/docs/overview-customization",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/overview-customization.md",version:"current",sidebar_label:"Customization",frontMatter:{id:"overview-customization",title:"Customization",sidebar_label:"Customization"},sidebar:"someSidebar",previous:{title:"Designer",permalink:"/birt-website/docs/overview-designer"},next:{title:"Extensibility",permalink:"/birt-website/docs/overview-extensibility"}},l=[{value:"Data Customization",id:"data-customization",children:[]},{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Scripting",id:"scripting",children:[]},{value:"Java Event Coding",id:"java-event-coding",children:[]},{value:"Project Management",id:"project-management",children:[]},{value:"Styles",id:"styles",children:[]},{value:"Libraries",id:"libraries",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"data-customization"},"Data Customization"),(0,i.kt)("p",null,"Reports often require additional business logic to prepare data for presentation. BIRT provides a number of tools to help:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(5394).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Computed Columns - Databases organize data for storage, but often data must be combined to prepare it for presentation. Computed columns let you define additional data set columns based on business logic. The logic can be a simple expression, a script, or a call to existing Java logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input and Output Parameters - Many data sources support parameters: the ability to pass data into or out of a query. For example, SQL Select statements can include input parameters. Stored procedures can have both input and output parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Column Meta-data - You can provide column aliases when the names provided by the data source are unintuitive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filtering - Some data sources, especially SQL, provide excellent built-in filtering features. However, some data sources (flat files, application objects) may not provide filtering. In other cases, the filter conditions are defined in scripts or Java code. You can define such filters as part of the report, and the BIRT engine will apply them automatically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scripted Data Sets - Some reports require access to specialized or unusual data. You can create such access in Java or scripts and use the scripted data set to integrate that logic into your report."))),(0,i.kt)("h2",{id:"conditional-formatting"},"Conditional Formatting"),(0,i.kt)("p",null,"While some reports have a fixed format, others require conditional formatting. For example, a report that lists transactions may want to present a sale differently than a return. Or, a customer service report may want to show colors that indicate which metrics are above, at or below plan. BIRT provides several conditional formatting features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conditional Visibility - You can hide report elements based on data. In the transaction report above, you can create sections for both sales and return transactions, then hide the one that is not required for a given record.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Value Mapping - Database data often uses code values: M/F for male or female, 1/2 for sales and returns, etc. Value mapping lets you define a mapping from database value to display value. For example, we can map the value "1" to "Sale" and the value "2" to "Return."')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Highlighting - Simple expressions let you select the style to apply to a given report item. For example, in the customer service report, we can use green to show metrics above plan, and red to show those below plan."))),(0,i.kt)("h2",{id:"scripting"},"Scripting"),(0,i.kt)("p",null,"BIRT provides scripting based on JavaScript (formally known as ECMAScript). JavaScript is often thought of as a client-side scripting language, but it works just as well on a server for expressing report logic. In particular, JavaScript provides excellent integration with your existing Java logic, making it very simple to call your logic from BIRT reports."),(0,i.kt)("p",null,"BIRT provides a complete set of JavaScript objects to access the Report Object Model: a representation of both the design and runtime aspects of your report, allowing complete control of the report to handle even the most complex report formatting tasks."),(0,i.kt)("h2",{id:"java-event-coding"},"Java Event Coding"),(0,i.kt)("p",null,"In addition to JavaScript, event handlers can be coded in Java. BIRT supplies a set of interfaces for report item creation and data collection. Once the event handler is written in Java and associated with a report element, the report can be debugged through the Eclipse Java Development Tools."),(0,i.kt)("h2",{id:"project-management"},"Project Management"),(0,i.kt)("p",null,"BIRT integrates with the Eclipse project management features to organize related reports. BIRT also works with Eclipse CVS support for source management. BIRT's XML report design format makes it easy to compare two reports, or two versions of the same report, to track changes."),(0,i.kt)("h2",{id:"styles"},"Styles"),(0,i.kt)("p",null,"Anyone who has designed a web page knows that the same visual styles get used over and over. Cascading Style Sheets (CSS) allow web designers to extract style information from content, and to reuse style over and over."),(0,i.kt)("p",null,"BIRT provides a similar style feature. Indeed, BIRT styles are based on CSS styles, making BIRT's visual properties familiar to web application developers. BIRT styles cascade, allowing you to set a style in one place and have it affect the entire report, a section of the report, or a single report item. BIRT also allows importing or referencing of existing Cascading Style Sheets."),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)("p",null,"Typical applications include many related reports. A simple customer application may include an alphabetical customer listing, customers sorted by geography, customers assigned to specific sales reps, customers filtered by status and more. In general, users frequently want another variation to solve specific business needs."),(0,i.kt)("p",null,"The result is that reporting applications consist of suites of closely related reports. The same data sources, styles, business logic, report items and more are used across many reports."),(0,i.kt)("p",null,"BIRT supports libraries that organize these shared resources. Libraries can contain any report element including styles, data sources, report items, scripts and so on."),(0,i.kt)("h2",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"The web allows worldwide access to your application. BIRT provides excellent support for internationalization and localization."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Text Localization - You can create a single report that automatically displays strings in the user's language. All labels and report text can be externalized and translated using the standard Java localization rules. At runtime, BIRT uses resource keys to locate the correct translations of your text.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Language Packs - Language Packs are available to translate the BIRT offerings into many different languages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Localization - BIRT provides locale-aware data formatting, meaning that a date can appear in mm/dd/yy format for US users, and dd-mm-yy format for Europeans.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic Formatting - Chinese text is very compact, German is often quite lengthy, and English of medium size. BIRT automatically adjusts the size of report items to fit their content to avoid the need to test the report with every possible translation. BIRT works like HTML in this regard: the size of content expands as needed to hold its data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bidirectional Support - BIRT supports bidirectional(BIDI) formatting for report content. No only can content be formatted RTL or LTR, this feature supports combining both within a single report."))))}p.isMDXComponent=!0},5394:function(e,t,a){"use strict";t.Z=a.p+"assets/images/BIRT-Image-03-ff49bddcb422c5b34b3ba5e91c58e045.png"}}]);