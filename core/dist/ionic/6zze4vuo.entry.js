const e=window.Ionic.h;import{d as t}from"./chunk-7c632336.js";import{d as i,e as s}from"./chunk-6d7d2f8c.js";class n{constructor(){this.childOpts=[],this.inputId=`ion-sel-${a++}`,this.didInit=!1,this.isExpanded=!1,this.keyFocus=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=(e=>{this.open(e)}),this.onKeyUp=(()=>{this.keyFocus=!0}),this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.keyFocus=!1,this.ionBlur.emit()})}disabledChanged(){this.emitStyle()}valueChanged(){this.didInit&&(this.updateOptions(),this.ionChange.emit({value:this.value}),this.emitStyle())}async selectOptionChanged(){await this.loadOptions(),this.didInit&&this.updateOptions()}async componentDidLoad(){if(await this.loadOptions(),void 0===this.value)if(this.multiple){const e=this.childOpts.filter(e=>e.selected);this.value=e.map(e=>e.value)}else{const e=this.childOpts.find(e=>e.selected);e&&(this.value=e.value)}this.updateOptions(),this.emitStyle(),this.el.forceUpdate(),this.didInit=!0}async open(e){if(this.disabled||this.isExpanded)return;const t=this.overlay=await this.createOverlay(e);return this.isExpanded=!0,t.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1}),await t.present(),t}createOverlay(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}async openPopover(e){const t=this.interfaceOptions,i=Object.assign({mode:this.mode},t,{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.childOpts.map(e=>({text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:()=>{this.value=e.value,this.close()}}))}});return this.popoverCtrl.create(i)}async openActionSheet(){const e=this.childOpts.map(e=>({role:e.selected?"selected":"",text:e.textContent,handler:()=>{this.value=e.value}}));e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}});const t=this.interfaceOptions,i=Object.assign({mode:this.mode},t,{buttons:e,cssClass:["select-action-sheet",t.cssClass]});return this.actionSheetCtrl.create(i)}async openAlert(){const e=this.getLabel(),t=this.interfaceOptions,i=this.multiple?"checkbox":"radio",s=Object.assign({mode:this.mode},t,{header:t.header?t.header:e?e.textContent:null,inputs:this.childOpts.map(e=>({type:i,label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled})),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",t.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return this.alertCtrl.create(s)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}async loadOptions(){this.childOpts=await Promise.all(Array.from(this.el.querySelectorAll("ion-select-option")).map(e=>e.componentOnReady()))}updateOptions(){let e=!0;for(const s of this.childOpts){const n=e&&(i=s.value,void 0!==(t=this.value)&&(Array.isArray(t)?t.includes(i):t===i));s.selected=n,n&&!this.multiple&&(e=!1)}var t,i}getLabel(){return i(this.el)}hasValue(){return""!==this.getText()}getText(){const e=this.selectedText;return null!=e&&""!==e?e:(t=this.childOpts,void 0===(i=this.value)?"":Array.isArray(i)?i.map(e=>l(t,e)).filter(e=>null!==e).join(", "):l(t,i)||"");var t,i}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}hostData(){const e=this.inputId+"-lbl",s=i(this.el);return s&&(s.id=e),{role:"combobox","aria-disabled":this.disabled?"true":null,"aria-expanded":`${this.isExpanded}`,"aria-haspopup":"dialog","aria-labelledby":e,class:{"in-item":t("ion-item",this.el),"select-disabled":this.disabled,"select-key":this.keyFocus}}}render(){s(!0,this.el,this.name,function(e){if(null!=e)return Array.isArray(e)?e.join(","):e.toString()}(this.value),this.disabled);const t=this.inputId+"-lbl",n=i(this.el);n&&(n.id=t);let l=!1,a=this.getText();return""===a&&null!=this.placeholder&&(a=this.placeholder,l=!0),[e("div",{class:{"select-text":!0,"select-placeholder":l}},a),e("div",{class:"select-icon",role:"presentation"},e("div",{class:"select-icon-inner"})),e("button",{type:"button",onClick:this.onClick,onKeyUp:this.onKeyUp,onFocus:this.onFocus,onBlur:this.onBlur})]}static get is(){return"ion-select"}static get encapsulation(){return"shadow"}static get properties(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},okText:{type:String,attr:"ok-text"},open:{method:!0},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelectOptionDidLoad",method:"selectOptionChanged"},{name:"ionSelectOptionDidUnload",method:"selectOptionChanged"}]}static get style(){return":host{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.select-key) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"}static get styleMode(){return"ios"}}function l(e,t){const i=e.find(e=>e.value===t);return i?i.textContent:null}let a=0;class o{constructor(){this.inputId=`ion-selopt-${r++}`,this.disabled=!1,this.selected=!1}componentWillLoad(){void 0===this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){return{role:"option",id:this.inputId}}static get is(){return"ion-select-option"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:"Any",attr:"value",mutable:!0}}}static get events(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{display:none}"}}let r=0;class c{constructor(){this.options=[]}onSelect(e){const t=this.options.find(t=>t.value===e.target.value);t&&t.handler&&t.handler()}render(){return e("ion-list",null,void 0!==this.header&&e("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&e("ion-item",null,e("ion-label",{"text-wrap":!0},void 0!==this.subHeader&&e("h3",null,this.subHeader),void 0!==this.message&&e("p",null,this.message))),e("ion-radio-group",null,this.options.map(t=>e("ion-item",null,e("ion-label",null,t.text),e("ion-radio",{checked:t.checked,value:t.value,disabled:t.disabled})))))}static get is(){return"ion-select-popover"}static get encapsulation(){return"scoped"}static get properties(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}}static get listeners(){return[{name:"ionSelect",method:"onSelect"}]}static get style(){return".sc-ion-select-popover-h   ion-list.sc-ion-select-popover{margin:-1px 0}.sc-ion-select-popover-h   ion-label.sc-ion-select-popover, .sc-ion-select-popover-h   ion-list-header.sc-ion-select-popover{margin:0}"}}export{n as IonSelect,o as IonSelectOption,c as IonSelectPopover};