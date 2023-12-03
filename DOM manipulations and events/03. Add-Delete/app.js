function addItem() {
   let contentToAdd = document.getElementById('newItemText').value;
  if(contentToAdd.length===1 || contentToAdd.length===0){
    return;
  } 
   
   let liToAppend = document.createElement('li');
   let hyperLink = document.createElement('a');
   hyperLink.href='#';
   hyperLink.textContent='[Delete]';

   
   liToAppend.appendChild(document.createTextNode(contentToAdd));
   liToAppend.appendChild(hyperLink);
   hyperLink.addEventListener('click', clickMe)

   document.getElementById('items').appendChild(liToAppend);
   document.getElementById('newItemText').value=' ';
   
   

   function clickMe(e){
    liToAppend.remove();
   }
}