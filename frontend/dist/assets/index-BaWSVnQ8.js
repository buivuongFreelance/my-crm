import{aU as t}from"./index-naAO4qqf.js";import{C as m}from"./CrudModule-l53S7jua.js";import{D as o}from"./index-BwE8ESgz.js";import{V as c}from"./IdurarOs-BY5ZwyF0.js";import"./index-6b4trjy9.js";import"./actions-D62mIOuT.js";import"./index-DjOprB9e.js";import"./helpers-DZNHksIk.js";import"./index-BUK9p949.js";import"./ErpApp-DW8Y6j3_.js";import"./fade-BZr9gbmB.js";import"./index-CaIvQSeh.js";import"./useDate-D7ThDS7d.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-CMoBnV_g.js";import"./countryList-BmOtkwAF.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-D6vR76mg.js";import"./DeleteOutlined-DHUQa1eg.js";import"./ArrowRightOutlined-BINdqLJq.js";import"./Table-Du1-5II7.js";import"./PlusOutlined-73nnCL3R.js";import"./index-FaYlxcF7.js";import"./index-BeBT2rjx.js";import"./index-B8zpxNK7.js";import"./index-BHEsWg-e.js";import"./index-B8nC_T4m.js";const r={name:{type:"string",required:!0},expenseCategory:{type:"async",label:"Expense Category",displayLabels:["expenseCategory","name"],dataIndex:["expenseCategory","name"],entity:"expensecategory",required:!0},currency:{type:"selectCurrency"},total:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function W(){const e=c(),p="expense",i={displayLabels:["name"],searchFields:"name"},n=["name"],s={PANEL_TITLE:e("Expense"),DATATABLE_TITLE:e("Expense_list"),ADD_NEW_ENTITY:e("add_new_Expense"),ENTITY_NAME:e("Expense")},a={...{entity:p,...s},fields:r,searchConfig:i,deleteModalLabels:n};return t.jsx(m,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:a})}export{W as default};