import{b8 as n,ba as c,b9 as d,a,aV as f,aU as e,bi as E}from"./index-D5NEVckz.js";import{ae as l,Q as L}from"./IdurarOs-V_bURJEp.js";import"./index-p47hPObF.js";import{s as T,E as i}from"./selectors-RESdbiRT.js";import{U as x}from"./UpdateItem-BHiV94Np.js";import{Q as y}from"./QuoteForm-BA8V5xmv.js";import{e as p}from"./actions-BzfzMeGQ.js";import"./index-O3DPbt57.js";import"./ErpApp-Ds58W3Mv.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-CO9O4eHP.js";import"./CloseCircleOutlined-BpJEdiGn.js";import"./PlusOutlined-DT2qKStY.js";import"./index-DByYE2g0.js";import"./useDebounce-BTD5RFWC.js";import"./index-BwMxo-ik.js";import"./useDate-BXA71YLp.js";import"./index-CZWOM83p.js";import"./DeleteOutlined-BTgtJ4nO.js";import"./index-CxIj_MyL.js";import"./color-DHucoY0N.js";import"./index-CeA0Nr72.js";import"./index-tVpgSIuv.js";function _({config:t}){const r=n(),{id:s}=c();d(),a.useLayoutEffect(()=>{r(p.read({entity:t.entity,id:s}))},[s]);const{result:o,isSuccess:m,isLoading:u=!0}=f(T);return a.useLayoutEffect(()=>{o&&r(p.currentAction({actionType:"update",data:o}))},[o]),u?e.jsx(i,{children:e.jsx(E,{})}):e.jsx(i,{children:m?e.jsx(x,{config:t,UpdateForm:y}):e.jsx(l,{entity:t.entity})})}function H(){const t=L(),r="quote",s={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},o={entity:r,...s};return e.jsx(_,{config:o})}export{H as default};
