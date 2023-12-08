// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// let obj={
//     name:'Nuris',
//     surname:'Tashkulov',
//     age:19,
//     lang:"Js",
//     salary:50000

// }
// for(let i in obj){
//     console.log(i + " :" + obj[i])

// }
// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.


// let number1=parseInt(prompt('Enter first number: '))
// let number2=parseInt(prompt('Enter second number: '))
// let sum=number1+number2
// if(sum>10 && sum<20){
//     console.log(sum*5)
// }else if(sum>20 && sum<50){
//     console.log(sum/3)
// }else{
//     console.log(sum+10)

// }


// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];
// const ob1j =Object.fromEntries(aboutUs)
// for(let i in ob1j){
//     console.log(i+ " :" + ob1j[i])
// }


// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.

// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// }
// let sum=0
// for(let i in users){
//     sum+=users[i]

// }
// console.log(sum)


//  Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]


// function removeElem(arr, element) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] == element) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }

// let arr = [2, 'hello', true, 'world', 5, 'js'];
// removeElem(arr, 'world');
// console.log(arr);

// fff(arr,1)
// console.log(arr)





// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50
// let arR=['erwerwerew','ewrewrewrewrewr','ewrw']
// let newArr=arR.filter((elem)=>elem.length>5)
//   console.log(newArr)

  
  
  
//   let task2 = [10, 25, 25, 15, 5, 10];
//   let sum = 0;
  
//   task2.forEach(function(element) {
//     sum += element;
//   });
  
//   alert(sum);
  
// let fuck=[1,2,3,4,5,6,7,8,9]
// function fuck2(arr){
//     let sum=0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum+=arr[i]
            // console.log(`четные числа это ${arr[i]}`)

//         }
        
//     }
//     console.log(`четные числа это ${arr[i]}`)

//     console.log(sum)

// }
// fuck2(fuck)


let obj={
    cutternFloor:1,

    printFloor:function(){},
    upOneFloor:function(){if(this.cutternFloor>=18){console.log('Выше нельзя')}else{this.cutternFloor+1}},
    downOneFloor:function(){if(this.cutternFloor<=this.cutternFloor){console.log('Ниже нельзя')}else{this.cutternFloor-1}},
    toFloor:function(moveFloor){for(this.cutternFloor;this.cutternFloor<moveFloor;this.cutternFloor++){}}
}