const http = require('http')
const https = require('https')

//This class will collect all the datas from the internet
class Network {

    // ONLY FOR HTTP request. Send a GET request from parameter and return an array of content
    getDatasFromHttpLinksToArray(links) {
        var tmp = [];

        //Iterate on each element of the list of websites
        for (var i = 0; i < links.length; ++i) {
            try {
            http.get(links[i], function(res) {
                res.setEncoding('UTF-8');
                res.on('data', function(data) {
                    console.log(data);
                    tmp.push(data);
                });
            });
        } catch (err) {
            console.log('error when getting data from http link : ' + err);        }
        }
        return tmp;
    }

    // ONLY FOR HTTPS request. Send a GET request from parameter and return an array of content
    getDatasFromHttpsLinksToArray(links) {
        var tmp = [];

        //Iterate on each element of the list of websites
        for (var i = 0; i < links.length; ++i) {
            try {
            https.get(links[i], function(res) {
                res.setEncoding('UTF-8');
                res.on('data', function(data) {
                    console.log(data);
                    tmp.push(data);
                });
            });
            } catch (err) {
                console.log('error when getting data from https link : ' + err);
            }
        }
        return tmp;
    }
}

module.exports = Network