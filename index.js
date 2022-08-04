// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I am ${age} years old. Happy birthday to me`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
    const messages = [];
    for(let i = 0; i < names.length; i++ ) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// console.log(writeCards(names,"birthday"));

function countDown(n) {
    while(n >= 0){
        console.log(n --);
    }
}
countDown(10);

