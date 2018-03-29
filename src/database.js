const MongoClient = require('mongodb').MongoClient;

class Database {
    constructor() {
        this.uri = "mongodb+srv://simixay:Password8@clusterrss-esgyo.mongodb.net/test";
        this.collections = [];
    }

    //Connect from a mongodb database with this.uri member
    connect() {
        var tt = this;
        MongoClient.connect(this.uri, function(err, db) {
        if (err) throw err;
        //Looking for a db called test
        var dbo = db.db("test");
        //Looking for a collection named rss and turns it into an array
        dbo.collection("rss").find({}).toArray(function(err, result) {
        if (err) throw err;
        tt.uri = result;
        db.close();
        });
    });
    }

    getDatas() {
        return this.collections;
    }

    //a = http datas
    //b = https datas
    //if a's and b's elements aren't in this.collection => push them
    compare(a, b) {
        for (i in this.collections) {
            for (j in a) {
                if (j == i)
                this.collections.push(j);
            }

            for (k in b) {
                if (k == i)
                this.collections.push(k);
            }
        }
    }

    //Insert this.collection containing the RSS flows into the DB
    pushRefreshedDatas() {
        var tt = this;
        MongoClient.connect(this.uri, function(err, db) {
            if (err) throw err;
            //Looking for a db called test
            var dbo = db.db("test");
            for (var i = 0; i < tt.collections.length; ++i) {
                dbo.collection("rss").insertOne(tt.collections[i],function(err, result) {
                if (err) throw err;
            });
        }
        db.close();
    });
    }
}

module.exports = Database