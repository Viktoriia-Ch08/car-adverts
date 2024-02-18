import{u as i,r as t,a as c,b as f,j as o}from"./index-B6D9lLcb.js";import{C as n}from"./CatalogList-COPifASj.js";const u=i.div`
  display: flex;
  justify-content: center;
`,d=()=>{const[s,e]=t.useState([]),a=c();return t.useEffect(()=>{a(f())},[a]),t.useEffect(()=>{const r=JSON.parse(localStorage.getItem("favorite"));r&&e(r)},[]),o.jsx(u,{children:o.jsx(n,{favorite:s,setFavorite:e,data:s})})};export{d as default};
