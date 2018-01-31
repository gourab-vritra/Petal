$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    $('li img').on('click', function() {
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModalD').modal("show").on('shown.bs.modal', function() {
            $('#myModalD .modal-body').html(img);
        });
        $('#myModalD').on('hidden.bs.modal', function() {
            $('#myModalD .modal-body').html('');
        });
    });
});