class persona{
    constructor( id,nombre){
        this.id = id;
        this.nombre = nombre;
    }
} 


// le doy un class con el objeto que valla a describir
class auto {
    constructor(marca,placa,propietario){
        this.marca = marca;
        this.placa = placa;
        this.propietario = propietario;
       
    }
 //arrow function
    encender = () =>{
        console.log( "enciende")
    }
     //function
    apagar (){
        console.log("apaga")
    }

    acelerar (velocida){
        this.velocida = velocida
        console.log("velocidad ${this.velocidad}")
    }
}

//instancias
const objcamilo = new persona( "1061428564","camilo")
const objandres = new persona( "1061428576","andres")

const auto1 = new auto( "audi", "YTR897","Camilo");
console.log( auto1 );

auto1.encender();
auto1.apagar();
auto1.acelerar( 10 );

