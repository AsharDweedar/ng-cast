angular.module('video-player') 

.component('app', {
	controller : function () {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = function ($index) {
      console.log($index,'inside on selectVideo app.js')
      this.currentVideo = this.videos[$index];
    };
    this.searchResults = function () {
    };

	},
  templateUrl : 'src/templates/app.html'
	
});
