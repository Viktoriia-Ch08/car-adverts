import{u as o,d as s,r as g,j as e}from"./index-UIdqI4Xe.js";const L="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let h=(t=21)=>{let i="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)i+=L[n[t]&63];return i};const C="/car-adverts/assets/defaultImg-BDyUtCgQ.png",B=o.div`
  padding-top: 45px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;

  @media ${s.tablet} {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
  }
`,E=o.div`
  overflow: hidden;
`,U=o.img`
  border-radius: 12px;
  margin-bottom: 10px;
  @media ${s.tablet} {
    margin-bottom: 20px;
  }
`,F=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${s.tablet} {
    gap: 20px;
  }
`,A=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${s.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,N=o.span`
  color: var(--text-special-clr);
  text-shadow: 0 0 1px var(--text-clr-black);
`,R=o.p`
  font-size: 12px;
  color: var(--text-clr-second-light-grey);
`,D=o.p`
  font-size: 14px;
  text-align: justify;
  font-weight: var(--font-weight-medium);
`,k=o.h3`
  font-weight: var(--font-weight-bold);
`,P=o.ul`
  padding-left: 25px;

  font-size: 12px;
  list-style: circle;
`,$=o.li`
  list-style: inherit;
`,J=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`,j=o.p`
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
`,O=o.a`
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

  @media ${s.tablet} {
    width: 300px;
    height: 50px;

    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }
`,W=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=({advert:t,address:i})=>{const[n,r]=g.useState(t.img),l=t.mileage.toString().split("");l.splice(1,0,",");const m=l.join(""),{id:f,year:c,make:d,model:x,type:u,description:b,fuelConsumption:v,engineSize:a,accessories:w,functionalities:I,rentalPrice:T,rentalConditions:S}=t,z=S.split(/\r?\n/);return e.jsxs(B,{children:[e.jsx(E,{children:e.jsx(U,{src:n,onError:()=>{r(C)},alt:`${d} ${x}`,width:"250px",height:"200px"})}),e.jsxs(F,{children:[e.jsxs(A,{children:[d," ",e.jsx(N,{children:x})," ",c]}),e.jsx(R,{children:`${i} | Id: ${f} | Year: ${c} | Type: ${u} | Fuel Consumption: ${v} | Engine Size: ${a}`}),e.jsx(D,{children:b}),e.jsx(k,{children:"Accessories and functionalities:"}),e.jsxs(P,{children:[w.map(p=>e.jsx($,{children:p},h())),I.map(p=>e.jsx($,{children:p},h()))]}),e.jsx(k,{children:"Rental Conditions: "}),e.jsxs(J,{children:[z.map(p=>e.jsx(j,{children:p},h())),e.jsxs(j,{children:["Mileage: ",m]}),e.jsxs(j,{children:["Price: ",T]})]}),e.jsx(W,{children:e.jsx(O,{href:"tel:+380730000000",children:"Rent Car"})})]})]})},Q=o.div`
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
`,V=o.div`
  position: relative;
`,Y=o.button`
  position: absolute;
  top: 15px;
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

  @media ${s.tablet} {
    width: 30px;
    height: 30px;
  }
`,M="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M23.6%202c-3.363%200-6.258%202.736-7.599%205.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637%200-8.4%203.764-8.4%208.401%200%209.433%209.516%2011.906%2016.001%2021.232%206.13-9.268%2015.999-12.1%2015.999-21.232%200-4.637-3.763-8.401-8.4-8.401z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-upload'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M24%2018c0%204.414-3.586%208-8%208s-8-3.586-8-8%203.586-8%208-8h4l0.023%204.020%206.012-6.020-6.012-6v4h-4.023c-6.625%200-12%205.375-12%2012s5.375%2012%2012%2012%2012-5.375%2012-12h-4z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2020%2020'%3e%3cpath%20d='M10%208.586l-7.071-7.071-1.414%201.414%207.071%207.071-7.071%207.071%201.414%201.414%207.071-7.071%207.071%207.071%201.414-1.414-7.071-7.071%207.071-7.071-1.414-1.414-7.071%207.071z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",G=()=>{document.body.classList.add("no-scroll")},y=()=>{document.body.classList.remove("no-scroll")},H=({children:t,setShow:i})=>{g.useEffect(()=>{const r=l=>{l.code==="Escape"&&(i(!1),y())};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[i]);const n=r=>{r.currentTarget===r.target&&(i(!1),y())};return e.jsx(Q,{onClick:n,children:e.jsxs("div",{className:"modal-body",children:[e.jsx(V,{children:e.jsx(Y,{onClick:()=>{i(!1),y()},children:e.jsx(q,{children:e.jsx("use",{href:`${M}#icon-close`})})})}),t]})})},X=o.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${s.tablet} {
    width: calc((100% - 40px) / 3);
    height: 325px;
  }

  @media ${s.desktop} {
    width: calc((100% - 60px) / 4);
    min-height: 325px;
  }
`,Z=o.div`
  position: relative;
  width: 100%;
`,_=o.img`
  height: 150px;
  object-fit: cover;
`,ee=o.button`
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
`,te=o.svg`
  width: 20px;
  height: 20px;
`,oe=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${s.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,ie=o.p`
  font-size: 20px;
  color: var(--text-special-clr);
  @media ${s.tablet} {
    font-size: 18px;
  }
`,ne=o.span`
  color: var(--text-special-clr);
`,se=o.div`
  padding: 0 5px;
`,re=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${s.tablet} {
    margin-bottom: 15px;
  }
`,le=o.p`
  font-size: 12px;
  color: var(--text-grey-clr);
  @media ${s.tablet} {
    min-height: 45px;
  }
`,ae=o.button`
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

  @media ${s.tablet} {
    width: 100%;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-dark-hover-focus);
    }
  }
`,ce=t=>{const i=localStorage.getItem("favorite");let n=i?JSON.parse(i):[];n.findIndex(l=>l.id===t.id)===-1&&(n.push(t),localStorage.setItem("favorite",JSON.stringify(n)))},de=({advert:t,favorite:i,setFavorite:n})=>{const[r,l]=g.useState(!1),[m,f]=g.useState(t.img),c=t.address.split(" ").slice(-2).join(" "),d=i.some(a=>a.id===t.id),x=t.mileage.toString().split("");x.splice(1,0,",");const u=x.join(""),b=()=>{d?v():(n(a=>[...a,t]),ce(t))},v=()=>{const a=i.filter(w=>w.id!==t.id);n(a),localStorage.setItem("favorite",JSON.stringify(a))};return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(ee,{onClick:b,className:d?"favorite":"",children:e.jsx(te,{children:e.jsx("use",{href:`${M}#icon-heart`})})}),e.jsx(_,{src:m,onError:()=>{f(C)},alt:t.make})]}),e.jsxs(se,{children:[e.jsxs(re,{children:[e.jsxs(oe,{children:[t.make," ",e.jsx(ne,{children:t.model})," ",t.year]}),e.jsx(ie,{children:t.rentalPrice})]}),e.jsx(le,{children:`${c} | ${t.rentalCompany} | ${t.type} | ${t.model} | ${u} | ${t.functionalities[0]}`})]}),e.jsx(ae,{onClick:()=>{l(!0),G()},children:"Learn More"})]}),r&&e.jsx(H,{setShow:l,children:e.jsx(K,{advert:t,address:c})})]})},xe=o.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 30px;
  padding-left: 0;

  @media ${s.tablet} {
    width: 100%;
  }
`,he=({data:t,favorite:i,setFavorite:n})=>e.jsx(xe,{children:t.map(r=>e.jsx(de,{advert:r,favorite:i,setFavorite:n},`${r.id}${h()}`))});export{he as C,M as i};
