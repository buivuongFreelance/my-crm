import{aU as r}from"./index-Bv18HJQU.js";import{C as s}from"./CrudModule-CLO5yYMv.js";import{D as o}from"./index-BD7wZ83b.js";import{c as l}from"./color-DHucoY0N.js";import{V as p}from"./IdurarOs-BevDxMWK.js";import"./index-BkvwX0MN.js";import"./actions-BQNAuLgM.js";import"./index-DF8oGiPL.js";import"./helpers-CqJQh70C.js";import"./index-DTz_ggdv.js";import"./ErpApp-BMHG2KFU.js";import"./fade-0y7LxeV7.js";import"./index-CSDcifUo.js";import"./useDate-XO3WheGS.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-DNi3U6KS.js";import"./countryList-CFUMaLBV.js";import"./index-KrFx5yLV.js";import"./index-ZBeZMVsW.js";import"./DeleteOutlined-BD6ngZSu.js";import"./ArrowRightOutlined-lS-VfCKT.js";import"./Table-KtTCVvwG.js";import"./PlusOutlined-nG56fPNX.js";import"./index-Bw4PeQrS.js";import"./index-DLVe4vm5.js";import"./index-BxeXIHEY.js";import"./index-1BkUJNdY.js";import"./index-FX6C8nR1.js";const m=["USD","CAD","EUR","AED","AFN","ALL","AMD","ARS","AUD","AZN","BAM","BDT","BGN","BHD","BIF","BND","BOB","BRL","BWP","BYR","BZD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","GBP","GEL","GHS","GNF","GTQ","HKD","HNL","HRK","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KHR","KMF","KRW","KWD","KZT","LBP","LKR","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MOP","MUR","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SDG","SEK","SGD","SOS","SYP","THB","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","XAF","XOF","YER","ZAR","ZMK"],D=m.map(e=>({value:e,label:e})),t={currency_name:{type:"string",required:!0},color:{type:"color",options:[...l],required:!0,disableForTable:!0},currency_code:{type:"select",showSearch:!0,required:!0,options:D},currency_symbol:{type:"stringWithColor",required:!0,color:"gold"},currency_position:{type:"selectWithTranslation",required:!0,renderAsTag:!0,defaultValue:"before",options:[{value:"before",label:"before",color:"magenta"},{value:"after",label:"after",color:"purple"}]},decimal_sep:{label:"decimal_separator",type:"string",required:!0,defaultValue:"."},thousand_sep:{label:"thousand_separator",type:"string",required:!0,defaultValue:" "},cent_precision:{type:"number",required:!0,defaultValue:2},zero_format:{type:"boolean",required:!0,defaultValue:!1},enabled:{type:"boolean"}};function W(){const e=p(),c="currency",a={displayLabels:["currency_name","currency_code","currency_symbol"],searchFields:"currency_name,currency_code,currency_symbol"},i=["currency_name"],n={PANEL_TITLE:e("currency"),DATATABLE_TITLE:e("currency_list"),ADD_NEW_ENTITY:e("add_new_currency"),ENTITY_NAME:e("currency")},u={...{entity:c,...n},fields:t,searchConfig:a,deleteModalLabels:i};return r.jsx(s,{createForm:r.jsx(o,{fields:t}),updateForm:r.jsx(o,{fields:t}),config:u})}export{W as default};