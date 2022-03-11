import TipoA from "../interfaces/tipoA";

export default class ObjetoA1 implements TipoA {
    public atributo1: string
    public atributo2: string

    dadosTipoA(): string[] {
        let dados = ['Sou um A1', this.atributo1, this.atributo2]
        return dados
    }

}