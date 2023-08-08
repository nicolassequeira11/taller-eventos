const container = document.querySelector("#container");
const button = document.querySelector("#button");

button.addEventListener("click", function(){
    alert("Hola!");
});

container.addEventListener("click", function(){
    alert("Hola! Soy el div");
});

