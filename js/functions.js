$(document).ready(function () {
    $(".icon-menu").click(function () {
        $(".site-menu").removeClass("hidden");
        $(".site-menu-overlay").removeClass("hidden");
        $(".icon-menu-close").removeClass("hidden");
    });

    $(".icon-menu-close").click(function () {
        $(".site-menu").addClass("hidden");
        $(".site-menu-overlay").addClass("hidden");
        $(".icon-menu-close").addClass("hidden");
    });

    work();

});