function generateReport() {
    let personObj={};
    let allPersonObjs = [];
    let checkedColls=[];
   let cols = document.querySelectorAll('thead tr th input');
   for (let i = 0; i < cols.length; i++) {
    let checkBoxState = cols[i].checked;
    
    if(checkBoxState){
        checkedColls.push(i)
    }
   
   }
}