import{d as _,u as d,a as p,c as m,b as h,r as u,e as s,f as t,t as a,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-3d04d648.js";import{N as w}from"./NoteDisplay-55f24f27.js";const S={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=h(()=>u.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",{id:"page-root",style:v(r(x))},[t("div",S,[t("div",V,[t("h1",L,a(r(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(c.value,(e,i)=>(n(),s("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(n(),s("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/home/wvi/src/talks/jOPenSpace/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
