$(document).ready(function(){
	$('html,body').animate({ scrollTop: 0}, '1');
});

(function($) {
	var $nav   = $('#navArea');
	var $btn   = $('.toggle_btn');
	var $mask  = $('#mask');
	var $concept = $('#concept-button');
	var $news = $('#news-button');
	var $product = $('#product-button');
	var open   = 'open';
	$btn.on( 'click', function() {
	  if ( ! $nav.hasClass( open ) ) {
		$nav.addClass( open );
	  } else {
		$nav.removeClass( open );
	  }
	});
	$mask.on('click', function() {
		$nav.removeClass( open );
	});
	$concept.on('click', function() {
		$nav.removeClass( open );
	});
	$news.on('click', function() {
		$nav.removeClass( open );
	});
	$product.on('click', function() {
		$nav.removeClass( open );
	});
  } )(jQuery);

var bar = new ProgressBar.Line(splash_count, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#e5e5e5',
	trailWidth: 0.2,
	trailColor: '#555',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-10px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});

$('#product-name-list a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;  //idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
  });