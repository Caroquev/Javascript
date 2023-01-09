/*------------------
1)
Crea una funció anomenada "forEach" que rebi
dos paràmetres: un array i una callback function.

La funció "forEach" ha d'aplicar la callback function
a cada element de l'array.

Test case:
forEach(["a", "b", "c"], e => {console.log(e)}); // a b c
------------------*/
//CARACTERISTICA FOREACH:
//Admite dos parametros, uno es un array y el otro es una callback function
//primero tiene que recorrer el array 
//mostrar el valor de cada elemento del array

/*function forEach(arr, cb) {
  for (let i=0; i< arr.length; i++){
    cb(arr[i]);
  };
}

forEach(["a","b","c"], e => {console.log(e)});// a b c

/*------------------
2)
Crea una funció anomenada "map" que rebi
dos paràmetres: un array i una callback function.

La funció "map" ha de retornar un nou array. Cada
element d'aquest nou array ha de ser el resultat
de l'aplicació de la callback function a cada
element de l'array que es rep com a paràmetre.

Test case:
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]
------------------*/
// crear un array vacia
//tenemos que recorrer el array
//aplicarle la funcion del segundo parametro a cada elemento
//añadir los nuevos datos en la nueva array

/*function map(arr, cb) {
  const newArray=[];
  for(let i=0; i<arr.length; i++){
    newArray.push(cb(arr[i]))
  }
return newArray;
}

console.log(map([5,6,7],e => e * 2));//[10,12,14]

/*------------------
3) 
Crea una funció anomenada "filter" que rebi
dos paràmetres: un array i una callback function.

La funció "filter" ha de retornar un nou array
que només inclogui aquells elements que hagin passat
la callback function. És a dir, la callback function
retornarà "true" o "false" per cada element.

Test case:
console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]
------------------*/
/*
crear un array nueva
recorrer el array que pasamos por parametro
determinaremos si es true o false - condicional
añadir la informacion que obtenemos del condicional en la nueva array
cerramos la funcion
*/
/*function filter(arr, cb) {
  const newArray=[];
  for (let i=0; i< arr.length;i++){
    if(cb(arr[i])){
     newArray.push(arr[i])
    }
  }
  return newArray;
}

console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false));
/*------------------
4)
Crea una funció anomenada "every" que rebi
dos paràmetres: un array i una callback function.

La funció "every" s'assembla a "filter" en què
la callback function s'aplica com a verificació.
La diferència, però, és que "every" retorna "true"
si TOTS els elements de l'array passen la verificació.
Si no la passen TOTS, retorna "false".
Prova d'escriure-la!

Test cases:
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false
------------------*/
/*
recorrer el array
verificara si cada elemento cumple la condicion de la cb - condicional
cerrar la funcion
*/
/*function every(arr, cb) {
  for(let i=0;i<arr.length;i++){
    if(!cb(arr[i]))
      return false;
  }
      return true; //siempre sera true
}

console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6));//false
/*------------------
5)
Has escrit "forEach", "map", "filter" i "every"
des de zero. Tot i així, cadascun d'aquests mètodes
ja existeixen al propotype d'Array de JavaScript.

Per a aquesta pregunta, fes servir el mètode "forEach"
natiu per sumar tots els elements de l'array "nums".
Fes servir una fat arrow function. Ja hem començat
el codi de l'exercici per tu.
------------------*/

/*const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
// e es la collback function, hace referncia a cada elemento del array base
nums.forEach((e) => {
  sum+=e// sum = sum + e
  return sum
});

console.log(sum);

/*------------------
6.1)
Fes servir el mètode "map" natiu per transformar
cadascun dels elements de "names" en una salutació.

Test case:
["Sofia", "Pedro", "Mia"] ha de retornar ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
------------------*/
/*
crear nuevo array
recorrer los elementos del array dado
transformar cada elemento del array dado
agregar nuevos elementos a nuevo array
cerrar la funcion
*/
/*const names = ["Sofia", "Pedro", "Mia"]

const greetings = names.map(name=>`Hello,${name}!`);

console.log(greetings);

/*------------------
6.2)
Fes servir el mètode "map" per crear un duplicat
a partir d'un array. Escriu aquest exercici de la
forma més curta que puguis.

Test case:
["JavaScript", "Python", "Go"] ha de retornar ["JavaScript", "Python", "Go"]
------------------*/
//llamamos al array
// aplicamos el metodo indicado
//añadimos la funcion que ejecuta l accion

/*const langs = ["JavaScript", "Python", "Go"];

const duplicate = langs.map(lang=>lang)

console.log(duplicate);

/*------------------
6.3)
Fes servir el mètode "map" per crear un duplicat
d'un array ple de noms.

Test case:
El resultat hauria de ser ["Grace Hopper", "Ruth Bader Ginsburg", "Ada Lovelace"]
------------------*/
/*
llamaremos al array
aplicamos el metodo
la funcion

*/
const people = [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
];

/*const fullnames = people.map(pp=>`${pp.firstname}${pp.lastname}`)

console.log(fullnames);

/*------------------
6.4)
Fes servir el mètode "map" per crear un duplicat d'un array amb objectes.
Cada ojecte del nou array ha de preservar les dades originals i afegir-hi
el "fullname".
Fes servir l'array "people" de l'exercici anterior.

Test case:
El resultat hauria de ser [
  { firstname: "Grace", lastname: "Hopper", fullname: "Grace Hopper" },
  {
    firstname: "Ruth",
    lastname: "Bader Ginsburg",
    fullname: "Ruth Bader Ginsburg",
  },
  { firstname: "Ada", lastname: "Lovelace", fullname: "Ada Lovelace" },
]
------------------*/

/*const fullobjects = people.map(x => `firstname: ${x.firstname}, lastname: ${x.lastname},fullname:${x.firstname}${x.lastname}`)

console.log(fullobjects);

/*------------------
6.5)
Fes servir el mètode "map" per crear un array amb els valors "true"
o "false" segons si el número que ocupa aquella posició és parell.

Test case:
[3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9] ha de retornar
[false, false, true, false, true, false, true, false, true, true, true, false]

------------------*/

/*const numbers = [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9];

const areEven = numbers.map(e => e%2===0? true : false)

console.log(areEven);

/*------------------
6.6)
Fes servir el mètode "map" per crear un array amb els valors "true"
o "false" segons si el número que ocupa aquella posició és igual
a l'índex de la posició dins de l'array (començant per 0).

Test case:
[1,3,2,2,4,13,8,6,8,10,4,12,12] ha de retornar
[false, false, true, false, true, false, false, false, true, false, false, false, true]

------------------*/

/*const moreNumbers = [1, 3, 2, 2, 4, 13, 8, 6, 8, 10, 4, 12, 12];

const areInPosition = moreNumbers.map((e,i)=> e==i);

console.log(areInPosition);

/*------------------
7.1)
Fes servir el mètode "filter" per descartar els números
majors que 50.

Test case:
[1, 34, 83, 65, 3, 24, 98] ha de retornar [1, 34, 3, 24]
------------------*/

const numsList = [1, 34, 83, 65, 3, 24, 98];

/*const smallNums = numsList.filter(e => e< 50);

console.log(smallNums);

/*------------------
7.2)
Fes servir el mètode "filter" per eliminar els números parells.
Fes servir el mateix array "numList" anterior.

Test case:
[1, 34, 83, 65, 3, 24, 98] to [1, 83, 65, 3]
------------------*/

/*const oddList = numsList.filter(e => e%2 !==0);

console.log(oddList);

/*------------------
7.3)
Fes servir el mètode "filter" per conservar aquells números
més grans que l'índex que ocupen a l'array, començant per 0.

Test case:
[1, 0, 1, 3, 5, 6, 6, 1, 9] ha de retornar [1, 5, 6, 9]
------------------*/

const moreNums = [1, 0, 1, 3, 5, 6, 6, 1, 9];

/*const filteredList = moreNums.filter((e,i) => e>i);

console.log(filteredList);

/*------------------
7.4)
Fes servir el mètode "filter" per excloure les persones que no tenen
la lletra "a" en el seu nom (firstname). Fes servir l'array "people"
dels exercicis anteriors.

Test cases:
[
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
]
 ha de retornar
 [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ada", lastname: "Lovelace" },
]
------------------*/

/*const peopleWithA = people.filter(person => person.firstname.includes('a'))

console.log(peopleWithA);

/*------------------
8)
Fes servir el mètode "every" per retornar "true" si cada
paraula del següent array és un palíndrom (és a dir,
es llegeix igual tant des del principi com des del final).

Pots fer servir aquest codi per invertir un string:

.split('').reverse().join('')

Fixa't que el codi que et donem està inserit dins
d'una altra funció. Això ens permet testejar fàcilment
diversos casos :)

Test cases:
["deified", "civic", "radar", "level", "rotor"] retorna true
["kayak", "reviver", "racecar", "reader", "madam"] retorna false
------------------*/

/*const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function checkPalindromes(list) {
  return list.every((word) => {
    return word === word.split('').reverse().join('');
  });
}

console.log(checkPalindromes(wordList1));
console.log(checkPalindromes(wordList2));

/*------------------
9)
Vés a la documentació MDN i a "Eloquent JavaScript" i llegeix sobre
el funcionament del mètode "reduce".
Després, fes servir "reduce" per sumar tots els elements a "numsList".
------------------*/

/*const total = numsList.reduce((a,b) => { return (a+b)});

console.log(total); // ha de retornar 308

// PER A APROFUNDIR

/*------------------
10)
Fes servir el mètode "filter" per crear un array que contingui
només aquells números que són parells i que ocupen una posició
parella a l'array, o aquells números que son senars i que ocupen
una posició senar a l'array, començant per la posició 0.

Test case:
[1, 34, 83, 65, 3, 24, 98] ha de retornar [65,98]
------------------*/


/*let i=0; i<=6; i++;
const oddList = numsList.filter(e => e=(e%2===0 && i%2===0) || (e%2 !== 0 && i%2 !== 0));


console.log(oddList);

/*------------------
10.1)
Cada array dins del següent array representa l'edat de cada jugadora
d'un equip de bàsquet. Descarta aquells equips que tinguin menys de
3 jugadores que siguin més grans de 20 anys.
Pista: pots fer servir una HOF dins de la callback d'una altra HOF.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
ha de retornar [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]
------------------*/
const Teams =[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]]


/*console.log(olderTeams)


/*------------------
10.2) Potser has fet servir la propietat ".length" a l'exercici anterior.
Pots repetir l'exercici sense fes servir ".length"?
Només pots fer servir les HOF, però pots fer servir tantes com en necessitis.
------------------*/

// olderTeams =
let olderTeams = Teams.filter ( (Team)=> {
  return Team.map((player)=>{
    return player>20 ? 1:0}).reduce ((prevVal,curVal)=> {
      return prevVal+curVal }) >=3
  });
console.log(olderTeams);

/*------------------
10.3) Aquest cop, en comptes de retornar els arrays dels equips, calcula
l'edat total de cada equip retornat (suma de les edats de les jugadores).
És a dir, crea un array que contingui les edats acumulades de les jugadores
només d'aquells equips que tinguin més de 2 jugadores que siguin més grans
de 20 anys.
Només pots fer servir les HOF, però pots fer servir tantes com en necessitis.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
ha de tornar [109,106]

------------------*/

olderTeams = 

console.log(olderTeams);
