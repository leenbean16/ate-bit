$(".tab-content-one").show().addClass("animated").addClass("fadeIn");
$(".tab-content-two").hide();
$(".tab-content-three").hide();

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
