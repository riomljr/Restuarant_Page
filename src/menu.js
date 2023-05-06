
let menu = () => {
  const content = document.getElementById('content');
  content.classList.add('menu');


  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  header.innerHTML = 'Hello My Name is Finnegan!';

  header.appendChild(headline);
  container.appendChild(header);

  content.appendChild(container);
  
}

export default menu