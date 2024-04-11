import{b8 as O,b9 as F,aV as B,a as l,aU as e}from"./index-naAO4qqf.js";import{P as M}from"./index-CaIvQSeh.js";import{V as W,O as d,a9 as q,aj as U,a8 as V,ac as j,ab as g,aa as r}from"./IdurarOs-BY5ZwyF0.js";import{e as b}from"./actions-0PmpmNKc.js";import{s as u}from"./index-KrFx5yLV.js";import{c as H}from"./selectors-BI6LnBBy.js";import{u as v}from"./useDate-D7ThDS7d.js";import{u as Q}from"./useMail-D1-GZPb0.js";import{t as S}from"./statusTagColor-DxbKI3gy.js";import{s as Y}from"./ErpApp-DW8Y6j3_.js";import{T as A}from"./index-D6vR76mg.js";import{R as z}from"./RetweetOutlined-DfVq6j2L.js";import{S as p}from"./index-3Foqqgjd.js";import{D as h}from"./index-RQnkb5yH.js";import{C as G}from"./CloseCircleOutlined-CQLYmibI.js";import{F as J}from"./FilePdfOutlined-DXHgmj4Q.js";const K=({item:a,currentErp:m})=>{const{moneyFormatter:s}=v();return e.jsxs(j,{gutter:[12,0],children:[e.jsxs(r,{className:"gutter-row",span:11,children:[e.jsx("p",{style:{marginBottom:5},children:e.jsx("strong",{children:a.itemName})}),e.jsx("p",{children:a.description})]}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:s({amount:a.price,currency_code:m.currency})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:a.quantity})}),e.jsx(r,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right",fontWeight:"700"},children:s({amount:a.total,currency_code:m.currency})})}),e.jsx(g,{dashed:!0,style:{marginTop:0,marginBottom:15}})]},a._id)};function pe({config:a,selectedItem:m}){var T,$;const s=W(),{entity:n,ENTITY_NAME:E}=a,y=O(),f=F(),{moneyFormatter:c}=v(),{send:I,isLoading:R}=Q({entity:n}),{result:o}=B(H),N={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[P,w]=l.useState([]),[t,C]=l.useState(m??N),[_,k]=l.useState({}),D=i=>{y(Y.updateCurrency({data:{default_currency_code:i}}))};return l.useEffect(()=>{if(o){const{items:i,invoice:x,...L}=o;i?(w(i),C(o)):x.items&&(w(x.items),C({...x.items,...L,...x})),D(o.currency)}return()=>{w([]),C(N)}},[o]),l.useEffect(()=>{t!=null&&t.client&&k(t.client[t.client.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(M,{onBack:()=>{f(`/${n.toLowerCase()}`)},title:`${E} # ${t.number}/${t.year||""}`,ghost:!1,tags:[e.jsx(A,{color:(T=S(t.status))==null?void 0:T.color,children:t.status&&s(t.status)},"status"),t.paymentStatus&&e.jsx(A,{color:($=S(t.paymentStatus))==null?void 0:$.color,children:t.paymentStatus&&s(t.paymentStatus)},"paymentStatus")],extra:[e.jsx(d,{onClick:()=>{f(`/${n.toLowerCase()}`)},icon:e.jsx(G,{}),children:s("Close")},`${u.generate()}`),e.jsx(d,{onClick:()=>{window.open(`${q}${n}/${n}-${t._id}.pdf`,"_blank")},icon:e.jsx(J,{}),children:s("Download PDF")},`${u.generate()}`),e.jsx(d,{loading:R,onClick:()=>{I(t._id)},icon:e.jsx(U,{}),children:s("Send by Email")},`${u.generate()}`),e.jsx(d,{onClick:()=>{y(b.convert({entity:n,id:t._id}))},icon:e.jsx(z,{}),style:{display:n==="quote"?"inline-block":"none"},children:s("Convert to Invoice")},`${u.generate()}`),e.jsx(d,{onClick:()=>{y(b.currentAction({actionType:"update",data:t})),f(`/${n.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(V,{}),children:s("Edit")},`${u.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(j,{children:[e.jsx(p,{title:"Status",value:t.status}),e.jsx(p,{title:s("SubTotal"),value:c({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(p,{title:s("Total"),value:c({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(p,{title:s("Paid"),value:c({amount:t.credit,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(g,{dashed:!0}),e.jsxs(h,{title:`Client : ${t.client.name}`,children:[e.jsx(h.Item,{label:s("Address"),children:_.address}),e.jsx(h.Item,{label:s("email"),children:_.email}),e.jsx(h.Item,{label:s("Phone"),children:_.phone})]}),e.jsx(g,{}),e.jsxs(j,{gutter:[12,0],children:[e.jsx(r,{className:"gutter-row",span:11,children:e.jsx("p",{children:e.jsx("strong",{children:s("Product")})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Price")})})}),e.jsx(r,{className:"gutter-row",span:4,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Quantity")})})}),e.jsx(r,{className:"gutter-row",span:5,children:e.jsx("p",{style:{textAlign:"right"},children:e.jsx("strong",{children:s("Total")})})}),e.jsx(g,{})]}),P.map(i=>e.jsx(K,{item:i,currentErp:t},i._id)),e.jsx("div",{style:{width:"300px",float:"right",textAlign:"right",fontWeight:"700"},children:e.jsxs(j,{gutter:[12,-5],children:[e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Sub Total")," :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.subTotal,currency_code:t.currency})})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Tax Total")," (",t.taxRate," %) :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.taxTotal,currency_code:t.currency})})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(r,{className:"gutter-row",span:12,children:e.jsx("p",{children:c({amount:t.total,currency_code:t.currency})})})]})})]})}export{pe as R};
