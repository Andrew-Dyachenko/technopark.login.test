
	/*!BANNERSTART                                                                 
	|==============================================================================
	| Информация о дистрибутиве : technopark.login.test                                  
	|==============================================================================
	|                                                                              
	| Версия:         1.0.0                                           
	| Лицензия:       ISC                                           
	| Описание:       Выполненное тестовое задания от компании Технопарк                                       
	| Файл изменен:   Tue Jun 18 2019 17:07:10 GMT+0300 (MSK)                                                 
	|                                                                              
	|------------------------------------------------------------------------------
	|                                                                              
	| Автор:    Андрей Дьяченко (HTML / Front-end разработчик)                                             
	| Локация:  Россия, Москва                                         
	| Phone:    +7 (915) 251-96-66                                            
	| Email:    north.inhale@gmail.com                                            
	| Telegram: +7 (915) 251-96-66                                         
	| Skype:    tux_will                                            
	|                                                                              
	|==============================================================================
	BANNEREND*/

/*jshint esversion: 6*/
class Auth {
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
                } else {
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

class ScrollWidth {
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
        window.onresize = function() {
            sw.set();
        };
    }
    destroyWatcher() {
        window.removeEventListener('resize', this.watcher);
    }
}

if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
        var node = this;

        while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
        }
        return null;
    };
}

document.addEventListener('DOMContentLoaded', () => {
    new Auth({
        login: document.getElementById('login-email'),
        password: document.getElementById('login-password'),
        remember: document.getElementById('login-remember'),
        submit: document.getElementById('login-submit'),
        modal: document.getElementById('modal'),
        errorClass: 'authorization__form-group--error',
        successClass: 'authorization__form-group--success',
        formGroupClass: '.authorization__form-group',
        closeBtn: document.getElementsByClassName('modal__close')[0]
    });

    new ScrollWidth();
});

//# sourceMappingURL=bundle.js.map