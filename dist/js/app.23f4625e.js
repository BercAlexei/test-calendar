(function(){"use strict";var e={1476:function(e,t,a){var r=a(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[t("div",{staticClass:"header__wrapper"},[t("div",{staticClass:"header__btns"},[t("Btn",{attrs:{text:"Добавить"}}),t("Btn",{attrs:{text:"Обновить"}})],1),t("div",{staticClass:"header__input"},[t("div",{staticClass:"header__input-image"}),t("Input",{attrs:{placeholder:"Search..."}})],1)])])]),t("div",{staticClass:"calendar"},[t("div",{staticClass:"container"},[t("div",{staticClass:"calendar__btns"},[t("Btn",{attrs:{icon:"",extra:"",optionIcon:{direction:"left",size:"large"}},on:{click:e.prevMonth}}),t("div",{staticClass:"calendar__date"},[e._v(" "+e._s(e.getStringMonths)+" ")]),t("Btn",{attrs:{icon:"",extra:"",optionIcon:{direction:"right",size:"large"}},on:{click:e.nextMonth}}),t("div",{staticClass:"calendar__btn"},[t("Btn",{attrs:{extra:"",text:"Сегодня"},on:{click:function(t){return e.goToday()}}})],1)],1),t("div",{staticClass:"calendar__wrapper"},e._l(e.createCalendar,(function(e,a){return t("Cell",{key:a,attrs:{index:a,data:e}})})),1)])])])},o=[],i=function(){var e=this,t=e._self._c;return t("button",{staticClass:"btn",class:{btn_extra:e.extra,btn_icon:e.icon},attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click")}}},[e.icon?t("svg",{staticClass:"icon",class:{icon_left:"left"===e.optionIcon.direction,icon_small:"small"===e.optionIcon.size},attrs:{viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M11.1158 6.52066L2.24034 0.462622C1.83045 0.182655 1.41746 0.034483 1.07419 0.034483C0.410533 0.034483 0 0.56553 0 1.45444V14.5476C0 15.4355 0.410016 15.9655 1.07212 15.9655C1.41591 15.9655 1.82231 15.8172 2.2331 15.5365L11.1127 9.47856C11.6838 9.08834 12 8.56322 12 7.99929C12.0001 7.43575 11.6875 6.91076 11.1158 6.52066Z"}})]):t("span",[e._v(e._s(e.text))])])},l=[],d={props:{text:{type:String},disabled:{type:Boolean},extra:{type:Boolean},icon:{type:Boolean},optionIcon:{type:Object}}},c=d,s=a(1001),u=(0,s.Z)(c,i,l,!1,null,"197b9030",null),p=u.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-container"},[e.textarea?e._e():t("input",{staticClass:"input",attrs:{type:"text",disabled:e.disabled,placeholder:e.placeholder,name:e.name,required:e.required},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target)}}}),e.textarea?t("textarea",{staticClass:"input",attrs:{cols:"30",rows:"10",disabled:e.disabled,placeholder:e.placeholder,name:e.name,required:e.required},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target)}}}):e._e(),e.textarea?e._e():t("button",{staticClass:"icon",on:{mousedown:function(t){return e.clearInput(e.name)}}},[t("img",{attrs:{src:"assets/icons/cross.svg",alt:"cross"}})])])},g=[],v=a(3822),m={props:{value:{type:String},placeholder:{type:String},disabled:{type:Boolean},required:{type:Boolean},name:{type:String,require:!0},textarea:{type:Boolean}},methods:{...(0,v.OI)(["clearInput"])}},_=m,y=(0,s.Z)(_,h,g,!1,null,"43dc6bee",null),f=y.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[t("div",{staticClass:"cell",class:{cell_filled:e.data.develop.title,cell_active:e.data.id===e.showPopup},on:{click:function(t){return e.updateShowPopup(e.data.id)}}},[t("div",{staticClass:"cell__header"},[e.index<=6?t("span",[e._v(e._s(e.data.dayString)+", ")]):e._e(),e._v(" "+e._s(e.data.date.day)+" ")]),e.data.develop?t("div",{staticClass:"cell__content"},[t("div",{staticClass:"cell__title"},[e._v(" "+e._s(e.data.develop.title)+" ")]),t("div",{staticClass:"cell__description"},[e._v(" "+e._s(e.data.develop.people)+" ")])]):e._e()]),e.showPopup===e.data.id?t("Popup",{attrs:{development:e.data.develop,date:e.data.date}}):e._e()],1)},D=[],C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"popup",class:{popup_right:e.scrollWidth}},[t("div",{staticClass:"popup__cross",on:{click:function(t){return e.updateShowPopup()}}}),t("form",[e.development.title?t("div",{staticClass:"popup__title"},[e._v(" "+e._s(e.development.title)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Событие"}})],1),e.development.date?t("div",{staticClass:"popup__date"},[e._v(" "+e._s(e.development.dateShort)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"День, месяц, год",value:e.parseDate}})],1),e.development.people?t("div",{staticClass:"popup__people"},[t("div",{staticClass:"popup__people-subtitle"},[e._v("Участники:")]),e._v(" "+e._s(e.development.people)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Имена участников"}})],1),e.development.description?t("div",{staticClass:"popup__description"},[e._v(" "+e._s(e.development.description)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Описание",textarea:""}})],1),t("div",{staticClass:"popup__btns"},[t("Btn",{attrs:{extra:"",text:"Готово"}}),t("Btn",{attrs:{extra:"",text:"Удалить"}})],1)])])},S=[],b={data(){return{scrollWidth:!1}},components:{Input:f,Btn:p},props:{development:{type:Object},date:{type:Object,require:!0}},computed:{parseDate(){let e=new Date(this.date.year,this.date.month,this.date.day).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"});return e.substring(0,e.length-3)}},methods:{...(0,v.OI)(["updateShowPopup","updateInput"])},mounted(){document.documentElement.offsetWidth!==document.documentElement.scrollWidth&&(this.scrollWidth=!this.scrollWidth),console.log(this.date)}},M=b,x=(0,s.Z)(M,C,S,!1,null,"b8d136ce",null),k=x.exports,Y={components:{Popup:k},props:{data:{require:!1},index:{require:!0}},computed:{...(0,v.rn)(["showPopup"])},methods:{...(0,v.OI)(["updateShowPopup"])}},P=Y,I=(0,s.Z)(P,w,D,!1,null,"3190982a",null),L=I.exports,R={name:"App",components:{Btn:p,Cell:L,Input:f},computed:{...(0,v.Se)(["getStringMonths","createCalendar"])},methods:{...(0,v.OI)(["nextMonth","prevMonth","goToday"])}},U=R,O=(0,s.Z)(U,n,o,!1,null,null,null),B=O.exports;r.ZP.use(v.ZP);var j=new v.ZP.Store({state:{date:{currDay:(new Date).getDate(),currMonth:(new Date).getMonth(),currYear:(new Date).getFullYear()},developments:[{id:1,date:new Date(2022,6,31).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),dateShort:new Date(2022,6,31).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:""},{id:2,date:new Date(2022,7,7).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),dateShort:new Date(2022,7,7).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:"Заакончить методы добавлени и удаления"},{id:3,date:new Date(2022,6,15).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),dateShort:new Date(2022,6,15).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:""},{id:4,date:new Date(2022,6,1).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),dateShort:new Date(2022,6,1).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:"Устал уже"},{id:5,date:new Date(2021,11,31).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),dateShort:new Date(2022,11,31).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Встретить новый год!",people:"Я, Саня, Серега, Люда",description:"Счастливого нового года!!!"}],showPopup:""},getters:{getStringMonths(e){let t=new Date(e.date.currYear,e.date.currMonth,e.date.currDay).toLocaleDateString("ru-RU",{year:"numeric",month:"long"});return t.substring(0,t.length-3)},createCalendar(e){let t=[],a=new Date(e.date.currYear,e.date.currMonth,1).getDay(),r=new Date(e.date.currYear,e.date.currMonth+1,0).getDate(),n=new Date(e.date.currYear,e.date.currMonth,r).getDay();for(let o=1;o<=r;o++){let a=new Date(e.date.currYear,e.date.currMonth,o).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),r=e.developments.filter((e=>e.date===a))[0];t.push({id:a,date:{year:e.date.currYear,month:e.date.currMonth,day:o},dayString:new Date(e.date.currYear,e.date.currMonth,o).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...r}})}if(1!=a){let r;r=0==e.date.currMonth?new Date(e.date.currYear-1,12,0).getDate():new Date(e.date.currYear,e.date.currMonth,0).getDate();for(let n=1;n<a;n++){let a=r-n+1,o=0==e.date.currMonth?new Date(e.date.currYear-1,12,0).getFullYear():e.date.currYear,i=a?new Date(e.date.currYear,e.date.currMonth,0).getMonth():e.date.currMonth,l=new Date(o,i,a).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),d=e.developments.filter((e=>e.date===l))[0];t.unshift({id:l,date:{year:o,month:i,day:a},dayString:new Date(o,i,a).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...d}})}}if(0!=n){let a=7-n;for(let r=1;r<=a;r++){let a=11==e.date.currMonth?new Date(e.date.currYear+1,1,0).getFullYear():e.date.currYear,n=r?new Date(e.date.currYear,e.date.currMonth+1,1).getMonth():e.date.currMonth,o=new Date(a,n,r).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),i=e.developments.filter((e=>e.date===o))[0];t.push({id:o,date:{year:a,month:n,day:r},dayString:new Date(a,n,r).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...i}})}}return console.log(t),t}},mutations:{updateInput(e,t){function a(e){for(let r in e)"object"===typeof e[r]?a(e[r]):r==t.name&&(e[r]=t.value)}a(e)},clearInput(e,t){function a(e){for(let r in e)"object"===typeof e[r]?a(e[r]):r==t&&(e[r]="")}a(e)},nextMonth(e){e.showPopup="",11==e.date.currMonth?(e.date.currMonth=0,e.date.currYear=e.date.currYear+1):e.date.currMonth=e.date.currMonth+1},prevMonth(e){e.showPopup="",0==e.date.currMonth?(e.date.currMonth=11,e.date.currYear=e.date.currYear-1):e.date.currMonth=e.date.currMonth-1},goToday(e){e.date.currYear=(new Date).getFullYear(),e.date.currMonth=(new Date).getMonth(),e.showPopup=new Date(e.date.currYear,e.date.currMonth,e.date.currDay).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric",weekday:"long"})},updateShowPopup(e,t){e.showPopup=t||""}}});r.ZP.config.productionTip=!1,new r.ZP({store:j,render:e=>e(B)}).$mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var l=!0,d=0;d<r.length;d++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[d])}))?r.splice(d--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],l=r[1],d=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(d)var s=d(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self["webpackChunktest_calenadar"]=self["webpackChunktest_calenadar"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1476)}));r=a.O(r)})();
//# sourceMappingURL=app.23f4625e.js.map