function clearForm(bookingform){
    bookingform.reset();
}

function validateForm()
{  
    if(document.bookingform.fname.value == "")
    {
    alert("Please enter your Name!");
    document.bookingform.fname.focus();
    return false;
    }
    if(document.bookingform.ph_num.value == "")
    {
    alert("Please enter a valid Phone number!");
    document.bookingform.ph_num.focus();
    return false;
    }
    if(document.bookingform.email.value == "")
    {
    alert("Please enter a valid Email!");
    document.bookingform.email.focus();
    return false;
    }
    return( true );
}

function validateEmail()
{
   var emailID = document.myForm.EMail.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct Email!")
       document.myForm.EMail.focus() ;
       return false;
   }
   return( true );
}

/*
{
    let x = document.forms["bookingform"]["fname"].value;
    if (x==null || x=="")
    {
        alert("Name must be filled out");
        return false;
    }
    var y=document.forms["bookingform"]["ph_num"].value;
    if (y==null || y=="") {
        alert("Phone number must be filled out");
        return false;
    }
    if( document.myForm.email.value == "" )
    {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
    }

    return( true );

}

*/
