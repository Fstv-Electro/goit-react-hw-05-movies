"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{197:function(n,e,t){t.d(e,{Hx:function(){return l},Tg:function(){return o},Y5:function(){return p},_p:function(){return d},on:function(){return s},xc:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="bdf7291b5a7be013f42f0c0b2cf5cd5d",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d="https://image.tmdb.org/t/p/w500"},736:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,u=t(861),i=t(439),o=t(757),s=t.n(o),p=t(791),f=t(689),l=t(197),d=t(168),v=t(444),h=v.ZP.ul(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    margin: 0 auto;\n    padding: 0;\n\n"]))),g=v.ZP.li(a||(a=(0,d.Z)(["\n    position: relative;\n"]))),m=v.ZP.img(c||(c=(0,d.Z)(["\n    width: 280px;\n    height: 320px;\n    border-radius: 12px;\n    object-fit: cover;\n"]))),x=t(184),w=function(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.xc)(a);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(Error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[a]),(0,x.jsx)(x.Fragment,{children:t&&t.length?(0,x.jsx)(h,{children:t.map((function(n){var e=n.id,t=n.profile_path,r=n.name;return(0,x.jsxs)(g,{children:[(0,x.jsx)(m,{src:t?l._p+t:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",alt:r}),(0,x.jsx)("p",{children:r})]},e)}))}):(0,x.jsx)("div",{children:"No info about cast of the movie"})})}}}]);
//# sourceMappingURL=736.3e75a792.chunk.js.map