"use strict";(self.webpackChunkproject_proverka=self.webpackChunkproject_proverka||[]).push([[23],{23:(V,_,i)=>{i.r(_),i.d(_,{StudentAccountModule:()=>D});var s=i(9808),o=i(3075),g=i(2930),t=(i(4710),i(5e3)),v=(i(5113),i(3442),i(1314),i(5385),i(5261),i(5628));let N=(()=>{let e=class{};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,v.wq]]}),e})();var d=i(3759),m=i(4173),P=i(9751);let C=(()=>{class e{constructor(n){this._router=n}canActivate(){return new P.y(n=>{var r,a;localStorage.getItem("user")&&"ROLE_STUDENT"===(null===(r=JSON.parse(localStorage.getItem("user")))||void 0===r?void 0:r.role)?this._router.navigate(["cabinet","main"]):localStorage.getItem("user")&&"ROLE_STUDENT"!==(null===(a=JSON.parse(localStorage.getItem("user")))||void 0===a?void 0:a.role)?this._router.navigate(["rooms","main"]):n.next(!0)})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var h=i(4970),b=i(951),y=i(2171),M=i(393);let E=(()=>{class e extends h.L{constructor(n,r,a){super(),this._userBaseService=n,this._route=r,this._notificationService=a,document.querySelector("body").style.background="#fff"}toTeacherForm(){this._route.navigate(["login","teacher"])}submitForm(){const n={username:this.getFormValue("email"),password:this.getFormValue("passwordValue")};this._userBaseService.login(n,"ROLE_STUDENT\\"+n.username).subscribe({next:r=>{r.role&&(this._route.navigate(["cabinet","main"]),localStorage.setItem("user",JSON.stringify({username:this.getFormValue("email"),password:this.getFormValue("passwordValue"),role:r.role})),this._notificationService.subject$.next({text:"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",status:"success"}))},error:()=>{this._notificationService.subject$.next({text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",status:"error"})}})}getControls(){return new o.cw({email:new o.NI("",[o.kI.required]),passwordValue:new o.NI("",[o.kI.required])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.J),t.Y36(g.F0),t.Y36(y.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["login-component"]],features:[t.qOj],decls:18,vars:2,consts:[[1,"wrapper"],[1,"b-form",3,"formGroup"],["formControlName","email",1,"b-form__email_field"],["tuiTextfield","","placeholder","mail@mail.ru","type","email"],["formControlName","passwordValue",1,"b-form__password_field"],["tuiTextfield","","placeholder","","type","password"],[1,"b-form__bottom_panel"],[3,"click"],["tuiButton","","type","button","appearance","primary",1,"b-form__button_login",3,"disabled","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"tui-input",2),t._uU(4," \u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b "),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"div")(7,"tui-input",4),t._uU(8," \u041f\u0430\u0440\u043e\u043b\u044c "),t._UZ(9,"input",5),t.qZA()(),t.TgZ(10,"div",6)(11,"div"),t._uU(12,"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),t.qZA(),t.TgZ(13,"div",7),t.NdJ("click",function(){return r.toTeacherForm()}),t._uU(14,"\u042f \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c"),t.qZA()(),t.TgZ(15,"div")(16,"button",8),t.NdJ("click",function(){return r.submitForm()}),t._uU(17," \u0412\u043e\u0439\u0442\u0438 "),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.controlsGroup),t.xp6(15),t.Q6J("disabled",!r.controlsGroup.valid))},directives:[o._Y,o.JL,o.sg,m.K3,m.wU,o.JJ,o.u,M.MB,d.v0],styles:[".b-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .b-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .b-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{display:flex;justify-content:center;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]{margin-top:109px}.b-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:18px}.b-form__email_field[_ngcontent-%COMP%], .b-form__password_field[_ngcontent-%COMP%]{width:100%;border-radius:0}.b-form__bottom_panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.b-form__bottom_panel[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{cursor:pointer}.b-form__button_login[_ngcontent-%COMP%]{border-radius:0;width:100%;margin-top:72px;background:#7256FD}"]}),e})();var A=i(7579),U=i(2722);let k=(()=>{class e extends h.L{constructor(n,r){super(),this._userBaseService=n,this._notificationService=r,this.onRegistration=new t.vpe,this._onDestroy$=new A.x}ngOnDestroy(){this._onDestroy$.next()}submitForm(){const n={firstName:this.getFormValue("username").split(" ")[1],lastName:this.getFormValue("username").split(" ")[0],patronymic:this.getFormValue("username").split(" ")[2],password:this.getFormValue("password"),email:this.getFormValue("email"),phoneNumber:this.getFormValue("contacts"),university:this.getFormValue("universityName"),institute:this.getFormValue("faculty"),studentGroup:this.getFormValue("group"),socialNetwork:this.getFormValue("socialNetworkLink")};this._userBaseService.registerStudent(n).pipe((0,U.R)(this._onDestroy$)).subscribe({next:()=>{this._notificationService.subject$.next({text:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430",status:"success"}),this.onRegistration.emit()},error:()=>{this._notificationService.subject$.next({text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",status:"error"})}})}getControls(){return new o.cw({username:new o.NI("",[o.kI.required]),universityName:new o.NI("",[o.kI.required]),faculty:new o.NI("",[o.kI.required]),group:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required]),repeatPassword:new o.NI("",[o.kI.required]),socialNetworkLink:new o.NI("",[o.kI.required]),contacts:new o.NI("",[o.kI.required])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.J),t.Y36(y.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["registration-component"]],outputs:{onRegistration:"onRegistration"},features:[t.qOj],decls:41,vars:2,consts:[[1,"wrapper"],[1,"b-form",3,"formGroup"],["formControlName","username",1,"b-form__username_field"],["tuiTextfield","","placeholder","","type","text"],["formControlName","universityName",1,"b-form__university_field"],["formControlName","faculty",1,"b-form__faculty_field"],["formControlName","group",1,"b-form__group_field"],["formControlName","email",1,"b-form__email_field"],["tuiTextfield","","placeholder","","type","email"],["formControlName","password",1,"b-form__password_field"],["tuiTextfield","","placeholder","","type","password"],["formControlName","repeatPassword",1,"b-form__password_field"],["formControlName","socialNetworkLink",1,"b-form__socials_field"],["formControlName","contacts",1,"b-form__contacts_field"],["tuiButton","","type","submit","appearance","primary",1,"b-form__button_login",3,"disabled","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"tui-input",2),t._uU(4," \u0424\u0418\u041e "),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"div")(7,"tui-input",4),t._uU(8," \u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435 "),t._UZ(9,"input",3),t.qZA()(),t.TgZ(10,"div")(11,"tui-input",5),t._uU(12," \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 "),t._UZ(13,"input",3),t.qZA()(),t.TgZ(14,"div")(15,"tui-input",6),t._uU(16," \u0413\u0440\u0443\u043f\u043f\u0430 "),t._UZ(17,"input",3),t.qZA()(),t.TgZ(18,"div")(19,"tui-input",7),t._uU(20," \u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b "),t._UZ(21,"input",8),t.qZA()(),t.TgZ(22,"div")(23,"tui-input",9),t._uU(24," \u041f\u0430\u0440\u043e\u043b\u044c "),t._UZ(25,"input",10),t.qZA()(),t.TgZ(26,"div")(27,"tui-input",11),t._uU(28," \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c "),t._UZ(29,"input",10),t.qZA()(),t.TgZ(30,"div")(31,"tui-input",12),t._uU(32," \u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u043e\u0446\u0441\u0435\u0442\u044c "),t._UZ(33,"input",3),t.qZA()(),t.TgZ(34,"div")(35,"tui-input",13),t._uU(36," \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 "),t._UZ(37,"input",3),t.qZA()(),t.TgZ(38,"div")(39,"button",14),t.NdJ("click",function(){return r.submitForm()}),t._uU(40," \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f "),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.controlsGroup),t.xp6(38),t.Q6J("disabled",!r.controlsGroup.valid))},directives:[o._Y,o.JL,o.sg,m.K3,m.wU,o.JJ,o.u,M.MB,d.v0],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:109px}.b-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:18px}.b-form__socials_field[_ngcontent-%COMP%], .b-form__password_field[_ngcontent-%COMP%], .b-form__group_field[_ngcontent-%COMP%], .b-form__faculty_field[_ngcontent-%COMP%], .b-form__university_field[_ngcontent-%COMP%], .b-form__username_field[_ngcontent-%COMP%], .b-form__contacts_field[_ngcontent-%COMP%], .b-form__email_field[_ngcontent-%COMP%]{border-radius:0}.b-form__button_login[_ngcontent-%COMP%]{border-radius:0;width:100%;margin-top:72px;background:#7256FD}"]}),e})();function B(e,u){1&e&&(t.ynx(0),t._UZ(1,"login-component"),t.BQk())}function I(e,u){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"registration-component",6),t.NdJ("onRegistration",function(){return t.CHM(n),t.oxw().submitRegistration()}),t.qZA(),t.BQk()}}const T=function(e,u){return{container__current:e,container__unable:u}},L=function(e){return{container__right_small:e}};let S=(()=>{class e{constructor(){this.currentComponent=p.login}submitRegistration(){this.currentComponent=p.login}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:10,vars:13,consts:[[1,"container"],[1,"container__left"],[1,"container__actions"],[3,"ngClass","click"],[4,"ngIf"],[1,"container__right",3,"ngClass"],[3,"onRegistration"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return r.currentComponent="login"}),t._uU(4,"\u0412\u0445\u043e\u0434"),t.qZA(),t.TgZ(5,"div",3),t.NdJ("click",function(){return r.currentComponent="registration"}),t._uU(6,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t.qZA()(),t.YNc(7,B,2,0,"ng-container",4),t.YNc(8,I,2,0,"ng-container",4),t.qZA(),t._UZ(9,"div",5),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngClass",t.WLB(5,T,"login"===r.currentComponent,"registration"===r.currentComponent)),t.xp6(2),t.Q6J("ngClass",t.WLB(8,T,"registration"===r.currentComponent,"login"===r.currentComponent)),t.xp6(2),t.Q6J("ngIf","login"===r.currentComponent),t.xp6(1),t.Q6J("ngIf","registration"===r.currentComponent),t.xp6(1),t.Q6J("ngClass",t.VKq(11,L,"login"===r.currentComponent)))},directives:[s.mk,s.O5,E,k],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.container__right[_ngcontent-%COMP%]{background:linear-gradient(171.2deg,#7256FD 6.55%,#8D76FF 93.93%);height:100%}.container__right_small[_ngcontent-%COMP%]{height:100vh}.container__left[_ngcontent-%COMP%]{margin:100px}.container__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container__actions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-right:30px}.container__unable[_ngcontent-%COMP%]{font-size:36px;cursor:pointer}.container__current[_ngcontent-%COMP%]{font-weight:700;font-size:80px;border-bottom:6px solid #7256FD;padding-bottom:40px;cursor:pointer}"]}),e})();var p=(()=>{return(e=p||(p={})).login="login",e.registration="registration",p;var e})();const J=[{path:"",component:S,canActivate:[C]}];let D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[C],imports:[[s.ez,g.Bz.forChild(J),o.UX,m.Qf,d.fN,N]]}),e})()}}]);