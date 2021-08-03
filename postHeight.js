$(window).on('load resize', function(){
    var msg = {
        bodyClass: document.body.className,
        href: location.href,
        height: 0
    };
    //window.parent.postMessage(msg, 'http://dev2.ball-inc.co.jp/');
    setTimeout(function(){
        msg.height = $('body').height();
        window.parent.postMessage(msg, 'https://asahi.cms-wr.biglobe.ne.jp/');
    },500);
});
