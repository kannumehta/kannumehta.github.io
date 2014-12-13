// Angular Rails Templates 0.1.3
//
// angular_templates.ignore_prefix: ["templates/"]
// angular_templates.markups: ["erb", "html"]
// angular_templates.htmlcompressor: false

angular.module("templates", []);

(function() {
    'use strict';

    angular
      .module('gradstreet', []);
        
})();
(function() {
    'use strict';

    angular
      .module('gradstreet')
      .controller('KeenDataCollectorController', ['$scope', function($scope) {

          //Init.
          $scope.signupFormVisible = false;
          $scope.user_id = Math.random().toString(36).substring(8);
          $scope.email = "";
          $scope.mobile = "";
          $scope.device_type = WURFL.complete_device_name;
          $scope.form_factor = WURFL.form_factor;
          $scope.signupValidationError = "";
          $scope.signupScucceded = false;
          $scope.signupFailed= false;


      		$scope.client = new Keen({
              projectId: "54875731672e6c689e453631",       // String (required)
              writeKey: "7678424ec5b514dac78e3c468ef970381195366bd1001980196b95eafbbc778a2c3ccb359a1cbea8a2b55165a09b7530325e31938d3b526b946aee76cf346898ab08cbe9ae3a64d88bda7e3036edea11bbad80283c849084452371285a315d5d13052668d449e1b0ae8e7c22aec907c1", // String (required for sending data)
              readKey: "bef1482d75601d58f9cc983fe8b01dad37bb7582a7bc893808430fc6d7e05675f21b41b0a14dc0622aa57ad39c85e67e8e118203fe273d9f5461a6d13ce8f9d00c3f298b487a7fa605fbb7c248680cf137d5abcc0809609252e52fbb2e414ddf17b766a6e91774e913188f7be8fba72f",   // String (required for querying data)
              protocol: "https",                  // String (optional: https | http | auto)
              host: "api.keen.io/3.0",            // String (optional)
              requestType: "jsonp"                // String (optional: jsonp, xhr, beacon)
          });

          $scope.recordClickEvent = function (e) {
              var click = {
                  location: e,
                  user_id: $scope.user_id,
                  device_type : $scope.device_type,
                  form_factor : $scope.form_factor,
                  utm_source : getUTMParameterByName('utm_source'),
                  utm_medium : getUTMParameterByName('utm_medium'),
                  utm_campaign : getUTMParameterByName('utm_campaign'),
                  userIP : ip,
                  keen: {
                      timestamp: new Date().toISOString()
                  }
              };

              // Send it to the "purchases" collection
              $scope.client.addEvent("clicks", click);
              $scope.signupFormVisible = true;
          };

          $scope.recordSignUpEvent = function () {

              if (!$scope.email) {
                $scope.signupFailed= true;
                $scope.signupValidationError = "Email cannot be blank";
              } else if (!$scope.mobile) {
                $scope.signupFailed= true;
                $scope.signupValidationError = "Mobile number cannot be blank";
              } else {

                  $scope.signupFailed= false;

                  var signup = {
                      user_id: $scope.user_id,
                      email: $scope.email,
                      mobile: $scope.mobile,
                      device_type : $scope.device_type,
                      form_factor : $scope.form_factor,
                      utm_source : getUTMParameterByName('utm_source'),
                      utm_medium : getUTMParameterByName('utm_medium'),
                      utm_campaign : getUTMParameterByName('utm_campaign'),
                      userIP : ip,
                      keen: {
                         timestamp: new Date().toISOString()
                      }
                  };

                  // Send it to the "purchases" collection
                  $scope.client.addEvent("signups", signup);
                  $scope.signupScucceded = true;
             }
              
          }

          var getUTMParameterByName = function (name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }

      }]);
        
})();
(function() {
    'use strict';

    angular
      .module('gradstreet')
      .controller('LoginController', ['$scope', function($scope) {
      		$scope.blockVisible = false;
      		$scope.email = "";
      		$scope.password = "";

      		//toggle Login Block
      		$scope.toggleLoginBlockVisibility = function () {
      			$scope.blockVisible = !$scope.blockVisible;
      		};
      }]);
        
})();
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




;
