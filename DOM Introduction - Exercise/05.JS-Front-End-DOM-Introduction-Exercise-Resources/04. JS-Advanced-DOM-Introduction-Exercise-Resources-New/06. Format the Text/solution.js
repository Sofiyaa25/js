function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  let sentances = input.split(".");
  sentances=sentances.filter(s=> s.length>0)
  .map(s => s+='.');



  while(sentances.length>0){
    let p = document.createElement('p');
    p.textContent = sentances.splice(0,3).join('');
    output.appendChild(p);
  }

}