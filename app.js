//backticks aren't like quotes and they are used dor easy manupulation of strings
const studentName = 'John Ontita';
const degreeCourse= 'bachelor of technology in electronics and computer engineering';
const yearStudy = 'third year';
const admissionYear=2019;
const myDetailedIformation =`I'm ${studentName} ${yearStudy} pursuing ${degreeCourse}`;
console.log(myDetailedIformation); 
//control structures
const age = 20;
const currentYear=2023
if(age<=18){
    
    console.log(age,`you are a child under parental care`);

}
else{
    console.log('you are a mature person')
}