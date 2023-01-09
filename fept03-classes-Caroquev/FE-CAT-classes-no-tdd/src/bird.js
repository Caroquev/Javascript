const Animal = require('./animal');

class Bird extends Animal{
    constructor(name) {
       super(name);
       this.canFly = false;
       this.weight = 0;
       this.legs = 2;
       this.sound ="pio pio"
       happyness=0;
    }
   feed(){
      this.weight +=40;
      return this.weight;
   }

   fly(){
      this.weight <= 100? this.canFly = true : this.canFly = false;
      return this.canFly;
   }

    getOlder(){
        this.age+=1;
         return this.age; }
    singingTime(){
       this.happyness+=10;
       return Bird.happyness;
    }
    }
 const robin=new Bird();
 console.log(robin.age);
 console.log(feed());
 console.log(fly());
 