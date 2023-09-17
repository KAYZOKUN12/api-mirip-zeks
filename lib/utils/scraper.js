// Created by: DanzzCoding | danzzcodingweb.vercel.app

// Module
const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")
const fetch = require('node-fetch')
const FormData = require('form-data')
const request = require("request")


// Features
function ttdl(URL) {
	return new Promise((resolve, rejecet) => {
        axios.get('https://musicaldown.com/id', {
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            }
        }).then(res => {
            const $ = cheerio.load(res.data)
            const url_name = $("#link_url").attr("name")
            const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
            const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
            const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
            let data = {
                [`${url_name}`]: URL,
                [`${token_name}`]: token_,
                verify: verify
            }
        axios.request({
            url: 'https://musicaldown.com/id/download',
            method: 'post',
            data: new URLSearchParams(Object.entries(data)),
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(respon => {
            const ch = cheerio.load(respon.data)
        axios.request({
            url: 'https://musicaldown.com/id/mp3',
            method: 'post',
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(resaudio => { 
            const hc = cheerio.load(resaudio.data)       
            const result = {
				pp: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > div > img').attr('src'),
				username: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > h2:nth-child(2) > b').text(),
				description: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > h2:nth-child(3)').text(),
                video: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(6)').attr('href'),
                audio: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)').attr('href'),
                video_original: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(10)').attr('href'),
                audio_original: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)').attr('href')
            }
        resolve(result)
        })
    })
    })
    })
	
}


function snapinsta (url) {
		return new Promise(async(resolve, reject) => {
			  if (!/^((https|http)?:\/\/(?:www\.)?instagram\.com\/(p|tv|reel|stories)\/([^/?#&]+)).*/i.test(url)) throw 'Url invalid'
			  let form = new FormData()
			  form.append('url', encodeURI(url))
			  form.append('action', 'post')
			  let res = await fetch('https://snapinsta.app/action.php', {
				method: 'POST',
				headers: {
				  'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary1kCNm4346FA9yvCN',
				  'cookie': 'PHPSESSID=6d7nupv45th6ln9ldhpu62pg8s; _ga=GA1.2.1450546575.1637033620; _gid=GA1.2.1378038975.1637033620; _gat=1; __gads=ID=68a947f8174e0410-22fc6960b3ce005e:T=1637033620:RT=1637033620:S=ALNI_MbXTvxtxuISyAFMevds6-00PecLlw; __atuvc=1%7C46; __atuvs=61932694ba428f79000; __atssc=google%3B1',
				  'origin': 'https://snapinsta.app',
				  'referer': 'https://snapinsta.app/id',
				  'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
				  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
				  ...form.getHeaders()
				},
				body: form
			  })
			  let html = await res.text()
			  const $ = cheerio.load(html)
			  let results = []
			  $('div.col-md-4').each(function () {
				let thumbnail = $(this).find('div.download-items > div.download-items__thumb > img').attr('src')
				let result = $(this).find('div.download-items > div.download-items__btn > a').attr('href')
				if (!/https?:\/\//i.test(result)) result = 'https://snapinsta.app' + result
				results.push({
				  thumbnail,
				  result
				})
			  })
			  resolve(results)
			})
		}
			
	

function igdl(url){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/download-instagram-videos.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url': url,
					'action': 'post',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data.medias)
		   })
		})
	.catch(reject)
	})
}

function igstory(username){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/instagram-story-downloader.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url':'https://www.instagram.com/'+ username,
					'action': 'story',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data.medias)
		   })
		})
	.catch(reject)
	})
}

function igstalk(username){
	return new Promise((resolve,reject) => {
		axios.get('https://www.instagram.com/'+ username +'/channel/?__a=1',{
			method: 'GET',
			headers: {
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
				"cookie": "ig_did=085C2CB5-8000-4441-85DD-CF5BCA1FE157; ig_nrcb=1; csrftoken=7ZyQtU7rsZFsOgvKLjflk0KLMmTC4Chh; mid=YooZLAALAAF_nhOq9DEEIGOl8xB8; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=d4okoqSIG-fbjXgJKE07737dLXrQkN682RmOZvAdn8M.eyJ1c2VyX2lkIjoiMTAwMDQxMDU2ODc1NDA4IiwiY29kZSI6IkFRQ3ZLZkpVdzZ3WkVaUmhleTRodjFyV05BZ0JlUXM1cVRlVTJnWnZrbjkxOXllN2lfUGM1a2VjUHRIZF9qdy1KS2tDcE9Jb3ZTUmF0SGxDaTZNdzFCODFYdXJ0OEZ4aVZKVGNTMzRLbVFMVHFYVzY5NGU1X0ltcDFZSmdWSVBwLUFwblpJbkRkWWRYSURSSk9oRVZScGNuRVE1MVMwNWtXeFZxZ0EwQzZRN1VsQzcxVTdCLWNDS0haNzk3cU9vYk9yRl9mcHVZdUs3a3Fic1djaU5NVF9TbkszN2kyLVFxalEtei1SanF3bFNONnNxWXJWaUhfbTIzSWJWdUVwZUZxRzYweldoR0NxLUM5TXF5dHNYTGRzM3NNY25IS3Z0Tmc2VzIxRHFpM3poSGQybFNQUS1IR2U1ZERkUWIyS3liZzlYUXNCX3FvemhWOHI3WVBFLVYwUmI3V2s5VEpiMWNaMlBQcEFPaDJRR0lEZyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFKakVxOGZNUmNYQm1sOUpkWkFzcUxqaU9wVGZic2dYYUd6dDZaQUhla0FtV0lUOUdPdWpkSlFjMVlkMFR5SjYwWkF5Mm5PWkFRemtCREUwbU1wdkZ3WDN5cTdkVnppWkNFYjR3NkZQRnlOSVdiY29aQVc1RWEwdjJNOXdxYnd4SXBITkFESTBCZXB5eFg1UU9NN3dtUDhaQWI3NVlKQ04xR213a2d6eXRjQjBRVFNBRXlDc1lZWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY1NDM0NTk2MX0; fbsr_124024574287414=d4okoqSIG-fbjXgJKE07737dLXrQkN682RmOZvAdn8M.eyJ1c2VyX2lkIjoiMTAwMDQxMDU2ODc1NDA4IiwiY29kZSI6IkFRQ3ZLZkpVdzZ3WkVaUmhleTRodjFyV05BZ0JlUXM1cVRlVTJnWnZrbjkxOXllN2lfUGM1a2VjUHRIZF9qdy1KS2tDcE9Jb3ZTUmF0SGxDaTZNdzFCODFYdXJ0OEZ4aVZKVGNTMzRLbVFMVHFYVzY5NGU1X0ltcDFZSmdWSVBwLUFwblpJbkRkWWRYSURSSk9oRVZScGNuRVE1MVMwNWtXeFZxZ0EwQzZRN1VsQzcxVTdCLWNDS0haNzk3cU9vYk9yRl9mcHVZdUs3a3Fic1djaU5NVF9TbkszN2kyLVFxalEtei1SanF3bFNONnNxWXJWaUhfbTIzSWJWdUVwZUZxRzYweldoR0NxLUM5TXF5dHNYTGRzM3NNY25IS3Z0Tmc2VzIxRHFpM3poSGQybFNQUS1IR2U1ZERkUWIyS3liZzlYUXNCX3FvemhWOHI3WVBFLVYwUmI3V2s5VEpiMWNaMlBQcEFPaDJRR0lEZyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFKakVxOGZNUmNYQm1sOUpkWkFzcUxqaU9wVGZic2dYYUd6dDZaQUhla0FtV0lUOUdPdWpkSlFjMVlkMFR5SjYwWkF5Mm5PWkFRemtCREUwbU1wdkZ3WDN5cTdkVnppWkNFYjR3NkZQRnlOSVdiY29aQVc1RWEwdjJNOXdxYnd4SXBITkFESTBCZXB5eFg1UU9NN3dtUDhaQWI3NVlKQ04xR213a2d6eXRjQjBRVFNBRXlDc1lZWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY1NDM0NTk2MX0",
				"set-cookie": "csrftoken=7ZyQtU7rsZFsOgvKLjflk0KLMmTC4Chh; Domain=.instagram.com; expires=Sat, 03-Jun-2023 12:35:09 GMT; Max-Age=31449600; Path=/; Secure"
			}
		})
		.then(({ data }) => {
			const user = data.graphql.user
			let result = {
                id: user.id,
                biography: user.biography,
                followers: user.edge_followed_by.count,
                following: user.edge_follow.count,
                fullName: user.full_name,
                highlightCount: user.highlight_reel_count,
                isBusinessAccount: user.is_business_account,
                isRecentUser: user.is_joined_recently,
                accountCategory: user.business_category_name,
                linkedFacebookPage: user.connected_fb_page,
                isPrivate: user.is_private,
                isVerified: user.is_verified,
                profilePicHD: user.profile_pic_url_hd,
                username: user.username,
                postsCount: user.edge_owner_to_timeline_media.count
			}
		resolve(result)
		})
	.catch(reject)
	})
}


function ttdownloader(url){
	return new Promise(async(resolve, reject) => {
		axios.get('https://ttdownloader.com/',{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let token = $('#token').attr('value')
			let config = {
				'url': url,
				'format': '',
				'token': token
			}
		axios('https://ttdownloader.com/query/',{
			method: 'POST',
			data : new URLSearchParams(Object.entries(config)),
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
			})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			resolve({
				nowm: $('div:nth-child(2) > div.download > a').attr('href'),
				wm: $('div:nth-child(3) > div.download > a').attr('href'),
				audio: $('div:nth-child(4) > div.download > a').attr('href')
				})
			})
		})
	.catch(reject)
	})
}

function ssweb (url, device = 'desktop')  {
		return new Promise((resolve, reject) => {
			 const base = 'https://www.screenshotmachine.com'
			 const param = {
			   url: url,
			   device: device,
			   cacheLimit: 0
			 }
			 axios({url: base + '/capture.php',
				  method: 'POST',
				  data: new URLSearchParams(Object.entries(param)),
				  headers: {
					   'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
				  }
			 }).then((data) => {
				  const cookies = data.headers['set-cookie']
				  if (data.data.status == 'success') {
					   axios.get(base + '/' + data.data.link, {
							headers: {
								 'cookie': cookies.join('')
							},
							responseType: 'arraybuffer'
					   }).then(({ data }) => {
							resolve(data)
					   })
				  } else {
					   reject()
				  }
			 }).catch(reject)
		})
   }


module.exports.snapinsta = snapinsta
module.exports.ssweb = ssweb
module.exports.igdl = igdl
module.exports.igstory = igstory
module.exports.igstalk = igstalk
module.exports.ttdownloader = ttdownloader
module.exports.ttdl = ttdl
