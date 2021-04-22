fetch("http://localhost:3000/api/cameras")
.then(data => data.json())
    .then(jsonListCamera => {
        for (let jsonCamera of jsonListCamera) {
            document.querySelector(".produits__page").innerHTML += `<div class="product col-12 col-md-6 col-lg-3">
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
    });