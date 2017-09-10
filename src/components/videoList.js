angular.module('video-player')
.component('videoList', {
	bindings: {
		videos: '<'
	},
	controller : function ($scope) {
	  this.onClick = function ($index) {
        $scope.$parent.$ctrl.selectVideo($index);
      }
		
	},
	
  templateUrl: 'src/templates/videoList.html'
});
