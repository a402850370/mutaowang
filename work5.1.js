$(document).ready(function(){
	
//Part-top:登录与注册
	var dear_log=$('#log');
	var free_rege=$('#rege');
	var login=$('.login');
	var rege=$('.rege');
	var login_in=$('.login_in');
	var rege_in=$('.rege_in');
	var mask=$('.mask');
	var close=$('.close');
	var l_btn=$('#l_btn');//登录框按钮
	var r_btn=$('#r_btn');//注册框按钮	
	var logname_prove=$('.logname_prove');//登录用户名验证信息
	var password_prove=$('.password_prove');//登录密码验证信息
	var regename_prove=$('.regename_prove');//注册用户名验证信息
	var prove_prove=$('.prove_prove');//验证码验证信息
	dear_log.click(function(){
		mask.css('display','block');
		login.css('display','block');
		logname_prove.html('');
		password_prove.html('');
		regename_prove.html('');
		prove_prove.html('');
	})
	free_rege.click(function(){
		mask.css('display','block');
		rege.css('display','block');
		logname_prove.html('');
		password_prove.html('');
		regename_prove.html('');
		prove_prove.html('');
	})
	login_in.click(function(){
        login.css('display','block');
        rege.css('display','none');
	})
	rege_in.click(function(){
        login.css('display','none');
        rege.css('display','block');
	})
	close.click(function(){
		mask.css('display','none');
		login.css('display','none');
		rege.css('display','none');
	})
	//登录数据验证
	var logname=$('input[name="logname"]');//登录框
	var password=$('input[name="password"]');//密码框
	//用户名验证
	logname.click(function(){
		$(this).mouseout(function(){
			if(logname.val()==('17761251394'||'402850370@qq.com')){
                logname_prove.html('')
			}else{
                logname_prove.html('请输入正确的邮箱或手机号')
			}
		})
	})
	//密码验证
	password.click(function(){
		$(this).mouseout(function(){
			if(password.val()=='123456789'){
                password_prove.html('')
			}else{
                password_prove.html('请输入6-16位密码，区分大小写，不能使用空格！')
			}
		})
	})
	//提交验证
	l_btn.click(function(){
		var b=((logname.val()==('17761251394'||'402850370@qq.com'))&&password.val()=='123456789')
		if(b){
		    alert('登录成功！');
		    $('#log').html('林二爷(在线)');
		    mask.css('display','none');
	        login.css('display','none');
		    rege.css('display','none');
		}
	})
	//注册数据验证
	var regename=$('input[name="regename"]');//注册框
	var prove=$('input[name="prove"]');//验证码框
	//用户名验证
	regename.click(function(){
		$(this).mouseout(function(){
			if(regename.val()==('17761251394'||'402850370@qq.com')){
                regename_prove.html('')
			}else{
                regename_prove.html('请输入正确的邮箱或手机号')
			}
		})
	})
	//验证码验证
	prove.click(function(){
		$(this).mouseout(function(){
			if(prove.val()=='GYyd'){
                prove_prove.html('')
			}else{
                prove_prove.html('验证码错误，请重新输入')
			}
		})
	})
	//提交验证
	r_btn.click(function(){
		var b=((regename.val()==('17761251394'||'402850370@qq.com'))&&prove.val()=='GYyd')
		if(b){
		    alert('注册成功！');
		    mask.css('display','none');
	        login.css('display','none');
		    rege.css('display','none');
		}
	})

//Part-top:商品分类栏
    $('#hr_ul1').mouseover(function(){
    	$('#hr_ul1>li').css('display','block');
    	$('#hr_ul1').css('background-color','white');
    })
    $('#hr_ul1').mouseout(function(){
    	$('#hr_ul1>li').css('display','none');
    	$('.hr_title').css('display','block');
    	$('#hr_ul1').css('background','none');
    })

    $('#hr_ul2').mouseover(function(){
    	$('#hr_ul2>li').css('display','block');
    	$('#hr_ul2').css('background-color','white');
    })
    $('#hr_ul2').mouseout(function(){
    	$('#hr_ul2>li').css('display','none');
    	$('.hr_title').css('display','block');
    	$('#hr_ul2').css('background','none');
    })

    $('#hr_ul3').mouseover(function(){
    	$('#hr_ul3>li').css('display','block');
    	$('#hr_ul3').css('background-color','white');
    })
    $('#hr_ul3').mouseout(function(){
    	$('#hr_ul3>li').css('display','none');
    	$('.hr_title').css('display','block');
    	$('#hr_ul3').css('background','none');
    })

    $('#hr_ul4').mouseover(function(){
    	$('#hr_ul4>li').css('display','block');
    	$('#hr_ul4').css('background-color','white');
    })
    $('#hr_ul4').mouseout(function(){
    	$('#hr_ul4>li').css('display','none');
    	$('.hr_title').css('display','block');
    	$('#hr_ul4').css('background','none');
    })

//Part-logo:购物车
$('.logo_car').mouseover(function(){
	$(this).css({
		'background-color': 'white',
	    'color':'red',
	    'border':'1px lightgrey solid'
	})
    $('.smcar').attr('src','icon/25.png');
	$('#lgc_down').html('<img src="icon/24.png" class="down">');
	$('.car_inner').css('display','block')
})
$('.logo_car').mouseout(function(){
	$('.logo_car').css({
		'background-color': 'red',
	    'color':'white',
	    'border':'none'
	})
    $('.smcar').attr('src','icon/26.png');
	$('#lgc_down').html('<img src="icon/23.png" class="down">');
	$('.car_inner').css('display','none')
})

//Part-banner:商品子菜单
$('.banner_goods').children().each(function(){
	var index=$(this).index();
	$(this).mouseover(function(){
		$(this).css({
			'background-color':'white',
			'color':'red'
		})
		$('.bg_sons').css('display','block')
		$('.bg_sons').children().each(function(){
			$(this).css('display','none')
		})
	    $($('.bg_sons').children()[index]).css('display','block')
	})
	$(this).mouseout(function(){
		$(this).css({
			'background-color':'rgba(240,0,0,0.9)',
			'color':'white'
		})
        $('.bg_sons').children().each(function(){
			$(this).css('display','none')
	    })
	    $('.bg_sons').css('display','none')
	})
})
 
//轮播图
function slideImg(){
    //初始化
    var imgs=$('.img'),
        l_btn=$('.btn_left'),
        r_btn=$('.btn_right'),
        dots=$('.dots').children(),
        len=dots.length,
        timer=null,
        index=0,
        banner_imgs=$('.banner_imgs');
    //鼠标滑入停止轮播
    banner_imgs.mouseover(function(){
    	clearInterval(timer);
    })
	//鼠标离开自动轮播
	banner_imgs.mouseout(function(){
		timer=setInterval(function(){
	        changeImg();
	        index++;
	        if(index>6){
	            index=0;
	        }
        },2000)
	})
    banner_imgs.mouseout();
	//左右切换图片
    l_btn.click(function(){
        index--;
        if (index<0) {
        	index=len-1;
        }
        changeImg();
    })
    r_btn.click(function(){
    	index++;
    	if(index>6){
            index=0;
    	}
    	changeImg();
    })
	//圆点切换图片
    for(var i=0;i<len;i++){
    	dots[i].id=i;
    	dots.click(function(){
    		index=this.id;
    		changeImg();
    	})
    }
	//图片切换
	function changeImg(){
		imgs.each(function(){
    		$(this).css('display','none');
    	})
    	dots.each(function(){
    		$(this).removeClass('dot_active');
    	}) 
        $(imgs[index]).css('display','block');
        $(dots[index]).addClass('dot_active');
	}
}
slideImg();

//楼层商品切换
var limgs1=$('.goods_title1 img');
var limgs2=$('.goods_title2 img');
var limgs3=$('.goods_title3 img');
var limgs4=$('.goods_title4 img');
var limgs5=$('.goods_title5 img');
console.log(limgs1.length)
//F1
var goods_title1=$('.goods_title1').children();
var floor1_goods=$('.floor1_goods');
$(goods_title1[0]).click(function(){
	limgs1.each(function(){
		$(this).css('display','none')
	})
	$(limgs1[0]).css('display','block')
    goods_title1.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor1_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
    $(floor1_goods[0]).addClass('floor_active')
})

$(goods_title1[2]).click(function(){
	limgs1.each(function(){
		$(this).css('display','none')
	})
	$(limgs1[1]).css('display','block')
    goods_title1.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor1_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor1_goods[1]).addClass('floor_active')
})

$(goods_title1[4]).click(function(){
	limgs1.each(function(){
		$(this).css('display','none')
	})
	$(limgs1[2]).css('display','block')
    goods_title1.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor1_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor1_goods[2]).addClass('floor_active')
})
//F2
var goods_title2=$('.goods_title2').children();
var floor2_goods=$('.floor2_goods');
$(goods_title2[0]).click(function(){
	limgs2.each(function(){
		$(this).css('display','none')
	})
	$(limgs2[0]).css('display','block')
    goods_title2.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor2_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
    $(floor2_goods[0]).addClass('floor_active')
})

$(goods_title2[2]).click(function(){
	limgs2.each(function(){
		$(this).css('display','none')
	})
	$(limgs2[1]).css('display','block')
    goods_title2.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor2_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor2_goods[1]).addClass('floor_active')
})

$(goods_title2[4]).click(function(){
	limgs2.each(function(){
		$(this).css('display','none')
	})
	$(limgs2[2]).css('display','block')
    goods_title2.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor2_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor2_goods[2]).addClass('floor_active')
})
//F3
var goods_title3=$('.goods_title3').children();
var floor3_goods=$('.floor3_goods');
$(goods_title3[0]).click(function(){
	limgs3.each(function(){
		$(this).css('display','none')
	})
	$(limgs3[0]).css('display','block')
    goods_title3.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor3_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
    $(floor3_goods[0]).addClass('floor_active')
})

$(goods_title3[2]).click(function(){
	limgs3.each(function(){
		$(this).css('display','none')
	})
	$(limgs3[1]).css('display','block')
    goods_title3.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor3_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor3_goods[1]).addClass('floor_active')
})

$(goods_title3[4]).click(function(){
	limgs3.each(function(){
		$(this).css('display','none')
	})
	$(limgs3[2]).css('display','block')
    goods_title3.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor3_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor3_goods[2]).addClass('floor_active')
})
//F4
var goods_title4=$('.goods_title4').children();
var floor4_goods=$('.floor4_goods');
$(goods_title4[0]).click(function(){
	limgs4.each(function(){
		$(this).css('display','none')
	})
	$(limgs4[0]).css('display','block')
    goods_title4.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor4_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
    $(floor4_goods[0]).addClass('floor_active')
})

$(goods_title4[2]).click(function(){
	limgs4.each(function(){
		$(this).css('display','none')
	})
	$(limgs4[1]).css('display','block')
    goods_title4.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor4_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor4_goods[1]).addClass('floor_active')
})

$(goods_title4[4]).click(function(){
	limgs4.each(function(){
		$(this).css('display','none')
	})
	$(limgs4[2]).css('display','block')
    goods_title4.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor4_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor4_goods[2]).addClass('floor_active')
})
//F5
var goods_title5=$('.goods_title5').children();
var floor5_goods=$('.floor5_goods');
$(goods_title5[0]).click(function(){
	limgs5.each(function(){
		$(this).css('display','none')
	})
	$(limgs5[0]).css('display','block')
    goods_title5.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor5_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
    $(floor5_goods[0]).addClass('floor_active')
})

$(goods_title5[2]).click(function(){
	limgs5.each(function(){
		$(this).css('display','none')
	})
	$(limgs5[1]).css('display','block')
    goods_title5.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor5_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor5_goods[1]).addClass('floor_active')
})

$(goods_title5[4]).click(function(){
	limgs5.each(function(){
		$(this).css('display','none')
	})
	$(limgs5[2]).css('display','block')
    goods_title5.each(function(){
    	$(this).removeClass('title_active')
    }) 
	floor5_goods.each(function(){
        $(this).removeClass('floor_active')
	})
    $(this).addClass('title_active');
     $(floor5_goods[2]).addClass('floor_active')
})
//楼层导航左
var lnavs=$('.lnav');
$('.floor').mouseover(function(){
	$('.floor_lnav').css('display','block')
})
$(lnavs[0]).mouseover(function(){
	$(this).html('服装');
	$(this).css('color','red');
}).mouseout(function(){
	$(this).html('F1');
	$(this).css('color','black');
})
$(lnavs[1]).mouseover(function(){
	$(this).html('美妆');
	$(this).css('color','red');
}).mouseout(function(){
	$(this).html('F2');
	$(this).css('color','black');
})
$(lnavs[2]).mouseover(function(){
	$(this).html('手机');
	$(this).css('color','red');
}).mouseout(function(){
	$(this).html('F3');
	$(this).css('color','black');
})
$(lnavs[3]).mouseover(function(){
	$(this).html('家电');
	$(this).css('color','red');
}).mouseout(function(){
	$(this).html('F4');
	$(this).css('color','black');
})
$(lnavs[4]).mouseover(function(){
	$(this).html('电脑');
	$(this).css('color','red');
}).mouseout(function(){
	$(this).html('F5');
	$(this).css('color','black');
})
//楼层导航右
var rnav_boxs=$('.floor_rnav').children();
var rnav_texts=$('.rnav_text');
var rnav_imgs=$('.rnav_img');
$(rnav_boxs[0]).mouseover(function(){
    $(rnav_texts[0]).css('display','block')
    $(rnav_imgs[0]).css('background-color','#71777d')
})
$(rnav_boxs[0]).mouseout(function(){
    $(rnav_texts[0]).css('display','none')
    $(rnav_imgs[0]).css('background-color','#b7bbbf')
})

$(rnav_boxs[1]).mouseover(function(){
    $(rnav_texts[1]).css('display','block')
    $(rnav_imgs[1]).css('background-color','#71777d')
})
$(rnav_boxs[1]).mouseout(function(){
    $(rnav_texts[1]).css('display','none')
    $(rnav_imgs[1]).css('background-color','#b7bbbf')
})

$(rnav_boxs[2]).mouseover(function(){
    $(rnav_texts[2]).css('display','block')
    $(rnav_imgs[2]).css('background-color','#71777d')
})
$(rnav_boxs[2]).mouseout(function(){
    $(rnav_texts[2]).css('display','none')
    $(rnav_imgs[2]).css('background-color','#b7bbbf')
})

$(rnav_boxs[3]).mouseover(function(){
    $(rnav_texts[3]).css('display','block')
    $(rnav_imgs[3]).css('background-color','#71777d')
})
$(rnav_boxs[3]).mouseout(function(){
    $(rnav_texts[3]).css('display','none')
    $(rnav_imgs[3]).css('background-color','#b7bbbf')
})

$(rnav_boxs[4]).mouseover(function(){
    $(rnav_texts[4]).css('display','block')
    $(rnav_imgs[4]).css('background-color','#71777d')
})
$(rnav_boxs[4]).mouseout(function(){
    $(rnav_texts[4]).css('display','none')
    $(rnav_imgs[4]).css('background-color','#b7bbbf')
})
$(rnav_texts[4]).click(function(){

})























})