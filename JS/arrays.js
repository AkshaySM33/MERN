// Diff ways to create arrays
// 1. str.Split()
// 2. Array()
// 3. []

// Different ways to access Array
// [0]
// [2]

// Different ways to Add Elements to Array
// Push()
// UnShift
// Fill
// x[2]='asb'

// Different ways to Remove Elements to Array
// Pop()
// shift
// Splice

let age_groups=[18,15,20,21,22,30,50,40,35]
console.log(`The output after pop function is ${age_groups.pop()}`) //remove one array at end
console.log(`The output after shift function is ${age_groups.shift()}`) // remove one array at first element
console.log(`The output after Splice function is ${age_groups.splice(0,1)}`) // remove first given index to last given index
console.log(`The output after Splice function is ${age_groups.splice(1)}`) // remove all the element ad keep first element only and remove after that remaining elements
console.log(`The output after Splice function is ${age_groups.splice(0,0,  1,2,3)}`) //remove nothing but add 1 2 3
console.log(`The output after Splice function is ${age_groups.splice(1,3,  445,65,676,67,43)}`) //remove first and seond element and after third element will insert 445,65,676,67,43
console.log(`The output after Splice function is ${age_groups.splice(0,3,  56,68,87,11,54)}`) //it wont remove bit after third index will insert 56,68,87,11,54

//Reverse the array.
console.log(`Before reverse the array will be ${age_groups}`)
let abc=age_groups.reverse
console.log(`after reverse the array will be ${age_groups}`)

//Convert array to string
console.log(`After Converting array to string ${age_groups.join()}`)
console.log(`After Converting array to string ${age_groups.join('')}`)

//Palindrom - Checking reverse the string and output should be same after reverse.
let data = 'ABBA'
let rev_data = data.split('').reverse.join('')
console.log(`after reverse string checking data is palindrom ${rev_data}`)
console.log(`after reverse string checking data is palindrom ${data,rev_data}`)
console.log(`after reverse string checking data is palindrom ${data==rev_data}`)


//Sorting the array
console.log(age_groups)
console.log(age_groups.sort())
console.log(age_groups)

