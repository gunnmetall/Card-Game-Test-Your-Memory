var k=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&b(e,a,t[a]);if(h)for(var a of h(t))j.call(t,a)&&b(e,a,t[a]);return e},g=(e,t)=>E(e,I(t));import{s as d,C,R as o,r as f,a as $}from"./vendor.ae04eb71.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&m(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};O();const _=d.div`
  position: relative;
  perspective: 1000px;

  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`,y=C`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
`,B=d.img`
  ${y}

  z-index: ${e=>e.flipped?2:1};
  transform: ${e=>e.flipped?"rotate(0deg)":"rotateY(180deg)"};
`,z=d.img`
  ${y}

  z-index: ${e=>e.flipped?1:2};
  transform: ${e=>e.flipped?"rotateY(180deg)":"rotate(360deg)"};
  position: absolute;
  top: 0px;
  left: 0px;
`,L=({card:e,callback:t})=>{const a=()=>{e.clickable&&t(e)};return o.createElement(_,{onClick:a},o.createElement(B,{flipped:e.flipped,src:e.frontImage,alt:"card-front"}),o.createElement(z,{flipped:e.flipped,src:e.backImage,alt:"card-back"}))};var M="/assets/backgroundImage.83c75940.png";const P=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-image: url(${M});

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 70px 20px;
  }
`,A=d.div`
  flex-direction: column;
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 44px;
    font-weight: 500;
    line-height: 52px;
    text-align: center;
    color: #d1f4ff;
    text-shadow: 0px 2px 29px #90d8ef;
    margin-top: 20px;

    @media (max-width: 1000px) {
      font-size: 30px;
    }
  }

  @media (max-width: 1000px) {
    margin-bottom: 70px;
  }
`,N=d.img`
  width: 400px;
  @media (max-width: 1000px) {
    width: 250px;
  }
`,R=d.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 100%;
  margin-top: 50px;

  img {
    width: 180px;
  }

  @media (max-width: 1000px) {
  }
`,F=d.button`
  width: 180px;
  height: 55px;
  margin-top: 70px;
  position: absolute;
  background-color: #dba90d;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #d1f4ff;
  text-shadow: 0px 2px 29px #90d8ef;
  cursor: pointer;

  :hover {
    text-shadow: 0px 0px 14px #90d8ef;
    box-shadow: 0px 6px 60px #dba90d;
  }

  @media (min-width: 1000px) {
    height: 60px;
    font-size: 22px;
  }
`,U=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;var W="/assets/logo.8e98f97c.png",Y="/assets/yoda.a10755ca.png",H="/assets/card_1.1ec13929.jpg",q="/assets/card_2.813af869.jpg",D="/assets/card_3.e96319b1.jpg",G="/assets/card_4.bd6beb6b.jpg",K="/assets/card_5.795ca649.jpg",T="/assets/card_6.f312cec0.jpg",J="/assets/card_7.7cd646f1.jpg",Q="/assets/card_8.32fcb593.jpg",V="/assets/card_back.3f633007.jpg";const u=[H,q,D,G,K,T,J,Q],X=()=>[...u,...u].map((e,t)=>({id:`card${t}`,flipped:!1,backImage:V,frontImage:e,clickable:!0,matchingCardId:t<e.length?`card${t+u.length}`:`card${t-u.length}`})),Z=e=>e.map(t=>[Math.random(),t]).sort((t,a)=>t[0]-a[0]).map(t=>t[1]),ee=()=>{const[e,t]=f.exports.useState(Z(X())),[a,m]=f.exports.useState(!1),[n,r]=f.exports.useState(0),[s,x]=f.exports.useState(void 0);f.exports.useEffect(()=>{n===e.length/2&&m(!0)},[n]);function v(){window.location.reload()}const w=l=>{if(t(c=>c.map(i=>i.id===l.id?g(p({},i),{flipped:!0,clickable:!1}):i)),!s){x(p({},l));return}if(s.matchingCardId===l.id||s.id===l.matchingCardId){r(c=>c+1),t(c=>c.map(i=>i.id===s.id||i.id===l.id?g(p({},i),{clickable:!1}):i)),x(void 0);return}setTimeout(()=>{t(c=>c.map(i=>i.id===s.id||i.id===l.id?g(p({},i),{flipped:!1,clickable:!0}):i))},1e3),x(void 0)};return o.createElement(P,null,o.createElement(A,null,o.createElement(N,{src:W,alt:"logo"}),o.createElement("h1",null,"Abhishek Singh"),a&&o.createElement(R,null,o.createElement("img",{src:Y,alt:"yoda"}),o.createElement(F,{type:"submit",onClick:v},"Play Again"))),o.createElement(U,null,e.map(l=>o.createElement(L,{key:l.id,callback:w,card:l}))))};$.render(o.createElement(o.StrictMode,null,o.createElement(ee,null)),document.getElementById("root"));
