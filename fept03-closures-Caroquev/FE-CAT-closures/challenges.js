/*------------------
1)
Crea una funció anomenada "counter" sense
cap paràmetre.

Crea una variable anomenada "y" i crea una
closure que incrementi "y" per 1 i després
retorni "y".

Test cases:
const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2
------------------*/

/*function counter(){
  let y = 0;
  return function (){
     return ++y
  }
}
const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2

/*------------------
2)
Crea una funció anomenada "startingCounter" que
rebi un número (x) com a paràmetre.

Guarda "x" a una variable anomenada "count" i
retorna una closure que incrementi "count" per 1
abans de retornar "count".*/

/*function startingCounter (x){
  let count = x;
 return function(){
  return ++count;
 }
}

/*const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); //11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); //5

/*Test cases:
const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5
------------------*/

/*------------------
3)
Crea una funció anomenada "countdown".
La funció rep un número (x) com a paràmetre.
Guarda "x" a una variable anomenada "count".

Retorna una closure que redueixi "count" per 1
i després retorna o bé "count" (si "count" és
més gran o igual a 1) o bé "Time's Up!" (si 
"count" és igual o inferior a zero).
*/
/*function countdown(x){
let count =x;
return function(){
  count--;
  if(count >=1){return count;}else{
    return "Time's up!"}
  }
}

const counterFive = countdown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"


/*------------------
4)
Crea una funció anomenada "multiplier" que
rebi un número (x).

La funció "multiplier" ha de retornar una closure
que rebi un altre número (y) per paràmetre. Aquesta
closure hauria de retorna el resultat de x * y.
*/

/*function multiplier (x){
  return function (y){
    return x*y;
  };

}
//Test cases:
const multiplyByFive = multiplier(5);
const multiplyByTen = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40*/

/*------------------
5)
Crea una funció anomenada "createPassword" que
rebi un string (x).

La funció "createPassword" ha de retornar una closure
que rebi un altre string (y) com a paràmetre. Si "x"
és igual a "y" la closure ha de retornar "Password correct".
Si no, la closure ha de retornar "Password incorrect".
------------------*/
function createPassword(x){
  return function (y){
    if(x==y){
      return "Password correct"
    } else{
      return "Password incorrect"
    }
  }
}


//Test cases:
const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.


/*------------------
6)
Crea una funció anomenada "createBankAccount" que rebi
un número (x). Aquest número "x" s'ha d'emmagatzemar a
una variable anomenada "balance".

La funció "createBankAccount" ha de retornar una closure
amb dos paràmetres - un número (y) i un string (anomena'l
"action").

Si "action" és igual a "add", s'ha de sumar "y" a "balance".
Si "action" és igual a "subtract", s'ha de resta "y" de "balance".

La closure ha de retornar "balance".
------------------*/
function createBankAccount(x){
  let balance=x;
  return function (y,action){
    if (action=="add"){
      return balance+=y;}
      else if(action=="subtract"){
        return balance-=y;
      } 
        return balance
      }
    }

//Test cases:
const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90*/

/*------------------
7)
La següent funció fa servir les funcions que has
creat anteriorment per fer un compte bancari segur.
Modifica les condicions dins de l'if statement per
què avalui "true".
Després, fes servir la funció "bankAccount" per fer
que els diners siguin sumats o restats al compte.

La closure ha de retornar el "balance" del compte bancari.

Repassa les funcions que has creat anteriorment per
assegurar-te de què comprens com funcionen.
------------------*/

function createBank(password, startingBalance) {
  const checkPassword = createPassword(password);
  const bankAccount = createBankAccount(startingBalance);

  return function (password, amount, action) {
    let access = checkPassword(password);
    //let balance = bankAccount(startingBalance);
  
    if (access === "Password correct") {
        return bankAccount(amount, action);
      }else {
        return access;
      }
    };
  }

      
    

 const sofiaBank = createBank("Cod3ly!", 100);
 console.log(sofiaBank("Cod3ly!", 150, "add")); //250
 console.log(sofiaBank("Codely123", 150, "add")); //Password incorrect
 console.log(sofiaBank("Cod3ly!", 50, "subtract")); //200*/