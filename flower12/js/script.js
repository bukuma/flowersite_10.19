// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
    $('.glowAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("glow");
  
      } else {
        $(this).removeClass("glow");
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
      var element = $(".glowAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
          var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//桜
particlesJS("particles-js", {
    "particles":{
      "number":{
        "value":30,//この数値を変更すると桜の数が増減できる
        "density":{
          "enable":true,
          "value_area":1121.6780303333778
        }
      },
      "color":{
        "value":"#fff"
      },
      "shape":{
        "type":"image",//形状は画像を指定
        "stroke":{
          "width":0,
        },
        "image":{
          "src":"http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//画像を指定
          "width":120,
          "height":120
        }
      },
      "opacity":{
        "value":0.06409588744762158,
        "random":true,
        "anim":{
          "enable":false,
          "speed":1,
          "opacity_min":0.1,
          "sync":false
        }
      },
      "size":{
        "value":8.011985930952697,
        "random":true,//サイズをランダムに
        "anim":{
          "enable":false,
          "speed":4,
          "size_min":0.1,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
        "speed":7,//この数値を小さくするとゆっくりな動きになる
        "direction":"bottom-right",//右下に向かって落ちる
        "random":false,//動きはランダムにしない
        "straight":false,//動きをとどめない
        "out_mode":"out",//画面の外に出るように描写
        "bounce":false,//跳ね返りなし
        "attract":{
          "enable":false,
          "rotateX":281.9177489524316,
          "rotateY":127.670995809726
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      }
    },
    "retina_detect":false
  });
  
  
  