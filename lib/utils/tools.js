const { default: axios, isAxiosError } = require("axios");
const cheerio = require("cheerio");
const formData = require("form-data");
const headers = require("../library/settings");

class Tools {
	constructor() { }
	recipes(query) {
		return new Promise(async (resolve, reject) => {
			let getUrl = await axios.get('https://resepkoki.id/?s=' + query);
			if (isAxiosError()) throw ('axios error');
			const $ = cheerio.load(getUrl.data);
			let link = new Array();
			$('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-media > a').each(function (a, b) {
				link.push($(b).attr('href'));
			});
			const randomLink = link[Math.floor(Math.random() * link.length)];
			await axios.get(randomLink)
				.then(async ({ data }) => {
					if (isAxiosError()) throw Error('error get Data');
					const $ = cheerio.load(data);
					let bahan = new Array();
					let takaran = new Array();
					let tahap = new Array();
					$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-name').each(function (a, b) {
						bahan.push($(b).text());
					});
					$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-amount').each(function (c, d) {
						takaran.push($(d).text());
					});
					$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-content > div.single-steps > table > tbody > tr > td.single-step-description > div > p').each(function (e, f) {
						tahap.push($(f).text());
					});
					const title = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-title.title-hide-in-desktop > h1').text();
					const timer = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-cooking-time > span').text();
					const portion = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-serves > span').text().split(': ')[1];
					const level = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-difficulty > span').text().split(': ')[1];
					const thumbnail = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-main-media > img').attr('src').split('?')[0];
					let Ingredient = '';
					for (let i = 0; i < bahan.length; i++) {
						Ingredient += bahan[i] + ' ' + takaran[i] + '\n';
					}
					let Tahap = '';
					for (let i = 0; i < tahap.length; i++) {
						Tahap += tahap[i] + '\n';
					}
					if (!(portion && level && thumbnail && Tahap)) throw ('result undefined');
					const result = {
						title,
						timer,
						portion,
						level,
						thumbnail,
						ingredient: Ingredient,
						step: Tahap
					};
					resolve(result);
				}).catch(reject);
		});
	}
	
	removebg(buffer) {
		return new Promise(async (resolve, reject) => {
			const formDataAppend = new formData();
			const filename = Date.now() + ".jpg";
			formDataAppend.append("dp_bucket", "bgRemover");
			formDataAppend.append("dp_files[]", buffer, filename);
			await axios({
				method: "POST",
				url: "https://uploader.depositphotos.com/upload/saveFiles",
				data: formDataAppend,
				headers: {
					...formDataAppend.getHeaders()
				}
			}).then(async ({ data }) => {
				if (isAxiosError()) throw ('axios error');
				const requests = [{ "hash": "h2109759328", "query": { "dp_command": "bgRemover.processImage", "dp_image_url": data.data.urls[0], "dp_image_name": filename } }];
				await axios({
					method: "POST",
					url: "https://id.depositphotos.com/api",
					data: requests
				}).then(({ data }) => {
					if (isAxiosError()) throw ('axios error');
					resolve(data["h2109759328"].data.processed_image);
				}).catch(reject);
			}).catch(reject);
		});
	}

	cerpen(url) {
		return new Promise(async (resolve, reject) => {
			await axios.request({
				method: "GET",
				url: url
			}).then(async ({ data }) => {
				if (isAxiosError()) throw ('axios error');
				const $ = cheerio.load(data);
				let results = new Array();
				$("div#content").find("article.post").each(function (a, b) {
					results.push($(this).find("h2 > a").attr("href"));
				});
				const randomUrl = results[Math.floor(Math.random() * results.length)];
				await axios.request({
					method: "GET",
					url: randomUrl
				}).then(async ({ data }) => {
					if (isAxiosError()) throw ('axios error');
					const _ = cheerio.load(data);
					let resultStory = new Array();
					_("div#content > article > p").each(function (a, b) {
						resultStory.push($(this).text().trim() || null);
					});
					resolve({
						title: _("div#content > article > h1").text(),
						author_url: _("div#content > article > a").attr("href"),
						author_name: _("div#content > article > a").eq(0).text(),
						story: resultStory.join("")
					});
				}).catch(reject);
			}).catch(reject);
		});
	}

	linkwa(nama) {
		return new Promise(async (resolve, reject) => {
			await axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=' + nama + '&searchby=name')
				.then(({ data }) => {
					if (isAxiosError()) throw ('axios error');
					const $ = cheerio.load(data);
					const result = new Array();
					const lnk = new Array();
					const nm = new Array();
					$('div.wa-chat-title-container').each(function (a, b) {
						const limk = $(b).find('a').attr('href');
						lnk.push(limk);
					});
					$('div.wa-chat-title-text').each(function (c, d) {
						const name = $(d).text();
						nm.push(name);
					});
					for (let i = 0; i < lnk.length; i++) {
						result.push({
							nama: nm[i].split('. ')[1],
							link: lnk[i].split('?')[0]
						});
					}
					resolve(result);
				}).catch(reject);
		});
	}

	wikipedia(query) {
		return new Promise(async (resolve, reject) => {
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
		});
	}

	twtstalk(user) {
		return new Promise(async (resolve, reject) => {
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
				}).catch(reject);
		});
	}
}

module.exports = { Tools };