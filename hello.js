// console.log('Hello World');

// function add(num){
//     // let input = window.prompt("Enter Any Number To Check Even Or Odd!");
    
//     if(num % 2 == 0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd")
//     }

// }
// console.log(add(2));

// let name = 'ahsan'
// console.log('hello'+" " +name)

// let marks = 7
// let mygrade = (marks < 10)
// console.log(mygrade);

// let some = "some value"

// if (true){
//     var so= 'nothing'
//     let o = 'something'
//     console.log(some)
//     console.log(so)
// }
// console.log(so)
// // console.log(o)  //variable leaking let is recomended in js or if we want global var we can go with var

// if(true){
//     name = 'ahsan'
//     console.log(name)
// }
// console.log(name) // this is with design of js now if we dont declare variable with var or let it will aotomatically declare as global

// const superHeros = ['MohammadAliJinnah','allamaIqbal','Ahsan']
// console.log(superHeros)
// console.log(superHeros[2])

// console.log(`we have ${superHeros.length} super Heros`)

let sayHello = function(name){
    console.log('Hello greetings from my side!')
    console.log(name+ ' here')

}

// sayHello('ahsan')

// let adder = function(a,b){
//     return a+b
// }

// let sum = adder(5,2)
// console.log(sum)


let names = ['Ahsan','Afzal','Amir']

names.forEach(element => {
    console.log(element)
});

for(index = 1 ; index <= 10 ; index++){
    console.log(`Table  of 2 is ${2 * index}`)
}