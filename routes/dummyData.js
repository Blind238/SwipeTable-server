var dummyData = [{"id":1,"time":"15/02/13","time2":"04-10-13","location":"09515","location2":"Redwater"},{"id":2,"time":"05/06/14","time2":"28-08-13","location":"2427","location2":"Castelvecchio di Rocca Barbena"},{"id":3,"time":"28/10/13","time2":"04-03-13","location":"75927","location2":"Erlangen"},{"id":4,"time":"17/10/13","time2":"13-04-14","location":"1462","location2":"Green Bay"},{"id":5,"time":"18/10/12","time2":"16-01-13","location":"J7W 2C7","location2":"Campbeltown"},{"id":6,"time":"09/12/12","time2":"06-12-12","location":"01768","location2":"Narbolia"},{"id":7,"time":"18/05/14","time2":"20-02-13","location":"0888DY","location2":"Blenheim"},{"id":8,"time":"19/03/14","time2":"08-08-14","location":"28938-115","location2":"Mores"},{"id":9,"time":"07/12/12","time2":"18-02-14","location":"10011","location2":"Tulsa"},{"id":10,"time":"03/09/13","time2":"16-04-14","location":"9696","location2":"Sedgewick"},{"id":11,"time":"29/08/14","time2":"12-04-13","location":"55557","location2":"Colchester"},{"id":12,"time":"14/01/14","time2":"10-03-13","location":"52536","location2":"Sperlinga"},{"id":13,"time":"23/01/13","time2":"21-06-13","location":"2744HV","location2":"Bolano"},{"id":14,"time":"18/04/14","time2":"06-11-13","location":"8102","location2":"Caramanico Terme"},{"id":15,"time":"10/07/14","time2":"22-07-14","location":"9707","location2":"Hamburg"},{"id":16,"time":"25/01/14","time2":"02-07-13","location":"2226","location2":"Crieff"},{"id":17,"time":"30/09/12","time2":"03-12-12","location":"04367","location2":"Sesto Campano"},{"id":18,"time":"25/07/13","time2":"22-05-13","location":"61511","location2":"Saltcoats"},{"id":19,"time":"14/11/12","time2":"05-09-14","location":"M0R 2T5","location2":"Gonnosfanadiga"},{"id":20,"time":"07/02/14","time2":"02-11-12","location":"73344","location2":"Fort Laird"},{"id":21,"time":"07/01/13","time2":"26-03-14","location":"7464","location2":"Kenosha"},{"id":22,"time":"25/04/13","time2":"28-12-13","location":"84359-335","location2":"Gijón"},{"id":23,"time":"26/10/12","time2":"28-02-13","location":"0375","location2":"Nelson"},{"id":24,"time":"08/02/14","time2":"11-07-13","location":"61019","location2":"Puntarenas"},{"id":25,"time":"04/12/13","time2":"18-12-13","location":"13515","location2":"Montacuto"},{"id":26,"time":"13/11/12","time2":"02-07-13","location":"53155","location2":"Ekeren"},{"id":27,"time":"13/07/13","time2":"12-09-13","location":"37614","location2":"Malderen"},{"id":28,"time":"20/04/14","time2":"26-02-13","location":"Xxxx","location2":"Louisville"},{"id":29,"time":"25/06/13","time2":"13-04-14","location":"3556","location2":"Alcalá de Henares"},{"id":30,"time":"20/11/13","time2":"05-08-14","location":"TQ5L 7AR","location2":"Palagano"},{"id":31,"time":"17/12/13","time2":"17-11-12","location":"30714","location2":"Biloxi"},{"id":32,"time":"27/08/14","time2":"01-02-13","location":"95961","location2":"Frankfurt am Main"},{"id":33,"time":"02/11/12","time2":"31-08-14","location":"21624","location2":"Pergola"},{"id":34,"time":"19/07/13","time2":"11-02-13","location":"Xxxx","location2":"Innisfail"},{"id":35,"time":"21/09/12","time2":"19-11-12","location":"20753-848","location2":"Chattanooga"},{"id":36,"time":"12/04/14","time2":"22-06-14","location":"72293","location2":"Coreglia Antelminelli"},{"id":37,"time":"20/03/14","time2":"13-03-13","location":"70102","location2":"Poggiorsini"},{"id":38,"time":"18/03/13","time2":"30-10-12","location":"98027","location2":"Comblain-au-Pont"},{"id":39,"time":"25/09/12","time2":"13-02-14","location":"64176-373","location2":"Bolano"},{"id":40,"time":"07/05/13","time2":"20-01-14","location":"86939-600","location2":"Emmen"},{"id":41,"time":"20/02/13","time2":"18-09-13","location":"21012","location2":"Wyoming"},{"id":42,"time":"24/06/14","time2":"04-09-13","location":"6190DO","location2":"Anchorage"},{"id":43,"time":"20/09/13","time2":"07-03-14","location":"3076","location2":"Deline"},{"id":44,"time":"18/07/13","time2":"08-05-13","location":"Xxxx","location2":"Cumberland County"},{"id":45,"time":"17/11/12","time2":"12-06-14","location":"Xxxx","location2":"Capestrano"},{"id":46,"time":"03/01/14","time2":"08-07-13","location":"71914","location2":"San Giovanni la Punta"},{"id":47,"time":"20/12/13","time2":"07-11-12","location":"65263","location2":"Torella del Sannio"},{"id":48,"time":"26/01/13","time2":"20-11-13","location":"71718","location2":"Milton Keynes"},{"id":49,"time":"07/07/13","time2":"02-01-13","location":"87771-516","location2":"Halberstadt"},{"id":50,"time":"28/08/14","time2":"21-12-13","location":"71802","location2":"Sorgà"},{"id":51,"time":"15/09/12","time2":"06-08-14","location":"50007","location2":"Curon Venosta/Graun im Vinschgau"},{"id":52,"time":"10/12/13","time2":"10-03-13","location":"68406","location2":"Delft"},{"id":53,"time":"26/03/14","time2":"15-05-13","location":"J8B 7P7","location2":"Prè-Saint-Didier"},{"id":54,"time":"24/04/14","time2":"12-03-13","location":"88094","location2":"Abbateggio"},{"id":55,"time":"19/09/12","time2":"23-07-13","location":"43544-925","location2":"Whitchurch"},{"id":56,"time":"27/04/13","time2":"14-10-13","location":"07296","location2":"Bersillies-lAbbaye"},{"id":57,"time":"02/04/13","time2":"12-02-14","location":"05598","location2":"Jefferson City"},{"id":58,"time":"09/09/14","time2":"12-12-12","location":"12814","location2":"Bierges"},{"id":59,"time":"03/07/13","time2":"03-08-13","location":"36696-402","location2":"Baddeck"},{"id":60,"time":"15/04/13","time2":"05-06-13","location":"L3T 4W6","location2":"Temse"},{"id":61,"time":"11/09/14","time2":"17-01-13","location":"33850-987","location2":"Panketal"},{"id":62,"time":"12/09/14","time2":"29-10-13","location":"20511","location2":"Deschambault"},{"id":63,"time":"13/02/14","time2":"21-07-13","location":"96482","location2":"Asnières-sur-Seine"},{"id":64,"time":"14/10/12","time2":"13-12-12","location":"3385","location2":"Hantes-Wih?ries"},{"id":65,"time":"11/02/13","time2":"11-11-12","location":"14539","location2":"100 Mile House"},{"id":66,"time":"24/08/13","time2":"08-10-12","location":"X1G 4Y3","location2":"Peterhead"},{"id":67,"time":"30/01/14","time2":"24-03-13","location":"83187","location2":"Versailles"},{"id":68,"time":"12/01/14","time2":"26-10-12","location":"0946","location2":"Saint-Pierre"},{"id":69,"time":"06/02/14","time2":"29-12-13","location":"X1Q 6KV","location2":"Wanganui"},{"id":70,"time":"28/12/13","time2":"16-02-14","location":"31690","location2":"Palagianello"},{"id":71,"time":"26/01/13","time2":"26-11-13","location":"42987","location2":"Sneek"},{"id":72,"time":"13/05/13","time2":"08-01-14","location":"48971","location2":"Atlanta"},{"id":73,"time":"22/05/14","time2":"19-11-13","location":"7116","location2":"Turriaco"},{"id":74,"time":"16/05/13","time2":"05-07-13","location":"78242","location2":"Pointe-aux-Trembles"},{"id":75,"time":"09/11/13","time2":"01-04-14","location":"G8A 5MP","location2":"Solre-sur-Sambre"},{"id":76,"time":"24/06/14","time2":"20-03-13","location":"4469VG","location2":"Spy"},{"id":77,"time":"08/08/14","time2":"12-05-14","location":"21584","location2":"Markham"},{"id":78,"time":"18/02/13","time2":"05-03-14","location":"P1Z 7R4","location2":"New Westminster"},{"id":79,"time":"27/05/13","time2":"05-04-13","location":"39346","location2":"Belém"},{"id":80,"time":"17/09/13","time2":"24-10-13","location":"71017","location2":"Loverval"},{"id":81,"time":"11/12/12","time2":"18-05-14","location":"69437","location2":"Kieldrecht"},{"id":82,"time":"16/07/14","time2":"14-09-12","location":"7460","location2":"Salt Lake City"},{"id":83,"time":"09/08/13","time2":"31-10-12","location":"O2 4PZ","location2":"Duncan"},{"id":84,"time":"07/05/14","time2":"10-02-13","location":"68141","location2":"Wijnegem"},{"id":85,"time":"19/04/13","time2":"05-08-13","location":"8197","location2":"Eernegem"},{"id":86,"time":"27/01/13","time2":"18-10-12","location":"84606","location2":"Ciudad Real"},{"id":87,"time":"09/08/13","time2":"12-09-14","location":"16747","location2":"Cleveland"},{"id":88,"time":"31/03/13","time2":"31-03-14","location":"67745","location2":"Aartrijke"},{"id":89,"time":"11/08/14","time2":"23-12-12","location":"5775","location2":"Picinisco"},{"id":90,"time":"23/08/13","time2":"24-01-14","location":"40994-331","location2":"Relegem"},{"id":91,"time":"21/12/13","time2":"21-12-13","location":"76722-169","location2":"Ternitz"},{"id":92,"time":"20/06/14","time2":"19-08-14","location":"03513","location2":"Alençon"},{"id":93,"time":"11/07/13","time2":"13-07-14","location":"84695","location2":"Tsiigehtchic"},{"id":94,"time":"07/07/14","time2":"11-02-13","location":"L3E 2DB","location2":"Ourense"},{"id":95,"time":"16/04/14","time2":"06-06-14","location":"46839","location2":"Mei?en"},{"id":96,"time":"13/02/13","time2":"12-08-13","location":"18367","location2":"Governador Valadares"},{"id":97,"time":"16/04/14","time2":"25-02-14","location":"79027","location2":"Provo"},{"id":98,"time":"27/12/13","time2":"07-05-13","location":"77085","location2":"Saint-Pierre"},{"id":99,"time":"19/03/13","time2":"20-09-12","location":"90860","location2":"Wernigerode"},{"id":100,"time":"07/01/14","time2":"18-10-13","location":"8381","location2":"Wagnel?e"}];

var sort_by = function(field, reverse, primer){

    var key = function (x) {return primer ? primer(x[field]) : x[field]};

    return function (a,b) {
        var A = key(a), B = key(b);
        return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];
    }
};

// Sort by price high to low
//homes.sort(sort_by('price', true, parseInt));

// Sort by city, case-insensitive, A-Z
//homes.sort(sort_by('city', false, function(a){return a.toUpperCase()}));

var sortField = function(data, field, reverse){
    if (isNaN(data[0][field])){
        console.log("SORT: Was not a number");
        data.sort(sort_by(field, reverse, function(a){return a.toUpperCase()}));
    }
    else{
        console.log("SORT: Was a number");
        data.sort(sort_by(field, reverse, parseInt));
    }
};



exports.getAll = function(req,res){
    var data = dummyData.splice();
    if (req.query.sort!== undefined){
        console.log("req.query.sort is " + req.query.sort.field);
    }
    console.log("req.query.p is " + req.query.p);
    console.log("req.query.ts is " + req.query.ts);
    if(req.query.p !== undefined || req.query.ts !== undefined){
        if(req.query.ts === undefined){
            // Send error?
        }
        if(req.query.p === undefined){
            // Send error?
        }
        // Both parameters passed
        //TODO: Validate pagenumber and timestamp
    }

    if (req.query.sort !== undefined){
        if(req.query.sort.field === undefined || req.query.sort.asc === undefined){
            // Send error
        }
        console.log("req.query.sort.field is " + req.query.sort.field);
        console.log("req.query.sort.asc is " + req.query.sort.asc);
        sortField(data, req.query.sort.field, (req.query.sort.asc === 'true'));
        res.header('Access-Control-Allow-Origin', "*");
        res.send(data);
    }

    if(Object.keys(req.query).length === 0){
        // Valid fresh request
        console.log("req.query is {}/empty");
        sortField(data, 'id', true);
        res.header('Access-Control-Allow-Origin', "*");
        res.send(data);
    }
    //TODO: Send error for unvalid request
};

exports.getById = function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    res.send(dummyData[req.params.id - 1]);
};

var sendPage = function (req, res, page, timestamp){

};



