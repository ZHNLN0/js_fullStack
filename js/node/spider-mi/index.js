const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const url = 'https://m.mi.com/category';
request(url, (err, res) => {
  if(!err) {
    res.setEncodeing('utf-8');
    let html = '';
    res.on('data', (chunk) => {
      html += chunk;
    })
    res.on('end', () => {
      const $ = cheerio.load(html);
      let details = [];
      $('.product').each(function() {
        const imgUrl = $('a .img img', this).attr('src');
        const name = $('a .name', this).text();
        const detail = {
          imgUrl,
          name
        }
        details.push(detail)
      })
    })
  }
})