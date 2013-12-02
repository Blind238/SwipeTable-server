var helper = require("../../libs/helper");

var getIt = function(req, res, pageSize){
    var data = helper.clone(helper.dummy),
    		result;
    helper.sortByField(data, 'id', true);

    if(req.query.demo === 'true'){
	    result = helper.getPage(data, 1, pageSize, 1383821045); // Adding timestamp for the demo.
    }
    else{
  	  result = helper.getPage(data, 1, pageSize);
    }

    res.header({
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json'});
    res.send(result);
};

exports.getIt = getIt;