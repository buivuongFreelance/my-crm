import{b8 as n,ba as u,b9 as c,a,aV as d,aU as r,bi as E}from"./index-naAO4qqf.js";import{ag as L,V as l}from"./IdurarOs-BY5ZwyF0.js";import"./index-DjOprB9e.js";import{s as T,E as i}from"./selectors-BI6LnBBy.js";import{U as x}from"./UpdateItem-K36ytZwj.js";import{O as y}from"./OfferForm-CrV9LA3k.js";import{e as p}from"./actions-0PmpmNKc.js";import"./index-CaIvQSeh.js";import"./ErpApp-DW8Y6j3_.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-D6vR76mg.js";import"./CloseCircleOutlined-CQLYmibI.js";import"./PlusOutlined-73nnCL3R.js";import"./index-FaYlxcF7.js";import"./useDebounce-CMoBnV_g.js";import"./index-BeBT2rjx.js";import"./color-DHucoY0N.js";import"./index-enIJ-BQP.js";import"./useDate-D7ThDS7d.js";import"./index-BHEsWg-e.js";import"./DeleteOutlined-DHUQa1eg.js";import"./index-B8zpxNK7.js";import"./index-B8nC_T4m.js";function _({config:t}){const o=n(),{id:s}=u();c(),a.useLayoutEffect(()=>{o(p.read({entity:t.entity,id:s}))},[s]);const{result:e,isSuccess:m,isLoading:f=!0}=d(T);return a.useLayoutEffect(()=>{e&&o(p.currentAction({actionType:"update",data:e}))},[e]),f?r.jsx(i,{children:r.jsx(E,{})}):r.jsx(i,{children:m?r.jsx(x,{config:t,UpdateForm:y}):r.jsx(L,{entity:t.entity})})}function H(){const t=l(),o="offer",s={PANEL_TITLE:t("Offer Leads"),DATATABLE_TITLE:t("offer_list"),ADD_NEW_ENTITY:t("add_new_offer"),ENTITY_NAME:t("Offer Leads")},e={entity:o,...s};return r.jsx(_,{config:e})}export{H as default};