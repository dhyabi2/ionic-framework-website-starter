const e=window.Ionic.h;import{a as t,b as s,c as a,d as r,e as n,f as i,g as o,h as l}from"./chunk-63a1953b.js";import{a as d}from"./chunk-7c632336.js";function c(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.3),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1);const n=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r);return Promise.resolve(n)}function u(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.3,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9);const n=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r);return Promise.resolve(n)}function p(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;return r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.32),r.fromTo("opacity",.01,1).fromTo("scale",.9,1),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(150).add(a).add(r))}function h(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;return r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.32,0),r.fromTo("opacity",.99,0),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(150).add(a).add(r))}class m{constructor(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}buttonsChanged(){this.processedButtons=this.buttons.map(e=>"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e)}inputsChanged(){const e=this.inputs,t=new Set(e.map(e=>e.type));t.has("checkbox")&&t.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(t.values()).join("/")}. Please see alert docs for more info.`),this.inputType=t.values().next().value,this.processedInputs=e.map((e,t)=>({type:e.type||"text",name:e.name||`${t}`,placeholder:e.placeholder||"",value:e.value,label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id||`alert-input-${this.overlayIndex}-${t}`,handler:e.handler,min:e.min,max:e.max}))}componentWillLoad(){this.inputsChanged(),this.buttonsChanged()}onBackdropTap(){this.dismiss(void 0,t)}dispatchCancelHandler(e){if(s(e.detail.role)){const e=this.processedButtons.find(e=>"cancel"===e.role);this.callButtonHandler(e)}}present(){return a(this,"alertEnter",c,p)}dismiss(e,t){return r(this,e,t,"alertLeave",u,h)}onDidDismiss(){return n(this.el,"ionAlertDidDismiss")}onWillDismiss(){return n(this.el,"ionAlertWillDismiss")}rbClick(e){for(const t of this.processedInputs)t.checked=t===e;this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()}cbClick(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()}buttonClick(e){const t=e.role,a=this.getValues();if(s(t))return this.dismiss({values:a},t);const r=this.callButtonHandler(e,a);return!1!==r?this.dismiss(Object.assign({values:a},r),e.role):Promise.resolve(!1)}callButtonHandler(e,t){if(e&&e.handler){const s=e.handler(t);if(!1===s)return!1;if("object"==typeof s)return s}return{}}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const e=this.processedInputs.find(e=>!!e.checked);return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(e=>e.checked).map(e=>e.value);const e={};return this.processedInputs.forEach(t=>{e[t.name]=t.value||""}),e}renderAlertInputs(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}}renderCheckbox(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-checkbox-group","aria-labelledby":t},s.map(t=>e("button",{type:"button",onClick:()=>this.cbClick(t),"aria-checked":`${t.checked}`,id:t.id,disabled:t.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-checkbox-icon"},e("div",{class:"alert-checkbox-inner"})),e("div",{class:"alert-checkbox-label"},t.label)),"md"===this.mode&&e("ion-ripple-effect",null))))}renderRadio(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":t,"aria-activedescendant":this.activeId},s.map(t=>e("button",{type:"button",onClick:()=>this.rbClick(t),"aria-checked":`${t.checked}`,disabled:t.disabled,id:t.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-radio-icon"},e("div",{class:"alert-radio-inner"})),e("div",{class:"alert-radio-label"},t.label)))))}renderInput(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-input-group","aria-labelledby":t},s.map(t=>e("div",{class:"alert-input-wrapper"},e("input",{placeholder:t.placeholder,value:t.value,type:t.type,min:t.min,max:t.max,onInput:e=>t.value=e.target.value,id:t.id,disabled:t.disabled,tabIndex:0,class:"alert-input"}))))}hostData(){return{role:"alertdialog",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},d(this.cssClass),{"alert-translucent":this.translucent})}}renderAlertButtons(){const t=this.processedButtons;return e("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(t=>e("button",{type:"button",class:b(t),tabIndex:0,onClick:()=>this.buttonClick(t)},e("span",{class:"alert-button-inner"},t.text),"md"===this.mode&&e("ion-ripple-effect",null))))}render(){const t=`alert-${this.overlayIndex}-hdr`,s=`alert-${this.overlayIndex}-sub-hdr`,a=`alert-${this.overlayIndex}-msg`;let r;return void 0!==this.header?r=t:void 0!==this.subHeader&&(r=s),[e("ion-backdrop",{tappable:this.backdropDismiss}),e("div",{class:"alert-wrapper"},e("div",{class:"alert-head"},this.header&&e("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&e("h2",{id:s,class:"alert-sub-title"},this.subHeader)),e("div",{id:a,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(r),this.renderAlertButtons())]}static get is(){return"ion-alert"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]}static get style(){return".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin:0;padding:0}.alert-sub-title.sc-ion-alert-ios{margin:5px 0 0;padding:0;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding:10px 0;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable.sc-ion-alert-ios{margin:0;padding:0;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-button.sc-ion-alert-ios:active, .alert-button.sc-ion-alert-ios:focus, .alert-checkbox.sc-ion-alert-ios:active, .alert-checkbox.sc-ion-alert-ios:focus, .alert-input.sc-ion-alert-ios:active, .alert-input.sc-ion-alert-ios:focus, .alert-radio.sc-ion-alert-ios:active, .alert-radio.sc-ion-alert-ios:focus{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-translucent.sc-ion-alert-ios-h   .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head.sc-ion-alert-ios{padding:12px 16px 7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding:0 16px 21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding:0 0 12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:scroll;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{display:-ms-flexbox;display:flex;height:44px;contain:strict}.alert-radio-label.sc-ion-alert-ios{padding:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[aria-checked=true].sc-ion-alert-ios   .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}.alert-checkbox-label.sc-ion-alert-ios{padding:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin:10px 6px 10px 16px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button.sc-ion-alert-ios{margin:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"}static get styleMode(){return"ios"}}function b(e){return Object.assign({"alert-button":!0,"ion-activatable":!0},d(e.cssClass))}class y{create(e){return i(this.doc.createElement("ion-alert"),e)}dismiss(e,t,s){return o(this.doc,e,t,"ion-alert",s)}async getTop(){return l(this.doc,"ion-alert")}static get is(){return"ion-alert-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{m as IonAlert,y as IonAlertController};