function encodeAndDecodeMessages() {
    let textAreas= Array.from(document.querySelectorAll('textarea'));

    let encodeTextArea = textAreas[0];
    let decodeTextArea =textAreas[1];

   
    let buttons = Array.from(document.querySelectorAll('button'));
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);


    function encodeMessage(){
        let messageToEncode = encodeTextArea.value;
        console.log(messageToEncode);
        let encodedMessage='';


        for (let i = 0; i < messageToEncode.length; i++) {
          let charValue = messageToEncode.charCodeAt(i)+1;
          let char = String.fromCharCode(charValue);
          encodedMessage+=char;
            
        }
    

        decodeTextArea.value=encodedMessage;
        encodeTextArea.value='';
    }

    function decodeMessage(){
        let messageToDecode = decodeTextArea.value;
        let resultMessage='';
        for (let i = 0; i < messageToDecode.length; i++) {
            let charValue = messageToDecode.charCodeAt(i)-1;
            let char = String.fromCharCode(charValue);
            resultMessage+=char;
              
          }
          decodeTextArea.value = resultMessage;
        
    }
}

