import { Veiculo } from "./q14t";
import { Bicicleta } from "./q14t2";
import { Carro } from "./q14t3";

let veiculos : Veiculo[] = [new Bicicleta(), new Carro()]

veiculos.forEach(veiculo => {
    veiculo.mover();
})