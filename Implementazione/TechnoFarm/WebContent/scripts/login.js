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
	
	if(bool){
		alert("vero");
		return true;
	}else{
		avvisa("Email o password errate");
		alert("falso");
		return false;
	}
}

