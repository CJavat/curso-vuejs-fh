var rt=i=>{throw TypeError(i)};var K=(i,t,e)=>t.has(i)||rt("Cannot "+e);var s=(i,t,e)=>(K(i,t,"read from private field"),e?e.call(i):t.get(i)),b=(i,t,e)=>t.has(i)?rt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,r)=>(K(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),f=(i,t,e)=>(K(i,t,"access private method"),e);import{S as bt,s as $,a1 as B,a2 as yt,a3 as nt,a4 as at,a5 as vt,a6 as gt,a7 as Rt,a8 as ht,x as mt,a9 as Ot,M as Ct,aa as St,y as wt,D as Qt,z as Et,w as z,A as ot,E as It,G as ut,B as Ut,C as Dt}from"./index-Cg2XFAml.js";var v,a,A,y,w,M,O,k,P,T,Q,E,S,x,n,j,q,G,N,H,J,X,Y,ft,dt,Ft=(dt=class extends bt{constructor(t,e){super();b(this,n);b(this,v);b(this,a);b(this,A);b(this,y);b(this,w);b(this,M);b(this,O);b(this,k);b(this,P);b(this,T);b(this,Q);b(this,E);b(this,S);b(this,x,new Set);this.options=e,c(this,v,t),c(this,O,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),ct(s(this,a),this.options)?f(this,n,j).call(this):this.updateResult(),f(this,n,H).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Z(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Z(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,n,J).call(this),f(this,n,X).call(this),s(this,a).removeObserver(this)}setOptions(t,e){const r=this.options,u=s(this,a);if(this.options=s(this,v).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");f(this,n,Y).call(this),s(this,a).setOptions(this.options),r._defaulted&&!$(this.options,r)&&s(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const h=this.hasListeners();h&&lt(s(this,a),u,this.options,r)&&f(this,n,j).call(this),this.updateResult(e),h&&(s(this,a)!==u||this.options.enabled!==r.enabled||B(this.options.staleTime,s(this,a))!==B(r.staleTime,s(this,a)))&&f(this,n,q).call(this);const d=f(this,n,G).call(this);h&&(s(this,a)!==u||this.options.enabled!==r.enabled||d!==s(this,S))&&f(this,n,N).call(this,d)}getOptimisticResult(t){const e=s(this,v).getQueryCache().build(s(this,v),t),r=this.createResult(e,t);return Pt(this,r)&&(c(this,y,r),c(this,M,this.options),c(this,w,s(this,a).state)),r}getCurrentResult(){return s(this,y)}trackResult(t,e){const r={};return Object.keys(t).forEach(u=>{Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),e==null||e(u),t[u])})}),r}trackProp(t){s(this,x).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,v).defaultQueryOptions(t),r=s(this,v).getQueryCache().build(s(this,v),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return f(this,n,j).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,y)))}createResult(t,e){var it;const r=s(this,a),u=this.options,h=s(this,y),d=s(this,w),R=s(this,M),U=t!==r?t.state:s(this,A),{state:C}=t;let o={...C},l=!1,p;if(e._optimisticResults){const g=this.hasListeners(),_=!g&&ct(t,e),pt=g&&lt(t,r,e,u);(_||pt)&&(o={...o,...Rt(C.data,t.options)}),e._optimisticResults==="isRestoring"&&(o.fetchStatus="idle")}let{error:D,errorUpdatedAt:L,status:m}=o;if(e.select&&o.data!==void 0)if(h&&o.data===(d==null?void 0:d.data)&&e.select===s(this,k))p=s(this,P);else try{c(this,k,e.select),p=e.select(o.data),p=ht(h==null?void 0:h.data,p,e),c(this,P,p),c(this,O,null)}catch(g){c(this,O,g)}else p=o.data;if(e.placeholderData!==void 0&&p===void 0&&m==="pending"){let g;if(h!=null&&h.isPlaceholderData&&e.placeholderData===(R==null?void 0:R.placeholderData))g=h.data;else if(g=typeof e.placeholderData=="function"?e.placeholderData((it=s(this,T))==null?void 0:it.state.data,s(this,T)):e.placeholderData,e.select&&g!==void 0)try{g=e.select(g),c(this,O,null)}catch(_){c(this,O,_)}g!==void 0&&(m="success",p=ht(h==null?void 0:h.data,g,e),l=!0)}s(this,O)&&(D=s(this,O),p=s(this,P),L=Date.now(),m="error");const F=o.fetchStatus==="fetching",V=m==="pending",W=m==="error",et=V&&F,st=p!==void 0;return{status:m,fetchStatus:o.fetchStatus,isPending:V,isSuccess:m==="success",isError:W,isInitialLoading:et,isLoading:et,data:p,dataUpdatedAt:o.dataUpdatedAt,error:D,errorUpdatedAt:L,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>U.dataUpdateCount||o.errorUpdateCount>U.errorUpdateCount,isFetching:F,isRefetching:F&&!V,isLoadingError:W&&!st,isPaused:o.fetchStatus==="paused",isPlaceholderData:l,isRefetchError:W&&st,isStale:tt(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,y),r=this.createResult(s(this,a),this.options);if(c(this,w,s(this,a).state),c(this,M,this.options),s(this,w).data!==void 0&&c(this,T,s(this,a)),$(r,e))return;c(this,y,r);const u={},h=()=>{if(!e)return!0;const{notifyOnChangeProps:d}=this.options,R=typeof d=="function"?d():d;if(R==="all"||!R&&!s(this,x).size)return!0;const I=new Set(R??s(this,x));return this.options.throwOnError&&I.add("error"),Object.keys(s(this,y)).some(U=>{const C=U;return s(this,y)[C]!==e[C]&&I.has(C)})};(t==null?void 0:t.listeners)!==!1&&h()&&(u.listeners=!0),f(this,n,ft).call(this,{...u,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,n,H).call(this)}},v=new WeakMap,a=new WeakMap,A=new WeakMap,y=new WeakMap,w=new WeakMap,M=new WeakMap,O=new WeakMap,k=new WeakMap,P=new WeakMap,T=new WeakMap,Q=new WeakMap,E=new WeakMap,S=new WeakMap,x=new WeakMap,n=new WeakSet,j=function(t){f(this,n,Y).call(this);let e=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(yt)),e},q=function(){f(this,n,J).call(this);const t=B(this.options.staleTime,s(this,a));if(nt||s(this,y).isStale||!at(t))return;const r=vt(s(this,y).dataUpdatedAt,t)+1;c(this,Q,setTimeout(()=>{s(this,y).isStale||this.updateResult()},r))},G=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},N=function(t){f(this,n,X).call(this),c(this,S,t),!(nt||this.options.enabled===!1||!at(s(this,S))||s(this,S)===0)&&c(this,E,setInterval(()=>{(this.options.refetchIntervalInBackground||gt.isFocused())&&f(this,n,j).call(this)},s(this,S)))},H=function(){f(this,n,q).call(this),f(this,n,N).call(this,f(this,n,G).call(this))},J=function(){s(this,Q)&&(clearTimeout(s(this,Q)),c(this,Q,void 0))},X=function(){s(this,E)&&(clearInterval(s(this,E)),c(this,E,void 0))},Y=function(){const t=s(this,v).getQueryCache().build(s(this,v),this.options);if(t===s(this,a))return;const e=s(this,a);c(this,a,t),c(this,A,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},ft=function(t){mt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,y))}),s(this,v).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},dt);function Mt(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function ct(i,t){return Mt(i,t)||i.state.data!==void 0&&Z(i,t,t.refetchOnMount)}function Z(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&tt(i,t)}return!1}function lt(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&tt(i,e)}function tt(i,t){return t.enabled!==!1&&i.isStaleByTime(B(t.staleTime,i))}function Pt(i,t){return!$(i.getCurrentResult(),t)}function Tt(i=""){if(!Ot())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=St(i),e=Ct(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function xt(i,t,e){const r=Tt(),u=wt(()=>{const l=Qt(t);typeof l.enabled=="function"&&(l.enabled=l.enabled());const p=r.defaultQueryOptions(l);return p._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",p}),h=new i(r,u.value),d=Et(h.getCurrentResult());let R=()=>{};z(r.isRestoring,l=>{l||(R(),R=h.subscribe(p=>{ot(d,p)}))},{immediate:!0});const I=()=>{h.setOptions(u.value),ot(d,h.getCurrentResult())};z(u,I),It(()=>{R()});const U=(...l)=>(I(),d.refetch(...l)),C=()=>new Promise((l,p)=>{let D=()=>{};const L=()=>{if(u.value.enabled!==!1){h.setOptions(u.value);const m=h.getOptimisticResult(u.value);m.isStale?(D(),h.fetchOptimistic(u.value).then(l,F=>{ut(u.value.throwOnError,[F,h.getCurrentQuery()])?p(F):l(h.getCurrentResult())})):(D(),l(m))}};L(),D=z(u,L)});z(()=>d.error,l=>{if(d.isError&&!d.isFetching&&ut(u.value.throwOnError,[l,h.getCurrentQuery()]))throw l});const o=Ut(Dt(d));for(const l in d)typeof d[l]=="function"&&(o[l]=d[l]);return o.suspense=C,o.refetch=U,o}function kt(i,t){return xt(Ft,i)}const zt=i=>i.includes("http")?i:`http://localhost:3000/api/files/product/${i}`;export{kt as a,zt as g,Tt as u};
