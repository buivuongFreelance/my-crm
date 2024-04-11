import{b8 as C,b9 as I,a as l,aV as $,aU as e,ba as B,bi as M}from"./index-naAO4qqf.js";import{V as O,O as c,a9 as W,aj as Y,a8 as U,ac as g,ab as f,aa as a,ag as q}from"./IdurarOs-BY5ZwyF0.js";import"./index-DjOprB9e.js";import{c as V,s as H,E as L}from"./selectors-BI6LnBBy.js";import{P as Q}from"./index-CaIvQSeh.js";import{e as _}from"./actions-0PmpmNKc.js";import{s as d}from"./index-KrFx5yLV.js";import{u as R}from"./useDate-D7ThDS7d.js";import{u as z}from"./useMail-D1-GZPb0.js";import{t as G}from"./statusTagColor-DxbKI3gy.js";import{T as J}from"./index-D6vR76mg.js";import{S as h}from"./index-3Foqqgjd.js";import{D as j}from"./index-RQnkb5yH.js";import{C as K}from"./CloseCircleOutlined-CQLYmibI.js";import{F as X}from"./FilePdfOutlined-DXHgmj4Q.js";import{R as Z}from"./RetweetOutlined-DfVq6j2L.js";import"./ErpApp-DW8Y6j3_.js";import"./currency.es-9OAR_aOO.js";const ee=({item:r,currentErp:o})=>{const{moneyFormatter:s}=R();return e.jsxs(g,{gutter:[12,0],children:[e.jsxs(a,{className:"gutter-row",span:11,children:[e.jsx("p",{style:{marginBottom:5},children:e.jsx("strong",{children:r.itemName})}),e.jsx("p",{children:r.description})]}),e.jsx(a,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:s({amount:r.price,currency_code:o.currency})})}),e.jsx(a,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:r.quantity})}),e.jsx(a,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right",fontWeight:"700"},children:s({amount:r.total,currency_code:o.currency})})}),e.jsx(f,{dashed:!0,style:{marginTop:0,marginBottom:15}})]},r._id)};function te({config:r,selectedItem:o}){var A;const s=O(),{entity:n,ENTITY_NAME:y}=r,u=C(),{moneyFormatter:i}=R(),{send:v,isLoading:P}=z({entity:n}),T=I(),[N,S]=l.useState({}),{result:x}=$(V),D={status:"",lead:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[k,w]=l.useState([]),[t,b]=l.useState(o??D);return l.useEffect(()=>{const m=new AbortController;if(x){const{items:E,invoice:p,...F}=x;E?(w(E),b(x)):p.items&&(w(p.items),b({...p.items,...F,...p}))}return()=>m.abort()},[x]),l.useEffect(()=>{t!=null&&t.lead&&S(t.lead[t.lead.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(Q,{onBack:()=>{T(`/${n.toLowerCase()}`)},title:`${y} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx(J,{color:(A=G(t.status))==null?void 0:A.color,children:s(t.status)}),extra:[e.jsx(c,{onClick:()=>{T(`/${n.toLowerCase()}`)},icon:e.jsx(K,{}),children:s("Close")},`${d.generate()}`),e.jsx(c,{onClick:()=>{window.open(`${W}${n}/${n}-${t._id}.pdf`,"_blank")},icon:e.jsx(X,{}),children:s("Download PDF")},`${d.generate()}`),e.jsx(c,{loading:P,onClick:()=>{v(t._id)},icon:e.jsx(Y,{}),children:s("Send by email")},`${d.generate()}`),e.jsx(c,{onClick:()=>{u(_.convert({entity:n,id:t._id}))},icon:e.jsx(Z,{}),style:{display:n==="quote"?"inline-block":"none"},children:s("Convert to Invoice")},`${d.generate()}`),e.jsx(c,{onClick:()=>{u(_.currentAction({actionType:"update",data:t})),T(`/${n.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(U,{}),children:s("Edit")},`${d.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(g,{children:[e.jsx(h,{title:"Status",value:t.status}),e.jsx(h,{title:s("SubTotal"),value:i({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(h,{title:s("Total"),value:i({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(h,{title:s("Paid"),value:i({amount:t.credit,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(f,{dashed:!0}),e.jsxs(j,{title:`lead : ${t.lead.name}`,children:[e.jsx(j.Item,{label:s("Address"),children:N.address}),e.jsx(j.Item,{label:s("email"),children:N.email}),e.jsx(j.Item,{label:s("Phone"),children:N.phone})]}),e.jsx(f,{}),e.jsxs(g,{gutter:[12,0],children:[e.jsx(a,{className:"gutter-row",span:11,children:e.jsx("p",{children:e.jsx("strong",{children:s("product")})})}),e.jsx(a,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("PRICE")})})}),e.jsx(a,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("QUANTITY")})})}),e.jsx(a,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("TOTAL")})})}),e.jsx(f,{})]}),k.map(m=>e.jsx(ee,{item:m,currentErp:t},m._id)),e.jsx("div",{style:{width:"300px",float:"right",textAlign:"right",fontWeight:"700"},children:e.jsxs(g,{gutter:[12,-5],children:[e.jsx(a,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Sub Total")," : "]})}),e.jsx(a,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.subTotal,currency_code:t.currency})})}),e.jsx(a,{className:"gutter-row",span:12,children:e.jsxs("p",{children:["Tax Total (",t.taxRate," %) :"]})}),e.jsx(a,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.taxTotal,currency_code:t.currency})})}),e.jsx(a,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(a,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.total,currency_code:t.currency})})})]})})]})}function se({config:r}){const o=C(),{id:s}=B();I(),l.useLayoutEffect(()=>{o(_.read({entity:r.entity,id:s}))},[s]);const{result:n,isSuccess:y,isLoading:u=!0}=$(H);return u?e.jsx(L,{children:e.jsx(M,{})}):e.jsx(L,{children:y?e.jsx(te,{config:r,selectedItem:n}):e.jsx(q,{entity:r.entity})})}function Ne(){const r=O(),o="offer",s={PANEL_TITLE:r("Offer Leads"),DATATABLE_TITLE:r("offer_list"),ADD_NEW_ENTITY:r("add_new_offer"),ENTITY_NAME:r("Offer Leads")},n={entity:o,...s};return e.jsx(se,{config:n})}export{Ne as default};
