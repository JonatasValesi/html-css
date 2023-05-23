var carta1 = {
    nome: "<b>AUDI - RS3 Sedan 2020</b>",
    imagem:
      "https://pbs.twimg.com/media/FUWhEF_WAAATJIm?format=jpg&name=4096x4096",
    atributos: {
      Velocidade: 6.7,
      Aceleração: 6.4,
      Arrancada: 7.9
    }
  };
  var carta2 = {
    nome: "<b>BMW - M4 Coupé 2014</b>",
    imagem:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/12/BMW-M4-Coupe-Forza-Horizon.jpg",
    atributos: {
      Velocidade: 7.1,
      Aceleração: 5.3,
      Arrancada: 5.6
    }
  };
  var carta3 = {
    nome: "<b>PORSCHE - Cayman GTS 2015</b>",
    imagem: "https://tm.ibxk.com.br/2016/03/01/01170441220098.jpg?ims=768x480",
    atributos: {
      Velocidade: 6.6,
      Aceleração: 6.1,
      Arrancada: 6.5
    }
  };
  var carta4 = {
    nome: "<b>TOYOTA - Supra GR 2020</b>",
    imagem: "https://wallpapercave.com/wp/wp10903441.jpg",
    atributos: {
      Velocidade: 6.2,
      Aceleração: 5.5,
      Arrancada: 5.8
    }
  };
  var carta5 = {
    nome: "<b>FORD - Mustang GT 2018</b>",
    imagem:
      "https://i.pinimg.com/736x/8d/b5/39/8db5392e53d3fe890faec8e56f9bd8e7.jpg",
    atributos: {
      Velocidade: 6.9,
      Aceleração: 5.2,
      Arrancada: 5.5
    }
  };
  var carta6 = {
    nome: "<b>AUDI - RS5 Coupe 2018</b>",
    imagem:
      "https://preview.redd.it/2dqzh8sq5s391.jpg?auto=webp&s=500a57b27fbb456e6890b218f55b1861785c89e0",
    atributos: {
      Velocidade: 7.1,
      Aceleração: 7.2,
      Arrancada: 9.8
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 6);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var htmlResultado = document.getElementById("resultado");
    var divResultado = "";
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado.innerHTML =
        "<p class='resultado-final'>Você perdeu! A carta da maquina é maior!</p>";
    } else {
      htmlResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  