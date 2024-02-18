import{u as t,d as a,a as o,r as s,b as c,j as e}from"./index-B6D9lLcb.js";const i="/car-adverts/assets/bg-BNlP7cxL.jpg",l=t.div`
  background-image: linear-gradient(
      rgba(47, 46, 48, 0.5),
      rgba(47, 46, 48, 0.5)
    ),
    url(${i});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${a.tablet} {
    display: flex;
    height: 360px;
    width: 100%;
    background-image: linear-gradient(
        rgba(47, 46, 48, 0.5),
        rgba(47, 46, 48, 0.5)
      ),
      url(${i});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -58px;
  }
  @media ${a.desktop} {
    height: 600px;
  }
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 15px;
  color: var(--home-page-text-clr);
  @media ${a.desktop} {
    gap: 30px;
  }
`,p=t.h1`
  text-align: center;
  font-size: 36px;
  font-weight: var(--font-weight-bold);
`,n=t.p`
  text-align: justify;
  @media ${a.tablet} {
    font-size: 12px;
    width: 325px;
  }
  @media ${a.desktop} {
    width: 500px;
  }
`,g=()=>{const r=o();return s.useEffect(()=>{r(c())},[r]),e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(p,{children:"Welcome to RentalCar website!"}),e.jsx(n,{children:"RentalCar is a car rental company that allows you to rent a car quickly and cheaply. We offer short-term and long-term car rental. All cars have compulsory civil liability insurance and an additional comprehensive insurance package. In addition, all vehicles are properly prepared for the trip - they have all the necessary fluids and a full tank of fuel."}),e.jsx(n,{children:"Our clients can choose cars with gasoline and diesel engines, with manual or automatic transmission, so that everyone can choose a vehicle according to their skills."})]})})};export{g as default};
