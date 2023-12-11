// //destructing
// const obj={
//     name:'Nuris',
//     age:20,
//     langs:['JS','JAVA','Python','php'],
//     salary:{
//         codify:100000,
//         nurtelecom:300000
//     },
//     logtotalSalary:function(){
//         const total=Object.values(this.salary)
//                                         .reduce((p,c)=>p+c,0)
//         console.log(`total salary :  ${total}`)
//     }
// }

// obj.logtotalSalary()

// const {name,age,salary:{codify},langs:[lang1,lang2]}=obj
// console.log(name,age,codify,lang1,lang2)

// const {country='not coun'}=obj
// console.log('country is ' ,country)


// //other values
// // const {logtotalSalary,langs:[lang,...otherLengs],...otherProps}=obj

// // console.log(otherProps,otherLengs)

// //rename
// const {
//     name:objName
// }=obj
// const {
//     name:objName1
// }=obj
// const {
//     name:objName2
// }=obj
// console.log({
//     objName,
//     objName1,
//     objName2
// })

// const obj1={
//     name:'Nuris'
// }
// const 

// const arr1=[1,2,3,4,5]
// const arr2=[6,7,8,9,10]

// const res=arr1.concat.arr2
// const res2=[...arr1,...arr2]
// const res3=[arr1,arr2].flat(1)

//task 1
// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }
// const{b,c,d}=obj
// const {a ,...withoutA}=obj
// console.log(withoutA,b,c,d)


// const ob={
//     name:'Aidar'
// }
// const ob1={
//     name:' Ne Aidar'
// }
// const {name}=ob
// console.log(name)
// const {name: secondNAme}=ob1
// console.log(secondNAme)
