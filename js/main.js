(function($) {
    $(window).scroll(function() {
        if ($(window).scrollTop() < 20) {
            $("#transformable_header").removeClass("sticked");
            // $(".subpages").css({"":"100px"});
        } else {
            $("#transformable_header").addClass("sticked");
            // $(".subpages").css({"padding-top":"160px"});
        }
    });

    $(document).ready(function() {
        //   function mobileMenuHide() {
        //     var windowWidth = $(window).width();
        //     if (windowWidth < 1024) {
        //       $("#transformable_header").addClass("site-header-hide");
        //     }
        //   }
        $(".mobile-header__button").on("click", function() {
            $("#transformable_header").toggleClass("site-header-hide");
        });
        $(".header-nav a").on("click", function(e) {
            $("#transformable_header").addClass("site-header-hide");
        });
    });
    $(function() {
        //获取点击事件的对象
        var t;
        var pageShow = $(".subpages");
        $(pageShow[0]).show().siblings(".subpages").hide();

        function resizeAuto(page, index) {
            var subpageHeight = $(page[index]).height();
            // console.log(subpageHeight);

            var residedHeight = subpageHeight + 150;
            // console.log(residedHeight);
            $(".subpages-container").height(residedHeight + "px");
        }


        function _resizeAuto(page, index) {
            return function() {
                resizeAuto(page, index)
            }
        }
        t = setInterval(_resizeAuto(pageShow, 0), 500);

        $(".header-nav li").click(function() {
            //获取要显示或隐藏的对象
            clearInterval(t);
            // console.log(pageShow);
            //判断当前对象是否被选中，如果没选中的话进入if循环
            if (!$(this).hasClass("selected")) {
                //获取当前对象的索引
                var index = $(this).index();
                // console.log(index);
                //当前对象添加选中样式并且其同胞移除选中样式；
                $(this)
                    .addClass("selected")
                    .siblings("li")
                    .removeClass("selected");
                //索引对应的div块显示

                $(pageShow[index]).show(800);
                //索引对应的div块的同胞隐藏
                $(pageShow[index])
                    .siblings(".subpages")
                    .hide(800);
                t = setInterval(_resizeAuto(pageShow, index), 500);
            } else {
                var index = $(this).index();
                t = setInterval(_resizeAuto(pageShow, index), 500);
            }
        });
    });
    $(function() {
        //获取点击事件的对象
        // console.log($('.form-input'));
        $('.form-input').val('').on("focusin", function() {
            var index = $('.form-input').index(this);
            console.log(index);
            $(this).parent('.subpages__body__content__contact-form__row').addClass('input-focus');
            // console.log( $('.focus-border-warn').eq(0));
            //  $('.focus-border-warn:eq(index)').hide(200);
            $('.warn-information').eq(index).hide(400);
            $('.focus-border-warn').eq(index).hide(800);
        }).on('focusout', function() {
            // var index =  $(this).index();  
            // console.log(index);
            var index = $('.form-input').index(this);
            if ($(this).val().length === 0) {

                $(this).parent('.subpages__body__content__contact-form__row').removeClass('input-focus')
                $('.warn-information').eq(index).show(400);
                $('.focus-border-warn').eq(index).show(800);
            } else {
                $('.focus-border').eq(index).hide();
            }

        })




        //   // t = setInterval(resizeAuto, 1000);
    });

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var part = vars[i].split('=');
            if (part[0] == variable) {
                return part[1];
            }
        }
        return (false);
    }
    $(function() {
        var type = getQueryVariable('type')
        // console.log(type);
        if (type) {
            $(".header-nav li").eq(type).click();
        }

    })


})(jQuery);