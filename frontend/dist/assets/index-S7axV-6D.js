import{aU as e}from"./index-naAO4qqf.js";import{V as m,ae as n,af as j,al as i,C as s}from"./IdurarOs-BY5ZwyF0.js";import{C}from"./CrudModule-l53S7jua.js";import{I}from"./index-BHEsWg-e.js";import{S as d}from"./countryList-BmOtkwAF.js";import"./index-6b4trjy9.js";import"./actions-D62mIOuT.js";import"./index-DjOprB9e.js";import"./helpers-DZNHksIk.js";import"./index-BUK9p949.js";import"./ErpApp-DW8Y6j3_.js";import"./fade-BZr9gbmB.js";import"./index-CaIvQSeh.js";import"./useDate-D7ThDS7d.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-CMoBnV_g.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-D6vR76mg.js";import"./DeleteOutlined-DHUQa1eg.js";import"./ArrowRightOutlined-BINdqLJq.js";import"./Table-Du1-5II7.js";import"./PlusOutlined-73nnCL3R.js";function o({isUpdateForm:t=!1}){const r=m();return e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:r("name"),name:"taxName",rules:[{required:!0}],children:e.jsx(j,{})}),e.jsx(n.Item,{label:r("Value"),name:"taxValue",rules:[{required:!0,message:"Please input tax value!",type:"number",min:0,max:100}],children:e.jsx(I,{min:0,max:100,suffix:"%",style:{width:"100%"}})}),e.jsx(n.Item,{label:r("enabled"),name:"enabled",style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},valuePropName:"checked",initialValue:!0,children:e.jsx(d,{checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(s,{})})}),e.jsx(n.Item,{label:r("Default"),name:"isDefault",style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},valuePropName:"checked",children:e.jsx(d,{checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(s,{})})})]})}function W(){const t=m(),r="taxes",u={displayLabels:["name"],searchFields:"name",outputValue:"_id"},x=["name"],c=[{title:t("Name"),dataIndex:"taxName"},{title:t("Value"),dataIndex:"taxValue"},{title:t("Default"),dataIndex:"isDefault"},{title:t("enabled"),dataIndex:"enabled"}],p=[{title:t("Name"),dataIndex:"taxName"},{title:t("Value"),dataIndex:"taxValue",render:(l,a)=>e.jsx(e.Fragment,{children:a.taxValue+"%"})},{title:t("Default"),dataIndex:"isDefault",key:"isDefault",onCell:(l,a)=>({props:{style:{width:"60px"}}}),render:(l,a)=>e.jsx(d,{checked:a.isDefault,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(s,{})})},{title:t("enabled"),dataIndex:"enabled",key:"enabled",onCell:(l,a)=>({props:{style:{width:"60px"}}}),render:(l,a)=>e.jsx(d,{checked:a.enabled,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(s,{})})}],h={PANEL_TITLE:t("taxes"),DATATABLE_TITLE:t("taxes_list"),ADD_NEW_ENTITY:t("add_new_tax"),ENTITY_NAME:t("taxes")},f={...{entity:r,...h},readColumns:c,dataTableColumns:p,searchConfig:u,deleteModalLabels:x};return e.jsx(C,{createForm:e.jsx(o,{}),updateForm:e.jsx(o,{isUpdateForm:!0}),config:f})}export{W as default};