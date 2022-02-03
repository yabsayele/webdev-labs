/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  //check if button is pressed
  const isPressed = window.localStorage.getItem("dyslexic") === 'true';
  //if pressed add class to list
  if (isPressed) {
    document.body.classList.add("dyslexia-mode");
  }

  //if pressed set attribute to true
  if (isPressed) {
    document.getElementById("#dyslexia-toggle").setAttribute('aria-pressed', 'true');
  }

  //call the event handler
  document.getElementById("#dyslexia-toggle").addEventListener('click',changethemetodyslexia);

}

const changethemetodyslexia = ev => {
  let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';
  //get the current state of the button
  ev.currentTarget.setAttribute('aria-pressed', String(!pressed));
  //toggle the class 
  document.body.classList.toggle("dyslexia-mode");

  //update the changed value to storage

  //document.querySelector("dyslexia-mode").className = "";
  window.localStorage.setItem("dyslexic", String(!pressed));
};

document.querySelector("#dyslexia-toggle").addEventListener('click', changethemetodyslexia);