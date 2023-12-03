function focused() {
  let fields = Array.from(document.getElementsByTagName("input"));
  
  for (let field of fields) {
    field.addEventListener("focus", onFocus);
    field.addEventListener("blur", lostFocus);
  }

  function onFocus(e) {
    let divParent = e.target.parentNode;
    divParent.className='focused';

  }
  function lostFocus(e){
    let divParent = e.target.parentNode;
    divParent.className='div div';
  }
}
