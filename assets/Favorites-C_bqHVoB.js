import{u as r,r as a,j as o}from"./index-UIdqI4Xe.js";import{C as i}from"./CatalogList-reG8l469.js";const c=r.div`
  display: flex;
  justify-content: center;
`,u=()=>{const[t,e]=a.useState([]);return a.useEffect(()=>{const s=JSON.parse(localStorage.getItem("favorite"));s&&e(s)},[]),o.jsx(c,{children:o.jsx(i,{favorite:t,setFavorite:e,data:t})})};export{u as default};
