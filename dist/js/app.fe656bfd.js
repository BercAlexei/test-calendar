(function(){"use strict";var e={2078:function(e,t,a){var n=a(6369),o=a(3822);n.ZP.use(o.ZP);var r=new o.ZP.Store({strict:!0,state:{date:{currDay:(new Date).getDate(),currMonth:(new Date).getMonth(),currYear:(new Date).getFullYear()},developments:[{id:1,date:new Date(2022,6,31).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(2022,6,31).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:""},{id:2,date:new Date(2022,7,7).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(2022,7,7).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:"Заакончить методы добавлени и удаления"},{id:3,date:new Date(2022,6,15).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(2022,6,15).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:""},{id:4,date:new Date(2022,6,1).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(2022,6,1).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Закончить проект",people:"Я",description:"Устал уже"},{id:5,date:new Date(2021,11,31).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(2022,11,31).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:"Встретить новый год!",people:"Я, Саня, Серега, Люда",description:"Счастливого нового года!!!"}],showPopup:"",newDevelop:{date:"",title:"",people:"",description:""},scrollWidth:!1},getters:{getStringMonths(e){let t=new Date(e.date.currYear,e.date.currMonth,e.date.currDay).toLocaleDateString("ru-RU",{year:"numeric",month:"long"});return t.substring(0,t.length-3)},createCalendar(e){let t=[],a=new Date(e.date.currYear,e.date.currMonth,1).getDay(),n=new Date(e.date.currYear,e.date.currMonth+1,0).getDate(),o=new Date(e.date.currYear,e.date.currMonth,n).getDay();for(let r=1;r<=n;r++){let a=new Date(e.date.currYear,e.date.currMonth,r).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),n=e.developments.filter((e=>e.date===a))[0];t.push({id:a,date:{year:e.date.currYear,month:e.date.currMonth,day:r},dayString:new Date(e.date.currYear,e.date.currMonth,r).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...n}})}if(1!=a){let n;n=0==e.date.currMonth?new Date(e.date.currYear-1,12,0).getDate():new Date(e.date.currYear,e.date.currMonth,0).getDate();for(let o=1;o<a;o++){let a=n-o+1,r=0==e.date.currMonth?new Date(e.date.currYear-1,12,0).getFullYear():e.date.currYear,i=a?new Date(e.date.currYear,e.date.currMonth,0).getMonth():e.date.currMonth,l=new Date(r,i,a).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),d=e.developments.filter((e=>e.date===l))[0];t.unshift({id:l,date:{year:r,month:i,day:a},dayString:new Date(r,i,a).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...d}})}}if(0!=o){let a=7-o;for(let n=1;n<=a;n++){let a=11==e.date.currMonth?new Date(e.date.currYear+1,1,0).getFullYear():e.date.currYear,o=n?new Date(e.date.currYear,e.date.currMonth+1,1).getMonth():e.date.currMonth,r=new Date(a,o,n).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),i=e.developments.filter((e=>e.date===r))[0];t.push({id:r,date:{year:a,month:o,day:n},dayString:new Date(a,o,n).toLocaleDateString("ru-RU",{weekday:"long"}),develop:{date:"",title:"",people:"",description:"",...i}})}}return console.log(t),t}},mutations:{updateInput(e,t){function a(e){for(let n in e)"object"===typeof e[n]?a(e[n]):n==t.target.name&&(e[n]=t.target.value)}a(e[t.state])},clearInput(e,t){function a(e){for(let n in e)"object"===typeof e[n]?a(e[n]):n==t.name&&(e[n]="")}a(e[t.state])},nextMonth(e){e.showPopup="",11==e.date.currMonth?(e.date.currMonth=0,e.date.currYear=e.date.currYear+1):e.date.currMonth=e.date.currMonth+1},prevMonth(e){e.showPopup="",0==e.date.currMonth?(e.date.currMonth=11,e.date.currYear=e.date.currYear-1):e.date.currMonth=e.date.currMonth-1},goToday(e){e.date.currYear=(new Date).getFullYear(),e.date.currMonth=(new Date).getMonth(),e.showPopup=new Date(e.date.currYear,e.date.currMonth,e.date.currDay).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"})},updateShowPopup(e,t){t!==e.showPopup&&(e.scrollWidth=!1),e.newDevelop.title="",e.newDevelop.people="",e.newDevelop.description="",e.newDevelop.date=t,e.showPopup=t||""},updateScrollWidth(e){document.documentElement.offsetWidth<document.documentElement.scrollWidth&&(e.scrollWidth=!0)},addDevelop(e,t){e.developments.push({id:e.developments.length+1,date:new Date(t.date.year,t.date.month,t.date.day).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),dateShort:new Date(t.date.year,t.date.month,t.date.day).toLocaleDateString("ru-RU",{day:"numeric",weekday:"long"}),title:e.newDevelop.title,people:e.newDevelop.people,description:e.newDevelop.description}),localStorage.setItem("db",JSON.stringify(e.developments)),e.newDevelop.title="",e.newDevelop.people="",e.newDevelop.description="",e.showPopup=""},updateDevelopments(e,t){e.developments=e.developments.map((a=>a.id===t?(a.description=e.newDevelop.description,e.newDevelop.description="",a):a)),localStorage.setItem("db",JSON.stringify(e.developments))},delDevelop(e,t){t?(e.developments=e.developments.filter((e=>e.date!==t)),localStorage.setItem("db",JSON.stringify(e.developments))):(e.newDevelop.title="",e.newDevelop.people="",e.newDevelop.description="")},updateLocalStorage(e){localStorage.getItem("db")?e.developments=JSON.parse(localStorage.getItem("db")):localStorage.setItem("db",JSON.stringify(e.developments))}}}),i=a(4951),l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[t("div",{staticClass:"header__wrapper"},[t("div",{staticClass:"header__btns"},[t("Btn",{attrs:{text:"Добавить"}}),t("Btn",{attrs:{text:"Обновить"}})],1),t("div",{staticClass:"header__input"},[t("div",{staticClass:"header__input-image"}),t("Input",{attrs:{placeholder:"Search...",valid:!0}})],1)])])]),t("div",{staticClass:"calendar"},[t("div",{staticClass:"container"},[t("div",{staticClass:"calendar__btns"},[t("Btn",{attrs:{icon:"",extra:"",optionIcon:{direction:"left",size:"large"}},on:{click:e.prevMonth}}),t("div",{staticClass:"calendar__date"},[e._v(" "+e._s(e.getStringMonths)+" ")]),t("Btn",{attrs:{icon:"",extra:"",optionIcon:{direction:"right",size:"large"}},on:{click:e.nextMonth}}),t("div",{staticClass:"calendar__btn"},[t("Btn",{attrs:{extra:"",text:"Сегодня"},on:{click:function(t){return e.goToday()}}})],1)],1),t("div",{staticClass:"calendar__wrapper"},e._l(e.createCalendar,(function(e,a){return t("Cell",{key:a,attrs:{index:a,data:e}})})),1)])])])},d=[],p=function(){var e=this,t=e._self._c;return t("button",{staticClass:"btn",class:{btn_extra:e.extra,btn_icon:e.icon},attrs:{disabled:e.disabled,type:e.type},on:{click:function(t){return e.$emit("click")}}},[e.icon?t("svg",{staticClass:"icon",class:{icon_left:"left"===e.optionIcon.direction,icon_small:"small"===e.optionIcon.size},attrs:{viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M11.1158 6.52066L2.24034 0.462622C1.83045 0.182655 1.41746 0.034483 1.07419 0.034483C0.410533 0.034483 0 0.56553 0 1.45444V14.5476C0 15.4355 0.410016 15.9655 1.07212 15.9655C1.41591 15.9655 1.82231 15.8172 2.2331 15.5365L11.1127 9.47856C11.6838 9.08834 12 8.56322 12 7.99929C12.0001 7.43575 11.6875 6.91076 11.1158 6.52066Z"}})]):t("span",[e._v(e._s(e.text))])])},s=[],c={props:{text:{type:String},disabled:{type:Boolean},extra:{type:Boolean},icon:{type:Boolean},optionIcon:{type:Object},type:{type:String,default:"button"}}},u=c,v=a(1001),h=(0,v.Z)(u,p,s,!1,null,"a3d9bc82",null),m=h.exports,g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-container"},[e.textarea?e._e():t("input",{staticClass:"input",class:{input_error:!e.valid},attrs:{type:"text",disabled:e.disabled,placeholder:e.placeholder,name:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target)}}}),e.textarea?t("textarea",{staticClass:"input",attrs:{cols:"30",rows:"10",disabled:e.disabled,placeholder:e.placeholder,name:e.name},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target)}}}):e._e(),e.textarea?e._e():t("button",{staticClass:"icon",attrs:{type:"button"},on:{mousedown:function(t){return e.clearInput({state:"newDevelop",name:e.name})}}},[t("img",{attrs:{src:"assets/icons/cross.svg",alt:"cross"}})])])},w=[],D={props:{value:{type:String},placeholder:{type:String},disabled:{type:Boolean},name:{type:String,require:!0},textarea:{type:Boolean},valid:{type:Boolean}},methods:{...(0,o.OI)(["clearInput"])}},f=D,y=(0,v.Z)(f,g,w,!1,null,"03b9a2db",null),_=y.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[t("div",{staticClass:"cell",class:{cell_filled:e.data.develop.title,cell_active:e.data.id===e.showPopup},on:{click:function(t){return e.updateShowPopup(e.data.id)}}},[t("div",{staticClass:"cell__header"},[e.index<=6?t("span",[e._v(e._s(e.data.dayString)+", ")]):e._e(),e._v(" "+e._s(e.data.date.day)+" ")]),e.data.develop?t("div",{staticClass:"cell__content"},[t("div",{staticClass:"cell__title"},[e._v(" "+e._s(e.data.develop.title)+" ")]),t("div",{staticClass:"cell__description"},[e._v(" "+e._s(e.data.develop.people)+" ")])]):e._e()]),e.showPopup===e.data.id?t("Popup",{attrs:{development:e.data.develop,date:e.data.date}}):e._e()],1)},b=[],C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"popup",class:{popup_right:e.scrollWidth}},[t("div",{staticClass:"popup__cross",on:{click:function(t){return e.updateShowPopup()}}}),t("form",{on:{submit:function(t){return t.preventDefault(),e.addDevelopLocal()}}},[e.development.title?t("div",{staticClass:"popup__title"},[e._v(" "+e._s(e.development.title)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Событие",name:"title",valid:!e.submitStatus},model:{value:e.title,callback:function(t){e.title="string"===typeof t?t.trim():t},expression:"title"}})],1),e.development.date?t("div",{staticClass:"popup__date"},[e._v(" "+e._s(e.development.dateShort)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"День, месяц, год",value:e.dateState,disabled:"",valid:!0}})],1),e.development.people?t("div",{staticClass:"popup__people"},[t("div",{staticClass:"popup__people-subtitle"},[e._v("Участники:")]),e._v(" "+e._s(e.development.people)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Имена участников",name:"people",valid:!e.submitStatus},model:{value:e.people,callback:function(t){e.people="string"===typeof t?t.trim():t},expression:"people"}})],1),e.development.description?t("div",{staticClass:"popup__description"},[e._v(" "+e._s(e.development.description)+" ")]):t("div",{staticClass:"popup__input"},[t("Input",{attrs:{placeholder:"Описание",textarea:"",name:"description"},model:{value:e.description,callback:function(t){e.description="string"===typeof t?t.trim():t},expression:"description"}})],1),t("div",{staticClass:"popup__btns"},[t("Btn",{attrs:{extra:"",text:"Готово",type:"submit",disabled:!!(e.development.title&&e.development.date&&e.development.people&&e.development.description)}}),t("Btn",{attrs:{extra:"",text:"Удалить"},on:{click:function(t){return e.delDevelop(e.development.date)}}})],1)])])},x=[],M=a(5795),I={data(){return{submitStatus:!1}},components:{Input:_,Btn:m},props:{development:{type:Object},date:{type:Object,require:!0}},computed:{...(0,o.rn)(["scrollWidth"]),title:{get(){return this.$store.state.newDevelop.title},set(e){this.$v.title.$touch(),this.updateInput({state:"newDevelop",target:e})}},dateState:{get(){return this.$store.state.newDevelop.date},set(e){this.$v.dateState.$touch(),this.updateInput({state:"newDevelop",target:e})}},people:{get(){return this.$store.state.newDevelop.people},set(e){this.$v.people.$touch(),this.updateInput({state:"newDevelop",target:e})}},description:{get(){return this.$store.state.newDevelop.description},set(e){this.updateInput({state:"newDevelop",target:e})}}},methods:{...(0,o.OI)(["updateShowPopup","updateInput","delDevelop","updateScrollWidth","addDevelop","updateDevelopments"]),addDevelopLocal(){this.$v.$invalid?this.development.title&&this.development.date&&this.development.people&&!this.development.description?this.updateDevelopments(this.development.id):this.submitStatus=!0:this.addDevelop({date:this.date,develop:this.development})}},validations:{title:{required:M.C1},dateState:{required:M.C1},people:{required:M.C1}},mounted(){this.updateScrollWidth()}},P=I,k=(0,v.Z)(P,C,x,!1,null,"4dfe988e",null),L=k.exports,Y={components:{Popup:L},props:{data:{require:!1},index:{require:!0}},computed:{...(0,o.rn)(["showPopup"])},methods:{...(0,o.OI)(["updateShowPopup"])}},O=Y,R=(0,v.Z)(O,S,b,!1,null,"3190982a",null),U=R.exports,B={name:"App",components:{Btn:m,Cell:U,Input:_},computed:{...(0,o.Se)(["getStringMonths","createCalendar"])},methods:{...(0,o.OI)(["nextMonth","prevMonth","goToday","updateLocalStorage"])},created(){this.updateLocalStorage()}},$=B,Z=(0,v.Z)($,l,d,!1,null,null,null),j=Z.exports;n.ZP.use(i.ZP),n.ZP.config.productionTip=!1,new n.ZP({store:r,render:e=>e(j)}).$mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],r=e[s][2];for(var l=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var p=o();void 0!==p&&(t=p)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],l=n[1],d=n[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(d)var s=d(a)}for(t&&t(n);p<i.length;p++)r=i[p],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(s)},n=self["webpackChunktest_calenadar"]=self["webpackChunktest_calenadar"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2078)}));n=a.O(n)})();
//# sourceMappingURL=app.fe656bfd.js.map