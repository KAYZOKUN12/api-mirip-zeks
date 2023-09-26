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
var { convertStringToNumber } = require('convert-string-to-number'); 
var { shortText } = require("limit-text-js")
var isImageURL = require('image-url-validator').default
var isUrl = require('is-url');
var shortUrl = require("node-url-shortener");
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
const { tahta } = require(__path + '/lib/tahta.js') 
const { create } = require(__path + '/lib/textpro.js') 

const { Pixnet0rz } = require(__path + '/lib/short.js');
const Pixnet0rz = new Pixnet0rz();

var {
  CovidIndo, 
  CovidWorld, 
  Gempa, 
  Joox, 
  KBBI, 
  IP, 
  Kodepos, 
  searchRepo,
  searchUser
} = require("./../lib/utils/scrape");

var {
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
limit: 'unlimited', 
creator: `${creator}`
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
var url = req.query.url
if (!url) return res.json(loghandler.notid)   
var apikey = req.query.apikey
if (!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
	igstory(url)
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
         .then(result => {
             console.log(result)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: result
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
         .then(result => {
             console.log(result)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoWm: result
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

router.get('/search/dare', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Peluk orang yang NGGAK kamu sukai di kelas dan bilang, Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll','Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.','Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari','Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram','Cabut bulu kaki mu sendiri sebanyak 3x','Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.']
const der = dare[Math.floor(Math.random() * dare.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : der
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/truth', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu mekatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah dimeket apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana kak?','Hal apa yang kamu rahasiakan sampe, sekarang dan gak ada satu orangpun yang tau?','Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?','Siapa mantan terindah mu? dan mengapa kalian putus ?!','Pilih PACAR atau TEMAN ? berikan alasannya !','Siapa nama artis yang pernah kamu cium fotonya diam-diam?','Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?','Siapa nama orang (beda gender) yang menurutmu akan asyik bila dijadikan pacar?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : ttrth
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/katafakta', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const kataf = [
"Indonesia adalah Tempat ditemukannya ular terpanjang di dunia yaitu, Python Reticulates sepanjang 10 meter di Sulawesi",
"Suatu penyakit yang disebut “Exercise-Induced Anaphylaxis” harfiah menyebabkan orang menjadi ‘alergi’ untuk berolahraga",
"Pada Sept1909 malam hari, warga Jakarta beruntung menyaksikan Aurora Borealis di langit yg biasanya hanya di kutub ( Prof. Truls L Hansen)",
"Bromelain yang terkandung dalam Nanas bila dikonsumsi berlebihan bagi wanita hamil bisa memicu kontraksi dini bahkan keguguran",
"Secara resmi setiap tanggal 6 Oktober di Jepang merayakan Tom Cruise Day",
"Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m)",
"Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld)",
"Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung",
"Teka-teki silang terbesar yang pernah diterbitkan memiliki 2631 pertanyaan mendatar dan 2922 pertanyaan menurun",
"Rafflesia Arnoldii yang tumbuh di Sumatera adalah bunga terbesar di dunia. Ketika bunganya mekar, diameternya mencapai 1 meter",
"Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit",
"Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir",
"Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian",
"Menara Eiffel dibangun oleh Alexandre Eiffel, dan sebagian besar biayanya ditanggung oleh dia",
"Rata-rata orang di dunia jatuh cinta sebanyak 7 kali dulu sebelum ditakdirkan menikah",
"Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam",
"Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit",
"Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang",
"Lagu kebangsaan Yunani mempunyai 158 bait",
"Kata “depp” dalam bahasa Jerman artinya “idiot”",
"Bobby Tufts (4 tahun) adalah Wali Kota termuda di dunia saat ini (Wali Kota Dorset, Minnesota, AS)",
"Menghisap rokok sambil makan cokelat dapat membunuh racun yang terdapat pada rokok tersebut. [penelitian kedokteran di Universitas Lampung]",
"Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”",
"Kebanyakan orang lebih percaya terhadap kemampuan kepemimpinan seseorang jika orang itu memiliki badan yang lebih tinggi. [inilah .com]",
"Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]",
"Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]",
"Anak yang gemar berolahraga lebih cerdas dibandingkan yang tidak. [penelitian di Michigan State University]",
"Kelurahan Air Jamban adalah nama kelurahan di kecamatan Mandau, kabupaten Bengkalis, provinsi Riau, Indonesia",
"Kata “Poli” berarti Banyak dan “Tics” berarti Makhluk Pengisap Darah. Jadi kata Politics (politik) berarti Banyak Makhluk Pengisap Darah",
"Musik dapat membuat otak bahagia dan kebanyakan mendengarkan musik dapat membuat perut cepat lapar",
"Mendengarkan musik irama lambat saat tidur terbukti mampu meningkatkan kemampuan memori otak. [penelitian di Universitas Tubingen Jerman]",
"Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]",
"Morology / Morologi adalah studi tentang percakapan konyol.",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail.",
"Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu",
"Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]",
"Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]",
"Koin ¥ 1 (Yen Jepang) bisa mengapung di atas air",
"Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin",
"Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan kecemasan, bahkn dpt meningkatkan memori. [Dailymail]",
"Kata “Mouse” (tikus) berasal dari turunan Bahasa Sansekerta “Mus” yang berarti “pencuri”. 48. Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]",
"Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia",
"Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. [penelitian di Inggris]",
"Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan",
"Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30.  [studi baru dari St Tropez] Expand",
"Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang (detikHealth)",
"Nama “Gorila” berasal dari kata Yunani “Gorillai” yang berarti “perempuan berbulu”",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan",
"Selama abad ke-13, kata “nice” sebenarnya berarti “stupid”, “senseless” dan “foolish”",
"49% dari pemilik Smartphone adalah jomblo. (Survei, “2012 Online User Behavior and Engagement Study”)",
"Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)",
"Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor",
"Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri",
"Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)",
"Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang",
"Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan",
"“Mwahahaha” dan “lolz” telah ditambahkan ke Kamus Inggris Oxford",
"Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya",
"Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut “Barbe á Papa” yang berarti “Jenggot Ayah”",
"Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah",
"Hangry adalah penggabungan kata dari “Hungry” dan “Angry”, di pakai ketika anda sedang lapar dan marah",
"Kentut dari bakteri membuat keju swiss memiliki lubang-lubang",
"Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)",
"Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)",
"Tanduk badak terbuat dari keratin",
"Jerapah memiliki lidah sepanjang 21 inchi",
"Sepeda pertama dibuat pada tahun 1817 dibuat tanpa pedal",
"Rechendorfer Yusuf adalah orang pertama yang berhasil menempatkan karet penghapus di atas sebuah pensil",
"Balon mainan yang pertama kali terbuat dari karet vulkansir",
"Satu ujung pensil dapat menulis 50.000 kata dalam bahasa Inggris",
"Terdapat hampir 900 jenis kelelawar di dunia",
"Tangan kanan orang hidup lebih lama dari tangan kiri",
"Banyak orang yang dibunuh oleh keledai",
"Seekor buaya tidak dapat mengeluarkan lidah",
"Semut tidak tidur",
"Beruang kutub bertangan kidal",
"Astronot tidak diperbolehkan untuk makan kacang-kacangan sebelum mereka pergi ke ruang angkasa karena buang angin/kentut dalam pakaian ruang angkasa mengakibatkan kerusakan",
"Dengan menaikkan kaki Anda perlahan dan berbaring ke belakang, Anda tidak dapat terperosok ke dalam pasir",
"Pemogokan cahaya di bumi sekitar 6.000 kali per menit",
"Lobster memiliki darah biru",
"Seorang pria mengatakan rata-rata 4.850 kata dalam 24 jam",
"Kuku ibu jari tumbuh lambat dan kuku jari tengah yang tercepat",
"Kecap sebelumnya dijual sebagai obat",
"Cokelat dapat membunuh anjing",
"Produk pertama yang memiliki barcode adalah Wrigley’s gum",
"Kanada dalam bahasa India berarti Desa Besar",
"Seseorang menghasilkan 100 pound sel darah merah dalam hidupnya",
"Pita karet terpanjang adalah di kulkas",
"Ada 293 cara untuk menukar dolar",
"“Dreamt” adalah satu-satunya kata yang berakhir dengan ‘mt’",
"Orang yang cerdas memiliki kadar seng dan tembaga di rambut mereka",
"69% orang Amerika menggunakan internet dan hanya 5,5% dari India",
"Plastik dibutuhkan 500 tahun untuk terurai",
"Amerika telah memiliki 30,30% bandara di dunia & India hanya 0,70%",
"Total wilayah permukaan bumi adalah 197 juta mil persegi",
"Cahaya matahari mencapai bumi membutuhkan waktu sekitar 8 jam 3 detik",
"Penduduk di dunia telah meningkat 3,1 miliar dalam 40 tahun terakhir",
"Sekitar 180 juta kartu Valentine tersebar per tahunnya",
"Orang yang berusia di atas 100 di AS meningkat dari 4.000 pada tahun 1960 menjadi 55.000 pada tahun 1995",
"Seekor kucing dapat berlari 20 km per jam",
"Seekor cheetah dapat berlari 76 km per jam",
"Katak yang terbesar di dunia adalah Goliath Frog",
"Tidak ada dua zebra yang belangnya serupa",
"Terdapat hampir 50 jenis kangguru",
"Joeys adalah nama yang diberikan kepada anak kanguru",
"Woodpecker dapat mematuk 20 kali dalam satu menit",
"Lidah seekor Chameleon adalah dua kali panjang tubuhnya sendiri",
"10% dari populasi dunia adalah tangan kiri",
"Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai “emas putih”",
"Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]",
"Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]",
"Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen",
"Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]",
"Perbandingan jumlah rayap dan manusia di dunia adalah 10 :",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Kuda Nil kentut lewat mulut",
"Pohon kelapa membunuh 150 orang tiap tahun, lebih banyak daripada hiu",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Tahukah anda? Llanfairpwllgwyngyllgogerychwyrndrobwlll, adalah nama sebuah desa di Wales Utara, Inggris. Sulit dibaca bukan?",
"Ada sekitar 10ribu jenis apel di dunia Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Umur dari capung adalah 24 jam",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir",
"Kentut sapi termasuk penyebab utama global warming",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan film agar kita bisa melihat semua gerakannya",
"Siput bisa tidur selama 3 tahun",
"Jika kita berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Tiap tahun, bulan menjauh 3.82 cm dari bumi",
"Riset membuktikan, memakan pisang bisa menambah daya ingat",
"Orang yang alergi bahan latex, biasanya alergi kiwi juga",
"Ilmu tentang perkembangan apel disebut Pomology",
"Kita bisa mematangkan Mangga dengan cepat dengan cara memasukkan ke dalam paperbag bersama dengan pisang matang",
"Antioksidans pada apel lebih besar 5x dari pisang",
"Hanya 1 dari 5 orang australia makan apel tiap hari",
"Kiwi memiliki nama lain Chinese Gooseberry",
"Mangga masih 1 family dengan tanaman Poison Ivy",
"Pelaut inggris mengonsumsi air jeruk nipis untuk menghindari mabuk laut",
"Pelaut inggris disebut juga Limeys karena suka minum air jeruk nipis",
"Nanas mengandung Bromelain yang berguna mencegah bir dingin berawan",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotorUmur dari capung adalah 24 jam",
"1 pohon apel rata2 bisa menghasilkan 500buah apel",
"25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung",
"Lebih dari 60juta Ton apel dihasilkan di dunia per periode tertentu",
"Kiwi ditetapkan sebagai buah kebangsaan di Cina",
"Pear akan berubah menjadi hitam sekali jika disimpan pada lingkungan yang kurang oksigen",
"Markisa pertama kali ditemukan di Brazil",
"Riset membuktikan bahwa makan apel bisa mengurangi risiko kena kanker",
"Biji apel merupakan racun ringan namun tidak berbahaya bagi manusia",
"Jeruk adalah buah yang paling umum di dunia",
"Beberapa negara di dunia melatih bangsa monyet untuk memetik kelapa",
"Ada lebih dari 400jenis kiwi di Cina",
"Bahasa gaul di australia “She’s Apple” bukan berarti “Dia (wanita) manis” tetapi berarti “Semuanya baik2 saja”",
"Nanas yang belum matang adalah racun",
"Kiwi memiliki nama asli Yang Tao (Sunny Peach)",
"Makan pisang ketika makan nasi dapat membantu ibu hamil terhindar dari Morning Sickness",
"Plum jepang sebenarnya berasal dari Cina",
"Plum bisa tumbuh di semua benua kecuali antartika",
"Memerlukan tenaga 50lembar daun untuk menghasilkan 1buah apel dalam 1pohon",
"Makan plum membantu meningkatkan penyerapan zat besi dalam tubuh",
"Anggur dapat meledak jika dimasukkan ke dalam microwave",
"Pisang mengandung vitamin B6 yang bisa mengontrol kadar gula dalam darah, dan membangkitkan mood",
"1nanas bukan 1buah, tetapi terdiri atas lebih dari 200anak buah (fruitlets)",
"Jeruk nipis tidak mengandung segala jenis lemak, natrium, dan kolestrol",
"Menanam semangka dalam kotak akan menghasilkan semangka kotak",
"Dilihat dari beratnya, semangka adalah buah yang paling diminati di USA",
"Pohon kelapa entah kenapa disebut “Tree of Life”",
"Bunga pohon markisa adalah Bunga kebangsaan negara Paraguay",
"Semangka adalah sepupunya Terong, Labu, dan Squash",
"Menanam 1biji buah jeruk bisa menghasilkan lebih dari 1 pohon",
"Bagian dalam kulit pisang bisa untuk menyemir sepatu kulit",
"Bagian dalam kulit pisang juga bisa digunakan untuk menghilangkan gatal bekas gigitan nyamuk dengan cara menggosokkannya",
"Di Kerala, India selatan, Bunga kelapa digunakan untuk upacara Pernikahan",
"Kulit Plum dipercaya memiliki efek Laxative",
"Pisang kaya akan vitamin B-Complex yang bisa menenangkan sistem saraf",
"Tidak ada yang se-rima dengan “orange” (jeruk)",
"Salah satu spesies markisa yang buahnya berwarna ungu bisa melakukan fertilisasi sendiri",
"Pisang bisa meningkatkan kadar Serotonin yang bisa melawan depresi",
"Semakin besar “Navel” pada Jeruk Navel, semakin manis buahnya",
"Markisa yang berkerut adalah markisa yang paling manis",
"Radiasi dari 1 batang rokok sama dgn radiasi 2000x X-ray",
"Sepatu boot awalnya dikhususkan untuk berperang",
"Sebelum Masehi bahasa inggrisnya adalah B.C (Before Christ). Setelah Masehi adalah A.D (Anno Domini)",
"Ikan hiu kehilangan gigi lebih dari 6000buah setiap tahun, dan gigi barunya tumbuh dalam waktu 24 jam",
"Julius Caesar tewas dengan 23 tikaman",
"Nama mobil Nissan berasal dari bahasa jepang Ni : 2 dan San : 3. Nissan : 23",
"Jerapah dan tikus bisa bertahan hidup lebih lama tanpa air dari pada unta",
"Perut memproduksi lapisan lendir setiap dua minggu agar perut tidak mencerna organnya sendiri",
"98% dari perkosaan dan pembunuhan dilakukan oleh keluarga dekat atau teman korban",
"Semut dapat mengangkat beban 50 kali tubuhnya",
"Deklarasi Kemerdekaan Amerika ditulis diatas kertas marijuana",
"Titik diatas huruf i disebut ‘title’",
"Sebutir kismis yang dijatuhkan kedalam gelas berisi sampanye segar akan bergerak naik turun dalam gelas",
"Benjamin Franklin anak bungsu dari orangtua bungsu keturunan ke 5 dalam keluarga bungsu",
"Triskaidekaphobia adalah ketakutan pada 13. Paraskevidekatriaph obia adalah ketekukan pada hari jumat tanggal 13 (bisa terjadi antara 1-3 kali setahun). di Italia, 17 adalah angka sial di Jepang angka sial adalah 4",
"Lidah jerapah panjangnya sekitar 50 cm",
"Mulut menghasilkan 1 liter ludah setiap hari",
"Kita bernafas kira-kira 23.000 kali setiap hari",
"Kata ZIP (kode pos) adalah kepanjangan dari ‘Zoning Improvement Plan’",
"Coca-Cola mengandung Coca (yang merupakan zat aktif pada kokain) dari tahun 1885 sampai 1903",
"Rata-rata kita bicara 5000 kata tiap hari (walaupun 80% nya kita bicara pada diri sendiri)",
"Seandainya kuota air dalam tubuh kita berkurang 1%, kita langsung merasa haus",
"4 simbol raja pada kartu remi melambangkan 4 raja yang etrkenal di jaman masing-masing: Sekop = David/Raja Daud ; Keriting = Alexander the Great/Iskandar Agung ; Hati = Charlemagne/ Raja Prancis ; Wajik =Julius Caesar",
"Seumur hidup kita meminum air sebanyak kurang lebih 75.000 liter",
"Setiap orang, termasuk kembar identik, sidik jari dan tekstur lidahnya tidak ada yang sama",
"Titik merah pada 7-Up logo berasal dari penemunya yang bermata merah. Dia seorang albino",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai",
"Tanda ’save’ pada Microsoft Office programs menunjukan gambar floppy disk dengan shutter terbalik",
"Albert Einstein dan Charles Darwin,keduanya menikah dengan sepupu pertama mereka (Elsa Löwenthal dan Emma Wedgewood)",
"Unta punya 3 kelopak mata",
"Sehelai rambut di kepala kita mempunyai masa tumbuh 2 sampai 6 tahun sebelum diganti dengan rambut baru",
"Seseorang masih akan sadar selama 8 detik setelah dipenggal",
"Otot yang bekerja paling cepat ditubuh kita adalah otot dikelopak mata yang membuat kita berkedip. kita bisa berkedip 5kali dalam sedetik",
"Coklat dapat membunuh anjing,karena langsung mempengaruhi jantung dan susunan syarafnya",
"Tanpa dicampur ludah di dalam mulut, kita tidak akan merasakan rasa makanan",
"Kuku jari tangan tumbuh 4kali lebih cepat daripada kuku kaki",
"13% orang di dunia adalah kidal",
"Hampir semua lipstik mengandung sisik ikan",
"Bayi yang baru lahir berat kepalanya 1/4 dari berat tubuhnya",
"Kita sebenarnya melihat dengan otak. mata hanya berupa kamera yang mengirim data ke otak. 1/4 bagian dari otak digunakan untuk mengatur kerja mata",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendiri",
"Tahun 1830an saus tomat biasa dijual sebagai obat",
"Tiga monyet bijak punya nama: Mizaru (See no evil), Mikazaru (Hear no evil), and Mazaru (Speak no evil)",
"India mempunyai Undang-undang hak untuk sapi",
"Jika bersin terlalu keras dapat meretakkan tulang iga. JIka mencoba menahan bersin, bisa mengalami pecah pembuluh nadi di kepala dan leher trus mati . jika memaksa mata terbuka saat bersin, bola mata bisa meloncat keluar",
"Nama negara Filipina berasal dari nama Raja Phillip",
"Saudi Arabia berasala dari nama Raja Saud",
"Anak-anak mempunyai 20 gigi awal. Orang dewasa punya 32",
"Karena langkanya logam, piala Oscars yang dibagikan pada perang dunia ke II terbuat dari kayu",
"Setiap Siklus 11 tahun, kutub magnet pada matahari bertukar tempat. Siklus ini dinamakan “Solarmax”",
"Ada 318,979,564, 000 kemungkinan kombinasi pembukaan pertama pada catur",
"Ada lebih dari 300 bakteri pembentuk karang gigi",
"Macan adalah anggota terbesar dalam keluarga kucing",
"Nomer “172? dapat ditemukan pada uang kertas 5 dollar amerika, pada gambar semak-semak dibawah Lincoln Memorial",
"Pohon kelapa membunuh 150 orang tiap tahun. Lebih banyak daripada hiu",
"Pada poster film ‘Pretty Woman’ Julia Robets terlalu pendek untuk bisa sejajar dengan Richard Gere. Maka digunakan model Shelley Michelle sebagai tubuh Julia",
"Daerah kutub kehilangan matahari selama 186 hari dalam setahun",
"Kode Telephone Internasional untuk Antartica adalah 672",
"Bom pertama sekutu dijatuhkan di Berlin pada perang dunia ke II. Membunuh satu-satunya gajah di Kebun Binatang Berlin",
"Rata-rata hujan jatuh dengan kecepatan 7 mil per jam",
"Butuh 10 tahun bagi Leonardo Da Vinci untuk melukis Mona Lisa. Lukisan itu tidak ditandai dan di beri tanggal. Leonardo dan Mona mempunya susunan tulang yang persis sama dan menurut sinar X, ada 3 versi lukisan dibawah lukisan itu",
"Nama dari kembar gemini adalah Castor dan Pullox",
"Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan filam agar kita bisa melihat semua gerakannya",
"Satu kilo dari berat badan kita mengandung 7000 kalori",
"Darah sama kental dengan air laut",
"Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik",
"Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana",
"Nama asli butterfly (kupu-kupu) adalah flutterby",
"Bayi lahir setiap 7 detik",
"Satu dari 14 wanita Amerika berambut pirang asli. Prianya hanya satu dari 17",
"The Olympic adalah saudara dari kapal Titanic, dan melayani dengan selamat selama 25 tahun",
"Saat Titanic karam, 2228 orang ada di dalamnya. Hanya 706 yang selamat",
"Di Amerika, seseorang didiagnosa menderita AIDS tiap 10 menit. Di Afrika, seseorang meninggal karena AIDS tipa 10 menit",
"Sampai usia 6 bulan, bayi bisa menelan dan bernapas secara bersamaan. Orang dewasa tidak bisa",
"Alasan kenapa diiklan jam kebanyakan jarum menunjuk pukul 10.10, karena jam seperti sedang tersenyum",
"Tiap tahun bulan menjauh 3.82 cm dari bumi",
"Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara",
"Dalam satu tetes air mengandung 50 juta bakteri",
"Dengan menaikan kaki pelan2 dan berbaring tenang dengan punggung lurus, kita tidak akan tenggelam di pasir hisap",
"Satu dari 10 orang hidup di suatu pulau",
"Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri",
"Lobster dapat hidup selama 100 tahun",
"Permen karet tidak dijual di Disney Land",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Rahang kucing gak bisa bergerak kekiri dan kanan",
"Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara",
"Jika kira berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari",
"Suara yang kita dengar dari dalam kerang bukan suara ombak laut, tapi suara aliran darah dalam kepala kita",
"Orang kebanyak yang menderita ketakutan pada ruang terbuka (kenophobia) daripada ketakukan pada ruang tertutup (claustrophobia) ",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Adegan band yang terus bermain musik saat Titanic tenggelam adalah kisah nyata",
"Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan",
"35% dari orang yang ikut kontak jodoh lewat internet, sudah menikah",
"CocaCola dulu berwarna hijau",
"Secara fisik, babi tidak bisa melihat ke langit",
"Semua beruang kutub kidal",
"Kelelawar selalu belok kiri jika terbang keluar gua",
"Jim Henson pertama kali memakai kata “Muppet”. Kombinasi dari “marionette” dan “puppet”",
"Gajah satu-satunya hewan yang tidak bisa meloncat",
"The Michelin man (figur berbaju dan bertopi putih diiklan Michelin) bernama Mr. Bib. nama aslinya Bibendum pada iklan pertama tahun 1896",
"Kita tidak bisa menjilat siku kita sendiri",
"Kata “lethologica” menggambarkan saat dimana kita tidak bisa mengingat apa yang kita inginkan",
"Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV",
"Kalimat yang bisa dibaca sama dari depan dan belakang (racecar, kayak, tamat) disebut “palindrome” ",
"Siput bisa tidur selama 3 tahun",
"Diatas khatulistiwa melintas sekitar 200 satelit asing, termasuk satelit mata-mata",
"Orang di Cina lebih banyak yang berbahasa Inggris dari pada orang di Amerika",
"Karena pengaruh rotasi bumi, kalau kita melempar kearah barat, lemparan kita akan lebih jauh jatuhnya dari pada kearah timur",
"Satu dari 9000 orang menderita albino",
"Kursi listrik ditemukan oleh seorang dokter gigi",
"Kita berulang tahun bersama 9 juta orang dari seluruh dunia",
"Setiap manusia dalam hidupnya rata-rata habis untuk menunggu dilampu merah selama 2 minggu",
"Botol aqua dan tempat makan plastik baru bisa terurai dengan sempurna dalam tanah setelah 50.000 tahun",
"Kucing bisa membuat lebih dari 100 bunyi vokal, anjing hanya bisa sekitar 10",
"Gigi berang-berang tak pernah berhenti ",
"Kelelawar adalah satu-satunya mamalia yang bisa terbang",
"Jika boneka Barbie adalah manusia, ukurannya adalah 39-23-33 (99-58,5-84 cm). Tingginya sekitar 215 cm dan punya leher 2kali lebih panjang daripada manusia normal",
"Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan",
"Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat",
"Seekor Babon bernama ‘Jackie’ menjadi prajurit resmi dalam angkatan bersenjata Afrika Selatan pada Perang Dunia I",
"Bibliophile adalah sebutan untuk kolektor buku-buku langka. Bibliopole adalah penjual buku-buku langka",
"Jantung ikan paus biru berdenyut 9 kali dalam semenit",
"Arabic numerals bukan berasal dari Arab, tapi diciptakan di India",
"Kupu-kupu melihat dengan 12000 mata",
"Bulan February tahun 1865 adalah satu-satunya bulan dalam catatan sejarah yang tidak sempat mengalami bulan purnama",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan",
"Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari",
"Umur dari capung adalah 24 jam",
"Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari",
"Butuh waktu 6 bulan untuk kuku kaki tumbuh dari bawah paling bawah sampai ujung kuku",
"Daya ingat ikan hanya 3 detik",
"Bulan purnama 9 kali tebih terang daripada bulan setengah",
"Untuk setiap patung memorial orang diatas kuda, jika 2 kaki depan kuda mengangkat, maka orang tersebut tewas dalam pertempuran, jika satu kaki kuda yang terangkat, maka orang tersebut meninggal karena luka dalam pertempuran, jika 4 kakinya menginjak tanah, orang tersebut meninggal secara normal",
"Beruang dewasa dapat lari secepat kuda",
"Tulang kuda lebih banyak 18 buah dari tulang manusia",
"Ubur-ubur terdiri dari 95% air",
"Kulit Zebra adalah putih yang bergaris hitam",
"Kecuali manusia dan monyet, semua mamalia buta warna",
"Biji apel mengandung sianida",
"Tikus dan kuda tidak bisa muntah",
"Penguin adalah burung yang tidak bisa terbang tapi bisa berenang",
"Astronot dilarang mengkonsumsi kacang sebelum menjelajah ruang angkasa karena jika buang angin dalam baju khusus astronot dapat membahayakan mereka",
"Winston Churchill lahir di toilet wanita saat acara dansa",
"Sebelum ada pesawat jet, Jetlag disebut Boatlag",
"Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)",
"Kucing tidak bisa merasakan rasa manis",
"Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius",
"Dalam perang dahulu, orang yang buta warna dibutuhkan dalam tim pendeteksi kamuflase di militer",
"Sapi tidak punya gigi atas",
"Hedenophobic berarti takut akan kesenangan",
"Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka",
"Buaya tidak bisa menjulurkan lidah",
"Kentut sapi termasuk penyebab utama global warming",
"Semut selalu jatuh miring ke kanan jika diberi racun serangga",
"Kucing rumah benci bau lemon dan semua yang berbau sitrus",
"Donal Bebek dilarang beredar di Finlandia karena Donal tidak pakai celana",
"Nama asli Donal bebek adalah Donald Flauntleroy Duck",
"Indra perasa kupu-kupu ada dikakinya",
"Dry Ice tidak meleleh, tapi menguap",
"Mata burung unta lebig besar dari otaknya",
"Bintang laut tidak punya otak",
"Tiap manusia punya telinga yang berbeda",
"Telur segar tenggelam diair, telur yang kadaluarsa mengambang",
"80% dari seluruh binatang di dunia adalah serangga",
"Kacang adalah salah satu bahan untuk membuat dinamit",
"Ratu Elizabeth I menderita Anthophobia (takut akan mawar)",
"RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’",
"Mata manusia yang sehat (tidak buta warna) dapat menbedakan 500 jenis warna abu-abu",
"Ikan mas yang bunting disebut ‘twit’",
"Eropa adalah benua tanpa padang pasir",
"Lalat meloncat mundur saat akan terbang",
"Sekeor kucing memiliki 32 otot pada tiap telinga",
"A honeybee can fly at fifteen miles per hour",
"Macan mempunyai kulit yang belang,bukan hanya bulu yang belang",
"A “jiffy” is the scientific name for 1/100th of a second",
"Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil",
"Kambing mempunya pupil mata segi empat",
"Novel pertama yang menggunakan mesin tik adalah Tom Sawyer",
"Hamster sangat suka makan jangkrik",
"Pemantik ditemukan sebelum korek api",
"Rata-rata dalam setiap batang permen coklat terdapat serangga yang meleleh bersamanya",
"Tanduk badak terbuat dari rambutnya yang mengeras",
"Perang paling singkat dalam sejarah adalah perang Zanzibar and England tahun 1896. Zanzibar menyerah setelah 38 menit",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"Kulit beruang kutub sebenarnya hitam. Bulunya berwarna bening, dan tampak putih di salju",
"Elvis mempunyai saudara kembar bernama Garon, yang meninggal saat lahir, maka nama tengah Elvi adalah Aron, untuk menghormati saudaranya",
"Landak punya sidik jari yang mirip manusia",
"Kuda Nil kentut lewat mulut",
"Shakespeare yang menemukan kata “assassination” dan “bump”",
"Mahluk yang bisa tersipu-sipu hanya manusia",
"Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih",
"Wanita berkedip dua kali lebih banyak dari pria",
"Nama Jeep (jip) diampil dari singkatan “GP”, bahasa militer untuk General Purpose",
"Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal",
"Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2",
"Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam",
"Seorang “quidnunc” adalah sebutan untuk orang yang selalu ingin tahu gosip terbaru",
"Jika matahari tiba-tiba padam, butuh 8 menit bagi manusia untuk menyadarinya",
"Leonardo Da Vinci yang menemukan gunting, helikopter, dan banyak alat lainnya",
"Dalam 4000 tahun, tidak ada jenis binatang peliharaan baru",
"25% dari tulang manusia ada di kaki",
"David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC)",
"Kira-kira 100 orang tersedak ballpoint tiap tahun",
"Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2",
"Jika kita kehilangan satu mata, kita akan kehilangan 1/5 dari pengelihatan kita dan kehilangan seluruh persepsi tentang kedalaman objek",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Bawang putih yang kita gosok di tumit kaki akan meresap dapat dapat tercium dalam nafas kita",
"Dengan merentangkan kedua tangan sejauh mungkin, jarak dari kedua ujung tangan adalah sama dengan tinggi kita",
"Liburan selama sebelas hari berarti kita punya waktu hampir sejuta detik untuk menikmatinya",
"Dalam film Silence of The Lambs, tokoh Hannibal Lecter tidak pernah berkedip",
"Di jepang, warung kopi disebut ‘Kissaten’",
"Merebus telur burung unta butuh waktu 40 menit",
"Jaguar takut pada anjing",
"Gajah hanya tidur 2 jam dalam sehari",
"Johnny Deep takut pada badut",
"Ganymede adalah bulan planet Jupiter, merupakan bulan terbesar di tata surya kita, lebih besar dari planet Merkurius",
"Dalam golf, ‘Bo Derek’ adalah istilah untuk nilai 10",
"Koala punya dua jempol",
"Latte dalam bahasa Italia adalah susu",
"Llanfairpwllgwyngyl lgogerychwyrndro bwlll… adalah nama sebuah desa di Wales Utara, Inggris",
"Di Italia, Micky Mouse lebih dikenal dengan nama ‘ Topolino’",
"Susu sebenarnya lebih menyerupai makanan daripada minuman",
"Ada lebih dari 450 jenis susu di dunia. 240 berasal dari Prancis",
"Nyamuk lebih suka anak-anak daripada orang dewasa",
"Partikel debu didalam rumah sebagian besar berasal dari sel kulit mati",
"Rat-rata orang bergerak 40 kali dalam tidurnya",
"Dalam bahasa Inggris, ‘Naked’ artinya tanpa perlindungan. ‘Nude’ artinya telanjang",
"Broccoli dan kembang kol adalah sayuran yang berupa bunga",
"Anak baru lahir memiliki 350 tulang. Mereka menyatu atau menghilang sampai menjadi 206 pada usia 5 tahun",
"Tidak ada bukti yang pasti siapa yang membangun Taj Mahal",
"Dalam survey terhadap 200000 burung unta selama 80 tahun, tidak ada satupun yang mengubur kepalanya dalam tanah",
"Nail Amstrong melangkah pertama kali di bulan dengan kaki kiri",
"Shuttlecock untuk badminton harus punya 14 bulu",
"Mutiara bisa larut dalam cuka",
"Babi tidak dapat berkeringat karena tidak punya kelenjar keringat. Mereka berlumur lumpur untuk mendinginkan kulitnya",
"Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini",
"Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya",
"Ikan hiu kebal terhadap kanker",
"Rusa Santa bernama: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, dan Blitzen",
"Beberapa jenis cacing pita akan memakan dirinya sendiri jika kelaparan",
"Kita bisa menghela sapi naik tangga, tapi tidak bisa menghela mereka turun tangga",
"Plakat yang ditinggalkan Apollo 11 di bulan berbunyi “Here men from the planet Earth first set foot upon the Moon July 1969, A.D. / WE CAME IN PEACE FOR ALL MANKIND",
"Alpabet Hawai terdiri dari 12 huruf saja",
"Nama paling populer di dunia adalah Muhammad",
"Bola mata kita beratnya sekitar 28 gram",
"Paru-paru kiri lebih kecil dari paru-paru kanan karena memberi tempat terhadap jantung",
"Pinguin hanya ada di kutub selatan, dan tidak bisa menyebrangi equator",
"Kebanyakan orang bisa mendengar lebih baik dengan kuping kanan",
"Vitamin pada buah biasanya terdapat pada kulitnya",
"Rata-rata klakson mobil berbunyi pada nada F",
"Pria lebih mampu membaca tulisan dengan ukuran huruf kecil daripada wanita", 
"Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.",
"Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.",
"AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.",
"","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.",
"Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).",
"Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek.",
" Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.",
"Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.",
"Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.",
"Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.",
"Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.",
"Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]",
"Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.",
"YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]",
"Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)",
"Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).",
"Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)",
"Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.",
"Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)",
"Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)",
" Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)",
"Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.",
"Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.",
"Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".",
"Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.",
"Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.",
"Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah.",
" Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]",
"Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]",
"Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.",
"Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".",
"Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]",
"Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]",
"35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.", 
"Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]",
"Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)",
"Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]",
"Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]",
"Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]",
"Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]",
"Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]",
"Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]",
" Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]",
"Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.",
"Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan",
"kecemasan, bahkn dpt meningkatkan memori. [Dailymail]",
"Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]",
"Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.",
"Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)",
"Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.",
"Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)",
"Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.",
"Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".",
"59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")",
"60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)",
"Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.",
"Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.",
"Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri.",
" Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)",
"Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.",
"Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.",
"Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.",
"Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan.",
" \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.",
"Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.",
"Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".",
"Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.",
"Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.",
"Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.",
"Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)",
"Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)",
"Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."
]
const fakta = kataf[Math.floor(Math.random() * kataf.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : fakta
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/taugasih', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const taugasih = [
"Tahukah Anda seekor capung bisa terbang dengan kecepatan 40kph (25mph)",
"Tahukah Anda bahwa semua burung hantu bertelur putih?",
"Tahukah Anda bahwa Hawaii secara resmi menjadi bagian dari AS pada 14 Juni 1900",
"Tahukah Anda bahwa rata-rata orang tertawa 10 kali sehari?",
"Tahukah Anda bahwa diameter Jupiter adalah 152.800 km (88.700 mil)",
"Tahukah Anda bahwa warna sikat gigi yang paling populer adalah biru",
"Tahukah Anda bahwa harimau memiliki kulit belang serta bulu",
"Tahukah Anda bahwa ngengat tidak punya perut",
"Tahukah Anda bahwa hamburger ditemukan pada tahun 1900",
"Tahukah Anda bahwa aichmophobia adalah ketakutan akan jarum dan benda runcing",
"Tahukah Anda bahwa kuku jari tangan tumbuh lebih cepat daripada kuku kaki",
"Tahukah Anda kata *hampir* adalah yang terpanjang dalam bahasa Inggris dengan semua huruf dalam urutan abjad",
"Tahukah Anda bahwa iatrofobia adalah ketakutan akan dokter",
"Tahukah Anda bahwa membanting pintu mobil Anda dulunya ilegal di Swiss",
"Tahukah Anda bahwa mamalia terkecil di dunia adalah kelelawar bumblebee dari Thailan",
"Tahukah Anda bahwa singa memberi makan setiap 3 hingga 4 hari sekali",
"Tahukah Anda bahwa cangkangnya 12% dari berat telur",
"Tahukah Anda bahwa landak rata-rata memiliki 30.000 duri",
"Tahukah Anda bahwa jeruk bali mendapatkan namanya dari cara ia tumbuh dalam kelompok seperti anggur di pohon anggur",
"Tahukah Anda bahwa 45% orang menggunakan obat kumur setiap hari",
"Tahukah Anda bahwa umur tupai adalah 9 tahun",
"Tahukah Anda bahwa Anda dapat membedakan jenis kelamin kuda dari giginya (kebanyakan jantan memiliki 40, betina 36)",
"Tahukah Anda 10% dari pasokan makanan dunia dikonsumsi oleh serangga",
"Tahukah kamu awan terbang lebih tinggi di siang hari daripada di malam hari",
"Tahukah Anda bahwa Empire State Building di New York memiliki berat lebih dari 365.000 ton",
"Tahukah Anda Antartika terdiri dari 98% es dan 2% batu tandus",
"Tahukah Anda 90% orang bergantung pada jam alarm untuk bangun",
"Tahukah Anda bahwa kopi adalah minuman paling populer di seluruh dunia dengan lebih dari 400 miliar cangkir dikonsumsi setiap tahun",
"Tahukah Anda bahwa Bumi disambar petir lebih dari 100 kali setiap detik",
"Tahukah Anda bahwa rata-rata orang memiliki 10.000 selera?",
"Tahukah Anda bahwa sel darah merah diproduksi di sumsum tulang?",
"Tahukah Anda bahwa 11% orang kidal",
"Tahukah kamu setiap tahun matahari kehilangan 360 juta ton",
]
const taug = taugasih[Math.floor(Math.random() * taugasih.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : taug
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/kataheker', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]
const katah = heker[Math.floor(Math.random() * heker.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : katah
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/katangawur', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const ngawur = [
"Hargai kedua orang tuamu, mereka berhasil lulus dari sekolah tanpa bantuan Google",
"Seorang laki-laki sukses adalah yang bisa menghasilkan uang lebih dari yang dihabiskan istrinya. Seorang wanita sukses adalah yang bisa mencari laki laki seperti itu.",
"Manusia boleh berencana, tapi saldo juga yang menentukan.",
"Bila Anda jelek, jangan takut mencintai. Karena yang seharusnya takut adalah yang Anda cintai. - Cak Lontong",
"Manusia itu emang susah nyalahin diri sendiri. Leher pegel dibilang salah bantal.",
"Selalu ikuti kata hatimu. Tapi jangan lupa bawa juga otakmu.",
"Motivator dan pembicara tak dapat membuatku rajin bekerja. Hanya cicilan dan tagihan yang mampu.",
"Aku bukan pemalas. Aku sedang menjalankan mode hemat energi.",
"Anak kecil gak punya temen aja nangis, gimana hati kecil ini yang gak punya pasangan.",
"Yang rajin mandi kalah menariknya sama yang rajin senyum.",
"Tidak mengerjakan sesuatu itu sulit. Kamu tidak pernah tahu kapan akan selesai.",
"Menertawakan kesalahan kita bisa memperpanjang hidup kita sendiri. Menertawakan orang lain bisa mempersingkatnya.",
"Saat hidup menutup pintu untukmu, buka lagi saja. Itu hanya pintu, itulah cara kerjanya.",
"Jika ukuran benar-benar penting, gajah sudah lama menjadi raja hutan.",
"Kita belajar dari pengalaman bahwa manusia tidak pernah belajar apa pun dari pengalaman.",
"Hidup adalah seni menggambar tanpa penghapus.",
"Pembenci hanyalah pengagum yang bingung karena mereka tidak tahu alasan mengapa semua orang mencintaimu.",
"Hidup bergerak sangat cepat. Jika kamu tidak berhenti dan melihat-lihat sesekali, kamu bisa melewatkannya.",
"Tidur siang terdengar sangat kekanak-kanakan. Aku lebih suka menyebutnya jeda kehidupan horizontal.",
"Kamu tidak bisa membuat semua orang bahagia. Kamu bukan cokelat.",
"Tertawa bisa jadi obat terbaik. Tapi kalau kamu tertawa tanpa alasan yang jelas, mungkin kamu butuh obat.",
"Kuliah lo ambil apa? Gue sih ambil hikmahnya aja.",
"Bermimpilah sesuka hati tentang apa yang kamu inginkan, sebab itu hanya mimpi.",
"Jika kamu mencoba untuk gagal, dan berhasil, apa yang sudah kamu lakukan? - George Carlin",
"Jangan jadi orang lucu karena ujung-ujungnya cuma enak dijadiin temen.",
"Ya Tuhan jika dia bukan jodohku, tolong hapuskan kata bukan dari hidup ini.",
"Lebih baik pacaran terus kita disakiti, setidaknya kita pernah dibahagiain daripada di PHP-in, belum pacaran aja kita sudah disakitin. - Cak Lontong",
"Terlalu banyak manusia berharap pelukan saat hujan. Aku tak senaif itu, senyummu cukup menghangatkan.",
"Apakah namamu WiFi? Soalnya aku bisa merasakan konektivitas.",
"Wanita sangat rentan mengidap diabetes, sebab dia sering kali menelan janji manis.",
"Meskipun kamu gendut, kamu tetap muat kok masuk di hatiku.",
"Raga kita memang jarang bertemu. Tapi ketahuilah, mimpi ini selalu tentangmu.",
"Aku sudah siap kalau Senin harus bangun pagi, apalagi bangun rumah tangga sama kamu.",
"Cintaku ke kamu tuh kayak utang, awalnya kecil, didiemin tau-tau gede sendiri.",
"Cintaku tidak seperti kopi sachet, instan dan praktis. Tapi, seperti kopi bubuk, penuh perhitungan dan kehati-hatiaan.",
"Madu di tangan kananmu, racun di tangan kirimu, tapi jodoh tetap di tangan Tuhan.",
"Tidak apa-apa jika kamu tidak menyukaiku. Tidak semua orang memiliki selera yang baik.",
"Pepatah bijak berkata tidak akan pernah ada kata terlambat untuk belajar. Berarti belajar mencintai pacar orang juga masih bisa.",
"Jodoh emang gak ke mana tapi saingan di mana mana.",
"Lebih baik ditertawakan karena belum menikah daripada tak bisa tertawa setelah menikah.",
"Hari Minggu itu weekend tapi kalau cinta kita will never end.",
"Matamu itu kayak lampu merah, membuatku berhenti setiap kali melihatnya.",
"Setahu aku, fungsi hati itu sebenarnya ada dua, yang pertama untuk menyimpan mineral di dalam tubuh, yang kedua tentu saja untuk menyimpan cintaku padamu.",
"Kalau naik motor sama kamu pasti ditilang polisi deh. Soalnya kita selalu bertiga, aku, kamu, dan cinta.",
"Katanya cewek suka cowok yang humoris. Tapi buktinya, mereka lebih seneng sama Aliando dibanding Cak Lontong.",
"Jika kamu tidak bisa hidup tanpaku, mengapa kamu belum mati?",
"Jangan kamu mengarungi lautan, percuma. Karena karung lebih cocok untuk beras",
"Jomblo tidak harus malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.",
"Beberapa orang menciptakan kebahagiaan ke mana pun dia pergi, sementara orang yang lain menciptakan kebahagiaan setiap kali dia pergi. - Oscar Wilde",
"Kita hidup pada zaman di mana saat bertanya malah dikatain kepo dan berbuat baik dianggap modus.",
"Mencintai kamu itu wajar, yang tidak wajar mencintai bapakmu.",
"Itu pintu hati atau pintu tol, yang masuk hanya yang bermobil saja.",
"Seandainya jatuh cinta ada tukang parkirnya, bisa diberhentikan sebelum mentok - Raditya Dika",
"Putus cinta itu biasa. Putus rem, nyawa taruhannya.",
"Hati-hati di jalan. Hatinya jangan jalan-jalan. Ingat, ada hati yang lagi dijalani.",
"Kamu tidak akan menemukan pendamping hidup yang tepat jika kamu tinggal di Mars.",
"Kalau disuruh melupakanmu, aku harus ke kantor kelurahan dulu bikin surat keterangan tidak mampu.",
"Tiga hal yang bikin seseorang tidak disukai: otak yang kosong, omong kosong, dan dompet yang kosong.",
"Satu hal yang membuat mata tak bisa terpejam, bagaimana caranya agar aku bisa membuat pacarmu percaya padaku untuk menjagamu.",
"Cinta itu harusnya seperti pelajaran kimia, bukan cuma teori tapi ada praktik juga.",
]
const kataw = ngawur[Math.floor(Math.random() * ngawur.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : kataw
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/katagombal', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const gombal = [
"Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu.",
"Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan.",
"Kamu tu kayak warteg, sederhana namun berkualitas.",
"Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
"Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
"Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk.",
"Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari.",
"Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya.",
"Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu.",
"Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
"Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",
"Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!",
"Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",
"Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu.",
"Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",
"Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu.",
"Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
"Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!",
"Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu.",
"Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu.",
"Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik",
]
const tagka = gombal[Math.floor(Math.random() * gombal.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : tagka
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/kataislam', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const islam = [
'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40',
'Maka sesungguhnya bersama kesulitan itu ada kemudahan.QS Al Insyirah: 5',
'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri. - Q.S. Ar Rad: 11',
'Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. - QS At- Tin: 4',
'Dan Kami jadikan kamu berpasang-pasangan. - QS. An-Naba: 8',
'Maka jangan sekali-kali membiarkan kehidupan dunia ini memperdayakan kamu. - QS. Fatir: 5',
'Dan bersabarlah kamu, sesungguhnya janji Allah adalah benar. - QS. Ar-Rum: 60',
'Dan barang siapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. - Q.S At-Talaq: 4',
'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. - QS. Al-Baqarah: 286',
'Tidakkah dia menyadari bahwa sesungguhnya Allah melihat segala perbuatannya?. - QS. Al-Alaq: 14',
'Bersabarlah wahai hati kelak akan ada seseorang yang datang dan siap menemani sisa hidupmu dalam ketaatan',
'Diri kita sendiri yang bisa menentukan apakah cinta kita berbuah dosa ataukah berbuah pahala',
'Dirimu yang sebenarnya adalah apa yang kamu lakukan di saat di ada orang yang melihatmu',
'Janji Allah tak pernah mengecewakan, dan bila kamu masih meras kecewa mungkin ada yang salah dengan imanmu',
'Rasa syukur tidak akan datang kepada orang yang tidak beriman dan tidak pernah kenyang',
'Maafkan aku andai apa yang aku tulis dan aku share tentang ilmu agama tidak sesuai dengan coberku dan kehidupanku yang asli',
'Kebanyakan manusia lebih senang menyalahkan orang lain daripada menyalahkan diri sendiri',
'Biarlah orang melihat penampilah kita biasa, tetapi luar biasa di mata Allah',
'Bersyukurlah bila dalam penantianmu, kau tetap gigih dalam kesendirian, sebab artinya kau telah memuliakan jalan Allah',
'Malu akan sebuah masalah itu boleh tapi jangan berlebihan sebab jika kita Yakin Pertolongan Allah itu sangatlah nyata',
'Yakinlah bahwa ada doanya yang terus dipanjatkan kepada Allah yang tidak putus-putus dari orang tua kita agar kita senantiasa menjadi anak yang sholeh dan sholehah',
'Setiap hari aku berusaha semaksimal mungkin mencari rizki yang halal demi bisa menghalalkanmu',
'Jatuh cinta bisa jadi sangat menyakitkan jika kita tidak mampu untuk mengendalikannya',
]
const katis = islam[Math.floor(Math.random() * islam.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : katis
       })
   } else {
res.json(loghandler.apikey)
}
})

router.get('/search/katailham', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
const ilhamberkata = [
'Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.'
]
const katail = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
       res.json({
       	status : true,
           creator : `${creator}`,
       	result : katail
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

router.get('/randomgambar/memesticker', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
	let stikerhuuu = [
 "https://telegra.ph/file/fa2bbea0f7de2575cf027.png",//patrick huu
 "https://telegra.ph/file/4a2db7bc9f3f9ecfc007d.png",//anime yntkts
 "https://telegra.ph/file/5f6079714851d9927697e.png",//windah bocil
 "https://telegra.ph/file/d5100b4ce95a0012e88c1.png",//patrick bawa minum
 "https://telegra.ph/file/2ade25087c89f86587853.png",//pak polisi pap tt
 "https://telegra.ph/file/eb2b5e5fff569896c1639.png",//kucing1
 "https://telegra.ph/file/bd8a0e7ea01218531798b.png",//kacamata
 "https://telegra.ph/file/300610838ffa0e6576eb9.png",//patrick pembohong
 "https://telegra.ph/file/954afe562e58c144620ae.png",//spongebob FBI
 "https://telegra.ph/file/72026dcc46e4cb4b6f9ae.png",//mazowski monster inc
 "https://telegra.ph/file/aa9f1bea869e362e6f56e.png",//wkwk
 "https://telegra.ph/file/09bbff0da316ba21b4f8e.png",//kucing2
 "https://telegra.ph/file/2e0637d57e3cc1abcb4a0.png",//patrick anak setan
 "https://telegra.ph/file/d771ae015b5486859d03f.png",//mazowski 2
 "https://telegra.ph/file/9c7606f571c05b4d0c941.png",//hengker
 "https://telegra.ph/file/84fd937257bcd614d6c9e.png",//anjing
 "https://telegra.ph/file/b8ba6989c00c50df049d0.png",//bapak bapak lovee
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//abang saleh
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png"//hengker2
]
       var result = stikerhuuu[Math.floor(Math.random() * stikerhuuu.length)];
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

        router.get('/randomgambar/milf', async (req, res, next) => {
	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
              fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/milf.json`))
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
              fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/husbu.json`))
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
        router.get('/randomgambar/loli', async (req, res, next) => {
	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
              fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/loli.json`))
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
        router.get('/randomgambar/cosplay', async (req, res, next) => {
	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
              fetch(encodeURI(`https://raw.githubusercontent.com/KAYZOKUN12/endak-tau/main/cosplay.json`))
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
        router.get('/randomgambar/waifu', async (req, res, next) => {
        	var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
	        let waif = (await axios.get(`https://waifu.pics/api/sfw/waifu`)).data
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
       searchUser(username) 
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
        .then(data => {
        	var result = data;
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
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
  igstalk(username)
    .then(data => {
    var result = data;
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
    .then(result => {
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
    .then(result => {
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

router.get('/info/kodepos', async (req, res, next) => {
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

router.get('/info/covid-world', async (req, res, next) => {
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

router.get('/info/covid-indonesia', async (req, res, next) => {
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

router.get('/info/kbbi', async (req, res, next) => {
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
	var link = req.query.url
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
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)
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

router.get('/other/cuttly', async (req, res, next) => {
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

router.get('/other/pixnet0rz', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)  
pixnet0rz.short(url, function(url, err) {
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

router.get('/other/isgd', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)
     request(`https://is.gd/create.php?format=simple&url=${url}`, function (error, response, body) {
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

/*router.get('/other/shorturl', async (req, res, next) => {
var apikey = req.query.apikey
var url = req.query.url
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if (!url) return res.json(loghandler.noturl)
var islink = isUrl(url)
if (!islink) return res.json(loghandler.noturl)
	shortUrl.short(url)
	.then(function(result) {
		res.json({
			status: true,
			creator: `${creator}`,
			result : result
			})
	 
	})
	.catch(function(error) {
	 res.json(loghandler.error)
	});
} else {
  res.json(loghandler.apikey)
}
})*/

router.get('/info/fakedata', async (req, res, next) => {
var apikey = req.query.apikey
var country = req.query.country            
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
if(!country) return res.json(loghandler.notcoun)
    fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
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

/*router.get('/info/infoip', async (req, res, next) => {
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
})*/

router.get("/info/cekip", async (req, res) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if (listkey.includes(apikey)){
	fetch(encodeURI("https://api.ipgeolocation.io/ipgeo?apiKey=173ab2a4ae9e4f18a00b630916e9eec5&include=user-agent")) 
   .then(response => response.json())
        .then(data => {
        var result = data;
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

router.get('/info/fakeua', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
let o = [
    "Googlebot/2.1 (+http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Safari/537.36",
    "DoCoMo/2.0 N905i(c100;TB;W24H16) (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)",
    "Nokia6820/2.0 (4.83) Profile/MIDP-1.0 Configuration/CLDC-1.0 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)",
    "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)",
    "Googlebot-Image/1.0",
    "Googlebot-News",
    "Googlebot-Video/1.0",
    "AdsBot-Google (+http://www.google.com/adsbot.html)",
    "AdsBot-Google-Mobile-Apps",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Feedfetcher-Google; (+http://www.google.com/feedfetcher.html; 1 subscribers; feed-id=728742641706423)",
    "Mediapartners-Google",
    "Mozilla/5.0 (compatible; MSIE or Firefox mutant; not on Windows server;) Daumoa/4.0 (Following Mediapartners-Google)",
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 10_0 like Mac OS X; en-us) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1 (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7 (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)",
    "APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)",
    "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 530) like Gecko (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; adidxbot/2.0;  http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; bingbot/2.0;  http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) SitemapProbe",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; adidxbot/2.0;  http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0;  http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (seoanalyzer; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Safari/537.36",
    "Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)",
    "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)",
    "Mozilla/5.0 (compatible; Yahoo! Slurp China; http://misc.yahoo.com.cn/help.html)",
    "WGETbot/1.0 (+http://wget.alanreed.org)",
    "Wget/1.14 (linux-gnu)",
    "Wget/1.20.3 (linux-gnu)",
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/3.1 +http://www.linkedin.com)",
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/4.3 +http://www.linkedin.com)",
    "LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)",
    "Python-urllib/1.17",
    "Python-urllib/2.5",
    "Python-urllib/2.6",
    "Python-urllib/2.7",
    "Python-urllib/3.1",
    "Python-urllib/3.2",
    "Python-urllib/3.3",
    "Python-urllib/3.4",
    "Python-urllib/3.5",
    "Python-urllib/3.6",
    "Python-urllib/3.7",
    "python-requests/2.9.2",
    "python-requests/2.11.1",
    "python-requests/2.18.4",
    "python-requests/2.19.1",
    "python-requests/2.20.0",
    "python-requests/2.21.0",
    "python-requests/2.22.0",
    "Python/3.9 aiohttp/3.7.3",
    "Python/3.8 aiohttp/3.7.2",
    "Python/3.7 aiohttp/3.6.2a2",
    "python-httpx/0.16.1",
    "python-httpx/0.13.0.dev1",
    "2Bone_LinkChecker/1.0 libwww-perl/6.03",
    "2Bone_LinkChkr/1.0 libwww-perl/6.03",
    "amibot - http://www.amidalla.de - tech@amidalla.com libwww-perl/5.831",
    "httpunit/1.x",
    "NutchCVS/0.7.1 (Nutch; http://lucene.apache.org/nutch/bot.html; nutch-agent@lucene.apache.org)",
    "istellabot-nutch/Nutch-1.10",
    "Go-http-client/1.1",
    "Go-http-client/2.0",
    "phpcrawl",
    "adidxbot/1.1 (+http://search.msn.com/msnbot.htm)",
    "adidxbot/2.0 (+http://search.msn.com/msnbot.htm)",
    "librabot/1.0 (+http://search.msn.com/msnbot.htm)",
    "librabot/2.0 (+http://search.msn.com/msnbot.htm)",
    "msnbot-NewsBlogs/2.0b (+http://search.msn.com/msnbot.htm)",
    "msnbot-UDiscovery/2.0b (+http://search.msn.com/msnbot.htm)",
    "msnbot-media/1.0 (+http://search.msn.com/msnbot.htm)",
    "msnbot-media/1.1 (+http://search.msn.com/msnbot.htm)",
    "msnbot-media/2.0b (+http://search.msn.com/msnbot.htm)",
    "msnbot/1.0 (+http://search.msn.com/msnbot.htm)",
    "msnbot/1.1 (+http://search.msn.com/msnbot.htm)",
    "msnbot/2.0b (+http://search.msn.com/msnbot.htm)",
    "msnbot/2.0b (+http://search.msn.com/msnbot.htm).",
    "msnbot/2.0b (+http://search.msn.com/msnbot.htm)._",
    "FAST-WebCrawler/3.6/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)",
    "FAST-WebCrawler/3.7 (atw-crawler at fast dot no; http://fast.no/support/crawler.asp)",
    "FAST-WebCrawler/3.7/FirstPage (atw-crawler at fast dot no;http://fast.no/support/crawler.asp)",
    "FAST-WebCrawler/3.8",
    "FAST Enterprise Crawler 6 / Scirus scirus-crawler@fast.no; http://www.scirus.com/srsapp/contactus/",
    "FAST Enterprise Crawler 6 used by Schibsted (webcrawl@schibstedsok.no)",
    "BIGLOTRON (Beta 2;GNU/Linux)",
    "Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://sp.ask.com/docs/about/tech_crawling.html)",
    "Mozilla/2.0 (compatible; Ask Jeeves/Teoma; +http://about.ask.com/en/docs/about/webmasters.shtml)",
    "ConveraCrawler/0.9e (+http://ews.converasearch.com/crawl.htm)",
    "Seekbot/1.0 (http://www.seekbot.net/bot.html) RobotsTxtFetcher/1.2",
    "Gigabot/1.0",
    "Gigabot/2.0 (http://www.gigablast.com/spider.html)",
    "GigablastOpenSource/1.0",
    "Mozilla/5.0 (compatible; Alexabot/1.0; +http://www.alexa.com/help/certifyscan; certifyscan@alexa.com)",
    "Mozilla/5.0 (compatible; Exabot PyExalead/3.0; +http://www.exabot.com/go/robot)",
    "Mozilla/5.0 (compatible; Exabot-Images/3.0; +http://www.exabot.com/go/robot)",
    "Mozilla/5.0 (compatible; Exabot/3.0 (BiggerBetter); +http://www.exabot.com/go/robot)",
    "Mozilla/5.0 (compatible; Exabot/3.0; +http://www.exabot.com/go/robot)",
    "Mozilla/5.0 (compatible; Exabot/3.0;  http://www.exabot.com/go/robot)",
    "ia_archiver (+http://www.alexa.com/site/help/webmasters; crawler@alexa.com)",
    "ia_archiver-web.archive.org",
    "GingerCrawler/1.0 (Language Assistant for Dyslexics; www.gingersoftware.com/crawler_agent.htm; support at ginger software dot com)",
    "Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)",
    "Mozilla/4.0 (compatible; grub-client-0.3.0; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.0.4; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.0.5; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.0.6; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.0.7; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.1.1; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.2.1; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.3.1; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.3.7; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.4.3; Crawl your own stuff with http://grub.org)",
    "Mozilla/4.0 (compatible; grub-client-1.5.3; Crawl your own stuff with http://grub.org)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider for SpeedyAds (http://www.entireweb.com/about/search_tech/speedy_spider/)",
    "Mozilla/5.0 (compatible; Speedy Spider; http://www.entireweb.com/about/search_tech/speedy_spider/)",
    "Speedy Spider (Entireweb; Beta/1.2; http://www.entireweb.com/about/search_tech/speedyspider/)",
    "Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)",
    "findlinks/1.0 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.3-beta8 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.3-beta9 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.5-beta7 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta1 (+http://wortschatz.uni-leipzig.de/findlinks/; YaCy 0.1; yacy.net)",
    "findlinks/1.1.6-beta2 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta3 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta4 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta5 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/1.1.6-beta6 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0.1 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0.2 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0.4 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0.5 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.0.9 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.1 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.1.3 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.1.5 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.2 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.5 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "findlinks/2.6 (+http://wortschatz.uni-leipzig.de/findlinks/)",
    "panscient.com",
    "yacybot (/global; amd64 FreeBSD 10.3-RELEASE; java 1.8.0_77; GMT/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 FreeBSD 10.3-RELEASE-p7; java 1.7.0_95; GMT/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 FreeBSD 9.2-RELEASE-p10; java 1.7.0_65; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 2.6.32-042stab093.4; java 1.7.0_65; Etc/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 2.6.32-042stab094.8; java 1.7.0_79; America/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 2.6.32-042stab108.8; java 1.7.0_91; America/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 2.6.32-042stab111.11; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 2.6.32-042stab116.1; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 2.6.32-573.3.1.el6.x86_64; java 1.7.0_85; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.10.0-229.4.2.el7.x86_64; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.10.0-229.4.2.el7.x86_64; java 1.8.0_45; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.10.0-229.7.2.el7.x86_64; java 1.8.0_45; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.10.0-327.22.2.el7.x86_64; java 1.7.0_101; Etc/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.11.10-21-desktop; java 1.7.0_51; America/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.12.1; java 1.7.0_65; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-042stab093.4; java 1.7.0_79; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-042stab093.4; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-45-generic; java 1.7.0_75; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.13.0-61-generic; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-74-generic; java 1.7.0_91; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-83-generic; java 1.7.0_95; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-83-generic; java 1.7.0_95; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-85-generic; java 1.7.0_101; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-85-generic; java 1.7.0_95; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.13.0-88-generic; java 1.7.0_101; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.14-0.bpo.1-amd64; java 1.7.0_55; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.14.32-xxxx-grs-ipv6-64; java 1.7.0_75; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.14.32-xxxx-grs-ipv6-64; java 1.8.0_111; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_111; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_75; America/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_75; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_75; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_79; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_79; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_91; Europe/de) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.7.0_95; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16.0-4-amd64; java 1.8.0_111; Europe/en) http://yacy.net/bot.html",
    "yacybot (/global; amd64 Linux 3.16-0.bpo.2-amd64; java 1.7.0_65; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.19.0-15-generic; java 1.8.0_45-internal; Europe/de) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.2.0-4-amd64; java 1.7.0_65; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 3.2.0-4-amd64; java 1.7.0_67; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 4.4.0-57-generic; java 9-internal; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Windows 8.1 6.3; java 1.7.0_55; Europe/de) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Windows 8 6.2; java 1.7.0_55; Europe/de) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 5.2.8-Jinsol; java 12.0.2; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 5.2.9-Jinsol; java 12.0.2; Europe/en) http://yacy.net/bot.html",
    "yacybot (-global; amd64 Linux 5.2.11-Jinsol; java 12.0.2; Europe/en) http://yacy.net/bot.html",
    "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 ips-agent",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12; ips-agent) Gecko/20050922 Fedora/1.0.7-1.1.fc4 Firefox/1.0.7",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.3; ips-agent) Gecko/20090824 Fedora/1.0.7-1.1.fc4  Firefox/3.5.3",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.24; ips-agent) Gecko/20111107 Ubuntu/10.04 (lucid) Firefox/3.6.24",
    "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:14.0; ips-agent) Gecko/20100101 Firefox/14.0.1",
    "MJ12bot/v1.2.0 (http://majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.2.1; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.2.3; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.2.4; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.2.5; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.3.0; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.3.1; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.3.2; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.3.3; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.0; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.1; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.2; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.3; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.4 (domain ownership verifier); http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.4; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.5; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.6; http://mj12bot.com/)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.7; http://mj12bot.com/)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.7; http://www.majestic12.co.uk/bot.php?+)",
    "Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)",
    "Mozilla/5.0 (compatible; woriobot +http://worio.com)",
    "Mozilla/5.0 (compatible; woriobot support [at] zite [dot] com +http://zite.com)",
    "Yanga WorldSearch Bot v1.1/beta (http://www.yanga.co.uk/)",
    "Buzzbot/1.0 (Buzzbot; http://www.buzzstream.com; buzzbot@buzzstream.com)",
    "MLBot (www.metadatalabs.com/mlbot)",
    "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexBot/3.0; MirrorDetector; +http://yandex.com/bots)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexImages/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4 (compatible; YandexMobileBot/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMetrika/2.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMetrika/2.0; +http://yandex.com/bots yabs01)",
    "Mozilla/5.0 (compatible; YandexMetrika/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMetrika/4.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexTurbo/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexImageResizer/2.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexVideoParser/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexVideo/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexAdNet/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexBlogs/0.99; robot; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexCalendar/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexDirect/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexDirectDyn/1.0; +http://yandex.com/bots",
    "Mozilla/5.0 (compatible; YandexFavicons/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YaDirectFetcher/1.0; Dyatel; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexForDomain/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMarket/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMarket/2.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMedia/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexMobileScreenShotBot/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexNews/4.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexOntoDB/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexOntoDBAPI/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexPagechecker/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexPartner/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexRCA/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexSearchShop/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexSitelinks; Dyatel; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexSpravBot/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexTracker/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexVertis/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexVerticals/1.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; YandexWebmaster/2.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36 (compatible; YandexScreenshotBot/3.0; +http://yandex.com/bots)",
    "Linguee Bot (http://www.linguee.com/bot)",
    "Linguee Bot (http://www.linguee.com/bot; bot@linguee.com)",
    "CyberPatrol SiteCat Webbot (http://www.cyberpatrol.com/cyberpatrolcrawler.asp)",
    "Mozilla/5.0 (Windows NT 5.1; U; Win64; fr; rv:1.8.1) VoilaBot BETA 1.2 (support.voilabot@orange-ftgroup.com)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.8.1) VoilaBot BETA 1.2 (support.voilabot@orange-ftgroup.com)",
    "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)",
    "Mozilla/5.0 (compatible; Baiduspider-render/2.0; +http://www.baidu.com/search/spider.html)",
    "Mozilla/5.0 (compatible; spbot/1.0; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/1.1; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/1.2; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/2.0.1; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/2.0.2; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/2.0.3; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/2.0.4; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/2.0; +http://www.seoprofiler.com/bot/ )",
    "Mozilla/5.0 (compatible; spbot/2.1; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/3.0; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/3.1; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.1; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.2; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.3; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.4; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.5; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.6; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.7; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.7; +https://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.8; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0.9; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0a; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.0b; +http://www.seoprofiler.com/bot )",
    "Mozilla/5.0 (compatible; spbot/4.1.0; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.2.0; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.3.0; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.4.0; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.4.1; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/4.4.2; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/5.0.1; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/5.0.2; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/5.0.3; +http://OpenLinkProfiler.org/bot )",
    "Mozilla/5.0 (compatible; spbot/5.0; +http://OpenLinkProfiler.org/bot )",
    "PostRank/2.0 (postrank.com)",
    "PostRank/2.0 (postrank.com; 1 subscribers)",
    "TurnitinBot (https://turnitin.com/robot/crawlerinfo.html)",
    "Mozilla/5.0 (compatible;  Page2RSS/0.7; +http://page2rss.com/)",
    "Mozilla/5.0 (compatible; Whoiswebsitebot/0.1; +http://www.whoiswebsite.net)",
    "Mozilla/5.0 (compatible; linkdexbot/2.0; +http://www.linkdex.com/about/bots/)",
    "Mozilla/5.0 (compatible; linkdexbot/2.0; +http://www.linkdex.com/bots/)",
    "Mozilla/5.0 (compatible; linkdexbot/2.1; +http://www.linkdex.com/about/bots/)",
    "Mozilla/5.0 (compatible; linkdexbot/2.1; +http://www.linkdex.com/bots/)",
    "Mozilla/5.0 (compatible; linkdexbot/2.2; +http://www.linkdex.com/bots/)",
    "linkdex.com/v2.0",
    "linkdexbot/Nutch-1.0-dev (http://www.linkdex.com/; crawl at linkdex dot com)",
    "Mozilla/5.0 (compatible; Ezooms/1.0; ezooms.bot@gmail.com)",
    "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)",
    "dotbot",
    "Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/2.0; +http://go.mail.ru/help/robots)",
    "Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/2.0; +http://go.mail.ru/",
    "Mozilla/5.0 (compatible; Mail.RU_Bot/2.0; +http://go.mail.ru/",
    "Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/Robots/2.0; +http://go.mail.ru/help/robots)",
    "Mozilla/5.0 (compatible; discobot/1.0; +http://discoveryengine.com/discobot.html)",
    "Mozilla/5.0 (compatible; discobot/2.0; +http://discoveryengine.com/discobot.html)",
    "mozilla/5.0 (compatible; discobot/1.1; +http://discoveryengine.com/discobot.html)",
    "Mozilla/5.0 (compatible; heritrix/1.12.1 +http://www.webarchiv.cz)",
    "Mozilla/5.0 (compatible; heritrix/1.12.1b +http://netarkivet.dk/website/info.html)",
    "Mozilla/5.0 (compatible; heritrix/1.14.2 +http://rjpower.org)",
    "Mozilla/5.0 (compatible; heritrix/1.14.2 +http://www.webarchiv.cz)",
    "Mozilla/5.0 (compatible; heritrix/1.14.3 +http://archive.org)",
    "Mozilla/5.0 (compatible; heritrix/1.14.3 +http://www.accelobot.com)",
    "Mozilla/5.0 (compatible; heritrix/1.14.3 +http://www.webarchiv.cz)",
    "Mozilla/5.0 (compatible; heritrix/1.14.3.r6601 +http://www.buddybuzz.net/yptrino)",
    "Mozilla/5.0 (compatible; heritrix/1.14.4 +http://parsijoo.ir)",
    "Mozilla/5.0 (compatible; heritrix/1.14.4 +http://www.exif-search.com)",
    "Mozilla/5.0 (compatible; heritrix/2.0.2 +http://aihit.com)",
    "Mozilla/5.0 (compatible; heritrix/2.0.2 +http://seekda.com)",
    "Mozilla/5.0 (compatible; heritrix/3.0.0-SNAPSHOT-20091120.021634 +http://crawler.archive.org)",
    "Mozilla/5.0 (compatible; heritrix/3.1.0-RC1 +http://boston.lti.cs.cmu.edu/crawler_12/)",
    "Mozilla/5.0 (compatible; heritrix/3.1.1 +http://places.tomtom.com/crawlerinfo)",
    "Mozilla/5.0 (compatible; heritrix/3.1.1 +http://www.mixdata.com)",
    "Mozilla/5.0 (compatible; heritrix/3.1.1; UniLeipzigASV +http://corpora.informatik.uni-leipzig.de/crawler_faq.html)",
    "Mozilla/5.0 (compatible; heritrix/3.2.0 +http://www.crim.ca)",
    "Mozilla/5.0 (compatible; heritrix/3.2.0 +http://www.exif-search.com)",
    "Mozilla/5.0 (compatible; heritrix/3.2.0 +http://www.mixdata.com)",
    "Mozilla/5.0 (compatible; heritrix/3.3.0-SNAPSHOT-20160309-0050; UniLeipzigASV +http://corpora.informatik.uni-leipzig.de/crawler_faq.html)",
    "Mozilla/5.0 (compatible; sukibot_heritrix/3.1.1 +http://suki.ling.helsinki.fi/eng/webmasters.html)",
    "Mozilla/5.0 (compatible; MSIE 7.0 +http://www.europarchive.org)",
    "Mozilla/5.0 (compatible; NerdByNature.Bot; http://www.nerdbynature.net/bot)",
    "Mozilla/5.0 (compatible; AhrefsBot/6.1; +http://ahrefs.com/robot/)",
    "Mozilla/5.0 (compatible; AhrefsSiteAudit/6.1; +http://ahrefs.com/robot/)",
    "Mozilla/5.0 (compatible; AhrefsBot/5.2; News; +http://ahrefs.com/robot/)",
    "Mozilla/5.0 (compatible; AhrefsBot/5.2; +http://ahrefs.com/robot/)",
    "Mozilla/5.0 (compatible; AhrefsSiteAudit/5.2; +http://ahrefs.com/robot/)",
    "Mozilla/5.0 (compatible; AhrefsBot/6.1; News; +http://ahrefs.com/robot/)",
    "fuelbot",
    "CrunchBot/1.0 (+http://www.leadcrunch.com/crunchbot)",
    "Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0 (IndeedBot 1.1)",
    "Mozilla/5.0 (compatible; Mappy/1.0; +http://mappydata.net/bot/)",
    "woobot",
    "ZoominfoBot (zoominfobot at zoominfo dot com)",
    "Mozilla/5.0 (compatible; PrivacyAwareBot/1.1; +http://www.privacyaware.org)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Multiviewbot",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36 SWIMGBot",
    "Mozilla/5.0 (compatible; Grobbot/2.2; +https://grob.it)",
    "Mozilla/5.0 (compatible; eright/1.0; +bot@eright.com)",
    "Mozilla/5.0 (compatible; Apercite; +http://www.apercite.fr/robot/index.html)",
    "semanticbot",
    "semanticbot (info@semanticaudience.com)",
    "Aboundex/0.2 (http://www.aboundex.com/crawler/)",
    "Aboundex/0.3 (http://www.aboundex.com/crawler/)",
    "CipaCrawler/3.0 (info@domaincrawler.com; http://www.domaincrawler.com/www.example.com)",
    "Summify (Summify/1.0.1; +http://summify.com)",
    "CCBot/2.0 (http://commoncrawl.org/faq/)",
    "CCBot/2.0 (https://commoncrawl.org/faq/)",
    "Mozilla/5.0 (compatible; SeznamBot/3.2-test1-1; +http://napoveda.seznam.cz/en/seznambot-intro/)",
    "Mozilla/5.0 (compatible; SeznamBot/3.2-test1; +http://napoveda.seznam.cz/en/seznambot-intro/)",
    "Mozilla/5.0 (compatible; SeznamBot/3.2-test2; +http://napoveda.seznam.cz/en/seznambot-intro/)",
    "Mozilla/5.0 (compatible; SeznamBot/3.2-test4; +http://napoveda.seznam.cz/en/seznambot-intro/)",
    "Mozilla/5.0 (compatible; SeznamBot/3.2; +http://napoveda.seznam.cz/en/seznambot-intro/)",
    "ec2linkfinder",
    "Mozilla/5.0 (compatible; aiHitBot/2.9; +https://www.aihitdata.com/about)",
    "facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)",
    "facebookexternalhit/1.1",
    "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
    "Mozilla/5.0 (compatible; Yeti/1.1; +http://naver.me/bot)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; RetrevoPageAnalyzer; +http://www.retrevo.com/content/about-us)",
    "Sogou News Spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)",
    "Sogou Pic Spider/3.0(+http://www.sogou.com/docs/help/webmasters.htm#07)",
    "Sogou web spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)",
    "Wotbox/2.0 (bot@wotbox.com; http://www.wotbox.com)",
    "Wotbox/2.01 (+http://www.wotbox.com/bot/)",
    "DoCoMo/2.0 P900i(c100;TB;W24H11) (compatible; ichiro/mobile goo; +http://help.goo.ne.jp/help/article/1142/)",
    "DoCoMo/2.0 P900i(c100;TB;W24H11) (compatible; ichiro/mobile goo; +http://search.goo.ne.jp/option/use/sub4/sub4-1/)",
    "DoCoMo/2.0 P900i(c100;TB;W24H11) (compatible; ichiro/mobile goo;+http://search.goo.ne.jp/option/use/sub4/sub4-1/)",
    "DoCoMo/2.0 P900i(c100;TB;W24H11)(compatible; ichiro/mobile goo;+http://help.goo.ne.jp/door/crawler.html)",
    "DoCoMo/2.0 P901i(c100;TB;W24H11) (compatible; ichiro/mobile goo; +http://help.goo.ne.jp/door/crawler.html)",
    "KDDI-CA31 UP.Browser/6.2.0.7.3.129 (GUI) MMP/2.0 (compatible; ichiro/mobile goo; +http://help.goo.ne.jp/help/article/1142/)",
    "KDDI-CA31 UP.Browser/6.2.0.7.3.129 (GUI) MMP/2.0 (compatible; ichiro/mobile goo; +http://search.goo.ne.jp/option/use/sub4/sub4-1/)",
    "KDDI-CA31 UP.Browser/6.2.0.7.3.129 (GUI) MMP/2.0 (compatible; ichiro/mobile goo;+http://search.goo.ne.jp/option/use/sub4/sub4-1/)",
    "ichiro/2.0 (http://help.goo.ne.jp/door/crawler.html)",
    "ichiro/2.0 (ichiro@nttr.co.jp)",
    "ichiro/3.0 (http://help.goo.ne.jp/door/crawler.html)",
    "ichiro/3.0 (http://help.goo.ne.jp/help/article/1142)",
    "ichiro/3.0 (http://search.goo.ne.jp/option/use/sub4/sub4-1/)",
    "ichiro/4.0 (http://help.goo.ne.jp/door/crawler.html)",
    "ichiro/5.0 (http://help.goo.ne.jp/door/crawler.html)",
    "DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)",
    "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)",
    "Mozilla/5.0 (compatible; DuckDuckBot-Https/1.1; https://duckduckgo.com/duckduckbot)",
    "'Mozilla/5.0 (compatible; DuckDuckBot-Https/1.1; https://duckduckgo.com/duckduckbot)'",
    "drupact/0.7; http://www.arocom.de/drupact",
    "Mozilla/5.0 (compatible; coccoc/1.0; +http://help.coccoc.com/)",
    "Mozilla/5.0 (compatible; coccoc/1.0; +http://help.coccoc.com/searchengine)",
    "Mozilla/5.0 (compatible; coccocbot-image/1.0; +http://help.coccoc.com/searchengine)",
    "Mozilla/5.0 (compatible; coccocbot-web/1.0; +http://help.coccoc.com/searchengine)",
    "Mozilla/5.0 (compatible; image.coccoc/1.0; +http://help.coccoc.com/)",
    "Mozilla/5.0 (compatible; imagecoccoc/1.0; +http://help.coccoc.com/)",
    "Mozilla/5.0 (compatible; imagecoccoc/1.0; +http://help.coccoc.com/searchengine)",
    "coccoc",
    "coccoc/1.0 ()",
    "coccoc/1.0 (http://help.coccoc.com/)",
    "coccoc/1.0 (http://help.coccoc.vn/)",
    "www.integromedb.org/Crawler",
    "it2media-domain-crawler/1.0 on crawler-prod.it2media.de",
    "it2media-domain-crawler/2.0",
    "Mozilla/5.0 (compatible; SiteExplorer/1.0b; +http://siteexplorer.info/)",
    "Mozilla/5.0 (compatible; SiteExplorer/1.1b; +http://siteexplorer.info/Backlink-Checker-Spider/)",
    "Mozilla/5.0 (compatible; proximic; +http://www.proximic.com)",
    "Mozilla/5.0 (compatible; proximic; +http://www.proximic.com/info/spider.php)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1;  http://www.changedetection.com/bot.html )",
    "WeSEE:Search",
    "WeSEE:Search/0.1 (Alpha, http://www.wesee.com/en/support/bot/)",
    "Mozilla/5.0 (compatible; rogerBot/1.0; UrlCrawler; http://www.seomoz.org/dp/rogerbot)",
    "rogerbot/1.0 (http://moz.com/help/pro/what-is-rogerbot-, rogerbot-crawler+partager@moz.com)",
    "rogerbot/1.0 (http://moz.com/help/pro/what-is-rogerbot-, rogerbot-crawler+shiny@moz.com)",
    "rogerbot/1.0 (http://moz.com/help/pro/what-is-rogerbot-, rogerbot-wherecat@moz.com",
    "rogerbot/1.0 (http://moz.com/help/pro/what-is-rogerbot-, rogerbot-wherecat@moz.com)",
    "rogerbot/1.0 (http://www.moz.com/dp/rogerbot, rogerbot-crawler@moz.com)",
    "rogerbot/1.0 (http://www.seomoz.org/dp/rogerbot, rogerbot-crawler+shiny@seomoz.org)",
    "rogerbot/1.0 (http://www.seomoz.org/dp/rogerbot, rogerbot-crawler@seomoz.org)",
    "rogerbot/1.0 (http://www.seomoz.org/dp/rogerbot, rogerbot-wherecat@moz.com)",
    "rogerbot/1.1 (http://moz.com/help/guides/search-overview/crawl-diagnostics#more-help, rogerbot-crawler+pr2-crawler-05@moz.com)",
    "rogerbot/1.1 (http://moz.com/help/guides/search-overview/crawl-diagnostics#more-help, rogerbot-crawler+pr4-crawler-11@moz.com)",
    "rogerbot/1.1 (http://moz.com/help/guides/search-overview/crawl-diagnostics#more-help, rogerbot-crawler+pr4-crawler-15@moz.com)",
    "rogerbot/1.2 (http://moz.com/help/pro/what-is-rogerbot-, rogerbot-crawler+phaser-testing-crawler-01@moz.com)",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1; 360Spider",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1; 360Spider(compatible; HaosouSpider; http://www.haosou.com/help/help_3_2.html)",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 QIHU 360SE; 360Spider",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; )  Firefox/1.5.0.11; 360Spider",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.0.11)  Firefox/1.5.0.11; 360Spider",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.0.11) Firefox/1.5.0.11 360Spider;",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.0.11) Gecko/20070312 Firefox/1.5.0.11; 360Spider",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0); 360Spider",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0); 360Spider(compatible; HaosouSpider; http://www.haosou.com/help/help_3_2.html)",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36; 360Spider",
    "psbot-image (+http://www.picsearch.com/bot.html)",
    "psbot-page (+http://www.picsearch.com/bot.html)",
    "psbot/0.1 (+http://www.picsearch.com/bot.html)",
    "CC Metadata Scaper http://wiki.creativecommons.org/Metadata_Scraper",
    "Mozilla/5.0 (compatible; GrapeshotCrawler/2.0; +http://www.grapeshot.co.uk/crawler.php)",
    "Mozilla/5.0 (compatible; URLAppendBot/1.0; +http://www.profound.net/urlappendbot.html)",
    "Mozilla/5.0 (compatible; fr-crawler/1.1)",
    "binlar_2.6.3 binlar2.6.3@unspecified.mail",
    "binlar_2.6.3 binlar_2.6.3@unspecified.mail",
    "binlar_2.6.3 larbin2.6.3@unspecified.mail",
    "binlar_2.6.3 phanendra_kalapala@McAfee.com",
    "binlar_2.6.3 test@mgmt.mic",
    "SimpleCrawler/0.1",
    "Twitterbot/0.1",
    "Twitterbot/1.0",
    "cXensebot/1.1a",
    "Mozilla/5.0 (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)",
    "SMTBot (similartech.com/smtbot)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko)                 Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36 (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36 (compatible; SMTBot/1.0; http://www.similartech.com/smtbot)",
    "Mozilla/5.0 (compatible; bnf.fr_bot; +http://bibnum.bnf.fr/robot/bnf.html)",
    "Mozilla/5.0 (compatible; bnf.fr_bot; +http://www.bnf.fr/fr/outils/a.dl_web_capture_robot.html)",
    "A6-Indexer",
    "ADmantX Platform Semantic Analyzer - ADmantX Inc. - www.admantx.com - support@admantx.com",
    "Facebot/1.0",
    "Mozilla/5.0 (compatible; OrangeBot/2.0; support.orangebot@orange.com",
    "Mozilla/5.0 (compatible; memorybot/1.21.14 +http://mignify.com/bot.html)",
    "Mozilla/5.0 (compatible; AdvBot/2.0; +http://advbot.net/bot.html)",
    "Mozilla/5.0 (compatible; MegaIndex.ru/2.0; +https://www.megaindex.ru/?tab=linkAnalyze)",
    "Mozilla/5.0 (compatible; MegaIndex.ru/2.0; +http://megaindex.com/crawler)",
    "SemanticScholarBot/1.0 (+http://s2.allenai.org/bot.html)",
    "Mozilla/5.0 (compatible) SemanticScholarBot (+https://www.semanticscholar.org/crawler)",
    "ltx71 - (http://ltx71.com/)",
    "nerdybot",
    "Mozilla/5.0 (compatible; XoviBot/2.0; +http://www.xovibot.net/)",
    "BUbiNG (+http://law.di.unimi.it/BUbiNG.html)",
    "Mozilla/5.0 (compatible; Qwantify/2.0n; +https://www.qwant.com/)/*",
    "Mozilla/5.0 (compatible; Qwantify/2.4w; +https://www.qwant.com/)/2.4w",
    "Mozilla/5.0 (compatible; Qwantify/Bleriot/1.1; +https://help.qwant.com/bot)",
    "Mozilla/5.0 (compatible; Qwantify/Bleriot/1.2.1; +https://help.qwant.com/bot)",
    "Mozilla/5.0 (compatible; heritrix/3.1.1-SNAPSHOT-20120116.200628 +http://www.archive.org/details/archive.org_bot)",
    "Mozilla/5.0 (compatible; archive.org_bot/heritrix-1.15.4 +http://www.archive.org)",
    "Mozilla/5.0 (compatible; heritrix/3.3.0-SNAPSHOT-20140702-2247 +http://archive.org/details/archive.org_bot)",
    "Mozilla/5.0 (compatible; archive.org_bot +http://www.archive.org/details/archive.org_bot)",
    "Mozilla/5.0 (compatible; archive.org_bot +http://archive.org/details/archive.org_bot)",
    "Mozilla/5.0 (compatible; special_archiver/3.1.1 +http://www.archive.org/details/archive.org_bot)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1; +http://www.apple.com/go/applebot)",
    "Mozilla/5.0 (compatible; Applebot/0.3; +http://www.apple.com/go/applebot)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Applebot/0.3; +http://www.apple.com/go/applebot)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4 (Applebot/0.1; +http://www.apple.com/go/applebot)",
    "Mozilla/5.0 (TweetmemeBot/4.0; +http://datasift.com/bot.html) Gecko/20100101 Firefox/31.0",
    "crawler4j (http://code.google.com/p/crawler4j/)",
    "crawler4j (https://github.com/yasserg/crawler4j/)",
    "Mozilla/5.0 (compatible; Findxbot/1.0; +http://www.findxbot.com)",
    "Mozilla/5.0 (compatible; SemrushBot-SA/0.97; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (compatible; SemrushBot-SI/0.97; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (compatible; SemrushBot/3~bl; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (compatible; SemrushBot/0.98~bl; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (compatible; SemrushBot-BA; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (compatible; SemrushBot/6~bl; +http://www.semrush.com/bot.html)",
    "SEMrushBot",
    "Mozilla/5.0 (compatible; yoozBot-2.2; http://yooz.ir; info@yooz.ir)",
    "Mozilla/5.0 (compatible; Lipperhey Link Explorer; http://www.lipperhey.com/)",
    "Mozilla/5.0 (compatible; Lipperhey SEO Service; http://www.lipperhey.com/)",
    "Mozilla/5.0 (compatible; Lipperhey Site Explorer; http://www.lipperhey.com/)",
    "Mozilla/5.0 (compatible; Lipperhey-Kaus-Australis/5.0; +https://www.lipperhey.com/en/about/)",
    "Y!J-ASR/0.1 crawler (http://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/)",
    "Y!J-BRJ/YATS crawler (http://help.yahoo.co.jp/help/jp/search/indexing/indexing-15.html)",
    "Y!J-PSC/1.0 crawler (http://help.yahoo.co.jp/help/jp/search/indexing/indexing-15.html)",
    "Y!J-BRW/1.0 crawler (http://help.yahoo.co.jp/help/jp/search/indexing/indexing-15.html)",
    "Mozilla/5.0 (iPhone; Y!J-BRY/YATSH crawler; http://help.yahoo.co.jp/help/jp/search/indexing/indexing-15.html)",
    "Mozilla/5.0 (compatible; Y!J SearchMonkey/1.0 (Y!J-AGENT; http://help.yahoo.co.jp/help/jp/search/indexing/indexing-15.html))",
    "Domain Re-Animator Bot (http://domainreanimator.com) - support@domainreanimator.com",
    "AddThis.com robot tech.support@clearspring.com",
    "Screaming Frog SEO Spider/5.1",
    "MetaURI API/2.0 +metauri.com",
    "Scrapy/1.0.3 (+http://scrapy.org)",
    "LivelapBot/0.2 (http://site.livelap.com/crawler)",
    "Livelapbot/0.1",
    "Mozilla/5.0 (compatible; OpenHoseBot/2.1; +http://www.openhose.org/bot.html)",
    "CapsuleChecker (http://www.capsulink.com/)",
    "Mozilla/5.0 (compatible) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 collection@infegy.com",
    "Mozilla/5.0 (compatible; IstellaBot/1.23.15 +http://www.tiscali.it/)",
    "Mozilla/5.0 (compatible; DeuSu/0.1.0; +https://deusu.org)",
    "Mozilla/5.0 (compatible; DeuSu/5.0.2; +https://deusu.de/robot.html)",
    "Mozilla/5.0 (compatible; Cliqzbot/2.0; +http://cliqz.com/company/cliqzbot)",
    "Cliqzbot/0.1 (+http://cliqz.com +cliqzbot@cliqz.com)",
    "Cliqzbot/0.1 (+http://cliqz.com/company/cliqzbot)",
    "Mozilla/5.0 (compatible; Cliqzbot/0.1 +http://cliqz.com/company/cliqzbot)",
    "Mozilla/5.0 (compatible; Cliqzbot/1.0 +http://cliqz.com/company/cliqzbot)",
    "MojeekBot/0.2 (archi; http://www.mojeek.com/bot.html)",
    "Mozilla/5.0 (compatible; MojeekBot/0.2; http://www.mojeek.com/bot.html#relaunch)",
    "Mozilla/5.0 (compatible; MojeekBot/0.2; http://www.mojeek.com/bot.html)",
    "Mozilla/5.0 (compatible; MojeekBot/0.5; http://www.mojeek.com/bot.html)",
    "Mozilla/5.0 (compatible; MojeekBot/0.6; +https://www.mojeek.com/bot.html)",
    "Mozilla/5.0 (compatible; MojeekBot/0.6; http://www.mojeek.com/bot.html)",
    "netEstate NE Crawler (+http://www.sengine.info/)",
    "netEstate NE Crawler (+http://www.website-datenbank.de/)",
    "SafeSearch microdata crawler (https://safesearch.avira.com, safesearch-abuse@avira.com)",
    "Mozilla/5.0 (compatible; Gluten Free Crawler/1.0; +http://glutenfreepleasure.com/)",
    "Mozilla/5.0 (compatible; RankSonicSiteAuditor/1.0; +https://ranksonic.com/ranksonic_sab.html)",
    "Mozilla/5.0 (compatible; Sonic/1.0; http://www.yama.info.waseda.ac.jp/~crawler/info.html)",
    "Mozzila/5.0 (compatible; Sonic/1.0; http://www.yama.info.waseda.ac.jp/~crawler/info.html)",
    "Mozilla/5.0 (compatible; Sysomos/1.0; +http://www.sysomos.com/; Sysomos)",
    "www.deadlinkchecker.com Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36",
    "www.deadlinkchecker.com XMLHTTP/1.0",
    "www.deadlinkchecker.com XMLHTTP/1.0 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36",
    "Slack-ImgProxy (+https://api.slack.com/robots)",
    "Slack-ImgProxy 0.59 (+https://api.slack.com/robots)",
    "Slack-ImgProxy 0.66 (+https://api.slack.com/robots)",
    "Slack-ImgProxy 1.106 (+https://api.slack.com/robots)",
    "Slack-ImgProxy 1.138 (+https://api.slack.com/robots)",
    "Slack-ImgProxy 149 (+https://api.slack.com/robots)",
    "Embedly +support@embed.ly",
    "Mozilla/5.0 (compatible; Embedly/0.2; +http://support.embed.ly/)",
    "Mozilla/5.0 (compatible; Embedly/0.2; snap; +http://support.embed.ly/)",
    "Mozilla/5.0 (compatible; RankActiveLinkBot; +https://rankactive.com/resources/rankactive-linkbot)",
    "iskanie (+http://www.iskanie.com)",
    "SafeDNSBot (https://www.safedns.com/searchbot)",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5",
    "Mozilla/5.0 (compatible; Veoozbot/1.0; +http://www.veooz.com/veoozbot.html)",
    "Slackbot-LinkExpanding (+https://api.slack.com/robots)",
    "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
    "Slackbot 1.0 (+https://api.slack.com/robots)",
    "Mozilla/5.0 (compatible; redditbot/1.0; +http://www.reddit.com/feedback)",
    "datagnionbot (+http://www.datagnion.com/bot.html)",
    "Google-Adwords-Instant (+http://www.google.com/adsbot.html)",
    "Mozilla/5.0 (compatible; adbeat_bot; +support@adbeat.com; support@adbeat.com)",
    "adbeat_bot",
    "WhatsApp",
    "WhatsApp/0.3.4479 N",
    "WhatsApp/0.3.4679 N",
    "WhatsApp/0.3.4941 N",
    "WhatsApp/2.12.15/i",
    "WhatsApp/2.12.16/i",
    "WhatsApp/2.12.17/i",
    "WhatsApp/2.12.449 A",
    "WhatsApp/2.12.453 A",
    "WhatsApp/2.12.510 A",
    "WhatsApp/2.12.540 A",
    "WhatsApp/2.12.548 A",
    "WhatsApp/2.12.555 A",
    "WhatsApp/2.12.556 A",
    "WhatsApp/2.16.1/i",
    "WhatsApp/2.16.13 A",
    "WhatsApp/2.16.2/i",
    "WhatsApp/2.16.42 A",
    "WhatsApp/2.16.57 A",
    "WhatsApp/2.19.92 i",
    "WhatsApp/2.19.175 A",
    "WhatsApp/2.19.244 A",
    "WhatsApp/2.19.258 A",
    "WhatsApp/2.19.308 A",
    "WhatsApp/2.19.330 A",
    "Mozilla/5.0 (compatible;contxbot/1.0)",
    "Mozilla/5.0 (compatible; Pinterestbot/1.0; +http://www.pinterest.com/bot.html)",
    "Pinterest/0.2 (+http://www.pinterest.com/bot.html)",
    "Mozilla/5.0 (compatible; electricmonk/3.2.0 +https://www.duedil.com/our-crawler/)",
    "GarlikCrawler/1.2 (http://garlik.com/, crawler@garlik.com)",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b",
    "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0; BingPreview/1.0b) like Gecko",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0;  WOW64;  Trident/6.0;  BingPreview/1.0b)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;  WOW64;  Trident/5.0;  BingPreview/1.0b)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 BingPreview/1.0b",
    "Mozilla/5.0 (compatible; vebidoobot/1.0; +https://blog.vebidoo.de/vebidoobot/",
    "Mozilla/5.0 (compatible; FemtosearchBot/1.0; http://femtosearch.com)",
    "Mozilla/5.0 (compatible; Yahoo Link Preview; https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html)",
    "Mozilla/5.0 (compatible; MetaJobBot; http://www.metajob.de/crawler)",
    "DomainStatsBot/1.0 (http://domainstats.io/our-bot)",
    "mindUpBot (datenbutler.de)",
    "Mozilla/5.0 (compatible; Daum/4.1; +http://cs.daum.net/faq/15/4118.html?faqId=28966)",
    "Jugendschutzprogramm-Crawler; Info: http://www.jugendschutzprogramm.de",
    "Xenu Link Sleuth/1.3.8",
    "Pcore-HTTP/v0.40.3",
    "Pcore-HTTP/v0.44.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36 moatbot",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4 moatbot",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36 (compatible; KosmioBot/1.0; +http://kosm.io/bot.html)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/59.0.3071.109 Chrome/59.0.3071.109 Safari/537.36 PingdomPageSpeed/1.0 (pingbot/2.0; +http://www.pingdom.com/)",
    "Mozilla/5.0 (compatible; pingbot/2.0; +http://www.pingdom.com/)",
    "Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/61.0.3163.100 Chrome/61.0.3163.100 Safari/537.36 PingdomPageSpeed/1.0 (pingbot/2.0; +http://www.pingdom.com/)",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) browser/2020.2.1 Chrome/78.0.3904.130 Electron/7.3.2 Safari/537.36 PingdomTMS/2020.2",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) browser/2020.2.5 Chrome/78.0.3904.130 Electron/7.3.15 Safari/537.36 PingdomTMS/2020.2",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) browser/2020.2.0 Chrome/78.0.3904.130 Electron/7.1.7 Safari/537.36 PingdomTMS/2020.2",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) renderer/2020.2.0 Chrome/78.0.3904.130 Electron/7.1.7 Safari/537.36 PingdomTMS/2020.2",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/61.0.3163.100 Chrome/61.0.3163.100 Safari/537.36 PingdomPageSpeed/1.0 (pingbot/2.0; http://www.pingdom.com/)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; AppInsights)",
    "Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1 bl.uk_lddc_renderbot/2.0.0 (+ http://www.bl.uk/aboutus/legaldeposit/websites/websites/faqswebmaster/index.html)",
    "Mozilla/5.0 (compatible; Gowikibot/1.0; +http://www.gowikibot.com)",
    "PiplBot (+http://www.pipl.com/bot/)",
    "Mozilla/5.0+(compatible;+PiplBot;+http://www.pipl.com/bot/)",
    "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)",
    "TelegramBot (like TwitterBot)",
    "Mozilla/5.0 (compatible; Jetslide; +http://jetsli.de/crawler)",
    "Mozilla/5.0 (compatible; NewShareCounts.com/1.0; +http://newsharecounts.com/crawler)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6 - James BOT - WebCrawler http://cognitiveseo.com/bot.html",
    "Barkrowler/0.5.1 (experimenting / debugging - sorry for your logs ) http://www.exensa.com/crawl - admin@exensa.com -- based on BuBiNG",
    "Barkrowler/0.7 (+http://www.exensa.com/crawl)",
    "BarkRowler/0.7 (+http://www.exensa.com/crawling)",
    "Barkrowler/0.9 (+http://www.exensa.com/crawl)",
    "Mozilla/5.0 (compatible; TinEye-bot/1.31; +http://www.tineye.com/crawler.html)",
    "TinEye/1.1 (http://tineye.com/crawler.html)",
    "SocialRankIOBot; http://socialrank.io/about",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.0; trendictionbot0.5.0; trendiction search; http://www.trendiction.de/bot; please let us know of any problems; web at trendiction.com) Gecko/20071127 Firefox/3.0.0.11",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; trendictionbot0.5.0; trendiction search; http://www.trendiction.de/bot; please let us know of any problems; web at trendiction.com) Gecko/20170101 Firefox/67.0",
    "Ocarinabot",
    "Mozilla/5.0 (compatible; epicbot; +http://www.epictions.com/epicbot)",
    "Mozilla/5.0 (compatible; Primalbot; +https://www.primal.com;)",
    "Mozilla/5.0 (compatible; DuckDuckGo-Favicons-Bot/1.0; +http://duckduckgo.com)",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:49.0) Gecko/20100101 Firefox/49.0 / GnowitNewsbot / Contact information at http://www.gnowit.com",
    "Mozilla/5.0 (Windows NT 6.3;compatible; Leikibot/1.0; +http://www.leiki.com)",
    "@LinkArchiver twitter bot",
    "Mozilla/5.0 (compatible; YaK/1.0; http://linkfluence.com/; bot@linkfluence.com)",
    "Mozilla/5.0 (compatible; PaperLiBot/2.1; http://support.paper.li/entries/20023257-what-is-paper-li)",
    "Mozilla/5.0 (compatible; PaperLiBot/2.1; https://support.paper.li/entries/20023257-what-is-paper-li)",
    "Digg Deeper/v1 (http://digg.com/about)",
    "dcrawl/1.0",
    "Mozilla/5.0 (compatible; Snacktory; +https://github.com/karussell/snacktory)",
    "Mozilla/5.0 (compatible; AndersPinkBot/1.0; +http://anderspink.com/bot.html)",
    "Fyrebot/1.0",
    "Mozilla/5.0 (compatible; EveryoneSocialBot/1.0; support@everyonesocial.com http://everyonesocial.com/)",
    "Mediatoolkitbot (complaints@mediatoolkit.com)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.13 (KHTML, like Gecko) Chrome/30.0.1599.66 Safari/537.13 Luminator-robots/2.0",
    "Mozilla/5.0 (compatible; ExtLinksBot/1.5 +https://extlinks.com/Bot.html)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en; rv:1.9.0.13) Gecko/2009073022 Firefox/3.5.2 (.NET CLR 3.5.30729) SurveyBot/2.3 (DomainTools)",
    "NING/1.0",
    "okhttp/2.5.0",
    "okhttp/2.7.5",
    "okhttp/3.2.0",
    "okhttp/3.5.0",
    "okhttp/4.1.0",
    "Nuzzel",
    "omgili/0.5 +http://omgili.com",
    "PocketParser/2.0 (+https://getpocket.com/pocketparser_ua)",
    "YisouSpider",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 YisouSpider/5.0 Safari/537.36",
    "Mozilla/5.0 (compatible; um-LN/1.0; mailto: techinfo@ubermetrics-technologies.com)",
    "Mozilla/5.0 (compatible; ToutiaoSpider/1.0; http://web.toutiao.com/media_cooperation/;)",
    "Mozilla/5.0 (compatible; MuckRack/1.0; +http://muckrack.com)",
    "Jamie's Spider (http://jamiembrown.com/)",
    "AHC/2.0",
    "Mozilla/5.0 (compatible; NetcraftSurveyAgent/1.0; +info@netcraft.com)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Laserlikebot/0.1)",
    "Apache-HttpClient/4.2.3 (java 1.5)",
    "Apache-HttpClient/4.2.5 (java 1.5)",
    "Apache-HttpClient/4.3.1 (java 1.5)",
    "Apache-HttpClient/4.3.3 (java 1.5)",
    "Apache-HttpClient/4.3.5 (java 1.5)",
    "Apache-HttpClient/4.4.1 (Java/1.8.0_65)",
    "Apache-HttpClient/4.5.2 (Java/1.8.0_65)",
    "Apache-HttpClient/4.5.2 (Java/1.8.0_151)",
    "Apache-HttpClient/4.5.2 (Java/1.8.0_161)",
    "Apache-HttpClient/4.5.2 (Java/1.8.0_181)",
    "Apache-HttpClient/4.5.3 (Java/1.8.0_121)",
    "Apache-HttpClient/4.5.3-SNAPSHOT (Java/1.8.0_152)",
    "Apache-HttpClient/4.5.7 (Java/11.0.3)",
    "Apache-HttpClient/4.5.10 (Java/1.8.0_201)",
    "AppEngine-Google; (+http://code.google.com/appengine; appid: example)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 AppEngine-Google; (+http://code.google.com/appengine; appid: s~feedly-nikon3)",
    "Jetty/9.3.z-SNAPSHOT",
    "Upflow/1.0",
    "Thinklab (thinklab.com)",
    "Traackr.com",
    "Ruby, Twurly v1.1 (http://twurly.org)",
    "http.rb/2.2.2 (Mastodon/1.5.1; +https://example-masto-instance.org/)",
    "http_get",
    "Mozilla/5.0 (compatible; DnyzBot/1.0)",
    "Mozilla/5.0 (compatible; botify; http://botify.com)",
    "Mozilla/5.0 (compatible; 007ac9 Crawler; http://crawler.007ac9.net/)",
    "Mozilla/5.0 (compatible; BehloolBot/beta; +http://www.webeaver.com/bot)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/55.0 BrandVerity/1.0 (http://www.brandverity.com/why-is-brandverity-visiting-me)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A465 Twitter for iPhone BrandVerity/1.0 (http://www.brandverity.com/why-is-brandverity-visiting-me)",
    "check_http/v2.2.1 (nagios-plugins 2.2.1)",
    "Mozilla/5.0 (Windows NT 6.1; compatible; BDCbot/1.0; +http://bigweb.bigdatacorp.com.br/faq.aspx) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; BDCbot/1.0; +http://bigweb.bigdatacorp.com.br/faq.aspx) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
    "Mozilla/5.0 (compatible; ZumBot/1.0; http://help.zum.com/inquiry)",
    "EZID (EZID link checker; https://ezid.cdlib.org/)",
    "ICC-Crawler/2.0 (Mozilla-compatible; ; http://ucri.nict.go.jp/en/icccrawler.html)",
    "ArchiveTeam ArchiveBot/20170106.02 (wpull 2.0.2)",
    "LCC (+http://corpora.informatik.uni-leipzig.de/crawler_faq.html)",
    "Mozilla/5.0 (compatible; oBot/2.3.1; +http://filterdb.iss.net/crawler/)",
    "BLP_bbot/0.1",
    "Mozilla/5.0 (compatible; BomboraBot/1.0; +http://www.bombora.com/bot)",
    "Buck/2.2; (+https://app.hypefactors.com/media-monitoring/about.html)",
    "Companybook-Crawler (+https://www.companybooknetworking.com/)",
    "Mozilla/5.0 (compatible; Genieo/1.0 http://www.genieo.com/webfilter.html)",
    "magpie-crawler/1.1 (U; Linux amd64; en-GB; +http://www.brandwatch.net)",
    "MeltwaterNews www.meltwater.com",
    "Mozilla/5.0 Moreover/5.1 (+http://www.moreover.com)",
    "newspaper/0.1.0.7",
    "newspaper/0.2.5",
    "newspaper/0.2.6",
    "newspaper/0.2.8",
    "Mozilla/5.0 (compatible; ScoutJet; +http://www.scoutjet.com/)",
    "sentry/8.22.0 (https://sentry.io)",
    "Mozilla/5.0 (compatible; StorygizeBot; http://www.storygize.com)",
    "Mozilla/5.0+(compatible; UptimeRobot/2.0; http://www.uptimerobot.com/)",
    "OutclicksBot/2 +https://www.outclicks.net/agent/VjzDygCuk4ubNmg40ZMbFqT0sIh7UfOKk8s8ZMiupUR",
    "OutclicksBot/2 +https://www.outclicks.net/agent/gIYbZ38dfAuhZkrFVl7sJBFOUhOVct6J1SvxgmBZgCe",
    "OutclicksBot/2 +https://www.outclicks.net/agent/PryJzTl8POCRHfvEUlRN5FKtZoWDQOBEvFJ2wh6KH5J",
    "OutclicksBot/2 +https://www.outclicks.net/agent/p2i4sNUh7eylJF1S6SGgRs5mP40ExlYvsr9GBxVQG6h",
    "Mozilla/5.0 (compatible; seoscanners.net/1; +spider@seoscanners.net)",
    "Hatena Antenna/0.3",
    "Hatena::Russia::Crawler/0.01",
    "Hatena-Favicon/2 (http://www.hatena.ne.jp/faq/)",
    "Hatena::Scissors/0.01",
    "HatenaBookmark/4.0 (Hatena::Bookmark; Analyzer)",
    "Hatena::Fetcher/0.01 (master) Furl/3.13",
    "Mozilla/5.0 (Linux; U; Android 2.3.4; generic) AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview) Version/4.0 Mobile Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview) Chrome/27.0.1453 Safari/537.36",
    "MauiBot (crawler.feedback+wc@gmail.com)",
    "Mozilla/5.0 (compatible; AlphaBot/3.2; +http://alphaseobot.com/bot.html)",
    "SBL-BOT (http://sbl.net)",
    "IAS crawler (ias_crawler; http://integralads.com/site-indexing-policy/)",
    "Mozilla/5.0 (compatible; adscanner/)",
    "Netvibes (crawler/bot; http://www.netvibes.com",
    "Netvibes (crawler; http://www.netvibes.com)",
    "Mozilla/5.0 (compatible;acapbot/0.1;treat like Googlebot)",
    "Mozilla/5.0 (compatible;acapbot/0.1.;treat like Googlebot)",
    "Baidu-YunGuanCe-Bot(ce.baidu.com)",
    "Baidu-YunGuanCe-SLABot(ce.baidu.com)",
    "Baidu-YunGuanCe-ScanBot(ce.baidu.com)",
    "Baidu-YunGuanCe-PerfBot(ce.baidu.com)",
    "Baidu-YunGuanCe-VSBot(ce.baidu.com)",
    "bitlybot/3.0 (+http://bit.ly/)",
    "bitlybot/2.0",
    "bitlybot",
    "blogmuraBot (+http://www.blogmura.com)",
    "Bot.AraTurka.com/0.0.1",
    "bot-pge.chlooe.com/1.0.0 (+http://www.chlooe.com/)",
    "Mozilla/5.0 (compatible; BoxcarBot/1.1; +awesome@boxcar.io)",
    "BTWebClient/180B(9704)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0;.NET CLR 1.0.3705; ContextAd Bot 1.0)",
    "ContextAd Bot 1.0",
    "Mozilla/5.0 (compatible; Digincore bot; https://www.digincore.com/crawler.html for rules and instructions.)",
    "Disqus/1.0",
    "Feedly/1.0 (+http://www.feedly.com/fetcher.html; like FeedFetcher-Google)",
    "FeedlyBot/1.0 (http://feedly.com)",
    "Fetch/2.0a (CMS Detection/Web/SEO analysis tool, see http://guess.scritch.org)",
    "Fever/1.38 (Feed Parser; http://feedafever.com; Allow like Gecko)",
    "Flamingo_SearchEngine (+http://www.flamingosearch.com/bot)",
    "Mozilla/5.0 (compatible; FlipboardProxy/1.1; +http://flipboard.com/browserproxy)",
    "Mozilla/5.0 (compatible; FlipboardProxy/1.2; +http://flipboard.com/browserproxy)",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6 (FlipboardProxy/1.1; +http://flipboard.com/browserproxy)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:28.0) Gecko/20100101 Firefox/28.0 (FlipboardProxy/1.1; +http://flipboard.com/browserproxy)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:49.0) Gecko/20100101 Firefox/49.0 (FlipboardProxy/1.2; +http://flipboard.com/browserproxy)",
    "g2reader-bot/1.0 (+http://www.g2reader.com/)",
    "G2 Web Services/1.0 (built with StormCrawler Archetype 1.8; https://www.g2webservices.com/; developers@g2llc.com)",
    "Mozilla/5.0 (compatible; imrbot/1.10.8 +http://www.mignify.com)",
    "K7MLWCBot/1.0 (+http://www.k7computing.com)",
    "Kemvibot/1.0 (http://kemvi.com, marco@kemvi.com)",
    "Landau-Media-Spider/1.0(http://bots.landaumedia.de/bot.html)",
    "linkapediabot (+http://www.linkapedia.com)",
    "Mozilla/5.0 (compatible; vkShare; +http://vk.com/dev/Share)",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0) LinkCheck by Siteimprove.com",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.0) Match by Siteimprove.com",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0) SiteCheck-sitecrawl by Siteimprove.com",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.0) LinkCheck by Siteimprove.com",
    "Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36 DareBoost",
    "Mozilla/5.0 (compatible; ZuperlistBot/1.0)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.x-dev; +https://miniflux.net)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.3; +https://miniflux.net)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.7; +https://miniflux.net)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.10; +https://miniflux.net)",
    "Mozilla/5.0 (compatibl$; Miniflux/2.0.x-dev; +https://miniflux.app)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.11; +https://miniflux.app)",
    "Mozilla/5.0 (compatible; Miniflux/2.0.12; +https://miniflux.app)",
    "Mozilla/5.0 (compatible; Miniflux/ae1dc1a; +https://miniflux.app)",
    "Mozilla/5.0 (compatible; Miniflux/3b6e44c; +https://miniflux.app)",
    "Mozilla/5.0 (compatible; Feedspotbot/1.0; +http://www.feedspot.com/fs/bot)",
    "Mozilla/5.0 (compatible; Feedspot/1.0 (+https://www.feedspot.com/fs/fetcher; like FeedFetcher-Google)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 (.NET CLR 3.5.30729; Diffbot/0.1; +http://www.diffbot.com)",
    "Mozilla/5.0 (compatible; SEOkicks; +https://www.seokicks.de/robot.html)",
    "Mozilla/5.0 (compatible; tracemyfile/1.0; +bot@tracemyfile.com)",
    "Mozilla/5.0 (compatible; Nimbostratus-Bot/v1.3.2; http://cloudsystemnetworks.com)",
    "Mozilla/5.0 zgrab/0.x",
    "Mozilla/5.0 (compatible; PR-CY.RU; + https://a.pr-cy.ru)",
    "AdsTxtCrawler/1.0",
    "Datafeedwatch/2.1.x",
    "Zabbix",
    "TangibleeBot/1.0.0.0 (http://tangiblee.com/bot)",
    "google-xrawler",
    "axios/0.18.0",
    "axios/0.19.0",
    "Amazon CloudFront",
    "Pulsepoint XT3 web scraper",
    "Mozilla/5.0 (compatible; CloudFlare-AlwaysOnline/1.0; +http://www.cloudflare.com/always-online) AppleWebKit/534.34",
    "Mozilla/5.0 (compatible; CloudFlare-AlwaysOnline/1.0; +https://www.cloudflare.com/always-online) AppleWebKit/534.34",
    "Mozilla/5.0 (compatible; Google-Structured-Data-Testing-Tool +https://search.google.com/structured-data/testing-tool)",
    "Mozilla/5.0 (compatible; Google-Structured-Data-Testing-Tool +http://developers.google.com/structured-data/testing-tool/)",
    "WordupInfoSearch/1.0",
    "Mozilla/5.0 (compatible; WebDataStats/1.0 ; +https://webdatastats.com/policy.html)",
    "Jersey/2.25.1 (HttpUrlConnection 1.8.0_141)",
    "Mozilla/5.0 (compatible; Seekport Crawler; http://seekport.com/)",
    "ZoomBot (Linkbot 1.0 http://suite.seozoom.it/bot.html)",
    "VelenPublicWebCrawler (velen.io)",
    "MoodleBot/1.0",
    "jpg-newsbot/2.0; (+https://vipnytt.no/bots/)",
    "Mozilla/5.0 (Java) outbrain",
    "W3C_Validator/1.3",
    "Validator.nu/LV",
    "W3C-checklink/2.90 libwww-perl/5.64",
    "W3C-checklink/3.6.2.3 libwww-perl/5.64",
    "W3C-checklink/4.2 [4.20] libwww-perl/5.803",
    "W3C-checklink/4.2.1 [4.21] libwww-perl/5.803",
    "W3C-checklink/4.3 [4.42] libwww-perl/5.805",
    "W3C-checklink/4.3 [4.42] libwww-perl/5.808",
    "W3C-checklink/4.3 [4.42] libwww-perl/5.820",
    "W3C-checklink/4.5 [4.154] libwww-perl/5.823",
    "W3C-checklink/4.5 [4.160] libwww-perl/5.823",
    "W3C-mobileOK/DDC-1.0",
    "W3C_I18n-Checker/1.0",
    "FeedValidator/1.3",
    "Jigsaw/2.3.0 W3C_CSS_Validator_JFouffa/2.0",
    "W3C_Unicorn/1.0",
    "Mozilla/5.0 (Google-PhysicalWeb)",
    "Blackboard Safeassign",
    "Mozilla/5.0 (compatible; ICBot/0.1; +https://ideasandcode.xyz",
    "Mozilla/5.0 (compatible; BazQux/2.4; +https://bazqux.com/fetcher; 1 subscribers)",
    "Mozilla/5.0 (compatible; Twingly Recon; twingly.com)",
    "Mozilla/5.0 (compatible; Rivva; http://rivva.de)",
    "Experibot-v2 http://goo.gl/ZAr8wX",
    "Experibot-v3 http://goo.gl/ZAr8wX",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.5 Safari/537.22 +awesomecrawler",
    "Mozilla/5.0 (compatible; Dataprovider.com)",
    "Mozilla/5.0 (compatible; GroupHigh/1.0; +http://www.grouphigh.com/",
    "Mozilla/5.0 (compatible; theoldreader.com)",
    "Mozilla/5.0 (compatible; U; AnyEvent-HTTP/2.24; +http://software.schmorp.de/pkg/AnyEvent)",
    "Uptimebot.org - Free website monitoring",
    "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)",
    "2ip.ru CMS Detector (https://2ip.ru/cms/)",
    "Clickagy Intelligence Bot v2",
    "Caliperbot/1.0 (+http://www.conductor.com/caliperbot)",
    "MBCrawler/1.0 (https://monitorbacklinks.com)",
    "Mozilla/5.0 (compatible; online-webceo-bot/1.0; +http://online.webceo.com)",
    "B2B Bot",
    "Mozilla/5.0 (compatible; AddSearchBot/0.9; +http://www.addsearch.com/bot; info@addsearch.com)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Favicon",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36 HubSpot Webcrawler - web-crawlers@hubspot.com",
    "Mozilla/5.0 (X11; Linux x86_64; HubSpot Single Page link check; web-crawlers+links@hubspot.com) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    "Mozilla/5.0 (compatible; HubSpot Crawler; web-crawlers@hubspot.com)",
    "HubSpot Connect 2.0 (http://dev.hubspot.com/) - BizOpsCompanies-Tq2-BizCoDomainValidationAudit",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MRA58N) AppleWebKit/537.36(KHTML, like Gecko) Chrome/69.0.3464.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/69.0.3464.0 Safari/537.36 Chrome-Lighthouse",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Safari/537.36 Chrome-Lighthouse",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3694.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/74.0.3729.169 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/69.0.3494.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/76.0.3803.0 Safari/537.36",
    "CheckMarkNetwork/1.0 (+http://www.checkmarknetwork.com/spider.html)",
    "Mozilla/5.0 (compatible; Uptimebot/1.0; +http://www.uptime.com/uptimebot)",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1) Streamline3Bot/1.0",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; +https://www.ubtsupport.com/legal/Streamline3Bot.php) Streamline3Bot/1.0",
    "serpstatbot/1.0 (advanced backlink tracking bot; http://serpstatbot.com/; abuse@serpstatbot.com)",
    "serpstatbot/1.0 (advanced backlink tracking bot; curl/7.58.0; http://serpstatbot.com/; abuse@serpstatbot.com)",
    "MixnodeCache/1.8(+https://cache.mixnode.com/)",
    "curl",
    "curl/7.29.0",
    "curl/7.47.0",
    "curl/7.54.0",
    "curl/7.55.1",
    "curl/7.64.0",
    "curl/7.64.1",
    "curl/7.65.3",
    "Mozilla/5.0 (compatible; SimpleScraper)",
    "RSSingBot (http://www.rssing.com)",
    "Mozilla/5.0 (compatible; Jooblebot/2.0; Windows NT 6.1; WOW64; +http://jooble.org/jooble-bot) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36",
    "venus/fedoraplanet",
    "Friendica 'The Tazmans Flax-lily' 2019.01-1293; https://hoyer.xyz",
    "NextCloud-News/1.0",
    "Tiny Tiny RSS/1.15.3 (http://tt-rss.org/)",
    "Tiny Tiny RSS/17.12 (a2d1fa5) (http://tt-rss.org/)",
    "Tiny Tiny RSS/19.2 (b68db2d) (http://tt-rss.org/)",
    "Tiny Tiny RSS/19.8 (http://tt-rss.org/)",
    "Mozilla/5.0 (compatible; RegionStuttgartBot/1.0; +http://it.region-stuttgart.de/competenzatlas/unternehmen-suchen/)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.3754.1902 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.4454.1745 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.7597.1164 Mobile Safari/537.36; Bytespider;bytespider@bytedance.com",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2988.1545 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.4141.1682 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.3478.1649 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.5267.1259 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.7990.1979 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.2268.1523 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2576.1836 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.9681.1227 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.6023.1635 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.4944.1981 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.3613.1739 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.4022.1033 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.3248.1547 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.5527.1507 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.5216.1326 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.9038.1080 Mobile Safari/537.36; Bytespider",
    "Mozilla/5.0 (X11; Datanyze; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
    "Mozilla/5.0 (compatible; Google-Site-Verification/1.0)",
    "Mozilla/5.0 (compatible; TrendsmapResolver/0.1)",
    "Mozilla/5.0 (compatible; +http://tweetedtimes.com)",
    "Mozilla/5.0 (compatible; NTENTbot; +http://www.ntent.com/ntentbot)",
    "Gwene/1.0 (The gwene.org rss-to-news gateway) Googlebot",
    "SimplePie/1.3-dev (Feed Parser; http://simplepie.org; Allow like Gecko)",
    "SearchAtlas.com SEO Crawler",
    "Superfeedr bot/2.0 http://superfeedr.com - Make your feeds realtime: get in touch - feed-id:1162088860",
    "wp.com feedbot/1.0 (+https://wp.com)",
    "UT-Dorkbot/1.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)",
    "SerendeputyBot/0.8.6 (http://serendeputy.com/about/serendeputy-bot)",
    "Mozilla/5.0 (compatible; Eyeotabot/1.0; +http://www.eyeota.com)",
    "Mozilla/5.0 (compatible; officestorebot/1.0; +https://aka.ms/officestorebot)",
    "Neticle Crawler v1.0 ( https://neticle.com/bot/en/ )",
    "Mozilla/5.0 (compatible; SurdotlyBot/1.0; +http://sur.ly/bot.html; Linux; Android 4; iPhone; CPU iPhone OS 6_0_1 like Mac OS X)",
    "Mozilla/5.0 (compatible; LinkisBot/1.0; bot@linkis.com) (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) Mobile/12H321",
    "AwarioSmartBot/1.0 (+https://awario.com/bots.html; bots@awario.com)",
    "AwarioRssBot/1.0 (+https://awario.com/bots.html; bots@awario.com)",
    "RyteBot/1.0.0 (+https://bot.ryte.com/)",
    "FreeWebMonitoring SiteChecker/0.2 (+https://www.freewebmonitoring.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; AspiegelBot)",
    "NAVER Blog Rssbot",
    "Mozilla/5.0 (compatible; zenback bot; powered by logly +http://corp.logly.co.jp/)",
    "SentiBot www.sentibot.eu (compatible with Googlebot)",
    "Mozilla/5.0 (compatible; Domains Project/1.0.3; +https://github.com/tb0hdan/domains)",
    "Pandalytics/1.0 (https://domainsbot.com/pandalytics/)",
    "Mozilla/5.0 (compatible; VKRobot/1.0)",
    "bidswitchbot/1.0",
    "tigerbot",
    "Mozilla/5.0 (compatible; NIXStatsbot/1.1; +http://www.nixstats.com/bot.html)",
    "RSSMicro.com RSS/Atom Feed Robot",
    "Curebot/1.0",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36 (compatible; PagePeeker/3.0; +https://pagepeeker.com/robots/)",
    "Mozilla/5.0 (compatible; Vigil/1.0; +http://vigil-app.com/bot.html)",
    "rssbot/1.4.3 (+https://t.me/RustRssBot)",
    "Mozilla/5.0 (compatible; startmebot/1.0; +https://start.me/bot)",
    "Mozilla/5.0 (X11; U; Linux Core i7-4980HQ; de; rv:32.0; compatible; JobboerseBot; http://www.jobboerse.com/bot.htm) Gecko/20100101 Firefox/38.0",
    "http://seewithkids.com/bot",
    "NINJA bot",
    "Cutbot; 1.5; http://cutbot.net/",
    "BublupBot (+https://www.bublup.com/bublup-bot.html)",
    "BrandONbot (http://brandonmedia.net)",
    "Mozilla/5.0 (compatible; RidderBot/1.0; bot@ridder.co)",
    "Mozilla/5.0 (compatible; RidderBot/1.0; bot@ridder.co) (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) Mobile/12H321",
    "Mozilla/5.0 (compatible; Taboolabot/3.7; +http://www.taboola.com)",
    "Mozilla/5.0 (compatible; Dubbotbot/0.2; +http://dubbot.com)",
    "Mozilla/5.0 (compatible;FindITAnswersbot/1.0;+http://search.it-influentials.com/bot.htm)",
    "infoobot/0.1 (https://www.infoo.nl/bot.html)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36 (Refindbot/1.0)",
    "Mozilla/5.0 (compatible; BlogTraffic/1.4 Feed-Fetcher; +http://www.blogtraffic.de/rss-bot.html)",
    "SeobilityBot (SEO Tool; https://www.seobility.net/sites/bot.html)",
    "Mozilla/5.0 (compatible; Cincraw/1.0; +http://cincrawdata.net/bot/)",
    "Mozilla/5.0 (Windows NT 6.1; rv:34.0) Gecko/20100101 Firefox/34.0; Dragonbot; http://www.dragonmetrics.com",
    "Mozilla/5.0 (compatible; VoluumDSP-content-bot/2.0; +dsp-dev@codewise.com)",
    "FreshRSS/1.11.2 (Linux; https://freshrss.org) like Googlebot",
    "Mozilla/5.0 (compatible; BitBot/v1.19.0; +https://bitbot.dev)",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.2.24 curl/7.61.1",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.3.19 curl/7.66.0",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.3.23 curl/7.66.0",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.4.7 curl/7.69.1",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.4.9 curl/7.69.1",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.4.10 curl/7.69.1",
    "PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.4.11 curl/7.69.1",
    "Google-Certificates-Bridge",
    "Mozilla/5.0 (compatible; Go-http-client/1.1; +centurybot9@gmail.com)",
    "Viber",
    "e.ventures Investment Crawler (eventures.vc)",
    "Mozilla/5.0 (compatible; evc-batch/2.0)",
    "Mozilla/5.0 (compatible;PetalBot;+https://webmaster.petalsearch.com/site/petalbot)",
    "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)",
    "Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US) AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud)",
    "AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 PTST/211202.211915",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0 PTST/211202.211915",
  ];
let random = o[Math.floor(Math.random() * o.length)]
res.json({
status : true,
creator : `${creator}`,
result : random
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/other/tahta', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       tahta(text)
	.then(data => {
		var requestSettings = {
      url: data,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/gif');
      res.send(body);
   });
		})
         .catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
} else {
  res.json(loghandler.apikey)
}
})


router.get('/info/gempa', async (req, res, next) => {
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
