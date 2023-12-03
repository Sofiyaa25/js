function addItem() {
    let textToAppend= document.getElementById('newItemText').value;
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = textToAppend;
    ul.appendChild(li);
    document.getElementById('newItemText').value=" ";
}