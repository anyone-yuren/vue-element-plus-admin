import{p as e}from"./index.f1eecc2c.js";import{b as r,e as t,ay as s,u as o}from"./vendor.feecdbda.js";var a=r({name:"Highlight",props:{tag:e.string.def("span"),keys:{type:Array,default:()=>[]},color:e.string.def("var(--el-color-primary)")},emits:["click"],setup(e,{emit:r,slots:a}){const l=t((()=>e.keys.map((t=>s("span",{onClick:()=>{r("click",t)},style:{color:e.color,cursor:"pointer"}},t))))),n=()=>{if(!(null==a?void 0:a.default))return null;const r=null==a?void 0:a.default()[0].children;if(!r)return null==a?void 0:a.default()[0];const t=(n=r,e.keys.forEach(((e,r)=>{const t=new RegExp(e,"g");n=n.replace(t,`{{${r}}}`)})),n.split(/{{|}}/));var n;const c=/^[0-9]*$/,i=t.map((e=>c.test(e)&&o(l)[e]||e));return s(e.tag,i)};return()=>n()}});export{a as _};
