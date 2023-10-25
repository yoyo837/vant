import{C as g}from"./index-9f150340.js";import{F as C}from"./index-9a0901f4.js";import{F as b}from"./index-82c4c801.js";import{B as _}from"./index-2ad848b9.js";import{S}from"./index-43f1556f.js";import{A as v,H as D,u as w,e as a,y,r as x,o as V,c as B,w as E,C as u}from"./vue-libs-19c20d28.js";import{e as m,c as k,y as F,a as L}from"./use-translate-71d4880c.js";import{w as T}from"./with-install-560d59bf.js";import{s as h}from"./function-call-39062646.js";import"./use-route-751feeeb.js";import"./index-1ef61aa2.js";import"./index-8bc2514f.js";import"./use-expose-80cfd2b2.js";import"./constant-ee6e27d7.js";import"./use-id-09c3f4cb.js";import"./index-2b75ebd8.js";import"./mount-component-b555bf78.js";import"./index-e88b099c.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-scope-id-dc406604.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";const[U,s,n]=k("contact-edit"),d={tel:"",name:""},I={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:F}},N=v({name:U,props:I,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=D(m({},d,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(S,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(g,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return w(()=>t.contactInfo,o=>m(e,d,o)),()=>a(C,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),A=T(N),O=A,re=v({__name:"index",setup(t){const l=L({"zh-CN":{defaultLabel:"设为默认联系人"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=x("demo-block");return V(),B(r,{title:u(l)("basicUsage")},{default:E(()=>[a(u(O),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{re as default};
