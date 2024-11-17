let sName: string;
sName = "some name"

let age: number;
age = 21

let isInstructor: boolean;
isInstructor = false

// type inference
// need not declare type a typr is automatically detected

let subjects: string[]
subjects = ["english"]


let person:{
    name:string,
    age:number
}

person = {
    name:"ahmed",
    age:22
}

// union type

let isPerson:string | boolean
isPerson = true

// type aliases

type Person = {
    name:string,
    age:number
}

let personA: Person = {
    name:"happy",
    age:20
}

let personArr: Person[] = [{name:"fugi",age:23}]

// functions and types

function sum(a:number, b:number){  //automatically return type is number
    return a+b
}

function log(value: any){  // type void
    console.log(value)
}

// Generics

function insertAtBeggining(array:any[], value:any){

    return [value, ...array]

}

const updatedArr = insertAtBeggining([1,2,3,4],0)

updatedArr[0].split("") // this doesnt give error since it assumes updatedArr to be type any[] therefore losing features of typescript


// ---------------------------------------------------

function insertAtBeggining2<T>(array:T[], value:T){
    return [value, ...array]
}


const updatedArr2 = insertAtBeggining2([1,2,3,4],0)

// updatedArr2[0].split("") --- this gives error

// generics allow flexibility and type safety

