import{u as o,d as l,r as x,j as t,t as z}from"./index-C7k9CGUN.js";const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let g=(e=21)=>{let i="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)i+=E[r[e]&63];return i};const $="/car-adverts/assets/defaultImg-BDyUtCgQ.png",L=o.div`
  padding-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;

  @media ${l.tablet} {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
  }
`,N=o.div`
  overflow: hidden;
`,A=o.img`
  border-radius: 12px;
  margin-bottom: 10px;
  @media ${l.tablet} {
    margin-bottom: 20px;
  }
`,F=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${l.tablet} {
    gap: 20px;
  }
`,U=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${l.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,O=o.span`
  color: var(--text-special-clr);
  text-shadow: 0 0 1px var(--text-clr-black);
`,R=o.p`
  font-size: 12px;
  color: var(--text-clr-second-light-grey);
`,D=o.p`
  font-size: 14px;
  text-align: justify;
  font-weight: var(--font-weight-medium);
`,j=o.h3`
  font-weight: var(--font-weight-bold);
`,P=o.ul`
  padding-left: 25px;

  font-size: 12px;
  list-style: circle;
`,k=o.li`
  list-style: inherit;
`,J=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`,y=o.p`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  font-size: 10px;
  text-align: center;
  border: 1px solid var(--text-clr-black);
  border-radius: 12px;
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
`,K=o.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);
  border: 1px solid var(--text-clr-black);

  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  @media ${l.tablet} {
    width: 300px;
    height: 50px;

    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }
`,_=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,V=({advert:e,address:i})=>{const[r,s]=x.useState(e.img),{id:c,year:n,make:a,model:d,type:f,description:m,fuelConsumption:u,engineSize:b,accessories:v,functionalities:p,rentalPrice:w,rentalConditions:T,mileage:S}=e,B=T.split(/\r?\n/);return t.jsxs(L,{children:[t.jsx(N,{children:t.jsx(A,{src:r,onError:()=>{s($)},alt:`${a} ${d}`,width:"250px",height:"200px"})}),t.jsxs(F,{children:[t.jsxs(U,{children:[a," ",t.jsx(O,{children:d})," ",n]}),t.jsx(R,{children:`${i} | Id: ${c} | Year: ${n} | Type: ${f} | Fuel Consumption: ${u} | Engine Size: ${b}`}),t.jsx(D,{children:m}),t.jsx(j,{children:"Accessories and functionalities:"}),t.jsxs(P,{children:[v.map(h=>t.jsx(k,{children:h},g())),p.map(h=>t.jsx(k,{children:h},g()))]}),t.jsx(j,{children:"Rental Conditions: "}),t.jsxs(J,{children:[B.map(h=>t.jsx(y,{children:h},g())),t.jsxs(y,{children:["Mileage: ",S]}),t.jsxs(y,{children:["Price: ",w]})]}),t.jsx(_,{children:t.jsx(K,{href:"tel:+380730000000",children:"Rent Car"})})]})]})},W=o.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  backdrop-filter: blur(7px);
  overflow: auto;
  transition: opacity 300ms linear, visibility 300ms linear;

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 90%;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-color: var(--modal-bg-clr);
  }
`,Q=o.div`
  position: relative;
`,Y=o.button`
  position: absolute;
  top: 20px;
  right: 20px;
  transform: fill var(--hover-focus-trans);

  &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  }
`,q=o.svg`
  width: 20px;
  height: 20px;

  @media ${l.tablet} {
    width: 30px;
    height: 30px;
  }
`;var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function r(){for(var n="",a=0;a<arguments.length;a++){var d=arguments[a];d&&(n=c(n,s(d)))}return n}function s(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return r.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var a="";for(var d in n)i.call(n,d)&&n[d]&&(a=c(a,d));return a}function c(n,a){return a?n?n+" "+a:n+a:n}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(C);var G=C.exports;const H=z(G),X=["xxl","xl","lg","md","sm","xs"],Z="xs",tt=x.createContext({prefixes:{},breakpoints:X,minBreakpoint:Z});function et(e,i){const{prefixes:r}=x.useContext(tt);return e||r[i]||i}const M=x.forwardRef(({className:e,bsPrefix:i,as:r="div",...s},c)=>(i=et(i,"modal-body"),t.jsx(r,{ref:c,className:H(e,i),...s})));M.displayName="ModalBody";const ot=M,I="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M23.6%202c-3.363%200-6.258%202.736-7.599%205.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637%200-8.4%203.764-8.4%208.401%200%209.433%209.516%2011.906%2016.001%2021.232%206.13-9.268%2015.999-12.1%2015.999-21.232%200-4.637-3.763-8.401-8.4-8.401z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-upload'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M24%2018c0%204.414-3.586%208-8%208s-8-3.586-8-8%203.586-8%208-8h4l0.023%204.020%206.012-6.020-6.012-6v4h-4.023c-6.625%200-12%205.375-12%2012s5.375%2012%2012%2012%2012-5.375%2012-12h-4z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2020%2020'%3e%3cpath%20d='M10%208.586l-7.071-7.071-1.414%201.414%207.071%207.071-7.071%207.071%201.414%201.414%207.071-7.071%207.071%207.071%201.414-1.414-7.071-7.071%207.071-7.071-1.414-1.414-7.071%207.071z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",it=({children:e,setShow:i})=>{x.useEffect(()=>{const s=c=>{c.code==="Escape"&&i(!1)};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[i]);const r=s=>{s.currentTarget===s.target&&i(!1)};return t.jsx(W,{onClick:r,children:t.jsxs(ot,{className:"modal-body",children:[t.jsx(Q,{children:t.jsx(Y,{onClick:()=>i(!1),children:t.jsx(q,{children:t.jsx("use",{href:`${I}#icon-close`})})})}),e]})})},nt=o.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${l.tablet} {
    width: calc((100% - 40px) / 3);
    height: 325px;
  }

  @media ${l.desktop} {
    width: calc((100% - 60px) / 4);
    min-height: 325px;
  }
`,rt=o.div`
  position: relative;
  width: 100%;
`,st=o.img`
  height: 150px;
  object-fit: cover;
`,at=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  backdrop-filter: blur(1px);
  border: 1px solid var(--text-clr-black);
  border-radius: 8px;
  fill: var(--text-clr-white);
  stroke: var(--text-clr-black);
  &.favorite {
    fill: var(--favorite-icon-clr);
  }
`,lt=o.svg`
  width: 20px;
  height: 20px;
`,ct=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${l.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,dt=o.p`
  font-size: 20px;
  color: var(--text-special-clr);
  @media ${l.tablet} {
    font-size: 18px;
  }
`,pt=o.span`
  color: var(--text-special-clr);
`,xt=o.div`
  padding: 0 5px;
`,ht=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${l.tablet} {
    margin-bottom: 15px;
  }
`,ft=o.p`
  font-size: 12px;
  color: var(--text-grey-clr);
  @media ${l.tablet} {
    min-height: 45px;
  }
`,mt=o.button`
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
  border: 2px solid var(--text-clr-light-grey);

  &:active {
    background-color: var(--btn-dark-hover-focus);
  }

  @media ${l.tablet} {
    width: 100%;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-dark-hover-focus);
    }
  }
`,gt=e=>{const i=localStorage.getItem("favorite");let r=i?JSON.parse(i):[];r.findIndex(c=>c.id===e.id)===-1&&(r.push(e),localStorage.setItem("favorite",JSON.stringify(r)))},ut=({advert:e,favorite:i,setFavorite:r})=>{const[s,c]=x.useState(!1),[n,a]=x.useState(e.img),d=e.address.split(" ").slice(-2).join(" "),f=i.some(p=>p.id===e.id),m=e.mileage.toString().split("");m.splice(1,0,",");const u=m.join(""),b=()=>{f?v():(r(p=>[...p,e]),gt(e))},v=()=>{const p=i.filter(w=>w.id!==e.id);r(p),localStorage.setItem("favorite",JSON.stringify(p))};return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsxs(rt,{children:[t.jsx(at,{onClick:b,className:f?"favorite":"",children:t.jsx(lt,{children:t.jsx("use",{href:`${I}#icon-heart`})})}),t.jsx(st,{src:n,onError:()=>{a($)},alt:e.make})]}),t.jsxs(xt,{children:[t.jsxs(ht,{children:[t.jsxs(ct,{children:[e.make," ",t.jsx(pt,{children:e.model})," ",e.year]}),t.jsx(dt,{children:e.rentalPrice})]}),t.jsx(ft,{children:`${d} | ${e.rentalCompany} | ${e.type} | ${e.model} | ${u} | ${e.functionalities[0]}`})]}),t.jsx(mt,{onClick:()=>{c(!0)},children:"Learn More"})]}),s&&t.jsx(it,{setShow:c,children:t.jsx(V,{advert:e,address:d})})]})},bt=o.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 30px;
  padding-left: 0;

  @media ${l.tablet} {
    width: 100%;
  }
`,wt=({data:e,favorite:i,setFavorite:r})=>t.jsx(bt,{children:e.map(s=>t.jsx(ut,{advert:s,favorite:i,setFavorite:r},`${s.id}${g()}`))});export{wt as C,I as i};
