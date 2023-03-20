$(window).load(function() { // Garante que todo o site seja carregado
    $('#status').fadeOut(); // primeiro desaparecerá a animação de carregamento
    $('#preloader').delay(350).fadeOut('slow'); // desaparecerá o DIV branco que cobre o site.
    $('body').delay(350).css({'overflow':'visible'});
  })

  function Logar() {
      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;
      if (login == "freefire123" && senha == "reidaawm") {
        bootbox.alert('Sucesso')
          location.href = "https://hoodshoop.com.br/";
      } else {
          bootbox.alert('Usuário ou Senha incorretos')
      }
  }

  
  function CriarConta() {
    var email = document.getElementById('email');
     email.addEventListener('focus', ()=>{
        email.style.borderColor = "#4A5F6A";
     });


    var senha = document.getElementById('senha').value;
    if (login == "freefire123" && senha == "reidaawm") {
      bootbox.alert('Sucesso')
        location.href = "https://hoodshoop.com.br/";
    } else {
        bootbox.alert('Usuário ou Senha incorretos')
    }
}