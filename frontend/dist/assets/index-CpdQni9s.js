import{aU as t}from"./index-naAO4qqf.js";import{V as l,ae as a,af as r,$ as i}from"./IdurarOs-BY5ZwyF0.js";import{C as j}from"./CrudModule-l53S7jua.js";import{v as b}from"./helpers-DZNHksIk.js";import{a as m}from"./useDate-D7ThDS7d.js";import{D as f}from"./index-B8nC_T4m.js";import{d as y}from"./index-CaIvQSeh.js";import"./index-6b4trjy9.js";import"./actions-D62mIOuT.js";import"./index-DjOprB9e.js";import"./index-BUK9p949.js";import"./ErpApp-DW8Y6j3_.js";import"./fade-BZr9gbmB.js";import"./useDebounce-CMoBnV_g.js";import"./countryList-BmOtkwAF.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-D6vR76mg.js";import"./DeleteOutlined-DHUQa1eg.js";import"./ArrowRightOutlined-BINdqLJq.js";import"./Table-Du1-5II7.js";import"./PlusOutlined-73nnCL3R.js";import"./currency.es-9OAR_aOO.js";function s(){const e=l(),{dateFormat:n}=m();return t.jsxs(t.Fragment,{children:[t.jsx(a.Item,{name:"name",label:e("first name"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"surname",label:e("last name"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"birthday",label:e("birthday"),rules:[{required:!0}],children:t.jsx(f,{placeholder:e("select_date"),format:n})}),t.jsx(a.Item,{name:"birthplace",label:e("birthplace"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"gender",label:e("gender"),rules:[{required:!0}],children:t.jsxs(i,{children:[t.jsx(i.Option,{value:"men",children:e("men")}),t.jsx(i.Option,{value:"women",children:e("women")})]})}),t.jsx(a.Item,{name:"email",label:e("email"),rules:[{type:"email"},{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"phone",label:e("phone"),rules:[{required:!0},{pattern:b}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"department",label:e("Department"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"position",label:e("Position"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"address",label:e("Address"),rules:[{required:!0}],children:t.jsx(r,{})}),t.jsx(a.Item,{name:"state",label:e("State"),rules:[{required:!0}],children:t.jsx(r,{})})]})}function $(){const e=l(),{dateFormat:n}=m(),d="employee",o={displayLabels:["name","surname"],searchFields:"name,surname,birthday",outputValue:"_id"},u=["name","surname"],p=[{title:e("first name"),dataIndex:"name"},{title:e("last name"),dataIndex:"surname"},{title:e("Birthday"),dataIndex:"birthday",render:I=>y(I).format(n)},{title:e("Department"),dataIndex:"department"},{title:e("Position"),dataIndex:"position"},{title:e("Phone"),dataIndex:"phone"},{title:e("Email"),dataIndex:"email"}],x=[{title:e("first name"),dataIndex:"name"},{title:e("last name"),dataIndex:"surname"},{title:e("Birthday"),dataIndex:"birthday",isDate:!0},{title:e("birthplace"),dataIndex:"birthplace"},{title:e("gender"),dataIndex:"gender"},{title:e("Department"),dataIndex:"department"},{title:e("Position"),dataIndex:"position"},{title:e("address"),dataIndex:"address"},{title:e("state"),dataIndex:"state"},{title:e("Phone"),dataIndex:"phone"},{title:e("Email"),dataIndex:"email"}],c={PANEL_TITLE:e("employee"),DATATABLE_TITLE:e("employee_list"),ADD_NEW_ENTITY:e("add_new_employee"),ENTITY_NAME:e("employee")},h={...{entity:d,...c},readColumns:x,dataTableColumns:p,searchConfig:o,deleteModalLabels:u};return t.jsx(j,{createForm:t.jsx(s,{}),updateForm:t.jsx(s,{isUpdateForm:!0}),config:h})}export{$ as default};
