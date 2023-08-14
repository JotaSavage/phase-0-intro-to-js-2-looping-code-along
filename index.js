const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const thankYouMessages = writeCards(names, event);

function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // Invokes console.log once for each number, counting down from the number provided to zero.
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  
  
  
  