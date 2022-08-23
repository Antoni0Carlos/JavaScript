function catsAndMouse(a, b, m) {
    let cat1 = a;
    let cat2 = b;
    let mouse = m; 
    if((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
        return 'Cat A';
    } else if((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
        return 'Mouse C';
    }else{
        return 'Cat B';
    }

}

console.log(catsAndMouse(1, 2, 2))
console.log(catsAndMouse(1, 3, 2))