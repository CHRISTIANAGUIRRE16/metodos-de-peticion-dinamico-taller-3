"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const login_component_1 = require("./login/login.component");
const register_component_1 = require("./register/register.component");
const auth_component_1 = require("./auth.component");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent, auth_component_1.AuthComponent],
        imports: [common_1.CommonModule],
        exports: [login_component_1.LoginComponent, register_component_1.RegisterComponent, auth_component_1.AuthComponent],
    })
], AuthModule);
exports.AuthModule = AuthModule;
