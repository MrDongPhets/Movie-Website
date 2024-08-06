// Import jQuery
// Use jQuery
$(document).ready(function () {
  $("#open").click(function () {
    $("#ul").removeClass("close-menu").addClass("open-menu");
  });

  $("#close").click(function () {
    $("#ul").removeClass("open-menu").addClass("close-menu");
  });
});
   $(document).ready(function () {
     $(".owl-carousel").owlCarousel({
       loop: true,
       margin: 10,
       nav: true,
       responsive: {
         0: {
           items: 1,
         },
         600: {
           items: 1,
         },
         1000: {
           items: 3,
         },
       },
     });
   });

   // script.js
$(document).ready(function() {
  // Handle search icon click
  $(".icon-search").on('click', function() {
    // Get the value from the input field
    var query = $("#search-input").val().trim().toLowerCase();

    // Loop through each card and show/hide based on the search query
    $(".latest-box").each(function () {
      var title = $(this).data("title").toLowerCase();
      if (title.includes(query)) {
        $(this).removeClass("hidden"); // Show card
      } else {
        $(this).addClass("hidden"); // Hide card
      }
    });
  });

  // Optionally, trigger the search when the user presses "Enter" key
  $('#search-input').on('keypress', function(e) {
    if (e.which === 13) { // Enter key pressed
      $('.icon-search').click();
    }
  });
});
