
$(function(){

    //选择金额
    $('.box>label').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    //选择支付方式
    $(".box2>div").click(function(){

        $(this).addClass('on2').siblings().removeClass('on2');
    });

    //活动规则
    $('.hdgz').click(function(){
        $('.tmbj').removeClass('tkyc');
    });

    $('.zdlan').click(function(){
        $('.tmbj').addClass('tkyc');
    });

    //立即支付
    $('.ljzfan').click(function(){

        var haoma=$('.haoma').val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(myreg.test(haoma)){
            $('.tmbj-2').removeClass('tkyc');
        }else{
            alert('号码输入错误')
        }
    });

    $('.anniu2').click(function(){

        var haoma=$('.haoma').val();
        var haoma2=$('.haoma2').val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(myreg.test(haoma2)){
            if(haoma===haoma2){
                $('.tmbj-3').removeClass('tkyc');
                $('.tmbj-2').addClass('tkyc');
            }
            else{
                window.location.replace("../html/wacz.html");
            }
        }else{
            alert('号码输入错误')
        }
    });

    $('.anniu1-2').click(function(){
        $('.tmbj-3').addClass('tkyc');
    });

    $('.anniu2-2').click(function(){
        window.location.replace("../html/czcg.html");
        $(location).attr('href', '../html/czcg.html');
    });





    $('.anniu1').click(function(){
        $('.tmbj-2').addClass('tkyc');
    });




































});






