function deleteByEmail() {
    let emailToSearch = document.getElementsByName('email')[0].value;
    let secondCol = document.querySelectorAll('table tbody tr td:nth-child(2)');
    for (let td of secondCol) {
        if(td.textContent==emailToSearch){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted';
            return;
        }
        document.getElementById('result').textContent='Not found.';
    }
   
}