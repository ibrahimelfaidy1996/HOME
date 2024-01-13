
var imgList= Array.from(document.getElementsByClassName('imgItem'));
//console.log(imgList);
var lightBoxContainer=document.querySelector('.lightBoxContainer');
var lightBoxItem=document.querySelector('.lightBoxItem');
var nextBtn=document.getElementById("next");
var previoustBtn=document.getElementById("previous");
var closeBtn=document.getElementById("close");


var sound1=document.getElementById("num1")
var sound2=document.getElementById("num2")
var sound3=document.getElementById("num3")
var sound4=document.getElementById("num4")
var sound5=document.getElementById("num5")
var sound6=document.getElementById("num6")
var sound7=document.getElementById("num7")
var sound8=document.getElementById("num8")
var sound9=document.getElementById("num9")
var sound10=document.getElementById("num10")
var sound11=document.getElementById("num11")


//console.log(lightBoxContainer);
var currentIndex;
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click',function (e){
        lightBoxContainer.classList.add('active');
         currentIndex=imgList.indexOf(e.target);
       var imgSrc=e.target.getAttribute('src');
       lightBoxItem.style.backgroundImage=`url(${imgSrc})`
    //    if(imgSrc===`Numbers/Numbers/${0}.png`){
    //     sound0.play();
    //    }

     if(imgSrc=='mouse/1.png'){
        sound1.play();
       }else if(imgSrc=='mouse/2.png'){
        sound2.play();
       }else if(imgSrc=='mouse/3.png'){
        sound3.play();
       }else if(imgSrc=='mouse/4.png'){
        sound4.play();
       }else if(imgSrc=='mouse/5.png'){
        sound5.play();
       }else if(imgSrc=='mouse/6.png'){
        sound6.play();
       }else if(imgSrc=='mouse/7.png'){
        sound7.play();
       }else if(imgSrc=='mouse/8.png'){
        sound8.play();
       }else if(imgSrc=='mouse/9.png'){
        sound9.play();
       }else if(imgSrc=='mouse/10.png'){
        sound10.play();
       }else if(imgSrc=='mouse/11.png'){
        sound11.play();
       }




    }) ;
}

var imgSrc;
function nextSlide()
{

   if(currentIndex==imgList.length-1)
   {
    currentIndex=0;
     imgSrc= imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
   }else
   {
    currentIndex++;
    imgSrc= imgList[currentIndex].getAttribute("src");
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`
   
   }

   if(imgSrc=='mouse/1.png'){
    sound1.play();
   }else if(imgSrc=='mouse/2.png'){
    sound2.play();
   }else if(imgSrc=='mouse/3.png'){
    sound3.play();
   }else if(imgSrc=='mouse/4.png'){
    sound4.play();
   }else if(imgSrc=='mouse/5.png'){
    sound5.play();
   }else if(imgSrc=='mouse/6.png'){
    sound6.play();
   }else if(imgSrc=='mouse/7.png'){
    sound7.play();
   }else if(imgSrc=='mouse/8.png'){
    sound8.play();
   }else if(imgSrc=='mouse/9.png'){
    sound9.play();
   }else if(imgSrc=='mouse/10.png'){
    sound10.play();
   }else if(imgSrc=='mouse/11.png'){
    sound11.play();
   }
}


nextBtn.addEventListener('click',nextSlide);

function previousSlide()
{
    if(currentIndex==0)
    {
     currentIndex=imgList.length-1;
     imgSrc= imgList[currentIndex].getAttribute("src");
     lightBoxItem.style.backgroundImage=`url(${imgSrc})`
    }else
    {
     currentIndex--;
     imgSrc= imgList[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
    
    }

    if(imgSrc=='mouse/1.png'){
        sound1.play();
       }else if(imgSrc=='mouse/2.png'){
        sound2.play();
       }else if(imgSrc=='mouse/3.png'){
        sound3.play();
       }else if(imgSrc=='mouse/4.png'){
        sound4.play();
       }else if(imgSrc=='mouse/5.png'){
        sound5.play();
       }else if(imgSrc=='mouse/6.png'){
        sound6.play();
       }else if(imgSrc=='mouse/7.png'){
        sound7.play();
       }else if(imgSrc=='mouse/8.png'){
        sound8.play();
       }else if(imgSrc=='mouse/9.png'){
        sound9.play();
       }else if(imgSrc=='mouse/10.png'){
        sound10.play();
       }else if(imgSrc=='mouse/11.png'){
        sound11.play();
       }

}

previoustBtn.addEventListener('click',previousSlide);


closeBtn.addEventListener('click',function(){
    lightBoxContainer.classList.remove('active');

});


document.addEventListener('keydown',function(e){

        console.log(e.key);
        if(e.key=='ArrowRight')
        {
            nextSlide();
        }
        else if(e.key=="ArrowLeft")
        {
            previousSlide();
        }
        else if(e.key=='Escape')
        {
            lightBoxContainer.classList.remove('active');

        }
});