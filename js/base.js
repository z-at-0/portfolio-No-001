var openBox = 1;
var iS01 = 0;
var iS02 = 0;
var iS03 = 0;
var iS04 = 0;
var iS05 = 0;
function slideAnime(){
    //====上に動くアニメーションここから===
    $('.upAnime').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        // 上から下へ表示するクラスを付与
        // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeUpDown");
        // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
        $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
        // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
        // 上から下へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeUpDown");
        $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
        }
        });
    $('.downAnime-02').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        // 下から上へ表示するクラスを付与
        // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeDownUp");
        // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
        $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
        // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
        // 下から上へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeDownUp");
        $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
        }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
//クリック時ボーダーラインキャンセル--------------------------------------↓
function eraseLine() {
    var objBox = document.getElementById('border-line');
    objBox.classList.remove('resurrection-line');
    objBox.classList.add('erase-line');
}
//クリック時ボーダーライン再表示--------------------------------------↓
function resurrectionLine() {
    var objBox = document.getElementById('border-line');
    objBox.classList.add('resurrection-line');
    objBox.classList.remove('erase-line');
}
//クリック時要素追加及び削除処理------------------------------------↓
function plus() {
    $(".item-box div").addClass("upAnimeCancel");
    $(".item-box p").addClass("downAnime-02Cancel");
}
function minus() {
    $(".item-box div").removeClass("upAnimeCancel");
    $(".item-box p").removeClass("downAnime-02Cancel");
}
function resurrection() {
    $(".item-box div").removeClass("slideAnimeUpDownCancel");
    $(".item-box div span").removeClass("slideAnimeDownUpCancel");
    $(".item-box p").removeClass("slideAnimeDownUpCancel");
    $(".item-box p span").removeClass("slideAnimeUpDownCancel");
}
//クリック時アイテムボックスキャンセル------------------------------------↓
function slideAnimeCancel(){
    plus();

    //====上に動くアニメーションここから===
    $('.upAnimeCancel').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        // 上から下へ表示するクラスを付与
        // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeUpDownCancel ");
        // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
        $(this).children(".upAnimeInner").addClass("slideAnimeDownUpCancel");
        // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
        // 上から下へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeUpDownCancel ");
        $(this).children(".upAnimeInner").removeClass("slideAnimeDownUpCancel");
        }
        });
    $('.downAnime-02Cancel').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        // 下から上へ表示するクラスを付与
        // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeDownUpCancel");
        // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
        $(this).children(".downAnimeInner").addClass("slideAnimeUpDownCancel");
        // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
        // 下から上へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeDownUpCancel");
        $(this).children(".downAnimeInner").removeClass("slideAnimeUpDownCancel");
        }
    });
}
//同ページクリック処理
function impossible01(){
    $('.title-box').addClass("wobble");
}
function impossible02(){
    $('#li-item02').addClass("wobble");
}
/*function impossible03(){
    $('#li-item03').addClass("wobble");
}*/
/*
function impossible04(){
    $('#li-item04').addClass("wobble");
}*/
function impossible05(){
    $('#li-item05').addClass("wobble");
}

function ClWt01(){
    $('.title-box').removeClass("wobble");
}
function ClWt02(){
    $('#li-item02').removeClass("wobble");
}
/*function ClWt03(){
    $('#li-item03').removeClass("wobble");
}*/
/*function ClWt04(){
    $('#li-item04').removeClass("wobble");
}*/
function ClWt05(){
    $('#li-item05').removeClass("wobble");
}
//同ページクリック処理
function setBoxSplit01(){
        eraseLine();//ボーダーラインキャンセル
        setTimeout(resurrectionLine,500);
        slideAnimeCancel();//アイテムボックスのタイトル及びテキストキャンセル
}
function setBoxSplit02(){
        setTimeout(minus,500);
        setTimeout(resurrection,350);
}
function setMenu01(){
        var iS01 = document.getElementById("item01");
        iS01.style.opacity = 1;
        var iS02 = document.getElementById("item02");
        iS02.style.opacity = 0;
        //var iS03 = document.getElementById("item03");
        //iS03.style.opacity = 0;
        //var iS04 = document.getElementById("item04");
        //iS04.style.opacity = 0;
        var iS05 = document.getElementById("item05");
        iS05.style.opacity = 0;
}
function setMenu02(){
        var iS01 = document.getElementById("item01");
        iS01.style.opacity = 0;
        var iS02 = document.getElementById("item02");
        iS02.style.opacity = 1;
        //var iS03 = document.getElementById("item03");
        //iS03.style.opacity = 0;
        //var iS04 = document.getElementById("item04");
        //iS04.style.opacity = 0;
        var iS05 = document.getElementById("item05");
        iS05.style.opacity = 0;
}
/*function setMenu03(){
        var iS01 = document.getElementById("item01");
        iS01.style.opacity = 0;
        var iS02 = document.getElementById("item02");
        iS02.style.opacity = 0;
        //var iS03 = document.getElementById("item03");
        //iS03.style.opacity = 1;
        var iS04 = document.getElementById("item04");
        iS04.style.opacity = 0;
        var iS05 = document.getElementById("item05");
        iS05.style.opacity = 0;
}*/
/*function setMenu04(){
        var iS01 = document.getElementById("item01");
        iS01.style.opacity = 0;
        var iS02 = document.getElementById("item02");
        iS02.style.opacity = 0;
        //var iS03 = document.getElementById("item03");
        //iS03.style.opacity = 0;
        var iS04 = document.getElementById("item04");
        iS04.style.opacity = 1;
        var iS05 = document.getElementById("item05");
        iS05.style.opacity = 0;
}*/
function setMenu05(){
        var iS01 = document.getElementById("item01");
        iS01.style.opacity = 0;
        var iS02 = document.getElementById("item02");
        iS02.style.opacity = 0;
        //var iS03 = document.getElementById("item03");
        //iS03.style.opacity = 0;
        //var iS04 = document.getElementById("item04");
        //iS04.style.opacity = 0;
        var iS05 = document.getElementById("item05");
        iS05.style.opacity = 1;
}
//各メニューのカラー設定
function titleWhite(){
    $('.title-box a').removeClass("black");
    $('.title-box a').addClass("white");
}
function titleBlack(){
    $('.title-box a').removeClass("white");
    $('.title-box a').addClass("black");
}
function menu02White(){
    $('#li-item02 a').removeClass("black");
    $('#li-item02 a').addClass("white");
}
function menu02Black(){
    $('#li-item02 a').removeClass("white");
    $('#li-item02 a').addClass("black");
}
/*function menu03White(){
    $('#li-item03 a').removeClass("black");
    $('#li-item03 a').addClass("white");
}
function menu03Black(){
    $('#li-item03 a').removeClass("white");
    $('#li-item03 a').addClass("black");
}*/
/*function menu04White(){
    $('#li-item04 a').removeClass("black");
    $('#li-item04 a').addClass("white");
}
function menu04Black(){
    $('#li-item04 a').removeClass("white");
    $('#li-item04 a').addClass("black");
}*/
function menu05White(){
    $('#li-item05 a').removeClass("black");
    $('#li-item05 a').addClass("white");
}
function menu05Black(){
    $('#li-item05 a').removeClass("white");
    $('#li-item05 a').addClass("black");
}
//各ボックスのz-index最大値付与
function zindex01(){
    $('#item01 p').css('z-index', '20');
}
function zindex02(){
    $('#item02 p').css('z-index', '20');
}
/*function zindex03(){
    $('#item03 p').css('z-index', '20');
}*/
/*function zindex04(){
    $('#item04 p').css('z-index', '20');
}*/
function zindex05(){
    $('#item05 p').css('z-index', '20');
}
//クリック処理全体------------------------------------------↓
$('.title-box').click(function(){
    if (openBox == 1 ){
        impossible01();
        setTimeout(ClWt01,280);
        zindex01();
    } else if (openBox == 2){
        menu02Black();
        titleWhite();
        setBoxSplit01();
        setTimeout(setMenu01,500);
        setBoxSplit02();
        zindex01();
        openBox = 1;
        return openBox;
    } else if (openBox == 3){
        menu03Black();
        titleWhite();
        setBoxSplit01();
        setTimeout(setMenu01,500);
        setBoxSplit02();
        zindex01();
        openBox = 1;
        return openBox;
    } else if (openBox == 4){
        menu04Black();
        titleWhite();
        setBoxSplit01();
        setTimeout(setMenu01,500);
        setBoxSplit02();
        zindex01();
        openBox = 1;
        return openBox;
    } else if (openBox == 5){
        menu05Black();
        titleWhite();
        setBoxSplit01();
        setTimeout(setMenu01,500);
        setBoxSplit02();
        zindex01();
        openBox = 1;
        return openBox;
    }
});
$('#li-item02').click(function(){
    if (openBox == 2 ){
        impossible02();
        setTimeout(ClWt02,280);
        zindex02();
    } else if (openBox == 1 ){
        titleBlack();
        menu02White();
        setBoxSplit01();
        setTimeout(setMenu02,500);
        setBoxSplit02();
        zindex02();
        openBox = 2;
        return openBox;
    } else if (openBox == 3 ){
        menu03Black();
        menu02White();
        setBoxSplit01();
        setTimeout(setMenu02,500);
        setBoxSplit02();
        zindex02();
        openBox = 2;
        return openBox;
    } else if (openBox == 4 ){
        menu04Black();
        menu02White();
        setBoxSplit01();
        setTimeout(setMenu02,500);
        setBoxSplit02();
        zindex02();
        openBox = 2;
        return openBox;
    } else if (openBox == 5 ){
        menu05Black();
        menu02White();
        setBoxSplit01();
        setTimeout(setMenu02,500);
        setBoxSplit02();
        zindex02();
        openBox = 2;
        return openBox;
    }
});
/*$('#li-item03').click(function(){
    if (openBox == 3 ){
        impossible03();
        setTimeout(ClWt03,280);
        zindex03();
    } else if (openBox == 1 ){
        titleBlack();
        menu03White();
        setBoxSplit01();
        setTimeout(setMenu03,500);
        setBoxSplit02();
        zindex03();
        openBox = 3;
        return openBox;
    } else if (openBox == 2 ){
        menu02Black();
        menu03White();
        setBoxSplit01();
        setTimeout(setMenu03,500);
        setBoxSplit02();
        zindex03();
        openBox = 3;
        return openBox;
    } else if (openBox == 4 ){
        menu04Black();
        menu03White();
        setBoxSplit01();
        setTimeout(setMenu03,500);
        setBoxSplit02();
        zindex03();
        openBox = 3;
        return openBox;
    } else if (openBox == 5 ){
        menu05Black();
        menu03White();
        setBoxSplit01();
        setTimeout(setMenu03,500);
        setBoxSplit02();
        zindex03();
        openBox = 3;
        return openBox;
    }
});*/
/*$('#li-item04').click(function(){
    if (openBox == 4 ){
        impossible04();
        setTimeout(ClWt04,280);
        zindex04();
    } else if (openBox == 1 ){
        titleBlack();
        menu04White();
        setBoxSplit01();
        setTimeout(setMenu04,500);
        setBoxSplit02();
        zindex04();
        openBox = 4;
        return openBox;
    } else if (openBox == 2 ){
        menu02Black();
        menu04White();
        setBoxSplit01();
        setTimeout(setMenu04,500);
        setBoxSplit02();
        zindex04();
        openBox = 4;
        return openBox;
    } else if (openBox == 3 ){
        menu03Black();
        menu04White();
        setBoxSplit01();
        setTimeout(setMenu04,500);
        setBoxSplit02();
        zindex04();
        openBox = 4;
        return openBox;
    } else if (openBox == 5 ){
        menu05Black();
        menu04White();
        setBoxSplit01();
        setTimeout(setMenu04,500);
        setBoxSplit02();
        zindex04();
        openBox = 4;
        return openBox;
    }
});*/
$('#li-item05').click(function(){
    if (openBox == 5 ){
        impossible05();
        setTimeout(ClWt05,280);
        zindex05();
    } else if (openBox == 1 ){
        titleBlack();
        menu05White();
        setBoxSplit01();
        setTimeout(setMenu05,500);
        setBoxSplit02();
        zindex05();
        openBox = 5;
        return openBox;
    } else if (openBox == 2 ){
        menu02Black();
        menu05White();
        setBoxSplit01();
        setTimeout(setMenu05,500);
        setBoxSplit02();
        zindex05(); 
        openBox = 5;
        return openBox;
    } else if (openBox == 3 ){
        menu03Black();
        menu05White();
        setBoxSplit01();
        setTimeout(setMenu05,500);
        setBoxSplit02();
        zindex05();
        openBox = 5;
        return openBox;
    } else if (openBox == 4 ){
        menu04Black();
        menu05White();
        setBoxSplit01();
        setTimeout(setMenu05,500);
        setBoxSplit02();
        zindex05();
        openBox = 5;
        return openBox;
    }
});