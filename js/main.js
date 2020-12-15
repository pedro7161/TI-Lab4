
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
            $(".icons i").removeClass("fa-bars");
            $(".icons i").addClass("fa-times");
        }else{
            $(".topnav").css("display","none");
            $(".icons i").removeClass("fa-times");
            $(".icons i").addClass("fa-bars");
        }
    });


});






