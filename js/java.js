 
var allProducts = document.querySelectorAll(".d1 h2")
var div = document.querySelector(".tot")
var btn1 = document.querySelector(".btn1")
var totalPrisef =document.querySelector(".total")
var totalPrise =0
allProducts.forEach(function(item){
        item.onclick = function (){
            div.innerHTML += item.textContent + "  "
            totalPrise +=  +(item.getAttribute("price"))
        }  
})
btn1.onclick = function (){
    totalPrisef.innerHTML=(totalPrise)
}