const e=window.Ionic.h;import{a as t,c as o,d as s,e as i,f as n,g as a,h as r}from"./chunk-63a1953b.js";import{e as d,a as l}from"./chunk-7c632336.js";import{a as c,b as m}from"./chunk-99929188.js";import"./chunk-90d954cd.js";import{a as p}from"./chunk-da1efb5f.js";function h(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),s.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(s).add(i))}function u(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e,n=t.querySelector(".modal-wrapper");i.addElement(n);const a=n.getBoundingClientRect();return i.beforeStyles({opacity:1}).fromTo("translateY","0%",`${window.innerHeight-a.top}px`),s.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("ease-out").duration(250).add(s).add(i))}function y(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),s.fromTo("opacity",.01,.32),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(s).add(i))}function b(e,t){const o=new e,s=new e;s.addElement(t.querySelector("ion-backdrop"));const i=new e,n=t.querySelector(".modal-wrapper");return i.addElement(n),i.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),s.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(s).add(i))}class w{constructor(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,t)}lifecycle(e){const t=this.usersElement,o=f[e.type];if(t&&o){const s=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(s)}}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign({},this.componentProps,{modal:this.el});return this.usersElement=await c(this.delegate,e,this.component,["ion-page"],t),await p(this.usersElement),o(this,"modalEnter",h,y)}async dismiss(e,t){const o=await s(this,e,t,"modalLeave",u,b);return o&&await m(this.delegate,this.usersElement),o}onDidDismiss(){return i(this.el,"ionModalDidDismiss")}onWillDismiss(){return i(this.el,"ionModalWillDismiss")}hostData(){return{"no-router":!0,class:Object.assign({},d(this.mode,"modal"),l(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}render(){const t=d(this.mode,"modal-wrapper");return[e("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),e("div",{role:"dialog",class:t})]}static get is(){return"ion-modal"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}}static get events(){return[{name:"ionModalDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionModalDidPresent",method:"lifecycle"},{name:"ionModalWillPresent",method:"lifecycle"},{name:"ionModalWillDismiss",method:"lifecycle"},{name:"ionModalDidDismiss",method:"lifecycle"}]}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"}static get styleMode(){return"ios"}}const f={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};class g{create(e){return n(this.doc.createElement("ion-modal"),e)}dismiss(e,t,o){return a(this.doc,e,t,"ion-modal",o)}async getTop(){return r(this.doc,"ion-modal")}static get is(){return"ion-modal-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{w as IonModal,g as IonModalController};