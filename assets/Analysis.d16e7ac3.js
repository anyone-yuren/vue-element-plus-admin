import{P as a,g as t,a as s,b as e}from"./PanelGroup.bcf33612.js";import{b as i,r as o,V as n,o as l,j as d,H as m,u,at as c,g as p,a4 as r,aw as f,aG as h,aH as b,as as g}from"./vendor.feecdbda.js";/* empty css               *//* empty css                *//* empty css                         */import{p as x,b as y,l as j,_}from"./Echart.9859c5eb.js";import{c as v}from"./index.ca1979cb.js";import"./CountTo.408f21fa.js";import"./useAxios.585b892e.js";import"./plugin-vue_export-helper.21dcd24c.js";const w=i({setup(i){const{t:w}=v(),A=o(!0),E=n(x),P=async()=>{const a=await t().catch((()=>{}));a&&(g(E,"legend.data",a.data.map((a=>w(a.name)))),g(E,"series.data",a.data))},D=n(y),G=async()=>{const a=await s().catch((()=>{}));a&&(g(D,"xAxis.data",a.data.map((a=>w(a.name)))),g(D,"series",[{name:w("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},H=n(j),O=async()=>{const a=await e().catch((()=>{}));a&&(g(H,"xAxis.data",a.data.map((a=>w(a.name)))),g(H,"series",[{name:w("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:w("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),G(),O()]),A.value=!1})(),(t,s)=>(l(),d(r,null,[m(a),m(u(c),{gutter:20,justify:"space-between"},{default:p((()=>[m(u(f),{xl:10,lg:10,md:24,sm:24,xs:24},{default:p((()=>[m(u(b),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(u(h),{loading:A.value,animated:""},{default:p((()=>[m(u(_),{options:u(E),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),m(u(f),{xl:14,lg:14,md:24,sm:24,xs:24},{default:p((()=>[m(u(b),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(u(h),{loading:A.value,animated:""},{default:p((()=>[m(u(_),{options:u(D),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),m(u(f),{span:24},{default:p((()=>[m(u(b),{shadow:"hover",class:"mb-20px"},{default:p((()=>[m(u(h),{loading:A.value,animated:"",rows:4},{default:p((()=>[m(u(_),{options:u(H),height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{w as default};
