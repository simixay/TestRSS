const http = require('http')
const https = require('https')

//This class will collect all the datas from the internet
class Network {
    constructor() {
    }
    // ONLY FOR HTTP request. Send a GET request from parameter and return an array of content
    getDatasFromHttpLinksToArray(links) {
        var tmp = [];
        //Iterate on each element of the list of websites
        var completed = 0;
        try {
        for (var i = 0; i < links.length; ++i) {
            let data = '';
            http.get(links[i], function(res) {
                res.setEncoding('UTF-8');
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function (callback) {
                    tmp.push(data);
                    ++completed;
                    // if the iteration is done, then return tmp contaning the list of XMLs
                    if (completed == links.length) {
                        console.log('Returning ' + completed + ' elements from HTTP'); console.log(tmp); 
                        return (tmp);
                    }
                })
            });
        }
    } catch (err) {
        console.log('error');
    }
    }

    // ONLY FOR HTTPS request. Send a GET request from parameter and return an array of content
    getDatasFromHttpsLinksToArray(links) {
        var tmp = [];
        //Iterate on each element of the list of websites
        var completed = 0;
        try {
        for (var i = 0; i < links.length; ++i) {
            let data = '';
            https.get(links[i], function(res) {
                res.setEncoding('UTF-8');
                res.on('data', function(chunk) {
                    data += chunk;
                });
                res.on('end', function() {
                    tmp.push(data);
                    ++completed;
                    // if the iteration is done, then return tmp contaning the list of XMLs
                    if (completed == links.length) {
                        console.log('Returning ' + completed + ' elements from HTTPS');
                        return tmp;
                    }
                })
            });
        }
    } catch (err) {
        console.log('error');
    }
    }
}

module.exports = Network