angular.module('video-player')
.service('youTube', function(){
		this.search=function(){
			console.log('inside search youtube')
		}
  	/*buildApiRequest('GET',
                '/youtube/v3/search',
                {'maxResults': '5',
                 'part': 'snippet',
                 'q': 'surfing',
                 'type': '',
                 'embeddable' : true,
                 'key' : window.YOUTUBE_API_KEY
             });
*/
     //cb(results)
});
