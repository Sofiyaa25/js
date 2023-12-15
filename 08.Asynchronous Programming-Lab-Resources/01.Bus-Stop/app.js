function getInfo() {
   fetch(' http://localhost:3030/jsonstore/bus/businfo/1308')
   .then(response => {
    return response.json()
   })
   .then(res => console.log(res));
}