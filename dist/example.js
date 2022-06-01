"use strict";
let thisIsANumber = 50;
let thisIsAString = "Hello";
let thisIsABoolean = true;
/** thisIsANumber = '6500'; */
/** let specialType:any = 'Whatever'; */
let specialType; /** ts will infer this to be of type any */
const exampleConstant = 5;
//* equivalent to a C# method */
//* return type comes after the method name and params *;
function canStudentDrive(age, passedDrivingTest) {
    if (age >= 16 && passedDrivingTest) {
        return true;
    }
    return false;
}
let canDrive = canStudentDrive(16, true);
//* declare an array */
let studentArray = [
    { name: "Bob", canDrive: true, age: 16 },
    { name: "Steve", age: 16, canDrive: true },
    { age: 16, name: "Andrew", canDrive: true }
];
studentArray.push({ name: "Jason", age: 16, canDrive: true });
console.log(studentArray);
studentArray.pop(); //* */
//*filter, map, reduce, find*/
let firstItemInArray = studentArray[0];
studentArray.push({ name: "Jason", age: 16, canDrive: true });
studentArray.pop();
for (let i = 0; i < studentArray.length; i++) {
}
