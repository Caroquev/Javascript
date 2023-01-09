/* ----------------------

1. Actualitza la propietat "sound" a "meow".
2. Crea una propietat addicional (la que vulguis).
3. Actualitza el mètode "getOlder" per què s'actualitzi
   en anys felins cada cop que l'invoquem.
   Els anys dels felins són una mica complexos:
   els gats tenen 15 anys quan "age" és 1,
   24 anys quan "age" és 2, i a partir de llavors
   augmenta per 4 cada any subsegüent.
4. Crea un mètode addicional (el que vulguis).

---------------------- */
class Cat extends Animal{
   constructor(name) {
      super(name);
      this.sound ="meow meow";
      happyness= 0;
   }
   getOlder(){
      if (this.age ===1){
         this.age=15;}
         else if(this.age===2){
         this.age = 24;
         }else{
         this.age = ((this.age -2)*4) + 24;
         };
      }

         playTime(){
      this.happyness+=10;
      return this.happyness;
         }

   breed (){
      this.persa=1;
      this.bengala = 1;
      this.maineCoon = 1;
   }

   beCute (){
      console.log ("The cute's animal around the world.")
   }

   getCuddles (){
      this.happines +=20
   }
}

const felix = new Cat ("Felix");
console.log(felix.sound);
console.log(felix.whiskers);
console.log(felix.getOlder());
console.log(felix.beCute());
console.log(felix.getCuddles();)

//const Animal = require('./animal');

//class Cat {}

//module.exports = Cat;




