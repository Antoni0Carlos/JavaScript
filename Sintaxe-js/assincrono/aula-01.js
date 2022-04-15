const myPromisse = new Promise((resolve, reject) =>{
    window.setTimeout(() =>{
        resolve(console.log('Resolvido'));
    }, 2000);
});

await myPromisse
.then((result) => result + ' pasando pelo then')
.then((result) => result + ' e agora acabou!')
.catch((err) => console.log(err.message));

