document.forms["registration"].addEventListener("submit",function(e) {

    let error;
    let inputs = this;
    console.log(inputs)
        for(let i=0; i< inputs.length; i++){
            if (!inputs[i].value){
                error = "Veillez renseigner tous les champs";
            }
        }

        if (error) {
            e.preventDefault();
            document.getElementById("error").innerHTML = error;
            return false;
        } else {
            alert('Formulaire envoyé');
        }
       
});