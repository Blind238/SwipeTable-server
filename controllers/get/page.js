var helper = require("../../libs/helper");

var getIt = function(req, res, page, pageSize, timestamp){
    var data = helper.getData();
    helper.sortByField(data, 'id', true);

    result = helper.getPage(data, page, pageSize, timestamp);

    res.header({
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json'});
    res.send(result);
};

exports.getIt = getIt;