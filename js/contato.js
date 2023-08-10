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

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Seu formulário foi enviado com sucesso!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Eita! tivemos um problema com seu envio do formulário."
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Eita! tivemos um problema enviando seu formulário"
    });
  }
  form.addEventListener("submit", handleSubmit)