main()

async function main () {
    const produits = await getProduits()
    console.log(produits)
    displayProduits(produits)
}

function getProduits () {
    return fetch("http://localhost:3000/api/cameras/")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    })
    .then(function(produits){
        
    })
    .catch(function(error) {
        alert(error)
    })
}

function displayProduits () {

}