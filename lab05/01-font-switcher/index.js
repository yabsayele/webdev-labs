let currsize = 1.4;

const makeBigger = () => {
   currsize += 0.1;
   document.querySelector(".content").style.fontSize = `${currsize}em`
   document.querySelector("h1").style.fontSize = `${currsize+1}em`
   //alert('make bigger!');
   
};

const makeSmaller = () => {
   //alert('make smaller!');
   currsize -= 0.1;
   document.querySelector(".content").style.fontSize = `${currsize}em`
   document.querySelector("h1").style.fontSize = `${currsize+1}em`
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

