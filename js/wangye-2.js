$(function(){

    //注册表单的验证
    $('.di-cjzh').click(function(){
        var mingzi =$('#xml').val();//获得 注册账号的值
        var cengyongming =$('#cyml').val();//获得 注册账号的值
        var youxiang =$('#yxl').val();//获得 注册账号的值
        var mima =$('#mml').val();//获得 注册账号的值

        //正则表达式
        var reg =/^[A-Za-z0-9]+$/;//校验由数字和26个英文组成的字符串
        var reg2 =/^[A-Za-z0-9]{6,12}$/;//
        if(mingzi===''||cengyongming===''||youxiang===''||mima===''){
            alert('请完整输入');
        }else{

            //text(）获得文本
            //test() 测试
            if(reg.test(mingzi)){
                //if(reg2.test(cengyongming))
                //
                if(reg.test(cengyongming)&&cengyongming.length>=6 && cengyongming.length<=12){

                    if(cengyongming===youxiang){
                        //校验成功

                        //储存账号
                        localStorage.setItem('姓名',mingzi);//再localStorage中储存名字
                        localStorage.setItem('曾用名',cengyongming);//再localStorage中储存名字

                        //清空表单
                        $('#xml').val('');


                        alert('注册成功')
                    }else{
                        alert('曾用名和邮箱输入不一致')
                    }

                }else{
                    alert('密码输入错误')
                }

            }else{
                alert('名字输入错误');
                $('mingzi')({
                    border:'1px solid red'
                });
            }

        }


    });

































});
















