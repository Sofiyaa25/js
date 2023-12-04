function create(words) {
   let arr = Array.from(words);
   let content_div = document.getElementById('content');

   for (let elm of arr) {
      let newDiv = document.createElement('div');
      

      let newParagraph = document.createElement('p');
      newParagraph.textContent = elm;
      newParagraph.style.display='none';
     

      newDiv.addEventListener('click', showP);
      newDiv.appendChild(newParagraph);
      content_div.appendChild(newDiv);
   }

   function showP(e){
      let currentDiv = e.currentTarget;
      let currentPara = currentDiv.querySelector('p');
      currentPara.style.display = 'inline-block';
      
   }
   }