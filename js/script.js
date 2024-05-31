var inputbox = document.getElementById('amount');
var btn = document.getElementById('btn');
var five = document.getElementById('five');
var two = document.getElementById('two');
var one = document.getElementById('one');

var totalfivehundred = 1000;
var totaltwohundred = 1000;
var totalonehundred = 1000;

const fivehundred = 500;
const twohundred = 200;
const onehundred = 100;

totalbalance = totalfivehundred * fivehundred + totaltwohundred * twohundred + totalonehundred * onehundred;

btn.addEventListener('click', () => {
    var amount = parseInt(inputbox.value);
    console.log(typeof amount);
    console.log(amount);
    let fiveCount = 0;
    let twoCount = 0;
    let oneCount = 0;
    let remainingAmount = amount;
    console.log(amount % 100)
    if (amount % 100 != 0) {
        alert("Please enter amount in multiples of 100");
        return;
    }

    if (amount > totalbalance) {
        alert("ATM is out of cash");
        return;
    }

    fiveCount = Math.floor(amount / fivehundred);
    if (fiveCount > totalfivehundred) {
        fiveCount = totalfivehundred;
    }
    remainingAmount = amount - fiveCount * fivehundred;

    twoCount = Math.floor(remainingAmount / twohundred);
    if (twoCount > totaltwohundred) {
        twoCount = totaltwohundred;
    }
    remainingAmount = remainingAmount - twoCount * twohundred;

    oneCount = Math.floor(remainingAmount / onehundred);
    if (oneCount > totalonehundred) {
        oneCount = totalonehundred;
    }
    remainingAmount = remainingAmount - oneCount * onehundred;

    if (remainingAmount != 0) {
        alert("ATM is out of cash");
        return;
    }

    totalfivehundred = totalfivehundred - fiveCount;
    totaltwohundred = totaltwohundred - twoCount;
    totalonehundred = totalonehundred - oneCount;

    totalbalance = totalfivehundred * fivehundred + totaltwohundred * twohundred + totalonehundred * onehundred;

    console.log("Five Hundred: " + fiveCount);
    console.log("Two Hundred: " + twoCount);
    console.log("One Hundred: " + oneCount);

    console.log("Total Five Hundred: " + totalfivehundred);
    console.log("Total Two Hundred: " + totaltwohundred);
    console.log("Total One Hundred: " + totalonehundred);

    console.log("Total Balance: " + totalbalance);

    five.innerHTML = fiveCount;
    two.innerHTML = twoCount;
    one.innerHTML = oneCount;
    

    
});

