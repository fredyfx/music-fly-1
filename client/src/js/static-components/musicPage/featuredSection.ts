import {MusicEvents} from '../../music/constants/musicEvents.ts'
import {FeaturedContent} from '../../music/service/FeaturedContent.service.ts';

class FeaturedSectionController {
  private contentList: any;
  private contentType: string;
  private header: string;
private isGenreList: boolean;
  private isArtistList: boolean;

  constructor (
    private featuredContent: FeaturedContent,
    private $rootScope: ng.IRootScopeService,
    private $scope: ng.IRootScopeService,
    private musicEvents: MusicEvents
  ) {
    'ngInject';
  }

  $onInit () {
    if (this.contentType === 'artist') {
      this.contentList = this.featuredContent.getArtists();
      this.isArtistList = true;
    }

    if (this.contentType === 'genres') {
      this.contentList = this.featuredContent.getGenres();
      this.isGenreList = true;
    }    
  }

  clickSearch (searchName) {
    this.$rootScope.$broadcast(this.musicEvents.featuredSearch, searchName);
  }

}

export const featuredSection = {
   templateUrl: require('./featuredSection.html'),
   controller: FeaturedSectionController,
   bindings: {
     contentType: '@'
   }
}