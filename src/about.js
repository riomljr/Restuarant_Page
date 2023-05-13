let about = () => {
  const content = document.getElementById('content');
  content.classList.add('about');

  let btn = document.getElementById('about');
  btn.classList.add('clicked')

  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'About Us';

  header.appendChild(headline);
  container.appendChild(header);

  const first = document.createElement('p');
  first.classList.add('innerContent');

  const firstH = document.createElement('h2');
  const firstP = document.createElement('p');
  const firstPic = document.createElement('img');


  firstH.innerHTML = "Finnegan";
  firstP.innerHTML = "Our cafe is name after one of the most handsomest cats" ;
  first.appendChild(firstH);
  first.appendChild(firstP);


  

  const second = document.createElement('div');
  second.classList.add('innerContent');
  
  const secondH = document.createElement('h2')
  const secondP = document.createElement('p');

  secondH.innerHTML = "Contact Us"
  secondP.innerHTML = "Email: Finnegan@Finnengansmadeupcafe.com" + "<br>" + "Phone: 555-5555";
  second.appendChild(secondH); 
  second.appendChild(secondP);

  content.appendChild(container);
  content.appendChild(first);
  content.appendChild(second);
  
    
}

export default about