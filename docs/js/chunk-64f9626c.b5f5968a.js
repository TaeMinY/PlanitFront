(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f9626c"],{"2da9":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("div",{staticClass:"todo__title"},[o("div",[t._v("Plans")]),o("img",{staticStyle:{cursor:"pointer"},attrs:{alt:"create",src:a("90b6"),width:"42px"},on:{click:function(e){return t.create()}}})]),0!=t.todoData.length?o("div",{staticClass:"todo__main"},t._l(t.todoData,(function(e,a){return o("div",{key:a,staticClass:"todo__box"},[o("div",{staticClass:"todo__box__article"},[e.iscomplete?o("div",{staticClass:"todo__box__dday"},[t._v("Complete!")]):t.day(e.endDay)<=0?o("div",{staticClass:"todo__box__dday"},[t._v("Expired")]):o("div",{staticClass:"todo__box__dday"},[t._v("D - "+t._s(t.day(e.endDay)))]),o("div",{staticClass:"todo__box__title"},[t._v(t._s(e.title))]),o("div",{staticClass:"todo__box__text"},[t._v(t._s(e.text))])]),o("div",{staticClass:"todo__box__day"},[o("div",{staticClass:"todo__box__startday"},[t._v(t._s(e.startDay))]),o("div",{staticClass:"todo__box__endday"},[t._v(t._s(e.endDay))])]),0==e.iscomplete?o("progress",{staticClass:"todo__box__progress",attrs:{max:t.dayBetween(e.startDay,e.endDay)},domProps:{value:t.dayBetween(e.startDay,e.endDay)-t.day(e.endDay)}}):o("progress",{staticClass:"todo__box__progress",attrs:{max:t.dayBetween(e.startDay,e.endDay)},domProps:{value:t.dayBetween(e.startDay,e.endDay)-t.day(e.endDay)+1}}),o("div",{staticStyle:{display:"flex",width:"100%","align-items":"center","justify-content":"center","margin-top":"32px"}},[0==e.iscomplete?o("div",{staticClass:"todo__complete",on:{click:function(a){return t.complete(e)}}},[t._v("목표 달성")]):t._e(),o("div",{staticClass:"todo__delete",on:{click:function(a){return t.remove(e)}}},[t._v("삭제하기")])])])})),0):o("div",{staticClass:"todoed"},[o("div",{staticClass:"todoed__title"},[t._v("새로운 목표를 추가해보세요")]),o("img",{attrs:{src:a("a26f"),alt:"사진",width:"350px",height:"350px"}}),o("div",{staticClass:"todoed__button",on:{click:function(e){return t.add()}}},[o("span",[t._v("추가하기")])])])])},s=[],n={data:function(){return{todoData:[],valueDeterminate:50}},computed:{},mounted:function(){},methods:{complete:function(t){var e=this,a=new Date,o=a.getDate(),s=a.getMonth()+1,n=a.getFullYear();o<10&&(o="0"+o),s<10&&(s="0"+s),a=n+"-"+s+"-"+o,0==t.iscomplete&&this.$store.dispatch("TODO__COMPLETE",{id:t.id,time:a,token:localStorage.getItem("token")}).then((function(t){e.todoData=t.data.userdata.todo,e.$store.dispatch("token",{token:localStorage.getItem("token")}).then((function(t){1==t.data.result&&(e.$store.state.userdata=t.data.userdata)})).catch((function(t){}))}))},remove:function(t){var e=this;this.$store.dispatch("TODO__DELETE",{id:t.id,token:localStorage.getItem("token")}).then((function(t){e.$store.dispatch("token",{token:localStorage.getItem("token")}).then((function(t){1==t.data.result&&(e.todoData=t.data.userdata.userdata.todo,e.$store.state.userdata=t.data.userdata)})).catch((function(t){}))})).catch((function(t){}))},day:function(t){var e=new Date,a=e.getDate(),o=e.getMonth()+1,s=e.getFullYear();a<10&&(a="0"+a),o<10&&(o="0"+o),e=s+"-"+o+"-"+a;var n=e instanceof Date?e:new Date(e),i=t instanceof Date?t:new Date(t);n=new Date(n.getFullYear(),n.getMonth()+1,n.getDate()),i=new Date(i.getFullYear(),i.getMonth()+1,i.getDate());var d=Math.abs(i.getTime()-n.getTime());return d=Math.ceil(d/864e5),d},dayBetween:function(t,e){var a=new Date(t),o=a.getDate(),s=a.getMonth()+1,n=a.getFullYear();o<10&&(o="0"+o),s<10&&(s="0"+s),a=n+"-"+s+"-"+o;var i=a instanceof Date?a:new Date(a),d=e instanceof Date?e:new Date(e);i=new Date(i.getFullYear(),i.getMonth()+1,i.getDate()),d=new Date(d.getFullYear(),d.getMonth()+1,d.getDate());var r=Math.abs(d.getTime()-i.getTime());return r=Math.ceil(r/864e5),r},add:function(){this.$router.push("/wrap/main/todocreate")},create:function(){this.$router.push("/wrap/main/todocreate")}},created:function(){var t=this;this.$store.state.status.plans=!0,this.$store.state.status.calendar=!1,this.$store.state.status.memo=!1,this.$store.dispatch("FIND__DATA",{token:localStorage.getItem("token")}).then((function(e){1==e.data.result&&(t.todoData=e.data.userdata.todo)})).catch((function(t){}))},beforeDestory:function(){this.$store.state.status.plans=!1,this.$store.state.status.calendar=!1,this.$store.state.status.memo=!1}},i=n,d=(a("931c"),a("2877")),r=Object(d["a"])(i,o,s,!1,null,null,null);e["default"]=r.exports},"50fb":function(t,e,a){},"90b6":function(t,e,a){t.exports=a.p+"img/playlist_add-24px.70b470fa.svg"},"931c":function(t,e,a){"use strict";var o=a("50fb"),s=a.n(o);s.a},a26f:function(t,e,a){t.exports=a.p+"img/undraw__todo.cfb49f55.svg"}}]);
//# sourceMappingURL=chunk-64f9626c.b5f5968a.js.map