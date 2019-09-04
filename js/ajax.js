$(document).ready(function(){
    var dbURL = "https://shareddb-g.hosting.stackcp.net";
    var dbName = "drmrzd-373116ae";
    var dbUser = "dremerz";
    var dbPW = "dremerz85";

    $("#engageForm").submit(function (){
        console.log('hello there');
        $.ajax({
            type: "POST",
            url: "https://shareddb-g.hosting.stackcp.net/drmrzd-373116ae/",
            username: "jdury",
            password: "jdury420",
            data: {
                ACTIVITY: "This is an Activity"
            },
            success: function(){  
                alert("success");  
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
              }
        });
    });
});