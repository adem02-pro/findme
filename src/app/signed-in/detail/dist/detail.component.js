"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(fb, logService, updateService, router) {
        this.fb = fb;
        this.logService = logService;
        this.updateService = updateService;
        this.router = router;
        this.usrNameValide = true;
        this.formulaire = this.fb.group({
            firstname: ['', forms_1.Validators.required],
            lastname: ['', forms_1.Validators.required],
            age: ['', [forms_1.Validators.required,
                    forms_1.Validators.min(18),
                    forms_1.Validators.max(120)]
            ],
            username: [{ value: '', disabled: true },
                [forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(30)]
            ],
            password: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(8)]
            ],
            reseau: [''],
            reseauInput: [''],
            description: ['', [forms_1.Validators.maxLength(300)]]
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.user = this.logService.connectedUser;
        this.setInfoValues();
        this.reseauxTab = this.updateService.reseauxToTab(this.user);
        console.log(this.reseauxTab);
    };
    DetailComponent.prototype.setInfoValues = function () {
        this.formulaire.patchValue({
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            age: this.user.age,
            username: this.user.username,
            password: this.user.pwd
        });
    };
    DetailComponent.prototype.addReseau = function () {
        var _this = this;
        if (this.reseau.value && this.reseauInput.value) {
            var indexFound = function (element) { return element.value === _this.reseau.value; };
            var i = this.reseauxTab.findIndex(indexFound);
            this.reseauxTab[i].reseau = this.reseauInput.value;
        }
        this.reseauInput.reset();
    };
    DetailComponent.prototype.removeReseau = function (reseau) {
        var indexFound = function (element) { return element.value === reseau.value && element.reseau === reseau.reseau; };
        var i = this.reseauxTab.findIndex(indexFound);
        this.reseauxTab[i].reseau = '';
    };
    DetailComponent.prototype.synchronizeData = function () {
        var user = this.logService.connectedUser;
        var reseaux = user.reseaux;
        user.firstname = this.firstname.value;
        user.lastname = this.lastname.value;
        user.age = this.age.value;
        user.pwd = this.password.value;
        user.description = this.description.value;
        reseaux.facebook = this.fillReseaux(reseaux.facebook.value);
        reseaux.instagram = this.fillReseaux(reseaux.instagram.value);
        reseaux.mail = this.fillReseaux(reseaux.mail.value);
        reseaux.twitter = this.fillReseaux(reseaux.twitter.value);
        reseaux.snapchat = this.fillReseaux(reseaux.snapchat.value);
        reseaux.youtube = this.fillReseaux(reseaux.youtube.value);
    };
    DetailComponent.prototype.fillReseaux = function (reseau) {
        var found = function (element) { return element.value === reseau; };
        return this.reseauxTab.find(found);
    };
    DetailComponent.prototype.updateUser = function () {
        var _this = this;
        this.synchronizeData();
        var user = this.logService.connectedUser;
        this.updateService.updateUser(user)
            .subscribe(function (data) {
            if (data)
                _this.router.navigate([url]);
        });
        var url = '/profil';
    };
    Object.defineProperty(DetailComponent.prototype, "firstname", {
        get: function () { return this.formulaire.get('firstname'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "lastname", {
        get: function () { return this.formulaire.get('lastname'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "age", {
        get: function () { return this.formulaire.get('age'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "username", {
        get: function () { return this.formulaire.get('username'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "password", {
        get: function () { return this.formulaire.get('password'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "reseau", {
        get: function () { return this.formulaire.get('reseau'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "reseauInput", {
        get: function () { return this.formulaire.get('reseauInput'); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetailComponent.prototype, "description", {
        get: function () { return this.formulaire.get('description'); },
        enumerable: false,
        configurable: true
    });
    ;
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css']
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
