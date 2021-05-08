const idCamera = new URLSearchParams(window.location.search);
const id = idCamera.get('id');
let quantity = document.getElementById('quantity');
let quantityCamera = localStorage.getItem(id) == null ? 1 : localStorage.getItem(id);
quantity.innerHTML = quantityCamera;

fetch("http://localhost:3000/api/cameras/"+ idCamera.get('id') )
.then(data => data.json())
.catch((error) => {
    console.log(error);
})
.then(jsonCamera => {
    document.querySelector(".produit__page").innerHTML += `<div class="row col-12 col-lg-12">
                                                                    <img src="${jsonCamera.imageUrl}" class="col-lg-6">
                                                                    <div class="col-lg-6">
                                                                    <h1 class="card-title d-flex justify-content-between">${jsonCamera.name}</h1>
                                                                    <p class="card-text">${jsonCamera.price/100 + ',00' + ' ' + "\u20ac"}</p>
                                                                    <p class="card-text">${jsonCamera.description}</p>
                                                                </div>
                                                            </div>
                                                            `;
    for (let jsonlense of jsonCamera.lenses) {
        document.querySelector(".option__lense").innerHTML += `<option>${jsonlense}</option><br>
                                                            `;
    };                                                        
})
.catch((error) => {
    console.log(error);
});

document.getElementById('del__quantity').addEventListener('click',e =>{
    if (parseInt(quantity.innerHTML) >= 2) {
        quantity.innerHTML = parseInt(quantity.innerHTML) -1;
        quantityCamera = parseInt(quantity.innerHTML)
    }
});
document.getElementById('add__quantity').addEventListener('click',e =>{
    quantity.innerHTML = parseInt(quantity.innerHTML) +1;
    quantityCamera = parseInt(quantity.innerHTML)
});
document.getElementById('getelement').addEventListener('click',e =>{
    localStorage.setItem(idCamera.get('id'),quantityCamera);
});
