$(document).ready(function(){
    $('.carousel-images').slick({
        autoplay: true,
        speed: 1500,
        arrows: false,
    })
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })
    $('#tel').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            message: {
                required: true
            },
            veiculo: {
                required: false
            }
        },
        messages: {
            nome: '<h3 class="error">Por favor Insira seu Nome</h3>',
            tel: '<h3 class="error">Por favor Insira seu Telefone</h3>',
            email: '<h3 class="error">Por favor Insira seu E-Mail</h3>'
        },
        submitHandler: function(form){
            $('.sucess').fadeIn(500)
            $('#nome').val('')
            $('#tel').val('')
            $('#email').val('')
            $('#veiculo').val('')
            $('#message').val('')
        },
        invalidHandler: function(evento, validador){
            $('.sucess').fadeOut()
            let camposincorretos = validador.numberOfInvalids()
            if(camposincorretos){
                alert(`tem ${camposincorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const itemDeInteresse = $(this).parent().find('h3').text()
        $('#veiculo').val(itemDeInteresse)
        const destino = $('#contact')
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})