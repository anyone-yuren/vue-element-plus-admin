import e from"./Write.08723cf0.js";import{_ as a}from"./ContentWrap.3d2af3ba.js";import{b as t,O as s,b4 as r,r as o,o as i,f as l,g as p,u as m,H as d,k as u,Y as c,P as n,_ as f}from"./vendor.feecdbda.js";/* empty css                  */import{c as j}from"./index.ca1979cb.js";import{a as v,s as b}from"./index.86d91512.js";import{u as x}from"./useEmitt.22c402ae.js";import"./Form.vue_vue_type_script_lang.1e15fb7a.js";/* empty css               *//* empty css                  *//* empty css                 *//* empty css               */import"./tsxHelper.32771756.js";/* empty css                        *//* empty css                  *//* empty css                   */import"./InputPassword.75f8417d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.daec36f0.js";import"./useForm.1f487dd6.js";import"./formRules.e69b5eae.js";/* empty css                */import"./useAxios.585b892e.js";const g={class:"text-center"},_=t({setup(t){const{emitter:_}=x(),{push:w}=s(),{query:y}=r(),{t:h}=j(),k=o(null);(async()=>{const e=await v({params:{id:y.id}});e&&(k.value=e.data)})();const D=o(),F=o(!1),C=async()=>{var e,a;const t=m(D);if(await(null==(a=null==(e=null==t?void 0:t.elFormRef)?void 0:e.validate())?void 0:a.catch((()=>{})))){F.value=!0;const e=await(null==t?void 0:t.getFormData());await b({data:e}).catch((()=>{})).finally((()=>{F.value=!1}))&&(_.emit("getList","edit"),w("/example/example-page"))}};return(t,s)=>(i(),l(m(a),{title:m(h)("exampleDemo.edit")},{default:p((()=>[d(e,{ref_key:"writeRef",ref:D,"current-row":k.value},null,8,["current-row"]),u("div",g,[d(m(f),{type:"primary",loading:F.value,onClick:C},{default:p((()=>[c(n(m(h)("exampleDemo.save")),1)])),_:1},8,["loading"]),d(m(f),{onClick:s[0]||(s[0]=e=>m(w)("/example/example-page"))},{default:p((()=>[c(n(m(h)("dialogDemo.close")),1)])),_:1})])])),_:1},8,["title"]))}});export{_ as default};
