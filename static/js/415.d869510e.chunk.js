"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{123:function(t,n,r){r.d(n,{Df:function(){return s},Gc:function(){return d},Op:function(){return p},jr:function(){return v},t2:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(243),i="https://api.themoviedb.org/3/",o="7b9bc8a9cecedcc4e50de44b7a3d7df5",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/all/day?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return r=t.sent,e=r.data,console.log(e.results),t.abrupt("return",e.results.map((function(t){return{id:t.id,title:t.title}})));case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast.map((function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return r=t.sent,e=r.data,console.log(e.results),t.abrupt("return",e.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},323:function(t,n,r){r.d(n,{a:function(){return u}});var e="Loader_wrap__WJ0KW",a="Loader_spinner__DydzZ",c=r(184),u=function(){return(0,c.jsx)("div",{className:e,children:(0,c.jsx)("div",{className:a})})}},741:function(t,n,r){r.d(n,{O:function(){return u}});var e=r(689),a=r(87),c=r(184),u=function(t){var n=t.movies,r=(0,e.TH)();return(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})}},415:function(t,n,r){r.r(n);var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),o=r(741),s=r(323),f=r(123),p=r(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],d=(0,i.useState)(!1),v=(0,a.Z)(d,2),l=v[0],h=v[1],m=(0,i.useState)(null),x=(0,a.Z)(m,2)[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,f.Df)();case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),x("Oops");case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.O,{movies:r}),l&&(0,p.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=415.d869510e.chunk.js.map