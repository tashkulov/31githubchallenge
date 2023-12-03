//OOP

//Abstraction
//Наследование
//Полиморфизм
 class  Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sayhi(){
        console.log(`Hi ${this.name}`)
    }
}

class Worker extends Person{
    constructor(name,age,profession){
        super(name,age)
        this.profession=profession
    }
    work(){
        console.log('work!')
    }
}
const nuris=new Person('Nuris',19)  


//Полиморфизм
