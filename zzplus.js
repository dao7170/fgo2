$(document).ready(function(){
    var i;

    $("body").on("click",".upload",function(){
        i=$(this).attr("id")-1;
        if($("input:eq("+i+")").val()!=""){
            $(".fgo-img-in:eq("+i+")").css("background-image","url("+$("input:eq("+i+")").val()+")");
        }else{
            $("#file").click();
        }
    });
    $("body").on("click",".uploads",function(){
        if($("input:eq(9)").val()!=""){
            $("#img1").attr('src',$("input:eq(9)").val())
            $("#img1").css("opacity",1)
        }else{
            $("#files").click();
        }

    });
    load=function(){
        var selectedFile = document.getElementById("file").files[0];
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = function(){
            $(".fgo-img-in:eq("+i+")").css("background-image","url("+this.result+")");
        };
    }
    load2=function(){
        var selectedFile = document.getElementById("files").files[0];
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = function(){
            $("#img1").attr('src',this.result)
            $("#img1").css("opacity",1)
        };
    }
    $("body").on("click",".icon",function(){
        if($(this).css("opacity")==1){
            $(this).css("opacity","0");
        }else{
            $(this).css("opacity","1");
        }
    })
    $("body").on("click",".load",function(){
        html2canvas($(".fgo")[0],{
            useCORS: true, //（图片跨域相关）
            allowTaint: true, //允许跨域（图片跨域相关）
            scale:1
        }).then(function(canvas) {
            $("canvas").remove();
            $(".tip").text("签名档生成完毕，右键另存为到本地即可，图片如有模糊乃正常现象，保存到本地就没问题啦。");
            document.body.appendChild(canvas);
        });
    });
    $("body").on("click","#btn1",function(){
        $(".fgo-bg img").attr("src","cn-andriod-bg.png");
    });
    $("body").on("click","#btn2",function(){
        $(".fgo-bg img").attr("src","jp-andriod-bg.png");
    });
    $("body").on("click","#btn3",function(){
        $(".fgo-bg img").attr("src","qd-andriod-bg.png");
    });
    $("body").on("click","#btn4",function(){
        $(".fgo-bg img").attr("src","cn-ios-bg.png");
    });
    $("body").on("click","#btn5",function(){
        $(".fgo-bg img").attr("src","jp-ios-bg.png");
    });
      
    window.onbeforeunload=function (){
        // localStorage.setItem("fgo-data",$("body").html());
    }
    window.onload=function(){
        var data = localStorage.getItem("fgo-data");
        if(data){
            $("body").html(data);
            $(".tip").text("");
            $("canvas").remove();
        }
    }
 })