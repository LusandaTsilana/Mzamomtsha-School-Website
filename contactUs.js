// nav bar js
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


// form validation
var validate = function(e) {
    var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
    var regEx;
    var removeSpan;
    var par;
    var check = false;
    var val;
    var errArr = [];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
          
            if (fields[i].nextElementSibling.classList.contains('error')) {
              removeSpan = fields[i].nextElementSibling;
              par = fields[i].parentNode;
              par.removeChild(removeSpan);
              fields[i].nextElementSibling.innerHTML = "" + fields[i].placeholder + " is required";
              fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
              check = false;
              errArr.push(fields[i]);
            }
            fields[i].nextElementSibling.innerHTML = "" + fields[i].placeholder + " is required";
            fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
            check = false;
            errArr.push(fields[i]);
        } else {

            // check if message and name values contain valid characters.
            if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
                val = isValidChar(fields[i]);
                if(val === false) {
                  fields[i].nextElementSibling.innerHTML = "...";
                  fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                  check = false;
                  errArr.push(fields[i]);
                } else {
                  fields[i].nextElementSibling.innerHTML = "";
                  fields[i].style.boxShadow = "none";
                  check = true;
                }
            }
          
            if(fields[i].id === 'phone') {
              val = isValidPhone(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Please enter a valid phone number";
                fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                fields[i].style.boxShadow = "none";
                check = true;  
              }
            }

          //   if (fields[i].id === 'subject') {
          //     val = isValidSubject(fields[i]);
          //     if(val === false) {
          //         fields[i].nextElementSibling.innerHTML = " Please enter a valid address";
          //         fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          //         check = false;
          //         errArr.push(fields[i]);
          //     } else {
          //         fields[i].nextElementSibling.innerHTML = "";
          //         fields[i].style.boxShadow = "none";
          //         check = true;
          //     }
          // } 

            if (fields[i].id === 'email') {
                val = isValidEmail(fields[i]);
                if(val === false) {
                    fields[i].nextElementSibling.innerHTML = " Please enter a valid email";
                    fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                    check = false;
                    errArr.push(fields[i]);
                } else {
                    fields[i].nextElementSibling.innerHTML = "";
                    fields[i].style.boxShadow = "none";
                    check = true;
                }
            }
        }
    }
  
    if(check === false) {
      var count = 0;
      var toErr = setInterval(function() {
       
        var pos = Math.abs(e);
        if(count < pos) {
          
        } else {
          clearInterval(toErr);
          alert("Please input all the required fields")

        }
      }, 1);
    }
   

    return check

    // Helper functions.
    function isValidEmail(e) {
        regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email = e.value;
        if (!regEx.test(email)) {
            return false;
        }
    }

    function isValidChar(e) {
        regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
        var value = e.value;
        if (!regEx.test(value)) {
            return false;
        }
    }
  
    function isValidPhone(e) {
      regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
      var value = e.value;
      if(!regEx.test(value)) {
        return false;
      }
    }

  //   function isValidSubject(e) {
  //     regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     var email = e.value;
  //     if (!regEx.test(subject)) {
  //         return false;
  //     }
  // }
}


