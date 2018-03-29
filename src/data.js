//This class contains all the usefull datas to be usable
class Data{
	constructor() {
        this.ArrayWebsites = ['http://www.numerama.com/feed', 'https://news.ycombinator.com/rss', 'http://www.jeuxvideo.com/rss/rss.xml'];
        this.HttpsLinks = [];
        this.HttpLinks = [];
        this.HttpDatas = [];
        this.HttpsDatas = [];
    }

    //Fill HttpLinks and HttpsLinks variables depending on the request type
    separateHttpAndHttps() {
        for (var i = 0; i < this.ArrayWebsites.length; ++i) {
            var tmp = this.ArrayWebsites[i].split(":");
            if (tmp.length == 2) {
            if (tmp[0] == "http")
            this.HttpLinks.push(this.ArrayWebsites[i]);
            else if (tmp[0] == "https")
            this.HttpsLinks.push(this.ArrayWebsites[i]);
            }
        }
    }

    getHttpDatas() {
        return this.HttpDatas;
    }
    getHttpsDatas() {
        return this.HttpsDatas;
    }

    getArrayWebsites(){
        return this.ArrayWebsites;
    };

    getHttpsLinks() {
        return this.HttpsLinks;
    }

    getHttpLinks() {
        return this.HttpLinks;
    }

    setHttpData(tmp) {
        this.HttpDatas = tmp;
    }

    setHttpsData(data) {
        this.HttpsDatas = tmp;
    }
	}
	
module.exports = Data