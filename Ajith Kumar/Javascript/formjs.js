
function checkAll() {

    let ufname = document.myform.fname.value;

    let uedu = document.myform.edu;
    

    // window.alert(typeof(uedu));

    const regName = "^[a-zA-Z]{3,15}$";

    if (ufname.trim() === "") {
        window.alert("Name field is required");
        return false;
    }

    if (!ufname.trim().match(regName)) {
        window.alert("user name must contain only character min-3 and max - 15");
        return false;
    }

    const [ed1, ed2, ed3, ed4] = uedu;
    if (ed1.checked == false && ed2.checked == false && ed3.checked == false && ed4.checked == false) {
        window.alert("Please select atleast One Course");
        return false;
    }

    // for email validation 

    let uemail = document.myform.uemail.value;
    const regemail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    console.log(uemail+"  jihioj")
    if (uemail.trim() === "") {
        console.log("hi")
        window.alert("Email field is required");
        return false;
    } 
    
    if (!uemail.trim().match(regemail)) {
        window.alert("user email must be valid eg : abc@gmail.com");
        return false;
    }

return false
}

function checkData(data) {


    switch (data) {

        case "name":
            let ufname = document.myform.fname.value;
            let regName = "^[a-zA-Z]{3,15}$";

            if (ufname.trim() === "") {
                console.log("hi")
                document.getElementById("errorName").innerHTML = "* Name field is required"
                return false;
            } else if (!ufname.trim().match(regName)) {
                document.getElementById("errorName").innerHTML = "* user name must contain only character min-3 and max - 15"

                return false;
            } else {
                document.getElementById("errorName").innerHTML = null;
            }
            break;

        case "email":
            let uemail = document.myform.uemail.value;
            const regemail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";


            if (uemail.trim() === "") {
                console.log("hi")
                document.getElementById("erroeEmail").innerHTML = "* email field is required";
                return false;
            } else if (!uemail.trim().match(regemail)) {
                document.getElementById("erroeEmail").innerHTML = "* user email must be valid eg : abc@gmail.com";
                return false;
            } else {
                document.getElementById("erroeEmail").innerHTML = null;
            }
            break;

    }

}