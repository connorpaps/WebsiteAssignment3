/*
Name: Connor Papas
ID: 160517199
Date: December 12, 2020
WEB222 Assignment 3 Website

WEBSITE CHOSEN: https://www.themoviedb.org/

My Website Hosted Link: https://connorpweb222a3project.netlify.app/
*/

/*FOR ASSIGNMENT 3 */
/*Movie Details Modal*/

// For first movie titled "The Croods"
const modal1 = document.querySelector(".modal1");
const modallink1 = document.querySelector(".modal-link-1");
// when the movie area is clicked, it removes the hide property
// which shows the movie details
modallink1.addEventListener("click", ()=> {
    modal1.classList.remove("hide");
});
// to hide the modal when clicking after its opened
modal1.addEventListener("click", ()=> {
    // add the hide property back to hide the details on second click
    modal1.classList.add("hide");
});

// For second movie titled "Come Away"
const modal2 = document.querySelector(".modal2");
const modallink2 = document.querySelector(".modal-link-2");

modallink2.addEventListener("click", ()=> {
    modal2.classList.remove("hide2");
});

modal2.addEventListener("click", ()=> {
    modal2.classList.add("hide2");
});

