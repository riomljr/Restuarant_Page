let home = () => {
  const content = document.getElementById('content');
  content.classList.add('home');

  
  

  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Finnegans Cafe';


  header.appendChild(headline);
  container.appendChild(header);

  const first = document.createElement('p')
  first.classList.add('first');
  first.innerHTML = "Welcome To Finnegan's Cafe." + "<br>"+ "Where a cat can be a cat!" + "<br>" + "<br>" + "Any and all cats are welcome to take a nap order a fish fillet or our snack of the day!"

  const second = document.createElement('p');
  second.classList.add('second');
  second.innerHTML = "Location" + "<br>"+ "We are Located on the corner of Catnipt Ave and Meowster St " + "<br>" +  "Paws Bay, California"

  const third = document.createElement('p');
  third.classList.add('third');
  third.innerHTML = "Hours" + "<br>"+ "Monday - Satuday"+ "<br>" + "10 AM - 8 PM"

  content.appendChild(container);
  content.appendChild(first);
  content.appendChild(second);
  content.appendChild(third);
  



}

export default home