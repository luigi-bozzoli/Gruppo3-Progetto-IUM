/**
 * 
 */
const email = "giaciomo.lenzi99@gmail.com";
const password = "password";



function validateForm() {
	
	alert($("#email").val());
	alert($("#password").val());

	var emailUtente =$("#email").val();
	var passwordUtente = $("#password").val();
	
	var bool = new Boolean(emailUtente == email && password == passwordUtente);
	alert(bool);
	
	if(bool == true){
		alert("vero");
		return true;
	}else{
		avvisa("Email o password errate");
		alert("falso");
		setTimeout(function(){ 

	        alert('hello');
	        location.replace("https://www.w3schools.com");
	    }, 3000);  
		
		return false;
	}
}

function avvisa(x){
	$("#errore").text(x);
	$("#errore").fadeIn();
	$("#errore").delay(3000).fadeOut();;
}

