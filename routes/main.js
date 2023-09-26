__path = process.cwd()

var { performance } = require('perf_hooks');
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var { performance } = require('perf_hooks');

// Lib
var { runtime, fetchJson } = require('../lib/fetcher')


router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/upload', (req, res) => {
    res.sendFile(__path + '/views/upload.html')
})

// Main Api
// Statistic
router.get('/main/statistic', async (req, res, next) => {
var date = new Date
var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()
var neww = performance.now()
var old = performance.now()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
var json = await (await fetch('https://api.ipify.org/?format=json')).json()
var port = process.env.PORT || 8888 || 5000 || 3000 
    status = {
        status: true,
        memory: ram,
        cpu: cpu,
        port: port,
        ip: json.ip,
        time: `${hour} : ${minute} : ${second}`,        
        speed: `${old - neww}ms`,
        info:{       
            creator: 'KAYZOKUN12'
        }
    }
    res.json(status)
})

// Runtime
router.get('/main/runtime', async (req, res, next) => {
	runtim = {
		status: true,
		runtime: muptime(process.uptime()),
		info:{       
            creator: 'KAYZOKUN12'            
        }
    }
    res.json(runtim)
})


module.exports = router

function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds)
}
