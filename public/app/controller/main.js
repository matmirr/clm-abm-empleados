'use strict';

module.exports = (function() {

   angular.module('MainController', [])
    .controller('AbmCtrl', [ '$scope', '$location', function($scope, $location){

      $scope.tab = 1;

      $scope.selectTab = function(setTab) {
        $scope.tab = setTab;
        /* Always return to root (in case a request to root/path has been made) */
        $location.url('');
      };

      $scope.isSelected = function(checkTab){
        return $scope.tab === checkTab;
      };

    } ]);

})();
