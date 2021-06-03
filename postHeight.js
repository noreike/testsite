$(window).on('load resize', function(){
    var msg = {
        href: location.href,
        height: 0
    };
    //window.parent.postMessage(msg, 'http://dev2.ball-inc.co.jp/');
    setTimeout(function(){
        msg.height = $('body').height();
        window.parent.postMessage(msg, 'http://dev2.ball-inc.co.jp/');
    },500);
});
