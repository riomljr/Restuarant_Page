let reset = () => {
  let content = document.getElementById('content');
  let container = document.getElementsByClassName('container')[0];
  container.remove();
  content.className="";

}

export default reset;