angular.module('video-player')

.component('videoPlayer', {
	bindings: {
    video : '<'
	},
	controller : function ($scope) { 
    /*if ($scope.$parent.$ctrl.currentVideo !== undefined){
      
      this.templateUrl = 'src/templates/videoPlayer.html'
      console.log(this.templateUrl)
    } else {
      this.templateUrl = 'src/templates/videoPlayer copy.html';
    }*/
    //console.log($scope.$parent.$ctrl.currentVideo)      
	},
  templateUrl : 'src/templates/videoPlayer.html'
});
