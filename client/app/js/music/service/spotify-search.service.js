angular.module('musicApp')
  .factory('spotifySearch', ['$http', 'songConstructor', function ($http, songConstructor) {
      var search = {};

      search.makeRequest = function (input) {
        var query = JSON.stringify({queryInput: input})
        this.tracks = [];

        $http({
          data: query,
          url: '/spotify',
          method: 'POST'
        }).then(function success (response) {       
          trackResults = response.data.tracks.items;
          _.map(trackResults, function (each, i) {
            vm.tracks.push(
              new songConstructor(i, each.name, each.album.images[1].url, each.album.name, each.artists[0].name, each.duration_ms, 'spotify', null, each.preview_url, each.external_urls.spotify)
            );
          })
        })
      } 
      return search;
    }])