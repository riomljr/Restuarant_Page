import nav from './nav';

let home = () => {
  let content = document.getElementById('content');
  content.classList.add('home');

  let navbar = nav();
  content.appendChild(navbar);

  let container = document.createElement('div');
  container.classList.add('container');
  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Finnegans Cafe';


  header.appendChild(headline);
  container.appendChild(header);

  let inside = document.createElement('p')
  inside.innerHTML = "Welcome To Finnegan's Cafe." + "<br>"+ "Where a cat can be a cat!" + "<br>" + "<br>" + "Any and all cats are welcome to take a nap order a fish fillet or our snack of the day!"

  let second = document.createElement('p');
  second.innerHTML = "Location" + "<br>"+ "We are Located on the corner of Catnipt Ave and Meowster St " + "<br>" +  "Paws Bay, California"

  let third = document.createElement('p');
  third.innerHTML = "Hours" + "<br>"+ "Monday - Satuday"+ "<br>" + "10 AM - 8 PM"

  content.appendChild(container);
  content.appendChild(inside);
  content.appendChild(second);
  content.appendChild(third);
  



}

export default home