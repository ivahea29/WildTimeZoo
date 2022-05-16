function clearForm(bookingform){
    bookingform.reset();
}

function validDateCheck(cardExp){
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

    if (cardExp === "" || cardExp < today || cardExp === today){
        return false;
    }else{
        return true;
    }

}

function dateInput() {
    var cardExp = document.getElementById("cardExp").value;

    if (cardExp !== ""){
        var validDate = validDateCheck(cardExp);

        if (cardExp !== ""){
            var validDate = validDateCheck(cardExp);
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
function getPrice(type){
    var obj = document.getElementById(type);
    var price = obj.options[obj.selectedIndex].getAttribute("pricevalue");
    if(price == null)
        price = 0;
    return parseInt(price);
}
function updatePrice(){
    document.getElementById("price").innerHTML = "Total: $" + (getPrice("daypass"));
    document.getElementById("price").innerHTML = "Total: $" + (getPrice("annualpass") + getPrice("daypass"));
}

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

