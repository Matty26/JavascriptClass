valid=true;

let letters=/^[a-zA-Z]+$/;
let numbers=/^[0-9]+$/;
let email=document.order_form.user_email.value;
let invalid = [];

if (document.order_form.first_name.value.search(letters)==-1){
invalid.push("*First Name")
}   

if (document.order_form.surname.value.search(letters)==-1){
invalid.push("*Surname Name")
}

if (email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2 
|| email.lastIndexOf(".")+2>=email.length){
invalid.push("*Email")
}

if (invalid.length != 0)
{alert("Please provide response: \n" + invalid.join("\n") ); 
    valid = false;
    invalid = [];}


return valid;}