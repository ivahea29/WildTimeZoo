function clearForm(bookingform){
    bookingform.reset();
}

function validateForm(){
    let x = document.forms["bookingform"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}