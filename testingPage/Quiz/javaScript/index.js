let id = (id)=> document.getElementById(id);
let classes = (classes)=> document.getElementsByClassName(classes);

let quizSelected = classes("select-quiz");

for(let i=0; i<quizSelected.length;i++){
    quizSelected[i].addEventListener("click",()=>{
        
        window.location =  `quiz.html?quiz=${quizSelected[i].value}`
    });
} 