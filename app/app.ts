import Fabrica1 from "../fabricas/fabrica1";
import ObjetoA1 from "../modelos/objetoA1";


let fabrica = new Fabrica1()
let objetoA = fabrica.criarTipoA()
let objetoB = fabrica.criarTipoB()

console.log(objetoA.dadosTipoA())
console.log(objetoB.dadoTipoB())