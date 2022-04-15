/*function getAdmins(map) {
    let admins = [];
    for([key, value] of     map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Zé', 'User');
usuarios.set('Carlos', 'Admin');

console.log(getAdmins(usuarios));*/

const meuArray = [30, 30, 40, 5, 233, 2009, 375, 4856, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr)

    return [...mySet];
}
console.log(valoresUnicos(meuArray));