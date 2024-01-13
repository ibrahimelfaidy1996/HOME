document.addEventListener("DOMContentLoaded", function () {
    var allNotes = document.querySelectorAll("li a");

    allNotes.forEach(function (note) {
        note.addEventListener("keyup", function () {
            var noteTitle = this.querySelector("h2").textContent;
            var noteContent = this.querySelector("p").textContent;

            
            var noteIndex = Array.from(this.closest("li").parentNode.children).indexOf(this.closest("li"));

            var itemKey = "note_" + noteIndex;

            var data = {
                title: noteTitle,
                content: noteContent
            };

            window.localStorage.setItem(itemKey, JSON.stringify(data));
        });
    });

    allNotes.forEach(function (note) {
        
        var noteIndex = Array.from(note.closest("li").parentNode.children).indexOf(note.closest("li"));
        var itemKey = "note_" + noteIndex;
        var data = JSON.parse(window.localStorage.getItem(itemKey));

        if (data !== null) {
            var noteTitle = data.title;
            var noteContent = data.content;

            note.querySelector("h2").textContent = noteTitle;
            note.querySelector("p").textContent = noteContent;
        }
    });



    var backToHome=document.querySelector(".btmBackToHome");
    backToHome.addEventListener("click",function(){
        window.location.href = "../index.html";

    });
});
