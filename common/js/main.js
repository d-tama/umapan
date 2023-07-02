

const Menu = document.querySelector('.menuContainer');
const MenuOpen = document.querySelector('.menu_open');
const MenuClose = document.querySelector('.menu_close');
const MenuBlur = document.querySelector('.menuBlur');
const BodyStop = document.querySelector('body');

const SPMenu = document.querySelector('.menu');			
	Menu.addEventListener('click', () => {
		MenuOpen.classList.toggle('active');
		MenuClose.classList.toggle('active');
		MenuBlur.classList.toggle('active');
        SPMenu.classList.toggle('active');
		BodyStop.classList.toggle('active');
    }
); 

// デザインのスライダー

//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});



// 同意するのチェックボックス
const consent_chk = document.querySelector(`#consent-chk`);
// 送信ボタン
const submit_btn = document.querySelector(`input[type=submit]`);

// チェックボックスの入力イベント
consent_chk.addEventListener('change', () => {
	
	// チェックボックスがあれば無効化をオフ、なければオン
	if (consent_chk.checked === true) {
		submit_btn.disabled = false;
	} else {
		submit_btn.disabled = true;
	}

});