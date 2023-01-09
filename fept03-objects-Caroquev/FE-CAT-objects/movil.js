class movil{
    constructor(){
        this.energy=100;
        this.color="black";
        this.marca="Humidigi";
        this.estado="Off";

    //if (this.estado="Off"){
     //   alert("Tienes que encender el movil");
     //   } else if () 
    //        alert ()
     //   }

        
        if (this.energy<2){
            alert("Estoy sin bateria. Me apagaré");
        } else if (this.energy<=20){
            alert("Atención, carga baja, cargar móvil");
            off();
        };
            
        }

        
    

on(){
    this.energy -=20;
    alert("Hola, estoy encendiendo");
    console.log(this.energy);
    return(this.energy);
}

off(){
    alert("me estoy apagando");
}

charge(){
    this.energy +=100;
    alert(`la bateria se ha cargado, su nivel de enrgía es ahora de ${this.energy}`);
    console.log(this.energy);
}

vibrate(){
    this.energy -=15;
    alert("(((estoy bibrabdo)))");
    console.log(this.energy);
    return(this.energy);
}

sound(){
    this.energy -=10;
    alert("riiing  riing");
    console.log(this.energy);
    return (this.energy);
}

}

const movilCaro=new movil();
 console.log(movilCaro.energy)
