$(Document).ready(function() {
    $('#hide_message').click(function() {
        if($(this).attr('value') == 'Hide'){
            $('#message').hide();
            $(this).attr('value','Show');
        }
        else if($(this).attr('value') == 'Show'){
            $('#message').show();
            $(this).attr('value','Hide');
        }

        
    });

    $('#dbMenu').dblclick(function() {
        $('#dbDiv').show();
    });
});