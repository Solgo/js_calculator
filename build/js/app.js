!function n(t,o,r){function i(u,a){if(!o[u]){if(!t[u]){var p="function"==typeof require&&require;if(!a&&p)return p(u,!0);if(e)return e(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=o[u]={exports:{}};t[u][0].call(l.exports,function(n){var o=t[u][1][n];return i(o?o:n)},l,l.exports,n,t,o,r)}return o[u].exports}for(var e="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(n,t,o){function r(n){this.skin=n}r.prototype.pingPong=function(n){for(var t=[],o=1;o<=n;o++)o%15===0?t.push("ping-pong"):o%3===0?t.push("ping"):o%5===0?t.push("pong"):t.push(o);return t},r.prototype.addition=function(n,t){return n+t},r.prototype.subtraction=function(n,t){return n-t},r.prototype.multiplication=function(n,t){return n*t},r.prototype.division=function(n,t){return n/t},o.calculatorModule=r},{}],2:[function(n,t,o){var r=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("#arithmetic").submit(function(n){n.preventDefault();var t=new r("hot pink"),o=parseInt($("#number1").val()),i=parseInt($("#number2").val());switch($("#operator").val()){case"+":var e=t.addition(o,i);$("#math-solution").html("<p>"+e+"</p>");break;case"-":var u=t.subtraction(o,i);$("#math-solution").html("<p>"+u+"</p>");break;case"*":var a=t.multiplication(o,i);$("#math-solution").html("<p>"+a+"</p>");break;case"/":var p=t.division(o,i);$("#math-solution").html("<p>"+p+"</p>")}})});var r=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var t=$("#goal").val(),o=new r("hot pink"),i=o.pingPong(t);i.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var t=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank You, "+t+" has been added to our list!</p>")})})},{"./../js/pingpong.js":1}]},{},[2]);