// function <function_name>(){  }
//function is a reusable block of code to perform some task.
function print(){
    console.log(`Hellow World!`)
}

print()

function greet(name){
    console.log(`Greetings ${name}`)
}
greet('Akshay')
greet('Sachin')


function square(a){
    let x = a
    let sqr=x**2
    return sqr
}

let out= square(3)
console.log(out)

// use function and pass 3 number as argument and display greatest number
let gretest=0
function GreatestNumber(a,b,c){
    if (a>gretest) {
        gretest = a
    }
    if (b>gretest) {
        gretest = b
    }
    if (c>gretest) {
        gretest = c
    }

    return gretest
}

let otput= GreatestNumber(3,84,56)
console.log(`Greatest Number is ${otput}`)
