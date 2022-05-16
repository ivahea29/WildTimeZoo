// clear form function

function clearForm(bookingform){
    bookingform.reset();
}
// date validation function

function validDateCheck(cardExp){
    //get todays date for comparison to date input.
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if(dd < 10) {
        dd = '0' + dd;
    }

    if(mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    // if the card exp date is null, less than or equal to todays date return false. or else return true.
    if (cardExp === "" || cardExp < today || cardExp === today){
        return false;
    }else{
        return true;
    }

}

// date input function
function dateInput() {
    var cardExp = document.getElementById("cardExp").value; // get card expiration value

    if (cardExp !== ""){
        var validDate = validDateCheck(cardExp);

        // if card exp is not null then assign that value to the variable
        if (cardExp !== ""){
            var validDate = validDateCheck(cardExp);

            // if the date is not valid then display error message
            if(!validDate){
                document.getElementById("errorMessage").style.display = "block";
            }else{
                document.getElementById("errorMessage").style.display = "none";
            }

            if (cardExp !== ""){
                validDate = validDateCheck(cardExp);
                if (validDate){
                    document.getElementById("errorMessage").style.display = "none";
                }else{
                    document.getElementById("errorMessage").style.display = "block";
                }
            }  
        }
    }
}
// get values dependant on which ticket is input

function getPrice(type){
    var obj = document.getElementById(type);
    var price = obj.options[obj.selectedIndex].getAttribute("pricevalue");
    if(price == null)
        price = 0;
    return parseInt(price);
}
// update price function as ticket types are input and display according to values
function updatePrice(){
    document.getElementById("price").innerHTML = "Total: $" + (getPrice("daypass"));
    document.getElementById("price").innerHTML = "Total: $" + (getPrice("annualpass") + getPrice("daypass"));
}

// final submit function to validate all inputs and clear form once purchased.

function submitForm(){
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("ph_num").value;
    var email = document.getElementById("email").value;
    var daypass = document.getElementById("daypass").value;
    var cardExp = document.getElementById("cardExp").value;
    var cardname = document.getElementById("cardname").value;
    var cardnum = document.getElementById("cardnum").value;
    var cvv = document.getElementById("cvv").value;
    var termcond = document.getElementById("termcond").value;

    if(fname === "" || phone === "" || email === "" || daypass === "" || annualpass === "" || cardname === "" || cardExp === "" || cardnum === "" || cvv === "" || termcond === checked){
        alert("Form incomplete.");
    }else{
        alert("Thank you for your purchase!");
        clearForm();
    }
}

