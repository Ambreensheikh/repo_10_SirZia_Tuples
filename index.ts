//MULTI ARRAY VS TUPLES 
//specific number per srecific data type rakhte hn is me kuch bhi edit nhi kr sakte
//WITHOUT READONLY ITS LIKE A MULTI ARRAY
type PersonInfo = [string , number,  boolean ];

const person1:PersonInfo = ["Ali", 22, true];
 // person1.forEach(valuePerson=> console.log(valuePerson));
 let filteredValue = person1.filter(value=> typeof value === "boolean");
        //console.log(filteredValue);
        
 //TUPLES :we have fixed data with fixed type, the real meaning of tuple
 //use readonly 
 //we can not apply any array method .push(),.pop()etc b/c in tuples values are fixed
 type StudentInfo = readonly[string, string,number,boolean ];
 //function to display student information
 const funcStudentInfo:(student:StudentInfo)=>void = (student:StudentInfo)=>{
       const [name, id, rNumber, hasCertificate ] = student;
       console.log(`Name: ${name}, id:${id}, rNumber:${rNumber}, Certificate ${hasCertificate? "Yes":"No"}`);
       
 }

 const student1:StudentInfo = ["Hashir", "@hashir", 1234, true];
 const student2:StudentInfo = ["Alia", "@alia", 345, false];
 
 funcStudentInfo(student1);
 funcStudentInfo(student2);

 
   



