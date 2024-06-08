const person1 = ["Ali", 22, true];
// person1.forEach(valuePerson=> console.log(valuePerson));
let filteredValue = person1.filter(value => typeof value === "boolean");
//function to display student information
const funcStudentInfo = (student) => {
    const [name, id, rNumber, hasCertificate] = student;
    console.log(`Name: ${name}, id:${id}, rNumber:${rNumber}, Certificate ${hasCertificate ? "Yes" : "No"}`);
};
const student1 = ["Hashir", "@hashir", 1234, true];
const student2 = ["Alia", "@alia", 345, false];
funcStudentInfo(student1);
funcStudentInfo(student2);
export {};
