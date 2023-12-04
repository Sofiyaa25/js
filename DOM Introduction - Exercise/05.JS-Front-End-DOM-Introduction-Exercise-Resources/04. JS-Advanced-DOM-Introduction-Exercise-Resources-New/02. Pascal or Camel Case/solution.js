<<<<<<< HEAD
function solve() {
  let text = document.getElementById('text').value;
  text = text.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result =  document.getElementById('result');
  let sentance = [];
  

  if(convention == 'Camel Case'){
    
    text = text.split(' ');
    sentance.push(text[0]);
    
    for (let i = 1; i < text.length; i++) {
      sentance.push(text[i].charAt(0).toUpperCase()+text[i].slice(1));
    }
   result.textContent = sentance.join('');
  }else if(convention =='Pascal Case'){ 
    text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
      sentance.push(text[i].charAt(0).toUpperCase()+text[i].slice(1));
    }  
    result.textContent = sentance.join('');
  }else{
    result.textContent ='Error!';
  }
=======
function solve() {
  let text = document.getElementById('text').value;
  text = text.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result =  document.getElementById('result');
  let sentance = [];
  

  if(convention == 'Camel Case'){
    
    text = text.split(' ');
    sentance.push(text[0]);
    
    for (let i = 1; i < text.length; i++) {
      sentance.push(text[i].charAt(0).toUpperCase()+text[i].slice(1));
    }
   result.textContent = sentance.join('');
  }else if(convention =='Pascal Case'){ 
    text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
      sentance.push(text[i].charAt(0).toUpperCase()+text[i].slice(1));
    }  
    result.textContent = sentance.join('');
  }else{
    result.textContent ='Error!';
  }
>>>>>>> 3b00a7fa8fef638ddb281f83f294869d1ff29566
}