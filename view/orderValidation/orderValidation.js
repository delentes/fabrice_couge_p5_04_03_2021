let data = JSON.parse(localStorage.response)
let total = 0;

for (const [cameraId,quantity] of Object.entries(localStorage) ){
    for (products of data.products){
        if (cameraId == products._id) {
            total += products.price*quantity;
            document.querySelector('.total').innerHTML = `total de votre commande : ${total/100 + ',00' + ' ' + "\u20ac"}`
        }
    }
}
    
document.querySelector(".validation").innerHTML =`  <div>
                                                        <p>identifiant de commande:${data.orderId}</p>
                                                    </div>
                                                    `;

document.getElementById('confirmation').addEventListener('click',e =>{
    document.location.href='../../view/home/index.html';
})
localStorage.clear();