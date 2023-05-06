let nav = () => {
  const mainContain = document.getElementById('content');
  let nav = document.createElement('nav');
  nav.id = 'navigation';
  
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
  nav.appendChild(menu);
  nav.appendChild(about);

  mainContain.appendChild(nav);

  return nav
}


export default nav;