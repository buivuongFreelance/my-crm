import{b8 as n,ba as u,b9 as c,a,aV as d,aU as r,bi as E}from"./index-Bv18HJQU.js";import{ag as L,V as l}from"./IdurarOs-BevDxMWK.js";import"./index-DF8oGiPL.js";import{s as T,E as i}from"./selectors-DEj3Vb5e.js";import{U as x}from"./UpdateItem-DuFOroz0.js";import{O as y}from"./OfferForm-C6yhLVvZ.js";import{e as p}from"./actions-C54H2QhY.js";import"./index-CSDcifUo.js";import"./ErpApp-BMHG2KFU.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-ZBeZMVsW.js";import"./CloseCircleOutlined-Bd1OBjbT.js";import"./PlusOutlined-nG56fPNX.js";import"./index-Bw4PeQrS.js";import"./useDebounce-DNi3U6KS.js";import"./index-DLVe4vm5.js";import"./color-DHucoY0N.js";import"./index-CmavXgQD.js";import"./useDate-XO3WheGS.js";import"./index-1BkUJNdY.js";import"./DeleteOutlined-BD6ngZSu.js";import"./index-BxeXIHEY.js";import"./index-FX6C8nR1.js";function _({config:t}){const o=n(),{id:s}=u();c(),a.useLayoutEffect(()=>{o(p.read({entity:t.entity,id:s}))},[s]);const{result:e,isSuccess:m,isLoading:f=!0}=d(T);return a.useLayoutEffect(()=>{e&&o(p.currentAction({actionType:"update",data:e}))},[e]),f?r.jsx(i,{children:r.jsx(E,{})}):r.jsx(i,{children:m?r.jsx(x,{config:t,UpdateForm:y}):r.jsx(L,{entity:t.entity})})}function H(){const t=l(),o="offer",s={PANEL_TITLE:t("Offer Leads"),DATATABLE_TITLE:t("offer_list"),ADD_NEW_ENTITY:t("add_new_offer"),ENTITY_NAME:t("Offer Leads")},e={entity:o,...s};return r.jsx(_,{config:e})}export{H as default};
