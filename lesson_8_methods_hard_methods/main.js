//forEach

// const forEachArr=[1,2,3,4,5]
// forEachArr.forEach((element,index,curArr)=>{
//     console.log({
//         element,
//         index,
//         curArr
//     })
// })
// console.log(forEachArr)



// //map 
// let mapArr=[1,2,3,4,5]
// const newMapArr=mapArr.map((elem,ind,arr)=>{
//     return elem*2

// })
// console.log(newMapArr)


//filter 
// const filterArr=[1,2,3,4,5]
// const newFilterArr=filterArr.filter(()=>{

// })

//reduce
// const reduceArr=[`1,2,3,4,5`]
// const sum=reduceArr.reduce((prev,cunrrent)=>{
//     return prev+cunrrent
// },5)


//find 

// const findArr=[1,2,3,4,5]
// const findElement=findArr.find()
// console.log(findElement)

//every
// const everyArr=[1,2,3,4,5]
// const everyFlag=everyArr.every(elem=>elem>0)
// console.log(everyFlag)


//some

///////////////////////////

//! forEach - проходится по массиву как for

// forEach - возвращает undefined, просто перебирает
// элементы в массиве

// const forEachArr = [1,2,3,4,5]

// const result = forEachArr.forEach((element, index, curArr) => {
//     console.log({
//         element,
//         index,
//         curArr
//     })
// })

// console.log(result) // undefined


//! map

// map - возвращает новый массив, имеет возможность
// изменять элементы, всегда возвращет тоже кол-во
// элементов

// const mapArr = [1,2,3,4,5]

// const newMapArr = mapArr.map(elem => {
//     if(elem > 3) {
//         return elem
//     }
// })

// console.log(newMapArr)


//! filter

// filter - возвращает новый массив,
// не изменяет элементы, но может вернуть меньшее кол-во
// что было в исходном

// const filterArr = [1,2,3,4,5]

// const newFilterArr = filterArr.filter((elem) => {
//     return elem > 3
// })

// console.log(newFilterArr)


//! reduce

// reduce - возвращает один результат, после работы
// всех итераций

// const reduceArr = [1,2,3,4,5]

// const sum = reduceArr.reduce((prev, cur) => {
//     return prev + cur
// }, 5)

// console.log(sum) // 20


//! reduceRight - делает тоже самое, только справа
//! налево

// const reduceArr = [1,2,3,4,5]

// let iteration = 0

// reduceArr.reduceRight((prev, cur) => {
//     if(prev + cur < 6) {
//         iteration++
//     }
//     return prev + cur
// }, 0)
 
// console.log(iteration)

//! find

// const findArr = [
//     {
//         name: 'aidar',
//         salary: 1000
//     },
//     {
//         name: 'arlan',
//         salary: 2000
//     },
//     {
//         name: 'arlen',
//         salary: 3000
//     }
// ]

// const findedElem = findArr.find((elem) => {
//     return elem.salary > 999
// })

// console.log(findedElem)


//! every

// const everyArr = [1,2,3,4,5]

// const everyFlag = everyArr.every(elem => elem > 1)

// console.log(everyFlag) // false


//! some

// const someArr = [1,2,3,4,5]

// const someFlag = someArr.some(elem => elem >= 1)

// console.log(someFlag)