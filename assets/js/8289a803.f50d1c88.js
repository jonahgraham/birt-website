(self.webpackChunkbirt_dev=self.webpackChunkbirt_dev||[]).push([[5478],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=i,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||o;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9168:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return n},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=r(2122),i=r(9756),o=(r(7294),r(3905)),n={id:"t_visual-properties",title:"Visual Properties",sidebar_label:"Visual Properties"},l={unversionedId:"t_visual-properties",id:"t_visual-properties",isDocsHomePage:!1,title:"Visual Properties",description:"Resizing Table Columns",source:"@site/docs/t_visual-properties.md",sourceDirName:".",slug:"/t_visual-properties",permalink:"/birt-website/docs/t_visual-properties",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_visual-properties.md",version:"current",sidebar_label:"Visual Properties",frontMatter:{id:"t_visual-properties",title:"Visual Properties",sidebar_label:"Visual Properties"},sidebar:"someSidebar",previous:{title:"Tools",permalink:"/birt-website/docs/t_tools"},next:{title:"Templates & Examples",permalink:"/birt-website/docs/template-introduction"}},p=[{value:"Resizing Table Columns",id:"resizing-table-columns",children:[]},{value:"Setting the Background Color",id:"setting-the-background-color",children:[]},{value:"Setting the Font",id:"setting-the-font",children:[]},{value:"Formatting Data",id:"formatting-data",children:[]},{value:"Setting a Border",id:"setting-a-border",children:[]},{value:"More on Properties",id:"more-on-properties",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resizing-table-columns"},"Resizing Table Columns"),(0,o.kt)("p",null,"Let's adjust the size of the table columns. Tables & columns can be sized using absolute sizes (inches, centimeters), or relative sizes (percentage of the width of the page.) Here, we'll adjust the column widths by directly changing them in the report layout. To do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the Layout tab to switch back to the report layout.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Display, then click on the table tab to display the "scaffolding."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Find the black line that separates the "City" and "State" column headings.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With the cursor over this line, hold down the left mouse button and resize the column to be about big enough to hold the two-letter state code and label.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Repeat the above to resize the city column."))),(0,o.kt)("h2",{id:"setting-the-background-color"},"Setting the Background Color"),(0,o.kt)("p",null,"Let's dress up the state heading by setting the row's background color. To do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the state group header row (first group header) by clicking on the shaded box to the left of the row. (Remember to display, then click on the table tab to display the scaffolding.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Locate or open the Property Editor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A list of property types appears at the left of the view. Click on the General group.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Find the Background color field. Click on the empty gray button to display the color picker.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pick the blue color third from the right in the top row. This is a standard color, but is a bit too dark for our needs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click on the "Define Custom Colors" button.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Take the right-most slider (saturation) and move it up to produce a very light blue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK."))),(0,o.kt)("h2",{id:"setting-the-font"},"Setting the Font"),(0,o.kt)("p",null,"Now, let's give the state a bold font. We'll also dress up the city group heading by giving it a dark blue, bold, larger font. To do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the state Data Element. (it's located below the state label.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to the General property group in the Property Editor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Find the Font size field. Change the size to "Large".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ","[B]"," (bold) button to make the font bold.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the city Data Element.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Again, switch to the General property group.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the font size to Large.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the Font Color button.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The color chooser again opens. Again choose the blue that is third from the right in the top row.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK."))),(0,o.kt)("h2",{id:"formatting-data"},"Formatting Data"),(0,o.kt)("p",null,"We want to format the phone numbers so that they have correct North American format: (123) 555-1212. We do this by applying a string format to the phone number field. Formats are also available for dates and numbers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the phone number Data Element.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to the Format String page in the Property Editor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose Custom for Format String as.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose Phone Number from the list.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the Format Code field, add a space after the closing parenthesis to produce the following:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(@@@) @@@-@@@@"))),(0,o.kt)("h2",{id:"setting-a-border"},"Setting a Border"),(0,o.kt)("p",null,'Next, let\'s put a "drop shadow" border around our table.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the table tab.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the Borders page in the Property Editor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the Style field to a solid line. (This is the default.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the Color field to a black. (Use the color name pull-down, or choose the bottom left color in the color picker.) (This is the default.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the Width property to the thinnest line.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the top, bottom, left and right border buttons. A thin border appears around the table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to the Properties view (Window->Show View->Properties) to specify that a wider border should be used for the bottom and right sides.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the table tab to initialize the Properties view with the table's properties.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Expand the Box node in the Properties View and set the Border bottom width and Border left width fields to medium."))),(0,o.kt)("h2",{id:"more-on-properties"},"More on Properties"),(0,o.kt)("p",null,"BIRT provides a wide variety of properties for formatting report items. The properties are based on the W3C CSS (Cascading Style Sheet) standard. If you've ever used CSS to format HTML, you are well on your way to understanding formatting in BIRT."))}u.isMDXComponent=!0}}]);