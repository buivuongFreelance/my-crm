import{aU as a}from"./index-naAO4qqf.js";import{d as i}from"./index-CaIvQSeh.js";import{V as c}from"./IdurarOs-BY5ZwyF0.js";import{t as d}from"./statusTagColor-DxbKI3gy.js";import{a as f,u as T}from"./useDate-D7ThDS7d.js";import"./index-DjOprB9e.js";import{E as g}from"./selectors-BI6LnBBy.js";import{E as I}from"./index-DrUbHml-.js";import{C as E}from"./ErpApp-DW8Y6j3_.js";import{T as l}from"./index-D6vR76mg.js";import"./currency.es-9OAR_aOO.js";import"./index-FaYlxcF7.js";import"./useDebounce-CMoBnV_g.js";import"./actions-0PmpmNKc.js";import"./index-KrFx5yLV.js";import"./Table-Du1-5II7.js";import"./FilePdfOutlined-DXHgmj4Q.js";import"./DeleteOutlined-DHUQa1eg.js";import"./ArrowRightOutlined-BINdqLJq.js";import"./helpers-DZNHksIk.js";import"./PlusOutlined-73nnCL3R.js";import"./index-BUK9p949.js";import"./fade-BZr9gbmB.js";function _({config:t}){const n=c();return a.jsx(g,{children:a.jsx(I,{config:t,extra:[{label:n("Record Payment"),key:"recordPayment",icon:a.jsx(E,{})}]})})}function G(){const t=c(),{dateFormat:n}=f(),m="invoice",{moneyFormatter:o}=T(),s={entity:"client",displayLabels:["name"],searchFields:"name"},p=["number","client.name"],u=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(n)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(n)},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("paid"),dataIndex:"credit",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(r.label)})}},{title:t("Payment"),dataIndex:"paymentStatus",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(e)})}},{title:t("Created By"),dataIndex:["createdBy","name"]}],x={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},y={...{entity:m,...x},dataTableColumns:u,searchConfig:s,deleteModalLabels:p};return a.jsx(_,{config:y})}export{G as default};
