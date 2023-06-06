const myArr = [1, 2, 3, 4, 5]

console.log('myArr = ', myArr)

const newArray = [...myArr, 6, 7, 8]

console.log('newArray = ', newArray)

const myMap = new Map()
myMap.set('1', { title: 'hi' })
myMap.set('2', { title: 'hello' })

console.log('myMap = ', myMap.values())

const a = [...myMap.values()]
console.log(a)