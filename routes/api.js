// Gada reupload" 😏
// Klo mau colong fitur, jgn asal colong bodoh ntr api eror

// Thanks to ( jgn di hapus jamet)
/*
<p> Eka Danuarta</p>
<p> Ojan</p>
<p> Farhan</p>
<p> ZeeoneOfc </p>
<p> KAD TEAM </p>
*/
__path = process.cwd();

require ('../settings.js')
var express = require('express');
var axios = require('axios');
var qs = require('qs');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var qrcode = require('qrcode');
var TikTokScraper = require('tiktok-scraper');
var Canvas = require('canvas')
var Canvacord = require("canvacord");
/*var canvasGif = require('canvas-gif')*/
var { convertStringToNumber } = require('convert-string-to-number'); 
var { shortText } = require("limit-text-js")
var isImageURL = require('image-url-validator').default
var isUrl = require('is-url');
var TinyUrl = require('tinyurl');
var BitlyClient = require('bitly').BitlyClient
var router  = express.Router();
var creator = global.creator
const listkey = global.apikey

const scr = require('@bochilteam/scraper')
const { color, bgcolor } = require(__path + '/lib/color.js');
const { fetchJson } = require(__path + '/lib/fetcher.js')
const options = require(__path + '/lib/options.js');
const { getBuffer } = require(__path + '/lib/functions.js');
const oxy = require(__path + '/lib/oxy.js');
const { Tiktok } = require("./../lib/utils/tiktok");
const { Tools } = require("./../lib/utils/tools");

const tiktok = new Tiktok();
const tools = new Tools();

var {
  CovidIndo, 
  CovidWorld, 
  Gempa, 
  Joox, 
  KBBI, 
  IP, 
  Kodepos, 
  Fakename, 
  searchRepo,
  searchUser
} = require("./../lib/utils/scrape");

var {
  igStalk,
  igDownload
} = require("./../lib/utils/ig");

var {
  wikipedia,
  tiktokstalk, 
  twtstalk,
  ffstalk,
  mlstlk
} = require("./../lib/utils/stalk");

var {
  ttdownloader,
  igdl,
  igstalk, 
  igstory, 
  snapinsta, 
  ttdl,
  ssweb
} = require("./../lib/utils/scraper");

var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');

_ = require('lodash')

loghandler = {
	noapikey:{
		status: false,
        creator: `${creator}`,
		code: 403,
        message: 'Masukkan parameter apikey'
    },
    notcoun: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Forbiden, Invalid country, masukan parameter country'
    },
    notkota: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Forbiden, Invalid kota, masukan parameter kota'
    },
    notnumber: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Forbiden, Invalid kota, masukan parameter kota'
    },
    error: {
    	status: false,
        creator: `${creator}`,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan'
    },
    apikey: {
    	status: false,
        creator: `${creator}`,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    notid: {
    	status: false,
    	code: 404,
    	message: 'Error, Invalid Id or Username',
    	maintanied_by: `${creator}`
    },
    nottext: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text',
    	maintanied_by: `${creator}`
    },
    nottext1: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text 1',
    	maintanied_by: `${creator}`
    },
    nottext2: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text 2',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invalid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
router.get('/cekapikey', async (req, res, next) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
		res.json({
			apikey: apikey,
status: true,
creator: `${creator}`,
limit: 'unlimited'
		})
		} else {
			res.json(loghandler.apikey)
			}
})
// cecan
router.get('/cecan/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data =["https://i.postimg.cc/QdncScPQ/1.jpg",
"https://i.postimg.cc/zv1CK5Q4/10.jpg",
"https://i.postimg.cc/4x3zzW84/11.jpg",
"https://i.postimg.cc/pXCfhwJ1/12.jpg",
"https://i.postimg.cc/brHQRWcr/13.jpg",
"https://i.postimg.cc/zX8wfzKg/14.jpg",
"https://i.postimg.cc/QM91zHGR/15.jpg",
"https://i.postimg.cc/43DVRsXn/16.jpg",
"https://i.postimg.cc/nrkDmmBQ/17.jpg",
"https://i.postimg.cc/CLhDgvpC/18.jpg",
"https://i.postimg.cc/fT8dTxMG/19.jpg",
"https://i.postimg.cc/RFwfMy0d/2.jpg",
"https://i.postimg.cc/nrZmM2jJ/20.jpg",
"https://i.postimg.cc/dVDy7L1L/21.jpg",
"https://i.postimg.cc/kMF8z0zX/22.jpg",
"https://i.postimg.cc/VkTbXmr4/23.jpg",
"https://i.postimg.cc/3wv0BV2h/24.jpg",
"https://i.postimg.cc/V6PrHgFC/25.jpg",
"https://i.postimg.cc/MT0MkBsr/26.jpg",
"https://i.postimg.cc/RhM3v0yC/27.jpg",
"https://i.postimg.cc/D0BS0T3r/28.jpg",
"https://i.postimg.cc/VsRrDj0J/29.jpg",
"https://i.postimg.cc/TY3ySpnC/3.jpg",
"https://i.postimg.cc/NfCywB4Y/30.jpg",
"https://i.postimg.cc/3RZRfTRs/31.jpg",
"https://i.postimg.cc/HnZLH9b3/4.jpg",
"https://i.postimg.cc/rFsmj7LH/5.jpg",
"https://i.postimg.cc/4N03Swfx/6.jpg",
"https://i.postimg.cc/66YqdtFR/7.jpg",
"https://i.postimg.cc/rwtpXWsC/8.jpg",
"https://i.postimg.cc/wB8j6vsK/9.jpg",
"https://i.pinimg.com/736x/4a/88/22/4a8822aafc79958a0b4fafe6a8b6a150.jpg",
"https://i.pinimg.com/736x/2f/b0/11/2fb01126cde4fa7b4d4f5c209c7cb0a3.jpg",
"https://i.pinimg.com/736x/db/7b/7b/db7b7b6e2d9185af1194408702439159.jpg",
"https://i.pinimg.com/736x/a7/64/d6/a764d6ff3c420ccb1f780730cbdbf136.jpg",
"https://i.pinimg.com/736x/43/e7/a1/43e7a1f16002cd2523ff8d29127ced67.jpg",
"https://i.pinimg.com/736x/86/ac/30/86ac3000f9fdb135db4ec5546ab0f1f6.jpg",
"https://i.pinimg.com/736x/1a/65/f2/1a65f272685ee1a70b253ad6b7ac45ee.jpg",
"https://i.pinimg.com/736x/15/fa/e7/15fae72b4df072a5a62eeb59c72aeb00.jpg",
"https://i.pinimg.com/736x/e9/32/7d/e9327db4900066609491f29ce1be0b67.jpg",
"https://i.pinimg.com/736x/f0/3c/1d/f03c1d694fb5d3132369734abc39e5a1.jpg",
"https://i.pinimg.com/736x/31/d3/17/31d3174eef6ec45e4ab9c76f281e0fb8.jpg",
"https://i.pinimg.com/736x/79/ef/de/79efde4e6ea4cf4b49d421b417093e42.jpg",
"https://i.pinimg.com/736x/25/3c/47/253c47b14693af948e9695ae11e171f2.jpg",
"https://i.pinimg.com/736x/08/11/e2/0811e2fb69d43ed0dd831a9ef8d424ff.jpg",
"https://i.pinimg.com/736x/16/77/27/167727f6372e2ef33127d22e79bb664b.jpg",
"https://i.pinimg.com/736x/a9/dd/ac/a9ddacf78e44f2f8d67991c696df6898.jpg",
"https://i.pinimg.com/736x/02/a9/6c/02a96c3370576cddd5b5f23e75da221f.jpg",
"https://i.pinimg.com/736x/70/4a/be/704abeb45da0a24c719edf963d51d605.jpg",
"https://i.pinimg.com/736x/2a/15/d3/2a15d384d964fa9ccbf613122a64ac39.jpg",
"https://i.pinimg.com/736x/a0/44/02/a04402b886e258f0708db38defe4b900.jpg",
"https://i.pinimg.com/736x/15/71/66/157166cad02fd35dfcd47a6e206701fe.jpg",
"https://i.pinimg.com/736x/b4/38/85/b4388527bb89ad6748984f35aa9f912c.jpg",
"https://i.pinimg.com/736x/f2/b6/76/f2b676de67f4c2a3653f14a59d210206.jpg",
"https://i.pinimg.com/736x/c3/06/cf/c306cfb2d346cc93777df991dd2cb92e.jpg",
"https://i.pinimg.com/736x/19/5f/17/195f17fa3432f623bbe1c19124a47114.jpg",
"https://i.pinimg.com/736x/60/9a/f3/609af3eee1e452440d19f1e28509e459.jpg",
"https://i.pinimg.com/736x/f1/a0/d1/f1a0d16d7f2adbb9ae0d6c24289c8fce.jpg",
"https://i.pinimg.com/736x/0f/69/e6/0f69e6ebdec41e83cb6451872ab9a276.jpg",
"https://i.pinimg.com/736x/b0/5c/f1/b05cf1727c6c5a58f9c8dfdd03717ed2.jpg",
"https://i.pinimg.com/736x/38/4c/c0/384cc0d90a8130155e088c280c45e57f.jpg",
"https://i.pinimg.com/736x/7c/eb/fb/7cebfbd963e79843b18e1f3855200f1e.jpg",
"https://i.pinimg.com/736x/7b/0d/13/7b0d13b6b87028208f6cf6a6e222100c.jpg",
"https://i.pinimg.com/736x/b9/04/4a/b9044aeeef251cf0a88f13eb34bcee30.jpg",
"https://i.pinimg.com/736x/a1/1a/0a/a11a0acda3246a0de37376606434042e.jpg",
"https://i.pinimg.com/736x/68/77/11/687711e0e8c3dffbf1081fd5bb89675e.jpg",
"https://i.pinimg.com/736x/d2/46/1e/d2461e0f9aab0027f9b29a7dbe5a0432.jpg",
"https://i.pinimg.com/736x/7c/82/ac/7c82acef5653e11aa7cdb28231ae3546.jpg",
"https://i.pinimg.com/736x/a3/b0/10/a3b0102ad2a40dffc2d26080cf962c7c.jpg",
"https://i.pinimg.com/736x/68/30/a0/6830a0979dc1ecd00cdedc2a22e91dea.jpg",
"https://i.pinimg.com/736x/62/a0/be/62a0be635daca04696c4aba63c8dfbde.jpg",
"https://i.pinimg.com/736x/cb/9f/b7/cb9fb7b8be48d8efa3990b612141e80d.jpg",
"https://i.pinimg.com/736x/ee/ab/7c/eeab7c4b4644fd259f8c3fcb8a77a8e7.jpg",
"https://i.pinimg.com/736x/d0/0a/b4/d00ab40096a6ebf50930f2f209f9dbb1.jpg",
"https://i.pinimg.com/736x/8b/14/95/8b1495969973fc0edcf59844f38da9bb.jpg",
"https://i.pinimg.com/736x/27/1d/82/271d826c83d86dcdee7974dd73310bca.jpg",
"https://i.pinimg.com/736x/4f/c9/4b/4fc94b5092791cfdbf0de4b79ccc0bef.jpg",
"https://i.pinimg.com/736x/bd/4e/61/bd4e6107218e8e92f961552bfab08854.jpg",
"https://i.pinimg.com/736x/25/52/95/255295a59680eb2e27889568926ed6e5.jpg",
"https://i.pinimg.com/736x/d0/b1/f3/d0b1f3ec32540e13392762a5f3f0497a.jpg",
"https://i.pinimg.com/736x/73/76/42/7376423d53d896289224ed0b01b95b69--asia-kpop.jpg",
"https://i.pinimg.com/736x/85/d1/77/85d177f80e4727cf9cedc87060b9163f.jpg",
"https://i.pinimg.com/736x/70/37/71/703771ecaa8b4b2270e17889a741fa67.jpg",
"https://i.pinimg.com/736x/58/84/e7/5884e738d73c170d58e7649d44f3b865.jpg",
"https://i.pinimg.com/736x/d4/a4/df/d4a4df12731bb7827977bb8a087ec4d8.jpg",
"https://i.pinimg.com/736x/8d/69/f3/8d69f39eb1aff9d135a2912eb01f999c.jpg",
"https://i.pinimg.com/736x/0d/ee/ce/0deecec83d4536c856b6b5fdb0a5903e.jpg",
"https://i.pinimg.com/736x/e8/b3/d4/e8b3d48ce277fab51d587b36b8976ba8.jpg",
"https://i.pinimg.com/736x/7a/02/03/7a02039e5ea6395d1cb2621979b5be7e.jpg",
"https://i.pinimg.com/736x/c8/31/91/c83191c1bd20ba0b6a8d93bfcb0058f0.jpg",
"https://i.pinimg.com/736x/e7/1c/c7/e71cc741f28c4d4e417960352eb73df9.jpg",
"https://i.pinimg.com/736x/e1/ad/c6/e1adc6a65c97463cd5e47100cffc28b5.jpg",
"https://i.pinimg.com/736x/7a/46/3e/7a463e8c8fa32acea8778515e46d3b11.jpg",
"https://i.pinimg.com/736x/1e/49/2b/1e492b49eaae90a4d539397e51871e88.jpg",
"https://i.pinimg.com/736x/4a/8c/b9/4a8cb98f547e2bf4767b32e230257e5c.jpg",
"https://i.pinimg.com/736x/50/ca/90/50ca90a8bc38acba8e2d06542a3e35b6.jpg",
"https://i.pinimg.com/736x/25/fc/35/25fc35d14d25635f501705f68d709cc7.jpg",
"https://i.pinimg.com/736x/2a/bc/1c/2abc1c50ef557ddd1a0d3f2c33db031f.jpg",
"https://i.pinimg.com/736x/3c/ba/4a/3cba4a312660d1fa6d8f2bc803cbc1b5.jpg",
"https://i.pinimg.com/736x/84/3d/59/843d59ce743cbac6977948cf90b12576.jpg",
"https://i.pinimg.com/736x/aa/a0/16/aaa016fb246006d90cb9f0766bfe54e2.jpg",
"https://i.pinimg.com/736x/25/ea/02/25ea02bb9aaeb9b6b807249db70a96cd.jpg",
"https://i.pinimg.com/736x/d1/00/9f/d1009f1ab90e6ade557151bc5ce8dd22.jpg",
"https://i.pinimg.com/736x/bf/67/9e/bf679e958e360a492c1993524bb7ed18.jpg",
"https://i.pinimg.com/736x/cf/62/71/cf6271ebe3463d62c98b0435eb7aae3a.jpg",
"https://i.pinimg.com/736x/74/97/1e/74971eda3a983b8c18a4d8576267f367.jpg",
"https://i.pinimg.com/736x/c6/d4/79/c6d479f987c8cba2b511ce2665de441f.jpg",
"https://i.pinimg.com/736x/5f/81/e8/5f81e8ce4bfe6062323f652847bdf451.jpg",
"https://i.pinimg.com/736x/04/f2/81/04f281b86399633847df4dec839558c9.jpg",
"https://i.pinimg.com/736x/bd/5d/4c/bd5d4cda3fb3293e3807391cb69c5fbd.jpg",
"https://i.pinimg.com/736x/83/6a/75/836a75781bb9e819e8c1d44e90b3974c.jpg",
"https://i.pinimg.com/736x/72/3b/23/723b23b012cbf3dea66980cdccb83950.jpg",
"https://i.pinimg.com/736x/ce/fe/5c/cefe5c98ff9adaa62a12159faf8aa1cc.jpg",
"https://i.pinimg.com/736x/74/aa/4e/74aa4e608bfd4110889324e4b12200b2--tattoo-inspiration-art-illustrations.jpg",
"https://i.pinimg.com/736x/0b/ca/5c/0bca5c2224fb9feeeb657928b00a5316.jpg",
"https://i.pinimg.com/736x/fa/d9/97/fad9978be46c9f0053a16ef09434eacc.jpg",
"https://i.pinimg.com/736x/ad/9a/69/ad9a697e0f90dd71dd509c947ec8984c.jpg",
"https://i.pinimg.com/736x/2d/98/bf/2d98bf01e40270b84cd20d4ed1a3f1cb.jpg",
"https://i.pinimg.com/736x/dd/2f/ba/dd2fbadd1e8feaecbd5622e7003c2742.jpg",
"https://i.pinimg.com/736x/1c/ed/40/1ced4020405a75ce9a107e0ed252ec5e.jpg",
"https://i.pinimg.com/736x/89/42/fd/8942fde8e5d83bfd0bad9b701a40c67b.jpg",
"https://i.pinimg.com/736x/38/35/74/3835743168a50ff5bd1e7c8aa6a34ad8.jpg",
"https://i.pinimg.com/736x/7d/77/af/7d77af17578c7a83b1d8d04dc53c6217.jpg",
"https://i.pinimg.com/736x/8f/ff/cd/8fffcdda0f7f06d2b8989a0ef1ae4c0c.jpg",
"https://i.pinimg.com/736x/29/17/f7/2917f715fb5c7b5fce50da3a2cc5b190.jpg",
"https://i.pinimg.com/736x/bb/43/20/bb432070d85e79adf517da0277cdf999.jpg",
"https://i.pinimg.com/736x/2e/41/99/2e419994aa7073144d3560840d8ba37c.jpg",
"https://i.pinimg.com/736x/f9/9b/9c/f99b9c2cef75bea9dd509542562c1cdc.jpg",
"https://i.pinimg.com/736x/35/5e/75/355e75467118e4cc65cba7af96f9c752.jpg",
"https://i.pinimg.com/736x/d0/29/b9/d029b99806d7b27a4745bea34e2a1273.jpg",
"https://i.pinimg.com/736x/f0/07/ce/f007ce67284c5aca336a96b2d21039f2.jpg",
"https://i.pinimg.com/736x/e6/2d/08/e62d0806a6cf9fa1be4fd1f5be7a9a61--kyoto-japan-cos.jpg",
"https://i.pinimg.com/736x/1d/ce/8b/1dce8b52718aeebc95221da43a1d384d.jpg",
"https://i.pinimg.com/736x/f9/96/f8/f996f84a77b5fa3526925b63d18756e4.jpg",
"https://i.pinimg.com/736x/88/c2/75/88c275ec5df8df7ff30b21b45d175cc2--ulzzang-korean.jpg",
"https://i.pinimg.com/736x/a9/b4/b1/a9b4b1e49954432843a6ce55366c8681--ulzzang-korea-ulzzang-girl.jpg",
"https://i.pinimg.com/736x/fe/81/be/fe81bee6eb949d0856b6e8319e965ff2.jpg",
"https://i.pinimg.com/736x/fd/c0/bd/fdc0bd967a4bd859af0febd2a2625b2c--ulzzang-beauty.jpg",
"https://i.pinimg.com/736x/cb/76/63/cb76631c479c098f288d7ed334bcf3f0.jpg",
"https://i.pinimg.com/736x/92/ea/dd/92eadd64d67c61baa4f81cf8553b1224--ulzzang-makeup-sexy-ulzzang.jpg",
"https://i.pinimg.com/736x/a5/18/d0/a518d0c501b8304e0cf26f439fb5bafa.jpg",
"https://i.pinimg.com/736x/11/e3/7d/11e37de6d4c56138477dd88437e1545a.jpg",
"https://i.pinimg.com/736x/29/21/bc/2921bcc0d16f746d0826c9905f4f3a1a.jpg",
"https://i.pinimg.com/736x/bf/cd/50/bfcd5051d544a3e4a578e58a81a5865b--short-hair-shorts.jpg",
"https://i.pinimg.com/736x/0a/73/a0/0a73a0b877790eb03a0de0dfcbf71d1f.jpg",
"https://i.pinimg.com/736x/2f/62/af/2f62af8a49734d003ac66bfca0097867.jpg",
"https://i.pinimg.com/736x/10/50/9f/10509f08d54612b968046770ed19a2f0.jpg",
"https://i.pinimg.com/736x/92/65/b2/9265b2ec446168bdc9f87150b20e3087.jpg",
"https://i.pinimg.com/736x/68/d0/4f/68d04f20d641e45f2905f4060e751868.jpg",
"https://i.pinimg.com/736x/07/af/82/07af8210204ae2a764c33b0be4ff14be.jpg",
"https://i.pinimg.com/736x/97/66/99/976699b263e191023a245d3fe92724d4--movie-stars-exotic.jpg",
"https://i.pinimg.com/736x/b2/25/b2/b225b2d0d538b9136070948ecf3afa0f--filipino-makeup-everyday-makeup.jpg",
"https://i.pinimg.com/736x/01/1d/d2/011dd2c42a3e7622cd8addc0aeaa5168.jpg",
"https://i.pinimg.com/736x/d0/74/bc/d074bcc71dfc7602c88d6f6d76453754.jpg",
"https://i.pinimg.com/736x/fe/1f/79/fe1f796a2fa4f6fef8a64cb47e0e6926--china-girl-kana.jpg",
"https://i.pinimg.com/736x/57/b6/87/57b687e147c2f35ae648744339f31201.jpg",
"https://i.pinimg.com/736x/1f/c2/69/1fc26920d076c13f1adf95d38be68bd3.jpg",
"https://i.pinimg.com/736x/d6/97/d2/d697d299337b6734fcc313a86f63348a.jpg",
"https://i.pinimg.com/736x/c1/0d/dc/c10ddc95d187b46557c7149ef2f0ddfa.jpg",
"https://i.pinimg.com/736x/9b/92/fa/9b92faced78923340dfcce5c513e3b28.jpg",
"https://i.pinimg.com/736x/47/00/8a/47008ae35b3c4d0ceaf6f3e2e4f33c69.jpg",
"https://i.pinimg.com/736x/0d/bc/18/0dbc18f2edf2b70ccce348b1082c98f7.jpg",
"https://i.pinimg.com/736x/82/5d/8d/825d8d57f8c273f4b3fe3cdd6345b6d5.jpg",
"https://i.pinimg.com/736x/88/24/74/8824740a20f7dc839b7ed4454b4847c3.jpg",
"https://i.pinimg.com/736x/d7/60/a2/d760a2aa6c8306ed1652233d566f2d4d.jpg",
"https://i.pinimg.com/736x/02/5d/7b/025d7b46ede75db2c4367c686133f41e.jpg",
"https://i.pinimg.com/736x/14/5b/d8/145bd8692c7a96de5882044a0307eae0.jpg",
"https://i.pinimg.com/736x/c0/1a/f5/c01af5fcf445b684c9cf3fb9ed122c75.jpg",
"https://i.pinimg.com/736x/d6/f2/dd/d6f2ddaf9b678cbb57e44ac31c347400.jpg",
"https://i.pinimg.com/736x/cc/ef/96/ccef9671e362deb57e1d60c66ee5aed9.jpg",
"https://i.pinimg.com/736x/f0/ce/67/f0ce677882212c64ef2e2a1e62e0ba9b.jpg",
"https://i.pinimg.com/736x/5f/02/82/5f0282313a7370c9afc902c74b3a46d3.jpg",
"https://i.pinimg.com/736x/6c/5e/c3/6c5ec3f0a3eaa9622705d579a2866b26.jpg",
"https://i.pinimg.com/736x/aa/11/84/aa1184073f64ff15c5e42d02d4b10d4d.jpg",
"https://i.pinimg.com/736x/9c/15/d7/9c15d7e9e8119f45f65b85a7bb4245d9.jpg",
"https://i.pinimg.com/736x/83/a5/27/83a52761898778a84bb2339c8b8a802b.jpg",
"https://i.pinimg.com/736x/2e/c3/da/2ec3da82547e02434efb0bbc26fe39c2.jpg",
"https://i.pinimg.com/736x/06/1d/9e/061d9e540761238f4465fec66cc1da2e.jpg",
"https://i.pinimg.com/736x/a7/d9/1d/a7d91dae6c7ead221f269c8a9a6a35f5.jpg",
"https://i.pinimg.com/736x/5c/72/eb/5c72ebf949634726fe26151263542ea3.jpg",
"https://i.pinimg.com/736x/db/66/cb/db66cb7b23d581d860276e762855d53b.jpg",
"https://i.pinimg.com/736x/2e/02/a9/2e02a92e9aeb6c52797d97de16883366.jpg",
"https://i.pinimg.com/736x/2c/06/33/2c06332146f33e4717d47cbac54f2cb1.jpg",
"https://i.pinimg.com/736x/7c/42/88/7c428863a7bef67f2e13db0a2d2e9e36.jpg",
"https://i.pinimg.com/736x/da/4f/d0/da4fd04c5302d2d0594bda3c71d3af80.jpg",
"https://i.pinimg.com/736x/26/1b/30/261b30ce67142f2fb201e0236b071180.jpg",
"https://i.pinimg.com/736x/8e/e8/28/8ee8282f7b1e2382994cf616d3459880.jpg",
"https://i.pinimg.com/736x/72/ac/10/72ac10674624ea238652d2001b265fc0.jpg",
"https://i.pinimg.com/736x/43/85/e2/4385e2d77770679a4617a72a6c779d97.jpg",
"https://i.pinimg.com/736x/76/fd/5e/76fd5ea06f068b18cab06ca0eeaed1df.jpg",
"https://i.pinimg.com/736x/03/3b/1a/033b1a5b8c1627fdc923b032d6598f6d.jpg",
"https://i.pinimg.com/736x/a4/93/d5/a493d5049971b1126786024d18075286.jpg",
"https://i.pinimg.com/736x/01/d2/4d/01d24d09e2688edf1b61d181a4cf9a6e.jpg",
"https://i.pinimg.com/736x/53/92/f0/5392f0da7560b88a7bc0eb6f7def1e24.jpg",
"https://i.pinimg.com/736x/30/50/86/305086fdbe6fd2b2ed731c2e5f00d9f5.jpg",
"https://i.pinimg.com/736x/26/7a/aa/267aaa2b7558806050131ffd2360f568.jpg",
"https://i.pinimg.com/736x/d4/6f/ea/d46fea3c17d558d7c87c735fb6268f3f.jpg",
"https://i.pinimg.com/736x/a1/db/c6/a1dbc69db8b51c910bc87a36b6735f60.jpg",
"https://i.pinimg.com/736x/d0/58/d9/d058d9c071bc4454f2c38b08d117a3a4.jpg",
"https://i.pinimg.com/736x/a1/3d/4f/a13d4f58ad77de492f72e0f49151cf46.jpg",
"https://i.pinimg.com/736x/f8/16/5d/f8165dc317590a599a447fa5973b5330.jpg",
"https://i.pinimg.com/736x/36/a9/8a/36a98a53a53b61ec6acf6bdcbc2b7554.jpg",
"https://i.pinimg.com/736x/0e/30/50/0e30508e0fd5ff8a006ce8cf0dbedad8.jpg",
"https://i.pinimg.com/736x/58/0a/cd/580acd315a81bc0f8d1f4e7e252e4edd.jpg",
"https://i.pinimg.com/736x/04/c4/d1/04c4d1b7ce574725cf7de4617d888d89.jpg",
"https://i.pinimg.com/736x/2f/41/d0/2f41d0745eb57cdbbeae7f13d515f870.jpg",
"https://i.pinimg.com/736x/89/7e/88/897e8890b436791abb93b4d71853d268.jpg",
"https://i.pinimg.com/736x/a4/c4/e2/a4c4e271ce047fefa618d2739d7ef847.jpg",
"https://i.pinimg.com/736x/5b/1b/ff/5b1bff07bd532cdac9085f2706624442.jpg",
"https://i.pinimg.com/736x/49/10/4a/49104aaa975e83cb88a56601836d5100.jpg",
"https://i.pinimg.com/736x/29/68/92/29689200fa2b77ddcb97062b6c2a8275.jpg",
"https://i.pinimg.com/736x/09/98/fc/0998fc503cd19869133b5a86eecada04.jpg",
"https://i.pinimg.com/736x/2c/16/ec/2c16ec00eae627f885dfefcb6f6e2d6b.jpg",
"https://i.pinimg.com/736x/29/42/b3/2942b30b6dc0797767c429ee65b68dd6.jpg",
"https://i.pinimg.com/736x/ed/ca/ed/edcaed25255b6099816c675ca7dcfe26.jpg",
"https://i.pinimg.com/736x/b9/50/36/b95036ee58ba389c08619404e69cb709.jpg",
"https://i.pinimg.com/736x/10/ac/75/10ac75e8014939860866520df74b24d1.jpg",
"https://i.pinimg.com/736x/73/63/1f/73631f5c7b49bf38a8ea9ba27c6b4101.jpg",
"https://i.pinimg.com/736x/37/e0/da/37e0da178a164be148ae39cc9ac20d1b.jpg",
"https://i.pinimg.com/736x/ef/f9/20/eff92082dfa0498945bfd73e1dfc980e.jpg",
"https://i.pinimg.com/736x/d9/52/43/d95243f35aa410694f7d2901ce0b581e.jpg",
"https://i.pinimg.com/736x/0c/38/36/0c3836bb1c7ac5cd06e38cff3ae1f9b4.jpg",
"https://i.pinimg.com/736x/f5/cb/38/f5cb38f3fc87a417f871ecc018cb7c6d.jpg",
"https://i.pinimg.com/736x/f7/bd/07/f7bd0744dd76eb19a9bf6f33d0178719.jpg",
"https://i.pinimg.com/736x/f2/d3/59/f2d359f8ff96c7a9c2f10c8c172fd923--fox.jpg",
"https://i.pinimg.com/736x/09/ae/c7/09aec7f850a7c2cc54fca8a2b88bc65e.jpg",
"https://i.pinimg.com/736x/9c/2c/be/9c2cbe4968cc3c4a64d4fa36233c36de.jpg",
"https://i.pinimg.com/736x/a1/b4/c9/a1b4c95f9a6de9ae2227ca3a90ea1181--chinese-clothing-traditional-clothes.jpg",
"https://i.pinimg.com/736x/ba/12/02/ba1202bc085b202426fa8babe16d4297.jpg",
"https://i.pinimg.com/736x/0f/8a/53/0f8a53dae2c9be6d4a381908c919524e.jpg",
"https://i.pinimg.com/736x/1c/f4/27/1cf427ec7e159217ca178d72bedbbb54.jpg",
"https://i.pinimg.com/736x/e5/f0/c9/e5f0c9410c4f8f3df5f16d88ab9fd3e4--korean-ulzzang-ulzzang-girl.jpg",
"https://i.pinimg.com/736x/e5/f0/c9/e5f0c9410c4f8f3df5f16d88ab9fd3e4.jpg",
"https://i.pinimg.com/736x/7e/f1/cb/7ef1cb9dd7372c2a737f67d03ce285ce.jpg",
"https://i.pinimg.com/736x/8c/be/5b/8cbe5b01c58bdad13c8abb56ea918f63.jpg",
"https://i.pinimg.com/736x/77/cb/15/77cb15cd85757d4b80847a1dd52cd7df.jpg",
"https://i.pinimg.com/736x/49/94/e6/4994e6829542c193081f70b087e41157--beautiful-females-sexy-hair.jpg",
"https://i.pinimg.com/736x/35/95/d6/3595d62efa969ec30d47c5ff7a7623e7.jpg",
"https://i.pinimg.com/736x/a5/01/75/a50175c8288a51a48cfd5d90a1c74eb4.jpg",
"https://i.pinimg.com/736x/38/db/7e/38db7eb8876a82f3be209aa522604dcd.jpg",
"https://i.pinimg.com/736x/83/b9/11/83b91163c20b9af41fde3914d8b3fb62.jpg",
"https://i.pinimg.com/736x/5b/2b/d3/5b2bd3bf95ebd0b70ee866607d669561.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data =["https://i.postimg.cc/QdncScPQ/1.jpg",
"https://i.postimg.cc/zv1CK5Q4/10.jpg",
"https://i.postimg.cc/4x3zzW84/11.jpg",
"https://i.postimg.cc/pXCfhwJ1/12.jpg",
"https://i.postimg.cc/brHQRWcr/13.jpg",
"https://i.postimg.cc/zX8wfzKg/14.jpg",
"https://i.postimg.cc/QM91zHGR/15.jpg",
"https://i.postimg.cc/43DVRsXn/16.jpg",
"https://i.postimg.cc/nrkDmmBQ/17.jpg",
"https://i.postimg.cc/CLhDgvpC/18.jpg",
"https://i.postimg.cc/fT8dTxMG/19.jpg",
"https://i.postimg.cc/RFwfMy0d/2.jpg",
"https://i.postimg.cc/nrZmM2jJ/20.jpg",
"https://i.postimg.cc/dVDy7L1L/21.jpg",
"https://i.postimg.cc/kMF8z0zX/22.jpg",
"https://i.postimg.cc/VkTbXmr4/23.jpg",
"https://i.postimg.cc/3wv0BV2h/24.jpg",
"https://i.postimg.cc/V6PrHgFC/25.jpg",
"https://i.postimg.cc/MT0MkBsr/26.jpg",
"https://i.postimg.cc/RhM3v0yC/27.jpg",
"https://i.postimg.cc/D0BS0T3r/28.jpg",
"https://i.postimg.cc/VsRrDj0J/29.jpg",
"https://i.postimg.cc/TY3ySpnC/3.jpg",
"https://i.postimg.cc/NfCywB4Y/30.jpg",
"https://i.postimg.cc/3RZRfTRs/31.jpg",
"https://i.postimg.cc/HnZLH9b3/4.jpg",
"https://i.postimg.cc/rFsmj7LH/5.jpg",
"https://i.postimg.cc/4N03Swfx/6.jpg",
"https://i.postimg.cc/66YqdtFR/7.jpg",
"https://i.postimg.cc/rwtpXWsC/8.jpg",
"https://i.postimg.cc/wB8j6vsK/9.jpg",
"https://i.pinimg.com/736x/5b/ff/21/5bff21f580ee2a10cfd7f13d042b8223.jpg",
"https://i.pinimg.com/736x/72/6c/f6/726cf6fe3bc07fa18d4fb4d541cdb9da.jpg",
"https://i.pinimg.com/736x/e0/2a/3d/e02a3dde7132f64a3bcaa1fd0f6232c6.jpg",
"https://i.pinimg.com/736x/28/37/20/2837204ff164f066601295505295f53d.jpg",
"https://i.pinimg.com/736x/ee/68/cb/ee68cbe52aae2821295e203cd7431175.jpg",
"https://i.pinimg.com/736x/09/d7/f7/09d7f7e6f8550b439eb2deae17e1f137.jpg",
"https://i.pinimg.com/736x/93/fd/86/93fd86c7c86c13c7b9703f3e30a11e4d.jpg",
"https://i.pinimg.com/736x/9a/30/ba/9a30ba86398cd680faeba634ab71283f.jpg",
"https://i.pinimg.com/736x/ff/ad/04/ffad049959427d34ee0ac6e0c4a6fad6.jpg",
"https://i.pinimg.com/736x/e3/1d/7a/e31d7a787008011dbe5d62f70cab7934.jpg",
"https://i.pinimg.com/736x/a0/07/97/a00797632fe73b5c4f35e3afa5410595.jpg",
"https://i.pinimg.com/736x/4b/1f/87/4b1f87f217a238f3a168af53de0715ff.jpg",
"https://i.pinimg.com/736x/ce/79/29/ce7929c7a2e2aea14de8b7b7f68f1953.jpg",
"https://i.pinimg.com/736x/3a/32/ec/3a32eca41fe13a0eb124741aa4148b71.jpg",
"https://i.pinimg.com/736x/67/45/7e/67457ee7d8a393208b381ab03ea64cbc.jpg",
"https://i.pinimg.com/736x/a5/1e/3d/a51e3dd45983bda0d462bdf743a3bd6c.jpg",
"https://i.pinimg.com/736x/11/e2/2c/11e22c517e7a2e5953ef5a91d549952e.jpg",
"https://i.pinimg.com/736x/8d/f2/2d/8df22d7e33a9a6f2b8af6792d103a546.jpg",
"https://i.pinimg.com/736x/c3/a4/83/c3a4838e738d8d0c2bdab5813f9e64f8.jpg",
"https://i.pinimg.com/736x/05/74/33/057433068dc8241d0f6dd5a81dd19491.jpg",
"https://i.pinimg.com/736x/40/42/20/4042209a7da30f1a97d17a75f403ad4e.jpg",
"https://i.pinimg.com/736x/b8/4d/81/b84d813c3d0065edebb20bbffd9824c1.jpg",
"https://i.pinimg.com/736x/7c/23/be/7c23be1438baacc3c6ba55a790577c00.jpg",
"https://i.pinimg.com/736x/6d/08/85/6d088596a2fc7a8d75d9468c13840d3c.jpg",
"https://i.pinimg.com/736x/4d/cf/5d/4dcf5d9dfab54859452aaae1072e430b.jpg",
"https://i.pinimg.com/736x/da/98/4c/da984c5366e70e42914b437316bb99cb.jpg",
"https://i.pinimg.com/736x/17/90/84/17908472588c78ca8d1bbe4c558cbf94.jpg",
"https://i.pinimg.com/736x/ef/e4/f2/efe4f2fe7030c89f31e83be1b0f5ef1c.jpg",
"https://i.pinimg.com/736x/d5/e7/0d/d5e70d7d92071ff6200facf4fd719dee.jpg",
"https://i.pinimg.com/736x/3c/97/37/3c9737ceb8dca078a7dd9f9590d783c4.jpg",
"https://i.pinimg.com/736x/62/b6/37/62b6370726160df92fa26d51df2bb9f5.jpg",
"https://i.pinimg.com/736x/42/26/9d/42269dbdcd79076a998cc9e10b2165d8.jpg",
"https://i.pinimg.com/736x/50/40/df/5040dffd4cb6f339b0101880ba33ed12.jpg",
"https://i.pinimg.com/736x/fb/f6/60/fbf660f600e8a1399250776019157c39.jpg",
"https://i.pinimg.com/736x/6f/66/d9/6f66d94e171494b71897710e0d79c12e.jpg",
"https://i.pinimg.com/736x/3c/41/c8/3c41c8cc2fd3b67c23286d14d488f86b.jpg",
"https://i.pinimg.com/736x/de/a1/3d/dea13d7595f33704b0eff37b8bcbfada.jpg",
"https://i.pinimg.com/736x/48/40/94/484094cefd5c709b79dd16da92f58d93.jpg",
"https://i.pinimg.com/736x/a6/68/3b/a6683bb4bd93128c5f5c889ed3133210.jpg",
"https://i.pinimg.com/736x/4a/d1/5a/4ad15a60e16909bd1a92ed0c6d9e16a3.jpg",
"https://i.pinimg.com/736x/39/01/ae/3901aedd872606b2b7aae6f5d62411da.jpg",
"https://i.pinimg.com/736x/7f/c1/3c/7fc13c5e54e374cbb1876688f14d84bc.jpg",
"https://i.pinimg.com/736x/eb/42/77/eb42771e90d3469a7e8f1dbc3535de57.jpg",
"https://i.pinimg.com/736x/f1/5f/69/f15f6925a8f656949213c64028aea16c.jpg",
"https://i.pinimg.com/736x/c9/d2/7b/c9d27b2a8182f00dbe239f9c4934b057.jpg",
"https://i.pinimg.com/736x/1b/5b/d9/1b5bd94f2eefaaa150a941c00d7fea0f.jpg",
"https://i.pinimg.com/736x/3a/4e/cd/3a4ecd5dd56d0f9d88dcf09bec9aeda5.jpg",
"https://i.pinimg.com/736x/c8/78/6a/c8786ae793bf4fbc34b18a037cbe749a.jpg",
"https://i.pinimg.com/736x/40/40/a0/4040a0fda6b2dbf7d592994b03b95d43.jpg",
"https://i.pinimg.com/736x/a0/65/58/a065586e7270041677719d5006552019.jpg",
"https://i.pinimg.com/736x/39/a2/3f/39a23feaef237cfb086c251625c763d9.jpg",
"https://i.pinimg.com/736x/50/92/93/509293746fde85c6150cf3089d03533d.jpg",
"https://i.pinimg.com/736x/21/0f/a0/210fa040ca12dacf92da0c2035f05288.jpg",
"https://i.pinimg.com/736x/8a/cd/1d/8acd1d4a24562035f882a6fb55255021.jpg",
"https://i.pinimg.com/736x/b1/9a/6f/b19a6f4b98cda75e70e1efd4013ea727.jpg",
"https://i.pinimg.com/736x/a0/a4/59/a0a459eaf84e460c5598cdbf5854e82f.jpg",
"https://i.pinimg.com/736x/be/bb/f4/bebbf41db18d41e1320728ec157d8370.jpg",
"https://i.pinimg.com/736x/9b/06/0a/9b060ab1edaaee57151cd8850cef23cd.jpg",
"https://i.pinimg.com/736x/47/9e/55/479e55733a1c49fc318f182067fa2d70.jpg",
"https://i.pinimg.com/736x/20/d2/c6/20d2c66f4a46523908bebbecdd65c838.jpg",
"https://i.pinimg.com/736x/84/1d/11/841d118771c925b084beab0855af591c.jpg",
"https://i.pinimg.com/736x/84/22/52/8422523236d8c3e4bc66f413e43d70c3.jpg",
"https://i.pinimg.com/736x/c7/b6/ce/c7b6cec12a050dbc23dd066b5c34a572.jpg",
"https://i.pinimg.com/736x/60/0b/7a/600b7a4638e1b4087669c6116c93d11d.jpg",
"https://i.pinimg.com/736x/69/3a/5e/693a5edd191d6067ea4904b8b6c2d5eb.jpg",
"https://i.pinimg.com/736x/fc/0b/86/fc0b86f29c072f9ae1e2da151f21660a.jpg",
"https://i.pinimg.com/736x/28/98/20/2898201665b00409d69ab5d01e1e6b3d.jpg",
"https://i.pinimg.com/736x/4a/58/dd/4a58dd6528c8bc0946c82797a8d63ac4.jpg",
"https://i.pinimg.com/736x/31/80/86/31808647830df4cc089a12372c99f606.jpg",
"https://i.pinimg.com/736x/2f/a5/94/2fa594e4f25950b64e479eed1823a171.jpg",
"https://i.pinimg.com/736x/50/f1/b1/50f1b1b3e46261adfcf06292061fec43.jpg",
"https://i.pinimg.com/736x/26/6f/04/266f040047817fcbf80a2392f28c6898.jpg",
"https://i.pinimg.com/736x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg",
"https://i.pinimg.com/736x/c3/4a/4f/c34a4f2820562ca308601c07880ac9c8.jpg",
"https://i.pinimg.com/736x/68/15/09/68150914420f7c2731518a0f19dd41d6.jpg",
"https://i.pinimg.com/736x/59/83/fd/5983fd94df9f4cb5938c162df07ccb70.jpg",
"https://i.pinimg.com/736x/e3/f2/6b/e3f26b930afc58d65842fc8e6b07ff7f.jpg",
"https://i.pinimg.com/736x/41/7a/05/417a05ced34bfabc237072919105356c.jpg",
"https://i.pinimg.com/736x/9a/8b/1a/9a8b1ab83aecbcfa26380ae171c3966e.jpg",
"https://i.pinimg.com/736x/c0/28/c7/c028c7af995a2bd16f782bd1b6f12aec.jpg",
"https://i.pinimg.com/736x/26/81/81/268181271162cf17f17a86a3867cfd7b.jpg",
"https://i.pinimg.com/736x/1a/35/7b/1a357be441c6f6b91fd5d557fbb5a99b.jpg",
"https://i.pinimg.com/736x/b9/7e/06/b97e06b074a9c4493aa1a1311e66917c.jpg",
"https://i.pinimg.com/736x/2b/27/27/2b2727a0b32b931cb5303c339d46244e.jpg",
"https://i.pinimg.com/736x/70/ed/e1/70ede157f5159b7610672085b1a8d871.jpg",
"https://i.pinimg.com/736x/c4/ac/3d/c4ac3d2fae2e730ef22cf54eb56ddd94.jpg",
"https://i.pinimg.com/736x/0f/b6/0f/0fb60fd4f8e1ed9b34465f5ceb1c0bc1.jpg",
"https://i.pinimg.com/736x/49/c1/38/49c1383b78d51fc135b72d835b61c3e1.jpg",
"https://i.pinimg.com/736x/99/b1/dd/99b1dd14be4f10398f1cf1e52b338ea4.jpg",
"https://i.pinimg.com/736x/91/e7/dd/91e7dddf029f854c18a8ac7c9bc540d4.jpg",
"https://i.pinimg.com/736x/9a/9d/40/9a9d4058a24e027d9ed6cfc179f10c85.jpg",
"https://i.pinimg.com/736x/36/18/be/3618be32cb0de5528901a73120f9b7d6.jpg",
"https://i.pinimg.com/736x/65/22/70/652270d9bcbfef4831b7730872cf2f4e.jpg",
"https://i.pinimg.com/736x/87/ad/74/87ad742215d71c4f2896ca10a1602a51.jpg",
"https://i.pinimg.com/736x/b2/ae/09/b2ae09b9abc19904d82dc72fb16531d9.jpg",
"https://i.pinimg.com/736x/fb/9c/2f/fb9c2f7d1021ef80a9e5b0aecea2c3e2.jpg",
"https://i.pinimg.com/736x/ec/1a/58/ec1a580585c0953584ed980c75ff297b.jpg",
"https://i.pinimg.com/736x/49/c0/fe/49c0fe384deb9fd2a15ff57b5ff915a9.jpg",
"https://i.pinimg.com/736x/5b/20/09/5b2009ed9694ed6a466f7893ea39b5ef.jpg",
"https://i.pinimg.com/736x/66/67/7b/66677b3ceca5bd51567c211aa061d10b.jpg",
"https://i.pinimg.com/736x/3e/51/4c/3e514ccc0a5efadd61a848292f9b26eb.jpg",
"https://i.pinimg.com/736x/65/9f/af/659faf0dfd5ab1030d3ffae931cf59d5.jpg",
"https://i.pinimg.com/736x/bb/0b/bb/bb0bbbfdf69f31a6ad7fd219a5ebb2a1.jpg",
"https://i.pinimg.com/736x/9d/b7/56/9db7561e3b46399e951132841ae61842.jpg",
"https://i.pinimg.com/736x/4c/b5/49/4cb549573d4d62454a7794daed76e48c.jpg",
"https://i.pinimg.com/736x/5a/a4/47/5aa4477e3418cfc8331104920023aaf4.jpg",
"https://i.pinimg.com/736x/05/9e/b7/059eb70c024dd9107a6403b8795d026c.jpg",
"https://i.pinimg.com/736x/f1/0b/34/f10b3464edca4323a7ac4bea9136025c.jpg",
"https://i.pinimg.com/736x/76/d5/c1/76d5c1c142c12861a39c9101bbe5eacb.jpg",
"https://i.pinimg.com/736x/a9/e2/e3/a9e2e36c963b5ecf6f7f0bf12ab2a28c.jpg",
"https://i.pinimg.com/736x/84/ad/57/84ad5747b9be33ae52d28eb997f50e0f.jpg",
"https://i.pinimg.com/736x/61/fd/00/61fd00aebfbb7bc14174b21fc0266f61.jpg",
"https://i.pinimg.com/736x/01/3c/72/013c72373a69743876727a752ba6753f.jpg",
"https://i.pinimg.com/736x/8a/f5/ce/8af5ce2355bab976a24a85a6dfaa1c5b--fitness-magazine-fitness-apparel.jpg",
"https://i.pinimg.com/736x/f7/8c/53/f78c53ced70873273e2c0763f67520c1.jpg",
"https://i.pinimg.com/736x/6a/90/ed/6a90ed604d1fa766b4ccd557816f7b34.jpg",
"https://i.pinimg.com/736x/91/d7/ef/91d7efd935c0576b803957f0f505e03e.jpg",
"https://i.pinimg.com/736x/ac/97/f1/ac97f1c4a0dac82f4c233a69cd2c4b3a.jpg",
"https://i.pinimg.com/736x/5b/43/02/5b43028e8af1036a6d06caa37c843640.jpg",
"https://i.pinimg.com/736x/1d/66/f7/1d66f7a5ad4b560e275f96c479c1dde5.jpg",
"https://i.pinimg.com/736x/d6/db/9e/d6db9eee3e04414de2cb1c875300e7d6.jpg",
"https://i.pinimg.com/736x/29/3a/9f/293a9f047aba391b9ddaeede194d2622.jpg",
"https://i.pinimg.com/736x/b1/97/fe/b197fe1aff9840c79d3c3c7a9b8ca9c8.jpg",
"https://i.pinimg.com/736x/5d/f1/8b/5df18b9c72528fbbe3b5372fda5a1b65.jpg",
"https://i.pinimg.com/736x/5b/d0/a3/5bd0a3c449e506349a54191d248f844e.jpg",
"https://i.pinimg.com/736x/23/d8/18/23d81857699bd2a99979df849cf65e5c.jpg",
"https://i.pinimg.com/736x/f3/0d/32/f30d327652c573e113551c460344e502.jpg",
"https://i.pinimg.com/736x/2c/d0/54/2cd054fbbcb429626bdc25d069fedab1.jpg",
"https://i.pinimg.com/736x/0a/29/7c/0a297cbbc800697580c9309469de31f7.jpg",
"https://i.pinimg.com/736x/2f/49/39/2f49396193dc0295a15fdd244219d544.jpg",
"https://i.pinimg.com/736x/b3/37/59/b33759c0ab3275bb8e320fcebb9820b1.jpg",
"https://i.pinimg.com/736x/68/65/ac/6865acf2ca3f5dbdce52a595e511cbc3.jpg",
"https://i.pinimg.com/736x/fe/46/0b/fe460b397c74a7cfcb6d027c8ec854f3.jpg",
"https://i.pinimg.com/736x/6d/ba/c1/6dbac1c08e114913a52e5bf157983d90.jpg",
"https://i.pinimg.com/736x/fe/a3/6f/fea36ff0c2770550aea70fbe488b5648.jpg",
"https://i.pinimg.com/736x/59/72/a3/5972a34bd75ae4a8a9a0cb9af9f7dee9.jpg",
"https://i.pinimg.com/736x/38/0d/ae/380dae80415cd755cee6b60c120a1f27.jpg",
"https://i.pinimg.com/736x/41/cd/ee/41cdee1f1e72aed3f410868695041075.jpg",
"https://i.pinimg.com/736x/87/d9/76/87d9764ee6451dacb2ec9c46ca010f29.jpg",
"https://i.pinimg.com/736x/e5/e5/ac/e5e5aca60fa92597532d846902181959.jpg",
"https://i.pinimg.com/736x/7d/6b/91/7d6b91820979b36b71bafc04129416b8.jpg",
"https://i.pinimg.com/736x/49/25/09/4925093a098ff9e10e61ec1647ee9c84.jpg",
"https://i.pinimg.com/736x/aa/ca/90/aaca90a61dfe994bd771f9f8703bcc23.jpg",
"https://i.pinimg.com/736x/7a/f5/aa/7af5aa57b6f61dd3b241631e47f0afe2.jpg",
"https://i.pinimg.com/736x/e7/ce/8b/e7ce8b5679415eb1805ed13298efb718.jpg",
"https://i.pinimg.com/736x/7e/b5/27/7eb52764c881270a8039f9ce1e2b432d.jpg",
"https://i.pinimg.com/736x/2b/f9/77/2bf977aa931cfb7c96d29eda63e921b6.jpg",
"https://i.pinimg.com/736x/1a/d8/56/1ad8564f5abcfa45066fb7d7a53e29ad.jpg",
"https://i.pinimg.com/736x/b9/22/ac/b922ac3fa9fa6ffac58718eb619d4146.jpg",
"https://i.pinimg.com/736x/70/08/92/70089241d2e541d71872ffe341eab732.jpg",
"https://i.pinimg.com/736x/8d/51/50/8d5150fcd5fe892c147e5cec6bdbc1db.jpg",
"https://i.pinimg.com/736x/98/f4/ad/98f4adab5761647d411489fde572b2dd.jpg",
"https://i.pinimg.com/736x/c2/4e/bb/c24ebbb383a9a9b6715a62c98a17501f.jpg",
"https://i.pinimg.com/736x/ef/b0/ac/efb0acd1b7bc04178edd53f245fdbd0c.jpg",
"https://i.pinimg.com/736x/c1/39/76/c13976c1d5acc4d320df2a297deff7f6.jpg",
"https://i.pinimg.com/736x/f6/7c/2c/f67c2c730fd9b23fd898fbd3009c0c16.jpg",
"https://i.pinimg.com/736x/8d/bd/26/8dbd260153a446b1949a3b009ab87d01.jpg",
"https://i.pinimg.com/736x/cf/bc/17/cfbc172bd64f29025b06f6bfaf598d69.jpg",
"https://i.pinimg.com/736x/92/92/3c/92923c85110e345f32beafc7bc9bc87e.jpg",
"https://i.pinimg.com/736x/2c/3c/16/2c3c16d008f9cd7646be1904eef868f7.jpg",
"https://i.pinimg.com/736x/81/bd/d2/81bdd2ee4ec37fac9b147505e37b1a12.jpg",
"https://i.pinimg.com/736x/cb/51/2e/cb512eeda4719a4e51460b9203b49b1f.jpg",
"https://i.pinimg.com/736x/8d/89/7c/8d897c1d5164275e3f6cb5d8a517bd6d.jpg",
"https://i.pinimg.com/736x/dc/4c/6f/dc4c6fae6d21ee2a020f49ebcd564051.jpg",
"https://i.pinimg.com/736x/89/17/a7/8917a77bf3fefb954275ba374ef8c63e.jpg",
"https://i.pinimg.com/736x/58/3f/ad/583fadc5e3136fb69811559c2fc95210.jpg",
"https://i.pinimg.com/736x/22/ea/7c/22ea7c0b0da57f3a62e0c463df6b934e.jpg",
"https://i.pinimg.com/736x/ab/b0/d2/abb0d2ce4f142978d5e7c4daac0ce14f.jpg",
"https://i.pinimg.com/736x/4a/db/d4/4adbd47f935370eb65884e1bf5e6f8be.jpg",
"https://i.pinimg.com/736x/72/e9/60/72e96095630c23dcf049593942409461.jpg",
"https://i.pinimg.com/736x/b6/0f/26/b60f26fb434c2cc93e00362877e73e72.jpg",
"https://i.pinimg.com/736x/a8/52/9e/a8529eac967635efef9a5e23e2454049.jpg",
"https://i.pinimg.com/736x/a5/35/71/a53571d52a26b7e6ad50b50bf0cf3408.jpg",
"https://i.pinimg.com/736x/45/77/fa/4577fa7d80251aee71fec3bbe673378d.jpg",
"https://i.pinimg.com/736x/0c/46/dc/0c46dcc9301ab08e5162f84c2101abdc.jpg",
"https://i.pinimg.com/736x/9d/4f/45/9d4f45f53f9d29c8f00f1e9ed6875f9b.jpg",
"https://i.pinimg.com/736x/4f/b0/f7/4fb0f72d138482e6f7727c4429b241b1.jpg",
"https://i.pinimg.com/736x/19/d2/a0/19d2a0d29b88a79896566dc6a59fa8f2.jpg",
"https://i.pinimg.com/736x/c0/73/f9/c073f98ae40c83a315929c555233623c.jpg",
"https://i.pinimg.com/736x/f1/78/d2/f178d2be7de69513814831522f677d67.jpg",
"https://i.pinimg.com/736x/c8/cd/6b/c8cd6b78a0dc28396acb5b0fd6d0c162.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/PJtYFxrk/1.jpg",
"https://i.postimg.cc/445zHzB4/10.jpg",
"https://i.postimg.cc/RFTnfB1p/11.jpg",
"https://i.postimg.cc/RZ3fY29q/12.jpg",
"https://i.postimg.cc/jd3PZtpG/13.jpg",
"https://i.postimg.cc/65qG7F8z/14.jpg",
"https://i.postimg.cc/T3WL0mqD/15.jpg",
"https://i.postimg.cc/6q54fmYW/16.jpg",
"https://i.postimg.cc/rmgKs9cv/17.jpg",
"https://i.postimg.cc/j2Ld50M7/18.jpg",
"https://i.postimg.cc/YC12jxzb/19.jpg",
"https://i.postimg.cc/MHMqw0G0/2.jpg",
"https://i.postimg.cc/63Hpt5fK/20.jpg",
"https://i.postimg.cc/zBLGDYtR/21.jpg",
"https://i.postimg.cc/jdnSYTwV/3.jpg",
"https://i.postimg.cc/HWykfH8q/4.jpg",
"https://i.postimg.cc/fycZkzxk/5.jpg",
"https://i.postimg.cc/MK0KpDDt/6.jpg",
"https://i.postimg.cc/5NJbTzVz/7.jpg",
"https://i.postimg.cc/QtWjGkCQ/8.jpg",
"https://i.postimg.cc/C5TSFBnW/9.jpg",
"https://i.pinimg.com/736x/e7/ea/7d/e7ea7df0cd52a800cf0c9dde1d329186.jpg",
"https://i.pinimg.com/736x/5f/41/ef/5f41ef67b02de6da5009771cc71dc2a3.jpg",
"https://i.pinimg.com/736x/60/58/a3/6058a3df9c567ad917bd22fd6aded2a1.jpg",
"https://i.pinimg.com/736x/21/84/b3/2184b3baad81218d4b6011e6db57c3f3.jpg",
"https://i.pinimg.com/736x/6d/84/38/6d843863dd26f9f3e783a8182f691dcf.jpg",
"https://i.pinimg.com/736x/2d/e6/f1/2de6f16857b46337a90dc71e62abe5a1.jpg",
"https://i.pinimg.com/736x/fd/bd/ea/fdbdea712f7877dcf720e378a71dd31a.jpg",
"https://i.pinimg.com/736x/ae/88/21/ae8821ed398cc74b69b1216284a98c17.jpg",
"https://i.pinimg.com/736x/6a/2c/96/6a2c96717595d747fa9603ad884b1cff.jpg",
"https://i.pinimg.com/736x/82/51/58/825158a25bc8a8d61886b20b2fc08916.jpg",
"https://i.pinimg.com/736x/16/73/b2/1673b22aef6c7d43dbcefa6d33700cfe.jpg",
"https://i.pinimg.com/736x/1b/3b/cb/1b3bcb134a9fbf7e9caa8eb2c85e1f5c.jpg",
"https://i.pinimg.com/736x/f2/f5/d5/f2f5d52e61696c7bca84c292d83b9916.jpg",
"https://i.pinimg.com/736x/11/53/bb/1153bb20e25f2a404442fb43114d57b6.jpg",
"https://i.pinimg.com/736x/c8/b2/ed/c8b2ed359b70aa2d2607563647d9ec6c.jpg",
"https://i.pinimg.com/736x/bc/76/61/bc7661490662646ec87b2b2e88dca7b2.jpg",
"https://i.pinimg.com/736x/84/a4/55/84a455a11dfebf556c84a0523a22c5b5.jpg",
"https://i.pinimg.com/736x/57/be/1a/57be1a8e9bd205c656a62b96d8d0a550.jpg",
"https://i.pinimg.com/736x/ee/8e/15/ee8e1556c388016824845e331971b831.jpg",
"https://i.pinimg.com/736x/e0/3f/ec/e03fec40ffc135b8ba7705ffa9ca2a0f.jpg",
"https://i.pinimg.com/736x/64/20/8a/64208af804cbc7281f227953573550dd.jpg",
"https://i.pinimg.com/736x/93/cf/bb/93cfbba6e3d3076e491beaa10d35bc23.jpg",
"https://i.pinimg.com/736x/9c/b5/e0/9cb5e04965f7a46d37a55f20158cb086.jpg",
"https://i.pinimg.com/736x/3b/0a/d0/3b0ad047b03d122a7babddb3fa701cc1.jpg",
"https://i.pinimg.com/736x/15/42/cf/1542cfbe7a7db5bc474b2bdfcfe9e156.jpg",
"https://i.pinimg.com/736x/ed/f5/e5/edf5e57c4db1a49c55618e2b76757b98.jpg",
"https://i.pinimg.com/736x/99/a4/15/99a4153b74b3d3355fb7070c56ca6d88.jpg",
"https://i.pinimg.com/736x/95/b4/30/95b43053eaa2b96bdc3a42ea17aabdbd.jpg",
"https://i.pinimg.com/736x/d8/25/6a/d8256a7ea0c26281f6bb715c25fcc843.jpg",
"https://i.pinimg.com/736x/7c/d2/04/7cd204bdc9e5a4c9dc2563879f060bbc.jpg",
"https://i.pinimg.com/736x/55/d5/5a/55d55a8d8531c2f84957f91fe545750b.jpg",
"https://i.pinimg.com/736x/08/5a/f7/085af722c817492e36080217555cbaa6.jpg",
"https://i.pinimg.com/736x/be/1d/40/be1d406ea4244db544cc203af64c2ab6.jpg",
"https://i.pinimg.com/736x/df/76/27/df7627d42b0a6379322916a45798fe51.jpg",
"https://i.pinimg.com/736x/d0/51/46/d0514632125c3f4cf49cfa17570049ba.jpg",
"https://i.pinimg.com/736x/cc/da/3d/ccda3df1de978194b2732663823de4a0.jpg",
"https://i.pinimg.com/736x/1c/89/a2/1c89a21f71ee3d58a8546078d475ccc4.jpg",
"https://i.pinimg.com/736x/2a/35/e1/2a35e119f5c3575b00e2a41a5587593c.jpg",
"https://i.pinimg.com/736x/65/df/97/65df97ae53151401ad58f19d3fe9acc3.jpg",
"https://i.pinimg.com/736x/8e/af/00/8eaf00d7c616ea9b33e70cf9e825a0a3.jpg",
"https://i.pinimg.com/736x/7b/c1/c9/7bc1c949a6527075ef1dec6d3ba08b81.jpg",
"https://i.pinimg.com/736x/75/90/9f/75909f3e8eaa3f1a8f151bee35ff16e0.jpg",
"https://i.pinimg.com/736x/49/f1/f2/49f1f251d8a73e21a0a77311bbcb9da2.jpg",
"https://i.pinimg.com/736x/49/f3/79/49f3796695fad531252f76d28f9b3412.jpg",
"https://i.pinimg.com/736x/d5/25/4b/d5254bbb54e6b373a4e2d5909fcd8682--short-hair.jpg",
"https://i.pinimg.com/736x/e3/db/89/e3db899e672d794af802e6a9a4a42520.jpg",
"https://i.pinimg.com/736x/3f/d8/9e/3fd89e15b5c58e1d579d26495b9281c2.jpg",
"https://i.pinimg.com/736x/e6/d6/31/e6d631919f17f09aa9768a6cfbbc4fa0.jpg",
"https://i.pinimg.com/736x/1a/aa/08/1aaa0852edbc18601b7b7b69cd645f26.jpg",
"https://i.pinimg.com/736x/e6/28/e9/e628e9c1245cf469c10e08d7a03c2537.jpg",
"https://i.pinimg.com/736x/45/d5/cd/45d5cd008879ec7f0f5c09e9a8c72036.jpg",
"https://i.pinimg.com/736x/e4/c8/84/e4c88480088d4ad6a33b6d25111f3c00--street-style-looks-fantasy-hair.jpg",
"https://i.pinimg.com/736x/4a/40/69/4a4069410faef02968265207e0195223.jpg",
"https://i.pinimg.com/736x/41/3b/6a/413b6aa039b8ec84f4f50efaddebd735.jpg",
"https://i.pinimg.com/736x/78/3b/65/783b65a06fa2c14888ea353e3407f32c.jpg",
"https://i.pinimg.com/736x/e4/2e/36/e42e365343c907c4fc62243604b35cc9--hormones-the-series-hair-styles.jpg",
"https://i.pinimg.com/736x/c1/e9/2c/c1e92cac8bb1fd78b15cf8bb1c7430ac.jpg",
"https://i.pinimg.com/736x/65/38/98/653898caaf055ed04afb6f62b9109c37.jpg",
"https://i.pinimg.com/736x/42/90/e9/4290e9d0a4533ee97ff2bc333b02c504.jpg",
"https://i.pinimg.com/736x/64/d6/9e/64d69efbd8798778cbaa78186cce80d6.jpg",
"https://i.pinimg.com/736x/8b/99/ac/8b99ac37e9f54da930a108d80c422cf5.jpg",
"https://i.pinimg.com/736x/d6/cd/89/d6cd890bbec1bb716653dde8073ad9f2.jpg",
"https://i.pinimg.com/736x/9e/11/fc/9e11fc4af65ac1de828434dc187b01d8.jpg",
"https://i.pinimg.com/736x/25/2f/ea/252fea6a539c5ac1608d6b45dd7bca3d.jpg",
"https://i.pinimg.com/736x/e7/ae/53/e7ae531186f7a024b01e098c2ded0210.jpg",
"https://i.pinimg.com/736x/8d/05/0e/8d050ed29feb699c66a173b98fbbf72f.jpg",
"https://i.pinimg.com/736x/cc/86/35/cc86356d881a58d6d27a2fe57e4d03a2.jpg",
"https://i.pinimg.com/736x/b7/57/67/b75767b54b3beb538f9fcfc9dc85c0ba.jpg",
"https://i.pinimg.com/736x/de/ff/4d/deff4d90596eebcef28653c6b4749859.jpg",
"https://i.pinimg.com/736x/21/2a/f7/212af7afcec5dc42c966e3b7cbf06d08.jpg",
"https://i.pinimg.com/736x/e5/16/77/e516775cca3f2169f8ef4836f1444578.jpg",
"https://i.pinimg.com/736x/7f/de/6e/7fde6e00908b074578af8b9d3f305b82.jpg",
"https://i.pinimg.com/736x/ac/78/eb/ac78eb2d5b4ff829d6d721a134323b74.jpg",
"https://i.pinimg.com/736x/4a/3a/cb/4a3acb923546451a6157f931282d0171.jpg",
"https://i.pinimg.com/736x/54/90/7f/54907f435a8cc10f8867185371ec6e5c.jpg",
"https://i.pinimg.com/736x/5e/1c/af/5e1caf94a675e43e6f55d08842a03c8a.jpg",
"https://i.pinimg.com/736x/e3/a2/b2/e3a2b2f2ff8fd2b548bbe3124abd2ca8.jpg",
"https://i.pinimg.com/736x/0f/f4/9c/0ff49cfdbf5d99bb94b09ce6bdeaf82f.jpg",
"https://i.pinimg.com/736x/40/27/1d/40271df850afc3e1022498c4116eaf64.jpg",
"https://i.pinimg.com/736x/89/8b/ce/898bcef0bea3ad9226e9ee41aa9e4127.jpg",
"https://i.pinimg.com/736x/78/f8/d1/78f8d1ede9374da84e6da0c85976ab50.jpg",
"https://i.pinimg.com/736x/4c/62/f9/4c62f9db7dea420084413f9b6ef44620.jpg",
"https://i.pinimg.com/736x/07/c1/f6/07c1f6867b39f969905bc2c1a44e88db.jpg",
"https://i.pinimg.com/736x/8e/14/d2/8e14d23d870ab5f91b198818a269de42.jpg",
"https://i.pinimg.com/736x/4d/8f/1a/4d8f1a47fe2bd520244161e3f4c64ad0.jpg",
"https://i.pinimg.com/736x/cb/e6/da/cbe6daf57672bdc9717a8a6c80ed1f00.jpg",
"https://i.pinimg.com/736x/75/a2/01/75a2015bbefaa4868a047aa03b0268a1.jpg",
"https://i.pinimg.com/736x/3e/99/16/3e99166fd30020e1b2a8c84b357ce74f.jpg",
"https://i.pinimg.com/736x/20/7f/b4/207fb4b524a702fe2bb7a2b049c8d436.jpg",
"https://i.pinimg.com/736x/4b/75/d1/4b75d134bfc0257012664d7e56f45b31.jpg",
"https://i.pinimg.com/736x/e0/b1/bf/e0b1bf6a7f4bbaca9cbca676af1bbf8f.jpg",
"https://i.pinimg.com/736x/8a/b7/c0/8ab7c07cdc16da8b0f7d536b2f480b7a.jpg",
"https://i.pinimg.com/736x/ce/dc/76/cedc76f7855b38e0e55dad51aadb9455.jpg",
"https://i.pinimg.com/736x/40/a5/d8/40a5d84ec89cb765529125946285c726.jpg",
"https://i.pinimg.com/736x/c5/04/f5/c504f5336fc195bb209c07359dd5090a.jpg",
"https://i.pinimg.com/736x/0d/99/d3/0d99d3c355baa88b5a947fbeaeac4bdb.jpg",
"https://i.pinimg.com/736x/f6/27/d3/f627d39d998982d417702704c5a4d7ab.jpg",
"https://i.pinimg.com/736x/e4/cc/af/e4ccafacef4833095cef70dd2cf54919.jpg",
"https://i.pinimg.com/736x/0f/33/d1/0f33d126827ac9945fbe8302b76e1e63.jpg",
"https://i.pinimg.com/736x/60/e9/01/60e9013b53da61d3585b843c9bb40e49.jpg",
"https://i.pinimg.com/736x/78/c8/84/78c88491d8ad97e93e4d878800e0b80a.jpg",
"https://i.pinimg.com/736x/cd/6a/c1/cd6ac14b196ec9f066403c56d219d516.jpg",
"https://i.pinimg.com/736x/84/6c/08/846c0885add9be66a0e9e6511c71b29a.jpg",
"https://i.pinimg.com/736x/0a/58/36/0a5836c5a0cc32d001ca9c6bb42b1288.jpg",
"https://i.pinimg.com/736x/30/42/ca/3042cacf0c53f37fdfa5b6bb0fd7a245.jpg",
"https://i.pinimg.com/736x/b5/40/85/b54085b838ade9cad5480b50d2c3750c.jpg",
"https://i.pinimg.com/736x/42/85/19/4285199e0238a338dd11fa48d62cbe7e.jpg",
"https://i.pinimg.com/736x/55/ed/5d/55ed5d3086335fee34c93b13ee168b31.jpg",
"https://i.pinimg.com/736x/a7/97/aa/a797aa24e9589d4e2a8c93ccf95cb3c3.jpg",
"https://i.pinimg.com/736x/0d/9a/3c/0d9a3c08602b0094c4f0ee859acb08ee.jpg",
"https://i.pinimg.com/736x/3c/4b/1f/3c4b1ff2f374bab776df3b849f38a9e3.jpg",
"https://i.pinimg.com/736x/be/bc/73/bebc73470144e2f1eb4230af1e45cace.jpg",
"https://i.pinimg.com/736x/96/e7/e1/96e7e1f705acc629f4f62a48797b4349.jpg",
"https://i.pinimg.com/736x/7f/1f/a7/7f1fa7e2f48958865bb1e37585cf251b.jpg",
"https://i.pinimg.com/736x/70/a6/3b/70a63b274a689a16657acf607776d69e.jpg",
"https://i.pinimg.com/736x/ab/e9/a5/abe9a5aee5f1b3aa3ab8f3851ad6d52a.jpg",
"https://i.pinimg.com/736x/ef/df/45/efdf4532a3c73887ed8d7a0cd31d5c2c.jpg",
"https://i.pinimg.com/736x/11/f8/22/11f82209bfd1be2a8b6e158590e36062.jpg",
"https://i.pinimg.com/736x/b4/fe/c8/b4fec824d6c2018016e409ac5116533d.jpg",
"https://i.pinimg.com/736x/c8/fd/f9/c8fdf94cbb2c74bd98e6a473c9492f77.jpg",
"https://i.pinimg.com/736x/5b/fe/eb/5bfeebf708762431b5669a8c7d60cb82.jpg",
"https://i.pinimg.com/736x/6d/f5/bb/6df5bb133eae5d55d9d4d18efa961b38.jpg",
"https://i.pinimg.com/736x/1d/3c/96/1d3c9623e0c257ef3808ab68eba06613.jpg",
"https://i.pinimg.com/736x/88/54/50/885450ad70e909dc39c5d07c3812cc58.jpg",
"https://i.pinimg.com/736x/8d/85/ac/8d85ac21b8809d10f305726f927158aa.jpg",
"https://i.pinimg.com/736x/ce/ed/cf/ceedcf54ffb23db995efeffd4897b31f.jpg",
"https://i.pinimg.com/736x/82/fe/d2/82fed2f5034c24124234af67cd4e4dc0.jpg",
"https://i.pinimg.com/736x/0c/17/eb/0c17eb48d353d5eb8c17c3e63889b572.jpg",
"https://i.pinimg.com/736x/79/5e/80/795e8004914281f0973ad3e5583a2404.jpg",
"https://i.pinimg.com/736x/bb/a3/25/bba3251dcc41fbf71ff255bf370db50c.jpg",
"https://i.pinimg.com/736x/96/0f/f4/960ff423249216cb0d595093ecca51ff.jpg",
"https://i.pinimg.com/736x/b1/25/87/b12587f0ac6a1410ae699d594c20dffa.jpg",
"https://i.pinimg.com/736x/5d/6c/5d/5d6c5ddb89b49fb5f9077d12082a1a4f.jpg",
"https://i.pinimg.com/736x/ca/bc/a7/cabca7a7416387c9f004674b2e6aaf8d.jpg",
"https://i.pinimg.com/736x/46/7e/b1/467eb10df85ea6ec20ea844cb37849a3.jpg",
"https://i.pinimg.com/736x/65/2c/bb/652cbb6b725b0bcb94a7cf0817183e4c.jpg",
"https://i.pinimg.com/736x/b8/06/4e/b8064e161961e360874182405690ab1a.jpg",
"https://i.pinimg.com/736x/98/e6/3f/98e63f3882d55dc8b4e9ae90943d23aa.jpg",
"https://i.pinimg.com/736x/9a/56/f3/9a56f3d3ec9766c060b7a39583f1b8d5.jpg",
"https://i.pinimg.com/736x/fa/77/f8/fa77f83fec6fc0c265066ac2bc1df329.jpg",
"https://i.pinimg.com/736x/b1/99/71/b19971f60a25e04b05aeb7dc8c2c34f2.jpg",
"https://i.pinimg.com/736x/2e/02/e0/2e02e0d0db1ad3fbc78b63068964d1f5--cellphone-wallpapers-wallpapers-ipad.jpg",
"https://i.pinimg.com/736x/15/50/98/155098c4b2c92320ef2c8d3ab8a77244.jpg",
"https://i.pinimg.com/736x/04/32/5b/04325b895ee218e8114cb7ac35c3add1.jpg",
"https://i.pinimg.com/736x/68/02/c6/6802c6a0a6905f8347bd3da194efdad5--my-sassy-girl-jun-ji-hyun.jpg",
"https://i.pinimg.com/736x/cf/e8/d9/cfe8d95904e1128717a75a226bd15acb.jpg",
"https://i.pinimg.com/736x/b7/07/41/b70741550cc980fd0210913e42dc3434.jpg",
"https://i.pinimg.com/736x/6a/81/fe/6a81fe88c21b9cae030f957836316ac4.jpg",
"https://i.pinimg.com/736x/b2/2b/ed/b22bedb00316b2bf91722bdd763d6722.jpg",
"https://i.pinimg.com/736x/97/fa/ff/97faff68e9c4d326cb1286ee95b6e3c8.jpg",
"https://i.pinimg.com/736x/3d/44/44/3d44442425899e5b65c27388fbedacce.jpg",
"https://i.pinimg.com/736x/48/6e/70/486e7090a18580cee6a7ab9a6deaa5a2.jpg",
"https://i.pinimg.com/736x/ab/64/c2/ab64c2a7ef1b0e403fb938fe004b8e41.jpg",
"https://i.pinimg.com/736x/f3/c0/74/f3c074a70116894ce7075e7a5d9ad85d.jpg",
"https://i.pinimg.com/736x/65/2a/c8/652ac881d64069d8112fd583fb035bac.jpg",
"https://i.pinimg.com/736x/36/67/f7/3667f7a02dec2495b56ce1ad3c29badf.jpg",
"https://i.pinimg.com/736x/50/39/8f/50398f622f79412be2726b08d5249e64.jpg",
"https://i.pinimg.com/736x/f8/c6/5c/f8c65c7ddb2c8cfcf6201548f07ece3c.jpg",
"https://i.pinimg.com/736x/57/1a/b6/571ab6a3d4c264f7e01fed202a4c6d5c.jpg",
"https://i.pinimg.com/736x/60/5d/21/605d21310150f3385ee4639d72409e3d.jpg",
"https://i.pinimg.com/736x/c8/e2/ca/c8e2ca549f53c6af789f32b5eaa300b2.jpg",
"https://i.pinimg.com/736x/64/6a/20/646a203446fab06f096a0b9492cfee15.jpg",
"https://i.pinimg.com/736x/27/0b/90/270b9055cff4483ad57978ffe90f62b5.jpg",
"https://i.pinimg.com/736x/bd/e4/f6/bde4f6ec66daa536307de7eee4740d8e.jpg",
"https://i.pinimg.com/736x/79/67/b0/7967b0e0d476bb8ed0cf47c25f9178ff.jpg",
"https://i.pinimg.com/736x/2e/8a/b5/2e8ab5e35265823f9b432346ab6249c0.jpg",
"https://i.pinimg.com/736x/e5/bd/ae/e5bdae260d4ff1e775c21064a458ca6f.jpg",
"https://i.pinimg.com/736x/a6/96/19/a696191a51766caafd0ed2f6c72001bb.jpg",
"https://i.pinimg.com/736x/9f/29/92/9f29927d8c74f5be85405f9e88742e0d.jpg",
"https://i.pinimg.com/736x/fb/72/c4/fb72c467a2e5ebd8e4f72e1aeca9492b.jpg",
"https://i.pinimg.com/736x/74/f2/c0/74f2c03262f2746adb0db78b74f0430c.jpg",
"https://i.pinimg.com/736x/9d/0a/fe/9d0afe2aed2286df865661c1f94ab275.jpg",
"https://i.pinimg.com/736x/62/06/9e/62069eb20a2e4d725fd46fab8c688ae4.jpg",
"https://i.pinimg.com/736x/62/c4/c3/62c4c325a12ab5f1f9bf3de7067312ee.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/sgYy39Yy/1.jpg",
"https://i.postimg.cc/k5wmbJYp/10.jpg",
"https://i.postimg.cc/XJJ0KRT7/11.jpg",
"https://i.postimg.cc/PfCCT9Pj/12.jpg",
"https://i.postimg.cc/GpbRt8KD/13.jpg",
"https://i.postimg.cc/gkRr6hVt/14.jpg",
"https://i.postimg.cc/rsRX3SVB/15.jpg",
"https://i.postimg.cc/52S0sMkw/16.jpg",
"https://i.postimg.cc/tTY4RnR5/17.jpg",
"https://i.postimg.cc/4d7XRCw2/18.jpg",
"https://i.postimg.cc/k55nwRSm/19.jpg",
"https://i.postimg.cc/QCcsVp2p/2.jpg",
"https://i.postimg.cc/zGz5XH0g/20.jpg",
"https://i.postimg.cc/y8LKJ6br/21.jpg",
"https://i.postimg.cc/WbjcXJRH/22.jpg",
"https://i.postimg.cc/m2wfq2B2/23.jpg",
"https://i.postimg.cc/MGghRnbt/24.jpg",
"https://i.postimg.cc/1t6bKyvS/25.jpg",
"https://i.postimg.cc/fyNp21P9/26.jpg",
"https://i.postimg.cc/J05g9Pwd/27.jpg",
"https://i.postimg.cc/m2TKQfCx/28.jpg",
"https://i.postimg.cc/MKtN5Pmn/29.jpg",
"https://i.postimg.cc/PxGRJBTR/3.jpg",
"https://i.postimg.cc/cHQ5nXJ4/30.jpg",
"https://i.postimg.cc/bY9BYCMm/31.jpg",
"https://i.postimg.cc/QdH4bXMz/32.jpg",
"https://i.postimg.cc/Rhgd78x9/33.jpg",
"https://i.postimg.cc/sD2wjV52/34.jpg",
"https://i.postimg.cc/pXV1mQMR/35.jpg",
"https://i.postimg.cc/sfmTCBQ8/36.jpg",
"https://i.postimg.cc/ZRcxmgR3/37.jpg",
"https://i.postimg.cc/mkgNgwzn/38.jpg",
"https://i.postimg.cc/pXyJNsth/4.jpg",
"https://i.postimg.cc/13q0X4Xy/5.jpg",
"https://i.postimg.cc/DZBLHXjP/7.jpg",
"https://i.postimg.cc/RhYfVzz3/8.jpg",
"https://i.postimg.cc/TYZmzG9F/9.jpg",
"https://g.top4top.io/p_1962pxls61.jpg",
"https://f.top4top.io/p_1962nx4b11.jpg",
"https://e.top4top.io/p_1962jhb921.jpg",
"https://c.top4top.io/p_1962bzui01.jpg",
"https://d.top4top.io/p_19628w4p81.jpg",
"https://b.top4top.io/p_19627hhbn1.jpg",
"https://a.top4top.io/p_1962u4xmj1.jpg",
"https://l.top4top.io/p_1962p29ex1.jpg",
"https://j.top4top.io/p_1962wjwxm1.jpg",
"https://d.top4top.io/p_1962j86vg1.jpg",
"https://c.top4top.io/p_1962isenn1.jpg",
"https://h.top4top.io/p_1962ad5ta1.jpg",
"https://b.top4top.io/p_1962bu9fo1.jpg",
"https://e.top4top.io/p_1962qbxvz1.jpg",
"https://g.top4top.io/p_19620eryq1.jpg",
"https://a.top4top.io/p_19629nnrd1.jpg",
"https://i.top4top.io/p_1962jpnks1.jpg",
"https://f.top4top.io/p_1962acmi41.jpg",
"https://i.top4top.io/p_1962ch8kf1.jpg",
"https://j.top4top.io/p_19620uhcl1.jpg",
"https://g.top4top.io/p_1962i4c901.jpg",
"https://f.top4top.io/p_1962ia36a1.jpg",
"https://e.top4top.io/p_1962hkubw1.jpg",
"https://d.top4top.io/p_1962jox5e1.jpg",
"https://b.top4top.io/p_19625de5c1.jpg",
"https://c.top4top.io/p_1962u8w7s1.jpg",
"https://a.top4top.io/p_1962pp58e1.jpg",
"https://k.top4top.io/p_19624ra1i1.jpg",
"https://e.top4top.io/p_1962b5dmv1.jpg",
"https://d.top4top.io/p_1962dh0df1.jpg",
"https://c.top4top.io/p_196242bxr1.jpg",
"https://a.top4top.io/p_1962wrlrh1.jpg",
"https://l.top4top.io/p_1962ghw031.jpg",
"https://i.top4top.io/p_1962ibxoe1.jpg",
"https://b.top4top.io/p_1962gmhco1.jpg",
"https://k.top4top.io/p_19627t5d41.jpg",
"https://j.top4top.io/p_1962m7uwg1.jpg",
"https://h.top4top.io/p_1962ks8m41.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg",
"https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg",
"https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg",
"https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg",
"https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg",
"https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg",
"https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg",
"https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg",
"https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg",
"https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg",
"https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg",
"https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg",
"https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg",
"https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg",
"https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg",
"https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg",
"https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg",
"https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg",
"https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg",
"https://i.pinimg.com/736x/30/93/0b/30930baa10607143bec6356a76280a8a.jpg",
"https://i.pinimg.com/736x/90/da/29/90da2901c59ef7aaf7c3c8cee0503f64.jpg",
"https://i.pinimg.com/736x/93/fd/86/93fd86c7c86c13c7b9703f3e30a11e4d.jpg",
"https://i.pinimg.com/736x/78/70/27/7870273cd16ed5476217df2b22286f83.jpg",
"https://i.pinimg.com/736x/78/52/90/785290609e82657a0959217c759c3d43.jpg",
"https://i.pinimg.com/736x/e8/b4/f5/e8b4f5dc252ec6b3ecb55662d4403bdf.jpg",
"https://i.pinimg.com/736x/62/da/23/62da234d941080696428e6d4deec6d73.jpg",
"https://i.pinimg.com/736x/7e/84/2c/7e842c728cc55cbb141dfa392f95763d.jpg",
"https://i.pinimg.com/736x/b8/de/15/b8de15522d308399d176cdbf912d87c4.jpg",
"https://i.pinimg.com/736x/e7/c5/bd/e7c5bd8a58aed3268582dfb90140111f.jpg",
"https://i.pinimg.com/736x/3f/15/a6/3f15a6145a63e34825ca6a2947931ff7.jpg",
"https://i.pinimg.com/736x/df/0a/43/df0a43fc8530562d16dc8e4840d3f714.jpg",
"https://i.pinimg.com/736x/fc/3f/e1/fc3fe174368601df6e3160d9c027a718.jpg",
"https://i.pinimg.com/736x/8c/f9/50/8cf950b340fde28de243d89b92f84b90.jpg",
"https://i.pinimg.com/736x/21/99/d1/2199d11e7408948e24cfd792c60caa9b.jpg",
"https://i.pinimg.com/736x/08/11/e2/0811e2fb69d43ed0dd831a9ef8d424ff.jpg",
"https://i.pinimg.com/736x/fb/89/8a/fb898adcd3090d2e852af1b2a5a9544d.jpg",
"https://i.pinimg.com/736x/db/0d/a5/db0da5d5fb6b44d7ceed7f874d85f59b.jpg",
"https://i.pinimg.com/736x/f8/97/ad/f897ade4cfef5f85b88cbf8697d0417e.jpg",
"https://i.pinimg.com/736x/98/6f/3b/986f3b75982ffd22a3af088b701ccb13.jpg",
"https://i.pinimg.com/736x/c1/bd/47/c1bd4702bd709e7b3307d22c297a4754.jpg",
"https://i.pinimg.com/736x/20/de/73/20de731550f239270016de3603d8b788.jpg",
"https://i.pinimg.com/736x/42/62/55/4262552672c5c1f2bd375ad2ab403042.jpg",
"https://i.pinimg.com/736x/18/44/a6/1844a6800c6f63af674521bf9886216c--ulzzang-korea-korean-ulzzang.jpg",
"https://i.pinimg.com/736x/71/f9/1a/71f91a6e056d47e03171d0f1f594edd1.jpg",
"https://i.pinimg.com/736x/bc/87/4e/bc874e3a7672d1b4bf2b1cadcbaefc70.jpg",
"https://i.pinimg.com/736x/c1/0d/dc/c10ddc95d187b46557c7149ef2f0ddfa.jpg",
"https://i.pinimg.com/736x/9b/92/fa/9b92faced78923340dfcce5c513e3b28.jpg",
"https://i.pinimg.com/736x/47/00/8a/47008ae35b3c4d0ceaf6f3e2e4f33c69.jpg",
"https://i.pinimg.com/736x/0d/bc/18/0dbc18f2edf2b70ccce348b1082c98f7.jpg",
"https://i.pinimg.com/736x/82/5d/8d/825d8d57f8c273f4b3fe3cdd6345b6d5.jpg",
"https://i.pinimg.com/736x/88/24/74/8824740a20f7dc839b7ed4454b4847c3.jpg",
"https://i.pinimg.com/736x/d7/60/a2/d760a2aa6c8306ed1652233d566f2d4d.jpg",
"https://i.pinimg.com/736x/02/5d/7b/025d7b46ede75db2c4367c686133f41e.jpg",
"https://i.pinimg.com/736x/14/5b/d8/145bd8692c7a96de5882044a0307eae0.jpg",
"https://i.pinimg.com/736x/c0/1a/f5/c01af5fcf445b684c9cf3fb9ed122c75.jpg",
"https://i.pinimg.com/736x/d6/f2/dd/d6f2ddaf9b678cbb57e44ac31c347400.jpg",
"https://i.pinimg.com/736x/cc/ef/96/ccef9671e362deb57e1d60c66ee5aed9.jpg",
"https://i.pinimg.com/736x/f0/ce/67/f0ce677882212c64ef2e2a1e62e0ba9b.jpg",
"https://i.pinimg.com/736x/5f/02/82/5f0282313a7370c9afc902c74b3a46d3.jpg",
"https://i.pinimg.com/736x/6c/5e/c3/6c5ec3f0a3eaa9622705d579a2866b26.jpg",
"https://i.pinimg.com/736x/aa/11/84/aa1184073f64ff15c5e42d02d4b10d4d.jpg",
"https://i.pinimg.com/736x/9c/15/d7/9c15d7e9e8119f45f65b85a7bb4245d9.jpg",
"https://i.pinimg.com/736x/83/a5/27/83a52761898778a84bb2339c8b8a802b.jpg",
"https://i.pinimg.com/736x/2e/c3/da/2ec3da82547e02434efb0bbc26fe39c2.jpg",
"https://i.pinimg.com/736x/06/1d/9e/061d9e540761238f4465fec66cc1da2e.jpg",
"https://i.pinimg.com/736x/a7/d9/1d/a7d91dae6c7ead221f269c8a9a6a35f5.jpg",
"https://i.pinimg.com/736x/5c/72/eb/5c72ebf949634726fe26151263542ea3.jpg",
"https://i.pinimg.com/736x/db/66/cb/db66cb7b23d581d860276e762855d53b.jpg",
"https://i.pinimg.com/736x/2e/02/a9/2e02a92e9aeb6c52797d97de16883366.jpg",
"https://i.pinimg.com/736x/2c/06/33/2c06332146f33e4717d47cbac54f2cb1.jpg",
"https://i.pinimg.com/736x/7c/42/88/7c428863a7bef67f2e13db0a2d2e9e36.jpg",
"https://i.pinimg.com/736x/da/4f/d0/da4fd04c5302d2d0594bda3c71d3af80.jpg",
"https://i.pinimg.com/736x/26/1b/30/261b30ce67142f2fb201e0236b071180.jpg",
"https://i.pinimg.com/736x/8e/e8/28/8ee8282f7b1e2382994cf616d3459880.jpg",
"https://i.pinimg.com/736x/3e/24/b1/3e24b1cbcfe14e754063d280d8c177a9.jpg",
"https://i.pinimg.com/736x/03/c9/87/03c98776cc866ab7d19578fd324ca68e.jpg",
"https://i.pinimg.com/736x/c3/05/b3/c305b30c774abd00e4a201d4a5757ad6.jpg",
"https://i.pinimg.com/736x/aa/60/a5/aa60a56d68c373768af4ffb453c8f589.jpg",
"https://i.pinimg.com/736x/63/52/09/635209cae217e0ad10a5c85f8aafa818.jpg",
"https://i.pinimg.com/736x/42/2e/fe/422efea0c919cfb97aa0132ad568d743.jpg",
"https://i.pinimg.com/736x/f2/e9/b9/f2e9b93a9600dd1d54968fa6f41185b4.jpg",
"https://i.pinimg.com/736x/70/68/0f/70680fd7ce268d7be2f71dd72426937e.jpg",
"https://i.pinimg.com/736x/fd/e9/7b/fde97b8da68b5d39214595945eb6537f.jpg",
"https://i.pinimg.com/736x/62/5a/dd/625add34ff93287ab3c820eec1a03faa.jpg",
"https://i.pinimg.com/736x/fe/0b/08/fe0b0890e793bf30de01713a19f16a9f.jpg",
"https://i.pinimg.com/736x/ce/1e/62/ce1e6287c1f2f4d78457b8861fca98e1.jpg",
"https://i.pinimg.com/736x/f5/fb/ed/f5fbed717b036633b012aac055d340ed.jpg",
"https://i.pinimg.com/736x/a4/be/07/a4be07e455c83f29f45316d3db89d75e.jpg",
"https://i.pinimg.com/736x/a4/4d/00/a44d00cdffdb49f5b1e9347c98fd7210.jpg",
"https://i.pinimg.com/736x/13/16/c6/1316c6635095b9cb1f02b1a29486888c.jpg",
"https://i.pinimg.com/736x/65/bb/ce/65bbceb6542ab4b2b61df15fb9c3b47f.jpg",
"https://i.pinimg.com/736x/e3/c0/61/e3c06153388e1ebd2c1f4a75cf49afe0.jpg",
"https://i.pinimg.com/736x/b5/2c/4c/b52c4c071848911d4689e6caa62f9142.jpg",
"https://i.pinimg.com/736x/23/92/a6/2392a62dbb41b702c4fccde0a1187930.jpg",
"https://i.pinimg.com/736x/2e/ce/a9/2ecea934f6f0aed69960e1085449a8ab.jpg",
"https://i.pinimg.com/736x/e8/7f/e3/e87fe32c9e87259a5355252f0dcaa659.jpg",
"https://i.pinimg.com/736x/d9/ba/f7/d9baf733f96fa35bacf5b5a35237ef17.jpg",
"https://i.pinimg.com/736x/3a/81/8a/3a818a6e8327e1a3d45368ea74e4b3d1.jpg",
"https://i.pinimg.com/736x/e9/cd/7f/e9cd7f47d242dc339c590710d9524b32.jpg",
"https://i.pinimg.com/736x/76/96/ca/7696cabd8b612934d374afe2ee47c04d.jpg",
"https://i.pinimg.com/736x/6d/a4/e8/6da4e8bb9e5e8430e549bb92c66e6150.jpg",
"https://i.pinimg.com/736x/f5/97/27/f5972776719d91f68e1e6487dfe87ac2.jpg",
"https://i.pinimg.com/736x/b4/3f/59/b43f59f946fc5a022233e0a637318a97.jpg",
"https://i.pinimg.com/736x/a5/14/bf/a514bf43098e1e8385d13ad30d325cb0.jpg",
"https://i.pinimg.com/736x/a0/c9/05/a0c905d64aa6d9f32a6dcfc73c3bb48b.jpg",
"https://i.pinimg.com/736x/3e/54/c6/3e54c6dbcde596cebd6e0c735c36c742.jpg",
"https://i.pinimg.com/736x/0a/29/50/0a2950b9bf6cb7fe970b8809f1f77b24.jpg",
"https://i.pinimg.com/736x/7f/c2/28/7fc22897dc1dc13ad874fa08d2fc6315.jpg",
"https://i.pinimg.com/736x/fe/7f/fc/fe7ffcccb04ee43eb5323ea6e28f4ba8.jpg",
"https://i.pinimg.com/736x/6d/33/2a/6d332a38528f361709a6eed52b1d5d89.jpg",
"https://i.pinimg.com/736x/7f/4f/fc/7f4ffc6768a8d47e3d35bedaba16d090.jpg",
"https://i.pinimg.com/736x/c8/0d/98/c80d98f03c0036ad7807f1f369af5a00.jpg",
"https://i.pinimg.com/736x/b3/1c/54/b31c543a85eec7e775c0e200f3c8f669.jpg",
"https://i.pinimg.com/736x/7c/50/1c/7c501c4481f81bce9ec5432ca02782fc.jpg",
"https://i.pinimg.com/736x/e0/52/45/e0524524dfd506c4c3de66ee62d3b57d.jpg",
"https://i.pinimg.com/736x/5e/22/68/5e226888cb84549790b8ef63a00c4942.jpg",
"https://i.pinimg.com/736x/a8/c1/c7/a8c1c715569e534d7239a1c3ea2ea86a.jpg",
"https://i.pinimg.com/736x/9f/9e/a1/9f9ea1509502a9377161bd80a69dc31f.jpg",
"https://i.pinimg.com/736x/4f/d7/96/4fd796621ab962ac48841acf97782d01.jpg",
"https://i.pinimg.com/736x/89/d4/4c/89d44c552b632c58e32dcfeea6348cf5.jpg",
"https://i.pinimg.com/736x/84/30/eb/8430ebcbde58a5d804a5a3aa6763291d.jpg",
"https://i.pinimg.com/736x/c1/39/76/c13976c1d5acc4d320df2a297deff7f6.jpg",
"https://i.pinimg.com/736x/02/c8/61/02c86114ca0468c8be568b42236fc033.jpg",
"https://i.pinimg.com/736x/97/ea/02/97ea02c9d1b88e9d2c164b02869bd126.jpg",
"https://i.pinimg.com/736x/9b/45/29/9b4529bac23e07931a374005ba2d7cb9.jpg",
"https://i.pinimg.com/736x/fa/a1/16/faa1165da75b28053ff676cb0456fef0.jpg",
"https://i.pinimg.com/736x/23/75/c1/2375c1c65e72e31cdd096c85e6af2735.jpg",
"https://i.pinimg.com/736x/50/12/4e/50124e7ab95d66986927aea47797ba84.jpg",
"https://i.pinimg.com/736x/e0/58/1d/e0581d38c35374518c63dcb6adb48bfa.jpg",
"https://i.pinimg.com/736x/dc/79/bb/dc79bbaccb348f8e63590440f094e0ee.jpg",
"https://i.pinimg.com/736x/84/7c/9b/847c9b47ee121158c45dec4733314efe.jpg",
"https://i.pinimg.com/736x/54/83/c1/5483c10e3240e18da8b0443f486aaf87--muslim-girls-abaya-fashion.jpg",
"https://i.pinimg.com/736x/6d/a5/37/6da5378e6271e5a7278bd04eb1a0273e.jpg",
"https://i.pinimg.com/736x/b6/e0/10/b6e010632416823e0ce338a970d10eb9--korean-street-fashion-summer-ulzzang-fashion-summer.jpg",
"https://i.pinimg.com/736x/1e/a3/72/1ea3722b6c6f0eb932358da6ad08e15e.jpg",
"https://i.pinimg.com/736x/18/27/d4/1827d4c92b4db9b0fef3d771f92b119b.jpg",
"https://i.pinimg.com/736x/83/c2/19/83c219e7a2d06bcda64bab9c3a7042d3.jpg",
"https://i.pinimg.com/736x/d3/13/1a/d3131adba01d4df1a1b86567e0d42d1a.jpg",
"https://i.pinimg.com/736x/db/12/0d/db120d58dc7b349282340c457776b4ae.jpg",
"https://i.pinimg.com/736x/a2/f4/18/a2f418be0e9bfa6b92d3ae174e846166.jpg",
"https://i.pinimg.com/736x/29/6c/81/296c81d704c772fbd4332edc97be2c0f.jpg",
"https://i.pinimg.com/736x/56/31/21/563121db37de8f2e091ab3b3826cd6d2.jpg",
"https://i.pinimg.com/736x/86/41/df/8641df492bfb63b5974e70b863267baa.jpg",
"https://i.pinimg.com/736x/59/cb/cf/59cbcf435d6df207e7ddc89cc69553b2.jpg",
"https://i.pinimg.com/736x/66/34/23/6634233d0f4d7dd23eb2985882139004.jpg",
"https://i.pinimg.com/736x/75/7e/58/757e58566697863a05c814f8069fc1c2.jpg",
"https://i.pinimg.com/736x/a5/24/ff/a524ffb4d6a9c5567ecd2a65c5d2b3a8.jpg",
"https://i.pinimg.com/736x/bf/92/ea/bf92eaff1b51d0974740cdb34c151a4c.jpg",
"https://i.pinimg.com/736x/5d/9c/78/5d9c787cb469dfb0565165af8d660b5f.jpg",
"https://i.pinimg.com/736x/e2/f1/ed/e2f1ed1004d5cb6d2bff59ac9da27094.jpg",
"https://i.pinimg.com/736x/ae/b1/39/aeb13917eb18ae7259390ad3b18c66b9.jpg",
"https://i.pinimg.com/736x/77/46/a7/7746a7f133cde842f444c5e8e5e4cf60.jpg",
"https://i.pinimg.com/736x/55/99/ae/5599ae1a0d70811122a0ce7a274f8696.jpg",
"https://i.pinimg.com/736x/45/d6/3b/45d63b77a4756d9a456f31a95d3be3a8.jpg",
"https://i.pinimg.com/736x/93/0f/99/930f998f4e2e96092bb2a797b7d3f5b6.jpg",
"https://i.pinimg.com/736x/f9/47/fc/f947fc6ea4503c6e69b81b9af7223864.jpg",
"https://i.pinimg.com/736x/66/a2/1f/66a21f4e621f0baae799371f2b1ee9c1.jpg",
"https://i.pinimg.com/736x/4b/86/77/4b8677149296fb75b0eca577b2c2b9cf.jpg",
"https://i.pinimg.com/736x/27/7c/c7/277cc778d89f71923b65cbf0ae147ac8.jpg",
"https://i.pinimg.com/736x/2f/1c/21/2f1c212f469aae1ff161e6338b1922c4.jpg",
"https://i.pinimg.com/736x/a2/71/71/a27171487ab8a025c8625499f8524020.jpg",
"https://i.pinimg.com/736x/47/ba/89/47ba89128874c8ea97a20bfab0da6944.jpg",
"https://i.pinimg.com/736x/29/c5/a4/29c5a496e11f09457b4d7ccf928cb650.jpg",
"https://i.pinimg.com/736x/b1/0f/8f/b10f8fa1ab8f5ee49ed27a59f34da0d2.jpg",
"https://i.pinimg.com/736x/c7/fb/3f/c7fb3f45c1aa6989ce715b2ad16bd282.jpg",
"https://i.pinimg.com/736x/f3/fa/b8/f3fab8cc2c96abf9736d01081f97def3.jpg",
"https://i.pinimg.com/736x/ab/03/40/ab0340a6f30bff7b4ed6cea51a796137.jpg",
"https://i.pinimg.com/736x/4d/95/26/4d952649960c5e39805a8319cddb745e.jpg",
"https://i.pinimg.com/736x/54/8c/2b/548c2b7dad62bc71861ab2fdc3e7cfca.jpg",
"https://i.pinimg.com/736x/34/ce/d5/34ced574c44287553d9dd2efddd0a283.jpg",
"https://i.pinimg.com/736x/45/72/1b/45721b5c502f9ec89c81cd3413580bd8.jpg",
"https://i.pinimg.com/736x/a4/d6/a0/a4d6a0d96400ff5703c484bfef5baa15.jpg",
"https://i.pinimg.com/736x/97/44/d8/9744d8cdfc383d78595696515a0b1151.jpg",
"https://i.pinimg.com/736x/5c/96/90/5c9690d1bbec45f87da83eb456b2adff.jpg",
"https://i.pinimg.com/736x/f9/d1/8f/f9d18fa7c5a844a033ad35fd26660045.jpg",
"https://i.pinimg.com/736x/06/15/3e/06153e91ada55b060107b1a49f15bb1f.jpg",
"https://i.pinimg.com/736x/82/43/34/82433456c014c95ed29617ccb1dbcb22.jpg",
"https://i.pinimg.com/736x/92/53/be/9253be6ece9413894dbf2703c8ebe79f--asian-makeup-korean-makeup.jpg",
"https://i.pinimg.com/736x/81/83/94/81839433c2a8a3c42306bfc4e301bd26.jpg",
"https://i.pinimg.com/736x/a5/f1/8c/a5f18ce15b8cfb9f36487c3a0c0f7058.jpg",
"https://i.pinimg.com/736x/2b/36/b6/2b36b6d8e369c71256132a3b9a4703c6.jpg",
"https://i.pinimg.com/736x/b1/be/cb/b1becbb8dc57a4569ecb8123a40ff5ef.jpg",
"https://i.pinimg.com/736x/18/d6/ed/18d6ed16b682c9a45cbb215b47bd4b7c.jpg",
"https://i.pinimg.com/736x/b6/43/9c/b6439c6e6d0229d113bee9da3db971e3.jpg",
"https://i.pinimg.com/736x/d9/eb/4e/d9eb4e2a6cc263c3f3ee66c36ca0e2ae.jpg",
"https://i.pinimg.com/736x/7b/b2/10/7bb210961a195b49768dedf123a065a2.jpg",
"https://i.pinimg.com/736x/b6/e9/33/b6e9337331b6b9ab4be8f4c91588936c.jpg",
"https://i.pinimg.com/736x/3b/3a/48/3b3a48c267885fd50cf9d59cc178c429.jpg",
"https://i.pinimg.com/736x/85/9c/24/859c247fce5c3ed41290ef942cc2b178.jpg",
"https://i.pinimg.com/736x/b4/f9/07/b4f9077c8a652eea54e168c0ff03315f.jpg",
"https://i.pinimg.com/736x/a9/35/cd/a935cdf467873e8e22794af172e0ffeb.jpg",
"https://i.pinimg.com/736x/e1/7f/51/e17f51e79d2a341875db51105995cb1b.jpg",
"https://i.pinimg.com/736x/2f/e4/32/2fe432f4aeb9d1903377967799a1ac90.jpg",
"https://i.pinimg.com/736x/fc/9c/24/fc9c24da39736b61cc64de682c56763f.jpg",
"https://i.pinimg.com/736x/f9/73/7a/f9737a51195e6d8ff9742887642652f7.jpg",
"https://i.pinimg.com/736x/38/bf/b5/38bfb590eac24d625637ffc69182aa25.jpg",
"https://i.pinimg.com/736x/78/56/1b/78561b362965e9cee110642292312b05.jpg",
"https://i.pinimg.com/736x/30/78/95/3078959e00b2461679525519809eefea.jpg",
"https://i.pinimg.com/736x/fe/d7/a8/fed7a8645997de9451238c3494287ebc.jpg",
"https://i.pinimg.com/736x/07/f8/4d/07f84d0a8f17118cbb5949bb9758e9aa.jpg",
"https://i.pinimg.com/736x/34/3c/45/343c450793b915ba18c7d9d2722cbf6f.jpg",
"https://i.pinimg.com/736x/65/b4/ab/65b4abe30676598edd2430403f726f27.jpg",
"https://i.pinimg.com/736x/85/e0/5c/85e05c49ca7ed096f0022bd440aaf087.jpg",
"https://i.pinimg.com/736x/fa/f5/20/faf5207a3cb2bfa4b947afbc2c2cfee4.jpg",
"https://i.pinimg.com/736x/49/ae/0e/49ae0e242b201057198c53ef29c3822e.jpg",
"https://i.pinimg.com/736x/34/6a/50/346a5013e5785a2523e989084b147f70.jpg",
"https://i.pinimg.com/736x/29/28/5f/29285f30f034ce2d1230533be6266dd4.jpg",
"https://i.pinimg.com/736x/66/5e/8b/665e8b9e61464346fa29d54844a18282.jpg",
"https://i.pinimg.com/736x/16/e3/af/16e3afd4c95621b338429369a685af10.jpg",
"https://i.pinimg.com/736x/61/b1/37/61b13777b2496b37ac90dc04208c1e77.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg",
"https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg",
"https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg",
"https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg",
"https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg",
"https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg",
"https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg",
"https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg",
"https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg",
"https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg",
"https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg",
"https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg",
"https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg",
"https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg",
"https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg",
"https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg",
"https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg",
"https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg",
"https://a.top4top.io/p_1962cau3w1.jpg",
"https://k.top4top.io/p_1962w2hyp1.jpg",
"https://j.top4top.io/p_1962ufc7p1.jpg",
"https://h.top4top.io/p_19629eev81.jpg",
"https://d.top4top.io/p_1962ahcw21.jpg",
"https://c.top4top.io/p_1962qiubc1.jpg",
"https://b.top4top.io/p_1962ck87p1.jpg",
"https://l.top4top.io/p_1962i85aq1.jpg",
"https://i.top4top.io/p_19629cg431.jpg",
"https://g.top4top.io/p_1962o5sp41.jpg",
"https://f.top4top.io/p_1962vn5rc1.jpg",
"https://e.top4top.io/p_1962nvj4g1.jpg",
"https://d.top4top.io/p_1962847na1.jpg",
"https://c.top4top.io/p_1962tt38s1.jpg",
"https://b.top4top.io/p_1962vpyp71.jpg",
"https://a.top4top.io/p_1962fyik51.jpg",
"https://k.top4top.io/p_1962q7ura1.jpg",
"https://l.top4top.io/p_19625eppj1.jpg",
"https://j.top4top.io/p_196252lk91.jpg",
"https://i.top4top.io/p_1962p9nlk1.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg",
"https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg",
"https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg",
"https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg",
"https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg",
"https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg",
"https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg",
"https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg",
"https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg",
"https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg",
"https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg",
"https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg",
"https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg",
"https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg",
"https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg",
"https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg",
"https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg",
"https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg",
"https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg",
"https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg",
"https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg",
"https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg",
"https://c.top4top.io/p_196240q3o1.jpg",
"https://e.top4top.io/p_1962v04461.jpg",
"https://d.top4top.io/p_1962lzpb31.jpg",
"https://a.top4top.io/p_19627bm3c1.jpg",
"https://b.top4top.io/p_19624pvv61.jpg",
"https://k.top4top.io/p_19625n89w1.jpg",
"https://e.top4top.io/p_1962qpsvb1.jpg",
"https://d.top4top.io/p_1962m09jb1.jpg",
"https://f.top4top.io/p_1962va89q1.jpg",
"https://g.top4top.io/p_1962d4cuh1.jpg",
"https://j.top4top.io/p_1962grit21.jpg",
"https://a.top4top.io/p_1962zgkj21.jpg",
"https://c.top4top.io/p_1962csdwa1.jpg",
"https://i.top4top.io/p_1962y8nl71.jpg",
"https://h.top4top.io/p_1962mt0wq1.jpg",
"https://f.top4top.io/p_1962p3bmk1.jpg",
"https://i.top4top.io/p_19622gld51.jpg",
"https://j.top4top.io/p_1962d0xml1.jpg",
"https://l.top4top.io/p_1962yyuuh1.jpg",
"https://c.top4top.io/p_1962c7n2o1.jpg",
"https://k.top4top.io/p_1962pac7k1.jpg",
"https://e.top4top.io/p_1962rcc7k1.jpg",
"https://d.top4top.io/p_19629ls3n1.jpg",
"https://h.top4top.io/p_1962caiz61.jpg",
"https://g.top4top.io/p_1962y8oif1.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})

// asupan
router.get('/asupan/cecan', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/asupan', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/asupan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/santuy', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/bocil', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

//downloader
router.get('/download/igstory', async (req, res, next) => {
var username = req.query.username
if (!username) return res.json(loghandler.notid)   
var apikey = req.query.apikey
if (!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
	igstory(username)
	.then(data => {
		if (!data ) return res.json(loghandler.notfound)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {  
			 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/igreels', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
	igdl(url)
	.then(data => {
		if (!data ) return res.json(loghandler.noturl)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {     
			 res.json(loghandler.error)	
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
        if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
        const result = await scr.savefrom(url)
             res.json({
                 result
             })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       let iglu = await scr.instagramdl(url).catch(async _ => await scr.instagramdlv2(url)).catch(async _ => await scr.instagramdlv3(url)).catch(async _ => await scr.instagramdlv4(url))
		var result = iglu;
		res.json({
			result
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        if(listkey.includes(apikey)){
       scr.pinterest(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
const { id, thumbnail, audio: _audio, title } = await scr.youtubedlv2(url)
try {
for (let i in _audio) {
audio = _audio[i]
let kin = await audio.download()
		res.json({
			id: id,
			thumbnail: thumbnail,
			title: title,
			size: audio.fileSize,
			download: kin
})
		}} catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/ytmp4', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       const { id, thumbnail, video: _video, title } = await scr.youtubedlv2(url)
try{
for (let i in _video) {
video = _video[i]
let kin = await video.download()
		res.json({
			id: id,
			thumbnail: thumbnail,
			title: title,
			size: video.fileSize,
			download: kin
		})
		}} catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/tiktod/no-watermark', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
if(listkey.includes(apikey)){
     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.error)
         })
         } else {
  res.json(loghandler.apikey)
}
})

router.get('/download/tiktod/watermark', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
if(listkey.includes(apikey)){
     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.error)
         })
         } else {
  res.json(loghandler.apikey)
}
})


// news
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'KAYZOKUN12',
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'KAYZOKUN12',
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'KAYZOKUN12',
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

// Text Pro
router.get('/textpro/pencil', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/glitch', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/blackpink', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/berry', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/neon', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})



router.get('/textpro/logobear', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/3dchristmas', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})       
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/thunder', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/3dboxtext', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})         
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/textpro/glitch2', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1) return res.json(loghandler.nottext1)   
	if (!text2) return res.json(loghandler.nottext2) 
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/glitchtiktok', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1) return res.json(loghandler.nottext1)
	if (!text2) return res.json(loghandler.nottext2)
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/video-game-classic', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1) return res.json(loghandler.nottext1)
	if (!text2) return res.json(loghandler.nottext2)
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/marvel-studios', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1) return res.json(loghandler.nottext1)
	if (!text2) return res.json(loghandler.nottext2)
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/ninja-logo', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1) return res.json(loghandler.nottext1)
	if (!text2) return res.json(loghandler.nottext2)
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/green-horror', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/magma', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/3d-neon-light', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/3d-orange-juice', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/chocolate-cake', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/textpro/strawberry', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


//photooxy
router.get('/photooxy/flaming', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/shadow-sky', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/metallic', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/pubg-mobile', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text || !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text & text2"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/romantic', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/smoke', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [text,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/burn-paper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text       
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/love-message', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/message-grass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/glitch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text || !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text & text2"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html", [text,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/double-heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/coffe-cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/love-text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/butterfly', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/carved-wood', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/photooxy/illuminated-metallic', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/photooxy/sweet-candy', async (req, res, next) => {
	var text = req.query.text
	var apikey = req.query.apikey
	if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})


// search api
router.get('/search/kisahnabi', async (req, res, next) => {
var apikey = req.query.apikey
var nabi = req.query.nabi
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!nabi) return res.json(loghandler.notnabi)
     Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/hadits', async (req, res, next) => {
var apikey = req.query.apikey,
kitab = req.query.kitab,
nomor = req.query.nomor            
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})
       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
})
} else {
res.json(loghandler.apikey)
}
})


router.get('/search/quran', async (req, res, next) => {
var apikey = req.query.apikey,
surah = req.query.surah,
ayat = req.query.ayat
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})
       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/search/google-image', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.googleImage(text).then(data => {
        var data = data;
             res.json({
             	status: 200,
             	data,
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.wallpaper(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/randomgambar/cyberspace', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/teknologi', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/muslim', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/programming', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/pegunungan', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/search/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.pinterest(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
   })
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ahegao', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/bdsm', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/blowjob', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cuckold', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
	res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cum', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/cum.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ero', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/ero.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/femdom', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/foot', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/foot.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/gifs', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/gifs.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/glasses', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentai', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/jahy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/manga', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/manga.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/masturbation', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/neko.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/neko2', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/neko2.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/panties', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/panties.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/pussy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/orgy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/tentacles', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/tentacles.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/thighs', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/yuri', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/zettai', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/data-rest/main/nsfw/zettai.json`))
        .then(response => response.json())
        .then((data) =>{ 
        var test = data;
        var result = test[Math.floor(Math.random() * test.length)];
             res.set({'Content-Type': 'image/png'})
	res.send(result)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/My-SQL-Results/master/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

//game
router.get('/game/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/susunkata', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/susunkata.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakbendera', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebakbendera.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakgame', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebakgame.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakkata', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebakkata.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebaklirik', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebaklirik.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebaklagu', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebaklagu.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakkimia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       let ra = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/tebakkimia.json')
	let ha = ra[Math.floor(Math.random() * ra.length)]
	res.json({
	status: true,
	creator: `${creator}`,
	result: ha
})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

// random gambar
router.get('/randomgambar/couplepp', async (req, res, next) => {
var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	let resultt = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/kopel.json')
	let random = resultt[Math.floor(Math.random() * resultt.length)]
	res.json({
	status: true,
	creator: `${creator}`,
		result: {
			male: random.male,
			female: random.female
		}
	})
.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/dadu', async (req, res, next) => {
var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	let dadu = await fetchJson('https://raw.githubusercontent.com/KAYZOKUN12/data-rest-api/main/dadu.json')
	let random = dadu[Math.floor(Math.random() * dadu.length)]
	var result = await getBuffer(random.result)
	res.set({'Content-Type': 'image/webp'})
	res.send(result)
} else {
  res.json(loghandler.apikey)
}
})


router.get('/randomgambar/coffee', async (req, res, next) => {
var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	var result = await getBuffer('https://coffee.alexflipnote.dev/random')
	res.set({'Content-Type': 'image/png'})
	res.send(result)
} else {
  res.json(loghandler.apikey)
}
})

router.get('/randomgambar/waifu', async (req, res, next) => {
	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
              fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
             .then(response => response.json())
             .then(async data => {
                  let result = data;
                  let buffer = await fetch(data.url)
                  res.type('png')
                  res.send(await buffer.buffer())
              })
           .catch(e => {
            	res.json(loghandler.error)
            })
            } else {
  res.json(loghandler.apikey)
}
        })
        router.get('/randomgambar/husbu', async (req, res, next) => {
        	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	        let waif = (await axios.get(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/husbu.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/tmp/waifu.png', data)
            await res.sendFile(__path +'/tmp/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/waifu.png')
            } else {
  res.json(loghandler.apikey)
}
        })
        router.get('/randomgambar/loli', async (req, res, next) => {
        	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	        let waif = (await axios.get(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/loli.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/tmp/waifu.png', data)
            await res.sendFile(__path +'/tmp/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/waifu.png')
            } else {
  res.json(loghandler.apikey)
}
        })
        router.get('/randomgambar/milf', async (req, res, next) => {
        	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	        let waif = (await axios.get(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/milf.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/tmp/waifu.png', data)
            await res.sendFile(__path +'/tmp/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/waifu.png')
            } else {
  res.json(loghandler.apikey)
}
        })
        router.get('/randomgambar/cosplay', async (req, res, next) => {
        	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	        let waif = (await axios.get(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/cosplay.json`)).data
            let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/tmp/waifu.png', data)
            await res.sendFile(__path +'/tmp/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/tmp/waifu.png')
            } else {
  res.json(loghandler.apikey)
}
        })

// stalker
router.get('/stalker/github-stalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var username = req.query.username
       	if(!apikey) return res.json(loghandler.noapikey)
        if(!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       searchRepo(username) 
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/stalker/tiktod', async (req, res, next) => {
var apikey = req.query.apikey
var username = req.query.username
if(!apikey) return res.json(loghandler.noapikey)
if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
if(listkey.includes(apikey)){        
    tiktokstalk(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
         } else {
  res.json(loghandler.apikey)
}
})

router.get('/stalker/infonpm', async (req, res, next) => {
var apikey = req.query.apikey
var query = req.query.query
if(!apikey) return res.json(loghandler.noapikey)
if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         })
         .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
} else {
  res.json(loghandler.apikey)
}
})

router.get('/stalker/instagram', async(req, res, next) => {
var apikey = req.query.apikey
var username = req.query.username
if(!apikey) return res.json(loghandler.noapikey)
if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
if(listkey.includes(apikey)){        
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
    } else {
    	res.json(loghandler.apikey)
    }
});

router.get('/stalker/free-fire', async(req, res, next) => {
var apikey = req.query.apikey
var idff = req.query.id
if(!apikey) return res.json(loghandler.noapikey)
if (!idff) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter Id"})
if(listkey.includes(apikey)){        
  ffstalk(idff)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
    } else {
    	res.json(loghandler.apikey)
    }
});

router.get('/stalker/mobile-legends', async(req, res, next) => {
var apikey = req.query.apikey
var idml = req.query.id
var zoneId = req.query.zoneid
if(!apikey) return res.json(loghandler.noapikey)
if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter Zone Id"})
if(listkey.includes(apikey)){        
  mlstalk(idml, zoneId)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
    } else {
    	res.json(loghandler.apikey)
    }
});


//maker 
router.get('/api/maker/circle', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	const hasil =  await Canvacord.Canvas.circle(text);
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})


router.get('/api/maker/beautiful', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	const hasil =  await Canvacord.Canvas.beautiful(text);
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
	} else {
    	res.json(loghandler.apikey)
    }
})


router.get('/api/maker/blur', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	const hasil =  await Canvacord.Canvas.blur(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})


router.get('/api/maker/darkness', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	var no = req.query.no
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!no ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter no"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	var n = isNumber(no)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	if ( !n ) return res.json({ status : false, creator : `${creator}`, message : "[!] parameter no nombor sahaja"}) 

	const hasil =  await Canvacord.Canvas.darkness(text,shortText(no, 3))
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
	} else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/facepalm', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.facepalm(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/invert', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.invert(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/pixelate', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	var no = req.query.no
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!no ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter no"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	var n = isNumber(no)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	if ( !n ) return res.json({ status : false, creator : `${creator}`, message : "[!] parameter no nombor sahaja"}) 

	const hasil =  await Canvacord.Canvas.pixelate(text,convertStringToNumber(no))
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})


router.get('/api/maker/rainbow', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.rainbow(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/resize', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	var width = req.query.width
	var height = req.query.height
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!width ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter width"})
	if (!height ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter height"})
	if(listkey.includes(apikey)){
	let w = width
	let h = height
	if (w>1000){ w = "1000"}
	if (h>1000){ h = "1000"}

	var img = await isImageURL(text)
	var wid = isNumber(width)
	var hei = isNumber(height)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 
	if ( !wid ) return res.json({ status : false, creator : `${creator}`, message : "[!] parameter width nombor sahaja"}) 
	if ( !hei ) return res.json({ status : false, creator : `${creator}`, message : "[!] parameter height nombor sahaja"}) 

	const hasil =  await Canvacord.Canvas.resize(text, convertStringToNumber(w),  convertStringToNumber(h))
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/trigger', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.trigger(text)
	res.set({'Content-Type': 'gif'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/wanted', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.wanted(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/wasted', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.url
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if(listkey.includes(apikey)){
	var img = await isImageURL(text)
	if ( !img ) return res.json({ status : false, creator : `${creator}`, message : "[!] cek kembali url image"}) 

	const hasil =  await Canvacord.Canvas.wasted(text)
	res.set({'Content-Type': 'image/png'})
	res.send(hasil)
  } else {
    	res.json(loghandler.apikey)
    }
})

/*router.get('/api/maker/attp', async (req, res) => {
	var apikey = req.query.apikey
	var text = req.query.text
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if(listkey.includes(apikey)){
const file = "./asset/image/attp.gif"

let length = text.length

var font =90

if (length>12){ font = 68}
if (length>15){ font = 58}
if (length>18){ font = 55}
if (length>19){ font = 50}
if (length>22){ font = 48}
if (length>24){ font = 38}
if (length>27){ font = 35}
if (length>30){ font = 30}
if (length>35){ font = 26}
if (length>39){ font = 25}
if (length>40){ font = 20}
if (length>49){ font = 10}
Canvas.registerFont('./asset/font/SF-Pro.ttf', { family: 'SF-Pro' })
await canvasGif(
	file,(ctx) => {
var couler = ["#ff0000","#ffe100","#33ff00","#00ffcc","#0033ff","#9500ff","#ff00ff"]
let jadi = couler[Math.floor(Math.random() * couler.length)]

		function drawStroked(text, x, y) {
			ctx.lineWidth = 5
			ctx.font = `${font}px SF-Pro`
			ctx.fillStyle = jadi
			ctx.strokeStyle = 'black'
			ctx.textAlign = 'center'
			ctx.strokeText(text, x, y)
			ctx.fillText(text, x, y)
		}
		
		drawStroked(text,290,300)

	},
	{
		coalesce: false, // whether the gif should be coalesced first (requires graphicsmagick), default: false
		delay: 0, // the delay between each frame in ms, default: 0
		repeat: 0, // how many times the GIF should repeat, default: 0 (runs forever)
		algorithm: 'octree', // the algorithm the encoder should use, default: 'neuquant',
		optimiser: false, // whether the encoder should use the in-built optimiser, default: false,
		fps: 7, // the amount of frames to render per second, default: 60
		quality: 100, // the quality of the gif, a value between 1 and 100, default: 100
	}
).then((buffer) =>{
res.set({'Content-Type': 'gif'})
res.send(buffer)
})
} else {
    	res.json(loghandler.apikey)
    }
})*/

router.get('/api/maker/ttp', async(req, res, next) => {
	var apikey = req.query.apikey
	var text = req.query.text
	if(!apikey) return res.json(loghandler.noapikey)
	if (!text ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if(listkey.includes(apikey)){
	Canvas.registerFont('./asset/font/SF-Pro.ttf', { family: 'SF-Pro' })
	let length = text.length
		
	var font = 90
	if (length>12){ font = 68}
	if (length>15){ font = 58}
	if (length>18){ font = 55}
	if (length>19){ font = 50}
	if (length>22){ font = 48}
	if (length>24){ font = 38}
	if (length>27){ font = 35}
	if (length>30){ font = 30}
	if (length>35){ font = 26}
	if (length>39){ font = 25}
	if (length>40){ font = 20}
	if (length>49){ font = 10}

	var ttp = {}
	ttp.create = Canvas.createCanvas(576, 576)
	ttp.context = ttp.create.getContext('2d')
	ttp.context.font =`${font}px SF-Pro`
	ttp.context.strokeStyle = 'black'
	ttp.context.lineWidth = 3
	ttp.context.textAlign = 'center'
	ttp.context.strokeText(text, 290,300)
	ttp.context.fillStyle = 'white'
	ttp.context.fillText(text, 290,300)
		res.set({'Content-Type': 'image/png'})
		res.send(ttp.create.toBuffer())
  } else {
    	res.json(loghandler.apikey)
    }
})

router.get('/api/maker/emojimix', async(req, res, next) => {
	var apikey = req.query.apikey
	var emoji1 = req.query.emoji1
	var emoji2 = req.query.emoji2
	if(!apikey) return res.json(loghandler.noapikey)
	if (!emoji1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter emoji1"})
	if (!emoji2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter emoji2"})  
	if(listkey.includes(apikey)){
	let data = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	let jadi = data.results[Math.floor(Math.random() * data.results.length)]
	if (!jadi ) return res.json(loghandler.notfound)
	for (let ress of data.results) {
	resul = await getBuffer(ress.url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
}
} else {
    	res.json(loghandler.apikey)
    }
})

// other
router.get('/other/heleh', async(req, res) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	var text = req.query.text
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	const lower = /[aeueo]/g
	const upper = /[AEUEO]/g
	const result = text.replace(lower, 'e').replace(upper, 'E')
	res.json({
	status: true,
	creator: `${creator}`,
	result: result
	})
} else {
res.json(loghandler.apikey)
}
})

router.get('/other/huluh', async(req, res) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	var text = req.query.text
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	const lower = /[auieo]/g
	const upper = /[AUIEO]/g
	const result = text.replace(lower, 'u').replace(upper, 'U')
	res.json({
	status: true,
	creator: `${creator}`,
	result: result
	})
} else {
res.json(loghandler.apikey)
}
})

router.get('/other/hilih', async(req, res) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	var text = req.query.text
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	const lower = /[aiueo]/g
	const upper = /[AIUEO]/g
	const result = text.replace(lower, 'i').replace(upper, 'I')
	res.json({
	status: true,
	creator: `${creator}`,
	result: result
	})
} else {
res.json(loghandler.apikey)
}
})

router.get('/other/halah', async(req, res) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	var text = req.query.text
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
	const lower = /[iaueo]/g
	const upper = /[IAUEO]/g
	const result = text.replace(lower, 'a').replace(upper, 'A')
	res.json({
	status: true,
	creator: `${creator}`,
	result: result
	})
} else {
res.json(loghandler.apikey)
}
})

router.get('/other/kodepos', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.kota
if(!apikey) return res.json(loghandler.noapikey)
if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
if(listkey.includes(apikey)){
      Kodepos(text) 
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/covid-world', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
	CovidWorld() 
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/covid-indonesia', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
	CovidIndo() 
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/kbbi', async (req, res, next) => {
var apikey = req.query.apikey
var kata = req.query.kata
if(!apikey) return res.json(loghandler.noapikey)
if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
if(listkey.includes(apikey)){
	 KBBI(kata) 
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/createcode', async (req, res, next) => {
        var apikey = req.query.apikey
       	var text = req.query.query      	
  if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
  var len = 25
  var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210'
  var random = ''
  var random2 = ''

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 10
        var code = '';
        for (var i = lenn; i > 0; i--) {
            random2 += arr[Math.floor(Math.random() * arr.length)];
        }
   var encode = random + random2 + code

       res.json({
       	  status : true,
             creator : creator,
             text : text,
             code : encode
        })
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/qrcode', async (req, res, next) => {
        var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
     var qr = await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 })
     var hasil = qr.split`,`[1]
        await fs.writeFileSync(__path + '/tmp/qr.png', hasil, 'base64')
          res.sendFile(__path + '/tmp/qr.png')
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/ssweb', async (req, res, next) => {
	var link = req.query.link
	var islink = isUrl(link)
	var apikey = req.query.apikey
	if (!link) return res.json(loghandler.noturl)  
	if (!islink) return res.json(loghandler.noturl)  
	if (!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
	ssweb(link)
	.then((data) =>{ 
		if (!data) return res.json(loghandler.error)
		res.set({'Content-Type': 'image/png'})
		res.send(data)
	})
	.catch((err) =>{
	 res.json(loghandler.error)
	
	})
} else {
  res.json(loghandler.apikey)
}
})


// shorturl
router.get('/other/tinyurl', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.error)
         }
     })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/shortlink/cuttly', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
	if (!islink ) return res.json(loghandler.noturl)
	let randomapicuttly = apicuttly[Math.floor(Math.random() * apicuttly.length)]
	var hasil = await fetchJson(`https://cutt.ly/api/api.php?key=${randomapicuttly}&short=${url}`)
  if (!hasil.url.shortLink ) return res.json(loghandler.error)
	res.json({
		status: true,
		creator: `${creator}`,
		result: hasil.url.shortLink
		})
} else {
res.json(loghandler.apikey)
}
});

router.get("/tools/shorturl", async (req, res) => {
	var apikey = req.query.apikey
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	var islink = isUrl(url)
	if (!islink ) return res.json(loghandler.noturl)
	if(listkey.includes(apikey)){
	await shorturl(url)
       .then(result => {
		res.json({
		status: true,
		creator: `${creator}`,
		result: result
		})
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
	} else {
res.json(loghandler.apikey)
}
});


router.get('/other/linkpoi', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
     request(`https://linkpoi.ga/api.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.error)
         }
     })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/other/tinyurlwithalias', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)  
TinyUrl.shortenWithAlias(url, function(url, err) {
  if (err) return res.json(loghandler.error)
	res.json({
		status: true,
		creator: `${creator}`,
		result: url
		})
});
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/bitly', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)
	let randomapibitly = apibitly[Math.floor(Math.random() * apibitly.length)]
	const bitly = new BitlyClient(randomapibitly)
	bitly
	.shorten(url)
	.then(function(result) {
		res.json({
			status: true,
			creator: `${creator}`,
			result : result.link
			})
	 
	})
	.catch(function(error) {
	 res.json(loghandler.error)
	});
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/fakedata', async (req, res, next) => {
var apikey = req.query.apikey
var country = req.query.country            
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if(!country) return res.json(loghandler.notcoun)
    Fakename(country)
       .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
res.json(loghandler.apikey)
}
})

router.get('/other/infoip', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
		IP()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.apikey)
}
})

router.get("/tools/cekip", async (req, res) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
	await fetchJson("https://api.ipgeolocation.io/ipgeo?apiKey=173ab2a4ae9e4f18a00b630916e9eec5&include=useragent")
   .then(result => {
			res.json({
				creator: creator,
				result
			})
		})
        .catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
 } else {
res.json(loghandler.apikey)
}
});

router.get('/other/repeat', (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text      
var jumlah = req.query.jumlah 
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if(!text) return res.json(loghandler.nottext)
const repeat = (text, total) => {
		return text.repeat(total)
	}
  if (isNaN(jumlah)) return res.json(loghandler.notnumber)
  if (jumlah > 10000) return res.json({ message: `Maximal 10rb Kali!` })
  var result = repeat(text, jumlah)
       res.json({
             status: true,
             creator: `${creator}`,
             result: result
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/other/say', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text            
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
if(!text) return res.json(loghandler.nottext)        
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : text
       })
   } else {
res.json(loghandler.apikey)
}
})


router.get('/other/gempa', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.apikey)
}
})

router.post("/tools/upload", async (req, res) => {
	let sampleFile;
	let data;
	if (req.files == null || Object.keys(req.files).length === 0) return res.json({ message: `Pilih salah satu file untuk diupload` })
	sampleFile = req.files.sampleFile;
	ext = sampleFile.name?.includes('.') ? sampleFile.name.split(".")[1] : "bin";
	data = `${sampleFile.md5}.${ext}`
	sampleFile.mv(__path + "/assets/upload/" + data, async function (err) {
		if (err) return res.status(500).send(err)
		res.json({
			url: `https://${req.hostname}/upload/${data}`,
			original_name: sampleFile.name,
			size: formatSize(sampleFile.size),
			encoding: sampleFile.encoding,
			mimetype: sampleFile.mimetype
		});
	})
});

router.use(function (req, res) {
     res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});


module.exports = router
