import tipoA from "../interfaces/tipoA"
import tipoB from "../interfaces/tipoB"
import ObjetoA2 from "../modelos/objetoA2"
import ObjetoB2 from "../modelos/objetoB2"
import FabricaAbstrata from "./fabricaAbstrata"

export default class Fabrica2 implements FabricaAbstrata {
    criarTipoA(): tipoA {
        let objA2 = new ObjetoA2()
        objA2.atributo1 = "valor a2"
        objA2.atributo2 = "valor a2"
        return objA2
    }
    criarTipoB(): tipoB {
        let objB2 = new ObjetoB2()
        objB2.atributo1 = "valor b2"
        objB2.atributo2 = "valor b2"
        return objB2
    }

}