$('#myCarousel').carousel({
    //设置自动播放/2 秒
    interval: 3000,

});

//调整轮播器箭头位置
// $('.carousel-control').css('line-height', $('.carousel-inner img ').eq(1).height() + 'px');
// console.log($('.carousel-inner img').attr('src'));
// $(window).resize(function() {

//     var $height = $('.carousel-inner img').eq(0).height() || $('.carousel-inner img').eq(1).height() || $('.carousel-inner img').eq(2).height();
//     $('.carousel-control').css('line-height', $height + 'px');
// });

$(function() {
    var btns = document.getElementsByTagName('button');
    for (let i in btns) {
        btns[i].onclick = function() {
            setTimeout(() => {
                console.log(this);
            }, 1000);
        }
    }
});