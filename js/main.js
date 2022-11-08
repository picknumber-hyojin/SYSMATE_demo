let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//현재시간

const date_txt = document.querySelector('.date');

//functions
    init();
    
    function init(){
        setInterval(()=>{
            cnt_time();
        }, 1000);
    }

    function cnt_time(){
    
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth()+1;
        const date = time.getDate();
        const hour = time.getHours();
        const min = time.getMinutes();

        date_txt.innerText = year + '년 ' + month + '월 '
         + date + '일 ' + hour + '시 ' +  min + '분 ';
    }

