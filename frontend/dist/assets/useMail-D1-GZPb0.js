import{e as i}from"./actions-0PmpmNKc.js";import{aV as n,b8 as r}from"./index-naAO4qqf.js";import{h as c}from"./selectors-BI6LnBBy.js";function d({entity:s}){const{isLoading:t}=n(c),o=r();return{send:a=>{const e={id:a};o(i.mail({entity:s,jsonData:e}))},isLoading:t}}export{d as u};