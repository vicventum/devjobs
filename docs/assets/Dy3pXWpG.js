import{b as S,c as M,d as H,t as R,_ as T,e as W,f as b,g as j,h as F,i as q,j as O,m as Q,n as U}from"./BMvHWk6M.js";import{Q as f,ar as G,o as i,S as m,w as s,a as l,af as y,_ as g,as as N,r as I,a7 as K,x as v,b as n,ah as a,t as h,c as J,d as $,al as k,ao as P,h as X,ap as Y,H as Z,at as ee}from"./DOGchhY9.js";import{V as A}from"./Cr8m2TC5.js";import{o as oe}from"./CISf0zZG.js";const te={class:"summary__logo-container"},ae={class:"summary__content px-10 pb-4 pt-10 py-sm-4"},se={class:"summary__data"},ne={class:"summary__actions"},re=f({__name:"JobDetailSummaryWrapper",props:{imageBgColor:{}},setup(o){return G(e=>({"7bb9eb01":e.imageBgColor})),(e,r)=>(i(),m(A,{class:"summary",tag:"article"},{default:s(()=>[l("div",te,[y(e.$slots,"image",{},void 0,!0)]),l("div",ae,[l("div",se,[y(e.$slots,"data",{},void 0,!0)]),l("div",ne,[y(e.$slots,"actions",{},void 0,!0)])])]),_:3}))}}),L=g(re,[["__scopeId","data-v-50d65ad3"]]),le={class:"text-h2 mb-2"},ce={key:0,class:"card__number-employees text-body-1 text-light-darken-4"},ie=f({__name:"JobDetailSummary",props:{color:{},company:{},urlApply:{},urlCompany:{},logo:{},companyNumEmployees:{}},setup(o){const r=N().query.color,c=I(r??o.color),{smAndUp:p}=K(),t=v(()=>p.value?void 0:!0),u=v(()=>p.value?"100%":"50px"),d=v(()=>p.value?"3.5rem":void 0);return(_,D)=>{const x=M,C=H,w=L;return i(),m(w,{"image-bg-color":a(c)},{image:s(()=>[n(C,{class:"card__logo-img",src:_.logo,text:_.company,color:a(c),rounded:a(t)},{error:s(()=>[n(x,{text:_.company,size:a(u),"size-text":a(d),background:"transparent",color:"rgb(var(--v-theme-light))"},null,8,["text","size","size-text"])]),_:1},8,["src","text","color","rounded"])]),data:s(()=>[l("h2",le,h(_.company),1),_.companyNumEmployees?(i(),J("h3",ce,[n(oe,{class:"card__number-employees-icon",icon:"$officeBuilding",size:"small"}),$(" "+h(_.companyNumEmployees)+" employees ",1)])):k("",!0)]),actions:s(()=>[n(S,{color:"primary",variant:"tonal",disabled:!_.urlCompany,href:_.urlCompany,target:"_blank"},{default:s(()=>[$(" Company Site ")]),_:1},8,["disabled","href"])]),_:1},8,["image-bg-color"])}}}),_e=g(ie,[["__scopeId","data-v-c2922471"]]),pe={},me={class:"wrapper-info mb-10"},de={class:"wrapper-info__content"},ue={class:"wrapper-info__actions mt-10 mt-sm-0"},ye={class:"wrapper-content"};function ge(o,e){return i(),m(A,{class:"pa-8 pa-sm-10",tag:"main"},{default:s(()=>[l("article",me,[l("div",de,[y(o.$slots,"job-data",{},void 0,!0)]),l("div",ue,[y(o.$slots,"button",{},void 0,!0)])]),l("div",ye,[y(o.$slots,"job-content",{},void 0,!0)])]),_:3})}const B=g(pe,[["render",ge],["__scopeId","data-v-ae6d37ea"]]),be={class:"text-h1 mb-2"},fe=["innerHTML"],he=f({__name:"JobDetailContent",props:{date:{},isRemote:{type:Boolean},text:{},title:{},urlApply:{},type:{},location:{}},setup(o){const r=I(R(o.date));return(c,p)=>{const t=T,u=W,d=B;return i(),m(d,null,{"job-data":s(()=>[n(t,{class:"detail-info__time mb-1","relative-date":a(r),type:c.type},null,8,["relative-date","type"]),l("h1",be,h(c.title),1),n(u,{location:c.location,"is-remote":c.isRemote},null,8,["location","is-remote"])]),button:s(()=>[n(S,{class:"detail-info__apply-btn",color:"primary",href:c.urlApply,target:"_blank"},{default:s(()=>[$(" Apply Now ")]),_:1},8,["href"])]),"job-content":s(()=>[l("article",{class:"detail-content",innerHTML:c.text},null,8,fe)]),_:1})}}}),ve=g(he,[["__scopeId","data-v-0a397b7d"]]),$e={},ke={class:"skeleton__image"},Je={class:"skeleton__data"},De={class:"skeleton__actions"};function xe(o,e){const r=L;return i(),m(r,{class:"skeleton"},{image:s(()=>[l("div",ke,[n(b,{type:"image"})])]),data:s(()=>[l("div",Je,[n(b,{type:"heading, subtitle",width:"180px"})])]),actions:s(()=>[l("div",De,[n(b,{type:"button",width:"160px","max-width":"initial"})])]),_:1})}const Ce=g($e,[["render",xe],["__scopeId","data-v-38962943"]]),we={};function Se(o,e){const r=B;return i(),m(A,{class:"skeleton",tag:"main"},{default:s(()=>[n(r,null,{"job-data":s(()=>[n(b,{type:"subtitle, heading, subtitle"})]),button:s(()=>[n(b,{type:"button"})]),"job-content":s(()=>[n(b,{class:"skeleton__content",type:"paragraph@3"})]),_:1})]),_:1})}const Ae=g(we,[["render",Se],["__scopeId","data-v-00e575eb"]]),Ee=f({__name:"JobDetailErrorHandler",props:{isError:{},isLoading:{},isEmpty:{},errorMessage:{},loadingMessage:{},emptyMessage:{}},setup(o){return(e,r)=>{const c=Ce,p=Ae,t=j;return i(),J("div",null,[n(t,{"is-loading":e.isLoading,"is-error":e.isError,"is-empty":e.isEmpty,"error-message":e.errorMessage,"loading-message":e.loadingMessage,"empty-message":e.emptyMessage},{loader:s(()=>[l("div",null,[n(c,{class:"mb-8"}),n(p,{class:"mb-8"})])]),default:s(()=>[y(e.$slots,"default")]),_:3},8,["is-loading","is-error","is-empty","error-message","loading-message","empty-message"])])}}}),Ne={class:"footer pa-10"},Ie={class:"footer__content"},Le={class:"footer__job-title text-h2 mb-2"},Be={class:"footer__job-company text-body-1 text-light-darken-4"},Ve={class:"footer__actions"},ze=f({__name:"LayoutJobDetailFooter",props:{company:{},title:{},urlApply:{}},setup(o){return(e,r)=>(i(),J("footer",Ne,[l("div",Ie,[l("h2",Le,h(e.title),1),l("h3",Be,h(e.company),1)]),l("div",Ve,[e.urlApply?(i(),m(S,{key:0,color:"primary",href:e.urlApply,target:"_blank"},{default:s(()=>[$(" Apply Now ")]),_:1},8,["href"])):k("",!0)])]))}}),Me=g(ze,[["__scopeId","data-v-572d554b"]]);function He(o,e){const r=e??F();return{id:o.id,title:o.role,company:o.company_name,date:o.date_posted,color:r,remote:o.remote,urlApply:o.url,text:o.text,keywords:o.keywords,source:o.source,companyNumEmployees:o.company_num_employees??void 0,logo:o.logo??void 0,type:o.employment_type??void 0,location:o.location??void 0,urlCompany:o.url_company??void 0}}const Re=async({id:o,color:e})=>{const r=q(),{jobDetail:c}=P(r);r.setJob(null);const p=U,{data:t,pending:u,error:d}=await O(`jobDetail-${o}`,()=>Q(p,{id:o}),{lazy:!0});return X(()=>t.value,_=>{if(_){const D=He(_,e);r.setJob(D)}},{immediate:!0}),{jobDetail:c,error:d,isLoading:u,isError:v(()=>!!d.value)}},qe=f({__name:"job-[id]",async setup(o){let e,r;const p=N().params.id,{jobDetail:t,isLoading:u,isError:d}=([e,r]=Y(()=>Re({id:`${p}`})),e=await e,r(),e);return(_,D)=>{const x=_e,C=ve,w=Ee,V=Me,z=ee;return i(),m(z,{name:"detail"},{footer:s(()=>[a(t)?(i(),m(V,{key:0,company:a(t).company,title:a(t).title,"url-apply":a(t).urlApply},null,8,["company","title","url-apply"])):k("",!0)]),default:s(()=>[n(w,{"is-loading":a(u),"is-error":a(d),"is-empty":!Object.keys({...a(t)}).length},{default:s(()=>{var E;return[a(t)?(i(),J(Z,{key:0},[n(x,{class:"job-summary mb-8",color:a(t).color,company:a(t).company,"url-apply":a(t).urlApply,"url-company":(E=a(t))==null?void 0:E.urlCompany,logo:a(t).logo,"company-num-employees":a(t).companyNumEmployees},null,8,["color","company","url-apply","url-company","logo","company-num-employees"]),n(C,{class:"job-content mb-8",company:a(t).company,date:a(t).date,keywords:a(t).keywords,"is-remote":a(t).remote,source:a(t).source,text:a(t).text,title:a(t).title,"url-apply":a(t).urlApply,location:a(t).location,type:a(t).type},null,8,["company","date","keywords","is-remote","source","text","title","url-apply","location","type"])],64)):k("",!0)]}),_:1},8,["is-loading","is-error","is-empty"])]),_:1})}}});export{qe as default};