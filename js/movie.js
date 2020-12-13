/*
Name: Connor Papas
ID: 160517199
Date: December 12, 2020
WEB222 Assignment 3 Website

WEBSITE CHOSEN: https://www.themoviedb.org/

My Website Hosted Link: https://connorpweb222a3project.netlify.app/
*/

/*FOR FINAL ASSESSMENT - IGNORE FOR ASSIGNMENT 3*/
/*Function to show the order number field when the order problem radio button is clicked*/
function orderClicked() {
    if (document.getElementById("problem").checked) {
        document.querySelector(".order-problem").style.display = "block";
        /*Need to extend form height as well so submit button fits on the form after a new field is added*/
        document.querySelector(".contactform").style.height = "850px";
    }
    else {
        /*If another button is clicked, hide the order number field and fix the size*/
        document.querySelector(".order-problem").style.display = "none";
        document.querySelector(".contactform").style.height = "800px";

    }
}

/*Assignment 3 JS */

/*Automatic Caroursel Javascript*/

const main = ()=> {
    const img = document.querySelector("#heroimage");
    const bannerimages = ["../images/heroimage1.jpg","../images/heroimage2.jpg","../images/heroimage3.jpg",
    "../images/heroimage4.jpg","../images/heroimage5.jpg","../images/heroimage6.jpg"];
    const leftarrow = document.querySelector("#leftarrow"); 
    const rightarrow = document.querySelector("#rightarrow"); 
    counter = 1;
    direction = "Right";
    
    setInterval(()=>{
        if (direction === "Right") {
            img.src= bannerimages[counter];
            counter++;

            if (counter >= bannerimages.length) {
                counter = 0;
            }
        }
        if (direction === "Left") {
            
            img.src= bannerimages[counter];
            counter--;
            if (counter < 0) {
                counter = 5;
            }
        }
    }, 5000);

    
    leftarrow.onclick = ()=> {
        // add a check to prevent multiple clicks on same arrow
        // only change when opposite rotation is active
        if (direction === "Right") {
            if (counter - 1 == -1) {
                counter = 5;
            }
            else {
                counter--;
            }
            direction = "Left";
        }
    }

    rightarrow.onclick = () => {
        // add a check to prevent multiple clicks on same arrow
        if (direction === "Left") {
            counter++;
            direction = "Right";
        }
    }

}
main();
