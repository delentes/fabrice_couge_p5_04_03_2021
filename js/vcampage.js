const idCamera = new URLSearchParams(window.location.search)
fetch("http://localhost:3000/api/cameras/"+ idCamera.get('id') )
    .then(data => data.json())
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
        });
          
let quantity = document.getElementById('quantity')
document.getElementById('add__quantity').addEventListener('click',e =>{
    quantity.innerHTML = parseInt(quantity.innerHTML) +1
    });
document.getElementById('del__quantity').addEventListener('click',e =>{
        quantity.innerHTML = parseInt(quantity.innerHTML) -1
    });
