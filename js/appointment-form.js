// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".appointment-form").submit(function(e) {
        e.preventDefault();
        var fname = $(".fname");
        var lname = $(".lname");
        var email = $(".email");
        var phone = $(".phone");
        var msg = $(".message");
        var flag = false;


        if (fname.val() == "") {
            fname.closest(".form-control").addClass("error");
            fname.focus();
            flag = false;
            return false;
        } else {
            fname.closest(".form-control").removeClass("error").addClass("success");
        }
        
        
        if (lname.val() == "") {
            lname.closest(".form-control").addClass("error");
            lname.focus();
            flag = false;
            return false;
        } else {
            lname.closest(".form-control").removeClass("error").addClass("success");
        } 
        



        if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        }
        
        
        if (phone.val() == "") {
            phone.closest(".form-control").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".form-control").removeClass("error").addClass("success");
        } 
        
        
        if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "&fname=" + fname.val() +"&lname=" + lname.val() + "&email=" + email.val() + "&phone=" + phone.val() + "&msg=" + msg.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "contact-us.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                    if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').html('<font color="#48af4b">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                         else
                        $('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
                                }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})



