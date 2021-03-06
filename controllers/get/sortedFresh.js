var helper = require("../../libs/helper");

var getIt = function(req, res, pageSize, timestamp, sortField, sortAsc){
    var data = helper.getData();
    helper.sortByField(data, sortField, (sortAsc === 'true'));

    result = helper.getPage(data, 1, pageSize, timestamp);

    res.header({
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json'});
    res.send(result);
};

exports.getIt = getIt;