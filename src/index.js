var Data = require('./data.js');
var Network = require('./network.js');

var _data = new Data();
var _network = new Network();

_data.separateHttpAndHttps();
_data.setHttpData = _network.getDatasFromHttpLinksToArray(_data.getHttpLinks());
_data.setHttpsData = _network.getDatasFromHttpsLinksToArray(_data.getHttpsLinks());
