(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,function(r,o,e){r.exports=e(12)},,,,,function(r,o,e){},function(r,o,e){},function(r,o,e){"use strict";e.r(o);var d=e(0),n=e.n(d),W=e(3),s=e.n(W),u=(e(10),e(1)),t=(e(11),function(r){return n.a.createElement("button",{onClick:function(){r.callback()}},r.name)}),a=e(4),i=["title","changeTitle","onKeyPressAddTask"],l=function(r){var o=r.title,e=r.changeTitle,d=r.onKeyPressAddTask;Object(a.a)(r,i);return n.a.createElement("input",{style:{width:"230px"},value:o,placeholder:"\u0432\u0432\u0435\u0434\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434",onChange:e,onKeyPress:d})};function c(r){return n.a.createElement("div",null,n.a.createElement("h3",null,r.title),n.a.createElement("div",null,r.enWordElement),n.a.createElement("div",null," -----------------------------------------"),n.a.createElement("div",null,n.a.createElement(l,{title:r.translateWord,onKeyPressAddTask:r.onKeyPressAddTask,changeTitle:r.changeTitle}),n.a.createElement(t,{name:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c",callback:r.checkAnswer}),r.answer))}var m=[{enWord:"embodiment",rusWord:"\u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u0435",rusWord2:"\u043e\u043b\u0438\u0446\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435"},{enWord:"accomplish",rusWord:"\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f",rusWord2:"\u0434\u043e\u0441\u0442\u0438\u0447\u044c"},{enWord:"no way",rusWord:"\u043d\u0438 \u0437\u0430 \u0447\u0442\u043e",rusWord2:"\u0434\u0430 \u043b\u0430\u0434\u043d\u043e"},{enWord:"essential",rusWord:"\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e",rusWord2:"\u0432\u0430\u0436\u043d\u043e"},{enWord:"to slam",rusWord:"\u0445\u043b\u043e\u043f\u043d\u0443\u0442\u044c",rusWord2:"\u0448\u0432\u044b\u0440\u043d\u0443\u0442\u044c"},{enWord:"somehow",rusWord:"\u043d\u0435\u043a\u0442\u043e\u0440\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c",rusWord2:"\u0442\u0430\u043a \u0438\u043b\u0438 \u0438\u043d\u0430\u0447\u0435"},{enWord:"box office",rusWord:"\u043a\u0430\u0441\u0441\u0430",rusWord2:"\u043a\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u0441\u0431\u043e\u0440\u044b"},{enWord:"assume",rusWord:"\u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c",rusWord2:"\u0432\u0437\u044f\u0442\u044c \u043d\u0430 \u0441\u0435\u0431\u044f"},{enWord:"egos",rusWord:"\u044d\u0433\u043e",rusWord2:"\u0441\u0430\u043c\u043e\u043b\u044e\u0431\u0438\u0435"},{enWord:"to collaborate",rusWord:"\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u0442\u044c",rusWord2:"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c"},{enWord:"contradiction",rusWord:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0440\u0435\u0447\u0438\u0435",rusWord2:"\u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"},{enWord:"split up with...",rusWord:"\u0440\u0430\u0441\u0441\u0442\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441 ...",rusWord2:"\u0440\u0430\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441 ..."},{enWord:"interrogation",rusWord:"\u0434\u043e\u043f\u0440\u043e\u0441",rusWord2:"\u0434\u043e\u0437\u043d\u0430\u043d\u0438\u0435"},{enWord:"to swarm",rusWord:"\u0440\u043e\u0438\u0442\u044c\u0441\u044f",rusWord2:"\u0442\u043e\u043b\u043f\u0438\u0442\u044c\u0441\u044f",rusWord3:"\u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c"},{enWord:"expand on a subject",rusWord:"\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u0442\u0435\u043c\u0443",rusWord2:"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u044d\u0442\u0443 \u0442\u0435\u043c\u0443"},{enWord:"degree",rusWord:"\u0433\u0440\u0430\u0434\u0443\u0441",rusWord2:"\u0434\u0438\u043f\u043b\u043e\u043c",rusWord3:"\u043d\u0430\u0443\u0447\u043d\u0430\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u044c"},{enWord:"to consider",rusWord:"\u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",rusWord2:"\u0443\u0447\u0435\u0441\u0442\u044c",rusWord3:"\u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"},{enWord:"struggle",rusWord:"\u0431\u043e\u0440\u044c\u0431\u0430",rusWord2:"\u0434\u0440\u0430\u043a\u0430",rusWord3:"\u0431\u0438\u0442\u0432\u0430"},{enWord:"appearance",rusWord:"\u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435",rusWord2:"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434",rusWord3:"\u043c\u0430\u0442\u0447"},{enWord:"hurt",rusWord:"\u0432\u0440\u0435\u0434"},{enWord:"to share",rusWord:"\u0434\u0435\u043b\u0438\u0442\u044c"},{enWord:"detached house",rusWord:"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u043c"},{enWord:"residential area",rusWord:"\u0436\u0438\u043b\u043e\u0439 \u0440\u0430\u0439\u043e\u043d"},{enWord:"hot air balloon",rusWord:"\u0432\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u0439 \u0448\u0430\u0440"},{enWord:"for your record",rusWord:"\u043a \u0442\u0432\u043e\u0435\u043c\u0443 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044e"},{enWord:"it doesn`t matter",rusWord:"\u0431\u0435\u0437 \u0440\u0430\u0437\u043d\u0438\u0446\u044b",rusWord2:"\u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"},{enWord:"it`s up to you",rusWord:"\u0442\u0435\u0431\u0435 \u0440\u0435\u0448\u0430\u0442\u044c"},{enWord:"let`s give it a shot",rusWord:"\u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c"},{enWord:"cinnamon rolls",rusWord:"\u0431\u0443\u043b\u043e\u0447\u043a\u0438 \u0441 \u043a\u043e\u0440\u0438\u0446\u0435\u0439"},{enWord:"give it up",rusWord:"\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0439\u0442\u0435",rusWord2:"\u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0439\u0442\u0435"},{enWord:"affordable",rusWord:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439",rusWord2:"\u043f\u0440\u0438\u0435\u043c\u043b\u0435\u043c\u044b\u0439"},{enWord:"sucker punch",rusWord:"\u0443\u0434\u0430\u0440 \u0438\u0437 \u043f\u043e\u0434 \u0442\u0438\u0448\u043a\u0430"},{enWord:"pickle juice",rusWord:"\u0440\u0430\u0441\u0441\u043e\u043b"},{enWord:"outskirts",rusWord:"\u043e\u0442\u0448\u0438\u0431 \u0433\u043e\u0440\u043e\u0434\u0430"},{enWord:"suburb",rusWord:"\u043f\u0440\u0438\u0433\u043e\u0440\u043e\u0434"},{enWord:"rush hour",rusWord:"\u0447\u0430\u0441 \u043f\u0438\u043a"},{enWord:"contemporary",rusWord:"\u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439"},{enWord:"picturesque",rusWord:"\u0436\u0438\u0432\u043e\u043f\u0438\u0441\u043d\u044b\u0439"},{enWord:"fascinating",rusWord:"\u043e\u0447\u0430\u0440\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439"},{enWord:"inner cities",rusWord:"\u0446\u0435\u043d\u0442\u0440 \u0433\u043e\u0440\u043e\u0434\u0430"},{enWord:"conveniently located",rusWord:"\u0443\u0434\u043e\u0431\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d"},{enWord:"overcrowded",rusWord:"\u043f\u0435\u0440\u0435\u043d\u0430\u0441\u0435\u043b\u0435\u043d"},{enWord:"apartment blocks",rusWord:"\u043c\u043d\u043e\u0433\u043e\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u043d\u044b\u0439 \u0434\u043e\u043c"},{enWord:"get mortgages",rusWord:"\u0432\u0437\u044f\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443"},{enWord:"to drop somebody off",rusWord:"\u0432\u044b\u0441\u0430\u0434\u0438\u0442\u044c \u043c\u0435\u043d\u044f"},{enWord:"self-catering accommodation",rusWord:"\u0436\u0438\u043b\u044c\u0435 \u0441 \u0441\u0430\u043c\u043e\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435\u043c"},{enWord:"to get around the city",rusWord:"\u043f\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0433\u043e\u0440\u043e\u0434\u0443"},{enWord:"in the off-season",rusWord:"\u0432\u043d\u0435 \u0441\u0435\u0437\u043e\u043d\u0430"},{enWord:"local crafts",rusWord:"\u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u0441\u0443\u0432\u0435\u043d\u0438\u0440\u044b"},{enWord:"on your own",rusWord:"\u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e"},{enWord:"stopover",rusWord:"\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},{enWord:"dumplings",rusWord:"\u043f\u0435\u043b\u044c\u043c\u0435\u043d\u0438"},{enWord:"it`s grossing me out",rusWord:"\u044d\u0442\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043c\u0435\u043d\u044f \u0438\u0437 \u0441\u0435\u0431\u044f"},{enWord:"marshmallow",rusWord:"\u0437\u0435\u0444\u0438\u0440"},{enWord:"to put up with",rusWord:"\u043c\u0438\u0440\u0438\u0442\u044c\u0441\u044f \u0441 \u0447\u0435\u043c-\u0442\u043e"},{enWord:"to pay off mortgages",rusWord:"\u0432\u044b\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443"},{enWord:"to get stuck in a traffic jam",rusWord:"\u0437\u0430\u0441\u0442\u0440\u044f\u0442\u044c \u0432 \u043f\u0440\u043e\u0431\u043a\u0435"},{enWord:"hectic",rusWord:"\u0441\u0443\u043c\u0430\u0442\u043e\u0448\u043d\u044b\u0439",rusWord2:"\u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u043d\u044b\u0439"},{enWord:"to pick up",rusWord:"\u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c",rusWord2:"\u0437\u0430\u0431\u0440\u0430\u0442\u044c"},{enWord:"get off your high horse",rusWord:"\u0441\u043f\u0443\u0441\u0442\u0438\u0441\u044c \u0441 \u043d\u0435\u0431\u0435\u0441 \u043d\u0430 \u0437\u0435\u043c\u043b\u044e"},{enWord:"chanterelle",rusWord:"\u043b\u0438\u0441\u0438\u0447\u043a\u0438"},{enWord:"I`ll see you around",rusWord:"\u0443\u0432\u0438\u0434\u0438\u043c\u0441\u044f"},{enWord:"What is it to me",rusWord:"\u041a\u0430\u043a\u043e\u0435 \u043c\u043d\u0435 \u0434\u043e \u044d\u0442\u043e\u0433\u043e \u0434\u0435\u043b\u043e"},{enWord:"have a lot in common",rusWord:"\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0449\u0435\u0433\u043e"},{enWord:"get on well with somebody",rusWord:"\u043b\u0430\u0434\u0438\u0442\u044c \u0441 \u043a\u0435\u043c-\u043b\u0438\u0431\u043e"},{enWord:"keep in touch with",rusWord:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f"},{enWord:"strained relations",rusWord:"\u043d\u0430\u0442\u044f\u043d\u0443\u0442\u044b\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f"},{enWord:"warm relations",rusWord:"\u0442\u0435\u043f\u043b\u044b\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f"},{enWord:"family gathering",rusWord:"\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438"},{enWord:"household chores",rusWord:"\u0440\u0430\u0431\u043e\u0442\u0430 \u043f\u043e \u0434\u043e\u043c\u0443"},{enWord:"to charge somebody rent",rusWord:"\u0431\u0440\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u0443 \u0437\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435"},{enWord:"well-behaved",rusWord:"\u0432\u043e\u0441\u043f\u0438\u0442\u0430\u043d\u043d\u044b\u0439"},{enWord:"I don`t wanna overstay my welcome",rusWord:"\u044f \u043d\u0435 \u0445\u043e\u0447\u0443 \u0437\u043b\u043e\u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c \u0442\u0432\u043e\u0438\u043c \u0433\u043e\u0441\u0442\u0435\u043f\u0440\u0435\u0438\u043c\u0441\u0442\u0432\u043e\u043c"},{enWord:"Could you be more specific?",rusWord:"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0435\u0435?"},{enWord:"Don`t be mad at me",rusWord:"\u041d\u0435 \u0441\u0435\u0440\u0434\u0438\u0441\u044c \u043d\u0430 \u043c\u0435\u043d\u044f"},{enWord:"I don`t wanna put you in the middle of it",rusWord:"\u044f \u043d\u0435 \u0445\u043e\u0447\u0443 \u0442\u0435\u0431\u044f \u0432\u043f\u0443\u0442\u044b\u0432\u0430\u0442\u044c \u0432 \u044d\u0442\u043e"},{enWord:"it`s off the table",rusWord:"\u044d\u0442\u043e \u043d\u0435 \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f"},{enWord:"rival",rusWord:"\u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a"},{enWord:"bachelor party",rusWord:"\u043c\u0430\u043b\u044c\u0447\u0438\u0448\u043d\u0438\u043a"},{enWord:"long-distance relationships",rusWord:"\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0438"},{enWord:"to go out with",rusWord:"\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0442\u044c\u0441\u044f \u0441",rusWord2:"\u0438\u043c\u0435\u0442\u044c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441"},{enWord:"naughty",rusWord:"\u043d\u0435\u043f\u043e\u0441\u043b\u0443\u0448\u043d\u044b\u0439",rusWord2:"\u043a\u0430\u043f\u0440\u0438\u0437\u043d\u044b\u0439"},{enWord:"competitive",rusWord:"\u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u044b\u0439"},{enWord:"have a crush on each other",rusWord:"\u0432\u043b\u044e\u0431\u0438\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433 \u0432 \u0434\u0440\u0443\u0433\u0430"},{enWord:"to expand",rusWord:"\u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c"},{enWord:"overcoming",rusWord:"\u043f\u0440\u0435\u043e\u0434\u043e\u043b\u0435\u043d\u0438\u0435"},{enWord:"willing",rusWord:"\u0433\u043e\u0442\u043e\u0432\u044b\u0439",rusWord2:"\u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0439",rusWord3:"\u0436\u0435\u043b\u0430\u044e\u0449\u0438\u0439"},{enWord:"ladle",rusWord:"\u043f\u043e\u043b\u043e\u0432\u043d\u0438\u043a"},{enWord:"colander",rusWord:"\u0434\u0443\u0440\u0448\u043b\u0430\u0433"},{enWord:"cutting board",rusWord:"\u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0447\u043d\u0430\u044f \u0434\u043e\u0441\u043a\u0430"},{enWord:"chopping board",rusWord:"\u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0447\u043d\u0430\u044f \u0434\u043e\u0441\u043a\u0430"},{enWord:"can opener",rusWord:"\u043a\u043e\u043d\u0441\u0435\u0440\u0432\u043d\u044b\u0439 \u043d\u043e\u0436"},{enWord:"corkscrew",rusWord:"\u0448\u0442\u043e\u043f\u043e\u0440"},{enWord:"spatula",rusWord:"\u043b\u043e\u043f\u0430\u0442\u043a\u0430",rusWord2:"\u043b\u043e\u043f\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u0436\u0430\u0440\u043a\u0438"},{enWord:"to settle",rusWord:"\u0440\u0435\u0448\u0438\u0442\u044c",rusWord2:"\u0443\u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{enWord:"indomitable",rusWord:"\u043d\u0435\u0441\u0433\u0438\u0431\u0430\u0435\u043c\u044b\u0439",rusWord2:"\u043d\u0435\u0443\u043a\u0440\u043e\u0442\u0438\u043c\u044b\u0439"},{enWord:"pull it off",rusWord:"\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0441 \u044d\u0442\u0438\u043c",rusWord2:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u044f"},{enWord:"modest",rusWord:"\u0441\u043a\u0440\u043e\u043c\u043d\u044b\u0439"},{enWord:"glint in the eye",rusWord:"\u0431\u043b\u0435\u0441\u043a \u0432 \u0433\u043b\u0430\u0437\u0430\u0445"},{enWord:"martial arts",rusWord:"\u0431\u043e\u0435\u0432\u044b\u0435 \u0438\u0441\u0441\u043a\u0443\u0441\u0442\u0432\u0430"},{enWord:"smirk",rusWord:"\u0443\u0445\u043c\u044b\u043b\u043a\u0430"},{enWord:"generous",rusWord:"\u0449\u0435\u0434\u0440\u044b\u0439"},{enWord:"gamble",rusWord:"\u0438\u0433\u0440\u0430",rusWord2:"\u0440\u0438\u0441\u043a",rusWord3:"\u0430\u0437\u0430\u0440\u0442"},{enWord:"selfish",rusWord:"\u044d\u0433\u043e\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0439"},{enWord:"get along with somebody",rusWord:"\u043b\u0430\u0434\u0438\u0442\u044c \u0441 \u043a\u0435\u043c-\u043b\u0438\u0431\u043e"},{enWord:"outgoing people",rusWord:"\u043e\u0431\u0449\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043b\u044e\u0434\u0438"},{enWord:"open minded",rusWord:"\u0448\u0438\u0440\u043e\u043a\u0438\u0445 \u0432\u0437\u0433\u043b\u044f\u0434\u043e\u0432"},{enWord:"narrow minded",rusWord:"\u0443\u0437\u043a\u0438\u0445 \u0432\u0437\u0433\u043b\u044f\u0434\u043e\u0432"},{enWord:"think outside the box",rusWord:"\u0434\u0443\u043c\u0430\u0442\u044c \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e"},{enWord:"reserved person",rusWord:"\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a"},{enWord:"to achieve goals",rusWord:"\u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c \u0446\u0435\u043b\u0438"},{enWord:"to mess up",rusWord:"\u0438\u0441\u043f\u043e\u0440\u0442\u0438\u0442\u044c",rusWord2:"\u0437\u0430\u0432\u0430\u043b\u0438\u0442\u044c"},{enWord:"book",rusWord:"\u043a\u043d\u0438\u0433\u0430"},{enWord:"treadmill",rusWord:"\u0431\u0435\u0433\u043e\u0432\u0430\u044f \u0434\u043e\u0440\u043e\u0436\u043a\u0430"},{enWord:"tread",rusWord:"\u0448\u0430\u0433",rusWord2:"\u043f\u0440\u043e\u0442\u0435\u043a\u0442\u043e\u0440"},{enWord:"keep it together",rusWord:"\u0434\u0435\u0440\u0436\u0438 \u0441\u0435\u0431\u044f \u0432 \u0440\u0443\u043a\u0430\u0445",rusWord2:"\u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439 \u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435"},{enWord:"indifferent",rusWord:"\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0439",rusWord2:"\u0440\u0430\u0432\u043d\u043e\u0434\u0443\u0448\u043d\u044b\u0439"},{enWord:"tread lightly",rusWord:"\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e"},{enWord:"to be ambitious",rusWord:"\u0431\u044b\u0442\u044c \u0430\u043c\u0431\u0438\u0446\u0438\u043e\u0437\u043d\u044b\u043c"},{enWord:"to work hard on something",rusWord:"\u0443\u0441\u0435\u0440\u0434\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0434 \u0447\u0435\u043c-\u043b\u0438\u0431\u043e"},{enWord:"to miss out",rusWord:"\u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"},{enWord:"mental",rusWord:"\u043f\u0441\u0438\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0439"},{enWord:"to encourage to do something",rusWord:"\u0432\u043e\u043e\u0434\u0443\u0448\u0435\u0432\u043b\u044f\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c"},{enWord:"to occur",rusWord:"\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c",rusWord2:"\u0438\u043c\u0435\u0442\u044c \u043c\u0435\u0441\u0442\u043e"},{enWord:"orbital bone",rusWord:"\u0441\u043a\u0443\u043b\u043e\u0432\u0430\u044f \u043a\u043e\u0441\u0442\u044c"},{enWord:"to master different skills",rusWord:"\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"},{enWord:"to focus on something",rusWord:"\u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u043c-\u0442\u043e",rusWord2:"\u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0435\u043c-\u0442\u043e"},{enWord:"to beg",rusWord:"\u0443\u043c\u043e\u043b\u044f\u0442\u044c"},{enWord:"corpse",rusWord:"\u043c\u0435\u0440\u0442\u0432\u0435\u0446"},{enWord:"mortician",rusWord:"\u0433\u0440\u043e\u0431\u043e\u0432\u0449\u0438\u043a"},{enWord:"den",rusWord:"\u043b\u043e\u0433\u043e\u0432\u043e"},{enWord:"thirsty",rusWord:"\u0436\u0430\u0436\u0434\u0430"},{enWord:"amusement",rusWord:"\u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435"},{enWord:"thoughtful",rusWord:"\u0437\u0430\u0431\u043e\u0442\u043b\u0438\u0432\u044b\u0439"},{enWord:"grumpy",rusWord:"\u0441\u0432\u0430\u0440\u043b\u0438\u0432\u044b\u0439"},{enWord:"to scream",rusWord:"\u043a\u0440\u0438\u0447\u0430\u0442\u044c"},{enWord:"screwdriver",rusWord:"\u043e\u0442\u0432\u0435\u0440\u0442\u043a\u0430"},{enWord:"fuse",rusWord:"\u043f\u0440\u0435\u0434\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c"},{enWord:"to mend",rusWord:"\u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c"},{enWord:"commitment",rusWord:"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{enWord:"spell out",rusWord:"\u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{enWord:"orphan",rusWord:"\u0441\u0438\u0440\u043e\u0442\u0430"},{enWord:"orphanage",rusWord:"\u0434\u0435\u0442\u0441\u043a\u0438\u0439 \u0434\u043e\u043c"},{enWord:"harebrained",rusWord:"\u043b\u0435\u0433\u043a\u043e\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u044b\u0439"},{enWord:"survey",rusWord:"\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435"},{enWord:"think it over",rusWord:"\u043e\u0431\u0434\u0443\u043c\u0430\u0442\u044c"},{enWord:"to deserve",rusWord:"\u0437\u0430\u0441\u043b\u0443\u0436\u0438\u0442\u044c"},{enWord:"slump",rusWord:"\u0441\u043f\u0430\u0434"},{enWord:"to wander",rusWord:"\u0431\u043b\u0443\u0436\u0434\u0430\u0442\u044c"},{enWord:"trail",rusWord:"\u0441\u043b\u0435\u0434"},{enWord:"prairie",rusWord:"\u0441\u0442\u0435\u043f\u044c"},{enWord:"to keep over",rusWord:"\u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c"},{enWord:"to ring out",rusWord:"\u043f\u0440\u043e\u0437\u0432\u0443\u0447\u0430\u0442\u044c"},{enWord:"valley",rusWord:"\u0434\u043e\u043b\u0438\u043d\u0430"},{enWord:"contraction",rusWord:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435"},{enWord:"ambien",rusWord:"\u0441\u043d\u043e\u0442\u0432\u043e\u0440\u043d\u043e\u0435"},{enWord:"awesome",rusWord:"\u0432\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e"},{enWord:"unresponsive",rusWord:"\u0431\u0435\u0437 \u0441\u043e\u0437\u043d\u0430\u043d\u0438\u044f"},{enWord:"affirmative",rusWord:"\u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0439"},{enWord:"malfunction",rusWord:"\u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u044c",rusWord2:"\u043f\u043e\u043b\u043e\u043c\u043a\u0430"},{enWord:"determination",rusWord:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"},{enWord:"immutable",rusWord:"\u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u044b\u0439"},{enWord:"immutability",rusWord:"\u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},{enWord:"to terminate",rusWord:"\u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c"},{enWord:"to shatter",rusWord:"\u0440\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u044c"},{enWord:"wind",rusWord:"\u0432\u0435\u0442\u0435\u0440"},{enWord:"to wind up",rusWord:"\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c",rusWord2:"\u0437\u0430\u043d\u0435\u0441\u0442\u0438"},{enWord:"suing",rusWord:"\u0441\u0443\u0434\u0438\u0442\u044c\u0441\u044f"},{enWord:"to lash",rusWord:"\u0445\u043b\u0435\u0441\u0442\u0430\u0442\u044c"},{enWord:"lash",rusWord:"\u043f\u043b\u0435\u0442\u044c"},{enWord:"to lash out",rusWord:"\u043d\u0430\u0431\u0440\u043e\u0441\u0438\u0442\u044c\u0441\u044f"},{enWord:"closure",rusWord:"\u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435"},{enWord:"brown-nosing",rusWord:"\u043f\u043e\u0434\u043b\u0438\u0437\u0430"},{enWord:"scale",rusWord:"\u043c\u0430\u0441\u0448\u0442\u0430\u0431"},{enWord:"to prosecute",rusWord:"\u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u043a \u0441\u0443\u0434\u0443"},{enWord:"to parse",rusWord:"\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{enWord:"to accuse",rusWord:"\u043e\u0431\u0432\u0438\u043d\u044f\u0442\u044c"},{enWord:"response",rusWord:"\u0440\u0435\u0430\u043a\u0446\u0438\u044f",rusWord2:"\u043e\u0442\u0432\u0435\u0442"},{enWord:"to show up",rusWord:"\u043f\u043e\u044f\u0432\u0438\u0442\u044c\u0441\u044f",rusWord2:"\u044f\u0432\u0438\u0442\u044c\u0441\u044f",rusWord3:"\u043f\u0440\u0438\u0434\u0442\u0438"},{enWord:"pity",rusWord:"\u0436\u0430\u043b\u043e\u0441\u0442\u044c"},{enWord:"bride",rusWord:"\u043d\u0435\u0432\u0435\u0441\u0442\u0430"},{enWord:"to insist",rusWord:"\u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u0442\u044c",rusWord2:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c"},{enWord:"horrendous",rusWord:"\u0443\u0436\u0430\u0441\u043d\u044b\u0439"},{enWord:"otherwise",rusWord:"\u0438\u043d\u0430\u0447\u0435"},{enWord:"curse",rusWord:"\u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435"},{enWord:"first-grader",rusWord:"\u043f\u0435\u0440\u0432\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a"},{enWord:"fictional",rusWord:"\u0432\u044b\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439"},{enWord:"ransom",rusWord:"\u0432\u044b\u043a\u0443\u043f"},{enWord:"disguise",rusWord:"\u043c\u0430\u0441\u043a\u0438\u0440\u043e\u0432\u043a\u0430"},{enWord:"make out",rusWord:"\u0446\u0435\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},{enWord:"to get away from it all",rusWord:"\u0441\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0442 \u0432\u0441\u0435\u0433\u043e \u044d\u0442\u043e\u0433\u043e"},{enWord:"to set off",rusWord:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0443\u0442\u044c"},{enWord:"to see somebody off",rusWord:"\u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e"},{enWord:"to get on a plane",rusWord:"\u0441\u0435\u0441\u0442\u044c \u0432 \u0441\u0430\u043c\u043e\u043b\u0435\u0442"},{enWord:"to get off the plane",rusWord:"\u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0441\u0430\u043c\u043e\u043b\u0435\u0442\u0430"},{enWord:"slightly less",rusWord:"\u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u044c\u0448\u0435"},{enWord:"What is so funny about that?",rusWord:"\u0427\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u0441\u043c\u0435\u0448\u043d\u043e\u0433\u043e?"},{enWord:"The bottom line is that...",rusWord:"\u0421\u0443\u0442\u044c \u0432 \u0442\u043e\u043c..."},{enWord:"entire",rusWord:"\u0446\u0435\u043b\u044b\u0439"},{enWord:"courageous",rusWord:"\u043c\u0443\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e"},{enWord:"feud",rusWord:"\u0432\u0440\u0430\u0436\u0434\u0430"},{enWord:"say in private",rusWord:"\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0435\u0434\u0438\u043d\u0435"},{enWord:"equally",rusWord:"\u043d\u0435 \u043c\u0435\u043d\u0435\u0435",rusWord2:"\u0442\u0430\u043a\u0436\u0435",rusWord3:"\u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e"},{enWord:"decline",rusWord:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435",rusWord2:"\u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435",rusWord3:"\u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435"},{enWord:"share",rusWord:"\u0434\u043e\u043b\u044f",rusWord2:"\u0430\u043a\u0446\u0438\u044f",rusWord3:"\u0447\u0430\u0441\u0442\u044c"},{enWord:"endorsement",rusWord:"\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0435",rusWord2:"\u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435",rusWord3:"\u043f\u0440\u0438\u043d\u044f\u0442\u0438\u0435"}],h=function(r){return n.a.createElement("div",null,n.a.createElement(t,{name:"next word",callback:r.nextEnWordElement}))};var g=function(){var r=[m[0]],o=Object(d.useState)(r),e=Object(u.a)(o,2),W=e[0],s=e[1],t=function(){var r=Math.floor(Math.random()*m.length),o=m[r];console.log(o),s([o]),g(""),w("")},a=Object(d.useState)(""),i=Object(u.a)(a,2),l=i[0],g=i[1],p=Object(d.useState)(""),f=Object(u.a)(p,2),b=f[0],w=f[1],y=function(){var r=W.map((function(r){return[r.rusWord,r.rusWord2,r.rusWord3]}));if(l.toLowerCase().trim()===r[0][0]||l.toLowerCase().trim()===r[0][1]||l.toLowerCase().trim()===r[0][2])w("\u041f\u0420\u0410\u0412\u0418\u041b\u042c\u041d\u041e!!!");else{var o=r[0].filter(Boolean);w(" ".concat(o))}},v=W.map((function(r){return n.a.createElement("div",null,"".concat(r.enWord," "),n.a.createElement("span",null,n.a.createElement(h,{nextEnWordElement:t})))})),k="\u041f\u0420\u0410\u0412\u0418\u041b\u042c\u041d\u041e!!!"!==b&&""!==b?n.a.createElement("div",{style:{color:"red"}},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u0438\u0434\u0438 \u0443\u0447\u0438. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442:"," ",n.a.createElement("br",null),n.a.createElement("div",{style:{color:"blue"}},b)):n.a.createElement("div",{style:{color:"green"}},b);return n.a.createElement("div",{className:"App"},n.a.createElement(c,{title:"Learn English",enWordElement:v,translateWord:l,onKeyPressAddTask:function(r){"Enter"===r.key&&y()},changeTitle:function(r){g(r.currentTarget.value),w("")},checkAnswer:y,answer:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()})).catch((function(r){console.error(r.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f7fea02c.chunk.js.map