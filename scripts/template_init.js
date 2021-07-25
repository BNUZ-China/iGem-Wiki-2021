window.onload = function () {
    $('.dropdown-toggle').dropdown();
};

var numToPx = function (number) {
    return number.toString()+'px';
}

$(window).scroll(function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var contentNav = document.getElementById('bnuz-content-nav-container');
    var boundingRect = contentNav.getBoundingClientRect();
    var width = boundingRect.width;
    var top = boundingRect.y;
    var left = boundingRect.x;
    // 取400为临界值
    if (scrollTop > 400) {
        // 滚动到下方的样式
        contentNav.className = 'bnuz-content-nav-float';
        contentNav.style.width = numToPx(width);
        contentNav.style.top = numToPx(top);
        contentNav.style.left = numToPx(left);
    } else {
        // 返回的样式
        contentNav.className = 'col-4';
    }
})