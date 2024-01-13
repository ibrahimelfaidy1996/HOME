var start = new Date().getTime();
//function to change color of shapes
function randcolor(){
    var colorArray = '0123456789ABCDEF';
    var hash  ='#';
    for(var i =0;i<6;i++){
        hash+=colorArray[Math.floor(Math.random()*16)];//ibrahim notes in this line math.random from 0-1 by multipl by 16 it will be from 0 t0 16  whre 16 not in cluded so 0 to 15 so it like generating random array index for colorArray[0] to colorArray[15]
    }
    document.getElementById("fig").style.backgroundColor = hash;
}
function figure(margy,margx){
    document.getElementById("fig").style.margin = ""+margy+"px"+" "+margx+"px";
}
function shape(siz){
    start = new Date().getTime();

    var choice = Math.floor((Math.random()*2)+1); //generating random number from 1 or 2 
    if(choice==1){
        document.getElementById("fig").style.width = ""+siz+"px";   //if its one then style circle
        document.getElementById("fig").style.height = ""+siz+"px";
        document.getElementById("fig").style.borderRadius = "50%";

    }
    if(choice==2){
        document.getElementById("fig").style.width = ""+siz+"px"; //if its two then geerate triangle or squere
        document.getElementById("fig").style.height = ""+siz+"px";
        document.getElementById("fig").style.borderRadius = "0";
    }
}

var totaltime=0;
var areatotaltime=document.getElementById("totltime")
var clocked=document.getElementById('clickedId');

var totalclicks=0;
    document.getElementById("fig").onclick = function(){
        totalclicks+=1;
        clocked.play();
        var end = new Date().getTime();
      
        var timeTaken = (end-start)/1000;

        // Round to the nearest two decimal places
    var roundedTime = Math.round(timeTaken * 100) / 100;
    
    // Update total time
    totaltime += roundedTime;
        areatotaltime.innerHTML=Math.round(totaltime.toFixed(2),2);

        document.getElementById("tTaken").innerHTML = timeTaken;
        document.getElementById("totalclicks").innerHTML=totalclicks;
        areatotaltime.innerHTML=totaltime;
        var siz = Math.floor((Math.random()*100)+50);
        //but margin x may case resposive problem so i must have sure the randum value of x less than screen width
       
        var flagx=true;
        while(flagx)
        {
            var margx = Math.floor((Math.random()*600)+50);
            var totalWidth=margx+siz+50;
            if(totalWidth<=window.innerWidth){
                flagx=false;
            }
        }
      
        var flagy=true;
        while(flagy)
        {
            var margy = Math.floor((Math.random()*350)+50);
            var totalhight=margy+siz+200;
            if(totalhight<=window.innerHeight)
            {
                flagy=false;
            }
        }
      


        function congratultewinig()
        {
            if(totalclicks>=10&&totaltime<=20 )
            {
               
                var targetarea=document.querySelector(".congratearea");
                targetarea.innerHTML="congratultion!,well done YOU HAVE WIN THE GAME"
                document.body.style.backgroundColor="green";
                document.body.style.backgroundImage="URL('happy2.png')";
               var audio= document.getElementById("winingaudio");
               audio.play();
              
            }
            else if(totalclicks<=10&&totaltime>=20)
            {
            

                var targetarea=document.querySelector(".congratearea");
                targetarea.innerHTML="SORRY YOU HAVE LOSE THE GAME"
                var loseingaudio=document.getElementById("losingingaudio");
                loseingaudio.play();
                document.body.style.backgroundColor="red";
                document.body.style.backgroundImage="URL('sad.png')";

            }

        }
        congratultewinig();
        

        figure(margy,margx);
       
        shape(siz);
        randcolor();
    }

    

    function restartfunction()
    {
        location.reload();
    }
   


