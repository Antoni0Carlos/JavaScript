const produtos = [
    { id: 1, nome: 'sabão', valor: 2.00, categoria: 'limpeza' },
    { id: 2, nome: 'detergente', valor: 4.00, categoria: 'limpeza' },
    { id: 3, nome: 'alvejante', valor: 2.00, categoria: 'alimento' },
    { id: 4, nome: 'sabão em pó', valor: 2.00, categoria: 'limpeza' },
    { id: 5, nome: 'manteiga', valor: 2.00, categoria: 'alimento' }
];

const alimentos = produtos 
.filter(p => p.categoria === 'alimento')
.map(a => a.nome)
console.log(alimentos);
