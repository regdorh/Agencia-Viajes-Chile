$(function(){

    $("#enviarMensaje").click(function(){

        alert("Su mensaje fue enviado correctamente");

    });

    $("h2").on("dblclick",function(){

        $(this).css('color', '#0000ff');

    });

    $(".iconosquienessomos").click(function(){
        
        $(".textosquienessomos").toggle();

    });



        

});