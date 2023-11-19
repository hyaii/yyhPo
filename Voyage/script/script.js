// 언어메뉴 클릭
// $(document).ready(function(){
//     $(".menu_down>li").hover(function(){
//         var submenu = $(this).next("ul");

//         if (submenu.is(":visible") ){
//             submenu.slideUp();
//         }else{
//             submenu.slideDown();
//         }

//     });
// });

// 드롭다운 메뉴----------------------------------------------------->
$(document).ready(function(){
    
$(".menu_down>li").click(function(){
    //  .main_menu의 자식인 li에 마우스를 올리거나 내렸을때(hover는 올렸다+내렸다 둘 다 포함)
    //  ** .main_menu>li>a로 선택하면 안됨! .sub_menu가 자식요소가 아니기 때문에 마우스 벗어났을 때 접힘
    
        $(".sub_menu").stop().slideToggle();
        //  .sub_menu 클래스를 가지고 있는 모든 요소를 슬라이드 다운/업(slideToggle 슬라이드 다운+업 둘 다 포함)해준다.
        // Toggle은 상태를 반대로 만들어주는 기능. (ex: 접힘 > 펼침으로 바꾸거나 / 펼침 > 접힘)
        //  .stop()는 뒤에 있는 애니메이션에 저장된 마우스 움직임 횟수를 전부 실행x, 마지막 번째만(한 번만) 실행함 
    });



// 이미지 슬라이드=============================
$("#slide_wrapper").css({
    width : 100 * $("#slide_wrapper li").length + "%"
});

var i = 0;

setInterval(function(){
    if(i < $("#slide_wrapper li").length -1 ) {
        i++;
    } else{
        i = 0;
    }

$("#slide_wrapper").animate({
    marginLeft : - $("#slide_wrapper li").width()* i + "px"
},5000);

});
    
});








