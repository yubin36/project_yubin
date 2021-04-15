$(document).ready(function(){
    
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally:true,
        lockAnchors : false,
        anchors :["first","second", "third", "fourth"],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['INTRO', 'ABOUT', 'PROJECT', 'CONTACT'],
        sectionsColor : ['#ffcccc','#e1d8ff','#fff8e7','#ffeeaa'],
        showActiveTooltip : true,
        sectionSelector : '.section',
        slideSelector : '.slide',
        
    });
    $('#header .open').click(function(){
        $('#gnb-box').show(); //슬라이드로 변경
    });
    $('#header .close').click(function(){
        $('#gnb-box').hide(); //슬라이드로 변경
    });
    
   /* $('.gnb > li > a').click(function(){
        var submenu = $(this).next('ul');
        
        $(this).parent('li').addClass('on').siblings().removeClass('on');
        
        
        
        if( submenu.is(":visible") ){
           submenu.slideUp();
        }else{
           submenu.slideDown();
        }
    });*/
    
    
    var oneDepth = $('#header .gnb > li > a'),
        twoDepth = $('#header .gnb > li > .sub-menu');
    
    oneDepth.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        twoDepth.slideUp();
        
        if( !$(this).siblings('.sub-menu').is(':visible') ){
            $(this).addClass('on');
            $(this).siblings('.sub-menu').slideDown();
        }
        
    });
    
    
  /*  var windowWidth = $( window ).width();
    if(windowWidth < 1310){
        $('.more').click(function(){
            $('.proj-txt').show();
        });

        $('.exit').click(function(){
            $('.proj-txt').hide();
        });
          
    }else{
        
        $('.proj-txt').show();
    };
    */
    
    $('.more').click(function(){
        $('.proj-txt').show();
    });

    $('.exit').click(function(){
        $('.proj-txt').hide();
        
    });
     
    
    
});