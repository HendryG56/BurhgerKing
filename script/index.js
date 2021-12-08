let width = $('.image-slide').width()

$(".image-slides").css("margin-left", -width)
$(".image-slides:last-child").prependTo(".image-slides")

$(".toLeft").click(() => {
    $('.image-slides').animate(
        {"left": width},
        2000,
        () =>{
            $(".image-slide:last-child").prependTo(".image-slides")
            $('.image-slides').css("left", "")
        }
    )
})

$(".toRight").click(() => {
    $('.image-slides').animate(
        {"left": -width},
        2000,
        () =>{
            $(".image-slide:first-child").appendTo(".image-slides")
            $('.image-slides').css("left", "")
        }
    )
})