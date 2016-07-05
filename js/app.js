/**
 * Created by gao on 2016/7/4.
 */
$(document).ready(function () {
    $(".main ul li").each(function (index) {
        $(this).click(function(){
            $(".main ul li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if(index==0){
                $(".main .skill").css({display:"block"});
                $(".main .experience").css({display:"none"});
                $(".main .evaluate").css({display:"none"});
            }else if(index==1){
                $(".main .skill").css({display:"none"});
                $(".main .experience").css({display:"block"});
                $(".main .evaluate").css({display:"none"});
            }else if(index==2){
                $(".main .skill").css({display:"none"});
                $(".main .experience").css({display:"none"});
                $(".main .evaluate").css({display:"block"});
            }
        })
    })
})