/*const $button = document.querySelector("button");

const handleClick = // arrrow fucntion é função de callback
() => {
    console.log("button foi clicaddo")
};

$button.addEventListener("click", handleClick);*/
function newButton(text) {
    const $body = document.querySelector("body");
    
    //escrevendo o elemento button na tela com javascript
    const $button = document.createElement("button" );
    $button.textContent = text;
    
    $body.insertAdjacentElement("beforeend", $button);
    return $button;
}

const login = newButton("Login");
const singnup = newButton("Signup");

console.log("login", login);
console.log("singnup", singnup);

login.style.cssText = `
font-size: 20px;
color: darkgreen;
border: solid 1px #fff;
border-radius: 10%;
background: 	#1E90FF;
`
singnup.style.cssText = `
font-size: 20px;
color: #fff;
border: solid 1px #fff;
border-radius: 10%;
background: 	red;
`