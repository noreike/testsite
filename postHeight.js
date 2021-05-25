$(window).on('load resize', function(){
    setTimeout(function(){
        var height = $('body').height();
        window.parent.postMessage(height, 'https://www.asahi-life.co.jp/')
        //window.parent.postMessage(height, window.parent.origin);
    },500);
});
