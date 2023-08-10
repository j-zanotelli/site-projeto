var menuHamburguer = document.querySelector('.menu-hamburguer');
var tracinhos = menuHamburguer.textContent;
console.log(tracinhos);
var menuAberto = false;
menuHamburguer.onclick = function () {
    if (menuAberto == false) {
        console.log(menuAberto);
        document.documentElement.classList.add('abre-menu-hamburguer');
        menuHamburguer.innerText = 'x';
        menuAberto = true;
    }
    else {
        if (menuAberto == true) {
            console.log(menuAberto);
            document.documentElement.classList.remove('abre-menu-hamburguer');
            menuHamburguer.innerText = tracinhos
            menuAberto = false
        }
    }
}