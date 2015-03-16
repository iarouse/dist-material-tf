
$(function(){
    var ink, d, x, y;
    $(".ui-wave").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }
             
        ink = $(this).find(".ink");
        ink.removeClass("wave-animate");
         
        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }
         
        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;
         
        ink.css({top: y+'px', left: x+'px'}).addClass("wave-animate");
    });
});


;(function(){
    "use strict";
    var App;

    App = {
        init: function() {
            App.setCopyRight();
            App.setFixedNavbar();
            App.setHeroHeight();
            App.smoothScroll();
            App.stellar();
            App.wow();
        },
        setCopyRight: function() {
            var date, year;
            date = new Date();
            year = date.getFullYear();
            $("#copyright").text(year);
        },
        setFixedNavbar: function() {
            var $win, $header;
            var h = window.innerHeight - 80;
            $win = $(window);
            $header = $('#header')
            $win.on('scroll', function() {
                if ($win.scrollTop() > h) {
                    $header.addClass('navbar-fixed-top');
                } else {
                    $header.removeClass('navbar-fixed-top');
                }
            })
        },
        setHeroHeight: function() {
            var h = window.innerHeight;
            $('#hero').css('height', h );
        },
        smoothScroll: function() {
            $(".navbar-nav a").smoothScroll();
        },
        stellar: function() {
            $(window).stellar({
                horizontalOffset: 0,
                responsive: true
            });
        },
        wow: function() {
            new WOW().init();
        }
    }

    App.init();
    $(window).resize(App.setHeroHeight);
}).call(this);