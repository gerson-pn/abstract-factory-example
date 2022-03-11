import tipoA from "../interfaces/tipoA";
import tipoB from "../interfaces/tipoB";
import ObjetoA1 from "../modelos/objetoA1";
import ObjetoB1 from "../modelos/objetoB1";
import FabricaAbstrata from "./fabricaAbstrata";

export default class Fabrica1 implements FabricaAbstrata {
    criarTipoA(): tipoA {
        let objA1 = new ObjetoA1()
        objA1.atributo1 = "valor a1"
        objA1.atributo2 = "valor a1"
        return objA1
    }
    criarTipoB(): tipoB {
        let objB1 = new ObjetoB1()
        objB1.atributo1 = "valor b1"
        objB1.atributo2 = "valor b1"
        return objB1
    }

}