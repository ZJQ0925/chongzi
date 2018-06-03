
$(function(){

    $('.box>label').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $(".box2>div").click(function(){

        $(this).addClass('on2').siblings().removeClass('on2');
    });


    $('.hdgz').click(function(){
        $('.tmbj').removeClass('tkyc');
    });

    $('.zdlan').click(function(){
        $('.tmbj').addClass('tkyc');
    });

    $('.ljzfan').click(function(){
        $('.tmbj-2').removeClass('tkyc');
    });

    $('.anniu1').click(function(){
        $('.tmbj-2').addClass('tkyc');
    });


































});






