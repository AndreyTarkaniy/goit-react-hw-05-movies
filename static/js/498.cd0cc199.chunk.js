"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[498],{123:function(t,n,e){e.d(n,{Df:function(){return s},Gc:function(){return d},Op:function(){return f},jr:function(){return v},t2:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3/",o="7b9bc8a9cecedcc4e50de44b7a3d7df5",s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/all/day?api_key=").concat(o));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,r=e.data,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,r=e.data,console.log(r.results),t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast.map((function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},323:function(t,n,e){e.d(n,{a:function(){return u}});var r="Loader_wrap__WJ0KW",a="Loader_spinner__DydzZ",c=e(184),u=function(){return(0,c.jsx)("div",{className:r,children:(0,c.jsx)("div",{className:a})})}},498:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(689),o=e(791),s=e(184),p=function(t){var n=t.reviews;return(0,s.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author:",e]}),(0,s.jsx)("p",{children:r})]},n)}))})},f=e(123),d=e(323),v=function(){var t=(0,i.UO)().movieId,n=(0,o.useState)([]),e=(0,a.Z)(n,2),c=e[0],v=e[1],h=(0,o.useState)(!1),l=(0,a.Z)(h,2),m=l[0],x=l[1],w=(0,o.useState)(null),_=(0,a.Z)(w,2)[1];return(0,o.useEffect)((function(){(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,f.jr)(t);case 4:e=n.sent,v(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_("Oops");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))()}),[t]),(0,s.jsxs)("div",{children:[0!==c.length?(0,s.jsx)(p,{reviews:c}):(0,s.jsx)("p",{children:"We, don't have any reviews for this movie."}),m&&(0,s.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=498.cd0cc199.chunk.js.map