'use strict';

import Auth from './authorization';
import ScrollWidth from './scroll-width';

if (!Element.prototype.closest) {

	// реализуем
	Element.prototype.closest = function (css) {
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
