import{i,j as p,k as u,l as a,m as l,n as f,o as m,c as d,q as _,s as b,t as c,v as N}from"./index-e33a2bc5.js";const g=e=>e===void 0,y=e=>typeof e=="number",k=e=>i(e)?!Number.isNaN(Number(e)):!1;function S(e,s="px"){if(!e)return"";if(y(e)||k(e))return`${e}${s}`;if(i(e))return e}var h=(e,s)=>{const t=e.__vccOpts||e;for(const[r,n]of s)t[r]=n;return t};const E=p({size:{type:u([Number,String])},color:{type:String}}),I=a({name:"ElIcon",inheritAttrs:!1}),P=a({...I,props:E,setup(e){const s=e,t=l("icon"),r=f(()=>{const{size:n,color:o}=s;return!n&&!o?{}:{fontSize:g(n)?void 0:S(n),"--color":o}});return(n,o)=>(m(),d("i",b({class:c(t).b(),style:c(r)},n.$attrs),[_(n.$slots,"default")],16))}});var $=h(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const v=N($);export{v as E};