~function(){
    /** 
    * 自定义错误提示
    */
    $.fn.extend({
        warning:function(title,content){
            title = title||"警告";
            content = content||"这是警告";
            var html ='<div class="alert alert-warning alert-dismissable">'+
                      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>'+
                      '<strong>${title}！</strong>&nbsp;&nbsp;${content}'+
                      '</div>';
            var $html = $(html.replace("${title}",title).replace("${content}",content)).css("display","none");
            $(this).html($html);
            //$html.clearQueue().delay(100).fadeIn("fast").delay(3000).fadeOut("fast");
            $html.slideDown().delay(3000).slideUp();
            return $(this);
        },
        success:function(title,content){
            title = title||"成功";
            content = content||"操作成功";
            var html ='<div class="alert alert-success alert-dismissable">'+
                      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>'+
                      '<strong>${title}！</strong>&nbsp;&nbsp;${content}'+
                      '</div>';
            var $html = $(html.replace("${title}",title).replace("${content}",content)).css("display","none");
            $(this).html($html);
            //$html.clearQueue().delay(100).fadeIn("fast").delay(3000).fadeOut("fast");
            $html.slideDown().delay(3000).slideUp();
            return $(this);
        },
        message:function(title,content){
            title = title||"提示";
            content = content||"这是个提示";
            var html ='<div class="alert alert-info alert-dismissable">'+
                      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>'+
                      '<strong>${title}！</strong>&nbsp;&nbsp;${content}'+
                      '</div>';
            var $html = $(html.replace("${title}",title).replace("${content}",content)).css("display","none");
            $(this).html($html);
            //$html.clearQueue().delay(100).fadeIn("fast").delay(3000).fadeOut("fast");
            $html.slideDown().delay(3000).slideUp();
            return $(this);
        },
        error:function(title,content){
            title = title||"错误";
            content = content||"系统错误";
            var html ='<div class="alert alert-danger alert-dismissable">'+
                      '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>'+
                      '<strong>${title}！</strong>&nbsp;&nbsp;${content}'+
                      '</div>';
            var $html = $(html.replace("${title}",title).replace("${content}",content)).css("display","none");
            $(this).html($html);
            //$html.clearQueue().delay(100).fadeIn("fast").delay(3000).fadeOut("fast");
            $html.slideDown().delay(3000).slideUp();
            return $(this);
        }
    })
    /** 
    * 自定义jquery验证插件
    */
    $.fn.extend({
        isEmpty:function(){
            var reg = /^\S+$/;
            return reg.test(this.val());
        },
        isEmail:function(){
            var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
            return reg.test(this.val());
        }
    })
    /** 
     * 对cookie的操作
     */
    $.extend({
        getCookie:function(key){
            var cookie = decodeURIComponent(document.cookie);
            var index = cookie.indexOf(key);
            
            if(index == -1){
                return "";
            }
            var start = index + key.length + 1;
            var end = cookie.indexOf(";",start);

            if(end==-1){
                return cookie.slice(start);
            }else{
                return cookie.slice(start,end);
            }
        }
    });
    /** 
    * 对AJAX的二次包装
    */
    $_ajax = function(option){
        var _option = extend(option,{
            type:"post"
        });
        $(".loading").fadeIn("fast");
        return $.ajax(_option).fail(function(err){
            if(err.status == 404){
                window.location.href = "/404.html";
            }
            if(err.status == 500){
                window.location.href = "/500.html";
            }
        }).always(function () {
            $(".loading").fadeOut("fast");
        });
     }

    function extend(source,target){
        for(var key in source){
            target[key]=source[key];
        }
        return target;
    }
}();