function loadReposFunc(){
    let username = document.getElementsByName('username')[0].value;
    fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((res) => {
      
    })
    .catch(err => console.log(err));

}