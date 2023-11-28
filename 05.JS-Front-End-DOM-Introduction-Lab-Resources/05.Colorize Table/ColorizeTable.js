function colorize() {
 let rows = document.querySelectorAll('table tr');
 for (let i = 1; i <=rows.length-1; i++) {
    if(i%2==0){
        rows[i].style.background= "Teal";
    }
 }
}