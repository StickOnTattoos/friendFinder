var path = require("path");

var friends = require("../data/friend.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriendPoints = req.body.scores;
        var pointsArray = [];
        var match = 0;

        for(var i=0; i<friendList.length; i++) {
            var totalDifference = 0

            for(var x=0; x<newFriendPoints.length; x++) {
                totalDifference += (Math.abs(parseInt(friendList[i].scores[x])))
            }

            pointsArray.push(totalDifference);
        }

        for(var i=0; i<pointsArray.length; i++) {
            if(pointsArray[i] <= pointsArray[match]) {
                match = i;
            }
        }

        var bestMatch = friendList[math];

        res.json(bestMatch);

        friendList.push(req.body);
    })
}