(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),r=c(22),n=c.n(r),i=(c(30),c(31),c(32),c(11)),l=c(3),j=c(2),o=c.n(j),d=c(6),b=c(5),h=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(null),n=Object(b.a)(r,2),i=n[0],l=n[1];return{loading:c,request:Object(a.useCallback)(function(){var e=Object(d.a)(o.a.mark((function e(t){var c,a,r,n,i,j=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:"GET",a=j.length>2&&void 0!==j[2]?j[2]:null,r=j.length>3&&void 0!==j[3]?j[3]:{},s(!0),e.prev=4,a&&(a=JSON.stringify(a),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:a,headers:r});case 8:return n=e.sent,e.next=11,n.json();case 11:if(i=e.sent,n.ok){e.next=14;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return s(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),s(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(a.useCallback)((function(){return l(null)}),[])}};function u(){}var x=Object(a.createContext)({token:null,userId:null,login:u,logout:u,isAuthenticated:!1}),O=function(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(s.jsx)("div",{className:"preloader-wrapper active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})})},p=function(e){var t=e.links;return t.length?Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{class:"table section-heading list",children:[Object(s.jsx)("thead",{class:" text-uppercase",children:Object(s.jsxs)("tr",{class:"table-active",children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{className:"hide",children:"Oryginalny link"}),Object(s.jsx)("th",{className:"hide",children:"Tw\xf3j link"}),Object(s.jsx)("th",{className:"show-link",children:"Wybierz link aby zobaczy\u0107 szczeg\xf3\u0142y"}),Object(s.jsx)("th",{className:"hide",children:"Zobacz szczeg\xf3\u0142y"})]})}),Object(s.jsx)("tbody",{class:"table-active",children:t.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:t+1}),Object(s.jsx)("td",{className:"hide",children:e.from}),Object(s.jsx)("td",{className:"hide",children:e.to}),Object(s.jsx)("td",{className:"show-link",children:Object(s.jsx)(i.b,{className:"btn btn-link float-none",to:"/detail/".concat(e._id),children:e.from})}),Object(s.jsx)("td",{className:"hide",children:Object(s.jsx)(i.b,{className:"btn btn-primary float-none",to:"/detail/".concat(e._id),children:"Otw\xf3rz"})})]},e._id)}))})]})}):Object(s.jsx)("p",{className:"center",children:"Nie ma link\xf3w"})},m=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=h(),i=n.loading,l=n.request,j=Object(a.useContext)(x).token,u=Object(a.useCallback)(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link","GET",null,{Authorization:"Bearer ".concat(j)});case 3:t=e.sent,r(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[j,l]);return Object(a.useEffect)((function(){u()}),[u]),i?Object(s.jsx)(O,{}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("body",{className:"bg-light",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("div",{className:"container",children:!i&&Object(s.jsx)(p,{links:c})})})})})},v=function(){var e=Object(l.g)(),t=Object(a.useContext)(x),c=h().request,r=Object(a.useState)(""),n=Object(b.a)(r,2),i=n[0],j=n[1];Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var u=function(){var s=Object(d.a)(o.a.mark((function s(a){return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if("Enter"!==a.key){s.next=10;break}return s.prev=1,s.next=4,c("/api/link/generate","POST",{from:i},{Authorization:"Bearer ".concat(t.token)});case 4:s.sent,e.push("/links"),s.next=10;break;case 8:s.prev=8,s.t0=s.catch(1);case 10:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e){return s.apply(this,arguments)}}(),O=function(){var s=Object(d.a)(o.a.mark((function s(){var a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c("/api/link/generate","POST",{from:i},{Authorization:"Bearer ".concat(t.token)});case 3:a=s.sent,e.push("/detail/".concat(a.link._id)),s.next=9;break;case 7:s.prev=7,s.t0=s.catch(0);case 9:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}();return Object(s.jsxs)("body",{children:[Object(s.jsx)("header",{class:"masthead",children:Object(s.jsx)("div",{class:"fon",children:Object(s.jsx)("div",{class:"container",children:Object(s.jsx)("div",{class:"masthead-heading text-uppercase",children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{htmlFor:"link",children:"Wkliej link"}),Object(s.jsx)("input",{placeholder:"https://przyk\u0142ad.com/",id:"link",type:"text",class:"form-control",value:i,onChange:function(e){return j(e.target.value)},onKeyPress:u})]}),Object(s.jsx)("button",{type:"button",class:"btn btn-primary btn-block text-uppercase js=scroll-trigger",onClick:O,children:"Stworzy\u0107 skr\xf3t"})]})})})})}),Object(s.jsx)("section",{class:"page-section",id:"about",children:Object(s.jsxs)("div",{class:"container",children:[Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("h2",{class:"section-heading text-uppercase",children:"O nas"}),Object(s.jsx)("h3",{class:"section-subheading text-muted",children:"Program partnerski: do\u0142\u0105cz do nas!"})]}),Object(s.jsxs)("ul",{class:"timeline",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("div",{class:"timeline-image",children:Object(s.jsx)("img",{class:"rounded-circle img-fluid",src:"assets/buyer.jpg",alt:""})}),Object(s.jsxs)("div",{class:"timeline-panel",children:[Object(s.jsx)("div",{class:"timeline-heading",children:Object(s.jsx)("h4",{class:"subheading",children:"Dla kupuj\u0105cych"})}),Object(s.jsx)("div",{class:"timeline-body",children:Object(s.jsxs)("p",{class:"text-muted",children:["Zaoszcz\u0119d\u017a do 90% na zakupach ",Object(s.jsx)("br",{}),"Oszcz\u0119dzaj na towarach i us\u0142ugach online",Object(s.jsx)("br",{}),"Sekretne promocje z rabatami do 99%",Object(s.jsx)("br",{}),"Wygodne zakupy + Cashback w smartfonie"]})})]})]}),Object(s.jsxs)("li",{class:"timeline-inverted",children:[Object(s.jsx)("div",{class:"timeline-image",children:Object(s.jsx)("img",{class:"rounded-circle img-fluid",src:"assets/blogger.jpg",alt:""})}),Object(s.jsxs)("div",{class:"timeline-panel",children:[Object(s.jsx)("div",{class:"timeline-heading",children:Object(s.jsx)("h4",{class:"subheading",children:"Dla webmaster\xf3w"})}),Object(s.jsx)("div",{class:"timeline-body",children:Object(s.jsxs)("p",{class:"text-muted",children:["Zarabiaj na ruchu / rekomendacjach / blogu",Object(s.jsx)("br",{}),"Pobierz produkt do recenzji (bezp\u0142atnie)",Object(s.jsx)("br",{}),"Przejrzyste statystyki",Object(s.jsx)("br",{}),"Najlepsze oferty"]})})]})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("div",{class:"timeline-image",children:Object(s.jsx)("img",{class:"rounded-circle img-fluid",src:"assets/marketing.jpg",alt:""})}),Object(s.jsxs)("div",{class:"timeline-panel",children:[Object(s.jsx)("div",{class:"timeline-heading",children:Object(s.jsx)("h4",{class:"subheading",children:"Dla reklamodawc\xf3w"})}),Object(s.jsx)("div",{class:"timeline-body",children:Object(s.jsxs)("p",{class:"text-muted",children:["Wi\u0119kszy ruch biznesowy",Object(s.jsx)("br",{}),"Wzrost sprzeda\u017cy",Object(s.jsx)("br",{}),"Nowi lojalni klienci"]})})]})]}),Object(s.jsx)("li",{class:"timeline-inverted",children:Object(s.jsxs)("h4",{children:["B\u0105d\u017a cz\u0119\u015bci\u0105",Object(s.jsx)("br",{}),"naszego",Object(s.jsx)("br",{}),"zespo\u0142u!"]})})]})]})})]})},f=function(e){var t=e.link;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"text-uppercase",children:"Szczeg\xf3\u0142y linku"}),Object(s.jsx)("table",{className:"table show-info",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Tw\xf3j link:"}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Sk\u0105d:"}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Liczba klikni\u0119\u0107 w link:"}),Object(s.jsx)("td",{children:t.clicks})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Data utworzenia:"}),Object(s.jsx)("td",{children:new Date(t.date).toLocaleDateString()})]})]})})]})},g=function(){var e=Object(a.useContext)(x).token,t=h(),c=t.request,r=t.loading,n=Object(a.useState)(),i=Object(b.a)(n,1)[0],j=Object(a.useState)(null),u=Object(b.a)(j,2),O=u[0],p=u[1],m=Object(l.h)().id,v=Object(a.useCallback)(Object(d.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/link/".concat(m),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:s=t.sent,p(s),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,m,c]),g=function(){var t=Object(d.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{s=c("/api/link/".concat(m),"DELETE",null,{Authorization:"Bearer ".concat(e)}),i(s)}catch(a){}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[v]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("body",{class:"bg-light",children:Object(s.jsxs)("div",{class:"container",children:[!r&&O&&Object(s.jsx)(f,{link:O}),Object(s.jsx)("a",{class:"btn btn-primary float-right",href:"/links",children:"Powr\xf3t do listy"}),Object(s.jsx)("a",{class:"btn btn-primary float-right",onClick:g,href:"/links",children:"Usun link"})]})})})},k=c(13),w=c(10),y=function(){return Object(a.useCallback)((function(e){window.M&&e&&window.M.toast({html:e,classes:"rounded"})}),[])},z=function(){var e=Object(a.useContext)(x),t=y(),c=h(),r=c.loading,n=c.request,i=c.error,l=c.clearError,j=Object(a.useState)({email:"",password:""}),u=Object(b.a)(j,2),O=u[0],p=u[1];Object(a.useEffect)((function(){t(i),l()}),[i,t,l]),Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var m=function(e){p(Object(w.a)(Object(w.a)({},O),{},Object(k.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(d.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/auth/login","POST",Object(w.a)({},O));case 3:c=t.sent,e.login(c.token,c.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(d.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/auth/login","POST",Object(w.a)({},O));case 3:c=t.sent,e.login(c.token,c.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(s.jsx)("header",{class:"login",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col-6 hide"}),Object(s.jsx)("div",{class:"col-6 full",children:Object(s.jsx)("div",{class:"fon",children:Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("h5",{class:"card-title",children:"Zaloguj sie"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{placeholder:"Wpisz email",id:"email",type:"text",name:"email",class:"form-control",value:O.email,onChange:m,onKeyPress:v})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Has\u0142o"}),Object(s.jsx)("input",{placeholder:"Wpisz has\u0142o",id:"password",type:"password",name:"password",class:"form-control",value:O.password,onChange:m,onKeyPress:v})]})]})]}),Object(s.jsxs)("div",{class:"form-group form-check",children:[Object(s.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(s.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{class:"btn btn-primary",style:{marginRight:10},disabled:r,onClick:f,children:"Zaloguj sie"}),Object(s.jsx)("a",{class:"nav-link",href:"/registration",children:"Nie masz konta? Zarejestruj sie"})]})]})})})})]})})},N=(c(20),function(){var e=y(),t=h(),c=t.request,r=t.error,n=t.clearError,i=Object(a.useState)({email:"",password:""}),l=Object(b.a)(i,2),j=l[0],u=l[1];Object(a.useEffect)((function(){console.log("Error",r),e(r),n()}),[r,e,n]);var x=function(e){u(Object(w.a)(Object(w.a)({},j),{},Object(k.a)({},e.target.name,e.target.value)))},O=function(){var t=Object(d.a)(o.a.mark((function t(s){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==s.key){t.next=10;break}return t.prev=1,t.next=4,c("/api/auth/register","POST",Object(w.a)({},j));case 4:a=t.sent,e(a.message),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(d.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/auth/register","POST",Object(w.a)({},j));case 3:s=t.sent,e(s.message),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(s.jsx)("header",{class:"login",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col-6 hide"}),Object(s.jsx)("div",{class:"col-6 full",children:Object(s.jsx)("div",{class:"reg",children:Object(s.jsx)("div",{class:"container",children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("h5",{class:"card-title",children:"Zarejestruj sie"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{placeholder:"Wpisz email",id:"email",type:"text",name:"email",class:"form-control",value:j.email,onChange:x,onKeyPress:O})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Has\u0142o"}),Object(s.jsx)("input",{placeholder:"Wpisz has\u0142o",id:"password",type:"password",name:"password",class:"form-control",value:j.password,onChange:x,onKeyPress:O})]})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{class:"btn btn-primary",onClick:p,children:"Zarejestruj sie"}),Object(s.jsx)("a",{class:"nav-link",href:"/",children:"Ju\u017c mam konto"})]})]})})})})]})})}),S=c(24),C=c.n(S),E=function(){var e=y(),t=h(),c=t.error,r=t.clearError;return Object(a.useEffect)((function(){e(c),r()}),[c,e,r]),Object(a.useEffect)((function(){window.M.updateTextFields()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{class:"masthead",children:Object(s.jsx)("div",{class:"fon",children:Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("div",{class:"text-center",children:Object(s.jsx)("h2",{class:"section-heading text-uppercase",children:"SKONTAKTUJ SI\u0118 Z NAMI"})}),Object(s.jsxs)("form",{className:"contact-form",id:"contact-form",onSubmit:function(t){t.preventDefault(),C.a.sendForm("service_drn7479","template_reflink",t.target,"user_QyVIERmwsAfUqFrZoMeCQ").then((function(t){e(t.text="Dziekuje ")}),(function(t){e(t.text="B\u0142\u0105d")}))},children:[Object(s.jsxs)("div",{class:"row align-items-stretch mb-5",children:[Object(s.jsxs)("div",{class:"col-md-6",children:[Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("input",{class:"form-control",type:"text",name:"user_name",placeholder:"Wpisz imi\u0119 *",required:"required","data-validation-required-message":"Prosz\u0119 wpisa\u0107 swoje imi\u0119."}),Object(s.jsx)("p",{class:"help-block text-danger"})]}),Object(s.jsxs)("div",{class:"form-group",children:[Object(s.jsx)("input",{class:"form-control",type:"email",name:"user_email",placeholder:"Wpisz email *",required:"required","data-validation-required-message":"Podaj sw\xf3j adres e-mail."}),Object(s.jsx)("p",{class:"help-block text-danger"})]})]}),Object(s.jsx)("div",{class:"col-md-6",children:Object(s.jsxs)("div",{class:"form-group form-group-textarea mb-md-0",children:[Object(s.jsx)("textarea",{class:"form-control",name:"message",placeholder:"Twoja wiadomo\u015b\u0107 *",required:"required","data-validation-required-message":"Wpisz wiadomo\u015b\u0107."}),Object(s.jsx)("p",{class:"help-block text-danger"})]})})]}),Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("div",{id:"success"}),Object(s.jsx)("button",{class:"btn btn-primary btn-block text-uppercase",type:"submit",id:"ToastSend",children:"Wys\u0142a\u0107"})]})]})]})})}),Object(s.jsxs)("section",{class:"page-section bg-light",children:[Object(s.jsx)("br",{}),Object(s.jsxs)("div",{class:"container",children:[Object(s.jsxs)("div",{class:"text-center",children:[Object(s.jsx)("h2",{class:"section-heading text-uppercase",children:"NASZ ZESP\xd3\u0141"}),Object(s.jsx)("h3",{class:"section-subheading text-muted",children:"Ten projekt zosta\u0142 opracowany przez:"})]}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col-lg-4",children:Object(s.jsxs)("div",{class:"team-member",children:[Object(s.jsx)("img",{class:"mx-auto rounded-circle",src:"assets/team-1.jpg",alt:""}),Object(s.jsx)("h4",{children:"Lizaveta Sobaleva"}),Object(s.jsxs)("p",{class:"text-muted",children:["Lead Designer",Object(s.jsx)("br",{}),"Junior Developer"]})]})}),Object(s.jsx)("div",{class:"col-lg-4",children:Object(s.jsxs)("div",{class:"team-member",children:[Object(s.jsx)("img",{class:"mx-auto rounded-circle",src:"assets/team-3.jpg",alt:""}),Object(s.jsx)("h4",{children:"Vladimir Rashatsko"}),Object(s.jsxs)("p",{class:"text-muted",children:["Lead Designer",Object(s.jsx)("br",{}),"Lead Developer"]})]})})]})]})]})]})},T="userData",P=function(){var e=Object(l.g)(),t=Object(a.useContext)(x);return Object(s.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-shrink",id:"mainNav",children:[Object(s.jsx)("a",{class:"navbar-brand",href:"/",children:"RefLink"}),Object(s.jsx)("button",{class:"navbar-toggler navbar-toggler-right collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:"Menu"}),Object(s.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{class:"navbar-nav text-uppercase ml-auto",children:[Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/create",children:"Utw\xf3rz link"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/links",children:"Lista link\xf3w"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/team",children:"Nasz zesp\xf3\u0142"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/",onClick:function(c){c.preventDefault(),t.logout(),e.push("/")},children:"Wylog\xf3j"})})]})})]})},q=function(){return Object(s.jsx)("footer",{class:"footer py-4",children:Object(s.jsx)("div",{class:"container",children:Object(s.jsx)("div",{class:"row align-items-center",children:Object(s.jsx)("div",{class:"col-lg-4 text-lg-left yel",children:"2021 RefLink"})})})})};c(41);var W=function(){var e=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),n=Object(b.a)(r,2),i=n[0],l=n[1],j=Object(a.useState)(null),o=Object(b.a)(j,2),d=o[0],h=o[1],u=Object(a.useCallback)((function(e,t){s(e),h(t),localStorage.setItem(T,JSON.stringify({userId:t,token:e}))}),[]),x=Object(a.useCallback)((function(){s(null),h(null),localStorage.removeItem(T)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(T));e&&e.token&&u(e.token,e.userId),l(!0)}),[u]),{login:u,logout:x,token:c,userId:d,ready:i}}(),t=e.token,c=e.login,r=e.logout,n=e.userId,j=e.ready,o=!!t,d=function(e){return e?Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/links",exact:!0,children:Object(s.jsx)(m,{})}),Object(s.jsx)(l.b,{path:"/create",exact:!0,children:Object(s.jsx)(v,{})}),Object(s.jsx)(l.b,{path:"/detail/:id",children:Object(s.jsx)(g,{})}),Object(s.jsx)(l.b,{path:"/team",exact:!0,children:Object(s.jsx)(E,{})}),Object(s.jsx)(l.a,{to:"/create"})]}):Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/",exact:!0,children:Object(s.jsx)(z,{})}),Object(s.jsx)(l.b,{path:"/registration",exact:!0,children:Object(s.jsx)(N,{})})]})}(o);return j?Object(s.jsx)(x.Provider,{value:{token:t,login:c,logout:r,userId:n,isAuthenticated:o},children:Object(s.jsxs)(i.a,{children:[o&&Object(s.jsx)(P,{}),d,o&&Object(s.jsx)(q,{})]})}):Object(s.jsx)(O,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(s.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.94018692.chunk.js.map