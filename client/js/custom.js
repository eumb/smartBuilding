var setContentHeight = function() {
            // reset height
            $(".right_col").css("min-height", $(window).height());

            var bodyHeight = $("#main_body").outerHeight(),
                footerHeight = $("#main_body").hasClass("footer_fixed")
                    ? 0
                    : $("footer").height(),
                leftColHeight =
                    $(".left_col").eq(1).height() +
                    $(".sidebar-footer").height(),
                contentHeight = bodyHeight < leftColHeight
                    ? leftColHeight
                    : bodyHeight;

            // normalize content
            contentHeight -= $(".nav_menu").height() + footerHeight;

            $(".right_col").css("min-height", contentHeight);
 
};

Template.body.onRendered(function() {


        $("#sidebar-menu").find('a').on('click', function(ev) {
     
        var $li = $(this).parent();
        console.log($li);

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
                console.log("was active")
            });
        } else {
            // prevent closing menu if we are on child menu
            console.log("on else loop")
            if (!$li.parent().is('.child_menu')) {
                $("#sidebar-menu").find('li').removeClass('active active-sm');
                $("#sidebar-menu").find('li ul').slideUp();
            }
            
            $li.addClass('active');
            console.log("now is active")
            $('ul:first', $li).slideDown(function() {
                console.log("sliding menu")
                setContentHeight();
            });
        }
    });

        
});

Template.body.events({
    "click #menu_toggle": function() {
        

        if ($("#main_body").hasClass("nav-md")) {
            $("#sidebar-menu").find("li.active ul").hide();
            $("#sidebar-menu")
                .find("li.active")
                .addClass("active-sm")
                .removeClass("active");
        } else {
            $("#sidebar-menu").find("li.active-sm ul").show();
            $("#sidebar-menu")
                .find("li.active-sm")
                .addClass("active")
                .removeClass("active-sm");
        }

        $("#main_body").toggleClass("nav-md nav-sm");

        setContentHeight();

    }



});
