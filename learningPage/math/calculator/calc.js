
    let output = document.getElementsByClassName("outputScreen")[0];
    let numbers = document.getElementsByClassName("display");

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (event) {
            output.value += event.target.innerText;
        });
    }


    let equal=document.getElementsByClassName("equal")[0];

    equal.addEventListener('click',function()
    {
        try{
            output.value=eval(output.value);
        }catch(err)
        {
            output.value="invalid";
        }
    })

    let clear=document.querySelectorAll(".clearButton");
    clear[0].addEventListener('click',function(){
      output.value="";  
    })

   
    clear[1].addEventListener('click',function(){
      output.value="";  
    })

    var audio = document.getElementById('click');
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            playSound();
        });
    });

    function playSound() {
        audio.currentTime = 0;
        audio.play();
    }