'use strict';

import Auth from 'authorization';

document.addEventListener('DOMContentLoaded', () => {
    new Auth({
        login: document.getElementById('login-email'),
        password: document.getElementById('login-password'),
        remember: document.getElementById('login-remember'),
        submit: document.getElementById('login-submit')
    });
});
