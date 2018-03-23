'use strict';

export default class User {
    constructor(options) {
        this.login = options.login;
        this.password = options.password;
        this.remember = options.remember;
        this.submit = options.submit;
    }
    
}