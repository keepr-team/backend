var googl = require('goo.gl');

googl.setKey(process.env.GOOGLE_URL_KEY);
googl.getKey();

const shortenUrl = function(req, res, next){
  //SHORTENED URL
  googl.shorten(url)
  .then(function(shortUrl){
    next()
    // res.send({message:"url shortened", data: shortUrl})
  })
  .catch(function(error){
    res.send({message: "shorten error", data: error})
  })
}





module.exports = shortenUrl;