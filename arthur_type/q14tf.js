"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q14t2_1 = require("./q14t2");
var q14t3_1 = require("./q14t3");
var veiculos = [new q14t2_1.Bicicleta(), new q14t3_1.Carro()];
veiculos.forEach(function (veiculo) {
    veiculo.mover();
});
