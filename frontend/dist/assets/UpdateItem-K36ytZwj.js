import{b8 as A,b9 as B,aV as I,a as d,ba as N,aU as e}from"./index-naAO4qqf.js";import{d as m,P as Z}from"./index-CaIvQSeh.js";import{V as _,ae as b,O as $,ab as z,ai as G}from"./IdurarOs-BY5ZwyF0.js";import{e as T}from"./actions-0PmpmNKc.js";import{c as F}from"./calculate-Bl1nHP9U.js";import{s as Y}from"./index-KrFx5yLV.js";import{d as J}from"./selectors-BI6LnBBy.js";import{t as E}from"./statusTagColor-DxbKI3gy.js";import{s as K}from"./ErpApp-DW8Y6j3_.js";import{T as L}from"./index-D6vR76mg.js";import{C as Q}from"./CloseCircleOutlined-CQLYmibI.js";import{P as W}from"./PlusOutlined-73nnCL3R.js";function X({form:l,translate:x}){const s=()=>{l.submit()};return e.jsx($,{onClick:s,type:"primary",icon:e.jsx(W,{}),children:x("update")})}function dt({config:l,UpdateForm:x}){var C,D;const s=_();let{entity:p}=l;const f=A(),y=B(),{current:r,isLoading:v,isSuccess:S}=I(J),[c]=b.useForm(),[H,h]=d.useState(0),P={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[o,U]=d.useState(r??P),{id:j}=N(),k=(t,a)=>{const u=a.items;let n=0;u&&(u.map(i=>{if(i&&i.quantity&&i.price){let g=F.multiply(i.quantity,i.price);n=F.add(n,g)}}),h(n))},q=t=>{let a={...t};if(t&&((t.date||t.expiredDate)&&(a.date=m(t.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),a.expiredDate=m(t.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")),t.items)){let u=[];t.items.map(n=>{const{quantity:i,price:g,itemName:M,description:R}=n,O=n.quantity*n.price;u.push({total:O,quantity:i,price:g,itemName:M,description:R})}),a.items=u}f(T.update({entity:p,id:j,jsonData:a}))};d.useEffect(()=>{S&&(c.resetFields(),h(0),f(T.resetAction({actionType:"update"})),y(`/${p.toLowerCase()}/read/${j}`))},[S]);const w=t=>{f(K.updateCurrency({data:{default_currency_code:t}}))};return d.useEffect(()=>{if(r){U(r);let t={...r};t.date&&(t.date=m(t.date)),t.expiredDate&&(t.expiredDate=m(t.expiredDate)),t.taxRate||(t.taxRate=0),w(r.currency);const{subTotal:a}=t;c.resetFields(),c.setFieldsValue(t),h(a)}},[r]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{onBack:()=>{y(`/${p.toLowerCase()}`)},title:s("update"),ghost:!1,tags:[e.jsx(L,{color:(C=E(o.status))==null?void 0:C.color,children:o.status&&s(o.status)},"status"),o.paymentStatus&&e.jsx(L,{color:(D=E(o.paymentStatus))==null?void 0:D.color,children:o.paymentStatus&&s(o.paymentStatus)},"paymentStatus")],extra:[e.jsx($,{onClick:()=>{y(`/${p.toLowerCase()}`)},icon:e.jsx(Q,{}),children:s("Cancel")},`${Y.generate()}`),e.jsx(X,{translate:s,form:c},`${Y.generate()}`)],style:{padding:"20px 0px"}}),e.jsx(z,{dashed:!0}),e.jsx(G,{isLoading:v,children:e.jsx(b,{form:c,layout:"vertical",onFinish:q,onValuesChange:k,children:e.jsx(x,{subTotal:H,current:r})})})]})}export{dt as U};
