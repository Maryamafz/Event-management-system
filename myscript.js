`use strict`
const Search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const events =  document.getElementById("events1");
    const eventscard=  document.querySelectorAll(".event-card");
    const nameofevent=  events.getElementsByTagName("h3");

    for (var i=0; i< nameofevent.lenght; i++){
        let match = eventscard[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textcontent || match.innerHTML

            if(textvalue.toUpperCase().indexof(searchbox)> -1){
                eventscard[i].style.display = "";
            }
            else{
                eventscard[i].style.display = "none";
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal_signup = document.querySelector(".signup");
    var modal_login = document.querySelector(".login");

    // Get the overlay
    var overlay = document.querySelector(".overlay");
  
    // Get the button that opens the modal
    var btn_signup = document.getElementById("sign-up-btn");

    var btn_login = document.getElementById("log-in-btn");

    // Get the <span> element that closes the modal
    var closeBtn_signin = document.querySelector(".close-sign");
    var closeBtn_login = document.querySelector(".close-log");
   
  
    // When the user clicks the button, open the modal 
   
      btn_signup.onclick = function(event) {
        event.preventDefault(); // Prevent the default action of the <a> tag
        modal_signup.style.display = "block";
        overlay.style.display = "block";
      }
  
      btn_login.onclick = function(event) {
        event.preventDefault(); // Prevent the default action of the <a> tag
        modal_login.style.display = "block";
        overlay.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn_signin.onclick = function() {
      modal_signup.style.display = "none";
      overlay.style.display = "none";
    }

    closeBtn_login.onclick = function() {
      modal_login.style.display = "none";
      overlay.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal_signup.style.display = "none";
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal_register = document.querySelector(".register");
    
    // Get the overlay
    var overlay = document.querySelector(".overlay");
  
    // Get the button that opens the modal
    var btn_register = document.getElementById("register-btn");
   

    // Get the <span> element that closes the modal
    var closeBtn_register = document.querySelector(".close-register");
   
    // When the user clicks the button, open the modal 
   
      btn_register.onclick = function(event) {
        event.preventDefault(); // Prevent the default action of the <a> tag
        modal_register.style.display = "block";
        overlay.style.display = "block";
      }
  
    // When the user clicks on <span> (x), close the modal
    closeBtn_register.onclick = function() {
      modal_register.style.display = "none";
      overlay.style.display = "none";
    }
  

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal_register.style.display = "none";
      }
    }
  });

  function validateForm() {
    var name =document.forms["registrationForm"]["name"].value;
    var city =document.forms["registrationForm"]["city"].value;
    var email=document.forms["registrationForm"]["email"].value;
    var CompanyName=document.forms["registrationForm"]["CompanyName"].value;
    var Mobile=document.forms["registrationForm"]["Mobile"].value;
    if (name == " " || city==""|| email=="" || CompanyName =="" || Mobile== "") {
      alert("Plese fill the all input");
      return false;
    }
  

  if (isNan(mobile) || mobile.lenght !=10) {
    alert("your Number should 10 ");
    return false;
  } 
    alert("your regestration is seccessfully");
    return true;
  }

