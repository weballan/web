webpackJsonp([23],{"+FfW":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={name:"ComHeader",props:{title:{type:String,default:""}},data:function(){return{historyShow:!1,headerShow:!0,messageShow:!1,backShow:!0}},watch:{$route:function(){switch(this.historyShow="game"===this.$route.name||"read"===this.$route.name,this.headerShow=!("task"===this.$route.name||"goldcoin"===this.$route.name||"balance"===this.$route.name||"foxgrass"===this.$route.name),this.messageShow="user"===this.$route.name,this.$route.name){case"game":case"read":case"task":case"user":this.backShow=!1;break;default:this.backShow=!0}}},methods:{historyHandle:function(){this.$emit("history-chang")},message:function(){this.$router.push({name:"message"})},backChang:function(){this.$router.go(-1)}},computed:{},mounted:function(){}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.headerShow,expression:"headerShow"}],staticClass:"header"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.backShow,expression:"backShow"}],staticClass:"left-back",on:{click:e.backChang}},[n("i")]),e._v(" "),n("h1",{domProps:{textContent:e._s(e.title)}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.historyShow,expression:"historyShow"}],staticClass:"right-colmun righttxt",on:{click:e.historyHandle}},[e._v("历史")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.messageShow,expression:"messageShow"}],staticClass:"right-colmun right-icon",on:{click:e.message}},[n("i",{staticClass:"icomessage"}),e._v(" "),n("span")])])},staticRenderFns:[]},i=n("VU/8")(o,r,!1,null,null,null).exports,s=n("wSez"),l=n.n(s),u={name:"App",data:function(){return{tranName:"",path:""}},methods:{historyChang:function(){this.$router.push("/"+this.path+"/history")}},watch:{$route:function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;this.transitionName=n===a?"":n<a?"slide-right":"slide-left",this.path=this.$route.name}},computed:{},components:{ComHeader:i},mounted:function(){}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("com-header",{attrs:{title:this.$route.meta.title},on:{"history-chang":this.historyChang}}),this._v(" "),t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};var m=n("VU/8")(u,h,!1,function(e){n("+FfW")},null,null).exports,c=n("/ocq"),d=[{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e(14).then(n.bind(null,"ook+"))}},{path:"/register",name:"register",component:function(){return n.e(21).then(n.bind(null,"+87i"))}},{path:"/game",name:"game",meta:{title:"游戏"},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"sEeT"))},alias:"/"},{path:"/game/downloadList",name:"downloadList",meta:{title:"手游下载"},component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"+exe"))}},{path:"/game/download/deatils",name:"downloadDeatils",meta:{title:"游戏下载"},component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"rxmK"))}},{path:"/game/list",name:"gamelist",meta:{title:"新品推荐"},component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"+Ch/"))}},{path:"/game/history",name:"gameHistory",meta:{title:"我玩过的"},component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"/GQy"))}},{path:"/read",name:"read",meta:{title:"阅读"},component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"wwZD"))}},{path:"/read/list",name:"readList",meta:{title:"新书精选"},component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"Dq/k"))}},{path:"/read/history",name:"readHistory",meta:{title:"我看过的"},component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"IMOm"))}},{path:"/task",name:"task",meta:{title:"任务"},component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"+wpU"))}},{path:"/user",name:"user",meta:{title:"我的"},component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"+c0R"))}},{path:"/user/money",name:"money",component:function(){return n.e(18).then(n.bind(null,"paHx"))},children:[{path:"goldcoin",name:"goldcoin",component:function(){return n.e(19).then(n.bind(null,"9WiT"))}},{path:"balance",name:"balance",component:function(){return n.e(20).then(n.bind(null,"dhZI"))}},{path:"foxgrass",name:"foxgrass",component:function(){return n.e(15).then(n.bind(null,"CJpY"))}}]},{path:"/user/money/forward",name:"forward",meta:{title:"零钱提现"},component:function(){return n.e(9).then(n.bind(null,"TCih"))}},{path:"/user/money/historyforward",name:"historyForward",meta:{title:"提现记录"},component:function(){return n.e(10).then(n.bind(null,"tmw6"))}},{path:"/user/message",name:"message",meta:{title:"消息"},component:function(){return n.e(17).then(n.bind(null,"hInu"))}},{path:"/user/share",name:"share",meta:{title:"邀请好友"},component:function(){return n.e(4).then(n.bind(null,"/Dqa"))}},{path:"/user/share/details",name:"shareDetails",meta:{title:"分享赚钱"},component:function(){return n.e(7).then(n.bind(null,"sfhl"))}}];a.default.use(c.a);var p=new c.a({routes:d}),f=n("9rMa"),w={},g={},v={},b={};a.default.use(f.a);var y=new f.a.Store({state:w,getters:g,mutations:v,actions:b}),k=n("//Fk"),x=n.n(k),S=n("aozt"),$=n.n(S);$.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",$.a.defaults.withCredentials=!0;var C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,a=void 0===n?"get":n,o=t.params,r=void 0===o?null:o,i=(t.data,t.headers),s=void 0===i?{}:i;return $()({url:""+e,method:a,params:r,headers:s,timeout:1e4}).then(function(e){return 200===e.data.code?x.a.resolve(e.data):x.a.reject(e.data)}).catch(function(e){var t=e.code;return e.response?500===t?x.a.reject({code:500,message:"服务器内部错误，请刷新重试！"}):404===t?x.a.reject({code:404,message:"数据接口不存在，请联系管理员！"}):x.a.reject({code:t,message:e.response.statusText}):x.a.reject(e)})},P=n("Q+Gw"),_=n.n(P),H=function(e){if(e)return e.slice(0,3)+"****"+e.slice(-4)};a.default.filter("formatDate",_.a),a.default.filter("formatPhone",H);n("rx0o"),n("xnyV");a.default.use(l.a),a.default.config.productionTip=!1,a.default.prototype.$http=C,new a.default({el:"#app",router:p,store:y,components:{App:m},template:"<App/>"})},"Q+Gw":function(e,t){},rx0o:function(e,t){},xnyV:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.65c626020473eaf7ee43.js.map