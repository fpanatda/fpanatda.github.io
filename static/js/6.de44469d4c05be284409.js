webpackJsonp([6],{nKmq:function(o,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("qVsQ"),t={name:"edit-group",data:function(){return{valid:!1,groupId:"",groupName:"",groupMember:"",coordinator:"",coordinatorTel:"",yodSamma:""}},beforeRouteEnter:function(o,a,e){r.a.collection("yodByUser").where("groupName","==",o.params.groupName).get().then(function(o){o.forEach(function(o){e(function(a){a.groupId=o.data().groupId,a.groupName=o.data().groupName,a.groupMember=o.data().groupMember,a.coordinator=o.data().coordinator,a.coordinatorTel=o.data().coordinatorTel,a.yodSamma=o.data().yodSamma})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var o=this;r.a.collection("yodByUser").where("groupName","==",this.$route.params.groupName).get().then(function(a){a.forEach(function(a){o.groupId=a.data().groupId,o.groupName=a.data().groupName,o.groupMember=a.data().groupMember,o.coordinator=a.data().coordinator,o.coordinatorTel=a.data().coordinatorTel,o.yodSamma=a.data().yodSamma})})},updateEmployee:function(){var o=this;r.a.collection("yodByUser").where("groupName","==",this.$route.params.groupName).get().then(function(a){a.forEach(function(a){a.ref.update({groupId:o.groupId,groupName:o.groupName,groupMember:o.groupMember,coordinator:o.coordinator,coordinatorTel:o.coordinatorTel,yodSamma:o.yodSamma}).then(function(){o.$router.push("/group")})})})}}},n={render:function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("v-container",{attrs:{fluid:"","grid-list-md":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"teal darken-2"}},[e("v-toolbar-title",[o._v("แก้ไขข้อมูลกลุ่ม")])],1),o._v(" "),e("v-card-text",[e("v-form",{attrs:{"lazy-validation":""}},[e("v-text-field",{attrs:{"prepend-icon":"G"},model:{value:o.groupId,callback:function(a){o.groupId=a},expression:"groupId"}}),o._v(" "),e("v-text-field",{attrs:{disabled:"",label:"ชื่อกลุ่ม"},model:{value:o.groupName,callback:function(a){o.groupName=a},expression:"groupName"}}),o._v(" "),e("v-text-field",{attrs:{label:"จำนวนสมาชิก"},model:{value:o.groupMember,callback:function(a){o.groupMember=a},expression:"groupMember"}}),o._v(" "),e("v-text-field",{attrs:{label:"ผู้ประสานงาน"},model:{value:o.coordinator,callback:function(a){o.coordinator=a},expression:"coordinator"}}),o._v(" "),e("v-text-field",{attrs:{label:"เบอร์โทรผู้ประสานงาน"},model:{value:o.coordinatorTel,callback:function(a){o.coordinatorTel=a},expression:"coordinatorTel"}}),o._v(" "),e("v-text-field",{attrs:{label:"ยอดคำภาวนา"},model:{value:o.yodSamma,callback:function(a){o.yodSamma=a},expression:"yodSamma"}})],1)],1),o._v(" "),e("v-card-actions",[e("v-btn",{attrs:{flat:"",color:"red lighten-1",to:"/group"}},[o._v("back")]),o._v(" "),e("v-spacer"),o._v(" "),e("v-btn",{attrs:{color:"green darken-4",round:"",dark:"",large:""},on:{click:function(a){return o.updateEmployee()}}},[o._v("submit\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]},d=e("VU/8")(t,n,!1,null,null,null);a.default=d.exports}});
//# sourceMappingURL=6.de44469d4c05be284409.js.map