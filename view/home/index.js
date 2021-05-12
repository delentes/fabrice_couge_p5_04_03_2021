// API call
fetch("http://localhost:3000/api/cameras")
// Converting data to json format
.then(data => data.json())
.catch((error) => {
    console.log(error);
    // Management in the event of no response from the API
    document.querySelector(".produits__page").innerHTML += `<div class="text-center col-12">
                                                                <h2>Site indisponible pour le moment</h2>
                                                            </div>
                                                            `;
})
// Display of each object transmitted by the API
    .then(jsonListCamera => {
        for (let jsonCamera of jsonListCamera) {
            document.querySelector(".produits__page").innerHTML += `<div class="product col-12 col-md-6 col-lg-4 col-xl-3">
                                                                        <div class="card article">
                                                                            <img src="${jsonCamera.imageUrl}" class="card-img-top" height="250">
                                                                            <div class="card-body">
                                                                                <h5 class="card-title d-flex justify-content-between">${jsonCamera.name}</h5>
                                                                                <p class="card-text">${jsonCamera.price/100 + ',00' + ' ' + "\u20ac"}</p>
                                                                                <a href="../product/product.html?id=${jsonCamera._id}" >Acc\u00E9d\u00E9 \u00E0 l'article</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    `;
        };
    })
    .catch((error) => {
        console.log(error);
    });