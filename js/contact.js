response = 'response';
let product_id = new Array;

for (const [cameraId,quantity] of Object.entries(localStorage) ){
    product_id.push(cameraId);
};


document.forms["registration"].addEventListener("submit",function(e) {

    let error;
    let inputs = this;

        // Validation of all fields filled in
        for(let i=0; i< inputs.length; i++){
            if (!inputs[i].value){
                error = "Veillez renseigner tous les champs";
            }
        }

        // Checking the contents of the basket
        if ( product_id == 0 ){
            error = "Veillez ajouter un article à votre panier";
        }

        if (error) {
            e.preventDefault();
            document.getElementById("error").innerHTML = error;
            return false;
        } else {

            e.preventDefault();

            const data = {
                contact: {
                    firstName : inputs.firstname.value,
                    lastName : inputs.lastname.value,
                    address : inputs.adress.value,
                    city : inputs.city.value,
                    email : inputs.email.value
                    },
                products : product_id
                };
            // Send form and object to API
            fetch("http://localhost:3000/api/cameras/order",{
                method:'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify(data),
            })
            // Retrieve the response from the API and send to the localstorage
            .then(response => response.json())
            .then(data =>{
                let stringData = JSON.stringify(data);
                localStorage.setItem(response,stringData);
                document.location.href='../../view/orderValidation/orderValidation.html';
            })
            .catch((error) =>{
                console.error('Error:',error);
            })
        }
});



document.forms["registration"].addEventListener("input",function(e) {

    //regex lastname
    let inputs = this;
    let lastName = inputs.lastname;
    let RegExp = /^([A-Za-zéèêëïä]{1,20})?([' -]{0,1})?([A-Za-zéèêëïä.]{1,20})$/;

    lastName.addEventListener('input',function() {
        validLastName(this);
    });
    const validLastName = function(lastName){

        let small = document.getElementById('lastname');

        if (RegExp.test(lastName.value)){
            small.innerHTML = ' ';
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
            small.innerHTML = ' ';
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
            small.innerHTML = ' ';
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }

    //regexp adress
    let adressRegExp = /^([0-9]{1,4})?[ ]?([A-Za-zéèêëïäà '.-]{3,70})$/;
    let adress = inputs.adress;
  
    adress.addEventListener('input',function() {
        validadress(this);
    });
    const validadress = function(adress){

        let small = document.getElementById('adress');

        if (adressRegExp.test(adress.value)){
            small.innerHTML = ' '
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
      }  

    //regexp e.mail
    let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let email = inputs.email;

    email.addEventListener('input',function() {
        validemail(this);
    });
    const validemail = function(email){

        let small = document.getElementById('email');

        if (emailRegExp.test(email.value)){
            small.innerHTML = ' ';
            small.classList.remove('text-danger');
        } else {
            small.innerHTML = 'champs invalide';
            small.classList.add('text-danger');
        }
    }
});