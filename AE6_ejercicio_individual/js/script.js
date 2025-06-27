$(document).ready(function () {
    const $modal = $('#modal');
    const $modalImg = $('#modalImg');
    let currentIndex = 0;
    const images = $('.gallery img');
    images.on('click', function () {
        const src = $(this).attr('src');
        currentIndex = images.index(this);
        $modalImg.attr('src', src);
        $modal.fadeIn(300);
    });

    $('.close-btn, #modal').on('click', function (e) {
        if (e.target === this || e.target.className === 'close-btn') {
            $modal.fadeOut(300);
        }
    });

    $('#prevBtn').on('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        $modalImg.fadeOut(200, function () {
            $(this).attr('src', images.eq(currentIndex).attr('src')).fadeIn(200);
        });
    });

    $('#nextBtn').on('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        $modalImg.fadeOut(200, function () {
            $(this).attr('src', images.eq(currentIndex).attr('src')).fadeIn(200);
        });
    });
});