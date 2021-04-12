//validation of all fields filled in
document.forms["registration"].addEventListener("submit",function(e) {

    let error;
    let inputs = this;

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

document.forms["registration"].addEventListener("input",function(e) {

    //regex lastname
    let inputs = this;
    let lastName = inputs.lastname;
    let RegExp = /^[A-Za-zéèêëïä' -]+[A-Za-zéèêëïä]$/;

    lastName.addEventListener('input',function() {
        validLastName(this);
    });
    const validLastName = function(lastName){
        
        let small = document.getElementById('lastname');

        if (RegExp.test(lastName.value)){
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }

    //regex firstname
    let firstName = inputs.firstname;

    firstName.addEventListener('input',function() {
        validFirstName(this);
    });
    const validFirstName = function(firstName){
        
        let small = document.getElementById('firstname');

        if (RegExp.test(firstName.value)){
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }

    //regexp city
    let city = inputs.city;

    city.addEventListener('input',function() {
        validCity(this);
    });
    const validCity = function(city){
        
        let small = document.getElementById('city');

        if (RegExp.test(city.value)){
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }

    //regexp e.adress
    let adressRegExp = /^[0-9A-Za-zéèêëïä' -]+[0-9A-Za-zéèêëïä]$/;
    let adress = inputs.adress;

    adress.addEventListener('input',function() {
        validemail(this);
    });
    const validemail = function(adress){
        
        let small = document.getElementById('adress');

        if (adressRegExp.test(adress.value)){
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }

    //regexp e.mail
    let emailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let email = inputs.email;

    email.addEventListener('input',function() {
        validemail(this);
    });
    const validemail = function(email){
        
        let small = document.getElementById('email');

        if (emailRegExp.test(email.value)){
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }
});