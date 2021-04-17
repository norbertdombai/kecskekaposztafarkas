window.addEventListener("load",init);

function $(nev) {
    return document.querySelectorAll(nev);
    
}

function init() { 
    for (var i = 0; i < 3; i++) {
        $("#bal img")[i].addEventListener("mouseover",kiemel);
        $("#bal img")[i].addEventListener("mouseout",kiemelLe);
        $("#bal img")[i].addEventListener("click",eltuntet);
    }}
    

function kiemel() {
   this.classList.add("kiemel");
}

function kiemelLe() {
   this.classList.remove("kiemel");
    
}


function eltuntet() {
    this.classList.add("eltuntet");

}
