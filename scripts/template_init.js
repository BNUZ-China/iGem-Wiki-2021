window.onload = function () {
    $('.dropdown-toggle').dropdown();
};

var numToPx = function (number) {
    return number.toString()+'px';
}

$(window).scroll(function() {
    /*
    使用浮动样式的条件；正文文本框距顶距离小于屏幕高的三分之一
     */
    var contentNav = document.getElementById('bnuz-content-nav-container');
    var contentText = document.getElementById('bnuz-text-container');
    var windowHeight = window.screen.height;
    var trigger_value = windowHeight / 3;   // 临界高度
    var boundingRect = contentNav.getBoundingClientRect();
    var width = boundingRect.width;
    var top = trigger_value;
    var left = boundingRect.x;
    // 取400为临界值
    if (contentText.getBoundingClientRect().y < trigger_value) {
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