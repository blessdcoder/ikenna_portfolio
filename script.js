// JavaScript to handle image popup
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-popup-img');
    const popupModal = new bootstrap.Modal(document.getElementById('imgPopupModal'));
    const popupFullImg = document.getElementById('popupFullImg');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            popupFullImg.src = this.src;
            popupModal.show();
        });
    });

    // Clear image source when modal is hidden
    document.getElementById('imgPopupModal').addEventListener('hidden.bs.modal', function () {
        popupFullImg.src = '';
    });
});


// Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

// Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });