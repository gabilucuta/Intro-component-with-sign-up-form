
function myfunction(){
    var x = document.forms["myForm"]["fname"].value;
    if(x=='')
    {
        var element = document.getElementById("firstname");
        element.classList.toggle("mystyle");
    }

    x = document.forms["myForm"]["lname"].value;
    if(x=='')
    {
        var element = document.getElementById("lastname");
        
        element.classList.toggle("mystyle");
    }

    x = document.forms["myForm"]["myemail"].value;
    if(x=='')
    {
        var element = document.getElementById("email");
        element.classList.toggle("mystyle");
    }

    x = document.forms["myForm"]["mypassword"].value;
    if(x=='')
    {
        var element = document.getElementById("password");
        element.classList.toggle("mystyle");
    }
    

  
  }