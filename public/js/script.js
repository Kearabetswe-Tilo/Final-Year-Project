
function Admin_confirm(btnId) {
    var text_Voltage = document.getElementById('_Voltage').value;
    var text_Current = document.getElementById('_Current').value;
    var text_Wind = document.getElementById('_Wind').value;
    var text_Energy = document.getElementById('_Energy').value;
    var spliting;
    switch (btnId) {
        case "btnVoltage":
            if(text_Voltage=="")return;
            spliting = text_Voltage.split(/[\s,\s-]+/);
            var i;
            for (i = 0; i < spliting.length; i++) {
                //TO DO
                document.getElementById("vp").innerHTML=text_Voltage+" saved on the database for Voltage output";
                console.log(spliting[i]);}
                break;

        case "btnCurrent":
            if(text_Current=="")return;
            spliting = text_Current.split(/[\s,\s-]+/);
            var i;
            for (i = 0; i < spliting.length; i++) {
                //TO DO
                document.getElementById("vc").innerHTML=text_Current+" saved on the database for Current output";
                console.log(spliting[i]);}
                break;

        case "btnWind":
            if(text_Wind=="")return;
            spliting = text_Wind.split(/[\s,\s-]+/);
            var i;
            for (i = 0; i < spliting.length; i++) {
                //TO DO
                document.getElementById("vw").innerHTML=text_Wind+" saved on the database for Wind-Speed output";
                console.log(spliting[i]);}
                break;

        case "btnEnergy":
            if(text_Energy=="")return;
            spliting = text_Energy.split(/[\s,\s-]+/);
            var i;
            for (i = 0; i < spliting.length; i++) {
                //TO DO
                document.getElementById("ve").innerHTML=text_Energy+" saved on the database for Energy output";
                console.log(spliting[i]);
            }

    }

}
    
function PasswordMatch(btnr){
    var password11=document.getElementById('password1').value;
    var password22=document.getElementById("password2").value;
    switch (btnr){
        case "btnRegister":
            if(password11!=password22){
                document.getElementById("pConfirm").innerHTML="Passwords dont match";
            }
            else if (password11 =="" && password22==""){ 
                      return false;
            }
            else if(password11==password22){
                //TO DO
                window.location="home.html";
            }
            break;
            case "btnCancel":
                window.close();
    }
    

}
function HomeButton(Hbtn){
    if(Hbtn=="LObutton"){
        //TO DO for logout button the system will logout
        window.location="login.html";
    }
}
function LoginButton(Lbtn){
    if(Lbtn=="Login_cancel_btn"){
        window.close();
    }
}