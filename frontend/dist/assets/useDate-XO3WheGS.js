import{aT as w,aV as t,bb as z,a as y,aU as g}from"./index-Bv18HJQU.js";import{c as p}from"./currency.es-9OAR_aOO.js";import{_ as E,a3 as j}from"./IdurarOs-BevDxMWK.js";const A=e=>e.currency,R=w([A],e=>e.result),$=()=>{var l;const e=t(E),_=t(R),x=e||((l=z.get("settings"))==null?void 0:l.money_format_settings),[s,M]=y.useState(e),n=c=>_.find(r=>r.currency_code===c);y.useEffect(()=>{const c=_.find(r=>r.currency_code===e.default_currency_code);M(c)},[x]);function o({amount:c,currency_code:r=s==null?void 0:s.currency_code}){var i,u,f,d,b,a,h;return p(c).dollars()>0||!((i=n(r))!=null&&i.zero_format)?p(c,{separator:(u=n(r))==null?void 0:u.thousand_sep,decimal:(f=n(r))==null?void 0:f.decimal_sep,symbol:"",precision:(d=n(r))==null?void 0:d.cent_precision}).format():0+p(c,{separator:(b=n(r))==null?void 0:b.thousand_sep,decimal:(a=n(r))==null?void 0:a.decimal_sep,symbol:"",precision:(h=n(r))==null?void 0:h.cent_precision}).format()}function C({amount:c=0,currency_code:r=s==null?void 0:s.currency_code}){var i,u;return(s==null?void 0:s.currency_position)==="before"?((i=n(r))==null?void 0:i.currency_symbol)+" "+o({amount:c,currency_code:r}):o({amount:c,currency_code:r})+" "+((u=n(r))==null?void 0:u.currency_symbol)}function D({amount:c=0,currency_code:r=s==null?void 0:s.currency_code}){return o({amount:c,currency_code:r})}function Y({amount:c=0,currency_code:r=s==null?void 0:s.currency_code}){var i,u;return{props:{style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}},children:g.jsx(g.Fragment,{children:(s==null?void 0:s.currency_position)==="before"?((i=n(r))==null?void 0:i.currency_symbol)+" "+o({amount:c,currency_code:r}):o({amount:c,currency_code:r})+" "+((u=n(r))==null?void 0:u.currency_symbol)})}}return{moneyRowFormatter:Y,moneyFormatter:C,amountFormatter:D,currency_symbol:s==null?void 0:s.currency_symbol,currency_code:s==null?void 0:s.currency_code,currency_position:s==null?void 0:s.currency_position,decimal_sep:s==null?void 0:s.decimal_sep,thousand_sep:s==null?void 0:s.thousand_sep,cent_precision:s==null?void 0:s.cent_precision,zero_format:s==null?void 0:s.zero_format}},V=$,L=()=>{const e=t(j);return{dateFormat:(e==null?void 0:e.idurar_app_date_format)??"DD/MM/YYYY"}},k=L;export{k as a,V as u};