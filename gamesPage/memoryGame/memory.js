// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  let img = ['apple.png', 'ball.png', 'butterfly.png', 'butterfly1.png', 'duck.png', 'strawberry.png',
             'apple.png', 'ball.png', 'butterfly.png', 'butterfly1.png', 'duck.png', 'strawberry.png'];
  

  shuffleArray(img);
  
  let main = document.getElementsByTagName('main')[0]; 
  let allImages = document.getElementsByClassName('memoryphotos');
  
  for (let i = 0; i < img.length; i++) {
    main.innerHTML += `<div class="memoryphotos"><img src="${img[i]}"></div>`;
  }
  
  let flag = true;
  let arr = [];
  
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function () {
      if (flag) {
        this.firstChild.style.opacity = '1';
  
        if (arr.length == 0) {
          arr[0] = this;
        } else if (arr.length == 1) {
          arr[1] = this;
        }
  
        if (arr.length == 2) {
          flag = false;
        }
  
        setTimeout(checkImage, 300);
      }
    });
  }
  
  function checkImage() {
    if (arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')) {
      console.log("winner ");
      playMatchSound();
    } else {

      arr[0].firstChild.style.opacity = '0';
      arr[1].firstChild.style.opacity = '0';
    }
  
    arr = [];
    flag = true;
  }
  const matchSound = document.getElementById('matchSound');
  function playMatchSound() {
    matchSound.currentTime = 0;
    matchSound.play();
  }


  //back button
  var backButton = document.querySelector('.back-btn');

            
            backButton.addEventListener('click', function() {
               
                window.location.href = 'index.html';})