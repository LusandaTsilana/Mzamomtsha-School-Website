function openlink(evt, linkName) {
    // Declare all variables
    var i, tabcontent,  tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  /* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("myTab");
    if (x.className === "tab") {
      x.className += " responsive";
    } else {
      x.className = "tab";
    }
  }

 const bookImg = document.getElementById("book");
 console.log(bookImg);
 bookImg.addEventListener("click", function() {
    bookImg.classList.toggle("img-rounded-border");
  })


  const sportImg = document.getElementById("sports");
  console.log(bookImg);
  sportImg.addEventListener("click", function() {
     sportImg.classList.toggle("img-rounded-border");
   })




   const artImg = document.getElementById("arts");
   console.log(bookImg);
   artImg.addEventListener("click", function() {
      artImg.classList.toggle("img-rounded-border");
    })