import{S as Y,i as Z,s as x,k as E,q as g,a as V,l as I,m as T,r as v,h as _,c as A,n as O,b as B,D as a,N as K,u as D,C as Q,M as $,O as ee}from"./index-fa6518fa.js";function W(r,t,i){const o=r.slice();return o[8]=t[i],o}function X(r){let t,i=r[8].name+"",o,c,d=r[8].quantity+"",f,n=r[8].unit+"",p;return{c(){t=E("li"),o=g(i),c=g(" - "),f=g(d),p=g(n)},l(l){t=I(l,"LI",{});var u=T(t);o=v(u,i),c=v(u," - "),f=v(u,d),p=v(u,n),u.forEach(_)},m(l,u){B(l,t,u),a(t,o),a(t,c),a(t,f),a(t,p)},p(l,u){u&2&&i!==(i=l[8].name+"")&&D(o,i),u&2&&d!==(d=l[8].quantity+"")&&D(f,d),u&2&&n!==(n=l[8].unit+"")&&D(p,n)},d(l){l&&_(t)}}}function te(r){let t,i,o,c,d,f,n,p,l,u,m,q,U,S=r[2]>1?"s":"",j,N,F,G,y,L,H,P=r[1],h=[];for(let e=0;e<P.length;e+=1)h[e]=X(W(r,P,e));return{c(){t=E("h2"),i=g("INGREDIENTS"),o=V(),c=E("div"),d=E("div"),f=E("p"),n=E("button"),p=g("-"),l=E("span"),u=g("Pour "),m=g(r[2]),q=V(),U=g(r[0]),j=g(S),N=E("button"),F=g("+"),G=V(),y=E("ul");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){t=I(e,"H2",{});var b=T(t);i=v(b,"INGREDIENTS"),b.forEach(_),o=A(e),c=I(e,"DIV",{});var s=T(c);d=I(s,"DIV",{});var C=T(d);f=I(C,"P",{class:!0});var w=T(f);n=I(w,"BUTTON",{class:!0});var M=T(n);p=v(M,"-"),M.forEach(_),l=I(w,"SPAN",{class:!0});var k=T(l);u=v(k,"Pour "),m=v(k,r[2]),q=A(k),U=v(k,r[0]),j=v(k,S),k.forEach(_),N=I(w,"BUTTON",{class:!0});var z=T(N);F=v(z,"+"),z.forEach(_),w.forEach(_),C.forEach(_),G=A(s),y=I(s,"UL",{class:!0});var J=T(y);for(let R=0;R<h.length;R+=1)h[R].l(J);J.forEach(_),s.forEach(_),this.h()},h(){O(n,"class","select-none rounded-full w-6 h-6 border border-blue-200 bg-blue-100 p-1 text-lg inline-flex items-center justify-center mx-2"),O(l,"class","select-none"),O(N,"class","select-none rounded-full w-6 h-6 border border-blue-200 bg-blue-100 p-1 text-lg inline-flex items-center justify-center mx-2"),O(f,"class","flex items-center"),O(y,"class","not-prose")},m(e,b){B(e,t,b),a(t,i),B(e,o,b),B(e,c,b),a(c,d),a(d,f),a(f,n),a(n,p),a(f,l),a(l,u),a(l,m),a(l,q),a(l,U),a(l,j),a(f,N),a(N,F),a(c,G),a(c,y);for(let s=0;s<h.length;s+=1)h[s].m(y,null);L||(H=[K(n,"click",r[4]),K(N,"click",r[3])],L=!0)},p(e,[b]){if(b&4&&D(m,e[2]),b&1&&D(U,e[0]),b&4&&S!==(S=e[2]>1?"s":"")&&D(j,S),b&2){P=e[1];let s;for(s=0;s<P.length;s+=1){const C=W(e,P,s);h[s]?h[s].p(C,b):(h[s]=X(C),h[s].c(),h[s].m(y,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=P.length}},i:Q,o:Q,d(e){e&&_(t),e&&_(o),e&&_(c),$(h,e),L=!1,ee(H)}}}function le(r,t,i){let{ingredients:o=[]}=t,{number:c}=t,{numberType:d}=t,f=[...o],n=c;function p(){i(2,n++,n),u()}function l(){n!==1&&(i(2,n--,n),u())}function u(){const m=n/c;i(1,f=o.map(q=>({...q,quantity:parseFloat((q.quantity*m).toFixed(2))})))}return r.$$set=m=>{"ingredients"in m&&i(5,o=m.ingredients),"number"in m&&i(6,c=m.number),"numberType"in m&&i(0,d=m.numberType)},[d,f,n,p,l,o,c]}class se extends Y{constructor(t){super(),Z(this,t,le,te,x,{ingredients:5,number:6,numberType:0})}}export{se as I};
