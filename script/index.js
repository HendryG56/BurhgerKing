let slide = $(".image-slides");
let width = $(".image-slide").width();
let left = $(".toLeft");
let right = $(".toRight");

slide.css("margin-left", -width);
$(".image-slides:last-child").prependTo(slide);

left.click(() => {
    slide.animate({ left: width }, 2000, () => {
        $(".image-slide:last-child").prependTo(slide);
        slide.css("left", 0);
    });
});

right.click(() => {
    slide.animate({ left: -width }, 2000, () => {
        $(".image-slide:first-child").appendTo(slide);
        slide.css("left", 0);
    });
});
