(function(){"use strict";var e={3418:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n,t,o,i,a){const u=(0,r.up)("Navbar"),c=(0,r.up)("router-view"),s=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{logo:e.logo_src,alt:e.app_name},null,8,["logo","alt"]),(0,r._)("div",null,[(0,r.Wm)(c)]),(0,r.Wm)(s)])}const a={id:"nav"},u=["src","alt"];function c(e,n,t,o,i,c){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",a,[(0,r.Wm)(s,{id:"logo-url",to:"/"},{default:(0,r.w5)((()=>[(0,r._)("img",{id:"logo",src:t.logo,alt:t.alt},null,8,u)])),_:1}),(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Fazer Pedido")])),_:1}),(0,r.Wm)(s,{to:"/pedidos"},{default:(0,r.w5)((()=>[(0,r.Uk)("Pedidos")])),_:1})])])}var s={name:"Navbar",props:["logo","alt"]},l=t(89);const d=(0,l.Z)(s,[["render",c],["__scopeId","data-v-d32722a8"]]);var p=d;const f=e=>((0,r.dD)("data-v-334e9e77"),e=e(),(0,r.Cn)(),e),m={id:"footer"},v=f((()=>(0,r._)("p",null,"Make Your Burger © ",-1))),g=[v];function h(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",m,g)}var b={name:"Footer"};const _=(0,l.Z)(b,[["render",h],["__scopeId","data-v-334e9e77"]]);var y=_,w={data:function(){return{logo_src:"/img/logo.png",app_name:"Make Your Burger"}},components:{Navbar:p,Footer:y}};const k=(0,l.Z)(w,[["render",i]]);var D=k,O=t(2483);const j={class:"main-container"},B=(0,r._)("h1",null,"Make your Burguer: ",-1);function C(e,n,t,o,i,a){const u=(0,r.up)("Banner"),c=(0,r.up)("BurguerForm");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u),(0,r._)("div",j,[B,(0,r.Wm)(c)])],64)}const S=e=>((0,r.dD)("data-v-46d037fd"),e=e(),(0,r.Cn)(),e),F={id:"main-banner"},N=S((()=>(0,r._)("h1",null,"Make your Burguer",-1))),P=[N];function A(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",F,P)}var M={name:"Banner"};const T=(0,l.Z)(M,[["render",A],["__scopeId","data-v-46d037fd"]]);var E=T,x=t(7139);const W=e=>((0,r.dD)("data-v-562e741a"),e=e(),(0,r.Cn)(),e),Z={id:"input-container"},I=W((()=>(0,r._)("label",{for:"nome"},"Name:",-1))),U={id:"input-container"},V=W((()=>(0,r._)("label",{for:"pao"},"Pick your bread:",-1))),Y=W((()=>(0,r._)("option",{value:""},"Selecione o seu pão",-1))),H=["value"],z={id:"input-container"},L=W((()=>(0,r._)("label",{for:"carne"},"Pick your meat:",-1))),K=W((()=>(0,r._)("option",{value:""},"Selecione o tipo de carne",-1))),J=["value"],q={id:"opcionais-container",class:"input-container"},$=W((()=>(0,r._)("label",{id:"opcionais-title",for:"opcionais"},"Pick your optionals:",-1))),G=["value"],Q=W((()=>(0,r._)("div",{id:"input-container"},[(0,r._)("input",{type:"submit",class:"submit-btn",value:"build my burguer"})],-1)));function R(e,n,t,i,a,u){const c=(0,r.up)("Message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r.Wm)(c,{msg:a.msg},null,8,["msg"]),[[o.F8,a.msg]]),(0,r._)("div",null,[(0,r._)("form",{id:"burger-form",onSubmit:n[4]||(n[4]=(...e)=>u.createBurger&&u.createBurger(...e))},[(0,r._)("div",Z,[I,(0,r.wy)((0,r._)("input",{type:"text",id:"nome",name:"nome","onUpdate:modelValue":n[0]||(n[0]=e=>a.nome=e),placeholder:"Your Name"},null,512),[[o.nr,a.nome]])]),(0,r._)("div",U,[V,(0,r.wy)((0,r._)("select",{name:"pao",id:"pao","onUpdate:modelValue":n[1]||(n[1]=e=>a.pao=e)},[Y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.paes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,x.zw)(e.tipo),9,H)))),128))],512),[[o.bM,a.pao]])]),(0,r._)("div",z,[L,(0,r.wy)((0,r._)("select",{name:"carne",id:"carne","onUpdate:modelValue":n[2]||(n[2]=e=>a.carne=e)},[K,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.carnes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,x.zw)(e.tipo),9,J)))),128))],512),[[o.bM,a.carne]])]),(0,r._)("div",q,[$,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.opcionaisdata,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"opcionais","onUpdate:modelValue":n[3]||(n[3]=e=>a.opcionais=e),value:e.tipo},null,8,G),[[o.e8,a.opcionais]]),(0,r._)("span",null,(0,x.zw)(e.tipo),1)])))),128))]),Q],32)])])}var X=t(8525),ee={name:"BurguerForm",data(){return{paes:null,carnes:null,opcionaisdata:null,nome:null,pao:null,carne:null,opcionais:[],msg:null}},methods:{async getIngredientes(){const e=await fetch("http://localhost:3000/ingredientes"),n=await e.json();this.paes=n.paes,this.carnes=n.carnes,this.opcionaisdata=n.opcionais},async createBurger(e){e.preventDefault();const n={nome:this.nome,carne:this.carne,pao:this.pao,opcionais:Array.from(this.opcionais),status:"Solicitado"},t=JSON.stringify(n),o=await fetch("http://localhost:3000/burgers",{method:"POST",headers:{"Content-Type":"application/json"},body:t}),r=await o.json();console.log(r),this.msg=`Order nº ${r.id} confirmed!`,setTimeout((()=>this.msg=""),3e3),this.nome="",this.carne="",this.pao="",this.opcionais=[]}},mounted(){this.getIngredientes()},components:{Message:X.Z}};const ne=(0,l.Z)(ee,[["render",R],["__scopeId","data-v-562e741a"]]);var te=ne,oe={name:"HomeView",components:{Banner:E,BurguerForm:te}};const re=(0,l.Z)(oe,[["render",C]]);var ie=re;const ae=[{path:"/",name:"home",component:ie},{path:"/pedidos",name:"pedidos",component:()=>t.e(443).then(t.bind(t,6211))}],ue=(0,O.p7)({history:(0,O.PO)("https://eutelmo.github.io/First-VueJs-App/"),routes:ae});var ce=ue;(0,o.ri)(D).use(ce).mount("#app")},8525:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(3396),r=t(7139);const i={class:"message-container"};function a(e,n,t,a,u,c){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("p",null,(0,r.zw)(t.msg),1)])}var u={name:"Message",props:{msg:String}},c=t(89);const s=(0,c.Z)(u,[["render",a],["__scopeId","data-v-3511550e"]]);var l=s}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.16499f58.js"}}(),function(){t.miniCssF=function(e){return"css/about.bca86601.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="3_project:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://eutelmo.github.io/First-VueJs-App/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={443:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var l=c(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunk_3_project"]=self["webpackChunk_3_project"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3418)}));o=t.O(o)})();
//# sourceMappingURL=app.34197e37.js.map