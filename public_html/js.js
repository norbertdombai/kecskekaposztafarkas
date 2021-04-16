window.addEventListener("load",init);

function init() {
    $("#k")[0].addEventListener("mouseover",kiemel);
    $("#k")[0].addEventListener("mouseout",kiemelLe);
    $("#kp")[0].addEventListener("mouseover",kiemel1);
    $("#kp")[0].addEventListener("mouseout",kiemelLe1);
    $("#f")[0].addEventListener("mouseover",kiemel2);
    $("#f")[0].addEventListener("mouseout",kiemelLe2);
    $("#k")[0].addEventListener("click",eltuntet);
    $("#kp")[0].addEventListener("click",eltuntet1);
    $("#f")[0].addEventListener("click",eltuntet2);
    
}

function kiemel() {
    $("#k")[0].classList.add("kiemel");
}

function kiemel1() {
    $("#kp")[0].classList.add("kiemel");
}

function kiemel2() {
    $("#f")[0].classList.add("kiemel");
}

function $(nev) {
    return document.querySelectorAll(nev);
    
}

function kiemelLe() {
    $("#k")[0].classList.remove("kiemel");
    
}

function kiemelLe1() {
    $("#kp")[0].classList.remove("kiemel");
    }
function kiemelLe2() {
    $("#f")[0].classList.remove("kiemel");
    }


function eltuntet() {
    $("#k")[0].classList.add("eltuntet");

}


function eltuntet1() {

    $("#kp")[0].classList.add("eltuntet");
}


function eltuntet2() {
    $("#f")[0].classList.add("eltuntet");
}