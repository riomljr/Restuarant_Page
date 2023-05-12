let reset = () => {

  const content = document.getElementById('content');
  
  while (content.lastChild.id !== 'navigation') {
    content.removeChild(content.lastChild);
  }
 
  content.className="";

}

export default reset;