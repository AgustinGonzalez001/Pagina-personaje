
interface Transporte{
    acelerar():Number
}
interface Movil{
    moverse():String
}

class Auto implements Transporte, Movil{
    constructor(
        //encapsulamiento
        public marca:String,
        private modelo:Number,
        protected falla:boolean
    ){

    }
    acelerar(): Number {
        return 200
    }
    moverse(): String {
        return 'El auto se esta moviendo'
    }
}

let auto = new Auto('Ford',2022,false)
auto.acelerar()

let auto2 = new Auto('Nissan',2012,true)
auto2.moverse()

/* Programacion orientada a objetos.
PARA BUSCAR INFO: 'OOP'
4 pilares:

1-Encapsulamiento:
    public
    private
    protected

2-herncia:
    class
    extends

3-polimorfismo:
    sobreescribir
    sobrecarga

4-abstraccion:
    clases abstractas
    interfaces

 + coherencia y - acoplamiento:
    modulos
*/

