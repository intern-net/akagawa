// AudioElement を作成
var audio = new Audio();

// サウンドファイルまでの URL アドレスを指定
audio.src = "http://hakuhin.jp/download/js/audio/sample_00.wav";

// 再生速度を変更する
audio.playbackRate = 1.5;

// 音量を 0.5 に設定する
audio.volume = 0.5;

function play() {
	document.imgLink.src = "data/stop.png";
	document.getElementById("OmikujiSound").play();
}

function stop() {
   document.getElementById("OmikujiSound").pause();
   audio.currentTime = 0;
}

/*
// 匿名関数内で実行
(function (){
	// AudioElement を作成
	var audio = new Audio();

	// オーディオのイベント
	audio.addEventListener("timeupdate",function (e){
		// スライダーを更新
		element_slider.max = audio.duration;
		element_slider.value = audio.currentTime;
	},false);

	// 各エレメントを取得
	var element_url = document.getElementById("edit_02_url");
	var element_slider = document.getElementById("edit_02_slider");
	var element_rate = document.getElementById("input_02_rate");
	var element_autoplay = document.getElementById("input_02_autoplay");
	var element_loop = document.getElementById("input_02_loop");
	var element_result = document.getElementById("edit_02_result");

	var element;
	
	// 読み込みボタンの element を取得
	element = document.getElementById("button_02_load");
	// ボタンが押されたときに実行されるイベント
	element.onclick = function (){
		// 送信したい URL 先
		var url = element_url.value;

		// URL アドレスをセット
		audio.src = url;

		// 読み込み開始
		audio.load();
	};


	// 再生ボタンの element を取得
	element = document.getElementById("button_02_play");
	// ボタンが押されたときに実行されるイベント
	element.onclick = function (){
		audio.play();
	};


	// 一時停止ボタンの element を取得
	element = document.getElementById("button_02_pause");
	// ボタンが押されたときに実行されるイベント
	element.onclick = function (){
		audio.pause();
	};


	// 停止ボタンの element を取得
	element = document.getElementById("button_02_stop");
	// ボタンが押されたときに実行されるイベント
	element.onclick = function (){
		audio.currentTime = 0;
		audio.pause();
	};

	// 60 fps 間隔で実行する
	setInterval(function (){
		var v;
		v = element_rate.value;
		audio.playbackRate = v;

		v = element_autoplay.checked;
		audio.autoplay = v;

		v = element_loop.checked;
		audio.loop = v;

		// リザルトを更新
		var s = "";
		s += "currentTime:" + audio.currentTime + "\n";
		s += "duration:" + audio.duration + "\n";
		s += "paused:" + audio.paused + "\n";
		s += "seeking:" + audio.seeking + "\n";
		s += "readyState:" + audio.readyState + "\n";
		element_result.value = s;

	},1000/60);

	// スライダー変更時に実行されるイベント
	element_slider.onchange = function (){
		audio.currentTime = this.value;
	};

	// サーバ側で用意しているサウンドファイルのリスト
	var audio_file_list = [
		{url:"http://hakuhin.jp/download/js/audio/sample_00.m4a" , type:"audio/mp4"},
		{url:"http://hakuhin.jp/download/js/audio/sample_00.mp3" , type:"audio/mpeg"},
		{url:"http://hakuhin.jp/download/js/audio/sample_00.ogg" , type:"audio/ogg"},
		{url:"http://hakuhin.jp/download/js/audio/sample_00.wav" , type:"audio/wav"}
	];
	
})();
*/

