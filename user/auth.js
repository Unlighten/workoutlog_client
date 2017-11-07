$(function(){
// $(function() {
   $.extend(WorkoutLog, {
      signup: function() {
            // var fname = $("#su_fname").val();
            // var lname = $("#su_lname").val();
            // var email = $("#su_email").val();
            var username = $("#su_username").val();
            var password = $("#su_password").val();
            // var pic = $("#su_pic").val();
            var user = {user:  {username: username, password: password}};
            var signup = $.ajax({
               type: "POST", 
               url: WorkoutLog.API_BASE + "user", 
               data: JSON.stringify(user), 
               contentType: "application/json"
            });
            signup.done(function(data) {
               if (data.sessionToken) {
                  WorkoutLog.setAuthHeader(data.sessionToken);
                  WorkoutLog.definition.fetchAll();
                  WorkoutLog.log.fetchAll();
               }
               $("#signup-modal").modal("hide");
               $(".tib-tab").removeClass("invisible");
               $("#loginout").text("Logout");
               $(".side-title-1").text("Welcome Back!");
               $("#side-image").removeClass("invisible");
               $("#sidebar-login-id").addClass("invisible");
               $(".side-title-2").addClass("invisible");
               $("#signup-but").addClass("invisible");
               // go to define tab
               $('.nav-tabs a[href="#workoutnow"]').tab('show');

            //    $("#su_fname").val("");
            //    $("#su_lname").val("");
            //    $("#su_email").val("");
               $("#su_username").val("");
               $("#su_password").val("");
            //    $("#su_pic").val("")
            })
            .fail(function() {
               $("#su_error").text("There was an issue with your username").show();
              
            });
      },

      login: function() {
      //    var fname = $("#li_fname").val();
      //    var lname = $("#li_lname").val();
      //    var email = $("#li_email").val();
         var username = $("#li_username").val();
         var password = $("#li_password").val();
         var user = {user:  {username: username, password: password }};
         var login = $.ajax({
            type: "POST", 
            url: WorkoutLog.API_BASE + "login", 
            data: JSON.stringify(user), 
            contentType: "application/json"
         });
         login.done(function(data) {
            if (data.sessionToken) {
               WorkoutLog.setAuthHeader(data.sessionToken);
               WorkoutLog.definition.fetchAll();
               WorkoutLog.log.fetchAll();
            }

            // var fileReader = new FileReader();
            // fileReader.onload = (function (event) {
            //     var ab = data.user.pic;
            //    console.log(ab);
            //     var ua = new Uint8Array(ab.data); //blob

            //     var binaryImg;
            //     for (var i = 0; i < ua.length; i++) {
            //          binaryImg += String.fromCharCode(ua[i]);
            //     }
            //     var newImg ='';
            //    for (var i = binaryImg.indexOf('C'); i < binaryImg.length; i++){
            //      newImg += binaryImg[i]
            //    }
            //    var test = new Blob ([newImg], {
            //       type: "plain/jpg"
            //    })
            //    fileReader.readAsDataURL(test);
               //  var img64 = btoa(newImg);
               // console.log(img64);
               //  var image = new Image();
               //  image.src = 'data:image/png;base64,' + img64;
               // console.log(image.src);
               //  // var img = document.getElementById('side-image');
               //  // img.src = image.src;
               //  $('#side-image').attr("src", "test");
            })();
            // fileReader.readAsArrayBuffer(event.target.files[0]); //data.user.pic 

            // console.log(data.user.pic);
            $("#login-modal").modal("hide");
            $(".tib-tab").removeClass("invisible");
            // $("#side-image").attr("src", data.user.pic);

            $(".side-title-1").text("Welcome Back!");
            $("#side-image").removeClass("invisible");
            $("#sidebar-login-id").addClass("invisible");
            $(".side-title-2").addClass("invisible");
            $("#signup-but").addClass("invisible");

            $("#loginout").text("Logout");
            // $("#li_fname").val("");
            // $("#li_lname").val("");
            // $("#li_email").val("");
            $("#li_username").val("");
            $("#li_password").val("");


            $('a[href="#workoutnow"]').tab("show");

         })
         .fail(function() {
            $("#li_error").text("There was an issue with your username or password").show();
            });
      },

      loginout: function() {
         if (window.localStorage.getItem("sessionToken")) {
            window.localStorage.removeItem("sessionToken");
           window.location.reload(true);
         }
         $(".side-title-1").text("Already a Swole member?")
         $("#sidebar-login-id").removeClass("invisible");
         $(".side-title-2").removeClass("invisible");
         $("#signup-but").removeClass("invisible");
         $("#side-image").addClass("invisible");
         $(".tib-tab").addClass("invisible");

      }
   });

   // bind events
   $("#login").on("click", WorkoutLog.login);
   $("#signup").on("click", WorkoutLog.signup);
   $("#loginout").on("click", WorkoutLog.loginout);

   if (window.localStorage.getItem("sessionToken")) {
      $("#loginout").text("Logout");
   }

});