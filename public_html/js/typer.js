//タイプ入力アニメーションを実現している

//スクロールしたときに読み込む
$(window).on('load scroll', function (e){
	var tjs = $("#block01").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block01 .main_contents_title").t({
				speed:130,
				speed_vary:false,
				fin:function(elm){
					$("#block01 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block01").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block01 .main_contents_text").t({
				speed:40,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block01 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block02").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block02 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block02 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block02").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block02 .main_contents_text").t({
				speed:40,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block02 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 
$(window).on('load scroll', function (e){
	var tjs = $("#block03").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block03 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block03 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block03").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block03 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block03 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 4
$(window).on('load scroll', function (e){
	var tjs = $("#block04").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block04 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block04 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block04").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block04 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block04 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 5
$(window).on('load scroll', function (e){
	var tjs = $("#block05").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block05 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block05 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block05").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block05 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block05 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 6
$(window).on('load scroll', function (e){
	var tjs = $("#block06").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block06 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block06 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block06").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block06 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block06 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 7
$(window).on('load scroll', function (e){
	var tjs = $("#block07").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block07 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block07 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block07").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block07 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block07 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 8
$(window).on('load scroll', function (e){
	var tjs = $("#block08").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block08 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block08 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block08").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block08 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block08 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 9
$(window).on('load scroll', function (e){
	var tjs = $("#block09").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block09 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block09 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block09").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block09 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block09 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
// 10
$(window).on('load scroll', function (e){
	var tjs = $("#block10").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block10 .main_contents_title").t({
				speed:120,
				blink: false,
				caret: true,
				fin:function(elm){
					$("#block10 .main_contents_title .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
$(window).on('load scroll', function (e){
	var tjs = $("#block10").offset().top-680;
	var scroll = $(window).scrollTop();
		if(scroll > tjs){
			$("#block10 .main_contents_text").t({
				//スピード
				speed:40,
				//文字の点滅
				blink: false,
				//打ってる最中の_を終わったら消す
				caret: true,
				fin:function(elm){
					$("#block10 .main_contents_text .t-caret").css('display','none');
				}
			}); $(this).off(e);
		}
});
