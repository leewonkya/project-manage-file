$(document).ready(function() {
    $(".btn-changetored").click(function() {
        $('#1').addClass('div4');
        $('#1').addClass('translate--toX');
        $('#1').removeClass('translate--backX');
        $('#1').removeClass('div1');

    });
});
$(document).ready(function() {
    $(".btn-removered").click(function() {
        $('#1').addClass('div1');
        $('#1').removeClass('translate--toX');
        $('#1').addClass('translate--backX');
        $('#1').removeClass('div4');

    });
});