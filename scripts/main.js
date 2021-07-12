// var zoom_animate = function () {
//     con = $('.zoom_container')[0];
//     con.animate({
//         transform: 'scale(2.3)'
//     }, {delay: 4000, duration: 3000, fill: "forwards", easing: 'ease'});
//     con.animate({
//         display: 'none'
//     }, {duration: 3000, fill: "forwards", easing: 'ease'})
// }
//
// $('.mask_layer_left')[0].animate({
//     transform: 'rotateY(80deg)'
// }, {duration: 3000, fill: "forwards", easing: 'ease'})
//
// $('.mask_layer_right')[0].animate({
//     transform: 'rotateY(-80deg)'
// }, {duration: 3000, fill: "forwards", easing: 'ease'})
//
// zoom_animate()

zoom_container = $('.zoom_container')[0]
zoom_container.addEventListener('animationend', function () {
    zoom_container.hidden = true
})