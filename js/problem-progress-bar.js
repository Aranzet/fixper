$(function(){
    var $rpb1 = $('.reason1'),
        percent = parseInt($rpb1.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $rpb1.addClass('gt-50');
    }
    $('.reason1>.progress-bar>.progress-bar__fill').css('transform','rotate('+ deg +'deg)');
    $('.reason1>.progress-bar__percents span').html(percent);
});

$(function(){
    var $rpb2 = $('.reason2'),
        percent = parseInt($rpb2.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $rpb2.addClass('gt-50');
    }
    $('.reason2>.progress-bar>.progress-bar__fill').css('transform','rotate('+ deg +'deg)');
    $('.reason2>.progress-bar__percents span').html(percent);
});

$(function(){
    var $rpb3 = $('.reason3'),
        percent = parseInt($rpb3.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $rpb3.addClass('gt-50');
    }
    $('.reason3>.progress-bar>.progress-bar__fill').css('transform','rotate('+ deg +'deg)');
    $('.reason3>.progress-bar__percents span').html(percent);
});