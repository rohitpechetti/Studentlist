let student=[

    {name :"vagesh",age:30},
    {name :"Rajesh",age:35},
    {name :"ananth",age:40},
    {name :"Rohit",age:20}
];
function ShowStudent(){
    let list=document.getElementById("StudentList");
    list.innerHTML="";
    student.forEach((student,index) => {
        let li=document.createElement("li");
        li.textContent=`${index + 1}. ${student.name}-Age: ${student.age}`
        list.appendChild(li);
    });

}
// ShowStudent();
function SortByName(){
    student.sort((a,b) => a.name.localeCompare(b.name));
    ShowStudent();


    
}
function SortbyAge(){
    student.sort((a,b)=>(a.age-b.age));
    ShowStudent();

}
