<<<<<<< HEAD
function toggle() {
   let neshto = document.getElementsByClassName('button')[0];
   let extraText = document.getElementById('extra').textContent;

   if(neshto.textContent=='More'){
   document.getElementById('extra').style.display='block';
   neshto.innerHTML ='Less';
   }else if (neshto.textContent=='Less'){
    document.getElementById('extra').style.display='none';
    neshto.innerHTML='More'
   }
=======
function toggle() {
   let neshto = document.getElementsByClassName('button')[0];
   let extraText = document.getElementById('extra').textContent;

   if(neshto.textContent=='More'){
   document.getElementById('extra').style.display='block';
   neshto.innerHTML ='Less';
   }else if (neshto.textContent=='Less'){
    document.getElementById('extra').style.display='none';
    neshto.innerHTML='More'
   }
>>>>>>> 3b00a7fa8fef638ddb281f83f294869d1ff29566
}