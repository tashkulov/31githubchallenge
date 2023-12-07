

// //! Promise

// //? 3 состояния
// //? pending - ожидание
// //? fullfilled - завершено успешно
// //? rejected - завершено с ошибкой

// // const promise = new Promise((onResolve, onReject) => {
// //     if(Math.random() > 0.5) {
// //         setTimeout(() => {
// //             onReject('Error!!!')
// //         }, 3000)
// //     } else {
// //         setTimeout(() => {
// //             onResolve('Fullfilled')
// //         }, 3000)
// //     }
// // })

// //! Методы промиса

// //? then
// //? catch
// //? finally

// // console.log(promise)

// // promise
// //     .then(response => {
// //         console.log(response)
// //         console.log(promise)
// //     })
// //     .catch(error => {
// //         console.log(error)
// //         console.log(promise)
// //     })
// //     .finally(() => {
// //         console.log('Я работаю всегда')
// //     })


// //! fetch


// // fetch('https://jsonplaceholder.typicode.com/todos')
// //       .then(
// //         (response) => {console.log(response)}, 
// //         (error) => {console.error(error)}
// //       )


// //! Методы запросов

// //? get - взять (получить)
// //? post - отправить (добавить)
// //? put - заменить (полностью)
// //? patch - заменить (часть)
// //? delete - удалить

// //* get

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             const elem = document.createElement('div')
//             elem.innerHTML = element.title
//             document.body.append(elem)
//         });
//     })

// //* post

// const myTodo = {
//     title: 'aidar todo lorem ipsum',
//     completed: false,
//     userId: 1
// }

// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(myTodo)
// })
//     .then(res => res.json())
//     .then(data => {
//         document.body.append(data.title)
//     })


// //* put

// const putTodo = {
//     title: 'put todo lorem ipsum'
// }

// fetch('https://jsonplaceholder.typicode.com/todos/200', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(putTodo)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })


// //* patch

// const patchTodo = {
//     title: 'put todo lorem ipsum'
// }

// fetch('https://jsonplaceholder.typicode.com/todos/199', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(putTodo)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })

// //* delete 

// fetch('https://jsonplaceholder.typicode.com/todos/100', {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
