function attachEvents() {
    const baseURL = ' http://localhost:3030/jsonstore/phonebook';
    const [loadButton, createButton] = document.getElementsByTagName('button');
    const [personInput, phoneInput] = document.getElementsByTagName('input');
    const ul = document.getElementById('phonebook');


    loadButton.addEventListener('click', async () =>{
      const respone = await fetch(baseURL);
      const phonebookInfo = await respone.json();
      const phoneNumbersInfo = [];



      for (const phoneInfo of Object.values(phonebookInfo)) {
        const phoneInfoFormat = {
            id: phoneInfo._id,
            name: phoneInfo.person,
            phoneNumber: phoneInfo.phone
        };

      phoneNumbersInfo.push(phoneInfoFormat);

      let infoToDisplay = `${phoneInfo.person}: ${phoneInfo.phone}`
      let isValidInput = personInput.value !=='' && phoneInput.value !=='';

      if(isValidInput){
      let li = document.createElement('li');
      li.id='phonebook';
      li.textContent = infoToDisplay

      let deleteButton = document.createElement('button');
      deleteButton.innerHTML ='[Delete]';

      deleteButton.addEventListener('click', ()=>{
        
      })


      li.appendChild(deleteButton);
      ul.appendChild(li);
      }
      }
    })

}

attachEvents();