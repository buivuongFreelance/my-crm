import{aU as o}from"./index-naAO4qqf.js";import{d as p}from"./index-CaIvQSeh.js";import{t as f}from"./statusTagColor-DxbKI3gy.js";import"./index-DjOprB9e.js";import{V as u}from"./IdurarOs-BY5ZwyF0.js";import{E as T}from"./selectors-BI6LnBBy.js";import{E as x}from"./index-DrUbHml-.js";import{u as g,a as y}from"./useDate-D7ThDS7d.js";import{T as E}from"./index-D6vR76mg.js";import"./ErpApp-DW8Y6j3_.js";import"./index-FaYlxcF7.js";import"./useDebounce-CMoBnV_g.js";import"./actions-0PmpmNKc.js";import"./index-KrFx5yLV.js";import"./Table-Du1-5II7.js";import"./FilePdfOutlined-DXHgmj4Q.js";import"./DeleteOutlined-DHUQa1eg.js";import"./ArrowRightOutlined-BINdqLJq.js";import"./helpers-DZNHksIk.js";import"./PlusOutlined-73nnCL3R.js";import"./index-BUK9p949.js";import"./fade-BZr9gbmB.js";import"./currency.es-9OAR_aOO.js";function b({config:t}){return o.jsx(T,{children:o.jsx(x,{config:t})})}function z(){const t=u(),{moneyFormatter:a}=g(),{dateFormat:n}=y(),i={entity:"lead",displayLabels:["name"],searchFields:"name"},s=["number","lead.name"],l=[{title:t("Number"),dataIndex:"number"},{title:t("Company"),dataIndex:["lead","name"]},{title:t("Date"),dataIndex:"date",render:e=>p(e).format(n)},{title:t("Sub Total"),dataIndex:"subTotal",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>a({amount:e,currency_code:r.currency})},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>a({amount:e,currency_code:r.currency})},{title:t("Note"),dataIndex:"notes"},{title:t("Status"),dataIndex:"status",render:e=>{let r=f(e);return o.jsx(E,{color:r.color,children:e&&t(r.label)})}}],m="offer",d={PANEL_TITLE:t("Offer Leads"),DATATABLE_TITLE:t("offer_list"),ADD_NEW_ENTITY:t("add_new_offer"),ENTITY_NAME:t("Offer Leads")},c={...{entity:m,...d},dataTableColumns:l,searchConfig:i,deleteModalLabels:s};return o.jsx(b,{config:c})}export{z as default};
