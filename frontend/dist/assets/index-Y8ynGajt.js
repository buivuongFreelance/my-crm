import{aU as e}from"./index-Bv18HJQU.js";import{C as s}from"./CrudModule-CLO5yYMv.js";import{D as r}from"./index-BD7wZ83b.js";import{V as c}from"./IdurarOs-BevDxMWK.js";import"./index-BkvwX0MN.js";import"./actions-BQNAuLgM.js";import"./index-DF8oGiPL.js";import"./helpers-CqJQh70C.js";import"./index-DTz_ggdv.js";import"./ErpApp-BMHG2KFU.js";import"./fade-0y7LxeV7.js";import"./index-CSDcifUo.js";import"./useDate-XO3WheGS.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-DNi3U6KS.js";import"./countryList-CFUMaLBV.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-ZBeZMVsW.js";import"./DeleteOutlined-BD6ngZSu.js";import"./ArrowRightOutlined-lS-VfCKT.js";import"./Table-KtTCVvwG.js";import"./PlusOutlined-nG56fPNX.js";import"./index-Bw4PeQrS.js";import"./index-DLVe4vm5.js";import"./index-BxeXIHEY.js";import"./index-1BkUJNdY.js";import"./index-FX6C8nR1.js";const o={name:{type:"string",required:!0},mainContact:{type:"search",renderAsTag:!0,label:"Contact",entity:"people",redirectLabel:"Add New Person",withRedirect:!0,urlToRedirect:"/people",displayLabels:["firstname","lastname"],searchFields:"firstname,lastname",dataIndex:["mainContact","firstname"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email",required:!0},website:{type:"url"}};function W(){const t=c(),i="company",a={displayLabels:["name"],searchFields:"name,phone,eamil"},m=["name"],p={PANEL_TITLE:t("company"),DATATABLE_TITLE:t("company_list"),ADD_NEW_ENTITY:t("add_new_company"),ENTITY_NAME:t("company")},n={...{entity:i,...p},fields:o,searchConfig:a,deleteModalLabels:m};return e.jsx(s,{createForm:e.jsx(r,{fields:o}),updateForm:e.jsx(r,{fields:o}),config:n})}export{W as default};
