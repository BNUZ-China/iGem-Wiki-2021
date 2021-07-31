"use strict";

window.onload = function () {
    $('.dropdown').mouseover(function () {
        $(this).children('.dropdown-menu').show();
        $(this).addClass('bnuz-nav-hover')
    }).mouseout(function () {
        $(this).children('.dropdown-menu').hide();
        $(this).removeClass('bnuz-nav-hover')
    });
};

var numToPx = function (number) {
    return number.toString()+'px';
};

var anchors = document.getElementsByClassName('bnuz-content-anchor');
var navItems = document.getElementsByClassName('bnuz-content-nav-item');
var footer = document.getElementById('bnuz-footer');
var anchors_distance = [];
for (var anchor of anchors) {
    anchors_distance.push(anchor.offsetTop);
}

var windowHeight = document.documentElement.clientHeight;
var trigger_value = windowHeight / 3;   // 临界高度

var footer_height = document.getElementsByTagName('footer')[0].clientHeight

var updateNav = function () {
    var scroll_location = document.documentElement.scrollTop;
    var k = undefined; // 表示第几个应该高亮
    var k_defined = false;
    for (var i = 0; i < anchors.length; i++) {
        if (scroll_location > anchors_distance[i] - windowHeight / 8) {
            k = i;
            k_defined = true;
        }
    }

    if (!k_defined) return;

    var active_elements = document.getElementsByClassName('bnuz-content-nav-item-active');
    for (var active_element of active_elements) {
        active_element.classList.remove('bnuz-content-nav-item-active');
    }

    var active_navItem = navItems[k];
    active_navItem.classList.add('bnuz-content-nav-item-active');
};

var moveNav = function() {
    /*
    使用浮动样式的条件；正文文本框距顶距离小于屏幕高的三分之一
     */
    var contentNav = document.getElementById('bnuz-content-nav-container');
    var contentText = document.getElementById('bnuz-text-container');
    var boundingRect = contentNav.getBoundingClientRect();
    var top = trigger_value;
    var left = boundingRect.x;

    // 到下方
    if (contentText.getBoundingClientRect().y < trigger_value) {
        // 判断是否到底部
        if (windowHeight > footer.getBoundingClientRect().y) {
            // 底部
            contentNav.className = 'col-4 bnuz-content-nav-bottom';
            return;
        }
        contentNav.className = 'bnuz-content-nav-float';
        contentNav.style.top = numToPx(top);
        contentNav.style.left = numToPx(left);
    } else {
        // 返回的样式
        contentNav.className = 'col-4';
    }

    // 底部临界250
};

window.addEventListener('scroll', function () {
    moveNav();
    updateNav();
})


var contentNavJumptoFunctionGenerator = function (i) {
    // i是该按钮的序号
    return function () {
        var destination_height = anchors_distance[i];
        window.scrollTo({
            top: destination_height - windowHeight / 8 + 10,
            // top: destination_height,
            behavior: 'smooth'
        });
    }
}

for (var i = 0; i < navItems.length; i++) {
    navItems[i].onclick = contentNavJumptoFunctionGenerator(i);
}
