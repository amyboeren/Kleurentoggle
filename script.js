var backgroundRed = document.getElementById("changeToRed");

backgroundRed.addEventListener("click", function () {

    document.body.classList.toggle("colorred");

});

var backgroundYellow = document.getElementById("changeToYellow");

backgroundYellow.addEventListener("click", function () {

    document.body.classList.toggle("coloryellow");

});

var backgroundBlue = document.getElementById("changeToBlue");

backgroundBlue.addEventListener("click", function () {

    document.body.classList.toggle("colorblue");

});

var backgroundGreen = document.getElementById("changeToGreen");

backgroundGreen.addEventListener("click", function () {

    document.body.classList.toggle("colorgreen");

});

var backgroundPurple = document.getElementById("changeToPurple");

backgroundPurple.addEventListener("click", function () {

    document.body.classList.toggle("colorpurple");

});

/*function toggleMenu() {
    var menuBox = document.getElementsByClassName('menu_box');
    if (menuBox.style.display == "block") {
        menuBox.style.display = "none";
    }
    else {
        menuBox.style.display = "block";
    }
}
/*Als ik de function Togglemenu toepas op een ID in de UL, dus met var menuBox = document.getElementByID('menu-box') en een extra ID = "menu-box" in de UL naast de classname
dan gaat het alsnog fout. Je klikt dan op het menu en de optie Red, de achtergrond verandert in rood en als je nog een keer klikt, verdwijnt het menu. Maar het menu kan ik dan niet
meer tevoorschijn halen. Hier zit een fout, die ik niet kan achterhalen.
Voor nu heb ik dus het verdwijnen van het menu achterwege gelaten, zodat je wel op alle kleuren kunt klikken om de achtergrond te veranderen.*/



