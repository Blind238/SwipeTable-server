// Source: http://stackoverflow.com/a/979325
// "Sorting an array of JavaScript objects"
var sortBy = function(field, reverse, primer){

    var key = function (x) {return primer ? primer(x[field]) : x[field]};

    return function (a,b) {
        var A = key(a), B = key(b);
        return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];
    }
};

exports.sortBy = sortBy;

// Source: http://davidwalsh.name/javascript-clone from Dojo Toolkit
var clone = function(src) {
    function mixin(dest, source, copyFunc) {
        var name, s, i, empty = {};
        for(name in source){
            // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
            // inherited from Object.prototype.	 For example, if dest has a custom toString() method,
            // don't overwrite it with the toString() method that source inherited from Object.prototype
            s = source[name];
            if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){
                dest[name] = copyFunc ? copyFunc(s) : s;
            }
        }
        return dest;
    }

    if(!src || typeof src != "object" || Object.prototype.toString.call(src) === "[object Function]"){
        // null, undefined, any non-object, or function
        return src;	// anything
    }
    if(src.nodeType && "cloneNode" in src){
        // DOM Node
        return src.cloneNode(true); // Node
    }
    if(src instanceof Date){
        // Date
        return new Date(src.getTime());	// Date
    }
    if(src instanceof RegExp){
        // RegExp
        return new RegExp(src);   // RegExp
    }
    var r, i, l;
    if(src instanceof Array){
        // array
        r = [];
        for(i = 0, l = src.length; i < l; ++i){
            if(i in src){
                r.push(clone(src[i]));
            }
        }
        // we don't clone functions for performance reasons
        //		}else if(d.isFunction(src)){
        //			// function
        //			r = function(){ return src.apply(this, arguments); };
    }else{
        // generic objects
        r = src.constructor ? new src.constructor() : {};
    }
    return mixin(r, src, clone);

};

exports.clone = clone;

var getData = function(){
    return clone(dummyData);
};

exports.getData = getData;

var sortByField = function(data, field, reverse){
    if (isNaN(data[0][field])){
        console.log("SORT: Was not a number");
        data.sort(sortBy(field, reverse, function(a){
            if(a !== undefined){
                return a.toUpperCase();
            }
            return a;
        }));
    }
    else{
        console.log("SORT: Was a number");
        data.sort(sortBy(field, reverse, parseInt));
    }
};

exports.sortByField = sortByField;

var getPage = function(data, page, pageSize, timestamp){
    var result = {};
    var totalItems = data.length;
    var newItems;
    var pages;
    if (timestamp !== undefined){
        result.timestamp = timestamp;
        data = data.filter( function(element){
            return (element.timestamp <= timestamp);
        });
    }
    else{
        result.timestamp = Date.now();
    }

    newItems = totalItems - data.length;

    data = JSON.stringify(data, function(key, value){
      
        if (key === 'timestamp'){
            return undefined;
        }

        return value;
    });

    data = JSON.parse(data);

    pages = Math.ceil(data.length / pageSize);

    console.log('starting slice at' + (((page-1)*pageSize)));
    console.log('ending slice at' + (page*pageSize));
    var subset = data.slice(
        ((page-1)*pageSize),
        page*pageSize
    );

    result.newItems = newItems;
    result.pages = pages;
    result.data = subset;

    return result;
};

exports.getPage = getPage;

var dummyData = [
    {
        "id": 1000,
        "timestamp": 1383848211,
        "some": 239012,
        "demo": "Auburn",
        "dummy": "72226",
        "data": "Maine"
    },
    {
        "id": 1001,
        "timestamp": 1383797425,
        "some": 238821,
        "demo": "Little Rock",
        "dummy": "72730",
        "data": "Arkansas"
    },
    {
        "id": 1002,
        "timestamp": 1383777544,
        "some": 238765,
        "demo": "Harrisburg",
        "dummy": "77848",
        "data": "Pennsylvania"
    },
    {
        "id": 1003,
        "timestamp": 1383748798,
        "some": 239314,
        "demo": "Provo",
        "dummy": "65243",
        "data": "Utah"
    },
    {
        "id": 1004,
        "timestamp": 1383768291,
        "some": 238974,
        "demo": "Jacksonville",
        "dummy": "16810",
        "data": "Florida"
    },
    {
        "id": 1005,
        "timestamp": 1383860819,
        "some": 239514,
        "demo": "Richmond",
        "dummy": "30028",
        "data": "Virginia"
    },
    {
        "id": 1006,
        "timestamp": 1383741045,
        "some": 239503,
        "demo": "Norman",
        "dummy": "83920",
        "data": "Oklahoma"
    },
    {
        "id": 1007,
        "timestamp": 1383770778,
        "some": 239052,
        "demo": "Fort Worth",
        "dummy": "10310",
        "data": "Texas"
    },
    {
        "id": 1008,
        "timestamp": 1383775956,
        "some": 238027,
        "demo": "Wyoming",
        "dummy": "72455",
        "data": "Wyoming"
    },
    {
        "id": 1009,
        "timestamp": 1383761692,
        "some": 238907,
        "demo": "Baton Rouge",
        "dummy": "39487",
        "data": "Louisiana"
    },
    {
        "id": 1010,
        "timestamp": 1383835866,
        "some": 239712,
        "demo": "Carson City",
        "dummy": "45325",
        "data": "Nevada"
    },
    {
        "id": 1011,
        "timestamp": 1383768794,
        "some": 238799,
        "demo": "Augusta",
        "dummy": "67764",
        "data": "Georgia"
    },
    {
        "id": 1012,
        "timestamp": 1383796994,
        "some": 238007,
        "demo": "Birmingham",
        "dummy": "36387",
        "data": "Alabama"
    },
    {
        "id": 1013,
        "timestamp": 1383793783,
        "some": 238622,
        "demo": "Little Rock",
        "dummy": "72009",
        "data": "Arkansas"
    },
    {
        "id": 1014,
        "timestamp": 1383862876,
        "some": 239277,
        "demo": "Jackson",
        "dummy": "77923",
        "data": "Mississippi"
    },
    {
        "id": 1015,
        "timestamp": 1383773744,
        "some": 239282,
        "demo": "Las Vegas",
        "dummy": "11067",
        "data": "Nevada"
    },
    {
        "id": 1016,
        "timestamp": 1383835288,
        "some": 239204,
        "demo": "Frederick",
        "dummy": "38039",
        "data": "Maryland"
    },
    {
        "id": 1017,
        "timestamp": 1383788896,
        "some": 239189,
        "demo": "Birmingham",
        "dummy": "35621",
        "data": "Alabama"
    },
    {
        "id": 1018,
        "timestamp": 1383731291,
        "some": 238833,
        "demo": "West Jordan",
        "dummy": "84895",
        "data": "Utah"
    },
    {
        "id": 1019,
        "timestamp": 1383845333,
        "some": 239952,
        "demo": "Columbia",
        "dummy": "60203",
        "data": "Missouri"
    },
    {
        "id": 1020,
        "timestamp": 1383764205,
        "some": 238020,
        "demo": "Chandler",
        "dummy": "85911",
        "data": "Arizona"
    },
    {
        "id": 1021,
        "timestamp": 1383816509,
        "some": 238667,
        "demo": "Knoxville",
        "dummy": "36804",
        "data": "Tennessee"
    },
    {
        "id": 1022,
        "timestamp": 1383895553,
        "some": 238702,
        "demo": "Montpelier",
        "dummy": "84950",
        "data": "Vermont"
    },
    {
        "id": 1023,
        "timestamp": 1383850731,
        "some": 238104,
        "demo": "Bellevue",
        "dummy": "71078",
        "data": "Nebraska"
    },
    {
        "id": 1024,
        "timestamp": 1383784561,
        "some": 238435,
        "demo": "Cincinnati",
        "dummy": "18851",
        "data": "Ohio"
    },
    {
        "id": 1025,
        "timestamp": 1383833697,
        "some": 238988,
        "demo": "Hillsboro",
        "dummy": "71369",
        "data": "Oregon"
    },
    {
        "id": 1026,
        "timestamp": 1383827224,
        "some": 239519,
        "demo": "Orlando",
        "dummy": "62800",
        "data": "Florida"
    },
    {
        "id": 1027,
        "timestamp": 1383771946,
        "some": 238009,
        "demo": "Kapolei",
        "dummy": "44874",
        "data": "Hawaii"
    },
    {
        "id": 1028,
        "timestamp": 1383747456,
        "some": 239463,
        "demo": "Idaho Falls",
        "dummy": "13101",
        "data": "Idaho"
    },
    {
        "id": 1029,
        "timestamp": 1383755691,
        "some": 238478,
        "demo": "Fairbanks",
        "dummy": "99899",
        "data": "Alaska"
    },
    {
        "id": 1030,
        "timestamp": 1383794647,
        "some": 238056,
        "demo": "Boise",
        "dummy": "80864",
        "data": "Idaho"
    },
    {
        "id": 1031,
        "timestamp": 1383808613,
        "some": 238549,
        "demo": "Lawton",
        "dummy": "38719",
        "data": "Oklahoma"
    },
    {
        "id": 1032,
        "timestamp": 1383856963,
        "some": 238173,
        "demo": "Montgomery",
        "dummy": "35975",
        "data": "Alabama"
    },
    {
        "id": 1033,
        "timestamp": 1383855721,
        "some": 238408,
        "demo": "Jacksonville",
        "dummy": "53051",
        "data": "Florida"
    },
    {
        "id": 1034,
        "timestamp": 1383792023,
        "some": 238371,
        "demo": "Topeka",
        "dummy": "63846",
        "data": "Kansas"
    },
    {
        "id": 1035,
        "timestamp": 1383727566,
        "some": 239300,
        "demo": "Columbus",
        "dummy": "29544",
        "data": "Georgia"
    },
    {
        "id": 1036,
        "timestamp": 1383781092,
        "some": 239951,
        "demo": "Norman",
        "dummy": "56061",
        "data": "Oklahoma"
    },
    {
        "id": 1037,
        "timestamp": 1383760681,
        "some": 238899,
        "demo": "Columbus",
        "dummy": "91557",
        "data": "Georgia"
    },
    {
        "id": 1038,
        "timestamp": 1383784389,
        "some": 239749,
        "demo": "Norman",
        "dummy": "13265",
        "data": "Oklahoma"
    },
    {
        "id": 1039,
        "timestamp": 1383745215,
        "some": 238442,
        "demo": "Pocatello",
        "dummy": "22978",
        "data": "Idaho"
    },
    {
        "id": 1040,
        "timestamp": 1383765146,
        "some": 239235,
        "demo": "Clarksville",
        "dummy": "32581",
        "data": "Tennessee"
    },
    {
        "id": 1041,
        "timestamp": 1383750609,
        "some": 239350,
        "demo": "Anchorage",
        "dummy": "99871",
        "data": "Alaska"
    },
    {
        "id": 1042,
        "timestamp": 1383790848,
        "some": 239992,
        "demo": "Kailua",
        "dummy": "29491",
        "data": "Hawaii"
    },
    {
        "id": 1043,
        "timestamp": 1383767348,
        "some": 239551,
        "demo": "Kansas City",
        "dummy": "56029",
        "data": "Kansas"
    },
    {
        "id": 1044,
        "timestamp": 1383730822,
        "some": 238497,
        "demo": "Baton Rouge",
        "dummy": "52094",
        "data": "Louisiana"
    },
    {
        "id": 1045,
        "timestamp": 1383819406,
        "some": 238388,
        "demo": "Allentown",
        "dummy": "62114",
        "data": "Pennsylvania"
    },
    {
        "id": 1046,
        "timestamp": 1383740304,
        "some": 238148,
        "demo": "Norfolk",
        "dummy": "42006",
        "data": "Virginia"
    },
    {
        "id": 1047,
        "timestamp": 1383788340,
        "some": 239458,
        "demo": "Pocatello",
        "dummy": "37462",
        "data": "Idaho"
    },
    {
        "id": 1048,
        "timestamp": 1383776556,
        "some": 239328,
        "demo": "Portland",
        "dummy": "98434",
        "data": "Oregon"
    },
    {
        "id": 1049,
        "timestamp": 1383731299,
        "some": 239317,
        "demo": "Los Angeles",
        "dummy": "92477",
        "data": "California"
    },
    {
        "id": 1050,
        "timestamp": 1383836640,
        "some": 239391,
        "demo": "Hilo",
        "dummy": "58311",
        "data": "Hawaii"
    },
    {
        "id": 1051,
        "timestamp": 1383849191,
        "some": 238298,
        "demo": "Shreveport",
        "dummy": "35645",
        "data": "Louisiana"
    },
    {
        "id": 1052,
        "timestamp": 1383855852,
        "some": 239061,
        "demo": "Des Moines",
        "dummy": "53668",
        "data": "Iowa"
    },
    {
        "id": 1053,
        "timestamp": 1383777692,
        "some": 239937,
        "demo": "Orlando",
        "dummy": "73418",
        "data": "Florida"
    },
    {
        "id": 1054,
        "timestamp": 1383822450,
        "some": 238542,
        "demo": "Cleveland",
        "dummy": "76118",
        "data": "Ohio"
    },
    {
        "id": 1055,
        "timestamp": 1383806634,
        "some": 239571,
        "demo": "Madison",
        "dummy": "31236",
        "data": "Wisconsin"
    },
    {
        "id": 1056,
        "timestamp": 1383803838,
        "some": 239177,
        "demo": "Allentown",
        "dummy": "93961",
        "data": "Pennsylvania"
    },
    {
        "id": 1057,
        "timestamp": 1383876904,
        "some": 238597,
        "demo": "Philadelphia",
        "dummy": "48174",
        "data": "Pennsylvania"
    },
    {
        "id": 1058,
        "timestamp": 1383780846,
        "some": 239517,
        "demo": "Stamford",
        "dummy": "73916",
        "data": "Connecticut"
    },
    {
        "id": 1059,
        "timestamp": 1383874540,
        "some": 238153,
        "demo": "Pocatello",
        "dummy": "99939",
        "data": "Idaho"
    },
    {
        "id": 1060,
        "timestamp": 1383758366,
        "some": 238626,
        "demo": "Newark",
        "dummy": "66670",
        "data": "Delaware"
    },
    {
        "id": 1061,
        "timestamp": 1383739492,
        "some": 238992,
        "demo": "Frankfort",
        "dummy": "78535",
        "data": "Kentucky"
    },
    {
        "id": 1062,
        "timestamp": 1383824596,
        "some": 239824,
        "demo": "Fayetteville",
        "dummy": "71500",
        "data": "Arkansas"
    },
    {
        "id": 1063,
        "timestamp": 1383816106,
        "some": 238995,
        "demo": "Rutland",
        "dummy": "47973",
        "data": "Vermont"
    },
    {
        "id": 1064,
        "timestamp": 1383843434,
        "some": 239275,
        "demo": "Duluth",
        "dummy": "91598",
        "data": "Minnesota"
    },
    {
        "id": 1065,
        "timestamp": 1383854475,
        "some": 238709,
        "demo": "Bloomington",
        "dummy": "44597",
        "data": "Minnesota"
    },
    {
        "id": 1066,
        "timestamp": 1383807840,
        "some": 239244,
        "demo": "Bowling Green",
        "dummy": "18042",
        "data": "Kentucky"
    },
    {
        "id": 1067,
        "timestamp": 1383872697,
        "some": 239488,
        "demo": "Columbus",
        "dummy": "14274",
        "data": "Ohio"
    },
    {
        "id": 1068,
        "timestamp": 1383830337,
        "some": 238810,
        "demo": "West Valley City",
        "dummy": "69353",
        "data": "Utah"
    },
    {
        "id": 1069,
        "timestamp": 1383816757,
        "some": 239583,
        "demo": "Laramie",
        "dummy": "78338",
        "data": "Wyoming"
    },
    {
        "id": 1070,
        "timestamp": 1383797894,
        "some": 238505,
        "demo": "Allentown",
        "dummy": "26426",
        "data": "Pennsylvania"
    },
    {
        "id": 1071,
        "timestamp": 1383802296,
        "some": 239971,
        "demo": "Provo",
        "dummy": "96813",
        "data": "Utah"
    },
    {
        "id": 1072,
        "timestamp": 1383870643,
        "some": 239500,
        "demo": "Louisville",
        "dummy": "39387",
        "data": "Kentucky"
    },
    {
        "id": 1073,
        "timestamp": 1383815515,
        "some": 238381,
        "demo": "Omaha",
        "dummy": "54395",
        "data": "Nebraska"
    },
    {
        "id": 1074,
        "timestamp": 1383755956,
        "some": 239925,
        "demo": "Metairie",
        "dummy": "53092",
        "data": "Louisiana"
    },
    {
        "id": 1075,
        "timestamp": 1383863606,
        "some": 239425,
        "demo": "Houston",
        "dummy": "59853",
        "data": "Texas"
    },
    {
        "id": 1076,
        "timestamp": 1383831302,
        "some": 239638,
        "demo": "Sterling Heights",
        "dummy": "24519",
        "data": "Michigan"
    },
    {
        "id": 1077,
        "timestamp": 1383741968,
        "some": 238069,
        "demo": "Joliet",
        "dummy": "54409",
        "data": "Illinois"
    },
    {
        "id": 1078,
        "timestamp": 1383886749,
        "some": 239523,
        "demo": "Louisville",
        "dummy": "86481",
        "data": "Kentucky"
    },
    {
        "id": 1079,
        "timestamp": 1383856874,
        "some": 238944,
        "demo": "College",
        "dummy": "99907",
        "data": "Alaska"
    },
    {
        "id": 1080,
        "timestamp": 1383859842,
        "some": 238804,
        "demo": "Nampa",
        "dummy": "74229",
        "data": "Idaho"
    },
    {
        "id": 1081,
        "timestamp": 1383853161,
        "some": 239462,
        "demo": "Montgomery",
        "dummy": "35449",
        "data": "Alabama"
    },
    {
        "id": 1082,
        "timestamp": 1383735698,
        "some": 238160,
        "demo": "New Orleans",
        "dummy": "55820",
        "data": "Louisiana"
    },
    {
        "id": 1083,
        "timestamp": 1383741996,
        "some": 239102,
        "demo": "Great Falls",
        "dummy": "67393",
        "data": "Montana"
    },
    {
        "id": 1084,
        "timestamp": 1383827107,
        "some": 239538,
        "demo": "Springdale",
        "dummy": "71668",
        "data": "Arkansas"
    },
    {
        "id": 1085,
        "timestamp": 1383843304,
        "some": 239563,
        "demo": "Kenosha",
        "dummy": "23537",
        "data": "Wisconsin"
    },
    {
        "id": 1086,
        "timestamp": 1383885012,
        "some": 238096,
        "demo": "Columbus",
        "dummy": "82118",
        "data": "Ohio"
    },
    {
        "id": 1087,
        "timestamp": 1383782753,
        "some": 239813,
        "demo": "Lewiston",
        "dummy": "30990",
        "data": "Maine"
    },
    {
        "id": 1088,
        "timestamp": 1383896426,
        "some": 238692,
        "demo": "Los Angeles",
        "dummy": "95419",
        "data": "California"
    },
    {
        "id": 1089,
        "timestamp": 1383790834,
        "some": 239582,
        "demo": "Green Bay",
        "dummy": "75574",
        "data": "Wisconsin"
    },
    {
        "id": 1090,
        "timestamp": 1383760219,
        "some": 239578,
        "demo": "Lakewood",
        "dummy": "80313",
        "data": "Colorado"
    },
    {
        "id": 1091,
        "timestamp": 1383802367,
        "some": 238824,
        "demo": "Casper",
        "dummy": "58062",
        "data": "Wyoming"
    },
    {
        "id": 1092,
        "timestamp": 1383726299,
        "some": 239593,
        "demo": "Richmond",
        "dummy": "90057",
        "data": "Virginia"
    },
    {
        "id": 1093,
        "timestamp": 1383858576,
        "some": 239244,
        "demo": "Baltimore",
        "dummy": "84643",
        "data": "Maryland"
    },
    {
        "id": 1094,
        "timestamp": 1383800257,
        "some": 239488,
        "demo": "Baltimore",
        "dummy": "36361",
        "data": "Maryland"
    },
    {
        "id": 1095,
        "timestamp": 1383804760,
        "some": 238514,
        "demo": "Bowling Green",
        "dummy": "59829",
        "data": "Kentucky"
    },
    {
        "id": 1096,
        "timestamp": 1383753806,
        "some": 239827,
        "demo": "Austin",
        "dummy": "95193",
        "data": "Texas"
    },
    {
        "id": 1097,
        "timestamp": 1383738213,
        "some": 239210,
        "demo": "Olathe",
        "dummy": "47449",
        "data": "Kansas"
    },
    {
        "id": 1098,
        "timestamp": 1383774422,
        "some": 238275,
        "demo": "Tucson",
        "dummy": "85169",
        "data": "Arizona"
    },
    {
        "id": 1099,
        "timestamp": 1383795340,
        "some": 238312,
        "demo": "Portland",
        "dummy": "45504",
        "data": "Oregon"
    }
];

exports.dummy = dummyData;
