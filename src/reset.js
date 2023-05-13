let reset = () => {

  const content = document.getElementById('content');
  
  while (content.lastChild.id !== 'navigation') {
    content.removeChild(content.lastChild);
  }

  let navs = document.getElementsByTagName('button');
  for (let i= 0; i < navs.length; i++) {
    navs[i].className = "";
  }
 
  content.className="";

}

export default reset;