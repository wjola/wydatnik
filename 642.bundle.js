"use strict";(self.webpackChunkwydatnik=self.webpackChunkwydatnik||[]).push([[642],{3642:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var a=n(7294),r=n(8216),o=n(381),u=n.n(o),i=n(9024),s=function(e,t){return e.amount<t.amount?-1:e.amount>t.amount?1:0};const c=function(e,t){return e.filter((function(e){var n=0===t.categories.length||t.categories.includes(e.category),a=!t.amountFrom||t.amountFrom&&e.amount>t.amountFrom,r=!t.amountTo||t.amountTo&&e.amount<t.amountTo,o=u()(e.date,"D/MM/YYYY").isSameOrAfter(t.startDate),i=u()(e.date,"D/MM/YYYY").isSameOrBefore(t.endDate);return n&&a&&r&&o&&i})).sort(function(e){switch(e){case"date":return function(e,t){return(0,i.a)(e,t,"D/MM/YYYY")};case"amount":return s}}(t.sortBy))};var m=n(6450),l=a.lazy((function(){return n.e(93).then(n.bind(n,7093))})),f=a.lazy((function(){return n.e(156).then(n.bind(n,9156))}));const d=(0,r.$j)((function(e){return{expenses:c(e.expenses,e.filters),filters:e.FiltersList}}))((function(e){var t=e.expenses;return a.createElement(a.Suspense,{fallback:a.createElement(m.Z,null)},a.createElement("div",{className:"expense-list-container container"},a.createElement(l,null),a.createElement("h3",{className:"expense-list__header"},"Ostatnie wydatki:"),t.map((function(e){return a.createElement(f,{id:e.id,key:e.id,amount:e.amount,category:e.category,date:e.date,details:e.details})}))))})),Y=function(){return a.createElement(d,null)}},9024:(e,t,n)=>{n.d(t,{a:()=>o,x:()=>u});var a=n(381),r=n.n(a),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"DD/MM/YYYY";return r()(e,n).isBefore(r()(t,n))?-1:r()(e,n).isAfter(r()(t,n))?1:0},u=function(e,t){for(var n=r()(e),a=[];t>n||n.format("M")===t.format("M");)a.push(n.format("MM/YYYY")),n.add(1,"month");return a}}}]);