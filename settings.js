const fs = require('fs')

global.creator = 'KAYZOKUN12' 
global.apikey = ["kadteam", "762d101a5a36", "178465472"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
