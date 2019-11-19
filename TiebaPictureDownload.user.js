// ==UserScript==
// @name         Baidu Tieba Picture Download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download Pictures
// @author       Liubodong
// @match        https://tieba.baidu.com/p/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //获取当前地址
    let location = document.location.href;
    let changeLocation = function(currentLocation) {
        location = currentLocation;
    }
    let arr = location.split('/');
    //当前帖子id
    let pId = arr[arr.length - 1].split('?')[0];
    //将按钮放在“快速回复”后
    let quick_reply = $('#quick_reply');
    let button = $('<a class="btn-small btn-sub" href="#" id="download_tieba_pictures">下载本帖图片</a>');
    quick_reply.after(button);
    //下载div，并绑定事件
    let div = $('<div style="position: absolute; left: 10px; width=200px; display: flex;"><div id="download_div" display="none"><div></div>')
    $('#container').prepend(div);
    $('#download_tieba_pictures').click(function () {
        let div_display = div.css('display');
        if (!div_display || div_display === 'none') {
            div.show();
        } else {
            div.hide();
        }
    });
    //获取所有图片
    let fun = {
        loadPics: function () {
            let imgs = $('img.BDE_Image');
            let html = '<ul>';
            imgs.each(function (index, element) {
                html += '<li><div style="width: 100px;"><a target="_blank" href="' + element['src'] + '" download="">第' + (index + 1) + '张图片</a>' +
                    '<img style="width: 100px; height: 100px;" src="' + element['src'] + '">' +
                    '</div></li>';
            });
            html += '</ul>'
            $('#download_div').html(html);
        }
    }
    fun.loadPics();
    setInterval(function () {
        let currentLocation = document.location.href;
        if (location !== currentLocation) {
            fun.loadPics();
            changeLocation(currentLocation);
        }
    }, 1000)
})();