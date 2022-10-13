let btnnn=document.querySelectorAll(".btnnn");
let printt =document.getElementById("pp");
let but = document.getElementById("but");
let price = 0;
let sound = new Audio("./audio/coin.mp3");
btnnn.forEach(function(item){
item.onclick = function() {
    printt.innerHTML += item.title + "...";
    printt.style.display="block";
    but.style.display="block";
    price += parseInt(item.getAttribute("pricee"));
    sound.play();
}
})
but.onclick = function () {
    printt.innerHTML=price + " ";
}