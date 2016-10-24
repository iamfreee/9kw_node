const fs = require('fs')

let api = fs.readFileSync('./test/api_key.txt').toString()

module.exports = {
    api: api,
    image_url: 'http://i.imgur.com/LPaNhyp.png',
    image_base64: "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"
}