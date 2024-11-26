var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        console.log("Som do animal");
    };
    Animal.prototype.mover = function (distância) {
        console.log("".concat(this.nome, " mouveu-se ").concat(distância, " metros."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log('au au au au au au au');
    };
    Cachorro.prototype.pegar = function (objeto) {
        console.log("".concat(this.nome, " pegou ").concat(objeto));
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome) {
        return _super.call(this, nome) || this;
    }
    Gato.prototype.emitirSom = function () {
        console.log("MIAU SEU MERDA");
    };
    return Gato;
}(Animal));
var animal = new Animal('Ornitorrinco');
animal.emitirSom();
animal.mover(10);
var doggg = new Cachorro('doggy');
doggg.emitirSom();
doggg.mover(0.666666666666667);
doggg.pegar("leite");
var animais = [new Animal("porra"), new Cachorro("filho da puta"), new Gato("paçoquinha")];
animais.forEach(function (animal) {
    console.log(animal.nome);
    animal.emitirSom();
});
