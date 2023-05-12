let menu = () => {
  const content = document.getElementById('content');
  content.classList.add('home');

  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Menu';

  header.appendChild(headline);
  container.appendChild(header);

  const first = document.createElement('p');
  first.classList.add('innerContent');

  const firstH = document.createElement('h2');
  const firstP = document.createElement('p');

  firstH.innerHTML = "Fish Fillet"
  firstP.innerHTML = "Delicious Catch of the Day" + "<br>"+ "Salmon or Cod";
  first.appendChild(firstH);
  first.appendChild(firstP);

  const second = document.createElement('p');
  second.classList.add('innerContent');
  
  const secondH = document.createElement('h2')
  const secondP = document.createElement('p');

  secondH.innerHTML = "Meat Mousse"
  secondP.innerHTML = "Order a Can of our high quiality meat patte with added moisture." + "<br>" + "Made from the grass feed free range beef.";
  second.appendChild(secondH); 
  second.appendChild(secondP);

  const third = document.createElement('p');
  third.classList.add('innerContent');
  
  const thirdH = document.createElement('h2')
  const thirdP = document.createElement('p');

  thirdH.innerHTML = "Snack of the Day"
  thirdP.innerHTML = "Ranges from Valerian root Catnip to tasty chicken bites";
  third.appendChild(thirdH);
  third.appendChild(thirdP);

  content.appendChild(container);
  content.appendChild(first);
  content.appendChild(second);
  content.appendChild(third);
  

  
}

export default menu