    $(".tab-content-one").show().addClass("animated").addClass("fadeIn");
    $(".tab-content-two").hide();
    $(".tab-content-three").hide();



    $.ajax({
        url: "https://api.instagram.com/oembed?url=http://instagr.am/p/BiYd_PQFjcH/",
        success: ((URL) => {
                console.log(URL);
        })
    })


    $(".tab-one").on('click', _ => {
        const tabOneContent = $("<div class='tab-content-a'></a>");
        $(".tab-content-one").show().addClass("animated").addClass("fadeIn");
        $(".tab-content-two").hide();
        $(".tab-content-three").hide();
    })

    $(".tab-two").on('click', _ => {
        $(".tab-content-one").hide();
        $(".tab-content-two").show().addClass("animated").addClass("fadeIn");
        $(".tab-content-three").hide();
    })

    $(".tab-three").on('click', _ => {
        $(".tab-content-one").hide();
        $(".tab-content-two").hide();
        $(".tab-content-three").show().addClass("animated").addClass("fadeIn");
    })

    // $(".candy-pic").on("click", function(){
    //  $(this).addClass("animated").addClass("bounce");
    // });


    // instagram creds
    // https://api.instagram.com/oauth/authorize/?client_id=271963988ad24de5834ebbbe60736602&redirect_uri=www://instagram.com/atebitedibles&response_type=token
    // http://your-redirect-uri#access_token=271963988ad24de5834ebbbe60736602


    // ACCESS_TOKEN    A valid access token.
    // MAX_ID  Return media earlier than this max_id.
    // MIN_ID  Return media later than this min_id.
    // COUNT   Count of media to return.





    // curl 
    //   -X POST 
    //   -F 'access_token=271963988ad24de5834ebbbe60736602' 
    //   https://api.instagram.com/v1/media/271963988ad24de5834ebbbe60736602