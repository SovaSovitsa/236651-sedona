var btn = document.querySelector(".search-btn");
var search = document.querySelector(".search-container");

search.classList.remove("form-show"); 

btn.addEventListener("click", function (event) {
    event.preventDefault();
    search.classList.toggle("form-show");
});