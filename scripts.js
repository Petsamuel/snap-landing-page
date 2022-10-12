$("#icon-container").click(function (e) { 
   $(".navlist").toggle("");
   $("#iconMenu").toggleClass("mobile-menu-open .mobile-menu-close");
   $(".overlay").toggle();
   
});

$("#feature").click(function (e) { 
   e.preventDefault();
   $(".inner-list-content").toggle("");
   
});
$("#history").click(function (e) { 
   e.preventDefault();
   $(".inner-list-content-history").toggle("");
   
});