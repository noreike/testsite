$(window).on('load resize', function(){
    setTimeout(function(){
        var height = $('body').height();
        window.parent.postMessage(height, 'http://dev2.ball-inc.co.jp/');
        //window.parent.postMessage(height, window.parent.origin);
    },500);
});
