
$(function(){
    var router = new Router({
        container : "#content",
        enter : "enter",
        enterTimeout : "200",
        leave : "leave",
        leaveTimeout : 250
    });

    var adminlist = {
        url : "/admin/list",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/admin/list",
                type : "get"
            });
        },bind : function(){
            $(".delete").click(function(){
                $_ajax({ 
                    url:"/admin/delete",                
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }

     var adminadd = {
        url : "/admin/add",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/admin/add",
                type : "get"
            });
        },

        bind : function(){
            var $password  = $("#password");
            var $name = $("#name");
            var $message = $(".message");

            $(".form-horizontal").submit(function(){
                if(!$name.isEmpty()){
                    $message.warning(null,"用戶名不能为空");
                    return false;
                }

                if(!$password.isEmpty()){
                    $message.warning(null,"密码不能为空");
                    return false;
                }

                if(!$name.isEmail()){
                    $message.warning(null,"请输入正确的邮箱");
                    return false;
                }

                $_ajax({
                    url : "/admin/add",
                    data : {"name" : $name.val(),"password" : $password.val()},
                    dataType : "json"
                }).then(function(obj){
                    if(obj.code == 1){
                       window.location.hash = "#/admin/list"
                    }else{
                        $message.warning(null,"操作失败，请稍后重试!");
                    }
                });
                return false;
            });
        }
    }

    var userlist = {
        url : "/user/list",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/user/list",
                type : "get"
            });
        },bind : function(){
            $(".pass").click(function(){
                $_ajax({
                    url:"/user/pass",                  
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            });
            $(".nopass").click(function(){
                $_ajax({
                    url:"/user/nopass",                  
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }

    var usershow = {
        url : "/user/show",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/user/show",
                type : "get"
            });
        }
    }

    var typelist = {
        url : "/type/list",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/type/list",
                type : "get"
            });
        }
    }

    var typeadd = {
        url : "/type/add",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/type/add",
                type : "get"
            });
        },
        bind : function(){
            var $namec = $("#namec");
            var $namef = $("#namef");
            var $namee = $("#namee");
            var $namep = $("#namep");
            var $message = $(".message");

            $(".form-horizontal").submit(function(){
                $_ajax({
                    url : "/type/doadd",
                    data : {typenamec : $namec.val(),typenamef : $namef.val(),typenamee : $namee.val(),typenamep : $namep.val()}
                }).then(function(obj){
                    if(obj.code == 1){
                        window.location.hash = "/type/list";
                    }else{
                        $message.warning("系统繁忙，请稍后重试!");
                    }
                });
                return false;
            });
        }
    }

    var productlist = {
        url : "/product/list",
        className : "page",
        render : function(){
             return $_ajax({
                url : "/product/list",
                type : "get"
            });
        },bind : function(){
            $(".delete").click(function(){
                $_ajax({ 
                    url:"/product/delete",                
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }

    var productshow = {
        url : "/product/show/:id",
        className : "page",
        render : function(){
             return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        }
    }

    var productadd = {
        url : "/product/add",
        className : "page",
        render : function(){
             return $_ajax({
                url : "/product/add",
                type : "get"
            });
        },

        bind : function(){
            var $message = $(".message");
            $(".form-horizontal").submit(function(){
                var data = new FormData();
                data.append("pnamec",$("#pnamec").val());
                data.append("pnamef",$("#pnamef").val());
                data.append("pnamee",$("#pnamee").val());
                data.append("pnamep",$("#pnamep").val());
                data.append("brandc",$("#brandc").val());
                data.append("brandf",$("#brandf").val());
                data.append("brande",$("#brande").val());
                data.append("brandp",$("#brandp").val());
                data.append("price",$("#price").val());
                data.append("manufacturedc",$("#manufacturedc").val());
                data.append("manufacturedf",$("#manufacturedf").val());
                data.append("manufacturede",$("#manufacturede").val());
                data.append("manufacturedp",$("#manufacturedp").val());
                data.append("paddressc",$("#paddressc").val());
                data.append("paddressf",$("#paddressf").val());
                data.append("paddresse",$("#paddresse").val());
                data.append("paddressp",$("#paddressp").val());
                data.append("pintroductionc",$("#pintroductionc").val());
                data.append("pintroductionf",$("#pintroductionf").val());
                data.append("pintroductione",$("#pintroductione").val());
                data.append("pintroductionp",$("#pintroductionp").val());
                data.append("tid",$(".tid").val());
                data.append("hsnum",$("#hsnum").val());
                data.append("img",$("#imgurl").get(0).files[0]);
                $_ajax({
                        url : "/product/doadd",
                        data : data,
                        dataType : "json",
                        processData : false,
                        contentType : false,
                        cache : false
                }).then(function(obj){
                    if(obj.code == 1){
                        window.location.hash = "#/product/list";
                    }else{
                        $message.warning("系统繁忙，请稍后重试!");
                    }
                });
                return false;
            }); 
        }
    }

    var productlook = {
        url : "/product/look",
        className : "page",
        render : function(){
             return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        },bind : function(){
            $(".pass").click(function(){
                $_ajax({
                    url:"/product/pass",                  
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            });
            $(".nopass").click(function(){
                $_ajax({
                    url:"/product/nopass",                  
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }

    var exihibitionlist = {
        url : "/exihibition/list",
        class : "page",
        render : function(){
            return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        },bind : function(){
            $(".delete").click(function(){
                $_ajax({ 
                    url:"/exihibition/delete",                
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }
    var exihibitionshow = {
        url : "/exihibition/show/:id",
        class : "page",
        render : function(){
            return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        }
    }

    var exihibitionadd = {
        url : "/exihibition/add",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/exihibition/add",
                type : "get"
            });
        },
        bind : function(){
            var $namec = $("#namec");
            var $namef = $("#namef");
            var $namee = $("#namee");
            var $namep = $("#namep");
            var $typec = $("#typec");
            var $typef = $("#typef");
            var $typee = $("#typee");
            var $typep = $("#typep");
            var $addressc = $("#addressc");
            var $addressf = $("#addressf");
            var $addresse = $("#addresse");
            var $addressp = $("#addressp");
            var $introductionc = $("#introductionc");
            var $introductionf = $("#introductionf");
            var $introductione = $("#introductione");
            var $introductionp = $("#introductionp");
            var $organizerc = $("#organizerc");
            var $organizerf = $("#organizerf");
            var $organizere = $("#organizere");
            var $organizerp = $("#organizerp");
            var $time = $("#time");
            var $message = $(".message");

            $(".form-horizontal").submit(function(){
                $_ajax({
                    url : "/exihibition/doadd",
                    data : {exihibitionnamec : $namec.val(), exihibitionnamef : $namef.val(),exihibitionnamee : $namee.val(),exihibitionnamep : $namep.val(),
                            exihibitiontypec : $typec.val(),exihibitiontypef : $typef.val(),exihibitiontypee : $typee.val(),exihibitiontypep : $typep.val(),
                            addressc : $addressc.val(),addressf : $addressf.val(),addresse : $addresse.val(),addressp : $addressp.val(),
                            introductionc : $introductionc.val(),introductionf : $introductionf.val(),introductione : $introductione.val(),introductionp : $introductionp.val(),
                            organizerc : $organizerc.val(),organizerf : $organizerf.val(),organizere : $organizere.val(),organizerp : $organizerp.val(),
                            time : $time.val()}
                }).then(function(obj){
                    if(obj.code == 1){
                        window.location.hash = "/exihibition/list";
                    }else{
                        $message.warning("系统繁忙，请稍后重试!");
                    }
                });
                return false;
            });
        }
    }

    var economiclist = {
        url : "/economic/list",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/economic/list",
                type : "get"
            });
        },bind : function(){
            $(".delete").click(function(){
                $_ajax({ 
                    url:"/economic/delete",                
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }
    var economicshow = {
        url : "/economic/show/:id",
        class : "page",
        render : function(){
            return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        }
    }

    var economicadd = {
        url : "/economic/add",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/economic/add",
                type : "get"
            });
        },
        bind : function(){
            var $titlec = $("#titlec");
            var $titlef = $("#titlef");
            var $titlee = $("#titlee");
            var $titlep = $("#titlep");
            var $contentc = $("#contentc");
            var $contentf = $("#contentf");
            var $contente = $("#contente");
            var $contentp = $("#contentp");
            var $time = $("#time");
            var $message = $(".message");

            $(".form-horizontal").submit(function(){
                $_ajax({
                    url : "/economic/doadd",
                    data : {titlec : $titlec.val(), titlef : $titlef.val(),titlee : $titlee.val(),titlep : $titlep.val(),
                            contentc : $contentc.val(),contentf : $contentf.val(),contente : $contente.val(),contentp : $contentp.val(),
                            time : $time.val()}
                }).then(function(obj){
                    if(obj.code == 1){
                        window.location.hash = "/economic/list";
                    }else{
                        $message.warning("系统繁忙，请稍后重试!");
                    }
                });
                return false;
            });
        }
    }

    var lawslist = {
        url : "/laws/list",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/laws/list",
                type : "get"
            });
        },bind : function(){
            $(".delete_laws").click(function(){
                $_ajax({ 
                    url:"/laws/delete",                
                    data:{"id":$(this).attr("data-id")},
                    dataType:"json"
                }).then(function(obj){
                     if(obj.code ==1){
                        window.location.reload();
                    }else{
                        alert("操作失败,请稍后重试");
                    }
                })
                 return false;
            })
        }
    }
    var lawsshow = {
        url : "/laws/show/:id",
        class : "page",
        render : function(){
            return $_ajax({
                url:location.hash.replace('#',''),
                type : "get"
            });
        }
    }

    var lawsadd = {
        url : "/laws/add",
        class : "page",
        render : function(){
            return $_ajax({
                url : "/laws/add",
                type : "get"
            });
        },
        bind : function(){
            var $titlec = $("#titlec");
            var $titlef = $("#titlef");
            var $titlee = $("#titlee");
            var $titlep = $("#titlep");
            var $time = $("#time");
            var $message = $(".message");

            $(".form-horizontal").submit(function(){
                $_ajax({
                    url : "/laws/doadd",
                    data : {titlec : $titlec.val(), titlef : $titlef.val(),titlee : $titlee.val(),titlep : $titlep.val(),
                            time : $time.val()}
                }).then(function(obj){
                    if(obj.code == 1){
                        window.location.hash = "/laws/list";
                    }else{
                        $message.warning("系统繁忙，请稍后重试!");
                    }
                });
                return false;
            });
        }
    }

    router.push(adminlist).push(adminadd)
          .push(userlist).push(usershow)
          .push(typelist).push(typeadd)
          .push(productlist).push(productadd).push(productlook).push(productshow)   
          .push(exihibitionlist).push(exihibitionshow).push(exihibitionadd)
          .push(economiclist).push(economicshow).push(economicadd)
          .push(lawslist).push(lawsshow).push(lawsadd)
          .init();
});