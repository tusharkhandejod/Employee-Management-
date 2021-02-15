
  $(function() {
     $('#firstname_error').hide()
     $('#lastname_error').hide()
     $('#email_error').hide()
     $('#mobileno_error').hide()
     $('#birthdate_error').hide()
     $('#joindate_error').hide()
     $('#jobrole_error').hide()
    
    
     var error_firstname = false;
     var error_lastname = false;
     var error_email = false;
     var error_mobileno = false;
     var error_birthdate = false;
     var error_joindate = false;
     var error_jobrole = false;

     $("$#form_firstname").focusout(function(){
         check_firstname();
     });

     $("$#form_lastname").focusout(function(){
        check_lastname();
     });
 
     $("$#form_email").focusout(function(){
        check_email();
    });

    $("$#form_mobileno").focusout(function(){
        check_mobileno();
    });

    
    function check_firstname(){
       var firstNamePattern = /^[a-zA-Z]*$/;
       var fname = $("#form_firstname").val()
       if(firstNamePattern.test(fname) && fname !==''){
           $("#firstname_error").hide();
           $("#form_firstname").css("border-bottom", "2px solid #34F458");
       }else{
        $("#firstname_error").html("Invalid FIrst Name")
        $("#firstname_error").show()
        $("#form_firstname").css("border-bottom", "2px solid #F90A0A");
        error_firstname = true;
       }
    }


    function check_lastname(){
        var lastNamePattern = /^[a-zA-Z]*$/;
        var lname = $("#form_lastname").val()
        if(lastNamePattern.test(lname) && lname !==''){
            $("#lastname_error").hide();
            $("#form_lastname").css("border-bottom", "2px solid #34F458");
        }else{
         $("#lastname_error").html("Invalid Last Name")
         $("#lastname_error").show()
         $("#form_lastname").css("border-bottom", "2px solid #F90A0A");
         error_lastname = true;
        }
    }


    function check_email(){
        var emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_lastname").val()
        if(emailPattern.test(email) && email !==''){
            $("#email_error").hide();
            $("#form_email").css("border-bottom", "2px solid #34F458");
        }else{
         $("#email_error").html("Invalid Last Name")
         $("#email_error").show()
         $("#form_email").css("border-bottom", "2px solid #F90A0A");
         error_email = true;
        }
    }

    function check_mobileno(){
        var mobilenoPattern = /^[0-9]{10}*$/;
        var mobileno = $("#form_lastname").val()
        if(mobilenoPattern.test(mobileno) && mobileno !==''){
            $("#mobileno_error").hide();
            $("#form_mobileno").css("border-bottom", "2px solid #34F458");
        }else{
         $("#mobileno_error").html("Invalid Last Name")
         $("#mobileno_error").show()
         $("#form_mobileno").css("border-bottom", "2px solid #F90A0A");
         error_email = true;
        }
    }
   

    $('#registration_form').submit(function(){
        var error_firstname = false;
        var error_lastname = false;
        var error_email = false;
        var error_mobileno = false;
        var error_birthdate = false;
        var error_joindate = false;
        var error_jobrole = false;
        

        check_firstname();
        check_lastname();
        check_email();
        check_mobileno();

        if(error_firstname === false && error_lastname === false && error_email === false && error_mobileno){
          alert("Registration Successfull");
          return true;
        }else {
            alert("PLease fill the form correctly");
            return false;
        }
    })
})    
