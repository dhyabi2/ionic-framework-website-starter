'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad32ca8b.js');
const ionicGlobal = require('./ionic-global-0dc7ffc4.js');

const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

const Img = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.ionImgWillLoad = index.createEvent(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = index.createEvent(this, "ionImgDidLoad", 7);
        this.ionError = index.createEvent(this, "ionError", 7);
    }
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "src": ["srcChanged"]
    }; }
};
Img.style = imgCss;

exports.ion_img = Img;
