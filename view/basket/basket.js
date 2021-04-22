
fetch("http://localhost:3000/api/cameras")
.then(data => data.json())
    .then(jsonListCamera => {
        if(localStorage.length == 0){
            document.querySelector('.produit__page').innerHTML += `<div class="text-center col-12 col-lg-5">
                                                                        <h2>Votre panier est vide</h2>
                                                                    </div>
                                                                    `;
        }else {
            let total=0;
            for (const [cameraId,quantity] of Object.entries(localStorage) ){
                for (let jsonCamera of jsonListCamera) {
                    if (cameraId == jsonCamera._id) {
                        document.querySelector('.produit__page').innerHTML +=`<div class="col-12 col-md-6 col-xl-3 py-3">
                                                                                <div class="card article">
                                                                                    <img src="${jsonCamera.imageUrl}" class="card-img-top">
                                                                                    <div class="card-body">
                                                                                        <h5 class="card-title d-flex justify-content-between">${jsonCamera.name}</h5>
                                                                                        <div class"block" id="quantity">quantitée : ${quantity}</div>
                                                                                        <p class="card-text">montant : ${jsonCamera.price*quantity/100 + ',00' + ' ' + "\u20ac"}</p>
                                                                                        <a href="../../view/product/product.html?id=${jsonCamera._id}" >retour à la page article</a><br>
                                                                                        <input onclick="deleteCamera('${cameraId}')" type="button" value="supprimer l'article">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            `;
                        total += jsonCamera.price*quantity;
                        document.querySelector('.total').innerHTML = `Total de votre commande : ${total/100 + ',00' + ' ' + "\u20ac"}`
                    }
                }
                
            }
        }
    });
