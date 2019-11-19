// ==UserScript==
// @name         Bing Wallpaper Download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download wallpaper from bing home page
// @author       Liubodong
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js
// @match        *://cn.bing.com/*
// @match        *://cn.bing.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //下载按钮
    let downloadButton = $('<li><a href="#" id="download_button">下载壁纸</a></li>')
    if ($('#sc_hdu')) {
        //将下载按钮放到上方工具栏
        $('#sc_hdu').append(downloadButton);
        $('#download_button').click(function () {
            //获取当前的背景图片
            let picUrl = $('#bgDiv').css('background-image');
            if (picUrl) {
                picUrl = picUrl.substring(5, picUrl.length - 2);
                //获取当前时间
                let nowDate = new Date();
                let year = nowDate.getFullYear();    //获取完整的年份(4位,1970-????)
                let month = nowDate.getMonth();       //获取当前月份(0-11,0代表1月)
                let date = nowDate.getDate();        //获取当前日(1-31)
                let downloadName = year + '-' + month + '-' + date + '-wallpaper.jpg'
                $('#download_button').attr('href', picUrl)
                $('#download_button').attr('download', downloadName);
                $('#download_button').click();
            }
        });
    }
})();