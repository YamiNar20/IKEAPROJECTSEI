(()=>{"use strict";var e,n,t,o={459:(e,n,t)=>{var o=t(526),r=t(470),a=t(397),s=t(277),l=t(701),c=t.n(l),i=t(236),A=t.n(i),u=t(80),d=t.n(u),m=t(850),p=t.n(m),f=t(182),v=t.n(f),h=t(213),y=t.n(h),g=t(797),C={};function b(e,n,t,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(o,r)}function E(e){return x.apply(this,arguments)}function x(){var e;return e=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function*(){const o={method:n};t&&(o.headers={"Content-Type":"application/json"},o.body=JSON.stringify(t));const r=O();r&&(o.headers=o.headers||{},o.headers.Authorization="Bearer ".concat(r));const a=yield fetch(e,o);if(a.ok)return a.json();throw new Error("Bad Request")}()},x=function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){b(a,o,r,s,l,"next",e)}function l(e){b(a,o,r,s,l,"throw",e)}s(void 0)}))},x.apply(this,arguments)}C.styleTagTransform=y(),C.setAttributes=p(),C.insert=d().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=v(),c()(g.Z,C),g.Z&&g.Z.locals&&g.Z.locals;const w="/api/users";function Z(e,n,t,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(o,r)}function S(){return(e=function*(e){const n=yield function(e){return E(w,"POST",e)}(e);return localStorage.setItem("token",n),I()},S=function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){Z(a,o,r,s,l,"next",e)}function l(e){Z(a,o,r,s,l,"throw",e)}s(void 0)}))}).apply(this,arguments);var e}function O(){const e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function I(){const e=O();return e?JSON.parse(atob(e.split(".")[1])).user:null}const N="/api/orders";function k(){return E("".concat(N,"/cart"))}var B=t(634),P={};P.styleTagTransform=y(),P.setAttributes=p(),P.insert=d().bind(null,"head"),P.domAPI=A(),P.insertStyleElement=v(),c()(B.Z,P),B.Z&&B.Z.locals&&B.Z.locals;var T=t(934),_={};function U(e){let{user:n,setUser:t,pexelsData:r,setPexelsData:a}=e;return console.log(n),o.createElement("div",{className:"home-screen"},o.createElement("h1",null,"What's Your Style?"),o.createElement("div",{className:"pexels-content"}))}_.styleTagTransform=y(),_.setAttributes=p(),_.insert=d().bind(null,"head"),_.domAPI=A(),_.insertStyleElement=v(),c()(T.Z,_),T.Z&&T.Z.locals&&T.Z.locals;const j="/api/items";var M=t(460),J={};J.styleTagTransform=y(),J.setAttributes=p(),J.insert=d().bind(null,"head"),J.domAPI=A(),J.insertStyleElement=v(),c()(M.Z,J);const Q=M.Z&&M.Z.locals?M.Z.locals:void 0;var G=t(526);function R(e){let{categories:n,activeCat:t,setActiveCat:o}=e;const r=n.map((e=>G.createElement("li",{key:e,className:e===t?Q.active:"",onClick:()=>o(e)},e)));return G.createElement("ul",{className:Q.CategoryList},r)}var Y=t(494),F={};F.styleTagTransform=y(),F.setAttributes=p(),F.insert=d().bind(null,"head"),F.domAPI=A(),F.insertStyleElement=v(),c()(Y.Z,F);const W=Y.Z&&Y.Z.locals?Y.Z.locals:void 0;var q=t(627),L={};L.styleTagTransform=y(),L.setAttributes=p(),L.insert=d().bind(null,"head"),L.domAPI=A(),L.insertStyleElement=v(),c()(q.Z,L);const H=q.Z&&q.Z.locals?q.Z.locals:void 0;var K=t(526);function z(e){let{menuItem:n,handleAddToOrder:t}=e;return console.log(n),K.createElement("div",{className:H.MenuListItem},K.createElement("img",{src:n.emojiURL,width:"200",height:"200"}),K.createElement("div",{className:H.name},n.name),K.createElement("div",{className:H.buy},K.createElement("span",null,"$",n.price.toFixed(2)),K.createElement("button",{className:"btn-sm",onClick:()=>t(n._id)},"ADD TO CART"),K.createElement("checkbox",null,"Like Box")))}var D=t(526);function V(e){let{menuItems:n,handleAddToOrder:t}=e;console.log(n);const o=n.map((e=>D.createElement(z,{key:e._id,handleAddToOrder:t,menuItem:e})));return D.createElement("main",{className:W.MenuList},o)}var X=t(526);function $(e,n,t,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(o,r)}function ee(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){$(a,o,r,s,l,"next",e)}function l(e){$(a,o,r,s,l,"throw",e)}s(void 0)}))}}function ne(e){let{user:n,setUser:t,cart:r,setCart:a}=e;const[s,l]=(0,o.useState)([]),[c,i]=(0,o.useState)(""),A=(0,o.useRef)([]);function u(){return(u=ee((function*(e){const n=yield function(e){return E("".concat(N,"/cart/items/").concat(e),"POST")}(e);a(n)}))).apply(this,arguments)}return(0,o.useEffect)((function(){function e(){return(e=ee((function*(){const e=yield E(j);A.current=e.reduce(((e,n)=>{const t=n.category.name;return e.includes(t)?e:[...e,t]}),[]),A.current.unshift("Show All"),l(e),i(A.current[0])}))).apply(this,arguments)}function n(){return n=ee((function*(){const e=yield k();a(e)})),n.apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),console.log(s),X.createElement("main",null,X.createElement("div",null,X.createElement(R,{categories:A.current,activeCat:c,setActiveCat:i})),X.createElement(V,{menuItems:s.filter((e=>e.category.name===c)),handleAddToOrder:function(e){return u.apply(this,arguments)}}))}var te=t(141),oe={};oe.styleTagTransform=y(),oe.setAttributes=p(),oe.insert=d().bind(null,"head"),oe.domAPI=A(),oe.insertStyleElement=v(),c()(te.Z,oe);const re=te.Z&&te.Z.locals?te.Z.locals:void 0;var ae=t(526);function se(e,n,t,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(o,r)}function le(e){let{user:n,setUser:t}=e;const[r,s]=(0,o.useState)(null),[l,c]=(0,o.useState)("");return(0,o.useEffect)((()=>{const e=function(){var e,n=(e=function*(){try{const e=yield I();s(e)}catch(e){c("Could Not Find Account Information")}},function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){se(a,o,r,s,l,"next",e)}function l(e){se(a,o,r,s,l,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[n]),ae.createElement("div",{className:re.portalcontainer},r&&r.isLoggedIn?ae.createElement("div",{className:re.loggedin},ae.createElement(a.rU,{to:"/account",className:"userlink"},"Hey, ",r.name),ae.createElement(a.rU,{to:"/favorites",className:"favbtn"},"likes"),ae.createElement(a.rU,{to:"/cart",className:re.cartbtn},"cart")):ae.createElement("div",{className:re.notloggedin},ae.createElement(a.rU,{to:"/login",className:"loginbtn"},"Login/Signup"),ae.createElement(a.rU,{to:"/cart",className:re.cartbtn},"Cart")))}var ce=t(309),ie={};ie.styleTagTransform=y(),ie.setAttributes=p(),ie.insert=d().bind(null,"head"),ie.domAPI=A(),ie.insertStyleElement=v(),c()(ce.Z,ie);const Ae=ce.Z&&ce.Z.locals?ce.Z.locals:void 0;var ue=t(673),de={};de.styleTagTransform=y(),de.setAttributes=p(),de.insert=d().bind(null,"head"),de.domAPI=A(),de.insertStyleElement=v(),c()(ue.Z,de);const me=ue.Z&&ue.Z.locals?ue.Z.locals:void 0;var pe=t(526);function fe(){return pe.createElement("div",{className:"animate__animated animate__tada animate__slow"},pe.createElement("div",{className:me.Logo},pe.createElement("div",null,"Shukea")))}var ve=t(526);function he(e){let{AboutUs:n,Shop:t,Jobs:o}=e;return ve.createElement("main",{className:Ae.NavBar},ve.createElement("div",null,ve.createElement(fe,null),ve.createElement(a.rU,{to:"/HomeScreen",className:"aboutBtn"},"About Us"),ve.createElement(a.rU,{to:"/shop",className:"shopBtn"},"Shop"),ve.createElement(a.rU,{to:"/HomeScreen",className:"jobsBtn"},"Jobs")))}function ye(e,n,t,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(o,r)}function ge(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){ye(a,o,r,s,l,"next",e)}function l(e){ye(a,o,r,s,l,"throw",e)}s(void 0)}))}}function Ce(){const[e,n]=(0,o.useState)([]),[t,r]=(0,o.useState)(I()),[a,l]=(0,o.useState)(null);function c(){return c=ge((function*(){const e={username:"guestuser",email:Math.round(1e12*Math.random())+"@guest.com",password:"guestpassword"};localStorage.setItem("guestuser",e.email);const n=yield function(e){return S.apply(this,arguments)}(e);r(n),console.log("Guest user created",n)})),c.apply(this,arguments)}return(0,s.s0)(),(0,s.TH)(),(0,o.useEffect)((()=>{t||function(){c.apply(this,arguments)}()}),[]),(0,o.useEffect)((()=>{function e(){return e=ge((function*(){const e=yield k();l(e)})),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.createElement("main",null,o.createElement(he,null),o.createElement(le,null),o.createElement(s.Z5,null,o.createElement(s.AW,{path:"/ikea",element:o.createElement(U,{user:t,setUser:r,pexelsData:e,setPexelsData:n})}),o.createElement(s.AW,{path:"/shop",element:o.createElement(ne,{cart:a,setCart:l})}),o.createElement(s.AW,{path:"/*",element:o.createElement(s.Fg,{to:"/ikea"})})))}var be=t(526);(0,r.s)(document.getElementById("app")).render(be.createElement(o.StrictMode,null,be.createElement(a.VK,null,be.createElement(Ce,null))))},460:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),s.locals={};const l=s},673:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),s.locals={};const l=s},494:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),s.locals={};const l=s},627:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),s.locals={};const l=s},309:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".QpVD3qAS0nYBtoQqAYoe{position:absolute;top:0;right:0;padding:.5rem;display:felx;flex-direction:row;justify-content:space-between}main{color:#ff0;margin:0 .5rem;font-weight:500}div{color:blue;margin:0 .5rem;font-weight:500}div:hover{cursor:crosshair}","",{version:3,sources:["webpack://./src/components/NavBar/NavBar.module.scss"],names:[],mappings:"AAAA,sBACI,iBAAA,CACA,KAAA,CACA,OAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGJ,KACI,UAAA,CACA,cAAA,CACA,eAAA,CAGJ,IACI,UAAA,CACA,cAAA,CACA,eAAA,CAGJ,UACI,gBAAA",sourcesContent:[".NavBar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.5rem;\n    display: felx;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nmain {\n    color: yellow;\n    margin: 0 0.5rem;\n    font-weight: 500;\n}\n\ndiv { \n    color: blue;\n    margin: 0 0.5rem;\n    font-weight: 500;\n}\n\ndiv:hover {\n    cursor: crosshair\n}"],sourceRoot:""}]),s.locals={NavBar:"QpVD3qAS0nYBtoQqAYoe"};const l=s},634:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,'section{background-color:#fff;padding:20px;margin:50px 20px 20px 20px;border:1px solid #ccc}section video{width:100%;max-width:800px;display:block;margin:0 auto;border:1px solid #ddd}section h1{font-size:24px;color:#000;margin-bottom:10px}section p{font-size:16px;color:#333;margin-bottom:20px}body{font-family:"Arial",sans-serif;background-color:#f5f5f5}',"",{version:3,sources:["webpack://./src/components/Pexels/PexelsContent.module.scss"],names:[],mappings:"AAKA,QACE,qBAAA,CACA,YAAA,CACA,0BAAA,CACA,qBAAA,CAGA,cACE,UAAA,CACA,eAAA,CACA,aAAA,CACA,aAAA,CACA,qBAAA,CAIF,WACE,cAAA,CACA,UAvBY,CAwBZ,kBAAA,CAGF,UACE,cAAA,CACA,UAAA,CACA,kBAAA,CAOJ,KACE,8BApCU,CAqCV,wBAAA",sourcesContent:["$primary-color: #000000;\n$secondary-color: #ff6b00;\n$body-font: 'Arial', sans-serif;\n\n\nsection {\n  background-color: white;\n  padding: 20px;\n  margin: 50px 20px 20px 20px;\n  border: 1px solid #ccc;\n  \n \n  video {\n    width: 100%;\n    max-width: 800px;\n    display: block;\n    margin: 0 auto;\n    border: 1px solid #ddd;\n  }\n\n\n  h1 {\n    font-size: 24px;\n    color: $primary-color;\n    margin-bottom: 10px;\n  }\n\n  p {\n    font-size: 16px;\n    color: #333;\n    margin-bottom: 20px;\n  }\n\n \n}\n\n\nbody {\n  font-family: $body-font;\n  background-color: #f5f5f5;\n}\n\n\n"],sourceRoot:""}]),s.locals={};const l=s},141:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".ZwNhM6v1FQIi1EH_OyOe{display:flex;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .liKyWqdgAPxKYEuWF0yT{display:flex;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .QNGME6RGnfPrSJlmbrMa{display:flex;width:10vmin;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .TIJQh045RWXXzyQmbruJ{display:flex}","",{version:3,sources:["webpack://./src/components/UserPortal/UserPortal.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,4BAAA,CAGA,4CACI,YAAA,CACA,4BAAA,CAGJ,4CACI,YAAA,CACA,YAAA,CACA,4BAAA,CAGJ,4CACI,YAAA",sourcesContent:[".portalcontainer {\n    display:flex;\n    justify-content: space-evenly;\n}\n\n    .portalcontainer .loggedin {\n        display:flex;\n        justify-content: space-evenly;\n    }\n\n    .portalcontainer .notloggedin {\n        display:flex;\n        width: 10vmin;\n        justify-content: space-evenly;\n    }\n\n    .portalcontainer .cartbtn {\n        display: flex;\n    }"],sourceRoot:""}]),s.locals={portalcontainer:"ZwNhM6v1FQIi1EH_OyOe",loggedin:"liKyWqdgAPxKYEuWF0yT",notloggedin:"QNGME6RGnfPrSJlmbrMa",cartbtn:"TIJQh045RWXXzyQmbruJ"};const l=s},797:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".ncLgupkhPNit1w0VMAKq{height:100%}","",{version:3,sources:["webpack://./src/pages/App/App.module.scss"],names:[],mappings:"AAAA,sBACI,WAAA",sourcesContent:[".App {\n    height: 100%;\n  }"],sourceRoot:""}]),s.locals={App:"ncLgupkhPNit1w0VMAKq"};const l=s},934:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"div{display:flex;flex-wrap:wrap;justify-content:center;padding:0px}div h1{font-size:2.5rem;color:#333;margin-bottom:20px;margin-top:50rem;width:100%}div .lXVcQtMJkWrfFGLIyTcM{flex-basis:calc(50% - 5px)}","",{version:3,sources:["webpack://./src/pages/HomeScreen/HomeScreen.module.scss"],names:[],mappings:"AAAA,IACI,YAAA,CACA,cAAA,CACA,sBAAA,CACA,WAAA,CAEA,OACE,gBAAA,CACA,UAAA,CACA,kBAAA,CACA,gBAAA,CACA,UAAA,CAGF,0BACE,0BAAA",sourcesContent:["div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; \n    padding: 0px;\n  \n    h1 {\n      font-size: 2.5rem;\n      color: #333;\n      margin-bottom: 20px;\n      margin-top: 50rem;\n      width: 100%; \n    }\n  \n    .pexels-content {\n      flex-basis: calc(50% - 5px); \n    }\n  }"],sourceRoot:""}]),s.locals={"pexels-content":"lXVcQtMJkWrfFGLIyTcM"};const l=s}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={id:e,exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,e=[],a.O=(n,t,o,r)=>{if(!t){var s=1/0;for(A=0;A<e.length;A++){for(var[t,o,r]=e[A],l=!0,c=0;c<t.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](t[c])))?t.splice(c--,1):(l=!1,r<s&&(s=r));if(l){e.splice(A--,1);var i=o();void 0!==i&&(n=i)}}return n}r=r||0;for(var A=e.length;A>0&&e[A-1][2]>r;A--)e[A]=e[A-1];e[A]=[t,o,r]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);a.r(r);var s={};n=n||[null,t({}),t([]),t(t)];for(var l=2&o&&e;"object"==typeof l&&!~n.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((n=>s[n]=()=>e[n]));return s.default=()=>e,a.d(r,s),r},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={768:0};a.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[s,l,c]=t,i=0;if(s.some((n=>0!==e[n]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(c)var A=c(a)}for(n&&n(t);i<s.length;i++)r=s[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(A)},t=self.webpackChunkbig_poppa_code_react_starter_kit=self.webpackChunkbig_poppa_code_react_starter_kit||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),a.nc=void 0;var s=a.O(void 0,[885],(()=>a(459)));s=a.O(s)})();
//# sourceMappingURL=App.3bb7f344039849a8e6ff0dfa4e098769.js.map