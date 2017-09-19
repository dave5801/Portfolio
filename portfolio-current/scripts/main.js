'use strict';

$(document).ready(function(){
  tabNavigation();

});

var tabNavigation = function(){
  $("#about-tab").click(function(){
      $(".about-section").fadeIn();
      $(".projects-section").hide();
      $(".writings-section").hide();
    });

    $("#projects-tab").click(function(){
      $(".projects-section").fadeIn();
      $(".about-section").hide();
      $(".writings-section").hide();
    });

    $("#writings-tab").click(function(){
      $(".writings-section").fadeIn();
      $(".about-section").hide();
      $(".projects-section").hide();
    });

}

