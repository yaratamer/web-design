var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCatgory = document.getElementById("productCatgory");
var productDesc = document.getElementById("productDesc");

var productContainer = [];
function addProduct() {
    if (validateProduct()) {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCatgory.value,
            desc: productDesc.value
        }
        productContainer.push(product)
        console.log(productContainer)
        displayProduct()
        clearForm()
    }

    else {
    alert("required")
}
}
function clearForm() {
    productName.value = "",
        productPrice.value = "",
        productCatgory.value = "",
        productDesc.value = ""
}
function displayProduct() {
    var cartona = "";
    for (var i = 0; i < productContainer.length; i++) {
        cartona += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td>
            <button class="btn btn-warning"> 
                update
            </button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteProduct(${i})"> 
                delete
            </button>
        </td>
    </tr>
`
    }
    document.getElementById("tableBody").innerHTML = cartona;
}
function deleteProduct(index) {
    productContainer.splice(index, 1)
    displayProduct()
}
function validateProduct() {
    if (productName.value != "" && productPrice.value != "" && productCatgory.value != "" && productDesc.value != "") {
        return true;
    }
    else {
        return false
    }
}