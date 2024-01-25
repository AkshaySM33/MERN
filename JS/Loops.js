// FOR
// Classical
// for of
// for in

// While
// Regular
// Do While

//for Classical
// for(initiallization; Condition; increment/decrement ){
//     console.log('Hello')
// }

for(let i=0; i<3; i++){
    console.log(`Hello ${i}`)
}

for(let i=0; i<10; i++){
    console.log(`Hello ${i}`)
    if(i==3){
        continue //skip current 3rd loop
    }
    console.log(`     Mr.`) 
}

for(let i=0; i<10; i++){
    console.log(`Hello ${i}`)
    if(i==3){
        break //break after 3rd loop
    }
}

let contries=['AUS', 'ENG', 'PAK']
for(let contry of contries){
    console.log(`${contry} is my contry`) // this display the array one by one as we used for in for loop
}
for(let contry in contries){
    console.log(`${contry} is my contry`) // this display the index of array as we used in in for loop
}


// find the largest number without sort method
let x=[1,3453,655,24,7,8]
let y=0

for (z of x){
    if (z>y) {
        y=z
    }
}
console.log(`Greatest value of ${x} is ${y}`);


//While loop
// while(<condition>)

let counter = 5

while(counter){
    console.log(`Download completes in ${counter}`)
    counter--
}


//do while loop
do{
    console.log(`Download completes in ${counter}`)
    counter--

    if(counter==3)
    {
        break
    }

}while(true)



