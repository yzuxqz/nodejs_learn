"use strict";$(function(){var e=!0;function o(){$(document).scrollTop()>=$(".recommed").offset().top?$(".fixedtool").fadeIn():$(".fixedtool").fadeOut()}o(),$(window).scroll(function(){o(),e&&$(".floor .w").each(function(o,t){$(document).scrollTop()>=$(t).offset().top&&$(".fixedtool li").eq(o).addClass("current").siblings("li").removeClass("current")})}),$(".fixedtool ul").on("click","li",function(){e=!1;var o=$(this).index(),t=$(".floor .w").eq(o).offset().top;$("body,html").stop().animate({scrollTop:t},function(){e=!0}),$(this).addClass("current").siblings("li").removeClass("current")})});