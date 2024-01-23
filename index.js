
function writeCards(stringNames, eventName) {
    let messages = [];
    for (let i = 0; i < stringNames.length; i++) {
      let thankYou = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`;
      messages.push(thankYou);
    }
    return messages;
  }
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");













function countDown(number){ 
        while(number >= 0){ 
            console.log(number--);
        }
        
}
countDown(10);