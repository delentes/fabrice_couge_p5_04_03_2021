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
            small.innerHTML = 'champs valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.remove('text-success');
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
            small.innerHTML = 'champs valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.remove('text-success');
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
            small.innerHTML = 'champs valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.remove('text-success');
            small.classList.add('text-danger');
        }
    }

    //regexp e.mail
    let emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let email = inputs.email;

    email.addEventListener('input',function() {
        validemail(this);
    });
    const validemail = function(email){
        
        let small = document.getElementById('email');

        if (emailRegExp.test(email.value)){
            small.innerHTML = 'champs valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.remove('text-success');
            small.classList.add('text-danger');
        }
    }
});