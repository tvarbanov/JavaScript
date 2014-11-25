
    $('#color-picker').on('change', function () {
        var color = $('#color-picker').val();
        $('body').css('background', color);
    });
