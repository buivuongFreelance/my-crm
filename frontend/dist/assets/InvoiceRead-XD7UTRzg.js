import{b8 as m,ba as c,a as p,aV as u,aU as e,bi as d}from"./index-Bv18HJQU.js";import{ag as E,V as l}from"./IdurarOs-BevDxMWK.js";import"./index-DF8oGiPL.js";import{s as T,E as r}from"./selectors-DEj3Vb5e.js";import{R as f}from"./ReadItem-DGHeQVDm.js";import{e as x}from"./actions-C54H2QhY.js";import"./index-CSDcifUo.js";import"./ErpApp-BMHG2KFU.js";import"./index-KrFx5yLV.js";import"./useDate-XO3WheGS.js";import"./currency.es-9OAR_aOO.js";import"./useMail-tQVLgNkB.js";import"./statusTagColor-DxbKI3gy.js";import"./index-ZBeZMVsW.js";import"./RetweetOutlined-CVlmwzS6.js";import"./index-ClGN9OdI.js";import"./index-BhWQ6MzZ.js";import"./CloseCircleOutlined-Bd1OBjbT.js";import"./FilePdfOutlined-Ng_YiI2_.js";function I({config:o}){const t=m(),{id:i}=c();p.useLayoutEffect(()=>{t(x.read({entity:o.entity,id:i}))},[i]);const{result:s,isSuccess:a,isLoading:n=!0}=u(T);return n?e.jsx(r,{children:e.jsx(d,{})}):e.jsx(r,{children:a?e.jsx(f,{config:o,selectedItem:s}):e.jsx(E,{entity:o.entity})})}function C(){const o="invoice",t=l(),i={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},s={entity:o,...i};return e.jsx(I,{config:s})}export{C as default};
