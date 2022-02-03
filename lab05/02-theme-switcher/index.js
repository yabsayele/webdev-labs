/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaulttheme = () => {
   // alert('default!');
   document.querySelector("body").className = "";
};

const deserttheme = () => {
   // alert('desert!');
   document.querySelector("body").className = "desert";


};

const oceantheme = () => {
   // alert('ocean!');
   document.querySelector("body").className = "ocean";
};

const highcontrasttheme = () => {
   // alert('highconstrast!');
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener('click', defaulttheme);
document.querySelector("#desert").addEventListener('click', deserttheme);
document.querySelector("#ocean").addEventListener('click', oceantheme);
document.querySelector("#high-contrast").addEventListener('click', highcontrasttheme);