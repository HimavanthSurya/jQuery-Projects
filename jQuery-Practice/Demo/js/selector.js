$(document).ready(function(){
    function change_size(element, size){
        var current = parseInt(element.css('font-size'));
        if(size == 'smaller'){
            var latest = current - 2;
        }
        else if(size == 'larger'){
            var latest = current + 2;
        }
        element.css('font-size',latest + 'px');
        
    }
    
    $('#s').click(function() {
        change_size($('p'),'smaller');
    });
    
    $('#l').click(function() {
        change_size($('p'),'larger');
    });
});

