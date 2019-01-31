var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Ionic.loadBundle("hm0yjz6v",["require","exports","./chunk-2c5e69a8.js","./chunk-6aa900a7.js","./chunk-7348297b.js","./chunk-e9d5d8f9.js"],function(e,t,n,r,i,o){var s=window.Ionic.h,a=1,u=function(){function e(e,t){this.component=e,this.params=t,this.state=a}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.state=2,this.element?[3,2]:(t=this,[4,r.attachComponent(this.delegate,e,this.component,["ion-page","ion-page-invisible"],this.params)]);case 1:t.element=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){n.assert(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function c(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var r=e.params;if(r===n)return!0;if(!r&&!n)return!0;if(!r||!n)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u])return!1}return!0}function h(e,t){return e?e instanceof u?e:new u(e,t):null}var p=function(){function t(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return t.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},t.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},t.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.rootChanged(),t=this,[4,new Promise(function(t,n){e(["./chunk-58ce983f.js"],t,n)})];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},t.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];o.lifecycle(n.element,i.LIFECYCLE_WILL_UNLOAD),n._destroy()}this.gesture&&this.gesture.destroy(),this.transInstr.length=this.views.length=0,this.destroyed=!0},t.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)},t.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)},t.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)},t.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},t.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)},t.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},t.prototype.removeIndex=function(e,t,n,r){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},r)},t.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)},t.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},t.prototype.setRouteId=function(e,t,n){var r,i=this,o=this.getActiveSync();if(c(o,e,t))return Promise.resolve({changed:!1,element:o.element});var s,a=new Promise(function(e){return r=e}),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:function(){return __awaiter(i,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}})})}}),n}};if("root"===n)s=this.setRoot(e,t,u);else{var h=this.views.find(function(n){return c(n,e,t)});h?s=this.popTo(h,Object.assign({},u,{direction:"back"})):"forward"===n?s=this.push(e,t,u):"back"===n&&(s=this.setRoot(e,t,Object.assign({},u,{direction:"back",animated:!0})))}return a},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},t.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},t.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},t.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},t.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},t.prototype.getLength=function(){return this.views.length},t.prototype.getActiveSync=function(){return this.views[this.views.length-1]},t.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},t.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},t.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},t.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},t.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},t.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},t.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},t.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,i;return __generator(this,function(o){switch(o.label){case 0:if(o.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===a?[4,n.init(this.el)]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return r=o.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},o.label=5;case 5:return this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return i=o.sent(),this.failed(i,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},t.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){n.assert(void 0!==e.removeStart,"removeView needs removeStart"),n.assert(void 0!==e.removeCount,"removeView needs removeCount");var r=this.views.indexOf(e.removeView);if(r<0)throw new Error("removeView was not found");e.removeStart+=r}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){n.assert(i.length>0,"length can not be zero");var o=i.map(function(e){return e instanceof u?e:"page"in e?h(e.page,e.params):h(e,void 0)}).filter(function(e){return null!==e});if(0===o.length)throw new Error("invalid views to insert");for(var s=0,a=o;s<a.length;s++){var c=a[s];c.delegate=e.opts.delegate;var p=c.nav;if(p&&p!==this)throw new Error("inserted view was already inserted");if(3===c.state)throw new Error("inserted view was already destroyed")}e.insertViews=o}},t.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t)return a}},t.prototype.postViewInit=function(e,t,r){n.assert(t||e,"Both leavingView and enteringView are null"),n.assert(r.resolve,"resolve must be valid"),n.assert(r.reject,"reject must be valid");var s,a=r.opts,u=r.insertViews,c=r.removeStart,h=r.removeCount;if(void 0!==c&&void 0!==h){n.assert(c>=0,"removeStart can not be negative"),n.assert(h>=0,"removeCount can not be negative"),s=[];for(var p=0;p<h;p++)(b=this.views[p+c])&&b!==e&&b!==t&&s.push(b);a.direction=a.direction||"back"}var l=this.views.length+(void 0!==u?u.length:0)-(void 0!==h?h:0);if(n.assert(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(u){for(var d=r.insertStart,v=0,f=u;v<f.length;v++)this.insertViewAt(b=f[v],d),d++;r.enteringRequiresTransition&&(a.direction=a.direction||"forward")}if(s&&s.length>0){for(var m=0,g=s;m<g.length;m++)o.lifecycle((b=g[m]).element,i.LIFECYCLE_WILL_LEAVE),o.lifecycle(b.element,i.LIFECYCLE_DID_LEAVE),o.lifecycle(b.element,i.LIFECYCLE_WILL_UNLOAD);for(var y=0,w=s;y<w.length;y++){var b;this.destroyView(b=w[y])}}},t.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var r,i,s,a,u,c,h=this;return __generator(this,function(p){switch(p.label){case 0:return i=(r=n.opts).progressAnimation?function(e){return h.sbAni=e}:void 0,s=e.element,a=t&&t.element,u=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||this.config.get("navAnimation"),progressCallback:i,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:s,leavingEl:a},r),[4,o.transition(u)];case 1:return c=p.sent().hasCompleted,[2,this.transitionFinish(c,e,t,r)]}})})},t.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}},t.prototype.insertViewAt=function(e,t){var r=this.views,i=r.indexOf(e);i>-1?(n.assert(e.nav===this,"view is not part of the nav"),r.splice(t,0,r.splice(i,1)[0])):(n.assert(!e.nav,"nav is used"),e.nav=this,r.splice(t,0,e))},t.prototype.removeView=function(e){n.assert(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,r=t.indexOf(e);n.assert(r>-1,"view must be part of the stack"),r>=0&&t.splice(r,1)},t.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},t.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var s=t[r],a=s.element;r>n?(o.lifecycle(a,i.LIFECYCLE_WILL_UNLOAD),this.destroyView(s)):r<n&&o.setPageHidden(a,!0)}},t.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},t.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},t.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},t.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},t.prototype.render=function(){return s("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}(),l=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),v=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}();t.IonNav=p,t.IonNavPop=l,t.IonNavPush=d,t.IonNavSetRoot=v,Object.defineProperty(t,"__esModule",{value:!0})});