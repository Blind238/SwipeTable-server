var helper = require("../../libs/helper");

var getIt = function(req, res, pageSize){
    var data = helper.clone(helper.dummy);
    helper.sortByField(data, 'id', true);

    result = helper.getPage(data, 1, pageSize);

    result = {
    	timestamp: 1383821045,
    	data: result
    };

    res.header({
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json'});
    res.send(result);
};

exports.getIt = getIt;