import{aU as t}from"./index-Bv18HJQU.js";import{V as l,ae as a,af as r,$ as i}from"./IdurarOs-BevDxMWK.js";import{C as j}from"./CrudModule-CLO5yYMv.js";import{v as b}from"./helpers-CqJQh70C.js";import{a as m}from"./useDate-XO3WheGS.js";import{D as f}from"./index-FX6C8nR1.js";import{d as y}from"./index-CSDcifUo.js";import"./index-BkvwX0MN.js";import"./actions-BQNAuLgM.js";import"./index-DF8oGiPL.js";import"./index-DTz_ggdv.js";import"./ErpApp-BMHG2KFU.js";import"./fade-0y7LxeV7.js";import"./useDebounce-DNi3U6KS.js";import"./countryList-CFUMaLBV.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-ZBeZMVsW.js";import"./DeleteOutlined-BD6ngZSu.js";import"./ArrowRightOutlined-lS-VfCKT.js";import"./Table-KtTCVvwG.js";import"./PlusOutlined-nG56fPNX.js";import"./currency.es-9OAR_aOO.js";function s(){const e=l(),{dateFormat:n}=m();return t.jsxs(t.Fragment,{children:[t.jsx(a.Item,{name:"name",label:e("first name"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"surname",label:e("last name"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"birthday",label:e("birthday"),rules:[{required:!0}],children:t.jsx(f,{placeholder:e("select_date"),format:n})}),t.jsx(a.Item,{name:"birthplace",label:e("birthplace"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"gender",label:e("gender"),rules:[{required:!0}],children:t.jsxs(i,{children:[t.jsx(i.Option,{value:"men",children:e("men")}),t.jsx(i.Option,{value:"women",children:e("women")})]})}),t.jsx(a.Item,{name:"email",label:e("email"),rules:[{type:"email"},{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"phone",label:e("phone"),rules:[{required:!0},{pattern:b}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"department",label:e("Department"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"position",label:e("Position"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"address",label:e("Address"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"state",label:e("State"),rules:[{required:!0}],children:t.jsx(r,{})})]})}function $(){const e=l(),{dateFormat:n}=m(),d="employee",o={displayLabels:["name","surname"],searchFields:"name,surname,birthday",outputValue:"_id"},u=["name","surname"],p=[{title:e("first name"),dataIndex:"name"},{title:e("last name"),dataIndex:"surname"},{title:e("Birthday"),dataIndex:"birthday",render:I=>y(I).format(n)},{title:e("Department"),dataIndex:"department"},{title:e("Position"),dataIndex:"position"},{title:e("Phone"),dataIndex:"phone"},{title:e("Email"),dataIndex:"email"}],x=[{title:e("first name"),dataIndex:"name"},{title:e("last name"),dataIndex:"surname"},{title:e("Birthday"),dataIndex:"birthday",isDate:!0},{title:e("birthplace"),dataIndex:"birthplace"},{title:e("gender"),dataIndex:"gender"},{title:e("Department"),dataIndex:"department"},{title:e("Position"),dataIndex:"position"},{title:e("address"),dataIndex:"address"},{title:e("state"),dataIndex:"state"},{title:e("Phone"),dataIndex:"phone"},{title:e("Email"),dataIndex:"email"}],c={PANEL_TITLE:e("employee"),DATATABLE_TITLE:e("employee_list"),ADD_NEW_ENTITY:e("add_new_employee"),ENTITY_NAME:e("employee")},h={...{entity:d,...c},readColumns:x,dataTableColumns:p,searchConfig:o,deleteModalLabels:u};return t.jsx(j,{createForm:t.jsx(s,{}),updateForm:t.jsx(s,{isUpdateForm:!0}),config:h})}export{$ as default};