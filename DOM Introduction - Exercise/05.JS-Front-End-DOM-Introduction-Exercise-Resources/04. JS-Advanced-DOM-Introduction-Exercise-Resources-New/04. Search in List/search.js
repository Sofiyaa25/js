<<<<<<< HEAD
function search() {
   let townsList = Array.from(document.querySelectorAll('li'));
   let searching = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   for (let town of townsList) {
      if(town.textContent.includes(searching)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration ='underline';
         matches++;
      }
   }
   result.innerHTML=matches + ' matches found'
   
}
=======
function search() {
   let townsList = Array.from(document.querySelectorAll('li'));
   let searching = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   for (let town of townsList) {
      if(town.textContent.includes(searching)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration ='underline';
         matches++;
      }
   }
   result.innerHTML=matches + ' matches found'
   
}
>>>>>>> 3b00a7fa8fef638ddb281f83f294869d1ff29566
