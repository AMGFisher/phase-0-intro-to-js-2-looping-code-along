const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  const newArray = []
  for (let i = 0; i < names.length; i++) {
  let messageString = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    newArray.push(messageString);
  }
  return newArray;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}