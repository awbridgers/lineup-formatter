(this["webpackJsonplineup-subs"]=this["webpackJsonplineup-subs"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),s=t(12),i=t.n(s),c=(t(19),t(5)),l=t(3),o=t(13),f=["Isaiah Mucius","Daivien Williamson","Jake LaRavia","Cameron Hildreth","Dallas Walton","Khadim Sy","Lucas Taylor","Robert McCray","Alondes Williams","Matthew Marsh","RJ Kennah","Luc Robinson","Anthony Mathis Jr","Kevin Dunn","Damari Monsanto","Tariq Ingraham","Grant van Beveren","Miles Lester","Carter Whitt"],u=function(e){var n=[],t=[],a=[],r=e.split("/"),s=Object(l.a)(r,6),i=s[0],c=s[1],u=s[2],d=s[3],h=s[4],p=s[5];[i,c,u,d,h].map((function(e){return e.replace(/\s?\d+- /g,"")})).forEach((function(e,t){var a=e.split(" "),r=a.pop(),s=a.join(" "),i=function(e,n){var t=f.map((function(e){var n=e.split(" "),t=Object(o.a)(n);return{first:t[0],last:t.slice(1).join(" ")}})).filter((function(e){return e.last.toLowerCase()===n}));if(1===t.length)return"".concat(t[0].first," ").concat(t[0].last);var a=t.filter((function(n){return n.first.substr(0,e.length).toLowerCase()===e}));if(1===a.length)return"".concat(a[0].first," ").concat(a[0].last);throw Error("No player matching that name found")}(r.toLowerCase(),s.toLowerCase());n.push(i)}));var b=p.trim().split(" "),j=Object(l.a)(b,4),v=j[0],m=j[1],H=j[2],g=j[3],O=parseInt(m.replace(":",""),10),C=parseInt(g.replace(":",""),10);return"1"===v?"1"===H?t=[O,C]:2e3===C?t=[O,0]:(t=[O,0],a=[2e3,C]):a=[O,C],{lineup:n.sort().join(","),firstHalf:t,secondHalf:a}},d=(t(20),t(14)),h=t(0),p=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),o=i[0],f=i[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("textarea",{className:"textInput",value:t,onChange:function(e){r(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){var e=t.replace(/\n/g," ").match(/(\d+- ([a-zA-z]+\s?){2,3}?\/\s?){5}(\d \d+:\d+ ){2}\d+:\d+ \d+-\d+ (-?\d+ ){5}\d.\d+/g);if(e){var n=[];e.forEach((function(e){var t=u(e),a=n.findIndex((function(e){return t.lineup===e.lineup}));if(-1===a)n.push(t);else{var r=n[a];r.firstHalf=[].concat(Object(c.a)(r.firstHalf),Object(c.a)(t.firstHalf)),r.secondHalf=[].concat(Object(c.a)(r.secondHalf),Object(c.a)(t.secondHalf))}})),f(n),console.log(n)}},className:"submit",children:"Submit"}),o.length>1&&Object(h.jsx)("button",{className:"csv",children:Object(h.jsxs)(d.CSVLink,{data:o.map((function(e){var n=e.firstHalf.length>0?e.firstHalf.join("-"):["none"],t=e.secondHalf.length>0?e.secondHalf.join("-"):["none"];return{players:e.lineup,firstHalf:n,secondHalf:t}})).concat([{players:"FT sub Shooter",firstHalf:["none"],secondHalf:["none"]}]),headers:[{label:"Lineup",key:"players"},{label:"First Half",key:"firstHalf"},{label:"Second Half",key:"secondHalf"}],filename:"lineups.csv",children:["Download"," "]})})]})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}},[[28,1,2]]]);
//# sourceMappingURL=main.14de9d39.chunk.js.map