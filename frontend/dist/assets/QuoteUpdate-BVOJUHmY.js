import{b8 as n,ba as c,b9 as d,a,aV as f,aU as o,bi as E}from"./index-Bv18HJQU.js";import{ag as l,V as L}from"./IdurarOs-BevDxMWK.js";import"./index-DF8oGiPL.js";import{s as T,E as i}from"./selectors-DEj3Vb5e.js";import{U as x}from"./UpdateItem-DuFOroz0.js";import{Q as y}from"./QuoteForm-C8dEtP3R.js";import{e as p}from"./actions-C54H2QhY.js";import"./index-CSDcifUo.js";import"./ErpApp-BMHG2KFU.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-ZBeZMVsW.js";import"./CloseCircleOutlined-Bd1OBjbT.js";import"./PlusOutlined-nG56fPNX.js";import"./index-Bw4PeQrS.js";import"./useDebounce-DNi3U6KS.js";import"./index-CmavXgQD.js";import"./useDate-XO3WheGS.js";import"./index-1BkUJNdY.js";import"./DeleteOutlined-BD6ngZSu.js";import"./index-DLVe4vm5.js";import"./color-DHucoY0N.js";import"./index-BxeXIHEY.js";import"./index-FX6C8nR1.js";function _({config:t}){const r=n(),{id:s}=c();d(),a.useLayoutEffect(()=>{r(p.read({entity:t.entity,id:s}))},[s]);const{result:e,isSuccess:m,isLoading:u=!0}=f(T);return a.useLayoutEffect(()=>{e&&r(p.currentAction({actionType:"update",data:e}))},[e]),u?o.jsx(i,{children:o.jsx(E,{})}):o.jsx(i,{children:m?o.jsx(x,{config:t,UpdateForm:y}):o.jsx(l,{entity:t.entity})})}function H(){const t=L(),r="quote",s={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},e={entity:r,...s};return o.jsx(_,{config:e})}export{H as default};
