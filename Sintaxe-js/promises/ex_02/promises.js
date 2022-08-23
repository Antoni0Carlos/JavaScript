// por padrão usa se o .THEN(() =>{});
function pegarDados() {
    const result = fetch('https://api.github.com/users/omariosouto')
    .then((res) => {
    console.log(res);
    });
    console.log(result);
}

pegarDados();