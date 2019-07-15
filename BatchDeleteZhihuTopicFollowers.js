// ==UserScript==
// @name         BatchDeleteZhihuTopicFollowers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download wallpaper from bing home page
// @author       Liubodong
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let topics = $('a[class=TopicLink]');
    if (topics) {
        for (let index in topics) {
            let topic = topics[index];
            let href = topic.href;
            if (href) {
                let array = href.split('/');
                if (array) {
                    let topicId = array[array.length - 1];
                    let url = 'https://www.zhihu.com/api/v4/topics/' + topicId + '/followers';
                    $.ajax({
                        url: url,
                        method: 'DELETE',
                        success: function (res) {
                            console.log(topicId);
                        }
                    });
                }
            }
        }
    }

    let questions = $('div[class=QuestionItem-title] > a');
    if (questions) {
        for (let index in questions) {
            let question = questions[index];
            let href = question.href;
            if (href) {
                let array = href.split('/');
                if (array) {
                    let questionId = array[array.length - 1];
                    let url = 'https://www.zhihu.com/api/v4/questions/' + questionId + '/followers';
                    $.ajax({
                        url: url,
                        method: 'DELETE',
                        success: function (res) {
                            console.log(questionId);
                        }
                    });
                }
            }
        }
    }

    let users = $('a[class=UserLink-link]');
    if (users) {
        for (let index in users) {
            let user = users[index];
            let href = user.href;
            if (href) {
                let array = href.split('/');
                if (array) {
                    let userId = array[array.length - 1];
                    let url = 'https://www.zhihu.com/api/v4/members/' + userId + '/followers';
                    $.ajax({
                        url: url,
                        method: 'DELETE',
                        success: function (res) {
                            console.log(userId);
                        }
                    });
                }
            }
        }
    }
})();