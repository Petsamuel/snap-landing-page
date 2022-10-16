$("#icon-container").click(function (e) { 
   $(".navlist").toggle("");
   $("#iconMenu").toggleClass("mobile-menu-open mobile-menu-close");
   $(".overlay").toggle();
   
});

$("#feature").click(function (e) { 
   e.preventDefault();
   $(".inner-list-content").toggle("");
   $("#cadet").toggleClass("icon-arrow-down icon-arrow-up");
   
});
$("#history").click(function (e) { 
   e.preventDefault();
   $(".inner-list-content-history").toggle("");
   $("#company-cadet").toggleClass("icon-arrow-down icon-arrow-up");
   
});