$(Document).ready(function() {
    $('#click_me').bind('mouseenter mouseleave', function() {
        $(this).toggleClass('bold');
    })
})