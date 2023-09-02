function calculatetotal() {
    
    var sugarPrice = document.getElementById("sugarprice").value;
    var sugarQuantity = document.getElementById("sugarquan").value;
    let sugarTotal = sugarPrice * sugarQuantity ;
    document.getElementById("sugartotal").textContent = sugarTotal;
    
    var honeyprice = document.getElementById("honeyprice").value;
    var honeyquan = document.getElementById("honeyquan").value;
    let honeyTotal = honeyprice * honeyquan ;
    
    document.getElementById("honeytotal").textContent = honeyTotal;
    
    document.getElementById("total").textContent = sugarTotal + honeyTotal;
    
    

}

function addItems() {

    let isShirtChecked = document.getElementById.checked;
    console.log(isShirtChecked);
    if (isShirtChecked) {
        let shirt = document.getElementById("shirt").value;
        let rowShirt = document.getElementById("shirtrow");
        const newShirt = document.createElement("td");
        newShirt.textContent = "Shirt"
        
        document.getElementById("shirtrow").appendChild(newShirt);
        }

}

