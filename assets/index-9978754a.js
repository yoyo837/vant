import{V as h}from"./index-9f150340.js";import{P as A,a as B,p as L}from"./index-e88b099c.js";import{I as U}from"./index-1ef61aa2.js";import{A as x,e as o,B as y,y as f,D as v,r as M,o as O,a as T,w as S,C as n,F as W}from"./vue-libs-19c20d28.js";import{p as N,c as V,e as $,a as E}from"./use-translate-71d4880c.js";import{t as I,b as F,w as H}from"./with-install-560d59bf.js";import{H as K}from"./constant-ee6e27d7.js";import{c as g}from"./index-2630be1a.js";import{s as R}from"./function-call-39062646.js";import"./use-route-751feeeb.js";import"./use-expose-80cfd2b2.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-scope-id-dc406604.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";import"./index-8bc2514f.js";import"./mount-component-b555bf78.js";import"./index-2b75ebd8.js";const z=r=>r==null?void 0:r.includes("/"),_=[...B,"round","closeOnPopstate","safeAreaInsetBottom"],j={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[G,c,J]=V("share-sheet"),X=$({},L,{title:String,round:I,options:F(),cancelText:String,description:String,closeOnPopstate:I,safeAreaInsetBottom:I}),Y=x({name:G,props:X,emits:["cancel","select","update:show"],setup(r,{emit:t,slots:a}){const l=e=>t("update:show",e),p=()=>{l(!1),t("cancel")},m=(e,i)=>t("select",e,i),q=()=>{const e=a.title?a.title():r.title,i=a.description?a.description():r.description;if(e||i)return o("div",{class:c("header")},[e&&o("h2",{class:c("title")},[e]),i&&o("span",{class:c("description")},[i])])},b=e=>z(e)?o("img",{src:e,class:c("image-icon")},null):o("div",{class:c("icon",[e])},[o(U,{name:j[e]||e},null)]),C=(e,i)=>{const{name:s,icon:D,className:Q,description:P}=e;return o("div",{role:"button",tabindex:0,class:[c("option"),Q,K],onClick:()=>m(e,i)},[b(D),s&&o("span",{class:c("name")},[s]),P&&o("span",{class:c("option-description")},[P])])},d=(e,i)=>o("div",{class:c("options",{border:i})},[e.map(C)]),u=()=>{const{options:e}=r;return Array.isArray(e[0])?e.map((i,s)=>d(i,s!==0)):d(e)},w=()=>{const e=r.cancelText??J("cancel");if(a.cancel||e)return o("button",{type:"button",class:c("cancel"),onClick:p},[a.cancel?a.cancel():e])};return()=>o(A,y({class:c(),position:"bottom","onUpdate:show":l},N(r,_)),{default:()=>[q(),u(),w()]})}}),Z=H(Y),k=Z,be=x({__name:"index",setup(r){const t=E({"zh-CN":{qq:"QQ",name:"名称",link:"复制链接",title:"立即分享给好友",weibo:"微博",wechat:"微信",poster:"分享海报",qrcode:"二维码",multiLine:"展示多行选项",showSheet:"显示分享面板",withDesc:"展示描述信息",customIcon:"自定义图标",description:"描述信息",weappQrcode:"小程序码",wechatMoments:"朋友圈"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"WeChat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"WeChat Moments"}}),a=f(!1),l=f(!1),p=f(!1),m=f(!1),q=v(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),b=v(()=>[[{name:t("wechat"),icon:"wechat"},{name:t("wechatMoments"),icon:"wechat-moments"},{name:t("weibo"),icon:"weibo"},{name:t("qq"),icon:"qq"}],[{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"},{name:t("weappQrcode"),icon:"weapp-qrcode"}]]),C=v(()=>[{name:t("name"),icon:g("custom-icon-fire.png")},{name:t("name"),icon:g("custom-icon-light.png")},{name:t("name"),icon:g("custom-icon-water.png")},{name:t("name"),icon:"label"}]),d=v(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link",description:t("description")},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),u=w=>{R(w.name),a.value=!1,l.value=!1,p.value=!1,m.value=!1};return(w,e)=>{const i=M("demo-block");return O(),T(W,null,[o(i,{card:"",title:n(t)("basicUsage")},{default:S(()=>[o(n(h),{"is-link":"",title:n(t)("showSheet"),onClick:e[0]||(e[0]=s=>a.value=!0)},null,8,["title"]),o(n(k),{show:a.value,"onUpdate:show":e[1]||(e[1]=s=>a.value=s),title:n(t)("title"),options:q.value,onSelect:u},null,8,["show","title","options"])]),_:1},8,["title"]),o(i,{card:"",title:n(t)("multiLine")},{default:S(()=>[o(n(h),{"is-link":"",title:n(t)("showSheet"),onClick:e[2]||(e[2]=s=>p.value=!0)},null,8,["title"]),o(n(k),{show:p.value,"onUpdate:show":e[3]||(e[3]=s=>p.value=s),title:n(t)("title"),options:b.value,onSelect:u},null,8,["show","title","options"])]),_:1},8,["title"]),o(i,{card:"",title:n(t)("customIcon")},{default:S(()=>[o(n(h),{"is-link":"",title:n(t)("showSheet"),onClick:e[4]||(e[4]=s=>m.value=!0)},null,8,["title"]),o(n(k),{show:m.value,"onUpdate:show":e[5]||(e[5]=s=>m.value=s),options:C.value,onSelect:u},null,8,["show","options"])]),_:1},8,["title"]),o(i,{card:"",title:n(t)("withDesc")},{default:S(()=>[o(n(h),{"is-link":"",title:n(t)("showSheet"),onClick:e[6]||(e[6]=s=>l.value=!0)},null,8,["title"]),o(n(k),{show:l.value,"onUpdate:show":e[7]||(e[7]=s=>l.value=s),title:n(t)("title"),options:d.value,description:n(t)("description"),onSelect:u},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{be as default};
