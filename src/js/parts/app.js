export class App {
  init() {
    $(document).ready(function () {
      var $buttons = $(".vacancies-btn");

      $buttons.each(function () {
        var $button = $(this);
        var $content = $button.closest(".vacancies-cards").find(".vacancies-content");
        var textHeight = $content[0].scrollHeight;
        var defaultHeight = $(window).width() <= 393 ? 300 : $(window).width() <= 426 ? 150 : ($(window).width() <= 768 ? 80 : 244);

        $content.css({ "max-height": defaultHeight, "overflow": "hidden" });

        $button.on("click", function () {
          if ($content.hasClass("active")) {
            $content.animate({
              "max-height": defaultHeight
            }, 500, function () {
              $content.removeClass("active");
              $button.html('Read More'); // Change button text to "Read More"
            });
          } else {
            $content.animate({
              "max-height": textHeight
            }, 500, function () {
              $content.addClass("active");
              $button.html('Read Less'); // Change button text to "Read Less"
            });
          }
        });
      });

      // // Add event listener for window resize to update defaultHeight
      // $(window).resize(function () {
      //   $buttons.each(function () {
      //     var $button = $(this);
      //     var $content = $button.closest(".vacancies-cards").find(".vacancies-content");
      //     var defaultHeight = $(window).width() <= 393 ? 180 : $(window).width() <= 426 ? 150 : ($(window).width() <= 768 ? 80 : 70);
      //     $content.css({ "max-height": defaultHeight });
      //   });
      // });
    });
  }
}
