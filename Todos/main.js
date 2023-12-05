//! CRUD = C - CREATE; R - READ; U - UPDATE; D - DELETE 
 
function getElement(identificator) { 
    return document.querySelector(identificator) 
} 
 
let todoList = JSON.parse(localStorage.getItem("todos")) || []
let todoText = "" 
 
const form = getElement(".todo_form") 
const input = getElement(".todo_form__input") 
const btn = getElement(".todo_form__btn") 
const list = getElement(".todo_list") 
const toaster=getElement('.toaster')

 
input.addEventListener("input", ({ target: { value } }) => { 
    todoText = value 
}) 
 
form.addEventListener("submit", (event) => { 
    event.preventDefault() 
    addTodo(todoText) 
}) 
 
 document.addEventListener("click",(event)=>{
    const element=event.target
    if(element.classList.contains("btn_delete")){
        const id = +element.getAttribute('id')
        deleteToDo(id)
    }

    if(element.classList.contains("btn_edit")){
        editToDo(element)
    }

    if(element.classList.contains('btn_completed')){
        const id = +element.getAttribute('id')
        completedToDo(id)
    }
})
function addTodo(text) { 
    if (!text.trim()) { 
        toaster.innerText='empty'
        toaster.classList.remove("toaster_hide")
        setTimeout(()=>{
            toaster.classList.add("toaster_hide")
        },3000)
        return 
    } 
 
    const newTodo = { 
        title: text, 
        isCompleted: false, 
        id: Date.now() 
    } 
 
    todoList.unshift(newTodo) 
    localStorage.setItem("todos",JSON.stringify(todoList))


    clear() 
    render() 
    input.focus()
} 

function deleteToDo(id){
    todoList=todoList.filter(todo=>todo.id!==id)
    localStorage.setItem("todos",JSON.stringify(todoList))

    render()

}

function editToDo(btn){
    const listItem=btn.closest("li")
    const tasktext=listItem.querySelector("span").textContent.trim()
    const newInput=document.createElement('input')
    newInput.type='text'
    newInput.value=tasktext

    const newButton=document.createElement('button')
    newButton.innerHTML='save'
    newButton.onclick=function(){
        const newText=newInput.value.trim()
        if(newText){
            listItem.querySelector("span").textContent=newText
            todoList=todoList.map(todo=>{
                return todo.id ==btn.id?{...todo,title:newText}:todo
                
            }
            )
    localStorage.setItem("todos",JSON.stringify(todoList))

        }
    listItem.style.display="flex"
    list.removeChild(newInput)
    list.removeChild(newButton)
    }
    listItem.style.display="none"
    listItem.before(newInput)
    listItem.before(newButton)

    
}

function completedToDo(id){
    todoList=todoList.map(todo=>{
        return todo.id===id?{...todo,isCompleted:!todo.isCompleted}:todo
    })
    localStorage.setItem("todos",JSON.stringify(todoList))

}
 
function render() { 
    list.innerText = "" 
    todoList.forEach((todo) => { 
        const li = document.createElement("li") 
 
        li.innerHTML = ` 
            <input class="btn_completed" id="${todo.id}" type="checkbox"  ${todo.isCompleted ? "checked" : ""}/> 
            <span>${todo.title}</span> 
            <div> 
                <button class="btn_delete" id="${todo.id}">DELETE</button> 
                <button class="btn_edit" id="${todo.id}">EDIT</button> 
            </div>  
        ` 
 
        list.append(li) 
    }) 
} 
 
 
function clear() { 
    todoText = "" 
    input.value = "" 
}


render()