"use strict";(self.webpackChunkwydatnik=self.webpackChunkwydatnik||[]).push([[739],{9739:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var n=r(7294),a=r(6141);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const o=function(t){var e,r,o=t.startDate,l=t.endDate,i=t.setStartDate,s=t.setEndDate,c=(e=(0,n.useState)(null),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,u=[],o=!0,l=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);o=!0);}catch(t){l=!0,a=t}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],f=c[1];return n.createElement("fieldset",{className:"date-picker"},n.createElement("label",null,"Wybierz zakres dat:"),n.createElement(a.DateRangePicker,{startDate:o,startDateId:"startDateId",endDate:l,endDateId:"endDateId",onDatesChange:function(t){var e=t.startDate,r=t.endDate;i(e.startOf("day")),s(r.startOf("day"))},focusedInput:d,onFocusChange:function(t){return f(t)},numberOfMonths:1,isOutsideRange:function(){return!1}}))}}}]);