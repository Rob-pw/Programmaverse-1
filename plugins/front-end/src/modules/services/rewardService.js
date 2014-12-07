(function (app) {

    function RewardService (instance, injector, currentUser) {

        this.award = function (points, awardedFor) {
            if (points > 0) {
                var award = {
                    points: points,
                    awardedFor : awardedFor
                };

                currentUser.scoring.awarded.push(award);

                return award;
            }
        };
    }

    app.injector.mapClass('rewardService', RewardService);

})(verse);