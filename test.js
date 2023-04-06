var x = 10;
x = "hari";
x = true;
x = 10.5;

var x = 10;

function sum(a, b) {
    let x = 50;
    return function (c) {
        return a + b + c;
    }
}

var testfn = function (a=10, b=20) {
    // if(a == undefined) a = 10;
    // if(b == undefined) b = 20;
    return a + b;
}

testfn();

var add = sum(10, 20);
add(30);

var obj = {
    name: "hari",
    age: 30,
    setName: (name) => {
        this.name = name;
    },
    getName: () => {
        return this.name;
    },
    setAge: function (age) {
        obj.age = age;
    },
    getAge: function () {
        return obj.age;
    }
}

obj.setName("ram");


//  ES6

//  let, const
const y = 10;
y = 20;

// arrow function
const add = (a, b) => {
    return a + b;
}

//  template string
const my_name = "hari";
const age = 30;
console.log('my name is '+ my_name +', and age is '+ age); // output: my name is hari, and age is 30
console.log(`my name is ${my_name}, and age is ${age}`); // output: my name is hari, and age is 30

//  spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

const person = new Person("hari", 30);

// ES7 : async, await 
async function test() {
    return await setTimeout(() => {
        return "hello";
    }, 10000);
}

console.log("start");
test().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
console.log("end");
// output: start, end, hello

let arr = [1, 2, 3, 4, 5];
arr = 10;

var stu = {
    name: "hari",
    age: 30,
    dob: "",
}

if(!stu.dob || stu.dob == "") {
    stu.dob = new Date("01/01/1990");
}

dob = new Date(stu.dob);
// output: 01/01/1990

// ============================================

const res = [
    {
        "id": 1,
        "name": "hari",
        "age": 30,
        "dob": "01/01/1990"
    },
    {
        "id": 2,
        "name": "ram",
        "age": 30,
        "dob": "01/01/1990"
    },
    {
        "id": 3,
        "name": "shyam",
        "age": 30,
        "dob": "01/01/1990"
    },
    {
        "id": 4,
        "name": "mohan",
        "age": 30,
        "dob": "01/01/1990"
    },
]
