"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hola";
        this.users = [
            { id: 25, name: 'Chris', username: 'Sevilleja' },
            { id: 26, name: 'David', username: 'Canovas' },
            { id: 25, name: 'Dan', username: 'Vehouven' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<header>\n\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular2 App</a>\n\t\t\t</div>\n\t\t</nav>\n  \t</header>\n  \t<main>\n  \t\t<div class=\"row\">\n\t  \t\t<div class=\"col-sm-4\">\n\t\t\t    <div *ngIf=\"users\">\n\t\t\t\t\t<ul class=\"list-group users-list\">\n\t\t\t\t\t\t<li class=\"list-group-item\"  *ngFor=\"let user of users\">\n\t\t\t\t\t\t\t{{user.name}} {{user.username}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<div class=\"jumbotron\">\n\t\t\t      <h1>Welcome to Our App2!</h1>\n\t\t\t      <p>{{message}}</p>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</main>\n\t<footer class=\"text-center\">\n\t\tCopyright &copy; 2106\n\t</footer>    \n  ",
            styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
function selectUser(user) {
    console.log(user);
    this.activeUser = user;
}
//# sourceMappingURL=app.component.js.map