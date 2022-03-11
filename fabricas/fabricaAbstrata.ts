import TipoA from "../interfaces/tipoA";
import TipoB from "../interfaces/tipoB";

export default interface FabricaAbstrata {
    criarTipoA(): TipoA
    criarTipoB(): TipoB
}