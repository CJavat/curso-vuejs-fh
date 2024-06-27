import{d as _,j as w,R as x,e as r,z as y,c as v,a as e,Y as l,ab as n,ad as g,g as h,k,F as N,l as R,o as C,m as I}from"./index-Cg2XFAml.js";const V=e("h1",{class:"text-2xl font-semibold mb-4"},"Nueva Cuenta",-1),B={class:"mb-4"},F=e("label",{for:"name",class:"block text-gray-600"},"Nombre",-1),S={class:"mb-4"},T=e("label",{for:"email",class:"block text-gray-600"},"Correo",-1),U={class:"mb-4"},A=e("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1),L=e("div",{class:"mb-6 text-blue-500"},[e("a",{href:"#",class:"hover:underline"},"¿Olvidaste la contraseña?")],-1),M=e("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Crear Cuenta ",-1),j={class:"mt-6 text-blue-500 text-center"},D=_({__name:"RegisterView",setup(q){const c=w(),p=x(),u=r(),d=r(),i=r(),o=y({fullName:"",email:"",password:""}),b=async()=>{var a,s,f;if(o.fullName==="")return(a=u.value)==null?void 0:a.focus();if(o.email==="")return(s=d.value)==null?void 0:s.focus();if(o.password.length<6)return(f=i.value)==null?void 0:f.focus();const{ok:m,message:t}=await c.register(o.fullName,o.email,o.password);m||p.error(t)};return(m,t)=>{const a=R("RouterLink");return C(),v(N,null,[V,e("form",{onSubmit:g(b,["prevent"])},[e("div",B,[F,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.fullName=s),ref_key:"fullNameInputRef",ref:u,type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,o.fullName]])]),e("div",S,[T,l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.email=s),ref_key:"emailInputRef",ref:d,type:"text",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,o.email]])]),e("div",U,[A,l(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.password=s),ref_key:"passwordInputRef",ref:i,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[n,o.password]])]),L,M],32),e("div",j,[h(a,{to:{name:"login"},class:"hover:underline"},{default:k(()=>[I("Ingresar Aquí")]),_:1})])],64)}}});export{D as default};
