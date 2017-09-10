angular.module('video-player')
.component('videoList', {
	//templateUrl : 'src/templates/videoList.html',
	bindings: {
		videos: '<'
	},
	controller : function ($scope) {
		//this.$scope = {}
		//$scope.smthng = 'hi'
		//console.log($scope.$ctrl.videos)
		this.onClick = function ($index) {
			console.log($index)
			//call the parent's function "changer"
			//this.eventInChild.emit($index);
		}
	},
	
  templateUrl: 'src/templates/videoList.html'
});
