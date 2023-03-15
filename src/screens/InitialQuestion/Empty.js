const fruits = ['apple', 'banana', 'orange', 'apple', 'banana']


// fruits.pop(3)
  

// console.log(fruits)


fruits.filter('apple',3)
console.log(fruits)


const numbers = [10, 20, 30, 40]

let sum=0
numbers.forEach(each=>{
    sum+=each
})
// for (let i=numbers i++)

console.log(sum)










let result= 0; 
for(let i=0 , i< numbers.length-1, i++){
    result+= numbers[i]
}