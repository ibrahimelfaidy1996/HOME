var turn='x';
var title=document.querySelector('.title');
var square=[];
function end(num1 ,num2 ,num3){
   
    title.innerHTML = `${square[num1]} winner`;
    document.getElementById('d'+num1).style.background='pink';
    document.getElementById('d'+num2).style.background='pink';
    document.getElementById('d'+num3).style.background='pink';
    document.getElementById('gameover').play();
    setInterval(function(){title.innerHTML+='.';},1000);
    setTimeout(function(){location.reload()},4000);
   
   
   

}
function winner(){
    var loser = false;
    for(var i=1; i<10;i++){
     square[i]  = document.getElementById('d' +i).innerHTML;
    }
    if(square[1]==square[2]&&square[2]==square[3]&& square[1]!=''){
         end(1,2,3);
       
        
       
        
   
       
    } else if(square[4]==square[5]&&square[5]==square[6]&& square[5]!=''){
        end(4,5,6);
       
       

    }else if (square[7]==square[8]&&square[8]==square[9]&& square[7]!=''){
        end(7,8,9);
       
       

    }else if (square[1]==square[4]&&square[4]==square[7]&& square[7]!=''){
        end(1,4,7);
        
        

    }else if (square[2]==square[5]&&square[8]==square[5]&& square[5]!=''){
        end(2,5,8);
        
       

    }else if (square[3]==square[6]&&square[6]==square[9]&& square[3]!=''){
        end(3,6,9);
       
     

    }else if (square[1]==square[5]&&square[5]==square[9]&& square[1]!=''){
        end(1,5,9);
        
       

    }else if (square[3]==square[5]&&square[5]==square[7]&& square[7]!=''){
         end(3,5,7);
      
       

    }
    
    else if (square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=''&&square[7]!='')
    {
        title.innerHTML = 'Match Tie';
                setInterval(function () {
                    title.innerHTML += '.';
                }, 1000);
                setTimeout(function () {
                    location.reload();
                }, 4000);
            }
        
    }




function game(id) {
    var element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML === '') {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o';
    } else if (turn === 'o' && element.innerHTML === '') {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }

    document.getElementById('click').play();


    winner();
}