/**
 * kiểu dữ liệu trong js
 * 1. dữ liệu nguyên thủy - Primitive data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Dữ liêu phức tạp - Complex Data
 * - Function
 * - Object
 * 
 */
//Number type
var a = 1;
console.log(typeof a);

//String type
var fullName = 'nguyen viet thang';
console.log(fullName);

//boolean type
var isSuccess = true;
console.log(isSuccess);

//undefined type
var age;
console.log(age);

//null type
var isNull = null; //nothing
console.log(typeof isNull);
//Symbol type
var id = Symbol('id');//unique- tính duy nhất
var id2 = Symbol('id'); //unique
console.log(id === id2); //khac nhau

//function
var myfunction = function() {
    alert('hi, xin chao cac ban!');
}
myfunction();

//object types
var myObject = {
    name: 'Thang nguyen',
    age: 25,
    job: 'developer',
    address: 'Ha noi',
    myFunction: function () {
        alert('hi, xin chao cac ban!');
    }
};
console.log('myObject', myObject);

var myArray = [
    'javascript',
    'ruby',
    'PHP'
];
console.log(typeof myArray);