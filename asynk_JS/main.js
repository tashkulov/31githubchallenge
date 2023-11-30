// const num=5


// //итеративный способ


// let iterateFact=1
// for(let i=1;i<=num;i++){
//     iterateFact*=i
// }
// console.log(iterateFact)

//рекурсивный способ
//имеет 2 условия :
//1)функция должно вызывать сму себя 
//2)должна быть точка выхода


// const getFact=(n)=>{
//     if(n==1){return n}
//     return n*getFact(n-1)
// }
// const recursiveFact=getFact(num)
// console.log(recursiveFact)


//Browser API
//API- application programming interface
//setTimeout()=переданный первым аргументом
//callback вызовётся через заданное время вторым
//аргументом в миллисекундах
//100мс =1с
// setTimeout(()=>{
//     console.log('Прошла одна секунда')
// },1000)

//setInterval

// let i =0
// setInterval(()=>{
//     i++
//     console.log(`Прошлo ${i} секунд`)
// },1000)


//removeInterval
// const interval=setInterval(()=>{
//     console.log('HELLO')

// },500)
// const timeOut =setTimeout(() => {
//     clearInterval(interval)
// }, 1500);

// if(Math.random()>0.5){
//     clearTimeout(timeOut)
// }

// console.log(Math.random())
// console.log(Math.ceil(0.5))
// console.log(Math.floor(0.5))
// console.log(Math.sqrt(9))
// console.log(Math.round(9    ))

//event loop
setTimeout(()=>{
    console.log('hello timeOut')
},0)
setTimeout(()=>{
    console.log('hello timeOut2')
},0)
console.log('hello log')