webpackJsonp([11],{"7zck":function(e,t){},Cnjq:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),o=r("3EgV"),a=r.n(o);r("7zck"),r("gJtD");n.default.use(a.a,{iconfont:"mdi"});var i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{app:"",color:"teal accent-2"}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",{staticClass:"font-weight-medium"},[e._v(e._s(e.Title))])]),e._v(" "),r("v-spacer"),e._v(" "),r("router-link",{attrs:{to:"/form"}},[r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"light-blue"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")])],1)],1)],1),e._v(" "),r("v-content",[e._t("default")],2)],1)},staticRenderFns:[]},l={name:"App",components:{NavBar:r("VU/8")({data:function(){return{Title:"Samma Arang Website"}}},i,!1,null,null,null).exports},data:function(){return{}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("nav-bar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]},s=r("VU/8")(l,u,!1,null,null,null).exports,c=r("/ocq"),d=r("qVsQ"),p=r("kxiW"),f=(r("NYxO"),{name:"register-group",data:function(){return{confirmedRegis:"",valid:!1,idGroup:"",groupId:"",groupIdOld:"",groupName:"",groupMember:"",coordinator:"",coordinatorTel:"",create:null,groups:[],userId:null,groupIdLine:null,displayName:null,bundleForm:{},profile:"",seen:""}},created:function(){var e=this;d.a.collection("yodByUser").get().then(function(t){t.forEach(function(t){var r={id:t.id};e.groups.push(r)});var r=e.groups.length;console.log(r)})},mounted:function(){var e=this;this.$liff.init(function(t){e.userId=t.context.userId,console.log(userId),e.getProfile()},function(e){console.log(e)})},methods:{clear:function(){this.$refs.regForm.reset(),this.bundleForm={}},confirmed:function(){this.$refs.regForm.validate(),this.bundleForm={groupId:this.groupId,groupName:this.groupName,groupMember:this.groupMember,coordinator:this.coordinator,coordinatorTel:this.coordinatorTel,groupIdOld:this.groupIdOld}},getProfile:function(){var e=this;this.$liff.getProfile().then(function(t){e.profile=t}).catch(function(e){return alert("Error getting Profile: "+e)})},saveRegisterGroup:function(){d.a.collection("yodByUser").doc("G"+this.groups.length).set({groupId:"G"+this.groups.length,groupName:this.groupName,groupMember:this.groupMember,coordinator:this.coordinator,coordinatorTel:this.coordinatorTel,groupIdOld:this.groupIdOld,lineId:""+this.userId,lineProfile:""+this.profile,create:p.firestore.FieldValue.serverTimestamp()}).catch(function(e){return console.log(err)})}}}),m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{column:"",wrap:"","align-center":"","justify-center":""}},[r("v-flex"),e._v(" "),r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"teal darken-2"}},[r("v-toolbar-title",[e._v("สมัครสมาชิกส่งยอดแบบเป็นทีม")])],1),e._v(" "),r("v-card-text",[r("v-flex",[e._v(e._s(e.userId)+" -- "+e._s(e.profile))]),e._v(" "),r("v-form",{ref:"regForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.seen?r("v-text-field",{attrs:{disabled:"",id:"hide","prepend-icon":"G"},model:{value:e.groupId,callback:function(t){e.groupId=t},expression:"groupId"}}):e._e(),e._v(" "),e.seen?r("v-text-field",{attrs:{disabled:"",id:"useridprofilefield"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}):e._e(),e._v(" "),e.seen?r("v-text-field",{attrs:{disabled:"",id:"groupidfield"},model:{value:e.profile,callback:function(t){e.profile=t},expression:"profile"}}):e._e(),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"account_circle",rules:[function(e){return!!e||"กรุณากรอกชื่อทีมของท่าน"}],name:"results",label:"ชื่อกลุ่ม"},model:{value:e.groupName,callback:function(t){e.groupName=t},expression:"groupName"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"group",rules:[function(e){return!!e||"กรุณากรอกจำนวนสมาชิกทีมของท่าน"}],name:"results",label:"จำนวนสมาชิก",type:"number"},model:{value:e.groupMember,callback:function(t){e.groupMember=e._n(t)},expression:"groupMember"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"face",name:"results",label:"ผู้ประสานงาน"},model:{value:e.coordinator,callback:function(t){e.coordinator=t},expression:"coordinator"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"call",name:"results",label:"เบอร์โทรผู้ประสานงาน",type:"social"},model:{value:e.coordinatorTel,callback:function(t){e.coordinatorTel=t},expression:"coordinatorTel"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"G",name:"results",label:"รหัสกลุ่มเดิม (ถ้ามี)"},model:{value:e.groupIdOld,callback:function(t){e.groupIdOld=t},expression:"groupIdOld"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"red lighten-1"},on:{click:function(t){return e.clear()}}},[e._v("ล้างฟอร์ม")]),e._v(" "),r("v-spacer"),e._v(" "),r("router-link",{attrs:{to:{name:"view-noid",params:{groupName:this.groupName}}}},[r("v-btn",{attrs:{disabled:!e.valid,color:"green darken-4",round:"",dark:"",large:""},on:{click:function(t){return e.saveRegisterGroup()}}},[e._v("สมัคร\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var v=r("VU/8")(f,m,!1,function(e){r("Cnjq")},null,null).exports;n.default.use(c.a);var g=new c.a({routes:[{path:"/",name:"register-group",component:v},{path:"/group",name:"group-list",component:function(){return r.e(5).then(r.bind(null,"IKGX"))}},{path:"/editgroup/:groupName",name:"edit-group",component:function(){return r.e(6).then(r.bind(null,"nKmq"))}},{path:"/view/:groupId",name:"view-group",component:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"ITGu"))}},{path:"/viewnoid/:groupName",name:"view-noid",component:function(){return r.e(3).then(r.bind(null,"2/M8"))}},{path:"/viewyodgroup/:groupId",name:"view-yod-group",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"7YCx"))}},{path:"/form",name:"form-submit",component:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"fXj9"))}},{path:"/edit/:employeeId",name:"edit-employee",component:function(){return r.e(9).then(r.bind(null,"6bic"))}},{path:"/new",name:"new-employee",component:function(){return r.e(8).then(r.bind(null,"xWWj"))}},{path:"/:employeeId",name:"view-employee",component:function(){return r.e(7).then(r.bind(null,"1a6f"))}}]}),h=r("mtWM"),b=r.n(h),_=r("Rf8U"),I=r.n(_);n.default.use(I.a,b.a),n.default.config.productionTip=!1,n.default.prototype.$liff=window.liff,new n.default({el:"#app",router:g,components:{App:s},template:"<App/>"})},gJtD:function(e,t){},qVsQ:function(e,t,r){"use strict";var n=r("O4tu"),o=r.n(n),a=(r("Wk+B"),o.a.initializeApp({apiKey:"AIzaSyCZsqhI5NirKo-gx9yCp9lLPyGYESNBv5s",authDomain:"testsamma.firebaseapp.com",databaseURL:"https://testsamma.firebaseio.com",projectId:"testsamma",storageBucket:"testsamma.appspot.com",messagingSenderId:"45631338515",appId:"1:45631338515:web:f98fbba65a6677a0"}));a.firestore().enablePersistence();t.a=a.firestore()}},["NHnr"]);
//# sourceMappingURL=app.d18e5494da2054b1f552.js.map