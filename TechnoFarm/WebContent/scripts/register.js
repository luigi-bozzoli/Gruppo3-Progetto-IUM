/**
 * 
 */
var bemail = false;
var bpassword = false;
var reppassword= false;

function avviso(id,mex){
    $("#"+id).html(mex);
    $("#"+id).fadeIn("slow");
    $("#"+id).delay(1000).fadeOut("slow");
}

function controlla(){
    verificaEmail();
    verificaPassword();
    verificaPassword2();
}

function verificaEmail()
{
    var email=$("input[name=email]").val();
    if(email.length==0){
        avviso("erroreRegmail","Il campo è obbligatorio");
        bemail= false;
        return;
    }
    var emailV=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w+)+$/;
    if(String(email).match(emailV))
    {
        bemail= true;
    }
    else
    {
        avviso("erroreRegmail","La mail non rispetta i canoni");
        bemail= false;
    }
}

function verificaPassword()
{

    var pass=$("input[name=password]").val();
    if(pass.length==0){
        avviso("erroreRegpass","Il campo non può essere nullo");
        bpassword= false;
        return;
    }
    if(pass.length > 20){
        avviso("erroreRegpass","La lunghezza deve essere inferiore a 20");
        bpassword= false;
        return;
    }
    var passv=/^[0-9a-zA-Z]+$/;
    if(String(pass).match(passv))
    {
        bpassword=true;
    }
    else
    {
        avviso("erroreRegpass","La password non rispetta i canoni");
        bpassword=false;
    }
}

function verificaPassword2()
{
    var pass=$("input[name=defaultForm-password]").val();
    var pass2=$("input[name=defaultForm-password2]").val();
    if(String(pass).match(pass2)){
        bpassword=true;
    }else{
        avviso("erroreRegpass2","La password non corrisponde");
        bpassword=false;
    }
}