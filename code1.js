
 //Arrow Function
const mulitply = (a,b) => a*b;
console.log(mulitply(75,15)); 

//Object Creation
const student = {
    name:'Khushi',
    age:23,
    greet () {
        console.log('Hi, I am ' + this.name)
    }
    // greet :function() {
    //     console.log('Hi, I am ' + this.name)
    // }
};
console.log(student);
student.greet();

