"use strict";
console.log("Le code JS s'exécute !");

/**************Function NavBar**********/
/**************Ne fonctionne pas pour l'instant fixer le reste du code JS avant de pleurer***/
function navbarSetActive (){
    $(".nav li").click(function(){
        console.log("in function");
        $(".nav li").removeClass("active");
        $(this).addClass("active");});
}

$(window.document).ready(function(){
    // Because it's funny 
    console.log("in ready function");
    navbarSetActive();
});