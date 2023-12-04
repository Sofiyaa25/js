<<<<<<< HEAD
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let input = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of tableRows) {
   
        row.classList.remove('select');
        if(input.value !=='' && row.innerHTML.includes(input.value)){
         row.className = 'select';
        }
      }
      input.value='';


   }
=======
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let input = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of tableRows) {
   
        row.classList.remove('select');
        if(input.value !=='' && row.innerHTML.includes(input.value)){
         row.className = 'select';
        }
      }
      input.value='';


   }
>>>>>>> 3b00a7fa8fef638ddb281f83f294869d1ff29566
}