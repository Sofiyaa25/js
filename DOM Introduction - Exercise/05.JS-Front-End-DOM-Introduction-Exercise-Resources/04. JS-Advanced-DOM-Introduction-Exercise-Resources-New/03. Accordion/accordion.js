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
}