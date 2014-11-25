$(document).ready(function() {
    var wrapper = $('#wrapper');

    $( "#prependBtn" ).click(function() {
        wrapper.prepend( "<div>New element prepended before</div>" );
    });

    $( "#appendBtn" ).click(function() {
        wrapper.append( "<div>New element appended after</div>" );
    });

});