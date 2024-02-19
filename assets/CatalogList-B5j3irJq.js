import{u as o,d as s,r as g,j as t}from"./index-x653ztza.js";const S="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let h=(e=21)=>{let i="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)i+=S[n[e]&63];return i};const C="/car-adverts/assets/defaultImg-BDyUtCgQ.png",z=o.div`
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
`,B=o.div`
  overflow: hidden;
`,E=o.img`
  border-radius: 12px;
  margin-bottom: 10px;
  @media ${s.tablet} {
    margin-bottom: 20px;
  }
`,N=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${s.tablet} {
    gap: 20px;
  }
`,U=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${s.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,F=o.span`
  color: var(--text-special-clr);
  text-shadow: 0 0 1px var(--text-clr-black);
`,A=o.p`
  font-size: 12px;
  color: var(--text-clr-second-light-grey);
`,R=o.p`
  font-size: 14px;
  text-align: justify;
  font-weight: var(--font-weight-medium);
`,k=o.h3`
  font-weight: var(--font-weight-bold);
`,D=o.ul`
  padding-left: 25px;

  font-size: 12px;
  list-style: circle;
`,$=o.li`
  list-style: inherit;
`,P=o.div`
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
`,J=o.a`
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
`,O=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,W=({advert:e,address:i})=>{const[n,r]=g.useState(e.img),l=e.mileage.toString().split("");l.splice(1,0,",");const m=l.join(""),{id:f,year:d,make:c,model:x,type:u,description:b,fuelConsumption:v,engineSize:a,accessories:w,functionalities:M,rentalPrice:I,rentalConditions:L}=e,T=L.split(/\r?\n/);return t.jsxs(z,{children:[t.jsx(B,{children:t.jsx(E,{src:n,onError:()=>{r(C)},alt:`${c} ${x}`,width:"250px",height:"200px"})}),t.jsxs(N,{children:[t.jsxs(U,{children:[c," ",t.jsx(F,{children:x})," ",d]}),t.jsx(A,{children:`${i} | Id: ${f} | Year: ${d} | Type: ${u} | Fuel Consumption: ${v} | Engine Size: ${a}`}),t.jsx(R,{children:b}),t.jsx(k,{children:"Accessories and functionalities:"}),t.jsxs(D,{children:[w.map(p=>t.jsx($,{children:p},h())),M.map(p=>t.jsx($,{children:p},h()))]}),t.jsx(k,{children:"Rental Conditions: "}),t.jsxs(P,{children:[T.map(p=>t.jsx(j,{children:p},h())),t.jsxs(j,{children:["Mileage: ",m]}),t.jsxs(j,{children:["Price: ",I]})]}),t.jsx(O,{children:t.jsx(J,{href:"tel:+380730000000",children:"Rent Car"})})]})]})},K=o.div`
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
`,V=o.button`
  position: absolute;
  top: 15px;
  right: 20px;

  &:active,
  &:focus,
  &:hover {
    fill: var(--text-special-clr);
  }
`,Y=o.svg`
  width: 20px;
  height: 20px;

  @media ${s.tablet} {
    width: 30px;
    height: 30px;
  }
`,q=()=>{document.body.classList.add("no-scroll")},y=()=>{document.body.classList.remove("no-scroll")},G=({children:e,setShow:i})=>{g.useEffect(()=>{const r=l=>{l.code==="Escape"&&(i(!1),y())};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[i]);const n=r=>{r.currentTarget===r.target&&(i(!1),y())};return t.jsx(K,{onClick:n,children:t.jsxs("div",{className:"modal-body",children:[t.jsx(Q,{children:t.jsx(V,{onClick:()=>{i(!1),y()},children:t.jsx(Y,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"close-btn",children:t.jsx("path",{d:"M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"})})})}),e]})})},H=o.li`
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
`,X=o.div`
  position: relative;
  width: 100%;
`,Z=o.img`
  height: 150px;
  object-fit: cover;
`,_=o.button`
  position: absolute;
  top: 10px;
  right: 10px;
`,tt=o.svg`
  width: 20px;
  height: 20px;
`,et=o.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);

  @media ${s.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,ot=o.p`
  font-size: 20px;
  color: var(--text-special-clr);
  @media ${s.tablet} {
    font-size: 18px;
  }
`,it=o.span`
  color: var(--text-special-clr);
`,nt=o.div`
  padding: 0 5px;
`,st=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${s.tablet} {
    margin-bottom: 15px;
  }
`,rt=o.p`
  font-size: 12px;
  color: var(--text-grey-clr);
  @media ${s.tablet} {
    min-height: 45px;
  }
`,lt=o.button`
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
`,at=e=>{const i=localStorage.getItem("favorite");let n=i?JSON.parse(i):[];n.findIndex(l=>l.id===e.id)===-1&&(n.push(e),localStorage.setItem("favorite",JSON.stringify(n)))},ct=({advert:e,favorite:i,setFavorite:n})=>{const[r,l]=g.useState(!1),[m,f]=g.useState(e.img),d=e.address.split(" ").slice(-2).join(" "),c=i.some(a=>a.id===e.id),x=e.mileage.toString().split("");x.splice(1,0,",");const u=x.join(""),b=()=>{c?v():(n(a=>[...a,e]),at(e))},v=()=>{const a=i.filter(w=>w.id!==e.id);n(a),localStorage.setItem("favorite",JSON.stringify(a))};return t.jsxs(t.Fragment,{children:[t.jsxs(H,{children:[t.jsxs(X,{children:[t.jsx(_,{onClick:b,className:c?"favorite":"",children:t.jsx(tt,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none",className:c?"favorite-icon":"heart",children:t.jsx("path",{d:`M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75
	C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z`})})}),t.jsx(Z,{src:m,onError:()=>{f(C)},alt:e.make})]}),t.jsxs(nt,{children:[t.jsxs(st,{children:[t.jsxs(et,{children:[e.make," ",t.jsx(it,{children:e.model})," ",e.year]}),t.jsx(ot,{children:e.rentalPrice})]}),t.jsx(rt,{children:`${d} | ${e.rentalCompany} | ${e.type} | ${e.model} | ${u} | ${e.functionalities[0]}`})]}),t.jsx(lt,{onClick:()=>{l(!0),q()},children:"Learn More"})]}),r&&t.jsx(G,{setShow:l,children:t.jsx(W,{advert:e,address:d})})]})},dt=o.ul`
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
`,pt=({data:e,favorite:i,setFavorite:n})=>t.jsx(dt,{children:e.map(r=>t.jsx(ct,{advert:r,favorite:i,setFavorite:n},`${r.id}${h()}`))});export{pt as C};
