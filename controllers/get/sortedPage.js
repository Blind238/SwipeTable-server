var helper = require("../../libs/helper");

var getIt = function(req, res, page, pageSize, timestamp, sortField, sortAsc){
    var data = helper.clone(helper.dummy);
    helper.sortByField(data, sortField, (sortAsc === 'true'));

    result = helper.getPage(data, page, pageSize);

    res.header('Access-Control-Allow-Origin', "*");
    res.send(result);
};

exports.getIt = getIt;