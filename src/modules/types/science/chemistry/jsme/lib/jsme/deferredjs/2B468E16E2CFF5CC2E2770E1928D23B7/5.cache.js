$wnd.jsme.runAsyncCallback5('var a0="400px",b0="Accept",c0="Cancel",d0="Paste",e0="Paste the text to import into the text area below.",f0="dragend",g0="dragenter",h0="dragover",i0="drop",j0="gwt-HTML",k0="gwt-TextArea",l0="textarea";o(204,192,{});function m0(){m0=q;n0=new Cy(f0,new o0)}function p0(a){a.a.cancelBubble=!0;gx(a.a)}function o0(){}o(205,204,{},o0);_.Rc=function(){p0(this)};_.Uc=function(){return n0};var n0;function q0(){q0=q;r0=new Cy(g0,new s0)}function s0(){}o(206,204,{},s0);_.Rc=function(){p0(this)};_.Uc=function(){return r0};\nvar r0;function t0(){t0=q;u0=new Cy(h0,new v0)}function v0(){}o(207,204,{},v0);_.Rc=function(){p0(this)};_.Uc=function(){return u0};var u0;function w0(){w0=q;x0=new Cy(i0,new y0)}function y0(){}o(208,204,{},y0);\n_.Rc=function(a){var b,c,d,e;this.a.cancelBubble=!0;gx(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;z0(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(kq),a.a.b.a.a.e.ob[Oq]=null!=b?b:l)};_.Uc=function(){return x0};var x0;function A0(a,b,c){bA(!a.lb?a.lb=new qA(a):a.lb,c,b)}\nfunction B0(a){var b=E(Gk);PS(Vp,OS(b));this.ob=b;this.b=new jU(this.ob);this.ob[Lj]=j0;iU(this.b,a,!0);rU(this)}o(329,330,{13:1,15:1,17:1,18:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,30:1,31:1,32:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,47:1,49:1,53:1,58:1,68:1,69:1,70:1,73:1,77:1,80:1,81:1,83:1},B0);function C0(){FF();var a=E(l0);!OB&&(OB=new NB);!MB&&(MB=new LB);this.ob=a;this.ob[Lj]=k0}o(369,370,ls,C0);\nfunction D0(a,b){var c,d;c=E(zq);d=E(jq);d[Ui]=a.a.a;d.style[Pq]=a.b.a;var e=(QB(),RB(d));c.appendChild(e);PB(a.d,c);nD(a,b,d)}function E0(){hE.call(this);this.a=(kE(),rE);this.b=(sE(),vE);this.e[Ej]=nc;this.e[Dj]=nc}o(378,323,gs,E0);_.Jd=function(a){var b;b=fx(a.ob);(a=rD(this,a))&&this.d.removeChild(fx(b));return a};\nfunction F0(a){try{a.v=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Qq]=Bl,RE(a.ob,!1),a._=!1,a.Wd());b=a.ob;b.style[km]=0+(Xx(),Eo);b.style[tq]=pc;TV(a,mt(vx($doc)+(ux()-bx(a.ob,Rn)>>1),0),mt(wx($doc)+(tx()-bx(a.ob,Qn)>>1),0));d||((a._=c)?(a.ob.style[Sj]=fp,a.ob.style[Qq]=Rq,RE(a.ob,!0),Bs(a.fb,200)):(a.ob.style[Qq]=Rq,RE(a.ob,!0)))}finally{a.v=!0}}function G0(a){a.f=(new eV(a.i)).nc.Le();YC(a.f,new H0(a),(Iy(),Iy(),Jy));a.d=C(I0,m,60,[a.f])}\nfunction J0(){nW();var a,b,c,d,e,f;KW.call(this,(bX(),cX),null,!0);this.Eg();this.cb=!0;a=new B0(this.j);this.e=new C0;this.e.ob.style[Xq]=rc;MC(this.e,rc);this.Cg();eW(this,a0);f=new E0;f.ob.style[zl]=rc;f.e[Ej]=10;c=(kE(),lE);f.a=c;D0(f,a);D0(f,this.e);e=new zE;e.e[Ej]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],wE(e,a);D0(f,e);sW(this,f);nV(this,!1);this.Dg()}o(627,628,jQ,J0);_.Cg=function(){G0(this)};_.Dg=function(){var a=this.e;a.ob.readOnly=!0;var b=PC(a.ob)+"-readonly";LC(a.wd(),b,!0)};\n_.Eg=function(){mV(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function H0(a){this.a=a}o(630,1,{},H0);_.Wc=function(){uW(this.a,!1)};_.a=null;function K0(a){this.a=a}o(631,1,{},K0);\n_.Dc=function(){UC(this.a.e.ob,!0);TE(this.a.e.ob);var a=this.a.e,b;b=cx(a.ob,Oq).length;if(0<b&&a.jb){if(0>b)throw new uN("Length must be a positive integer. Length: "+b);if(b>cx(a.ob,Oq).length)throw new uN("From Index: 0  To Index: "+b+"  Text Length: "+cx(a.ob,Oq).length);var a=a.ob,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function L0(a){a.i=c0;a.j=e0;a.b=b0;mV(a.H.b,d0)}function M0(a){nW();J0.call(this);this.c=a}o(633,627,jQ,M0);_.Cg=function(){G0(this);this.a=(new eV(this.b)).nc.Le();YC(this.a,new N0(this),(Iy(),Iy(),Jy));this.d=C(I0,m,60,[this.a,this.f])};_.Dg=function(){MC(this.e,"150px")};_.Eg=function(){L0(this)};_.Wd=function(){JW(this);Rw((Ow(),Pw),new O0(this))};_.a=null;_.b=null;_.c=null;function P0(a){nW();M0.call(this,a)}o(632,633,jQ,P0);\n_.Dg=function(){MC(this.e,"150px");var a=new Q0(this),b=this.e;A0(b,new R0,(q0(),q0(),r0));A0(b,new S0,(m0(),m0(),n0));A0(b,new T0,(t0(),t0(),u0));A0(b,new U0(a),(w0(),w0(),x0))};_.Eg=function(){L0(this);this.j+=" Or drag and drop a file on it."};o(636,1,{});o(635,636,{});_.b=null;_.c=1;_.d=-1;function Q0(a){this.a=a;this.b=new V0(this);this.c=this.d=1}o(634,635,{},Q0);_.a=null;function V0(a){this.a=a}o(637,1,{},V0);_.Fg=function(a){this.a.a.e.ob[Oq]=null!=a?a:l};_.a=null;\nfunction N0(a){this.a=a}o(641,1,{},N0);_.Wc=function(){if(this.a.c){var a=this.a.c,b;b=new NI(a.a,0,cx(this.a.e.ob,Oq));iM(a.a.a,b.a)}uW(this.a,!1)};_.a=null;function O0(a){this.a=a}o(642,1,{},O0);_.Dc=function(){UC(this.a.e.ob,!0);TE(this.a.e.ob)};_.a=null;o(643,1,Fr);_.Oc=function(){var a,b;a=new W0(this.a);void 0!=$wnd.FileReader?b=new P0(a):b=new M0(a);gW(b);F0(b)};function W0(a){this.a=a}o(644,1,{},W0);_.a=null;o(645,1,Fr);\n_.Oc=function(){var a;a=new J0;var b=this.a,c;EF(a.e,b);b=(c=yN(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);MC(a.e,20*(10>b?b:10)+Eo);Rw((Ow(),Pw),new K0(a));gW(a);F0(a)};function z0(a,b){a.onloadend=function(a){b.Fg(a.target.result)}}function U0(a){this.a=a}o(650,1,{},U0);_.a=null;function R0(){}o(651,1,{},R0);function S0(){}o(652,1,{},S0);function T0(){}o(653,1,{},T0);Y(636);Y(635);Y(650);Y(651);Y(652);Y(653);Y(204);Y(206);Y(205);Y(207);Y(208);Y(627);var I0=jN(791);Y(633);Y(632);Y(644);Y(630);Y(631);Y(641);\nY(642);Y(634);Y(637);Y(329);Y(378);Y(369);s(dQ)(5);\n//@ sourceURL=5.js\n')
