"use strict";(self.webpackChunkwydatnik=self.webpackChunkwydatnik||[]).push([[739],{9739:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var r=n(7294),a=n(6450);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=r.lazy((function(){return n.e(141).then(n.bind(n,6141))})).DateRangePicker;const o=function(t){var e,n,o=t.startDate,i=t.endDate,s=t.setStartDate,c=t.setEndDate,f=(e=(0,r.useState)(null),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l=[],u=!0,o=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);u=!0);}catch(t){o=!0,a=t}finally{try{u||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=f[0],y=f[1];return r.createElement(r.Suspense,{fallback:r.createElement(a.Z,null)},r.createElement("fieldset",{className:"date-picker"},r.createElement("label",null,"Wybierz zakres dat:"),r.createElement(u,{startDate:o,startDateId:"startDateId",endDate:i,endDateId:"endDateId",onDatesChange:function(t){var e=t.startDate,n=t.endDate;s(e.startOf("day")),c(n.startOf("day"))},focusedInput:d,onFocusChange:function(t){return y(t)},numberOfMonths:1,isOutsideRange:function(){return!1}})))}}}]);