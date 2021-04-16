window.addEventListener("load",init);

function init() {
    $("#bal p")[0].addEventListener("mouseover",kiemel);
    $("#bal p")[0].addEventListener("mouseout",kiemelLe);
    
}

function kiemel() {
    $("#bal p")[0].classList.add("kiemel");
}

function $(nev) {
    return document.querySelectorAll(nev);
    
}

function kiemelLe() {
    $("#bal p")[0].classList.remove("kiemel");
}

