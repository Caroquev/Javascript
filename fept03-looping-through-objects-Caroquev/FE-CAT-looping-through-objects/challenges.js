/*------------------
1)
El següent loop imprimeix les keys de l'objecte "person".
Modifica'l per què n'imprimeixi els valors. 
------------------*/
/*const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true,
};

for (let features in person) {
  console.log(person[features]);
}

/*------------------
2)
Escriu un loop que imprimeixi tots els valors
de "pet": ("Spot", 2, "dog", "brown").
------------------*/

/*const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
};
for (let key in pet){
  console.log(pet[key]);
}
/*------------------
3)
Afegeix un mínim de QUATRE propietats (features)
a l'objecte "car".

Després crea un loop que imprimeixi els valors
de l'objecte "car" a la consola.
------------------*/

/*const car = {
  color:"red", 
  marca:"Fiat",
  age:10,
  fuel:"gasolina",
};
/*for(let features in car){
  console.log(car[features]);
}


/*------------------
4)
Ara imprimirem totes les propietats (features) de 
l'objecte "car" de l'exercici anterior en  UN sol string
en comptes de cadascun per separat.
Fes servir un loop per afegir cada valor a
l'string "carFeatures". 

Bonus #1: afegeix una coma entre cada feature per
què el resultat sembli una frase real.

Bonus #2: assegura't de què cada feature està separada
per una coma però que la frase acabi amb un ".".
Per exemple: 'white, citroen, c1, 2016.'

Pista - Al Bonus #2 hauràs de comprovar si el loop
es troba a l'última key i, si és així, tractar-la
diferent de com ho hem fet al Bonus #1.
------------------*/

/*let carFeatures = "";
for (let value in car){
  if (value == Object.keys(car)[Object.keys(car).length-1]){
    carFeatures += car[value] + ".";
  } else {
    carFeatures += car[value] + ",";
  }
}


console.log(carFeatures);

/*------------------
5)
Crea un loop que afegeixi cada valor de l'objecte "address"
a l'string de "fullAddress".

Hauria d'imprimir: "Carrer de CodeOp, 42, Barcelona, Spain."
Les comes i els punts són bonus, així que també està bé:
"Carrer de CodeOp 42 Barcelona Spain."
------------------*/

/*const address = {
  line1: "Carrer de CodeOp",
  line2: 42,
  city: "Barcelona",
  country: "Spain",
};

let fullAddress = "";

for (let addresses in address){
  fullAddress += address[addresses] + ",";
}

console.log(fullAddress);

/*------------------
6)
Escriu un loop que actualitzi tots els valors de l'objecte "address"
que siguin strings a majúscules.

El resultat hauria de ser: "CARRER DE CODEOP 42 BARCELONA SPAIN".

FES SERVIR UN LOOP, és més senzill fer-ho sense un loop, però
la pràctica et farà millorar!

Pista: fes servir "typeof" per determinar si el valor és un string
i fes servir ".toUpperCase()" per commutar tot un string a majúscules.
------------------*/
/*let fullAddress="";

for (let key in address){
  if(typeof address[key] == "string"){
    fullAddress += ` ${address[key]}`.toUpperCase();
  } else {
    fullAddress += ` ${address[key]}`;
  }
  }

console.log (fullAddress);

/*------------------
7)
Escriu un loop que afegeixi un any a les edats de totes les persones.
Hauria d'imprimir: {
  pedro: 31,
  sofia: 39,
  mia: 41,
  lucy: 28,
}
------------------*/

/*const friendsAges = {
  pedro: 30,
  sofia: 38,
  mia: 40,
  lucy: 27,
};
for (let key in friendsAges){
  friendsAges[key]++;
}
console.log(friendsAges);

/*------------------
8)
Ara farem el mateix però aquest cop hauràs d'accedir
a la key "age" de cada objecte. 

Ja hem començat l'exercici per tu.
Pista: fes servir "typeof" per determinar si una key
és un número. Si ho és, incrementa el seu valor per 1.
------------------*/

/*const groupOfFriends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40,
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27,
  },
};

for (let friend in groupOfFriends) {
  for (let features in groupOfFriends[friend]) {
    if (typeof(groupOfFriends[friend][features]=="number")){
      console.log(groupOfFriends[friend][features]+1);
    } else{
      console.log(groupOfFriends[friend][features]);
    };
  };
}

/*------------------
9)
Quines són les amistats de la feina i quines les de l'escola?
Crea un loop que introdueixi els noms a l'string corresponent.
------------------*/

/*let workFriends = "";
let schoolFriends = "";

for (let friend in groupOfFriends){
  for (let features in groupOfFriends[friend]){
    if(groupOfFriends[friend][features]=="work"){
      workFriends += `${groupOfFriends[friend].name}`;
    } else {
      if (groupOfFriends[friend][features]=="school"){
        schoolFriends += `${groupOfFriends[friend].name}`;
      }
    }
  }
}
console.log(
  `The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`
);

/*------------------
10)
Recorre l'objecte "chores" i afegeix cada tasca de la llar (chore)
a l'string del dia corresponent.
Quan hagis acabat, imprimeix "mondayChores" i "wednesdayChores"
a la consola.

Procura que la frase imprimida sigui el més natural possible.
Per exemple: "Monday's chores are: tidying, vacuuming, bills."
------------------*/

/*let chores = {
  tidying: "Monday",
  vaccuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
};

let mondayChores = "";
let wednesdayChores = "";

let mondayChoresTasks =[];
let wednesdayChoresTasks = [];

for ( let task in chores){
  if (chores[task]==="Monday"){
    mondayChoresTasks.push(task);
  } else if(chores[task]==="Wednesday"){
    wednesdayChoresTasks.push(task);
  }
}
mondayChores= "Monday's chores are: "+ mondayChoresTasks.join(",")+".";
wednesdayChores= "wednesday chores are: "+ wednesdayChoresTasks.join(",")+".";

console.log(mondayChores);
console.log(wednesdayChores);

/*for (let key in chorus){
  console.log(chores[key]);
}*/



