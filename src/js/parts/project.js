export class Project {

    init() {
        $(document).ready(function () {
            $('.play-button').click(function () {
                var video = $(this).closest('.single-project-gallery').find('video')[0];
                video.play();
                $(this).addClass('d-none');
                $(this).siblings('.pause-button').removeClass('d-none');
            });

            $('.pause-button').click(function () {
                var video = $(this).closest('.single-project-gallery').find('video')[0];
                video.pause();
                $(this).addClass('d-none');
                $(this).siblings('.play-button').removeClass('d-none');
            });
        });
    }


}