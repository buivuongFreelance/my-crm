import{b8 as E,b9 as b,aV as f,a as d,aU as e,ba as N,bi as A}from"./index-D5NEVckz.js";import{Q as y,L as u,a6 as I,a9 as P,ai as $,ae as v}from"./IdurarOs-V_bURJEp.js";import{a as R}from"./index-p47hPObF.js";import{c as S,s as B,E as p}from"./selectors-RESdbiRT.js";import{P as w}from"./index-O3DPbt57.js";import{e as h}from"./actions-BzfzMeGQ.js";import{s as x}from"./index-KrFx5yLV.js";import{C as D}from"./CloseCircleOutlined-BpJEdiGn.js";import"./ErpApp-Ds58W3Mv.js";const{Title:j,Paragraph:M}=$;function k({config:s,selectedItem:a}){const t=y(),{entity:r,ENTITY_NAME:n}=s,i=E(),{erpContextAction:_}=R(),l=b(),{result:c}=f(S),{readPanel:m,updatePanel:g}=_,T={emailName:"",emailKey:"",emailSubject:"",emailBody:"",emailVariables:[],_id:""},[o,L]=d.useState(a??T);return d.useEffect(()=>{const C=new AbortController;return c&&L(c),()=>C.abort()},[c]),e.jsxs(e.Fragment,{children:[e.jsx(w,{onBack:()=>{m.close(),l(`/${r.toLowerCase()}`)},title:`${n} # ${o==null?void 0:o.emailName}`,ghost:!1,extra:[e.jsx(u,{onClick:()=>{m.close(),l(`/${r.toLowerCase()}`)},icon:e.jsx(D,{}),children:t("Close")},`${x.generate()}`),e.jsx(u,{onClick:()=>{i(h.currentAction({actionType:"update",data:o})),g.open(),l(`/${r.toLowerCase()}/update/${o._id}`)},type:"primary",icon:e.jsx(I,{}),children:t("Edit")},`${x.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(P,{dashed:!0}),e.jsxs("div",{children:[e.jsx(j,{level:3,children:t("Subject")}),e.jsx(M,{children:o.emailSubject}),e.jsx(j,{level:3,children:t("Body")}),e.jsx("div",{dangerouslySetInnerHTML:{__html:o.emailBody}})]})]})}function Y({config:s}){const a=E(),{id:t}=N();d.useLayoutEffect(()=>{a(h.read({entity:s.entity,id:t}))},[t]);const{result:r,isSuccess:n,isLoading:i=!0}=f(B);return i?e.jsx(p,{children:e.jsx(A,{})}):e.jsx(p,{children:n?e.jsx(k,{config:s,selectedItem:r}):e.jsx(v,{entity:s.entity})})}function z(){const s="email",a=y(),t={PANEL_TITLE:a("email_template"),DATATABLE_TITLE:a("email_template_list"),ADD_NEW_ENTITY:a("add_new_email_template"),ENTITY_NAME:a("email_template")},r={entity:s,create:!1,...t};return e.jsx(Y,{config:r})}export{z as default};
