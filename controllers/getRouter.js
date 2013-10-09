var controllers = require("./get");

exports.getAll = function(req,res){
    console.log("== Routing ==");
    if(req.query.sort!== undefined){
        if(req.query.sort.field !== undefined){
            console.log("req.query.sort.field is " + req.query.sort.field);
        }
        if(req.query.sort.asc !== undefined){
            console.log("req.query.sort.asc is " + req.query.sort.asc);
        }
    }
    console.log("req.query.p is " + req.query.p);
    console.log("req.query.ps is " + req.query.ps);
    console.log("req.query.ts is " + req.query.ts);

    if(req.query.ps !== undefined){
        if(req.query.ts !== undefined){
            // Timestamp means we're either a fresh sorted request
            //   or a page request or a sorted page request.

            if(req.query.sort !== undefined){
                if(req.query.sort.field !== undefined || req.query.sort.asc !== undefined){
                    // Both parameters are required
                    if(req.query.sort.field === undefined || req.query.sort.asc === undefined){
                        // Missing a required parameter
                        res.send(400);
                    }

                    if(req.query.p !== undefined){
                        //TODO: Check if number is a positive int
                        // Sorted page request
                        console.log("=Sorted page request=");
                        controllers.sortedPage.getIt(req, res, req.query.p, req.query.ps, req.query.ts, req.query.sort.field, req.query.sort.asc);
                    }
                    else{
                        // Sorted fresh request
                        console.log("=Sorted fresh request=");
                        controllers.sortedFresh.getIt(req, res, req.query.ps, req.query.ts, req.query.sort.field, req.query.sort.asc);
                    }
                }
            }
            else{
                if(req.query.p === undefined){
                    // Missing page query, not according to spec
                    res.send(400);
                }
                // No sorting, must be a page request
                console.log("=Page request=");
                controllers.page.getIt(req, res, req.query.p, req.query.ps, req.query.ts);
            }
        }
        else{
            // Pagesize without timestamp means a fresh request
            console.log("=Fresh request=");
            controllers.fresh.getIt(req, res, req.query.ps);
        }
    }
    else{
        // Without a pagesize we can't work
        res.send(400);
    }
};

