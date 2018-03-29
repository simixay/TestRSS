var FeedParser = require('feedparser')

class Parser {
  removeUselessData(datas) {
    var tmp = [];
    for (var i = 0; i < datas.length; ++i) {
      var tmp1 = [];
      tmp1.push(datas[i].title);
      tmp1.push(datas[i].description);
      tmp1.push(datas[i].pubDate);

      tmp.push(tmp1);
    }
    return tmp;
  }
}

module.exports = Parser