import { h } from '../ionic.core.js';

import { b as createColorClasses } from './chunk-7c632336.js';

class Chip {
    constructor() {
        this.outline = false;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { 'chip-outline': this.outline, 'ion-activatable': true })
        };
    }
    render() {
        return [
            h("slot", null),
            this.mode === 'md' ? h("ion-ripple-effect", null) : null
        ];
    }
    static get is() { return "ion-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "outline": {
            "type": Boolean,
            "attr": "outline"
        }
    }; }
    static get style() { return ":host{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px;padding:7px 12px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}:host(:focus){outline:none;--background:rgba(0,0,0,0.16)}:host(.activated){--background:rgba(0,0,0,0.2)}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb),.12)}:host(.ion-color.activated){background:rgba(var(--ion-color-base-rgb),.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline:not(.ion-color)){border-color:rgba(0,0,0,.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb),.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0,0,0,.04)}:host(.chip-outline.activated:not(.ion-color)){background:rgba(0,0,0,.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0,0,0,.54)}::slotted(ion-icon:first-child){margin:-4px 8px -4px -4px}::slotted(ion-icon:last-child){margin:-4px -4px -4px 8px}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin:-4px 8px -4px -8px}::slotted(ion-avatar:last-child){margin:-4px -8px -4px 8px}\@media (any-hover:hover){:host(:hover){--background:rgba(0,0,0,0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb),.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(0,0,0,.04)}}"; }
    static get styleMode() { return "ios"; }
}

export { Chip as IonChip };
