"use strict";(self.webpackChunkwydatnik=self.webpackChunkwydatnik||[]).push([[279],{5279:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(7294),a=r(8216),o=r(381),c=r.n(o),u=r(7254),l=r(9024),i=r(6450);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],c=!0,u=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=n.lazy((function(){return r.e(9).then(r.bind(r,5009))})),h=n.lazy((function(){return r.e(421).then(r.bind(r,8421))})),g=n.lazy((function(){return Promise.all([r.e(141),r.e(739)]).then(r.bind(r,9739))})),w=n.lazy((function(){return r.e(445).then(r.bind(r,7761))}));const v=(0,a.$j)((function(e){return{expenses:e.expenses}}),null)((function(e){var t=e.expenses,r=d((0,n.useState)([]),2),a=r[0],o=r[1],s=d((0,n.useState)(c()().startOf("month")),2),v=s[0],Y=s[1],D=d((0,n.useState)(c()().endOf("month")),2),E=D[0],O=D[1],S=d((0,n.useState)(c()().subtract(1,"months").startOf("month")),2),M=S[0],j=S[1],C=d((0,n.useState)(c()().endOf("month")),2),k=C[0],P=C[1],A=d((0,n.useState)([]),2),N=A[0],z=A[1],x=d((0,n.useState)([]),2),B=x[0],F=x[1],I=[];(0,n.useEffect)((function(){U(),$()}),[]),(0,n.useEffect)((function(){U()}),[v,E]),(0,n.useEffect)((function(){$()}),[N,M,M]);var T=function(e,r){return t.filter((function(t){var n=c()(t.date,"DD/MM/YYYY").isAfter(e),a=c()(t.date,"DD/MM/YYYY").isBefore(r);return n&&a}))},U=function(){var e=T(v,E);I=(0,u.CP)().map((function(t){return{category:t,amount:e.reduce((function(e,r){return r.category==t?e+(Number.parseFloat(r.amount)||0):e}),0)}})).filter((function(e){return 0!=e.amount})),o(I)},$=function(){var e=T(M,k).filter((function(e){return N.includes(e.category)})).sort((function(e,t){return(0,l.a)(e.date,t.date)}));F(function(e){var t=(0,l.x)(M,k),r=new Map;return t.forEach((function(t){var n;N.length>0&&(n=N.reduce((function(r,n){return f(f({},r),{},m({},n,e.reduce((function(e,r){return function(e,t,r,n){return t.date.substring(t.date.indexOf("/")+1)===n&&t.category===r?e+t.amount:e}(e,r,n,t)}),0)))}),{})),r.set(t,n)})),r}(e))};return n.createElement(n.Suspense,{fallback:n.createElement(i.Z,null)},n.createElement("div",{className:"subpage__body container"},n.createElement("div",{className:"chart-container"},n.createElement("h2",null,"Porównanie proporcji wydatków między"," ",c()(v).format("DD-MM-YYYY")," a"," ",c()(E).format("DD-MM-YYYY")),n.createElement("form",null,n.createElement(g,{startDate:v,endDate:E,setStartDate:Y,setEndDate:O})),0!==a.length?n.createElement(b,{data:a}):n.createElement("p",null,"Brak wydatków w wybranym czasie.")),n.createElement("div",{className:"chart-container"},n.createElement("h2",null,"Porównanie wydatków w kategoriach między"," ",c()(M).format("DD-MM-YYYY")," a"," ",c()(k).format("DD-MM-YYYY")),n.createElement("form",null,n.createElement(g,{startDate:M,endDate:k,setStartDate:j,setEndDate:P}),n.createElement(w,{selectedCategories:N,handleSelectCategory:function(e){return z([].concat(function(e){if(Array.isArray(e))return p(e)}(t=N)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]));var t},handleUnselectCategory:function(e){return z(N.filter((function(t){return t!==e})))}})),B&&0!==B.length&&N.length>0?n.createElement(h,{data:B,categories:N}):n.createElement("p",null,"Brak wydatków dla podanych kryteriów."))))}))},7254:(e,t,r)=>{r.d(t,{G3:()=>a,Ru:()=>o,CP:()=>c});var n=[{name:"groceries",displayedName:"Spożywcze",colorClass:"blue",color:"#0185FF"},{name:"alcohol",displayedName:"Alkohol",colorClass:"navy",color:"#3139a8"},{name:"drugstore",displayedName:"Chemia",colorClass:"turquise",color:"#04CABE"},{name:"home",displayedName:"Dom",colorClass:"yellow",color:"#FFC701"},{name:"gifts",displayedName:"Prezenty",colorClass:"pink",color:"#a03b9b"},{name:"goouts",displayedName:"Wyjścia",colorClass:"red",color:"#9b2d3b"},{name:"car",displayedName:"Samochód",colorClass:"orange",color:"#936032"},{name:"flowers",displayedName:"Kwiaty",colorClass:"green",color:"#048339"}],a=function(e){return n.find((function(t){if(t.name===e)return t})).color},o=function(e){return n.find((function(t){if(t.name===e)return t})).displayedName},c=function(){return n.map((function(e){return e.name}))}},9024:(e,t,r)=>{r.d(t,{a:()=>o,x:()=>c});var n=r(381),a=r.n(n),o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"DD/MM/YYYY";return a()(e,r).isBefore(a()(t,r))?-1:a()(e,r).isAfter(a()(t,r))?1:0},c=function(e,t){for(var r=a()(e),n=[];t>r||r.format("M")===t.format("M");)n.push(r.format("MM/YYYY")),r.add(1,"month");return n}}}]);