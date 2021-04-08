fetch("https://ab-p5-api.herokuapp.com/api/cameras")
.then(data => data.json())
    .then(jsonListCamera => {
        for (let jsonCamera of jsonListCamera) {
            document.querySelector(".produits__page").innerHTML += `<div class="col-12 col-lg-3">
                                                                        <div class="card article">
                                                                            <img src="${jsonCamera.imageUrl}" class="card-img-top">
                                                                            <div class="card-body">
                                                                                <h5 class="card-title d-flex justify-content-between">${jsonCamera.name}</h5>
                                                                                <p class="card-text">${jsonCamera.price/100 + ',00' + ' ' + "\u20ac"}</p>
                                                                                <a href="../product/product.html?id=${jsonCamera._id}" >en savoir plus</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    `;
        };
    });