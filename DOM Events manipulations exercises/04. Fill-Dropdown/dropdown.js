function addItem() {
   let newItemText = document.querySelector('#newItemText')
   let newItemValue = document.querySelector('#newItemValue')
   let menu = document.querySelector('#menu');



   let option = document.createElement('option');
   option.textContent= newItemText.value;
   option.value=newItemValue.value;

   if(newItemValue.value!=='' && newItemValue.value!==''){
    menu.appendChild(option);
   }
   
   
   newItemText.value = '';
   newItemValue.value='';
   
}