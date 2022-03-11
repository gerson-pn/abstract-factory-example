import TipoB from "../interfaces/tipoB";

export default class ObjetoB1 implements TipoB {
    public atributo1: string
    public atributo2: string
    dadoTipoB(): string {
        return `Sou um B1, ${this.atributo1}, ${this.atributo2}`
    }
}