import{a as c,b9 as N,aU as a}from"./index-naAO4qqf.js";import{V as Z,$ as n,Z as _}from"./IdurarOs-BY5ZwyF0.js";import{u as k}from"./ErpApp-DW8Y6j3_.js";import{s as z}from"./index-KrFx5yLV.js";import{c as B}from"./color-DHucoY0N.js";import{T as D}from"./index-D6vR76mg.js";const G=({entity:g,displayLabels:h=["name"],outputValue:t="_id",redirectLabel:v="",withRedirect:x=!1,urlToRedirect:S="/",placeholder:L="select",value:r,onChange:l})=>{var u;const j=Z(),[b,p]=c.useState([]),[E,i]=c.useState(void 0),O=N(),y=()=>_.list({entity:g}),{result:R,isLoading:m,isSuccess:f}=k(y);c.useEffect(()=>{f&&p(R)},[f]);const U=s=>h.map(e=>s[e]).join(" ");c.useEffect(()=>{if(r!==void 0){const s=r[t]??r;i(s),l(s)}},[r]);const $=s=>{if(s==="redirectURL")O(S);else{const e=s[t]??s;i(s),l(e)}},A=()=>{const s=[];return b.map(e=>{var d;const C=e[t]??e,T=U(e),q=((d=e[t])==null?void 0:d.color)??(e==null?void 0:e.color),o=B.find(I=>I.color===q);s.push({value:C,label:T,color:o==null?void 0:o.color})}),s};return a.jsxs(n,{loading:m,disabled:m,value:E,onChange:$,placeholder:L,children:[(u=A())==null?void 0:u.map(s=>a.jsx(n.Option,{value:s.value,children:a.jsx(D,{bordered:!1,color:s.color,children:s.label})},`${z.generate()}`)),x&&a.jsx(n.Option,{value:"redirectURL",children:"+ "+j(v)})]})},W=G;export{W as S};
