import{f as j,u as F,g as m,h as x,i as L,_ as z,r as G,o,c as r,b as H,t as h,j as u,F as C,k as w,l as V,n as O,e as P,m as q,a as X}from"./app-De5JuplM.js";const D=j({__name:"CustomBanner",setup(N,{expose:_}){_();const n=F(),s=m(()=>{var e,t,a,l;return(t=(e=n.value)==null?void 0:e.customBanner)!=null&&t.heroImage?x((l=(a=n.value)==null?void 0:a.customBanner)==null?void 0:l.heroImage):null}),v=m(()=>{var e,t;return((t=(e=n.value)==null?void 0:e.customBanner)==null?void 0:t.buttons)||[]}),f=m(()=>{var e,t;return(((t=(e=n.value)==null?void 0:e.customBanner)==null?void 0:t.socialLinks)||[]).map(a=>(a.color||(a.color=L()),a))}),p=m(()=>n.value.customBanner.heroImageStyle||{}),g=m(()=>{var l;const{bgImageStyle:e,bgImage:t}=((l=n.value)==null?void 0:l.customBanner)||{},a=t?{overflow:"hidden",background:`url(${x(t)}) center/cover no-repeat`}:{};return e?{...a,...e}:a}),i={frontmatter:n,heroImage:s,buttons:v,socialLinks:f,heroImageStyle:p,bgImageStyle:g};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),E={class:"banner-brand__content"},A={key:0,class:"title"},J={key:1,class:"description"},K={key:2,class:"tagline"},M={key:3,class:"btn-group"},Q={key:4,class:"social-links"},R=X('<div class="shields-wrapper" data-v-364993e7><img alt="GitHub license" src="https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=616ae5" data-v-364993e7><img alt="GitHub stars" src="https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=616ae5" data-v-364993e7><img alt="GitHub forks" src="https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=616ae5" data-v-364993e7><img alt="Npm downloads" src="https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat-square&amp;logo=npm&amp;color=616ae5" data-v-364993e7><img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/vuepress-reco/vuepress-theme-reco?filename=packages%2Fvuepress-theme-reco%2Fpackage.json&amp;style=flat-square&amp;color=616ae5&amp;logo=npm" data-v-364993e7><img alt="Npm version" src="https://img.shields.io/badge/tailwindcss-3.1.6-616ae5?style=flat-square&amp;logo=tailwindcss" data-v-364993e7></div>',1);function T(N,_,n,s,v,f){var g,i,e,t,a,l,k,b,y,B,I,S;const p=G("Xicons");return o(),r("section",{class:"banner-brand__wrapper",style:q({...s.bgImageStyle})},[H("div",E,[(i=(g=s.frontmatter)==null?void 0:g.customBanner)!=null&&i.title?(o(),r("h1",A,h((t=(e=s.frontmatter)==null?void 0:e.customBanner)==null?void 0:t.title),1)):u("",!0),(l=(a=s.frontmatter)==null?void 0:a.customBanner)!=null&&l.description?(o(),r("p",J,h((b=(k=s.frontmatter)==null?void 0:k.customBanner)==null?void 0:b.description),1)):u("",!0),(B=(y=s.frontmatter)==null?void 0:y.customBanner)!=null&&B.tagline?(o(),r("p",K,h((S=(I=s.frontmatter)==null?void 0:I.customBanner)==null?void 0:S.tagline),1)):u("",!0),s.buttons.length>0?(o(),r("div",M,[(o(!0),r(C,null,w(s.buttons,(c,d)=>(o(),V(p,{class:O(c.type),key:d,icon:c.icon,text:c.text,link:c.link,"icon-size":"18","text-size":"14"},null,8,["class","icon","text","link"]))),128))])):u("",!0),s.socialLinks.length>0?(o(),r("ul",Q,[(o(!0),r(C,null,w(s.socialLinks,(c,d)=>(o(),r("li",{class:"social-item",key:d},[P(p,{icon:c.icon,link:c.link,style:q({color:c.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))])):u("",!0),R])],4)}const W=z(D,[["render",T],["__scopeId","data-v-364993e7"],["__file","CustomBanner.vue"]]);export{W as default};
