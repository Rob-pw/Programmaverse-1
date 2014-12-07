(function (app) {

    function Template (template, scope, element) {
        this.render = template.render;


    }

    function Feedback (instance, injector) {

    }

    Feedback.prototype.player = (function () {
        return {
            xpGained : function (points) {
                console.log("You win " + points + ", points.");
            }
        }
    })();

    Feedback.prototype.challenge = (function () {
        return {
            failed : function () {
                console.log("You failed the challenge.");
            }
        }
    })();

    app.ready(function () {
        app.injector.mapClass('feedback', Feedback);
    });
})(verse);