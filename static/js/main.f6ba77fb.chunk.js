(this["webpackJsonppowerpoint-karaoke-web"]=this["webpackJsonppowerpoint-karaoke-web"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(0),r=n.n(i),s=n(8),c=n.n(s),o=(n(79),n(27)),l=n(28),u=n(30),h=n(29),d=(n(80),n(35)),p=n(11),j=n(156),b=n(148),m=n(154),g=n(46),O=n(146),f=n(147),v=n(149),S=n(150),x=n(155),w=n(4),k=n(151),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={slideNum:3,isError:void 0!==a.props.location.state},a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({slideNum:e.target.value})}},{key:"itemText",value:function(e){return e.toString().replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+65248)}))}},{key:"render",value:function(){var e=this,t=Array(18).fill(0).map((function(e,t){return t+3})),n=this.props.classes;return Object(a.jsxs)("div",{className:"App-container",children:[Object(a.jsxs)(g.a,{variant:"h2",children:["\u30d1\u30ef\u30dd\u30ab\u30e9\u30aa\u30b1",Object(a.jsx)(O.a,{})]}),Object(a.jsx)(g.a,{className:n.subtitle,children:"power point karaoke"}),Object(a.jsx)(g.a,{variant:"subtitle1",className:n.mb,children:"\u30e9\u30f3\u30c0\u30e0\u306b\u51fa\u3066\u304f\u308b\u753b\u50cf\u3092\u4f7f\u3063\u3066\u5373\u8208\u3067\u30d7\u30ec\u30bc\u30f3\u3092\u3059\u308b\u30d1\u30ef\u30dd\u30ab\u30e9\u30aa\u30b1\u304c\u3067\u304d\u308b\u30b5\u30a4\u30c8\u3067\u3059\uff01"}),Object(a.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:n.grid,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(g.a,{variant:"h6",children:"\u30b9\u30e9\u30a4\u30c9\u306e\u679a\u6570"})}),Object(a.jsx)(f.a,{className:n.gridItem,children:Object(a.jsx)(b.a,{children:Object(a.jsx)(m.a,{labelId:"slideNum-select-label",value:this.state.slideNum,onChange:function(t){return e.handleChange(t)},children:t.map((function(t){return Object(a.jsx)(j.a,{value:t,children:Object(a.jsx)(v.a,{primary:e.itemText(t)})},t)}))})})}),Object(a.jsx)(f.a,{children:Object(a.jsx)(g.a,{variant:"h6",children:"\u679a"})})]}),this.state.isError?Object(a.jsx)("div",{children:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"}):"",Object(a.jsxs)(S.a,{variant:"contained",color:"primary",component:d.b,className:n.mb,to:{pathname:"/slide",state:{slideNum:this.state.slideNum}},children:[Object(a.jsx)(k.a,{className:n.btnIcon}),"\u30b9\u30bf\u30fc\u30c8\uff01"]})]})}}]),n}(r.a.Component),C=Object(w.a)((function(e){return Object(x.a)({subtitle:{marginBottom:e.spacing(4),fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",fontWeight:500,fontSize:"0.875rem",lineHeight:1.75,textTransform:"uppercase",letterSpacing:e.spacing(2)},mb:{marginBottom:e.spacing(6)},btnIcon:{marginRight:e.spacing(1)},gridItem:{marginRight:e.spacing(1),marginLeft:e.spacing(1)},grid:{margin:e.spacing(4)}})}),{withTheme:!0})(y),E=n(51),N=n.n(E),_=n(66),T=n(67),A=n.n(T),P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={slideNum:a.props.location.state.slideNum,images:[],page:0,show:!1},a.getSlidePictures().then(),a}return Object(l.a)(n,[{key:"getSlidePictures",value:function(){var e=Object(_.a)(N.a.mark((function e(){var t,n,a,i,r,s=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object({NODE_ENV:"production",PUBLIC_URL:"/powerpoint-karaoke-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASEURL,n=Object({NODE_ENV:"production",PUBLIC_URL:"/powerpoint-karaoke-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_UNSPLASH_ACCESS_KEY,a=t+"/photos/random?count="+this.state.slideNum,i=[],e.next=6,A.a.get(a,{headers:{Authorization:"Client-ID "+n}}).then((function(e){var t=window.innerWidth.toString(),n=window.innerHeight.toString();e.data.forEach((function(e){i.push(e.urls.raw+"&fit=max&w="+t+"&h="+n)}))}),(function(){s.props.history.push("/",{isError:!0})}));case 6:r=0,i.forEach((function(e){var t=new Image;t.src=e,t.onload=function(){++r===i.length&&s.setState({show:!0,images:i})}}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"keyDown",value:function(e){[32,39].includes(e.keyCode)&&this.state.page<this.state.images.length-1&&this.setState({page:this.state.page+1}),37===e.keyCode&&0!==this.state.page&&this.setState({page:this.state.page-1})}},{key:"nowSlide",value:function(){return this.state.images[this.state.page]}},{key:"render",value:function(){var e=this;return this.state.show?Object(a.jsx)("div",{className:"App-container",onKeyDown:function(t){return e.keyDown(t)},tabIndex:0,children:Object(a.jsx)("img",{src:this.nowSlide(),alt:"slide"})}):Object(a.jsx)("div",{className:"App-container",children:"waiting..."})}}]),n}(i.Component),R=Object(p.e)(P),D=n(68),I=n(153),F=n(45),H=n(152),K=Object(D.a)({palette:{primary:{main:F.a[800]},secondary:{main:H.a[600]}},typography:{fontFamily:"'Kosugi Maru', sans-serif"}}),L=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(I.a,{theme:K,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d.a,{basename:"/powerpoint-karaoke-web",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{exact:!0,path:"/",component:C}),Object(a.jsx)(p.a,{exact:!0,path:"/slide",component:R})]})})})})}}]),n}(r.a.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),W()},79:function(e,t,n){},80:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.f6ba77fb.chunk.js.map