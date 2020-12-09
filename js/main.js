
/*
$(document).ready(function () {
    
$(".icon").on("click",function(){


    if($(".topnav").hasClass("hide")){

        $(".topnav").removeClass("hide");
        
    }else{
        $(".topnav").addClass("hide");
    }
});


});*/


$(document).ready(function (){

    $(".icon").on("click",function (){
        
        //Se o menu estiver fechado abrir o menu caso contrario fechar
        if( $(".topnav").css("display") == "none" ){
            $(".topnav").css("display","block");
        }else{
            $(".topnav").css("display","none");
        }
    });


});






