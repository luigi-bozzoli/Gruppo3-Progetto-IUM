var emailU;
var passwordU;


function logout(){
	
	localStorage['login'] = 'false';
	location.replace("index.html");
}

function leMieSerre(){
	location.replace("index.html");
}


function mostraBottoni(){
	$('#modificaEmail').css('display', 'block');
	$('#modificaPassword').css('display', 'block');
	$('#confermaModifiche').css('display', 'inline');
	$('#liEmail').css('display', 'none');
	$('#liPassword').css('display', 'none');

}

function confermaDati(){
	var emailU =$("#inputEmail").val();
	var passwordU = $("#inputPassword").val();

	$("#emailUtente").text(emailU);
	$("#passwordUtente").text(passwordU);

	$('#modificaEmail').css('display', 'none');
	$('#modificaPassword').css('display', 'none');
	$('#confermaModifiche').css('display', 'none');
	$('#liEmail').css('display', 'block');
	$('#liPassword').css('display', 'block');

}
