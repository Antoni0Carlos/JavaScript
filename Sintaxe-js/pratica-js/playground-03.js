const list = [
    { name: 'soap', price: 30 },
    { name: 'cereal', price: 12 },
    { name:' towel', price:  30}
];
const balanceAvailable = 100;

function calcBalance(balanceAvailable, list) {
return list.reduce(function(prev, current, index){
    console.log('round ', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.price;
}, balanceAvailable);
}

console.log(calcBalance(balanceAvailable, list));