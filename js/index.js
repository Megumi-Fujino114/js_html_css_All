$(function(){
 // $(".name").on("click",function(){
 //    $(this).css("opacity",0.5);
 // })

 $("#hamburger-btn")
 .on("click",function(){
    $(this).toggleClass("on");
 })
.on("click",function(){
     $(".target").toggleClass("hide");
 });

let d1_jump = $("#d1-jump").offset().top;
$(".d1").click(function(){
    $("html,body").animate({scrollTop:d1_jump});
});

let d2_jump = $("#d2-jump").offset().top;
$(".d2").click(function(){
    $("html,body").animate({scrollTop:d2_jump});
});

let d3_jump = $("#d3-jump").offset().top;
$(".d3").click(function(){
    $("html,body").animate({scrollTop:d3_jump});
});

let d4_jump = $("#d4-jump").offset().top;
$(".d4").click(function(){
    $("html,body").animate({scrollTop:d4_jump});
});

$("#button").on("click",function(){
    $(".modal-content").fadeIn("slow");
    $("#modal-bg").fadeIn("slow");
// sllowは遅めのスローモーション
});
// モーダル表示止める
$(".modal-close").on("click",function(){
  $(".modal-content").fadeOut("slow");
  $("#modal-bg").fadeOut("slow");
});

});