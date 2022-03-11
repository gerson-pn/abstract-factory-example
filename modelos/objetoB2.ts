import TipoB from "../interfaces/tipoB";

export default class ObjetoB2 implements TipoB{
    public atributo1: string
    public atributo2: string
    dadoTipoB(): string {
        return `Sou um B2, ${this.atributo1}, ${this.atributo2}`
    }
}