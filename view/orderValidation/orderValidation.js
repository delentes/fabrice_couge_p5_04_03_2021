// Variable declaration
let data = JSON.parse(localStorage.response)
let total = 0;

for (const [cameraId,quantity] of Object.entries(localStorage) ){
    for (products of data.products){
        if (cameraId == products._id) {
            // Display of the total price of the order
            total += products.price*quantity;
            document.querySelector('.total').innerHTML = `total de votre commande : ${total/100 + ',00' + ' ' + "\u20ac"}`
        }
    }
}
// Display of the order id
document.querySelector(".validation").innerHTML =`  <div>
                                                        <p>identifiant de commande:${data.orderId}</p>
                                                    </div>
                                                    `;

// Returns tothe home page
document.getElementById('confirmation').addEventListener('click',e =>{
    document.location.href='../../view/home/index.html';
})
// Deletion of localstorage
localStorage.clear();