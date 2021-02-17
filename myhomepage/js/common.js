$(document).ready(function(){
    
    // dotMenu
    var dotMenu = $('.dot-menu-wrap span');
    
    // 윈도우 스크롤
    
    $(window).scroll(function(){
        console.log('스크롤 중~~~~');
        var winScrollTop = $(window).scrollTop()+100;
        
        console.log( winScrollTop + ' px 만큼 스크롤 되었습니다.');
        $('.scrollValue').text( winScrollTop + ' px 만큼 스크롤 되었습니다.' );
        
        
        // item['box1', 'box2', 'box3', 'box4']
        // item['딸기','바나나','키위','수박']
        
        $('.box-wrap .box').each(function(idx,item){
            //.box 마다 따로따로 실행
            var itemOffsetTop = $(item).offset().top;
            
            console.log( '아이템의 위치 값' + itemOffsetTop);
            console.log( '-------------------------------------');
            
            // 윈도우 스크롤 값이 박스 즉 item의 위치 값 보다 크면
            // winScrollTop
            // itemOffsetTop
            
            if(winScrollTop >= itemOffsetTop){ 
                // 실행
                dotMenu.removeClass('on');
                dotMenu.eq(idx).addClass('on');
            }
            
        });
        
        // 만약에 스크롤 한 값이 100이상이면 body 태그에 'didScroll' 클래스 추가하기
        if( winScrollTop >= 100 ){
            $('body').addClass('didScroll');
            
        }else{
            $('body').removeClass('didScroll');
        }
        
    });
    
    
    // gnb
    var menu = $('.nav > ul > li');
    
    menu.mouseenter(function(){
        $(this).addClass('active');
    });
    
    menu.mouseleave(function(){
        $(this).removeClass('active');
    });
    
    // 모바일 메뉴
    
    var btnOpen = $('.header button.open'),
         btnClose = $('.header button.close');
    
    btnOpen.click(function(){
       $('.drawer').addClass('on')
    });
    
    btnClose.click(function(){
       $('.drawer').removeClass('on')
    });
    
    dotMenu.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var dotIndex = $(this).index();
        console.log('span태그의 인덱스 번호' + dotIndex);
        
        var boxOffsetTop = $('.box-wrap > div').eq(dotIndex).offset().top
    
        console.log('body영역 맨 위에서부터 박스가 위치한 값은 ' + boxOffsetTop );
        
        $('html, body').animate({'scrollTop' : boxOffsetTop }, 800, 'easeInBack');
    
    }); // dotMenu
    
    // top버튼
    var btnTop = $('.btn-wrap .btn-top');
    
    btnTop.click(function(){
         $('html, body').animate({'scrollTop' : '100px' }, 800, 'easeInBack');
    });
    
    $('.box-wrap > div').click(function(){
        var boxIndex = $(this).index();
        console.log('div 태그 박스의 인덱스 번호' + boxIndex);
    });
    
    
    
    
    
});