"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{197:function(n,e,t){t.d(e,{Hx:function(){return l},Tg:function(){return s},Y5:function(){return p},_p:function(){return d},on:function(){return o},xc:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="bdf7291b5a7be013f42f0c0b2cf5cd5d";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d="https://image.tmdb.org/t/p/w500"},387:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,c=t(861),u=t(439),i=t(757),s=t.n(i),o=t(791),p=t(689),f=t(197),l=t(168),d=t(444),v=d.ZP.ul(r||(r=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    list-style: none;\n    max-width: 1024px;\n    border: 1px solid black;\n    padding: 8px 20px;\n    text-align: justify;\n"]))),h=d.ZP.b(a||(a=(0,l.Z)(["\n    display: inline-block;\n    margin-bottom: 10px;\n"]))),x=t(184),g=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.UO)().movieId;return(0,o.useEffect)((function(){(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Hx)(a);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(Error);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[a]),(0,x.jsx)(x.Fragment,{children:t&&t.length?(0,x.jsx)(v,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(h,{children:["Author: ",t]}),(0,x.jsx)("p",{children:r})]},e)}))}):(0,x.jsx)("div",{children:"We don't have reviews"})})}}}]);
//# sourceMappingURL=387.16a0405a.chunk.js.map