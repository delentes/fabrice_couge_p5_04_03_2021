var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);        
        document.getElementById("namecam1").innerHTML = response[0].name;
        document.getElementById("pricecam1").innerHTML = response[0].price/100 +","+ "00"+" "+ "\u20ac";
        document.getElementById("namecam2").innerHTML = response[1].name;
        document.getElementById("pricecam2").innerHTML = response[1].price/100 +","+ "00"+" "+ "\u20ac"
        document.getElementById("namecam3").innerHTML = response[2].name;
        document.getElementById("pricecam3").innerHTML = response[2].price/100 +","+ "00"+" "+ "\u20ac"
        document.getElementById("namecam4").innerHTML = response[3].name;
        document.getElementById("pricecam4").innerHTML = response[3].price/100 +","+ "00"+" "+ "\u20ac";
        document.getElementById("namecam5").innerHTML = response[4].name;
        document.getElementById("pricecam5").innerHTML = response[4].price/100 +","+ "00"+" "+ "\u20ac";
        console.log(response);
        var id = document.getElementById("5be1ed3f1c9d44000030b061");
        id.addEventListener('click', function(e) {
            document.getElementById("namecam").innerHTML = response[0].name;
        })
    }
}
request.open("GET","http://localhost:3000/api/cameras/",true);
request.send();

