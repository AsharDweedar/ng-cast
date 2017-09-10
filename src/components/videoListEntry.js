angular.module('video-player')
.component('videoListEntry', {
	
  bindings : {
  	video : '<'
  },
  controller : function ($scope) {
		//console.log($scope);
		//this.video = window.exampleVideoData[0]
		//console.log(this.video)
	},
  templateUrl:"src/templates/videoListEntry.html" 
});
