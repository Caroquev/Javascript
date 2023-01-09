/*
1)
Crea una funció anomenada "triple" que rebi
un paràmetre, "x", i que retorni el valor
de "x" multiplicat per tres.
*/

/*function triple (x){
  return x*3;
}

console.log(triple(10));
/*
2)
Crea una funció anomenada "subtract" que
rebi dos paràmetres i que retorni el resultat
de la resta del primer menys el segon.
*/
// OPCION FUNCTION CLASICA
/*function subtract(x,y){
  return x-y;
}

// OPCION ARROW FUNCTION

/*let subtract =(x,y) => x-y;

//OPCION ANONYMOUS FUNCTION
/*let subtract= function (sub1,sub2){
  total= sub1-sub2
  return total
} 

console.log(subtract(5, 2)); // 3
console.log(subtract(1, 3)); // -2 */



/*
3)
Crea una funció anomenada "createArray" que
rebi tres arguments i retorni tots tres
arguments dins un array.

Test case:
console.log(createArray(3, "a", true)); // [3, "a", true]
*/
//OPCION ARROW FUNCTION
/*function createArray(x,y,z){
  return [x,y,z]
}
console.log(3,"a",true)
/*
4)
Crea una funció anomenada "greetPerson" que rebi
un string com a argument i retorni aquest mateix
string dins una frase de salutació.
Si la funció rep un argument que no és un string,
la funció ha de retornar "Please provide a name."*/

/*function greetPerson(x){
  return typeof x === 'string' ? 'Hello, ' + x : "Please provide a name."
}


//Test cases:
console.log(greetPerson("Sofia")); // "Hello, Sofia!"
console.log(greetPerson(42)); // "Please provide a name."


/*
5)
Crea una funció anomenada "addTogether" que rebi un array
de números com a argument i que retorni la suma de tots
els números.
*/
//Test case:
/*console.log(addTogether([1, 2, 3, 4, 5])); // 15

function addTogether(x){
  let result=0;
  for ( let i=0; i < x.length; i++){
    result = result + x[i];
  }
  return result;
}
/*
6)
Crea una funció anomenada "getIndex". Ha de rebre dos
arguments: un array i un valor. La funció ha de retornar
l'índex en què es troba el valor donat. Si el valor no
es troba a l'array, ha de retornar -1.

NO facis servir el mètode d'arrays indexOf a la teva resposta.
Pista: crea un loop!

Test cases:*/
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1

function getIndex(array,value){
  let index=0;
  for(let i=0; i< array.length; i++){
    if(array[i]==value){
      index=i;
      break;
    } else {
      index=-1;
    }
  }
  return index;
}
/*
7)
Crea una funció anomenada "includesValue". Ha de retornar
un boolean si "x" (un valor) es troba a "arr" (un array).

Per fer aquest exercici fes servir la funció "getIndex"
que has creat a la pregunta anterior. Crida la funció
"getIndex" des de dins de la funció "includesValue".

Test cases:*/
/*function includesValue(arr,x){
  if(getIndex(arr,x) != -1){
    return true;
  } else {
    return false;
  };
  }


console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false


/*
8) Nested Objects
Crea una funció anomenada "createObject" que rebi un array
com a argument. Ha de retornar un objecte que classifiqui
els valors de l'array per data type.
Fes servir la variable "result" que et proporcionem a
continuació per construir l'objecte a retornar.*/

/*let result = {
  numbers: [],
  booleans: [],
  strings: []
}
function createObject(array){
  for(let value in array){
    if(typeof array[value]== "number"){
      result.numbers.push(array[value]);
    } else if (typeof array[value]== "boolean"){
      result.booleans.push(array[value]);
    } else if (typeof array[value]== "string"){
      result.strings.push(array[value]);
    }
  }
  return result;
}
//Test case:
console.log(createObject([3, "a", true, false, 2, true])); // { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }


/*
9)
Crea una funció anomenada "removeSpaces" que elimini tots
els espais d'un string.

Test case:*/
/*function removeSpaces(string){
 let stringRemoved="";
 for(let character of string){
  if ( character == " "){
    stringRemoved += "";
  } else {
    stringRemoved += character;
  }
 }
 return stringRemoved;
}
console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"


/*
10)
Crea una funció anomenada "titleCase" que rebi un string
com a argument. La funció ha de retornar el string però
amb la primera lletra de cada paraula en majúscula.
No cal que et preocupis de la primera lletra de la frase -
pots assumir que ja és majúscula.

Pista: l'índex de cada lletra que hem de passar a majúscula
és 1 valor més gran que l'índex dels espais del teu string.

Test case:*/
/*function titleCase(string){
  let stringCapitalized = "";
  for(let i=0; i<string.length; i++){
    if (string[i]== " "){
      stringCapitalized += " "+string[i+1].toUpperCase();
      i++;
    } else {
      stringCapitalized +=  string[i];
    }
  }
  return stringCapitalized;
}
console.log(titleCase("He went to the store.")); // "He Went To The Store"


//EJERCICIO QUE NOS PIDIO EN LA CLASE--NO ES DE ESTE TRABAJO
/*function parOimpar(){
  for (i=0;i<=50;i++){
    if(i%2===0){ console.log  (`${i}es par`)}
    else { console.log (`${i} es impar`)};
  }
   return parOimpar
}
parOimpar()*/