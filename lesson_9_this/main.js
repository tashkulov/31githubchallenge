// //
// // console.log(this)
// // this.alert('hi')



// // const obj={
// //     name:'aidar',
// //     sayhi:function(){
// //         console.log( `hello ${this.name}`)
// //     },
// //     gf:{
// //         name:'Adelina',
// //         sayHi:function(){
// //             console.log( `hello ${this.name}`)

// //         }
        
// //     },sayHello:()=>{
// //         console.log( `hello ${this.name}`)

// //     }
// // }

// // obj.sayhi()
// // obj.gf.sayHi()
// // obj.sayHello()

// // function fn(){
// //     return this
// // }
// // console.log(fn())



// //методы функции=call,bind,apply

// // const obj1={
// //     name:'Nuris',
// //     sayHi:function(text){
// //         console.log(` Hello ${this.name}`)
// //         console.log(text)
// //     }
// // }

// // const obj2={
// //     name:'Bayel',
 
// // }

// // //bind
// // obj1.sayHi.bind(obj2,'ggerr')()


// // //apply
// // obj1.sayHi.apply(obj2,['gergregre'])

// // //call
// // obj1.sayHi.call(obj2,'gergregre')


// // Array.prototype.myForEach=function(callback){
// //     for(let i=0;i<this.length;i++){
// //         callback(this[i],i,this)
// //     }
// // }

// // const arr=[1,2,3,4,5]
// // arr.myForEach((elment,ind,curArr)=>{
// //     console.log({
// //         elment,
// //         ind,
// //         curArr
// //     })
// // })

// // Number.prototype.toSqrt=function(){
// //     return this*this
// // }
// // console.log((5).toSqrt)
// // Number.prototype.toPowerOf=function(power){
// //     return this**power
// // }



// // Array.prototype.myForEach=function(callback){
// //     for(let i=0;i<this.length;i++){
// //         callback(this[i],i,this)
// //     }
// // }

// // const arr=[1,2,3,4,5]
// // arr.myForEach((elment,ind,curArr)=>{
// //     console.log({
// //         elment,
// //         ind,
// //         curArr
// //     })
// // })

// Array.prototype.myMap=function(callback){
//     const retArr=[]
//     for(let i = 0;i<this.length;i++){
//         retArr.push(callback(this[i],i,this))
//     }
    
// }
// const arr=[1,2,3,4,5,6]
// const newArr=arr.myMap((elem,ind,arrr)=>{
//     return elem *ind
// })
// console.log(newArr)