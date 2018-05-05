$(".tab-content-one").show();
$(".tab-content-two").hide();
$(".tab-content-three").hide();

$(".tab-one").on('click', _ => {
    $(".tab-content-one").show();
    $(".tab-content-two").hide();
    $(".tab-content-three").hide();
})

$(".tab-two").on('click', _ => {
    $(".tab-content-one").hide();
    $(".tab-content-two").show();
    $(".tab-content-three").hide();
})

$(".tab-three").on('click', _ => {
    $(".tab-content-one").hide();
    $(".tab-content-two").hide();
    $(".tab-content-three").show();
})