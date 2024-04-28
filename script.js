     
            /*toggle between adding and removing the "responsive" class to topnav the user clicks on the icon*/

            function openForm() {
                document.getElementById("myForm").style.display = "block";
            }

            function closeForm() {
                document.getElementById("myForm").style.display = "none";
            }


            function openRegister() {
                document.getElementById("myRegister").style.display = "block";
            }

            function closeRegister() {
                document.getElementById("myRegister").style.display = "none";
            }




            /*side nva*/
            /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
//the toggle button

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// select the element
const counters = document.querySelectorAll('.counter');

// iterate through all the counter elements
counters.forEach(counter => {
  // function to increment the counter
  function updateCount() {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerHTML;

    const inc = Math.floor((target - count) / 100);

    if (count < target && inc > 0) {
      counter.innerHTML = (count + inc);
      // repeat the function
      setTimeout(updateCount, 1);
    }
    // if the count not equal to target, then add remaining count
    else {
      counter.innerHTML = target;
    }
  }
  updateCount();
});

