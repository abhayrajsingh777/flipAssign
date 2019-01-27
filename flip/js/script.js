$(document).ready(function(){ 
    $("input,textarea").on("keypress", function(e) {
      if (e.which === 32 && !this.value.length)
        e.preventDefault();
    });
  });    
function validateContact() {
    var valid = true;   
    $(".info").html('');
    if(!$("#name").val()) {
        $("#userName-info").html("(required)");
        valid = false;
    }    
    if(!$("#email").val()) {
        $("#userEmail-info").html("(required)");
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid email)");
        valid = false;
    }
    if(!$("#number").val()) {
        $("#userNumber-info").html("(required)");
        valid = false;
    }    
    if(!$("#company").val()) {
        $("#Company-info").html("(required)");
        valid = false;
    }            
    return valid;
}