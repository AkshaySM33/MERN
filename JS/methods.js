let data=`  In addition to the commercial paper, Tata Consumer aims to raise an additional Rs 3,000 crore through a rights issue. This will involve issuing equity shares to existing shareholders. The specifics regarding the issue price, entitlement ratio, record date, and payment terms will be disclosed at a later date  .    `

console.log(`This is example of template tag (lenght of string in data variable is: ${data.length} chars)\n`)

console.log(`Converting all string to UPPER case:\n ${data.toUpperCase()}\n`)
console.log(`Converting all string to lower case:\n ${data.toLowerCase()}\n`)

console.log(`This is example of substr()${data.substr(3,9)}\n`) //start index, total number of index
console.log(`This is example of substring() ${data.substring(3,11)}\n`)// start index, ending index(exclude last index)

console.log(`This is example of split:\n`,data.split(' '),'\n') // split with the space and convert to array.(it wont work in tmplate)
console.log(`This is example of trim ${data.trim()}`,'\n') // trim empty space only at the start and enf of the string

console.log(`This is example of includes()\nchecking if addition word is pesent ${data.includes('addition')}\n`) //it will return true or false if string is present or not.

console.log(`This is example of indexOf()\nChecking addition word index: ${data.indexOf('addition')}\n`) //it will return the index of string and if string not found -1 will be returned.

console.log(`This is example of lastIndexOf()\nchecking last word index ${data.lastIndexOf('.')}\n`) // will give last word index.

console.log(`This is example of replace() replacing addition word to more: ${data.replace('addition','more')}\n`) //it will replace the given word in string wherever it present.

console.log(`This is example of charAt() checking charecter at given Index: ${data.charAt(2)}\n`) //it will return the char at given index number.

console.log(`This is example of slice() cut the slice of string and displaying: ${data.slice(2,4)}\n`) //it cut the slice of string and display in console.

console.log(`This is example of repeat() display the values given times: ${data.repeat(2)}\n`) //it will display the string twice.

console.log(`This is example of startWith() will return true or false if given string is present at start: ${data.startsWith(' ')}\n`) //it will return true as searching space. and its start with space.

console.log(`This is example of endsWith() will return true or false if given string is present at end: ${data.endsWith('.')}\n`) //it will return false as searching dot. and its start with space.

let arr=['USN_001','USN_003','USN_004','USN_002']
console.log(`This is example of sort() \n${arr.sort()}\n`)

let abc='02'
console.log(`This is example of padStart() and it will give padding with given number\n${abc.padStart(5,0)}\n`) // it will give 3 additional 0 and make it tota 5 

console.log(`This is example of search() it is same as indexof. if no word found will give -1 else index number. ${data.search('addition')}\n`)

console.log(`This is example of match() used to match pattern and display if it present:\n ${data.match('to')}\n`)
console.log(`This is example of match() used to match pattern. and display sting as many time it present:\n ${data.match(/is/gi)}`)


