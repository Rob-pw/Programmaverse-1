(function (app) {

    function Challenge (instance, injector, rewardService, feedback) {
        
        this.validate = function (challenge, callback) {
            callback(true);
        }

        this.submit = function (challenge) {
            var points = challenge.points;

            this.validate(challenge, function (passes) {
                if (passes) {
                    var awarded = rewardService.award(points, challenge);

                    if (awarded) {
                        feedback.player.xpGained(awarded.points);
                    }
                } else {
                    feedback.challenge.failed(challenge);
                }
            });
        }
    }

    app.injector.mapClass('challengeService', Challenge);
    
})(verse);