$(window).on('load resize', function(){
    setTimeout(function(){
        var height = $('body').height();
        window.parent.postMessage(height, 'https://asahi.cms-wr.biglobe.ne.jp/');
        //window.parent.postMessage(height, window.parent.origin);
    },500);
});
