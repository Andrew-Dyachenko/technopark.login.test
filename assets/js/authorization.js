'use strict';

export default class Auth {
    constructor(options) {
        this.login = options.login;
        this.password = options.password;
        this.remember = options.remember;
        this.submit = options.submit;
        this.closeBtn = options.closeBtn;
        this.modal = options.modal;
        this.errorClass = options.errorClass;
        this.successClass = options.successClass;
        this.formGroupClass = options.formGroupClass;
        this.chElements = this.getChElements([this.login, this.password, this.remember]);
        this.validate();
        this.watcher();
    }
    watcher() {
        const auth = this;
        this.chElements.forEach((element) => {
            element.addEventListener('change', (event) => {
                if (event.target.validity.valid) {
                    event.target.closest(auth.formGroupClass).classList.remove(auth.errorClass);
                    event.target.closest(auth.formGroupClass).classList.add(auth.successClass);
                    this.validate();
                }
                else {
                    event.target.closest(auth.formGroupClass).classList.remove(auth.successClass);
                    event.target.closest(auth.formGroupClass).classList.add(auth.errorClass);
                }
            });
        });
        this.closeBtn.onclick = (event) => {
            event.stopPropagation();
            auth.close();
        };
    }
    getChElements(elements) {
        return elements.filter(this.required);
    }
    validate() {
        this.submit.disabled = !this.chElements.every(this.check);
    }
    required(element) {
        return element.required;
    }
    check(element) {
        return element.validity.valid;
    }
    close() {
        this.modal.parentNode.removeChild(this.modal);
    }
}