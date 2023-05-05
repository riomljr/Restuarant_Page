let nav = () => {
  let nav = document.createElement('nav');
  
  let home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';

  let menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'Menu';

  let about = document.createElement('button');
  about.innerHTML = 'about';
  about.id = 'about';

  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(menu);

  return nav
}


export default nav;