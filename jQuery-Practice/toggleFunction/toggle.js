$(Document).ready(function() {
    $('#click_me').toggle(function() {
        $('#display').html('Yes');
    },function() {
        $('#display').html('No');
    });
});