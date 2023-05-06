import './style.css'
import home from './home';
import about from './about';
import menu from './menu';
import nav from './nav';
import reset from './reset';


nav();
home();



document.getElementById('home').addEventListener('click', () => {
  console.log("home working");
  reset();
  home();
  
});

document.getElementById('Menu').addEventListener('click', () => {
  console.log("Menu working");
  reset();
  menu();
 
});
