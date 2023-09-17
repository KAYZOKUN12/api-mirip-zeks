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