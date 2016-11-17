var link = document.querySelector(".search-btn");
      
var popup = document.querySelector(".search-container");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("search-modal");
});