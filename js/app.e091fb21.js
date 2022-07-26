(function(){"use strict";var t={9797:function(t,e,s){var a=s(144),l=s(998),n=s(6072),o=s(3423),i=s(6190),r=s(2118),c=s(3059),u=s(3687),p=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{id:"inspire"}},[e(n.Z,{attrs:{app:"",color:"white",flat:""}},[e(r.Z,{staticClass:"py-0 fill-height"},[e(o.Z,{staticClass:"ml-10"},[e("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),e(u.Z),t._l(t.navLinks,(function(s){return e(i.Z,{key:s.title,attrs:{to:s.goTo,text:""}},[t._v(" "+t._s(s.title)+" ")])}))],2)],1),e(c.Z,{staticClass:"grey lighten-3"},[e("router-view")],1)],1)},f=[],d={name:"App",data:()=>({navLinks:[{title:"الرئيسية",goTo:"/"},{title:"شرح",goTo:"/link2"}]})},m=d,h=s(1001),Z=(0,h.Z)(m,p,f,!1,null,null,null),g=Z.exports,y=s(8345),v=s(9582),_=s(4886),x=s(266),b=s(1713),C=function(){var t=this,e=t._self._c;return e(r.Z,[e(b.Z,{staticClass:"mt-3"},[e(x.Z,{attrs:{cols:"12"}},[e(v.Z,{staticClass:"mx-auto pa-2",attrs:{flat:"",outlined:"",ripple:""}},[e(_.ZB,{staticClass:"text-center"},[e("p",{staticClass:"text-h4"},[t._v("Moisture density relation of soil")]),e("p",{staticClass:"ws-font"},[t._v("(ASTM D 698 - 1557 AASHTO T-99 - 180)")]),e("p",{staticClass:"tj-font"},[t._v("علاقة الكثافة بالرطوبة (تجربة بروكتور)")])])],1)],1)],1),e("MoldInfo"),e("SampleInputs"),e("ResultsSection"),e(b.Z,[e(x.Z,{attrs:{cols:"12"}},[e(v.Z,{staticClass:"pa-3",attrs:{flat:""}},[e("ResultChart")],1)],1)],1)],1)},W=[],w=function(){var t=this,e=t._self._c;return e("apexchart",{attrs:{type:"line",height:"350",width:"100%",options:t.chartOptions,series:t.series}})},O=[],S=s(7166),M=s.n(S),T=s(8048),P={name:"ResultChart",components:{apexchart:M()},data:()=>({series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148,150,99,50]}],chartOptions:{chart:{locales:[T],defaultLocale:"ar",height:350,type:"line",zoom:{enabled:!1},toolbar:{show:!0}},annotations:{points:[{x:"اغسطس",y:99,marker:{size:8,fillColor:"#fff",strokeColor:"red",radius:2,cssClass:"apexcharts-custom-class"},label:{borderColor:"#FF4560",offsetY:0,style:{color:"#fff",background:"#FF4560"},text:"Result"}}]},dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"مخطط الشهور بدرجة الحرارة",align:"center",style:{color:"red",fontSize:"12px",fontFamily:"Tajawal, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["يناير","فبراير","مارس","ابريل","مايو","يونيه","يوليو","اغسطس","سبتمير","اكتوبر","نوفمبر","ديسمير"],title:{text:"الشهور",rotate:-90,offsetX:0,offsetY:0,style:{color:"red",fontSize:"12px",fontFamily:"Tajawal, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}}},yaxis:{title:{text:"درجة الحرارة",rotate:-90,offsetX:-40,offsetY:0,style:{color:"red",fontSize:"12px",fontFamily:"Tajawal, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}},min:0,max:200}}})},j=P,k=(0,h.Z)(j,w,O,!1,null,null,null),E=k.exports,L=s(7149),U=function(){var t=this,e=t._self._c;return e(b.Z,[e(x.Z,{attrs:{cols:"auto",md:"6"}},[e(v.Z,{staticClass:"mx-auto pa-2",attrs:{flat:"",outlined:""}},[e(_.ZB,[e("p",{staticClass:"tj-font"},[t._v("بيانات القالب - Mold Info")]),e(b.Z,[e(x.Z,[e(L.Z,{staticClass:"scheher",attrs:{label:"وزن القالب",placeholder:"WEIGHT OF MOLD","prepend-inner-icon":"mdi-weight-gram",flat:"",outlined:"",dense:"",type:"number"},model:{value:t.moldWeight,callback:function(e){t.moldWeight=e},expression:"moldWeight"}})],1),e(x.Z,[e(L.Z,{staticClass:"scheher",attrs:{label:"حجم القالب",placeholder:"VOLUME OF MOLD","prepend-inner-icon":"mdi-cup-water",flat:"",outlined:"",dense:"",type:"number"},model:{value:t.moldVolume,callback:function(e){t.moldVolume=e},expression:"moldVolume"}})],1)],1)],1)],1)],1),e(x.Z,{attrs:{cols:"auto",md:"6"}},[e(v.Z,{staticClass:"mx-auto pa-2",attrs:{flat:"",outlined:""}},[e(_.ZB,[e("p",{staticClass:"tj-font"},[t._v("الطبقات والضربات - BLOWS & LAYER")]),e(b.Z,[e(x.Z,[e(L.Z,{staticClass:"scheher",attrs:{label:"عدد الطبقات",placeholder:"NUMBER OF LAYERS","prepend-inner-icon":"mdi-layers-triple-outline",flat:"",outlined:"",dense:"",type:"number"},model:{value:t.layersNo,callback:function(e){t.layersNo=e},expression:"layersNo"}})],1),e(x.Z,[e(L.Z,{staticClass:"scheher",attrs:{label:"عدد الضربات",placeholder:"BLOWS/LAYER","prepend-inner-icon":"mdi-tally-mark-5",flat:"",outlined:"",dense:"",type:"number"},model:{value:t.blowLayer,callback:function(e){t.blowLayer=e},expression:"blowLayer"}})],1)],1)],1)],1)],1)],1)},B=[],R={name:"MoldInfo",data:()=>({moldWeight:"",moldVolume:"",layersNo:5,blowLayer:25})},I=R,A=(0,h.Z)(I,U,B,!1,null,"4a34d2c1",null),F=A.exports,D=function(){var t=this,e=t._self._c;return e(b.Z,[e(x.Z,{attrs:{cols:"12"}},[e(v.Z,{staticClass:"mx-auto pa-2",attrs:{flat:"",outlined:""}},[e(_.EB,[e("span",{staticClass:"tj-font"},[t._v("مدخلات العينة - DETERMINATION")])]),e(_.ZB,[e(b.Z,t._l(t.layers,(function(s){return e(x.Z,{key:s.name},[e(v.Z,{attrs:{cols:"3"}},[e(_.ZB,[e("p",[t._v(t._s(s.number))]),e(L.Z,{attrs:{label:"Filled",filled:"",dense:""},model:{value:s.sampleWeightPlusMold,callback:function(e){t.$set(s,"sampleWeightPlusMold",e)},expression:"layer.sampleWeightPlusMold"}}),e("p",[t._v(t._s(s.wetSampleWeight))]),e("p",[t._v(t._s(s.wetUnitWeight))]),e("p",[t._v(t._s(s.dryUnitWeight))])],1)],1)],1)})),1)],1)],1)],1),e(x.Z,{attrs:{cols:"12"}},[e(v.Z,{staticClass:"mx-auto pa-2",attrs:{flat:"",outlined:""}},[e(_.EB,[e("span",{staticClass:"tj-font"},[t._v("مدخلات الرطوبة - MOISTURE")])]),e(_.ZB,[e(b.Z,t._l(t.layers,(function(s){return e(x.Z,{key:s.name},[e(v.Z,{attrs:{cols:"3"}},[e(_.ZB,[e("p",[t._v(t._s(s.number))]),e("p",[t._v(t._s(s.sampleWeightPlusMold))]),e("p",[t._v(t._s(s.wetSampleWeight))]),e("p",[t._v(t._s(s.wetUnitWeight))]),e("p",[t._v(t._s(s.dryUnitWeight))])])],1)],1)})),1)],1)],1)],1)],1)},N=[],Y={name:"SampleInputs",data:()=>({layers:[{number:"sample1",sampleWeightPlusMold:"10",wetSampleWeight:"11",wetUnitWeight:"111",dryUnitWeight:"1111"},{number:"sample2",sampleWeightPlusMold:"20",wetSampleWeight:"11",wetUnitWeight:"111",dryUnitWeight:"1111"},{number:"sample3",sampleWeightPlusMold:"30",wetSampleWeight:"11",wetUnitWeight:"111",dryUnitWeight:"1111"},{number:"sample4",sampleWeightPlusMold:"40",wetSampleWeight:"11",wetUnitWeight:"111",dryUnitWeight:"1111"},{number:"sample5",sampleWeightPlusMold:"50",wetSampleWeight:"11",wetUnitWeight:"111",dryUnitWeight:"1111"}]})},V=Y,z=(0,h.Z)(V,D,N,!1,null,"3d4d5d38",null),H=z.exports,X=s(4127),$=function(){var t=this,e=t._self._c;return e(b.Z,[e(x.Z,{attrs:{cols:"12"}},[e(v.Z,{staticClass:"mx-auto pa-2 rounded-lg",attrs:{flat:""}},[e(_.EB,{staticClass:"text-center pa-0"},[e("span",{staticClass:"tj-font mx-auto"},[t._v("النتيجة - Result")])])],1)],1),e(x.Z,{attrs:{cols:"12"}},[e(b.Z,[e(x.Z,{attrs:{cols:"6"}},[e(v.Z,{staticClass:"pa-2",attrs:{flat:"",outlined:""}},[e(_.EB,{attrs:{tag:"h2"}},[e("span",{staticClass:"tj-font"},[t._v("الكثافة العظمى - MAX DRY DENSITY")])]),e(_.ZB,{staticClass:"pa-0"},[e(X.Z,{staticClass:"ma-2",attrs:{color:"primary",outlined:"",pill:""}},[t._v(" "+t._s(t.maxDryDensity)+" "),e("span",{staticClass:"mr-3"},[t._v("gm/cc")])])],1)],1)],1),e(x.Z,{attrs:{cols:"6"}},[e(v.Z,{staticClass:"pa-2",attrs:{flat:"",outlined:""}},[e(_.EB,{attrs:{tag:"h2"}},[e("span",{staticClass:"tj-font"},[t._v("الرطوبة المثالية - OPT. MOIST. CONT")])]),e(_.ZB,{staticClass:"pa-0"},[e(X.Z,{staticClass:"ma-2",attrs:{color:"primary",outlined:"",pill:""}},[t._v(" "+t._s(t.OptMoistCont)+" "),e("span",{staticClass:"mr-3"},[t._v("%")])])],1)],1)],1)],1)],1)],1)},G=[],J={name:"ResultsSection",data:()=>({maxDryDensity:2.02,OptMoistCont:10.2})},q=J,K=(0,h.Z)(q,$,G,!1,null,"edcffd2c",null),Q=K.exports,tt={name:"HomeView",components:{ResultsSection:Q,SampleInputs:H,MoldInfo:F,ResultChart:E},data:()=>({items:[{text:"وزن القالب + العينة - WT.OF SAMPLE+MOLD",icon:"mdi-folder"},{text:"وزن العينة رطبة - WT.OF WET SAMPLE",icon:"mdi-account-multiple"},{text:"الكثافة الرطبة - WET UNIT WT.",icon:"mdi-star"},{text:"الكثافة الجافة- DRY UNIT WT.",icon:"mdi-history"}]})},et=tt,st=(0,h.Z)(et,C,W,!1,null,null,null),at=st.exports;a.ZP.use(y.Z);const lt=[{path:"/",name:"home",component:at}],nt=new y.Z({mode:"history",base:"/proctor-compaction-test/",routes:lt});var ot=nt,it=s(629);a.ZP.use(it.ZP);var rt=new it.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),ct=s(5222),ut=s(7556),pt=s(8308);a.ZP.use(ct.Z);var ft=new ct.Z({rtl:!0,lang:{locales:{en:pt.Z,ar:ut.Z},current:"ar"},icons:{iconfont:"mdi"}});a.ZP.config.productionTip=!1,new a.ZP({router:ot,store:rt,vuetify:ft,render:t=>t(g)}).$mount("#app")}},e={};function s(a){var l=e[a];if(void 0!==l)return l.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,l,n){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],l=t[u][1],n=t[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[r])}))?a.splice(r--,1):(i=!1,n<o&&(o=n));if(i){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,l,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var l,n,o=a[0],i=a[1],r=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(r)var u=r(s)}for(e&&e(a);c<o.length;c++)n=o[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunkproctor_compaction_test"]=self["webpackChunkproctor_compaction_test"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9797)}));a=s.O(a)})();
//# sourceMappingURL=app.e091fb21.js.map