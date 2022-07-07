const produtos = [
    { id: 1, nome: 'sabão', valor: 2.00, categoria: 'limpeza' },
    { id: 2, nome: 'detergente', valor: 4.00, categoria: 'limpeza' },
    { id: 3, nome: 'alvejante', valor: 2.00, categoria: 'limpeza' },
    { id: 4, nome: 'sabão em pó', valor: 2.00, categoria: 'limpeza' },
    { id: 5, nome: 'manteiga', valor: 2.00, categoria: 'alimento' }
];

const ids = produtos.map(produto => produto.id);
const nomes = produtos.map(produto => produto.nome);
/*console.log(ids);
console.log(nomes);*/
const numeros = ids;

const duplicate = numeros.map(x => x * 2);
console.log(duplicate)