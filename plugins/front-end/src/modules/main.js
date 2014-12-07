(function (soma) {
    var App = soma.Application.extend({
        init : function () {
            var UserService = require('./services/userService.js'),
                self = this;

            this.injector.mapClass('userService', UserService);

            var userService = this.injector.getValue('userService');

            userService.registerUser('Bob');

            userService.getUser('Bob', function (err, user) {
                if (err) {
                    throw err;
                }

                self.injector.mapValue('currentUser', user);
            });
        },
        start : function () {
            console.log("Client-side app started.");
        }
    });

    var ReadyPlugin = function(instance) {
      // ready function to add callbacks when the DOM is loaded (https://github.com/ded/domready)
      var ready=function(){function l(b){for(k=1;b=a.shift();)b()}var b,a=[],c=!1,d=document,e=d.documentElement,f=e.doScroll,g="DOMContentLoaded",h="addEventListener",i="onreadystatechange",j="readyState",k=/^loade|c/.test(d[j]);return d[h]&&d[h](g,b=function(){d.removeEventListener(g,b,c),l()},c),f&&d.attachEvent(i,b=function(){/^c/.test(d[j])&&(d.detachEvent(i,b),l())}),f?function(b){self!=top?k?b():a.push(b):function(){try{e.doScroll("left")}catch(a){return setTimeout(function(){ready(b)},50)}b()}()}:function(b){k?b():a.push(b)}}();
      // add the ready function to the prototype of the soma.js application for a direct use
      instance.constructor.prototype.ready = ready;
    };

    if (soma.plugins && soma.plugins.add) {
      soma.plugins.add(ReadyPlugin);
    }

    window.verse = new App();

})(soma);