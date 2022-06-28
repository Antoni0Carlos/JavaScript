// g - global ( encontra todas as ocorrências)
// i - insensitive
// () grupos
// | ou
const { text } = require('./regTest');
const regExp1 = /(Maria|João|Luiz)(, hoje sua esposa)/i; 
const found = regExp1.exec(text);

if (found) {
    console.log(found[0])
    console.log(found[1])
    console.log(found[2])
}