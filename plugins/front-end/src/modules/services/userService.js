function User (name) {

    var model = {
        name: name,
        scoring : {
            awarded : []
        }
    };

    function totalPoints () {
        var total = 0,
            awarded = model.scoring.awarded;

        for (var i = awarded.length - 1; i >= 0; i -= 1) {
            var currentAward = awarded[i];

            if (currentAward.points > 0) {
                total += currentAward.points;
            }
        }

        return total;
    }

    return {
        name: model.name,
        scoring: {
            total : totalPoints,
            awarded : model.scoring.awarded
        }
    };
};

function UserService () {
    var users = {

    };

    return {
        getUser : function (name, callback) {
            var user = users[name];

            if (user) {
                callback(null, user);  
            } else {
                callback({
                    message: 'No user found by that name'
                }, null);
            }
        },
        registerUser : function (name) {
            var user;

            if (!users[name]) {
                user = new User(name);
            }

            users[name] = user;
        }
    }
}

module.exports = UserService;