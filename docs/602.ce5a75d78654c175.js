"use strict";(self.webpackChunkmaids=self.webpackChunkmaids||[]).push([[602],{8602:(D,m,s)=>{s.r(m),s.d(m,{CardsModule:()=>U});var c=s(6895),o=s(3456),v=s(6013),_=s.n(v),t=s(1571),u=s(5952),h=s(9549),Z=s(4144);let g=(()=>{class a{constructor(){this.keyword=new t.vpe}search(e){this.keyword.emit(e||"empty")}static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-search"]],outputs:{keyword:"keyword"},decls:8,vars:0,consts:[[1,"container"],[1,"col-lg-6","m-auto","mt-5"],[1,"w-100"],["appearance","outline",1,"w-100"],["type","text","matInput","","placeholder","Search",3,"keyup"]],template:function(n,i){1&n&&(t.TgZ(0,"header")(1,"div",0)(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"Search"),t.qZA(),t.TgZ(7,"input",4),t.NdJ("keyup",function(r){return i.search(r.target.value)}),t.qZA()()()()()())},dependencies:[h.KE,h.hX,Z.Nt]})}return a})();var T=s(3700);let f=(()=>{class a{constructor(e){this.Cards=e,this.cards=[],this.copiedCards=[],this.totalCards=0,this.pageSize=0,this.pageIndex=0,this.paginationIndex=new t.vpe}ngOnInit(){this.getCards()}getCards(){this.subscription=this.Cards.getCards().subscribe({next:e=>{e&&(this.cards=this.copiedCards=e.data?.slice()??[],this.totalCards=e.total??0,this.pageSize=e.per_page??0)}})}handlePageChange(e){this.pageIndex=e.pageIndex,this.paginationIndex.emit(++this.pageIndex)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(u.d))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-pagination-controls"]],outputs:{paginationIndex:"paginationIndex"},decls:2,vars:2,consts:[[1,"col-12","mb-3"],[3,"length","pageSize","page"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"mat-paginator",1),t.NdJ("page",function(r){return i.handlePageChange(r)}),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("length",i.totalCards)("pageSize",i.pageSize))},dependencies:[T.NW]})}return a})();var S=s(8423);let C=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-loading-indicator"]],decls:3,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","square-jelly-box",3,"fullScreen"],[1,"text-white"]],template:function(n,i){1&n&&(t.TgZ(0,"ngx-spinner",0)(1,"p",1),t._uU(2,"Loading Cards..."),t.qZA()()),2&n&&t.Q6J("fullScreen",!0)},dependencies:[S.Ro]})}return a})();var l=s(3546),y=s(6575);let w=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-card"]],inputs:{card:"card"},decls:7,vars:4,consts:[["data-aos","fade-down",1,"custom-card"],["mat-card-image","","alt","avatar","loading","lazy",1,"w-25","rounded-circle","mt-3","m-auto",3,"lazyLoad"],[1,"d-flex","justify-content-center","mb-3","p-0"],[1,"d-flex","justify-content-center"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-header",2)(3,"mat-card-title",3),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle",3),t._uU(6),t.qZA()()()),2&n&&(t.xp6(1),t.s9C("lazyLoad",i.card.avatar),t.xp6(3),t.AsE("",i.card.first_name," ",i.card.last_name,""),t.xp6(2),t.Oqu(i.card.email))},dependencies:[l.a8,l.dk,l.G2,l.$j,l.n5,y.z1],styles:[".custom-card[_ngcontent-%COMP%]{cursor:pointer;transition:transform .4s ease-in-out}.custom-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}"]})}return a})();function z(a,N){if(1&a){const e=t.EpF();t.TgZ(0,"div",6)(1,"app-card",7),t.NdJ("click",function(){const d=t.CHM(e).index,r=t.oxw();return t.KtG(r.cardDetails(d))}),t.qZA()()}if(2&a){const e=N.$implicit;t.xp6(1),t.Q6J("card",e)}}let x=(()=>{class a{constructor(e,n){this.Cards=e,this.router=n,this.cards=[],this.copiedCards=[],this.searchedCards=[]}ngOnInit(){this.getCards()}getCards(e){this.subscription=this.Cards.getCards(e).subscribe({next:n=>{n&&(_().success({title:"SUCCESS",message:"OK",timeout:3e3,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",drag:!0,transitionInMobile:"fadeInDown",transitionOutMobile:"fadeOutDown"}),this.cards=n?.data,this.copiedCards=n?.data)}})}search(e){"empty"===e?this.cards=this.copiedCards:(e=e.trim().toLowerCase(),this.cards=this.copiedCards,this.searchedCards=this.cards.filter(n=>n.first_name.toLowerCase().includes(e)||n.last_name.toLowerCase().includes(e)||n.email.toLowerCase().includes(e)),this.cards=this.searchedCards)}pagination(e){return e?this.getCards(e):void 0}cardDetails(e){localStorage.setItem("cardDetails",JSON.stringify(this.cards[e])),this.router.navigateByUrl("cards/"+e)}trackByFn(e,n){return n.id}ngOnDestroy(){return this.subscription?this.subscription.unsubscribe():void 0}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(u.d),t.Y36(o.F0))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-cards"]],decls:7,vars:2,consts:[[1,"container","vh-100","d-flex","flex-column","justify-content-between"],[3,"keyword"],[1,"container"],[1,"row","justify-content-center","align-items-center","gy-3"],["class","col-lg-3 col-md-6",4,"ngFor","ngForOf","ngForTrackBy"],[3,"paginationIndex"],[1,"col-lg-3","col-md-6"],[3,"card","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"app-search",1),t.NdJ("keyword",function(r){return i.search(r)}),t.qZA(),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,z,2,1,"div",4),t.qZA()(),t.TgZ(5,"app-pagination-controls",5),t.NdJ("paginationIndex",function(r){return i.pagination(r)}),t.qZA()(),t._UZ(6,"app-loading-indicator")),2&n&&(t.xp6(4),t.Q6J("ngForOf",i.cards)("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,g,f,C,w]})}return a})();var A=s(4859);const I=[{path:"",component:x},{path:":id",component:(()=>{class a{constructor(e){this.location=e}ngOnInit(){JSON.parse(localStorage.getItem("cardDetails"))&&(this.card=JSON.parse(localStorage.getItem("cardDetails")))}goBack(){this.location.back()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(c.Ye))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-card-details"]],decls:20,vars:7,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-lg-1"],["alt","avatar","loading","lazy","data-aos","fade-down",1,"w-100","rounded-3","m-auto",3,"lazyLoad"],[1,"col-lg-11","mt-lg-0","mt-md-3","mt-sm-3","mt-3"],["data-aos","fade-down",1,"desktop"],["data-aos","fade-down",1,"mobile"],[1,"text-center"],[1,"text-end"],["mat-raised-button","","color","primary","type","button",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"div",6)(13,"p",7),t._uU(14),t.qZA(),t.TgZ(15,"p",7),t._uU(16),t.qZA()()()(),t.TgZ(17,"div",8)(18,"button",9),t.NdJ("click",function(){return i.goBack()}),t._uU(19,"Back"),t.qZA()()()),2&n&&(t.xp6(3),t.s9C("lazyLoad",i.card.avatar),t.xp6(4),t.hij("First Name:- ",i.card.first_name,""),t.xp6(2),t.hij("Last Name:- ",i.card.last_name,""),t.xp6(2),t.hij("Email:- ",i.card.email,""),t.xp6(3),t.AsE("",i.card.first_name," ",i.card.last_name,""),t.xp6(2),t.Oqu(i.card.email))},dependencies:[y.z1,A.lW],styles:[".container[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]{display:none;visibility:hidden}@media only screen and (max-width: 992px){.container[_ngcontent-%COMP%]   .desktop[_ngcontent-%COMP%]{display:none;visibility:hidden}.container[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]{display:block;visibility:visible}}"]})}return a})()}];let B=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(I),o.Bz]})}return a})();var p=s(4466);const F=[{path:"",component:g}];let O=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(F),o.Bz]})}return a})(),b=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[c.ez,O,p.m]})}return a})();const J=[{path:"",component:f}];let M=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(J),o.Bz]})}return a})(),j=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[c.ez,M,p.m]})}return a})();const k=[{path:"",component:C}];let L=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(k),o.Bz]})}return a})(),P=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[c.ez,L,p.m]})}return a})(),U=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[c.ez,B,p.m,b,j,P]})}return a})()}}]);