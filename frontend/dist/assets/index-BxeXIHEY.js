import{b8 as L,a,b9 as S,aV as _,aU as n}from"./index-Bv18HJQU.js";import{u as b,s as p,c as w}from"./ErpApp-BMHG2KFU.js";import{V as x,_ as O,ae as j,$ as v,Z as E}from"./IdurarOs-BevDxMWK.js";const F=()=>{const u=x(),l=L(),[r,o]=a.useState([]),i=S(),d=()=>E.listAll({entity:"currency",options:{enabled:!0}}),{result:y,isLoading:f,isSuccess:c}=b(d);a.useEffect(()=>{c&&o(y)},[c]);const h=_(O),m=e=>{const s=r.find(t=>t.currency_code===e);l(p.updateCurrency({data:{default_currency_code:s.currency_code}}))},g=e=>{e==="redirectURL"&&i("/settings/currency")},C=()=>{const e=[],s="redirectURL",t="+ Add New Currency";return e.push(...w(r)),e.push({value:s,label:t}),e};return n.jsx(j.Item,{label:u("currency"),name:"currency",rules:[{required:!0}],initialValue:h.default_currency_code,children:n.jsx(v,{showSearch:!0,loading:f,filterOption:(e,s)=>((s==null?void 0:s.label)??"").toLowerCase().includes(e.toLowerCase()),filterSort:(e,s)=>((e==null?void 0:e.label)??"").toLowerCase().startsWith(((s==null?void 0:s.label)??"").toLowerCase()),options:C(),onSelect:m,onChange:g})})},q=F;export{q as S};