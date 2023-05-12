import './style.css'
import home from './home';
import about from './about';
import menu from './menu';
import nav from './nav';
import reset from './reset';


nav();
home();



document.getElementById('home').addEventListener('click', () => {
  reset();
  home();
  
  
});

document.getElementById('menu').addEventListener('click', () => {
  console.log("Menu working");
  reset();
  menu();
 
});

document.getElementById('about').addEventListener('click', () => {
  console.log("about working");
  reset();
  about();
 
});