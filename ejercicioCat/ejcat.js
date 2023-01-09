
class Cat{
    
    constructor(){
        this.mood="peaceful";
        this.hungry=0;
        this.energy=100;
    
    
        if( this.energy>=110){
            alert("let's play");
        } else if( this.energy <=30){
            alert("I'am tired, let's sleep");
            } else if (this.hungry>=60){
            alert("I'am hungry, let's eat");
            }     
               
        }
    
    
     meow(){
       this.sound = "meow meow";
       console.log (this.sound);
       return (this.sound);
     }

     sleep(){
        this.energy +=20;
        this.hungry +=10;
        alert("shhh, sleeping");
        alert("Energy: " + this.energy);
        alert("Hungry: "+ this.hungry);
         
        return (this.energy + this.hungry);
    }

     play(){
        this.mood="happy";
        this.energy -=30;
        this.meow();
        
        alert("play is fun!");
        alert (" Mood is: " + this.mood + ", Energy is: " + this.energy);
        return(this.mood, this.energy);
     }

     feed(){
        this.hungry -=20;
        this.mood="tense";
        this.meow();
        alert("I'am eating");
        alert(" Hungry: "+ this.hungry + ", Mood: "+ this.mood);

        return (this.hungry,this.mood);
     }
}

const Spot = new Cat ("Spot");

//Spot.sleep()
//Spot.feed()
//Spot.play()

    