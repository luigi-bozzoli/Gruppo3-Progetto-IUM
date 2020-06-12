/**
 * 
 */
var email;
var password;

function mostraBottoni(){
	$('#modificaEmail').css('display', 'block');
	$('#modificaPassword').css('display', 'block');
	$('#confermaModifiche').css('display', 'inline');
	$('#liEmail').css('display', 'none');
	$('#liPassword').css('display', 'none');
	
}

function confermaDati(){
	var email =$("#inputEmail").val();
	var password = $("#inputPassword").val();
	
	$("#emailUtente").text(email);
	$("#passwordUtente").text(password);
	
	$('#modificaEmail').css('display', 'none');
	$('#modificaPassword').css('display', 'none');
	$('#confermaModifiche').css('display', 'none');
	$('#liEmail').css('display', 'block');
	$('#liPassword').css('display', 'block');
	
	
}

