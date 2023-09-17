const { default: axios, isAxiosError } = require("axios");
const cheerio = require("cheerio");
const formData = require("form-data");

async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}

async function ffstalk(userId) {
  let data = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": userId,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  let ff = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": data
  })
  return {
    id: userId,
    nickname: ff.data["confirmationFields"]["roles"][0]["role"]
  }
}

function wikipedia(query){
	return new Promise((resolve,reject) => {
		await axios.get(`https://id.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${encodeURIComponent(query)}`)
				.then(async ({ data }) => {
					if (isAxiosError()) throw ('axios error');
					const getId = data.query.search[0].pageid;
					await axios.get(`https://id.wikipedia.org/?curid=${getId}`)
						.then(({ data }) => {
							if (isAxiosError()) throw ('axios error');
							const $ = cheerio.load(data);
							let script = $("script[type='application/ld+json']").get();
							let json;
							for (let anu of script) {
								json = JSON.parse(anu.children[0].data);
							}
							const result = $("table.infobox").next().text().trim();
							const resultt = {
								title: json.headline || query,
								url: json.url,
								publisher: json.publisher.name,
								datePublished: json.datePublished,
								thumbnail: json.image || json.publisher.logo.url,
								context: result
							};
							resolve(resultt);
				   }).catch(reject);
	      }).catch(reject);
     }
     
function tiktokstalk(username){
	return new Promise((resolve,reject) => {
		axios.request({
				method: "GET",
				url: `https://tiktok.com/@${username}`,
				headers: {
					"User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
					"Cookie": "tt_webid_v2=7023321823367792130;tt_webid=7023321823367792130;tt_csrf_token=Ko3eYWlaA81BtC_6ezxMN4qf;R6kq3TV7=AHwiLLx8AQAAlTgrDyev4OA6MBZL078p4m5wG5CZEK8rU7kHUbizioKGVR8j|1|0|5839bf36b909a5e044847442b7d4dc0390a72e59;ttwid=1%7C3p7mb0Z4EWtFfmmqArdM4PqSNcyXZe23Vy0tPgsbyyI%7C1635244602%7C5fb19e46484c8c4f840b7c941ff4edea0fdcd8b6ea13576295a0268f37080669;s_v_web_id=verify_kv7yey5z_ZCLcdnz5_Mmf4_4XZZ_9ZFw_ZEjGJdo9qi62;msToken=p0SYyf1ujFiJcET1HDLeL2j4-2760D8ueZK-hU4TBTYI9NPKlB3IMnO9GXHm3GK2wi7xJoMGlsz9Kta1ls13_Vgt9izMlk2bBiOe8EmdRd5UrGaJMZn3oBTfwmiMexhYBC8d"
				}
			}).then(({ data }) => {
				if (isAxiosError()) throw ('axios error');
				const $ = cheerio.load(data);
				const script = $("script#__NEXT_DATA__").get();
				let parse;
				for (let anu of script) {
					if ((anu.children && anu.children[0] && anu.children[0].data)) {
						const json = anu.children[0].data;
						parse = JSON.parse(json);
					} else parse = new Array();
				}
				const anu = parse.props.pageProps.userInfo;
				const time = new Date(anu.user.createTime * 1000);
				const verif = anu.user.verified;
				const privAkun = anu.user.privateAccount;
				resolve({
					username: anu.user.uniqueId,
					nickname: anu.user.nickname,
					signature: anu.user.signature || "-",
					createTime: time,
					verified: verif !== false ? "User Verified" : "Not Verified",
					privateAccount: privAkun !== false ? "Private Account" : "Public Account",
					followers: anu.stats.followerCount,
					followings: anu.stats.followingCount,
					hearts: anu.stats.heart,
					heartsCount: anu.stats.heartCount,
					videoCount: anu.stats.videoCount,
					diggCount: anu.stats.diggCount,
					profile: anu.user.avatarThumb
				});
			}).catch(reject);
	      }).catch(reject);
     }


function twtstalk(user){
	return new Promise((resolve,reject) => {
		await axios.get("https://instalker.org/" + user)
				.then(({ data }) => {
					if (isAxiosError()) throw ('axios error');
					let $ = cheerio.load(data);
					let tweets = new Array();
					$("div.activity-posts").each(function (a, b) {
						tweets.push({
							author: {
								username: $(b).find("div.user-text3 > h4 > span").text(),
								nickname: $(b).find("div.user-text3 > h4").text().split("@")[0] || $(b).find("div.user-text3 > h4").text().trim(),
								profile_pic: $(b).find("img").attr("src") || $(b).find("img").attr("onerror"),
								upload_at: $(b).find("div.user-text3 > span").text()
							},
							title: $(b).find("div.activity-descp > p").text() || "",
							media: $(b).find("div.activity-descp > div > a").attr("href") || $(b).find("div.activity-descp > p > video").attr("src") || $(b).find("div.activity-descp > div > a > img").attr("src") || $(b).find("div.activity-descp > div > a > video").attr("src") || "No Media Upload",
							retweet: $(b).find("div.like-comment-view > div > a:nth-child(1) > span").text().replace("Download Image", ""),
							likes: $(b).find("div.like-comment-view > div > a:nth-child(2) > span").text()
						});
					});
					let hasil = {
						username: $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3 > span").text(),
						nickname: $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3").text().split("@")[0] || $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > h3").text(),
						background: $("body > main > div.dash-todo-thumbnail-area1 > div.todo-thumb1.dash-bg-image1.dash-bg-overlay").attr("style").split("url(")[1].split(")")[0],
						profile: $("body > main > div.dash-todo-thumbnail-area1 > div.dash-todo-header1 > div > div > div > div > div > a > img").attr("src") || $("body > main > div.dash-todo-thumbnail-area1 > div.dash-todo-header1 > div > div > div > div > div > a").attr("href"),
						biography: $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(2)").text() || "",
						join_at: $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(3)").text() || $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(5)").text(),
						location: $("body > main > div.dash-dts > div > div > div:nth-child(1) > div > div > span:nth-child(4)").text() || "",
						tweets_count: $("body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(1) > div > div.dscun-numbr").text(),
						followers: $("body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(2) > div > div.dscun-numbr").text(),
						following: $("body > main > div.dash-dts > div > div > div:nth-child(2) > ul > li:nth-child(3) > div > div.dscun-numbr").text(),
						media_count: tweets.length,
						media: tweets || "No Media Upload"
					};
					resolve(hasil);
				})
            .catch(reject);
		})
   }

module.exports = { wikipedia } 
module.exports = { twtstalk } 
module.exports = { ffstalk } 
module.exports = { mlstalk }