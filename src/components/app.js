angular.module('video-player') 

.component('app', {
	controller : function () {
    this.videos = window.exampleVideoData;
		this.searchResults ;
    this.currentVideo = this.videos[0];
    this.changer = function (ind) {
      this.currentVideo = this.videos[ind]
    }
	},
	templateUrl : 'src/templates/app.html'
});
