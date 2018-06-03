
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
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if()

        $('.tmbj-2').removeClass('tkyc');
    });

    $('.anniu1').click(function(){
        $('.tmbj-2').addClass('tkyc');
    });




































});






