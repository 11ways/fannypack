!function(e,t,n){"undefined"!=typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd?define(n):t[e]=n()}("bean",this,function(e,t){e=e||"bean",t=t||this;var n,r=window,o=t[e],i=/[^\.]*(?=\..*)\.|.*/,a=/\..*/,l="addEventListener",c="removeEventListener",u=document||{},s=u.documentElement||{},p=s[l],f=p?l:"attachEvent",h={},d=Array.prototype.slice,g=function(e,t){return e.split(t||" ")},m=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},y="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",b="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",E=function(e,t,n){for(n=0;n<t.length;n++)t[n]&&(e[t[n]]=1);return e}({},g(y+(p?b:""))),w=function(){var e="compareDocumentPosition"in s?function(e,t){return t.compareDocumentPosition&&16===(16&t.compareDocumentPosition(e))}:"contains"in s?function(e,t){return t=9===t.nodeType||t===window?s:t,t!==e&&t.contains(e)}:function(e,t){for(;e=e.parentNode;)if(e===t)return 1;return 0},t=function(t){var n=t.relatedTarget;return n?n!==this&&"xul"!==n.prefix&&!/document/.test(this.toString())&&!e(n,this):null==n};return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),T=function(){var e=g("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),t=e.concat(g("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),n=t.concat(g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),o=e.concat(g("char charCode key keyCode keyIdentifier keyLocation location")),i=e.concat(g("data")),a=e.concat(g("touches targetTouches changedTouches scale rotation")),l=e.concat(g("data origin source")),c=e.concat(g("state")),p=/over|out/,f=[{reg:/key/i,fix:function(e,t){return t.keyCode=e.keyCode||e.which,o}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(e,n,r){return n.rightClick=3===e.which||2===e.button,n.pos={x:0,y:0},e.pageX||e.pageY?(n.clientX=e.pageX,n.clientY=e.pageY):(e.clientX||e.clientY)&&(n.clientX=e.clientX+u.body.scrollLeft+s.scrollLeft,n.clientY=e.clientY+u.body.scrollTop+s.scrollTop),p.test(r)&&(n.relatedTarget=e.relatedTarget||e[("mouseover"==r?"from":"to")+"Element"]),t}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return n}},{reg:/^text/i,fix:function(){return i}},{reg:/^touch|^gesture/i,fix:function(){return a}},{reg:/^message$/i,fix:function(){return l}},{reg:/^popstate$/i,fix:function(){return c}},{reg:/.*/,fix:function(){return e}}],h={},d=function(e,t,n){if(arguments.length&&(e=e||((t.ownerDocument||t.document||t).parentWindow||r).event,this.originalEvent=e,this.isNative=n,this.isBean=!0,e)){var o,i,a,l,c,u=e.type,s=e.target||e.srcElement;if(this.target=s&&3===s.nodeType?s.parentNode:s,n){if(c=h[u],!c)for(o=0,i=f.length;o<i;o++)if(f[o].reg.test(u)){h[u]=c=f[o].fix;break}for(l=c(e,this,u),o=l.length;o--;)!((a=l[o])in this)&&a in e&&(this[a]=e[a])}}};return d.prototype.preventDefault=function(){this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1},d.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},d.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},d.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},d.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},d.prototype.clone=function(e){var t=new d(this,this.element,this.isNative);return t.currentTarget=e,t},d}(),D=function(e,t){return p||t||e!==u&&e!==r?e:s},x=function(){var e=function(e,t,n,r){var o=function(n,o){return t.apply(e,r?d.call(o,n?0:1).concat(r):o)},i=function(n,r){return t.__beanDel?t.__beanDel.ft(n.target,e):r},a=n?function(e){var t=i(e,this);if(n.apply(t,arguments))return e&&(e.currentTarget=t),o(e,arguments)}:function(e){return t.__beanDel&&(e=e.clone(i(e))),o(e,arguments)};return a.__beanDel=t.__beanDel,a},t=function(t,n,r,o,i,a,l){var c,u=w[n];"unload"==n&&(r=S(I,t,n,r,o)),u&&(u.condition&&(r=e(t,r,u.condition,a)),n=u.base||n),this.isNative=c=E[n]&&!!t[f],this.customType=!p&&!c&&n,this.element=t,this.type=n,this.original=o,this.namespaces=i,this.eventType=p||c?n:"propertychange",this.target=D(t,c),this[f]=!!this.target[f],this.root=l,this.handler=e(t,r,null,a)};return t.prototype.inNamespaces=function(e){var t,n,r=0;if(!e)return!0;if(!this.namespaces)return!1;for(t=e.length;t--;)for(n=this.namespaces.length;n--;)e[t]==this.namespaces[n]&&r++;return e.length===r},t.prototype.matches=function(e,t,n){return!(this.element!==e||t&&this.original!==t||n&&this.handler!==n)},t}(),k=function(){var e={},t=function(n,r,o,i,a,l){var c=a?"r":"$";if(r&&"*"!=r){var u,s=0,p=e[c+r],f="*"==n;if(!p)return;for(u=p.length;s<u;s++)if((f||p[s].matches(n,o,i))&&!l(p[s],p,s,r))return}else for(var h in e)h.charAt(0)==c&&t(n,h.substr(1),o,i,a,l)},n=function(t,n,r,o){var i,a=e[(o?"r":"$")+n];if(a)for(i=a.length;i--;)if(!a[i].root&&a[i].matches(t,r,null))return!0;return!1},r=function(e,n,r,o){var i=[];return t(e,n,r,null,o,function(e){return i.push(e)}),i},o=function(t){var n=!t.root&&!this.has(t.element,t.type,null,!1),r=(t.root?"r":"$")+t.type;return(e[r]||(e[r]=[])).push(t),n},i=function(n){t(n.element,n.type,null,n.handler,n.root,function(t,n,r){return n.splice(r,1),t.removed=!0,0===n.length&&delete e[(t.root?"r":"$")+t.type],!1})},a=function(){var t,n=[];for(t in e)"$"==t.charAt(0)&&(n=n.concat(e[t]));return n};return{has:n,get:r,put:o,del:i,entries:a}}(),P=function(e){n=arguments.length?e:u.querySelectorAll?function(e,t){return t.querySelectorAll(e)}:function(){throw new Error("Bean: No selector engine installed")}},_=function(e,t){if(p||!t||!e||e.propertyName=="_on"+t){var n=k.get(this,t||e.type,null,!1),r=n.length,o=0;for(e=new T(e,this,(!0)),t&&(e.type=t);o<r&&!e.isImmediatePropagationStopped();o++)n[o].removed||n[o].handler.call(this,e)}},N=p?function(e,t,n){e[n?l:c](t,_,!1)}:function(e,t,n,r){var o;n?(k.put(o=new x(e,r||t,function(t){_.call(e,t,r)},_,null,null,(!0))),r&&null==e["_on"+r]&&(e["_on"+r]=0),o.target.attachEvent("on"+o.eventType,o.handler)):(o=k.get(e,r||t,_,!0)[0],o&&(o.target.detachEvent("on"+o.eventType,o.handler),k.del(o)))},S=function(e,t,n,r,o){return function(){r.apply(this,arguments),e(t,n,o)}},I=function(e,t,n,r){var o,i,l=t&&t.replace(a,""),c=k.get(e,l,null,!1),u={};for(o=0,i=c.length;o<i;o++)n&&c[o].original!==n||!c[o].inNamespaces(r)||(k.del(c[o]),!u[c[o].eventType]&&c[o][f]&&(u[c[o].eventType]={t:c[o].eventType,c:c[o].type}));for(o in u)k.has(e,u[o].t,null,!1)||N(e,u[o].t,!1,u[o].c)},X=function(e,t){var r=function(t,r){for(var o,i=m(e)?n(e,r):e;t&&t!==r;t=t.parentNode)for(o=i.length;o--;)if(i[o]===t)return t},o=function(e){var n=r(e.target,this);n&&t.apply(n,arguments)};return o.__beanDel={ft:r,selector:e},o},Y=p?function(e,t,n){var o=u.createEvent(e?"HTMLEvents":"UIEvents");o[e?"initEvent":"initUIEvent"](t,!0,!0,r,1),n.dispatchEvent(o)}:function(e,t,n){n=D(n,e),e?n.fireEvent("on"+t,u.createEventObject()):n["_on"+t]++},C=function(e,t,n){var r,o,l,c,u=m(t);if(u&&t.indexOf(" ")>0){for(t=g(t),c=t.length;c--;)C(e,t[c],n);return e}if(o=u&&t.replace(a,""),o&&w[o]&&(o=w[o].base),!t||u)(l=u&&t.replace(i,""))&&(l=g(l,".")),I(e,o,n,l);else if(v(t))I(e,null,t);else for(r in t)t.hasOwnProperty(r)&&C(e,r,t[r]);return e},L=function(e,t,r,o){var l,c,u,s,p,m,y;{if(void 0!==r||"object"!=typeof t){for(v(r)?(p=d.call(arguments,3),o=l=r):(l=o,p=d.call(arguments,4),o=X(r,l,n)),u=g(t),this===h&&(o=S(C,e,t,o,l)),s=u.length;s--;)y=k.put(m=new x(e,u[s].replace(a,""),o,l,g(u[s].replace(i,""),"."),p,(!1))),m[f]&&y&&N(e,m.eventType,!0,m.customType);return e}for(c in t)t.hasOwnProperty(c)&&L.call(this,e,c,t[c])}},M=function(e,t,n,r){return L.apply(null,m(n)?[e,n,t,r].concat(arguments.length>3?d.call(arguments,5):[]):d.call(arguments))},O=function(){return L.apply(h,arguments)},$=function(e,t,n){var r,o,l,c,u,s=g(t);for(r=s.length;r--;)if(t=s[r].replace(a,""),(c=s[r].replace(i,""))&&(c=g(c,".")),c||n||!e[f])for(u=k.get(e,t,null,!1),n=[!1].concat(n),o=0,l=u.length;o<l;o++)u[o].inNamespaces(c)&&u[o].handler.apply(e,n);else Y(E[t],t,e);return e},A=function(e,t,n){for(var r,o,i=k.get(t,n,null,!1),a=i.length,l=0;l<a;l++)i[l].original&&(r=[e,i[l].type],(o=i[l].handler.__beanDel)&&r.push(o.selector),r.push(i[l].original),L.apply(null,r));return e},K={on:L,add:M,one:O,off:C,remove:C,clone:A,fire:$,Event:T,setSelectorEngine:P,noConflict:function(){return t[e]=o,this}};if(r.attachEvent){var B=function(){var e,t=k.entries();for(e in t)t[e].type&&"unload"!==t[e].type&&C(t[e].element,t[e].type);r.detachEvent("onunload",B),r.CollectGarbage&&r.CollectGarbage()};r.attachEvent("onunload",B)}return P(),K});