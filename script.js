//alert("hej med dig");


window.addEventListener("load", sidenVises);


//alert("javascript kører");



function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    showStart()

}

function showStart() {
    console.log("showStart");
    //vis startskærm -
    document.querySelector("#start").classList.remove("hide");
    //start animation på start knap
    document.querySelector("#play").classList.add("#pulse");

    //når man trykker på knappen
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hideStart");
    //stop animation
    document.querySelector("#play").classList.remove("pulse");
    //fade ud skærm
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startgame);
    start()



}

function startgame() {
    console.log("startgame");
    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vis spilleskærm

}




//NÅR SPILLET GÅR IGANG


function start() {
    console.log("start");
    document.querySelector("#like1").classList.add("falling");
    document.querySelector("#like2").classList.add("falling");
    document.querySelector("#like3").classList.add("falling");
    document.querySelector("#like4").classList.add("falling");
    document.querySelector("#like5").classList.add("falling");
    document.querySelector("#sur1").classList.add("falling");
    document.querySelector("#sur2").classList.add("falling");
    document.querySelector("#sur3").classList.add("falling");
    document.querySelector("#sur4").classList.add("falling");



}

console.log("klik");
document.querySelector("#like1").addEventListener("click", clickLike);
document.querySelector("#sur1").addEventListener("click", clickSur);



function likeForsvind() {
    console.log("likeForsvind");
    document.querySelector("#like1").classList.add("pasued");
    document.querySelector("#like1 .like_sprite").classList.add("dissappear");



}


let point = 0;

function clickLike() {
    console.log("click like");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}



function clickSur() {
    console.log("click sur");
    let liv = 3;
    liv--;
    console.log(liv);
    let heart = "#liv3" + liv;
    document.querySelector("#liv3").classList.add("fade_out");
}
