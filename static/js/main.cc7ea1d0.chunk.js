(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,function(r,e,o){r.exports=o(12)},,,,,function(r,e,o){},function(r,e,o){},function(r,e,o){"use strict";o.r(e);var n=o(0),t=o.n(n),d=o(3),s=o.n(d),W=(o(10),o(1)),u=(o(11),function(r){return t.a.createElement("button",{onClick:function(){r.callback()}},r.name)}),a=o(4),l=["title","changeTitle","onKeyPressAddTask"],i=function(r){var e=r.title,o=r.changeTitle,n=r.onKeyPressAddTask;Object(a.a)(r,l);return t.a.createElement("input",{style:{width:"230px"},value:e,placeholder:"\u0432\u0432\u0435\u0434\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",onChange:o,onKeyPress:n})};function c(r){return t.a.createElement("div",null,t.a.createElement("h3",null,r.title),t.a.createElement("div",null,r.enWordElement),t.a.createElement("div",null," -----------------------------------------"),t.a.createElement("div",null,t.a.createElement(i,{title:r.translateWord,onKeyPressAddTask:r.onKeyPressAddTask,changeTitle:r.changeTitle}),t.a.createElement(u,{name:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c",callback:r.checkAnswer}),r.answer))}var m=[{enWord:"embodiment",rusWord:"\u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u0435",rusWord2:"\u043e\u043b\u0438\u0446\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435"},{enWord:"degree",rusWord:"\u0433\u0440\u0430\u0434\u0443\u0441",rusWord2:"\u0434\u0438\u043f\u043b\u043e\u043c",rusWord3:"\u043d\u0430\u0443\u0447\u043d\u0430\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u044c"},{enWord:"hurt",rusWord:"\u0432\u0440\u0435\u0434"},{enWord:"to achieve goals",rusWord:"\u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c \u0446\u0435\u043b\u0438"},{enWord:"to mess up",rusWord:"\u0438\u0441\u043f\u043e\u0440\u0442\u0438\u0442\u044c",rusWord2:"\u0437\u0430\u0432\u0430\u043b\u0438\u0442\u044c"},{enWord:"book",rusWord:"\u043a\u043d\u0438\u0433\u0430"},{enWord:"treadmill",rusWord:"\u0431\u0435\u0433\u043e\u0432\u0430\u044f \u0434\u043e\u0440\u043e\u0436\u043a\u0430"},{enWord:"tread",rusWord:"\u0448\u0430\u0433",rusWord2:"\u043f\u0440\u043e\u0442\u0435\u043a\u0442\u043e\u0440"},{enWord:"tread lightly",rusWord:"\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e"},{enWord:"to be ambitious",rusWord:"\u0431\u044b\u0442\u044c \u0430\u043c\u0431\u0438\u0446\u0438\u043e\u0437\u043d\u044b\u043c"},{enWord:"to work hard on something",rusWord:"\u0443\u0441\u0435\u0440\u0434\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0434 \u0447\u0435\u043c-\u043b\u0438\u0431\u043e"},{enWord:"to miss out",rusWord:"\u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"},{enWord:"mental",rusWord:"\u043f\u0441\u0438\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0439"},{enWord:"to encourage to do something",rusWord:"\u0432\u043e\u043e\u0434\u0443\u0448\u0435\u0432\u043b\u044f\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c"},{enWord:"to occur",rusWord:"\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c",rusWord2:"\u0438\u043c\u0435\u0442\u044c \u043c\u0435\u0441\u0442\u043e"},{enWord:"orbital bone",rusWord:"\u0441\u043a\u0443\u043b\u043e\u0432\u0430\u044f \u043a\u043e\u0441\u0442\u044c"},{enWord:"to master different skills",rusWord:"\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"},{enWord:"to focus on something",rusWord:"\u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u043c-\u0442\u043e",rusWord2:"\u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u043c-\u0442\u043e"},{enWord:"to beg",rusWord:"\u0443\u043c\u043e\u043b\u044f\u0442\u044c"},{enWord:"corpse",rusWord:"\u043c\u0435\u0440\u0442\u0432\u0435\u0446"},{enWord:"mortician",rusWord:"\u0433\u0440\u043e\u0431\u043e\u0432\u0449\u0438\u043a"},{enWord:"den",rusWord:"\u043b\u043e\u0433\u043e\u0432\u043e"},{enWord:"thirsty",rusWord:"\u0436\u0430\u0436\u0434\u0430"},{enWord:"amusement",rusWord:"\u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435"},{enWord:"thoughtful",rusWord:"\u0437\u0430\u0431\u043e\u0442\u043b\u0438\u0432\u044b\u0439"},{enWord:"grumpy",rusWord:"\u0441\u0432\u0430\u0440\u043b\u0438\u0432\u044b\u0439"},{enWord:"to scream",rusWord:"\u043a\u0440\u0438\u0447\u0430\u0442\u044c"},{enWord:"screwdriver",rusWord:"\u043e\u0442\u0432\u0435\u0440\u0442\u043a\u0430"},{enWord:"fuse",rusWord:"\u043f\u0440\u0435\u0434\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c"},{enWord:"to mend",rusWord:"\u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c"},{enWord:"commitment",rusWord:"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{enWord:"spell out",rusWord:"\u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{enWord:"orphan",rusWord:"\u0441\u0438\u0440\u043e\u0442\u0430"},{enWord:"orphanage",rusWord:"\u0434\u0435\u0442\u0441\u043a\u0438\u0439 \u0434\u043e\u043c"},{enWord:"harebrained",rusWord:"\u043b\u0435\u0433\u043a\u043e\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0439"},{enWord:"survey",rusWord:"\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435"},{enWord:"think it over",rusWord:"\u043e\u0431\u0434\u0443\u043c\u0430\u0442\u044c"},{enWord:"to deserve",rusWord:"\u0437\u0430\u0441\u043b\u0443\u0436\u0438\u0442\u044c"},{enWord:"slump",rusWord:"\u0441\u043f\u0430\u0434"},{enWord:"to wander",rusWord:"\u0431\u043b\u0443\u0436\u0434\u0430\u0442\u044c"},{enWord:"trail",rusWord:"\u0441\u043b\u0435\u0434"},{enWord:"prairie",rusWord:"\u0441\u0442\u0435\u043f\u044c"},{enWord:"to keep over",rusWord:"\u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c"},{enWord:"to ring out",rusWord:"\u043f\u0440\u043e\u0437\u0432\u0443\u0447\u0430\u0442\u044c"},{enWord:"valley",rusWord:"\u0434\u043e\u043b\u0438\u043d\u0430"},{enWord:"contraction",rusWord:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435"},{enWord:"ambien",rusWord:"\u0441\u043d\u043e\u0442\u0432\u043e\u0440\u043d\u043e\u0435"},{enWord:"awesome",rusWord:"\u0432\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e"},{enWord:"unresponsive",rusWord:"\u0431\u0435\u0437 \u0441\u043e\u0437\u043d\u0430\u043d\u0438\u044f"},{enWord:"affirmative",rusWord:"\u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0439"},{enWord:"malfunction",rusWord:"\u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u044c",rusWord2:"\u043f\u043e\u043b\u043e\u043c\u043a\u0430"},{enWord:"determination",rusWord:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"},{enWord:"immutable",rusWord:"\u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u044b\u0439"},{enWord:"immutability",rusWord:"\u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},{enWord:"to terminate",rusWord:"\u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c"},{enWord:"to shatter",rusWord:"\u0440\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u044c"},{enWord:"wind",rusWord:"\u0432\u0435\u0442\u0435\u0440"},{enWord:"to wind up",rusWord:"\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c",rusWord2:"\u0437\u0430\u043d\u0435\u0441\u0442\u0438"},{enWord:"suing",rusWord:"\u0441\u0443\u0434\u0438\u0442\u044c\u0441\u044f"},{enWord:"to lash",rusWord:"\u0445\u043b\u0435\u0441\u0442\u0430\u0442\u044c"},{enWord:"lash",rusWord:"\u043f\u043b\u0435\u0442\u044c"},{enWord:"to lash out",rusWord:"\u043d\u0430\u0431\u0440\u043e\u0441\u0438\u0442\u044c\u0441\u044f"},{enWord:"closure",rusWord:"\u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435"},{enWord:"brown-nosing",rusWord:"\u043f\u043e\u0434\u043b\u0438\u0437\u0430"},{enWord:"scale",rusWord:"\u043c\u0430\u0441\u0448\u0442\u0430\u0431"},{enWord:"to prosecute",rusWord:"\u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u043a \u0441\u0443\u0434\u0443"},{enWord:"to parse",rusWord:"\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{enWord:"to accuse",rusWord:"\u043e\u0431\u0432\u0438\u043d\u044f\u0442\u044c"},{enWord:"response",rusWord:"\u0440\u0435\u0430\u043a\u0446\u0438\u044f",rusWord2:"\u043e\u0442\u0432\u0435\u0442"},{enWord:"to show up",rusWord:"\u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f",rusWord2:"\u044f\u0432\u0438\u0442\u044c\u0441\u044f",rusWord3:"\u043f\u0440\u0438\u0434\u0442\u0438"},{enWord:"pity",rusWord:"\u0436\u0430\u043b\u043e\u0441\u0442\u044c"},{enWord:"bride",rusWord:"\u043d\u0435\u0432\u0435\u0441\u0442\u0430"},{enWord:"to insist",rusWord:"\u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u0442\u044c",rusWord2:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c"},{enWord:"horrendous",rusWord:"\u0443\u0436\u0430\u0441\u043d\u044b\u0439"},{enWord:"otherwise",rusWord:"\u0438\u043d\u0430\u0447\u0435"}],h=function(r){return t.a.createElement("div",null,t.a.createElement(u,{name:"next word",callback:r.nextEnWordElement}))};var v=function(){var r=[m[0]],e=Object(n.useState)(r),o=Object(W.a)(e,2),d=o[0],s=o[1],u=function(){var r=Math.floor(Math.random()*m.length),e=m[r];console.log(e),s([e]),v(""),E("")},a=Object(n.useState)(""),l=Object(W.a)(a,2),i=l[0],v=l[1],b=Object(n.useState)(""),g=Object(W.a)(b,2),p=g[0],E=g[1],f=function(){var r=d.map((function(r){return[r.rusWord,r.rusWord2,r.rusWord3]}));if(i.toLowerCase().trim()===r[0][0]||i.toLowerCase().trim()===r[0][1]||i.toLowerCase().trim()===r[0][2])E("\u041f\u0420\u0410\u0412\u0418\u041b\u042c\u041d\u041e!!!");else{var e=r[0].filter(Boolean);E(" ".concat(e))}},w=d.map((function(r){return t.a.createElement("div",null,"".concat(r.enWord," "),t.a.createElement("span",null,t.a.createElement(h,{nextEnWordElement:u})))})),k="\u041f\u0420\u0410\u0412\u0418\u041b\u042c\u041d\u041e!!!"!==p&&""!==p?t.a.createElement("div",{style:{color:"red"}},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u0438\u0434\u0438 \u0443\u0447\u0438. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442:"," ",t.a.createElement("br",null),t.a.createElement("div",{style:{color:"blue"}},p)):t.a.createElement("div",{style:{color:"green"}},p);return t.a.createElement("div",{className:"App"},t.a.createElement(c,{title:"Learn English",enWordElement:w,translateWord:i,onKeyPressAddTask:function(r){"Enter"===r.key&&f()},changeTitle:function(r){v(r.currentTarget.value),E("")},checkAnswer:f,answer:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()})).catch((function(r){console.error(r.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.cc7ea1d0.chunk.js.map