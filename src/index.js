var Data = require('./data.js');
var Network = require('./network.js');
var Database = require('./database.js');
var Parser = require('./parser.js');

const _data = new Data();
const _network = new Network();
const _db = new Database();
const _parser = new Parser();

//Connect to the db for the first time and get its datas
_db.connect();

//Store the RSS Links from the internet : http or https
_data.separateHttpAndHttps();


//Setters
_data.setHttpData = _network.getDatasFromHttpLinksToArray(_data.getHttpLinks());
_data.setHttpsData = _network.getDatasFromHttpsLinksToArray(_data.getHttpsLinks());

// ! MISSING
// Converting from XML to a RSS data with feedparser


// !Problem
// Asynchronous problem, it displays data before data has been found, i think the problem is due when i get data from http.get in a loop
console.log(_data.getHttpDatas());
console.log(_data.getHttpsDatas());

//Only keep important data such as title and description
var a = _parser.removeUselessData(_data.getHttpDatas());
var b = _parser.removeUselessData(_data.getHttpsDatas());

//Compare and add the only rss data that is not on the db
_db.compare(a,b);

//Push the element to the db
_db.pushRefreshedDatas();