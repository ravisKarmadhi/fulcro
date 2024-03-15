export class Filter {

    init() {
        $(document).ready(function () {
            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');
                if (value == "all") {
                    $('.filter').show('500');
                }
                else {
                    $(".filter").not('.' + value).hide('1000');
                    $('.filter').filter('.' + value).show('1000');
                }
            });
            // color toggle
            $(".filter-button").click(function () {
                $(this).toggleClass("highlight").siblings().removeClass("highlight");
            });
        });
    }


}