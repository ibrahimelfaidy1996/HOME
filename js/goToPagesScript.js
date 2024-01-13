

var learning=document.querySelector(".btnLearning");
var gaming=document.querySelector(".btnGaming");
var tests=document.querySelector(".btnTests");
var notes=document.querySelector(".btnNotes");

notes.addEventListener("click",function(){
    window.location.href = "Notes/stickyNotes.html";

});


learning.addEventListener("click",function(){
    window.location.href = "learningPage/learning.html";

});

tests.addEventListener("click",function(){
    window.location.href = "testingPage/testing.html";

});

gaming.addEventListener("click",function(){
    window.location.href = "gamesPage/games.html";

});

