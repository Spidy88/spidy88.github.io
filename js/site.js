$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vjs.zencdn.net/v/oceans.mp4', { ambient: true });
});

$(document).ready(function() {
    $('#main').fullpage();
});

var app = angular.module('pacamari', ['angular-fire']);