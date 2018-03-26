'use strict';

export default class ScrollWidth {
    constructor() {
        this.html = document.getElementsByTagName('html')[0];
        this.set();
        this.watcher();
    }
    set() {
        this.html.style.setProperty('--scroll-width', this.swidth() + 'px');
    }
    swidth() {
        return window.innerWidth - this.html.clientWidth;
    }
    watcher() {
        var sw = this;
        window.onresize = function () {
            sw.set();
        };
    }
    destroyWatcher() {
        window.removeEventListener('resize', this.watcher);
    }
}