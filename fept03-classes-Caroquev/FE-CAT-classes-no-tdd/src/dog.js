/* ----------------------

1. Actualitza la propietat "sound" a "woof" i la
   propietat "legs" a 4.
2. Afegeix una nova propietat anomenada "sticks" i
   posa-la a 0.
3. Afegeix una propietat anomenada "breed".
4. Actualitza el mètode "getOlder" de forma que
   augmenti "age" en anys canins (7) en comptes d'1.
5. Afegeix un mètode nou anomenat "fetch" que
   incrementa la propietat "sticks" per 1 i que
   retorna el número d'"sticks".

---------------------- */

const Animal = require('./animal');

class Dog extends Animal {
  constructor(name) {
   super(name);
   this.sound = "woof woof";
   this.legs = 4;
   this.sticks = 0;
   this.breed="";
   this.age = 0
  }
getOlder(){
   this.age+=7;
   return this.age;
}

fetch(){
   this.sticks+=1;
   return this.sticks;
}
}
const beagle=new Dog();
console.log(beagle.sound);
console.log(beagle.getOlder());
console.log(beagle.sticks);

module.exports = Dog;
