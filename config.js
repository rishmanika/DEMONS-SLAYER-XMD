const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "50934856343"
global.nama = "DEV GUEVE"
global.namaowner = "SlncKyami"
global.namaBot = "GUEVE-MD"
global.ch = 'https://whatsapp.com/channel/0029Vb67hDb8vd1Th32R4r1E'
global.status = true
global.foother = "© GUEVE - 2025"
//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "50934856343"
global.ovo = "GUEVE DEV"
global.qris = "https://files.catbox.moe/rc111a.jpg"
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./kyami.jpg'); // Buffer Image
global.thumbnail = 'https://files.catbox.moe/rc111a.jpg'
global.Url = '-'
global.logodana = "https://files.catbox.moe/rc111a.jpg", 
global.logoovo = "https://files.catbox.moe/rc111a.jpg", 
//~~~~~~~~~ Settings panel ~~~~~~~~~//
global.domain = "https://kontol.asy-host.biz.id"
global.apikey = "ptla_7FdYb7TY4L1KFecMoxOrwk3YebVTK4e46wlqky8MrRh"
global.capikey = "ptlc_hd8qUYfm3N3ElODrnlG7qC11xQSGHU4ymfOPV0q8jH6"
global.egg = "15"
global.loc = "1"
//~~~~~~~~~ Settings reply ~~~~~~~~~//
global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = 'SlncKyami'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.pairing = ""

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
