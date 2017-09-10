angular.module('video-player')

.component('search', {
	controller : function ($scope ,youTube ){
		$scope.hex = youTube.search;
		this.result=function(){

		}
	},

	templateUrl: "src/templates/search.html"
  
});

