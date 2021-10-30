(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),s=a.n(r),o=(a(11),a(2)),l=(a(5),a(4)),i=a.n(l),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(d.jsxs)("form",{className:"d-flex",style:{marginRight:"50px"},children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8",placeholder:"Enter Text Here..."})}),Object(d.jsx)("button",{className:"btn btn-success mx-1",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Converted into UPPERCASE","success")},children:"Convert To UPPERCASE"}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("Converted into lowercase","danger")},children:"Convert To lowercase"}),Object(d.jsx)("button",{className:"btn btn-info mx-1",onClick:function(){var t=c.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1)}));r(t.join(" ")),e.showAlert("Converted into Title-Case","info")},children:"Convert To Title Case"}),Object(d.jsx)("button",{className:"btn btn-warning mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","warning")},children:"CopyText"}),Object(d.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra Space has been removed","primary")},children:"Rmove Extra Spaces"}),Object(d.jsx)("button",{className:"btn btn-dark mx-1",onClick:function(t){r(""),e.showAlert("Text Reset","dark")},children:"ResetText"})]}),Object(d.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(d.jsxs)("h6",{children:["Your Text Summary have:- ",c.split(" ").length," Words and ",c.length," character"]}),Object(d.jsxs)("p",{children:["And ",.008*c.split(" ").length," Minutes take for Reading this Preview "]}),Object(d.jsx)("h2",{children:"Preview"}),Object(d.jsx)("p",{children:c.length>0?c:"Enter Something in the text Box above to preview it here"})]})]})}b.prototypes={title:i.a.string.isRequired,aboutText:i.a.string.isRequired},b.defaultProps={title:"Set Title",aboutText:"About Us"};var j=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var m=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),l=s[0],i=s[1],m=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{title:"React Text Utils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",m("Dark Mode has been ON","success"),document.title="TextUtils-DarkMode"):(c("light"),document.body.style.backgroundColor="white",m("Light Mode has been On","success"),document.title="TextUtils-LightMode")}}),Object(d.jsx)(j,{alert:l}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(h,{showAlert:m,heading:"Enter The Text To Analyze",mode:a})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),u()},5:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.131a99f3.chunk.js.map