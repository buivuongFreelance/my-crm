import{b8 as u,ba as n,a as p,aV as c,aU as e,bi as d}from"./index-Bv18HJQU.js";import{ag as l,V as E}from"./IdurarOs-BevDxMWK.js";import"./index-DF8oGiPL.js";import{s as f,E as a}from"./selectors-DEj3Vb5e.js";import{R as x}from"./ReadItem-DGHeQVDm.js";import{e as L}from"./actions-C54H2QhY.js";import"./index-CSDcifUo.js";import"./ErpApp-BMHG2KFU.js";import"./index-KrFx5yLV.js";import"./useDate-XO3WheGS.js";import"./currency.es-9OAR_aOO.js";import"./useMail-tQVLgNkB.js";import"./statusTagColor-DxbKI3gy.js";import"./index-ZBeZMVsW.js";import"./RetweetOutlined-CVlmwzS6.js";import"./index-ClGN9OdI.js";import"./index-BhWQ6MzZ.js";import"./CloseCircleOutlined-Bd1OBjbT.js";import"./FilePdfOutlined-Ng_YiI2_.js";function T({config:t}){const s=u(),{id:o}=n();p.useLayoutEffect(()=>{s(L.read({entity:t.entity,id:o}))},[o]);const{result:r,isSuccess:i,isLoading:m=!0}=c(f);return m?e.jsx(a,{children:e.jsx(d,{})}):e.jsx(a,{children:i?e.jsx(x,{config:t,selectedItem:r}):e.jsx(l,{entity:t.entity})})}function B(){const t=E(),s="quote",o={PANEL_TITLE:t("quote"),DATATABLE_TITLE:t("quote_list"),ADD_NEW_ENTITY:t("add_new_quote"),ENTITY_NAME:t("quote")},r={entity:s,...o};return e.jsx(T,{config:r})}export{B as default};
