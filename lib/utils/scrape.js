/**
 * @author Zahir Hadi Athallah <zhirrrstudio@gmail.com>
 * @license MIT
 */

const formData = require("form-data");
const { default: axios, isAxiosError } = require("axios");
const needle = require('needle')
const request = require('request');
const cheerio = require('cheerio')
const scrapy = require('node-scrapy')
const faker = require('faker')
const fetch = require('node-fetch')

const urlworld = 'https://www.worldometers.info/coronavirus/'
const urlip = 'http://ip-api.com/json/'
const url =
  "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query";

const CovidIndo = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(url, {
        params: {
          f: "json",
          where: "(Kasus_Posi <> 0) AND (Provinsi <> 'Indonesia')",
          returnGeometry: false,
          spatialRel: "esriSpatialRelIntersects",
          outFields: "*",
          orderByFields: "Kasus_Posi desc",
          outSR: 102100,
          resultOffset: 0,
          resultRecordCount: 34,
          resultType: "standard",
          cacheHint: true,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          let result = response.data.features;

          resolve(response.data.features);
        } else {
          reject({
            code: response.status,
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const CovidWorld = () => {
   return new Promise(async (resolve,reject) => {
       await axios.get(urlworld)
        .then(html => {
            if(html.status == 200){
                const $ = cheerio.load(html.data)
                let datas = []
                let cases = []
                let lastUpd

                $('.maincounter-number').each((i,e) => {
                    datas.push($(e).text().trim())
                })
                $('.number-table-main').each((i,e) => {
                    cases.push($(e).text().trim())
                })
                lastUpd = $('div[style="font-size:13px; color:#999; margin-top:5px; text-align:center"]').text()

                data = {}
                data.totalCases = datas[0]
                data.recovered = datas[2]
                data.deaths = datas[1]
                data.activeCases = cases[0]
                data.closedCases = cases[1]
                data.lastUpdate = lastUpd.replace('Last updated: ','').replace(', 17:50 GMT','').trim()

                resolve(data)
            }else{
                reject({
                    code: html.status
                })
            }
        })
        .catch(err => {
            reject(err)
        })
   })
}

const IP = (ip) => new Promise((resolve, reject) => {
    needle(urlip + encodeURIComponent(ip), (error, resp, body) => {
        const { status, message, query, country, region, lat, lon, timezone, org, as, city, countryCode, zip } = body
        if (status == 'fail' || message == 'invalid query') {
            reject({
                message: `only ipv6, ${message}`
            })
        } else {
          resolve({
              code: 200,
              message: status,
              ip: query,
              country: country,
              region: region,
              latitude: lat,
              longtitude: lon,
              timezone: timezone,
              org: org,
              as: as,
              city: city,
              countryCode: countryCode,
              zip: zip,
              maps: 'https://www.google.com/maps/@' + lat + ',' + lon
          })
        }
    })
})

const Kodepos = (keywords) => {
    return new Promise(async (resolve, reject) => {
        let postalcode = 'https://carikodepos.com/';
        let url = postalcode+'?s='+keywords;

        await request.get({
            headers: {
                'Accept': 'application/json, text/javascript, */*;',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'Origin': postalcode,
                'Referer': postalcode
            },
            url: url,
        }, function(error, response, body) {
            if (error) return reject(error);

            let $ = cheerio.load(body);
            var search = $('tr');

            if (!search.length) return reject('No result could be found');

            var results = [];
            search.each(function(i) {
                if (i != 0) {
                    var td = $(this).find('td');
                    var result = {};
                    td.each(function(i) {
                        var value = $(this).find('a').html();
                        var key = (i == 0) ? 'province' : (i == 1) ? 'city' : (i == 2) ? 'subdistrict' : (i == 3) ? 'urban' : 'postalcode';

                        result[key] = value;
                    })
                    results.push(result);
                }
            });
            return resolve(results);
        });
    });
};

const Fakename = (country) => new Promise((resolve, reject) => {
    if (!country) { reject('country code not found.') }
    faker.locale = country

    resolve({
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2020-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: faker.internet.password(),
        email: faker.internet.email()
    })
})

const Gempa = () => new Promise((resolve, reject) => {
  axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
  const $ = cheerio.load(response.data)

  const urlElems = $('table.table-hover.table-striped')

  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('tbody')[0]

    if (urlSpan) {
      const urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        Waktu: $(Kapan).text(),
        Lintang: lintang,
        Bujur: bujur,
        Magnitudo: $(Magnitudo).text(),
        Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
		Map: ''
      }
      // We then print the text on to the console
      resolve(hasil);
    }
  }
  }).catch(err => reject(err))
})

async function Joox(query) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(new Date() / 1000)
    axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
      .then(({
        data
      }) => {
        let result = []
        let hasil = []
        let promoses = []
        let ids = []
        data.itemlist.forEach(result => {
          ids.push(result.songid)
        });
        for (let i = 0; i < data.itemlist.length; i++) {
          const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
          promoses.push(
            axios.get(get, {
              headers: {
                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
              }
            })
            .then(({
              data
            }) => {
              const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
              hasil.push({
                lagu: res.msong,
                album: res.malbum,
                penyanyi: res.msinger,
                publish: res.public_time,
                img: res.imgSrc,
                mp3: res.mp3Url
              })

              axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + ids[i] + '&lang=id&country=id&_=' + time)
                .then(({
                  data
                }) => {
                  const lirik = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric
                  const buff = new Buffer.from(lirik, 'base64')
                  const ash = buff.toString('utf-8')
                  result.push({
                    result: ash
                  })
                  Promise.all(promoses).then(() => resolve({
                    status: 200,
                    data: hasil,
                    lirik: result
                  }))
                }).catch(reject)
            }).catch(reject)
          )
        }
      }).catch(reject)
  })
}

const KBBI = (kata) => new Promise((resolve, reject) => {
	try{
		var  model = {
			lema: 'h2',
			arti: ['ol li', 'ul.adjusted-par']
		}
    var kata2 = kata;
		fetch(urlkbbi +kata)
			.then((res) => res.text())
			.then((body) => {
				var log = scrapy.extract(body, model)
				if(log.arti == null){
					model = {
            lema: 'h2',
						arti: ['ul.adjusted-par']
					}
					fetch(urlkbbi + kata2)
						.then((res) => res.text())
						.then((body) => {
							log = scrapy.extract(body, model)
							if(log.arti != null)
								{
                  var kata3 = log.arti.map(s => s.slice(1).split("  ").join(""));
                  resolve({
                    lema: log.lema,
                    arti: kata3
                  })
                }
							else{reject("Arti Tidak Ada Atau IP Terkena Limit");}
						})
				}
				else
        {
          var kata =  log.arti.map(s => s.slice(1).split("  ").join(""));
          resolve({
            lema: log.lema,
            arti: kata
          })
        }
			})
	} catch(err){
		reject(err)
	}
})

const searchRepo = (repo) => {
    return new Promise( async (resolve, reject) => {
        await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
            .then(response => {
                if(response.status == 200){
                    const results = response.data.items
                    
                    data = {}
                    data.code = response.status
                    data.message = "ok"
                    data.totalCount = response.data.total_count
                    data.items = []
                    data.creator = "KAYZOKUN12"

                    if(data.totalCount != 0){
                        results.forEach((res) => {
                            data.items.push({
                                id: res.id,
                                nodeId: res.node_id,
                                nameRepo: res.name,
                                fullNameRepo: res.full_name,
                                url_repo: res.html_url,
                                description: res.description,
                                git_url: res.git_url,
                                ssh_url: res.ssh_url,
                                clone_url: res.clone_url,
                                svn_url: res.svn_url,
                                homepage: res.homepage,
                                stargazers: res.stargazers_count,
                                watchers: res.watchers,
                                forks: res.forks,
                                defaultBranch: res.default_branch,
                                language: res.language,
                                isPrivate: res.private,
                                isFork: res.fork,
                                createdAt: res.created_at,
                                updatedAt: res.updated_at,
                                pushedAt: res.pushed_at,
                                author: {
                                    username: res.owner.login,
                                    id_user: res.owner.id,
                                    avatar_url: res.owner.avatar_url,
                                    user_github_url: res.owner.html_url,
                                    type: res.owner.type,
                                    isSiteAdmin: res.owner.site_admin
                                }
                            })
                        })
                    }else{
                        data.items = "Repositories not found"
                    }

                    resolve(data)
                }else{
                    reject({
                        code: 500,
                        success: false,
                        message: "Server Bermasalah"
                    })
                }
            })
            .catch(err => {
                reject(err)
            })
    })
 }
 
const searchUser = (user) => {
   return new Promise( async (resolve, reject) => {
       await axios.get(`https://api.github.com/users/${user}`)
           .then(response => {
               if(response.status == 200){
                   const results = response.data

                   data = {}
                   data.code = response.status
                   data.message = "ok"
                   data.user = {
                       idUser: results.id,
                       username: results.login,
                       nodeId: results.node_id,
                       avatarUrl: results.avatar_url,
                       gravatarId: results.gravatar_id == '' ? null : results.gravatar_id,
                       githubUrl: results.html_url,
                       type: results.type,
                       isSiteAdmin: results.site_admin,
                       name: results.name,
                       company: results.company,
                       blog: results.blog,
                       email: results.email,
                       hireable: results.hireable,
                       bio: results.bio,
                       publicRepos: results.public_repos,
                       publicGists: results.public_gists,
                       followers: results.followers,
                       following: results.following,
                       createdAt: results.created_at,
                       updatedAt: results.updated_at
                   }

                   data.creator = "KAYZOKUN12"
                   console.log(results)
                   resolve(data)
               }else{
                   reject({
                       code: 500,
                       success: false,
                       message: "Server Bermasalah"
                   })
               }
           })
           .catch(err => {
               reject(err)
           })
   })
}

const shorturl = (url) => {
		return new Promise(async (resolve, reject) => {
			const fd = new formData();
			fd.append("u", url);
			await axios({
				method: "POST",
				url: `https://www.shorturl.at/shortener.php/`,
				data: fd,
				headers: {
					"Content-Type": `multipart/form-data; boundary=${fd._boundary}`
				}
			})
				.then(({ data }) => {
					if (isAxiosError()) throw ('axios error');
					const $ = cheerio.load(data);
					resolve("https://" + $("input#shortenurl").attr("value"));
				}).catch(reject);
		});
	}



module.exports = {
	 CovidIndo, 
	 CovidWorld, 
	 Gempa, 
	 Joox, 
	 KBBI, 
	 IP, 
	 Kodepos, 
	 Fakename, 
     searchRepo,
     searchUser, 
     shorturl
 }

